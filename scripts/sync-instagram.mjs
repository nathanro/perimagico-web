import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchInstagramPosts } from '../lib/instagram.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'data');
const outFile = join(outDir, 'instagram-feed.json');

try {
    mkdirSync(outDir, { recursive: true });
    const posts = await fetchInstagramPosts(6);
    writeFileSync(
        outFile,
        JSON.stringify({ username: 'perimagicooficial', updatedAt: new Date().toISOString(), posts }, null, 2),
        'utf8'
    );
    console.log(`Instagram feed sincronizado: ${posts.length} publicaciones → ${outFile}`);
} catch (error) {
    console.warn('No se pudo sincronizar Instagram en build:', error.message);
    process.exit(0);
}
