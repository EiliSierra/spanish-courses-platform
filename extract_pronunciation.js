const fs = require('fs');
const path = require('path');

const lessonsDir = path.join(__dirname, 'src/lib/lessons');
const files = fs.readdirSync(lessonsDir)
  .filter(f => f.match(/^L\d+\.\d+\.ts$/) && !f.includes('.F.'))
  .sort((a, b) => {
    const [aL, aS] = a.replace('.ts', '').substring(1).split('.').map(Number);
    const [bL, bS] = b.replace('.ts', '').substring(1).split('.').map(Number);
    return aL - bL || aS - bS;
  });

const results = [];

function decodeUnicodeEscapes(str) {
  return str.replace(/\u005cu([0-9a-fA-F]{4})/g, (_, code) =>
    String.fromCharCode(parseInt(code, 16))
  );
}

for (const file of files) {
  const content = fs.readFileSync(path.join(lessonsDir, file), 'utf8');
  const lesson = file.replace('.ts', '');

  const match = content.match(/pronunciationChallenges:\s*\[([\s\S]*?)\],/);
  if (!match) continue;

  const block = match[1];
  const entries = [...block.matchAll(/\{[^}]+\}/g)];

  for (const entry of entries) {
    const spanishMatch = entry[0].match(/spanish:\s*'(.*?)'/);
    const audioMatch = entry[0].match(/audio:\s*'(.*?)'/);

    if (spanishMatch && audioMatch) {
      const spanish = decodeUnicodeEscapes(spanishMatch[1]);
      const audio = audioMatch[1];
      const audioPath = path.join(__dirname, 'public', 'audio', lesson, 'phrases', audio + '.mp3');
      const exists = fs.existsSync(audioPath);

      if (!exists) {
        results.push({ lesson, spanish, audio, exists: false });
      }
    }
  }
}

const outPath = path.join(__dirname, 'pronunciation_missing.json');
fs.writeFileSync(outPath, JSON.stringify(results, null, 2), 'utf8');
console.log('Total missing: ' + results.length);
console.log('Saved to: ' + outPath);
