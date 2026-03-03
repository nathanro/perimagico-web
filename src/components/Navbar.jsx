import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'ATRACCIONES', path: '/atracciones' },
        { name: 'REGLAMENTO', path: '/reglamento' },
        { name: 'PRECIOS', path: '/precios' },
        { name: 'MEMBRESÍA', path: '/membresia' },
        { name: 'EVENTOS Y GRUPOS', path: '/eventos' },
        { name: 'PREGUNTAS FAQ', path: '/faq' },
        { name: 'CONTACTO', path: '/contacto' },
    ];

    return (
        <div className="fixed w-full z-50">
            {/* Top Banner (Azul Baby / Green equivalent) */}
            <div className="bg-primary text-black text-center font-bold text-sm py-2 tracking-wide uppercase" style={{ backgroundColor: 'var(--color-primary)' }}>
                ¡Diversión y magia familiar todos los fines de semana!
            </div>

            {/* Main Navbar (Black) */}
            <nav className="bg-black py-4 border-b-4 border-secondary" style={{ borderBottomColor: 'var(--color-secondary)' }}>
                <div className="container flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <div className="bg-white rounded-xl p-2 font-black text-2xl leading-none text-center border-4 border-white transform -rotate-2 hover:rotate-0 transition-transform">
                            <span className="block text-black">PERI</span>
                            <span className="block text-magenta" style={{ color: 'var(--color-accent-magenta)' }}>MÁGICO</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center gap-6 flex-1 justify-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-white text-xs font-bold hover:text-primary transition-colors uppercase tracking-wider whitespace-nowrap"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
                        <Link to="/tour-virtual" className="btn btn-outline-yellow text-xs px-4 py-2" style={{ borderColor: 'var(--color-primary)', color: 'var(--color-primary)' }}>
                            Tour Virtual
                        </Link>
                        <Link to="/reservaciones" className="btn btn-magenta text-xs px-6 py-3">
                            Comprar Boletos
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="xl:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-black py-6 flex flex-col items-center gap-6 border-t-4 border-magenta xl:hidden shadow-2xl">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className="text-white text-xl font-bold hover:text-primary uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link to="/reservaciones" className="btn btn-magenta w-4/5 text-center mt-4" onClick={() => setIsOpen(false)}>
                            Comprar Boletos
                        </Link>
                    </div>
                )}
            </nav>
            {/* Color ribbon accent under nav */}
            <div className="h-3 w-full flex">
                <div className="h-full flex-1" style={{ backgroundColor: 'var(--color-primary)' }} />
                <div className="h-full flex-1" style={{ backgroundColor: 'var(--color-secondary)' }} />
                <div className="h-full flex-1" style={{ backgroundColor: 'var(--color-accent-orange)' }} />
                <div className="h-full flex-1" style={{ backgroundColor: 'var(--color-accent-magenta)' }} />
            </div>
        </div>
    );
};

export default Navbar;
