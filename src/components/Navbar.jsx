import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'ATRACCIONES', path: '#atracciones' },
        { name: 'PRECIOS', path: '#precios' },
        { name: 'CONTACTO', path: '#contacto' },
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
                    <Link to="/" className="flex-shrink-0 flex items-center h-16">
                        <img
                            src="https://piccolomondo.com.mx/wp-content/uploads/2024/01/Recurso-1-e1705974571200.png"
                            alt="Peri Mágico Logo"
                            className="h-full object-contain transform hover:scale-105 transition-transform"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center gap-6 flex-1 justify-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-white text-sm font-bold hover:text-primary transition-colors uppercase tracking-wider whitespace-nowrap"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
                        <a href="https://wa.me/525558182348" target="_blank" rel="noopener noreferrer" className="btn btn-magenta text-sm px-6 py-3 flex items-center gap-2" style={{ backgroundColor: '#25D366', color: 'white' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            {/* Not literal WhatsApp icon, just a phone to represent contact for now, but background is WhatsApp green */}
                            55 5818 2348
                        </a>
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
                            <a
                                key={link.name}
                                href={link.path}
                                className="text-white text-xl font-bold hover:text-primary uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <a href="https://wa.me/525558182348" target="_blank" rel="noopener noreferrer" className="btn w-4/5 text-center mt-4 flex justify-center items-center gap-2" style={{ backgroundColor: '#25D366', color: 'white' }} onClick={() => setIsOpen(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            55 5818 2348
                        </a>
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
