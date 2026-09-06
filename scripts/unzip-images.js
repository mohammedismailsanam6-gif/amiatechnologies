const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const ZIP_PATH = path.join(process.cwd(), 'New folder (3).zip');
const OUT_DIR = path.join(process.cwd(), 'public', 'media');

if (!fs.existsSync(ZIP_PATH)) {
  console.error('ZIP not found at', ZIP_PATH);
  process.exit(1);
}

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

console.log('Extracting', ZIP_PATH, 'to', OUT_DIR);
const zip = new AdmZip(ZIP_PATH);
zip.getEntries().forEach(entry => {
  if (entry.isDirectory) return;
  const name = entry.entryName.split('/').pop();
  const outPath = path.join(OUT_DIR, name);
  fs.writeFileSync(outPath, entry.getData());
  console.log('->', outPath);
});
console.log('Done.');
