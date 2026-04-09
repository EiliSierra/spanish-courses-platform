import * as fs from 'fs'
import * as path from 'path'

const ROOT = path.resolve(__dirname, '..')
const LESSONS_DIR = path.join(ROOT, 'src', 'lib', 'lessons')
const AUDIO_DIR = path.join(ROOT, 'public', 'audio')

/**
 * Unescape \uXXXX sequences from raw TS source text
 */
function unescapeUnicode(text: string): string {
  return text.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex: string) =>
    String.fromCharCode(parseInt(hex, 16))
  )
}

/**
 * Convert a Spanish phrase to the expected audio slug:
 * lowercase, remove punctuation, strip accents, spaces→hyphens
 */
function spanishToSlug(rawText: string): string {
  let slug = unescapeUnicode(rawText).toLowerCase()
  // Remove punctuation
  slug = slug.replace(/[¿¡?!.,;:()"""«»—–']/g, ' ')
  // Normalize accents for filenames
  slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  // Spaces to hyphens
  slug = slug.replace(/\s+/g, '-')
  // Collapse multiple hyphens
  slug = slug.replace(/-+/g, '-')
  // Trim hyphens
  slug = slug.replace(/^-|-$/g, '')
  return slug
}

interface FixResult {
  lessonId: string
  fixes: number
  missing: string[]
}

function fixLessonFile(filePath: string, lessonId: string): FixResult {
  let content = fs.readFileSync(filePath, 'utf-8')

  const phrasesDir = path.join(AUDIO_DIR, lessonId, 'phrases')
  const phrasesExist = fs.existsSync(phrasesDir)
  const existingFiles = new Set<string>()
  if (phrasesExist) {
    fs.readdirSync(phrasesDir).forEach(f => {
      if (f.endsWith('.mp3')) existingFiles.add(f.replace('.mp3', ''))
    })
  }

  // Find the pronunciationChallenges block
  const blockMatch = content.match(/pronunciationChallenges:\s*\[/)
  if (!blockMatch || blockMatch.index === undefined) {
    return { lessonId, fixes: 0, missing: [] }
  }

  // We need to find each entry within the pronunciationChallenges array and fix the audio field
  // Strategy: find each { spanish: '...', ..., audio: '...' } pattern and replace audio value

  let fixes = 0
  const missing: string[] = []

  // Match pattern: spanish: 'VALUE' ... audio: 'VALUE'
  // All strings in these files use single quotes as delimiters
  // The order is always: spanish, pronunciation, english, audio
  const entryRegex = /(\{\s*spanish:\s*')((?:[^'\\]|\\.)*)('\s*,\s*pronunciation:\s*'(?:[^'\\]|\\.)*'\s*,\s*english:\s*'(?:[^'\\]|\\.)*'\s*,\s*audio:\s*')((?:[^'\\]|\\.)*)(')/g

  const newContent = content.replace(entryRegex, (fullMatch, prefix, spanishRaw, middle, audioRaw, suffix) => {
    const expectedSlug = spanishToSlug(spanishRaw)

    if (audioRaw === expectedSlug) {
      // Already correct
      if (!existingFiles.has(expectedSlug)) {
        missing.push(expectedSlug)
      }
      return fullMatch
    }

    // It's a mismatch - fix it
    fixes++
    if (!existingFiles.has(expectedSlug)) {
      missing.push(expectedSlug)
    }
    return prefix + spanishRaw + middle + expectedSlug + suffix
  })

  if (fixes > 0) {
    fs.writeFileSync(filePath, newContent, 'utf-8')
  }

  return { lessonId, fixes, missing }
}

function main() {
  const lessonFiles = fs.readdirSync(LESSONS_DIR)
    .filter(f => /^L\d+\.\d+\.ts$/.test(f))
    .sort((a, b) => {
      const [aL, aS] = a.replace('.ts', '').replace('L', '').split('.').map(Number)
      const [bL, bS] = b.replace('.ts', '').replace('L', '').split('.').map(Number)
      return aL - bL || aS - bS
    })

  let totalFixes = 0
  const allMissing: { lessonId: string; slug: string }[] = []

  console.log('=== Fixing Pronunciation Audio Mismatches ===\n')

  for (const file of lessonFiles) {
    const filePath = path.join(LESSONS_DIR, file)
    const lessonId = file.replace('.ts', '')
    const result = fixLessonFile(filePath, lessonId)

    totalFixes += result.fixes
    result.missing.forEach(slug => allMissing.push({ lessonId, slug }))

    if (result.fixes > 0) {
      console.log(`${lessonId}: ${result.fixes} fixes applied${result.missing.length > 0 ? ` (${result.missing.length} missing audio)` : ''}`)
    } else {
      console.log(`${lessonId}: no changes needed`)
    }
  }

  console.log(`\n=== SUMMARY ===`)
  console.log(`Total fixes applied: ${totalFixes}`)
  console.log(`Missing audio files: ${allMissing.length}`)

  if (allMissing.length > 0) {
    const missingPath = path.join(ROOT, 'scripts', 'missing-pronunciation-audio.txt')
    const lines = allMissing.map(m => `public/audio/${m.lessonId}/phrases/${m.slug}.mp3`)
    fs.writeFileSync(missingPath, lines.join('\n') + '\n')
    console.log(`Missing files list saved to: scripts/missing-pronunciation-audio.txt`)
  }
}

main()
