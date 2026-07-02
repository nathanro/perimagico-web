import { useState, useEffect } from 'react';
import { Phone, ShoppingBag } from 'lucide-react';
import { NAV_LINKS, CONTACT } from '../data/siteContent';
import { TICKETS_BASE_URL, TICKETS_CART_URL } from '../utils/ticketsUrl';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            <div className="promo-bar">
                <div className="wrap">
                    <span>✦ ¡La magia comienza aquí!</span>
                    <a href={`tel:${CONTACT.phoneTel}`}>
                        <Phone size={14} />
                        55 3886 1424
                    </a>
                </div>
            </div>

            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="wrap">
                    <a href="#inicio" className="logo" onClick={closeMenu}>
                        <img src="/images/logo.png" alt="Perimágico" />
                    </a>

                    <nav className="nav-links" aria-label="Principal">
                        {NAV_LINKS.map((link) => (
                            <a key={link.name} href={link.path}>
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="header-actions">
                        <a
                            href={TICKETS_CART_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cart-btn"
                            aria-label="Ver carrito de boletos"
                        >
                            <ShoppingBag size={20} />
                        </a>
                        <a
                            href={TICKETS_BASE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-primary-desktop"
                        >
                            Comprar boletos
                        </a>
                        <button
                            type="button"
                            className={`burger ${menuOpen ? 'open' : ''}`}
                            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            <span />
                        </button>
                    </div>
                </div>
            </header>

            <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
                <a href="#inicio" onClick={closeMenu}>
                    Inicio
                </a>
                {NAV_LINKS.map((link) => (
                    <a key={link.name} href={link.path} onClick={closeMenu}>
                        {link.name}
                    </a>
                ))}
                <a
                    href={TICKETS_BASE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-block"
                    onClick={closeMenu}
                >
                    Comprar boletos
                </a>
            </nav>
        </>
    );
};

export default Navbar;
