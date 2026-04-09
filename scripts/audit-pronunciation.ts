import * as fs from 'fs'
import * as path from 'path'

const ROOT = path.resolve(__dirname, '..')
const LESSONS_DIR = path.join(ROOT, 'src', 'lib', 'lessons')
const AUDIO_DIR = path.join(ROOT, 'public', 'audio')

/**
 * Convert a Spanish phrase to the expected audio slug:
 * - lowercase
 * - remove ¿¡?!.,;:()""«»—
 * - strip accents for filename (é→e, á→a, etc.)
 * - spaces → hyphens
 * - collapse multiple hyphens
 * - trim hyphens from edges
 */
/**
 * Unescape \uXXXX sequences from raw TS source text
 */
function unescapeUnicode(text: string): string {
  return text.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) =>
    String.fromCharCode(parseInt(hex, 16))
  )
}

function spanishToSlug(text: string): string {
  // First unescape any \uXXXX sequences from the source
  let slug = unescapeUnicode(text).toLowerCase()
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

interface ChallengeEntry {
  spanish: string
  pronunciation: string
  english: string
  audio: string
  tip?: string
}

interface Mismatch {
  lessonId: string
  index: number
  spanish: string
  currentAudio: string
  expectedSlug: string
  correctFileExists: boolean
  currentFileExists: boolean
}

interface MissingAudio {
  lessonId: string
  spanish: string
  expectedSlug: string
  expectedPath: string
}

function extractPronunciationChallenges(filePath: string): ChallengeEntry[] {
  const content = fs.readFileSync(filePath, 'utf-8')

  // Find the pronunciationChallenges array
  const match = content.match(/pronunciationChallenges:\s*\[([\s\S]*?)\]\s*,?\s*\n\s*\n/m)
    || content.match(/pronunciationChallenges:\s*\[([\s\S]*?)\]\s*,?\s*\n\s*[a-zA-Z]/m)
    || content.match(/pronunciationChallenges:\s*\[([\s\S]*?)\]\s*,/m)

  if (!match) return []

  const arrayContent = match[1]
  const entries: ChallengeEntry[] = []

  // Match each object in the array
  const objectRegex = /\{\s*spanish:\s*'((?:[^'\\]|\\.)*)'\s*,\s*pronunciation:\s*'((?:[^'\\]|\\.)*)'\s*,\s*english:\s*'((?:[^'\\]|\\.)*)'\s*,\s*audio:\s*'((?:[^'\\]|\\.)*)'/g

  let objMatch
  while ((objMatch = objectRegex.exec(arrayContent)) !== null) {
    entries.push({
      spanish: objMatch[1].replace(/\\'/g, "'"),
      pronunciation: objMatch[2],
      english: objMatch[3].replace(/\\'/g, "'"),
      audio: objMatch[4],
    })
  }

  return entries
}

function getLessonId(filename: string): string {
  return filename.replace('.ts', '')
}

function main() {
  const lessonFiles = fs.readdirSync(LESSONS_DIR)
    .filter(f => /^L\d+\.\d+\.ts$/.test(f))
    .sort((a, b) => {
      const [aL, aS] = a.replace('.ts', '').replace('L', '').split('.').map(Number)
      const [bL, bS] = b.replace('.ts', '').replace('L', '').split('.').map(Number)
      return aL - bL || aS - bS
    })

  const allMismatches: Mismatch[] = []
  const allMissing: MissingAudio[] = []
  let totalEntries = 0
  let matchCount = 0

  console.log('=== Pronunciation Audio Audit ===\n')

  for (const file of lessonFiles) {
    const filePath = path.join(LESSONS_DIR, file)
    const lessonId = getLessonId(file)
    const challenges = extractPronunciationChallenges(filePath)

    if (challenges.length === 0) {
      console.log(`${lessonId}: No pronunciationChallenges found (or parse error)`)
      continue
    }

    const phrasesDir = path.join(AUDIO_DIR, lessonId, 'phrases')
    const phrasesExist = fs.existsSync(phrasesDir)

    // Get all existing audio files in the phrases dir
    let existingFiles: Set<string> = new Set()
    if (phrasesExist) {
      const files = fs.readdirSync(phrasesDir)
      files.forEach(f => {
        if (f.endsWith('.mp3')) {
          existingFiles.add(f.replace('.mp3', ''))
        }
      })
    }

    let lessonMismatches = 0

    for (let i = 0; i < challenges.length; i++) {
      const ch = challenges[i]
      totalEntries++
      const expectedSlug = spanishToSlug(ch.spanish)

      if (ch.audio === expectedSlug) {
        matchCount++
        // Check if audio file exists
        if (!existingFiles.has(expectedSlug)) {
          allMissing.push({
            lessonId,
            spanish: ch.spanish,
            expectedSlug,
            expectedPath: `public/audio/${lessonId}/phrases/${expectedSlug}.mp3`,
          })
        }
        continue
      }

      // It's a mismatch
      lessonMismatches++
      const correctFileExists = existingFiles.has(expectedSlug)
      const currentFileExists = existingFiles.has(ch.audio)

      allMismatches.push({
        lessonId,
        index: i,
        spanish: ch.spanish,
        currentAudio: ch.audio,
        expectedSlug,
        correctFileExists,
        currentFileExists,
      })

      // Also check if the correct file is missing
      if (!correctFileExists) {
        allMissing.push({
          lessonId,
          spanish: ch.spanish,
          expectedSlug,
          expectedPath: `public/audio/${lessonId}/phrases/${expectedSlug}.mp3`,
        })
      }
    }

    if (lessonMismatches > 0) {
      console.log(`${lessonId}: ${challenges.length} challenges, ${lessonMismatches} MISMATCHES`)
    } else {
      console.log(`${lessonId}: ${challenges.length} challenges, all OK`)
    }
  }

  console.log('\n=== SUMMARY ===')
  console.log(`Total lessons scanned: ${lessonFiles.length}`)
  console.log(`Total pronunciation entries: ${totalEntries}`)
  console.log(`Matches: ${matchCount}`)
  console.log(`Mismatches: ${allMismatches.length}`)
  console.log(`Missing audio files (including matched): ${allMissing.length}`)

  if (allMismatches.length > 0) {
    console.log('\n=== MISMATCHES DETAIL ===')
    let prevLesson = ''
    for (const m of allMismatches) {
      if (m.lessonId !== prevLesson) {
        console.log(`\n--- ${m.lessonId} ---`)
        prevLesson = m.lessonId
      }
      console.log(`  [${m.index}] spanish: "${m.spanish}"`)
      console.log(`       current audio: "${m.currentAudio}" (file exists: ${m.currentFileExists})`)
      console.log(`       expected slug: "${m.expectedSlug}" (file exists: ${m.correctFileExists})`)
    }
  }

  if (allMissing.length > 0) {
    console.log(`\n=== MISSING AUDIO FILES (${allMissing.length}) ===`)
    for (const m of allMissing) {
      console.log(`  ${m.expectedPath}  (${m.spanish})`)
    }

    // Write missing file list
    const missingPath = path.join(ROOT, 'scripts', 'missing-pronunciation-audio.txt')
    const missingContent = allMissing.map(m => `${m.expectedPath}  # ${m.spanish}`).join('\n')
    fs.writeFileSync(missingPath, missingContent + '\n')
    console.log(`\nMissing files list saved to: scripts/missing-pronunciation-audio.txt`)
  }

  // Output JSON for the fix script
  const fixDataPath = path.join(ROOT, 'scripts', 'pronunciation-fixes.json')
  fs.writeFileSync(fixDataPath, JSON.stringify(allMismatches, null, 2))
  console.log(`Fix data saved to: scripts/pronunciation-fixes.json`)
}

main()
