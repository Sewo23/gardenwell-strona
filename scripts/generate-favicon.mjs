import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';

/** Full-bleed icon for circular crops (Google, iOS, Android). */
const svg = `<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" fill="#1e3f20"/>
  <circle cx="256" cy="256" r="256" fill="#1e3f20"/>
  <text
    x="256"
    y="348"
    text-anchor="middle"
    font-family="Georgia, 'Times New Roman', 'Palatino Linotype', serif"
    font-size="360"
    font-weight="700"
    fill="#d0ded0"
  >g</text>
</svg>`;

const source = Buffer.from(svg);

const outputs = [
	{ file: 'public/favicon.svg', fn: () => writeFile('public/favicon.svg', svg) },
	{ file: 'public/favicon.png', fn: () => sharp(source).png().toFile('public/favicon.png') },
	{ file: 'public/favicon-48.png', fn: () => sharp(source).resize(48, 48).png().toFile('public/favicon-48.png') },
	{ file: 'public/favicon-192.png', fn: () => sharp(source).resize(192, 192).png().toFile('public/favicon-192.png') },
	{
		file: 'public/apple-touch-icon.png',
		fn: () => sharp(source).resize(180, 180).png().toFile('public/apple-touch-icon.png'),
	},
];

for (const { file, fn } of outputs) {
	await fn();
	console.log('Wrote', file);
}
