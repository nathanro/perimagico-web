import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Phone, ShoppingBag } from 'lucide-react';
import { TICKETS_BASE_URL, TICKETS_CART_URL } from '../utils/ticketsUrl';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Bloquear scroll del body cuando el menú móvil está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const navLinks = [
        { name: 'Galería', path: '#feed-instagram' },
        { name: 'Boletos', path: '#boletos' },
        { name: 'Juegos', path: '#juegos-atracciones' },
        { name: 'Cumpleaños', path: '#cumpleanos' },
        { name: 'Restaurante', path: '#restaurante' },
        { name: 'Contacto', path: '#contacto' },
    ];

    return (
        <div className="fixed w-full z-50 flex flex-col">
            {/* Top Promo Banner */}
            <div className="bg-brandcyan text-white font-black text-xs md:text-sm py-2 tracking-widest uppercase shadow-md relative z-10">
                <div className="container flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                        <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-ping shrink-0"></span>
                        <span>¡LA MAGIA COMIENZA AQUÍ!</span>
                    </div>
                    <a
                        href="tel:+525538861424"
                        className="flex items-center gap-1.5 hover:text-secondary transition-colors shrink-0"
                        aria-label="Llamar a Perimágico"
                    >
                        <Phone size={13} />
                        <span>55 3886 1424</span>
                    </a>
                </div>
            </div>

            {/* Main Navbar (Solid Black) */}
            <nav className={`bg-black/95 backdrop-blur-sm border-b-2 border-primary/20 transition-all duration-300 ${isScrolled ? 'py-1 shadow-lg' : 'py-3'}`}>
                <div className="container flex justify-between items-center gap-4">
                    
                    {/* Left: Logo */}
                    <div className="flex-shrink-0">
                        <a href="#top" className="flex items-center h-14 md:h-16 hover:scale-105 transition-transform">
                            <img
                                src="/images/logo.png"
                                alt="Perimágico Logo"
                                className="h-full object-contain"
                            />
                        </a>
                    </div>

                    {/* Middle: Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-wrap justify-center flex-1 ml-4">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.path}
                                className="text-white text-sm font-black hover:text-secondary hover:scale-115 transition-all uppercase tracking-wide relative group"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Right: CTA and Mobile Menu Toggle */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        <a
                            href={TICKETS_CART_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-white/30 text-white hover:border-secondary hover:text-secondary transition-colors"
                            aria-label="Ver carrito de boletos"
                        >
                            <ShoppingBag size={20} />
                        </a>

                        <div className="hidden md:flex items-center">
                            <a href={TICKETS_BASE_URL} target="_blank" rel="noopener noreferrer" className="bg-primary text-white border-2 border-primary px-6 py-2.5 rounded-full font-black text-sm hover:bg-transparent hover:text-primary transition-all uppercase tracking-wider shadow-md hover:scale-105">
                                Comprar boletos
                            </a>
                        </div>
                        
                        {/* Hamburger Menu (Always visible for mobile, or when screen is small) */}
                        <button className="text-white p-2 hover:text-secondary hover:scale-105 transition-all lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                            <Menu size={32} strokeWidth={2} />
                        </button>
                    </div>
                    
                </div>
            </nav>

            {/* Overlay Navigation Menu (Mobile) — portal para evitar solapamiento con hero/horarios */}
            {createPortal(
                <div
                    aria-hidden={!isOpen}
                    className={`fixed inset-0 z-[9999] bg-black flex flex-col transition-transform duration-300 ease-in-out lg:hidden ${
                        isOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
                    }`}
                >
                    <div className="flex justify-between items-center p-6 border-b border-white/10 shrink-0">
                        <img
                            src="/images/logo.png"
                            alt="Perimágico Logo"
                            className="h-12 object-contain"
                        />
                        <button
                            type="button"
                            className="text-white p-2 hover:text-secondary transition-colors"
                            onClick={() => setIsOpen(false)}
                            aria-label="Cerrar menú"
                        >
                            <X size={40} strokeWidth={2} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto overscroll-contain px-8 py-10">
                        <nav className="flex flex-col gap-6 w-full max-w-md mx-auto">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.path}
                                    className="text-white text-3xl font-black uppercase tracking-wide hover:text-secondary transition-colors text-left py-1"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}

                            <a
                                href={TICKETS_BASE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary text-white w-full py-4 rounded-full font-black text-xl text-center hover:brightness-110 transition-all uppercase tracking-widest shadow-lg mt-4"
                                onClick={() => setIsOpen(false)}
                            >
                                Comprar boletos
                            </a>
                        </nav>
                    </div>
                </div>,
                document.body
            )}
            
        </div>
    );
};

export default Navbar;
