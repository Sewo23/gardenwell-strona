import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

await mkdir('src/assets/images', { recursive: true });
await mkdir('public', { recursive: true });

const images = [
	{ file: 'src/assets/images/hero-bg.jpg', width: 1920, height: 1080, color: { r: 30, g: 63, b: 32 } },
	{ file: 'src/assets/images/patio-paving.jpg', width: 1200, height: 800, color: { r: 45, g: 90, b: 39 } },
	{
		file: 'src/assets/images/garden-renovation.jpg',
		width: 1200,
		height: 800,
		color: { r: 60, g: 80, b: 55 },
	},
];

for (const img of images) {
	const svg = `<svg width="${img.width}" height="${img.height}" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="rgb(${img.color.r},${img.color.g},${img.color.b})"/><stop offset="100%" stop-color="rgb(${Math.min(img.color.r + 40, 255)},${Math.min(img.color.g + 50, 255)},${Math.min(img.color.b + 30, 255)})"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>`;
	await sharp(Buffer.from(svg)).jpeg({ quality: 82 }).toFile(img.file);
}

await sharp({
	create: { width: 32, height: 32, channels: 4, background: { r: 30, g: 63, b: 32, alpha: 1 } },
})
	.png()
	.toFile('public/favicon.png');

console.log('Images generated.');
