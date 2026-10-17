// Builds 1200x630 JPEG social-preview images (public/og/<slug>.jpg) from the page images in OG_SOURCES.
// JPEG because some platforms (LinkedIn, older Viber/Skype) do not show WebP previews.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const OG_SOURCES = {
  home: ['home/aesthlos-all-hero', 'centre'],
  ourphilosophy: ['shared/og-ourphilosophy', 'centre'],
  thegreekhoneys: ['thegreekhoneys/honeys-square', 'centre'],
  thecompositions: ['thecompositions/header', 'west'],
  honeycollection: ['honeycollection/video-poster', 'centre'],
  contact: ['contact/greek-honey', 'centre'],
  'copy-of-the-composition-of-earth': ['products/infinity', 'centre'],
  compositionofearth: ['products/earth', 'centre'],
  compositionofwater: ['products/water', 'centre'],
  compositionoffire: ['products/fire', 'centre'],
  compositionofair: ['products/air', 'centre'],
  compositionofaether: ['products/aether', 'centre'],
  aesthloswildoakhoney: ['honeys/wild-oak-honey', 'centre'],
  aesthlosforesthoney: ['honeys/forest-honey', 'centre'],
};
fs.mkdirSync(path.join(root, 'public/og'), { recursive: true });
for (const [slug, [src, pos]] of Object.entries(OG_SOURCES)) {
  await sharp(path.join(root, 'public/images', src + '.webp'))
    .resize(1200, 630, { fit: 'cover', position: pos })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(root, 'public/og', slug + '.jpg'));
}
console.log('og images:', Object.keys(OG_SOURCES).length);
