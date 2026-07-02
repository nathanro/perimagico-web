import { useEffect } from 'react';

/** Animación reveal al entrar en viewport (mockup redesign). */
export const useReveal = () => {
    useEffect(() => {
        const nodes = document.querySelectorAll('.reveal');
        if (!nodes.length) return undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
        );

        nodes.forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    });
};

export default useReveal;
