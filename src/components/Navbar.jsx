import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Atracciones', path: '/atracciones' },
        { name: 'Precios', path: '/precios' },
        { name: 'Eventos', path: '/eventos' },
        { name: 'Contacto', path: '/contacto' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-4' : 'bg-transparent py-6'}`}>
            <div className="container flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform" style={{ backgroundColor: 'var(--color-primary)' }}>
                        <Rocket size={24} color="#000" />
                    </div>
                    <span className="text-2xl font-black tracking-tighter">PERI <span className="text-secondary" style={{ color: 'var(--color-secondary)' }}>MÁGICO</span></span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-sm font-semibold hover:text-primary transition-colors uppercase tracking-widest"
                            style={{ '--hover-color': 'var(--color-primary)' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/reservaciones" className="btn btn-primary text-sm px-6 py-2.5">
                        RESERVAR AHORA
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full glass-dark border-t border-white/10 py-6 flex flex-col items-center gap-6 animate-fade-in md:hidden">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="text-lg font-bold hover:text-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/reservaciones" className="btn btn-primary w-[80%]" onClick={() => setIsOpen(false)}>
                        RESERVAR AHORA
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
