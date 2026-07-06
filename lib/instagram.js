/** Obtiene publicaciones recientes de @perimagicooficial vía API pública de Instagram. */
const INSTAGRAM_USERNAME = 'perimagicooficial';
const IG_APP_ID = '936619743392459';

export async function fetchInstagramPosts(limit = 6) {
    const profileUrl = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${INSTAGRAM_USERNAME}`;

    const response = await fetch(profileUrl, {
        headers: {
            'User-Agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'X-IG-App-ID': IG_APP_ID,
            Referer: `https://www.instagram.com/${INSTAGRAM_USERNAME}/`,
        },
    });

    if (!response.ok) {
        throw new Error(`Instagram API respondió ${response.status}`);
    }

    const data = await response.json();
    const edges = data?.data?.user?.edge_owner_to_timeline_media?.edges ?? [];

    return edges.slice(0, limit).map(({ node }) => ({
        shortcode: node.shortcode,
        url: `https://www.instagram.com/p/${node.shortcode}/`,
        img: node.thumbnail_src || node.display_url,
        alt:
            node.edge_media_to_caption?.edges?.[0]?.node?.text?.slice(0, 120) ||
            'Publicación de Perimágico en Instagram',
    }));
}
