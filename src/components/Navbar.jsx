import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Album', path: '#feed-instagram' },
        { name: 'Juegos', path: '#juegos-atracciones' },
        { name: 'Cumpleaños', path: '#cumpleanos' },
        { name: 'Restaurante', path: '#restaurante' },
        { name: 'Contacto', path: '#contacto' },
    ];

    return (
        <div className="fixed w-full z-50 flex flex-col">
            {/* Top Promo Banner (Cian with Yellow Text like brand colors) */}
            <div className="bg-brandcyan text-white text-center font-black text-xs md:text-sm py-2 tracking-widest uppercase shadow-md relative z-10 flex items-center justify-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-ping"></span>
                <span>¡LA MAGIA COMIENZA AQUÍ!</span>
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
                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center">
                            <a href="#contacto" className="bg-primary text-white border-2 border-primary px-6 py-2.5 rounded-full font-black text-sm hover:bg-transparent hover:text-primary transition-all uppercase tracking-wider shadow-md hover:scale-105">
                                Reservar
                            </a>
                        </div>
                        
                        {/* Hamburger Menu (Always visible for mobile, or when screen is small) */}
                        <button className="text-white p-2 hover:text-secondary hover:scale-105 transition-all lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                            <Menu size={32} strokeWidth={2} />
                        </button>
                    </div>
                    
                </div>
            </nav>

            {/* Overlay Navigation Menu (Mobile) */}
            <div className={`fixed inset-0 bg-black/98 z-[60] flex flex-col justify-between transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
                {/* Close Button top right */}
                <div className="flex justify-between items-center p-6 border-b border-white/10 shrink-0">
                    <img
                        src="/images/logo.png"
                        alt="Perimágico Logo"
                        className="h-12 object-contain"
                    />
                    <button className="text-white p-2 hover:text-secondary transition-colors" onClick={() => setIsOpen(false)}>
                        <X size={40} strokeWidth={2} />
                    </button>
                </div>

                <div className="flex-1 flex flex-col justify-start px-8 py-10 gap-8 w-full">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="text-white text-3xl font-black uppercase tracking-wide hover:text-secondary transition-colors text-left"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    
                    <div className="flex flex-col gap-4 mt-8">
                        <a href="#contacto" className="bg-primary text-white w-full py-4 rounded-full font-black text-xl text-center hover:brightness-110 transition-all uppercase tracking-widest shadow-lg" onClick={() => setIsOpen(false)}>
                            Reservar
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;
