import { fetchInstagramPosts } from '../lib/instagram.js';

/** Feed en vivo — imágenes servidas desde /images/instagram/ (build) o proxy. */
export default async function handler(_req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');

    try {
        const posts = await fetchInstagramPosts(6).then((items) =>
            items.map(({ shortcode, url, img, alt }) => ({
                shortcode,
                url,
                img,
                proxyImg: `/api/instagram-image?shortcode=${shortcode}`,
                alt,
            }))
        );

        res.status(200).json({ username: 'perimagicooficial', posts });
    } catch (error) {
        res.status(502).json({
            error: 'No se pudo cargar el feed de Instagram',
            message: error.message,
        });
    }
}
