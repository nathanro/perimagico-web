import {
    fetchInstagramPosts,
    fetchInstagramImageBytes,
    fetchRemoteImageUrl,
} from '../lib/instagram.js';

/** Proxy de imagen — Instagram CDN bloquea hotlink desde el navegador. */
export default async function handler(req, res) {
    const shortcode = req.query?.shortcode;
    const remoteUrl = req.query?.url;

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate=604800');

    try {
        const sourceUrl = remoteUrl || (shortcode ? await fetchRemoteImageUrl(shortcode) : null);

        if (!sourceUrl) {
            res.status(400).json({ error: 'Falta shortcode o url' });
            return;
        }

        const { buffer, contentType } = await fetchInstagramImageBytes(sourceUrl);
        res.setHeader('Content-Type', contentType);
        res.status(200).send(buffer);
    } catch (error) {
        res.status(502).json({
            error: 'No se pudo obtener la imagen',
            message: error.message,
        });
    }
}
