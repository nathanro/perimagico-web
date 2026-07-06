import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { fetchInstagramPosts, fetchInstagramImageBytes } from '../lib/instagram.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'data');
const imgDir = join(root, 'public', 'images', 'instagram');
const outFile = join(outDir, 'instagram-feed.json');

try {
    mkdirSync(outDir, { recursive: true });
    mkdirSync(imgDir, { recursive: true });

    const posts = await fetchInstagramPosts(6);

    for (const post of posts) {
        try {
            const { buffer } = await fetchInstagramImageBytes(post.remoteImg);
            const filePath = join(imgDir, `${post.shortcode}.jpg`);
            writeFileSync(filePath, buffer);
        } catch (error) {
            console.warn(`No se pudo descargar ${post.shortcode}:`, error.message);
        }
    }

    const publicPosts = posts.map(({ shortcode, url, img, alt }) => ({
        shortcode,
        url,
        img,
        alt,
    }));

    writeFileSync(
        outFile,
        JSON.stringify(
            {
                username: 'perimagicooficial',
                updatedAt: new Date().toISOString(),
                posts: publicPosts,
            },
            null,
            2
        ),
        'utf8'
    );

    console.log(
        `Instagram feed sincronizado: ${publicPosts.length} publicaciones → ${outFile}`
    );
} catch (error) {
    console.warn('No se pudo sincronizar Instagram en build:', error.message);
    process.exit(0);
}
