// Converts the original Wix downloads (archive/media, archive/files, archive/video)
// into web-ready assets under public/. Re-run after replacing an original.
//   node scripts/optimize-media.mjs [sourceDir]
// sourceDir defaults to ./archive (the local folder layout created by download-wix.ps1).
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { mediaMap, fileMap, videoMap } from './media-map.mjs';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const src = path.resolve(process.argv[2] ?? path.join(root, 'archive'));
const pub = path.join(root, 'public');
const manifest = {};
let missing = 0;

for (const [id, { out, maxW }] of Object.entries(mediaMap)) {
  const input = path.join(src, 'media', id);
  if (!fs.existsSync(input)) { console.warn('missing', id); missing++; continue; }
  const dest = path.join(pub, 'images', out + '.webp');
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  const img = sharp(input, { limitInputPixels: false }).rotate();
  const meta = await img.metadata();
  const scale = Math.min(1, maxW / Math.max(meta.width, meta.height));
  const w = Math.round(meta.width * scale);
  const h = Math.round(meta.height * scale);
  await img.resize(w, h).webp({ quality: 82, alphaQuality: 90, effort: 5 }).toFile(dest);
  manifest[id] = { src: '/images/' + out + '.webp', width: w, height: h };
  console.log(out.padEnd(44), `${meta.width}x${meta.height} -> ${w}x${h}`, Math.round(fs.statSync(dest).size / 1024) + 'KB');
}

for (const [id, name] of Object.entries(fileMap)) {
  const input = path.join(src, 'files', id);
  if (!fs.existsSync(input)) { console.warn('missing', id); missing++; continue; }
  fs.mkdirSync(path.join(pub, 'files'), { recursive: true });
  fs.copyFileSync(input, path.join(pub, 'files', name));
}
for (const [id, name] of Object.entries(videoMap)) {
  const input = path.join(src, 'video', id);
  if (!fs.existsSync(input)) { console.warn('missing', id); missing++; continue; }
  fs.mkdirSync(path.join(pub, 'video'), { recursive: true });
  fs.copyFileSync(input, path.join(pub, 'video', name));
}

fs.mkdirSync(path.join(root, 'src', 'content'), { recursive: true });
// keyed by Wix file id ("~" written as "_"), used by src/lib/media.ts
fs.writeFileSync(path.join(root, 'src', 'content', 'media-index.json'), JSON.stringify(manifest, null, 2));
console.log(`done, ${Object.keys(manifest).length} images, ${missing} missing`);
