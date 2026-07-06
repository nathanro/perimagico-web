/** Obtiene publicaciones recientes de @perimagicooficial vía API pública de Instagram. */
const INSTAGRAM_USERNAME = 'perimagicooficial';
const IG_APP_ID = '936619743392459';

const IG_HEADERS = {
    'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'X-IG-App-ID': IG_APP_ID,
    Referer: `https://www.instagram.com/${INSTAGRAM_USERNAME}/`,
};

export async function fetchInstagramPosts(limit = 6) {
    const profileUrl = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${INSTAGRAM_USERNAME}`;

    const response = await fetch(profileUrl, { headers: IG_HEADERS });

    if (!response.ok) {
        throw new Error(`Instagram API respondió ${response.status}`);
    }

    const data = await response.json();
    const edges = data?.data?.user?.edge_owner_to_timeline_media?.edges ?? [];

    return edges.slice(0, limit).map(({ node }) => {
        const shortcode = node.shortcode;
        const remoteImg = node.display_url || node.thumbnail_src;

        return {
            shortcode,
            url: `https://www.instagram.com/p/${shortcode}/`,
            remoteImg,
            img: `/images/instagram/${shortcode}.jpg`,
            alt:
                node.edge_media_to_caption?.edges?.[0]?.node?.text?.slice(0, 120) ||
                'Publicación de Perimágico en Instagram',
        };
    });
}

/** Descarga bytes de imagen desde CDN de Instagram (solo server-side). */
export async function fetchInstagramImageBytes(remoteUrl) {
    const response = await fetch(remoteUrl, { headers: IG_HEADERS });

    if (!response.ok) {
        throw new Error(`CDN respondió ${response.status}`);
    }

    const contentType = response.headers.get('content-type') || 'image/jpeg';
    const buffer = Buffer.from(await response.arrayBuffer());

    return { buffer, contentType };
}

/** URL remota de un post por shortcode (consulta perfil). */
export async function fetchRemoteImageUrl(shortcode) {
    const posts = await fetchInstagramPosts(12);
    const post = posts.find((item) => item.shortcode === shortcode);
    if (!post?.remoteImg) {
        throw new Error('Publicación no encontrada');
    }
    return post.remoteImg;
}

export { IG_HEADERS, INSTAGRAM_USERNAME };
