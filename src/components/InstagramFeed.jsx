import { useEffect, useState } from 'react';
import { SOCIAL } from '../data/siteContent';

const FALLBACK_FEED = '/data/instagram-feed.json';

const InstagramFeed = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        const loadFeed = async () => {
            try {
                const live = await fetch('/api/instagram-feed');
                if (live.ok) {
                    const data = await live.json();
                    if (!cancelled && data.posts?.length) {
                        setPosts(data.posts);
                        return;
                    }
                }
            } catch {
                // Fallback al JSON generado en build
            }

            try {
                const cached = await fetch(FALLBACK_FEED);
                if (cached.ok) {
                    const data = await cached.json();
                    if (!cancelled) setPosts(data.posts ?? []);
                }
            } catch {
                if (!cancelled) setPosts([]);
            }
        };

        loadFeed().finally(() => {
            if (!cancelled) setLoading(false);
        });

        return () => {
            cancelled = true;
        };
    }, []);

    if (loading) {
        return (
            <div className="gallery-grid reveal in" aria-busy="true" aria-label="Cargando galería de Instagram">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="gallery-skeleton" aria-hidden="true" />
                ))}
            </div>
        );
    }

    if (!posts.length) {
        return (
            <p className="gallery-empty reveal in">
                Visita{' '}
                <a href={SOCIAL.instagram} target="_blank" rel="noreferrer">
                    {SOCIAL.instagramHandle}
                </a>{' '}
                para ver las publicaciones más recientes.
            </p>
        );
    }

    return (
        <div className="gallery-grid reveal in">
            {posts.map((post) => (
                <a
                    key={post.shortcode}
                    href={post.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={post.alt}
                >
                    <img src={post.img} alt={post.alt} loading="lazy" referrerPolicy="no-referrer" />
                </a>
            ))}
        </div>
    );
};

export default InstagramFeed;
