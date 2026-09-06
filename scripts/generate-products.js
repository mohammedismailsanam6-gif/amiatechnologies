// scripts/generate-products.js
// Scans public/media for image files and generates a basic src/data/products.json
// Usage: npm run import-images (to extract ZIP) then
//        node scripts/generate-products.js

const fs = require('fs');
const path = require('path');

const mediaDir = path.join(process.cwd(), 'public', 'media');
const outFile = path.join(process.cwd(), 'src', 'data', 'products.json');

if (!fs.existsSync(mediaDir)) {
  console.error('media directory not found. Run npm run import-images to extract the ZIP first.');
  process.exit(1);
}

const files = fs.readdirSync(mediaDir).filter(f => /\.(jpe?g|png|webp|svg)$/i.test(f));

function titleCase(s){
  return s.split(/[-_\s]+/).map(w=> w.charAt(0).toUpperCase()+w.slice(1)).join(' ')
}

const products = files.map((filename, idx) => {
  const name = filename.replace(/\.(jpe?g|png|webp|svg)$/i, '');
  const parts = name.split(/[-_]/);
  // Heuristic: first token might be brand
  let brand = parts[0];
  if (brand.length <= 2 && parts.length > 1) brand = parts[1];
  brand = brand.replace(/\d+$/,'');
  brand = titleCase(brand);
  const model = titleCase(parts.slice(1).join(' ')) || titleCase(parts.join(' '));
  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g,'');
  const id = 'p' + (1000 + idx);
  return {
    id,
    brand: brand || 'Generic',
    model: model || titleCase(name),
    category: 'Uncategorized',
    sku: slug.toUpperCase().slice(0,20),
    description: `${brand} ${model} — product supplied by Amia Technologies. Update fields in src/data/products.json as needed.`,
    image: filename
  }
});

fs.writeFileSync(outFile, JSON.stringify(products, null, 2), 'utf8');
console.log('Wrote', outFile, 'with', products.length, 'entries.');
