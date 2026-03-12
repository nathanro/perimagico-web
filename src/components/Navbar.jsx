import { useState, useEffect } from 'react';
import { Menu, X, Play } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 0);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'ATRACCIONES', path: '#atracciones' },
        { name: 'PRECIOS', path: '#precios' },
        { name: 'CONTACTO', path: '#contacto' },
    ];

    return (
        <div className="fixed w-full z-50 flex flex-col">
            {/* Top Promo Banner (Primary/Green mapping) */}
            <div className="bg-primary text-white text-center font-bold text-[13px] md:text-sm py-2 tracking-wider uppercase">
                ¡La magia del fin de semana comienza aquí!
            </div>

            {/* Main Navbar (Solid Black) */}
            <nav className={`bg-black transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg' : 'py-3'}`}>
                <div className="container flex justify-between items-center">
                    
                    {/* Left: Logo & Sub-Nav */}
                    <div className="flex flex-col items-start gap-1">
                        <a href="#top" className="flex-shrink-0 flex items-center h-12 md:h-14">
                            <img
                                src="https://piccolomondo.com.mx/wp-content/uploads/2024/01/Recurso-1-e1705974571200.png"
                                alt="Peri Mágico Logo"
                                className="h-full object-contain"
                            />
                        </a>
                        {/* Sub-Navigation (Call, Map, Contact) - Only visible on desktop like Funtastic */}
                        <div className="hidden md:flex items-center gap-5 mt-1">
                            <a href="tel:5558182348" className="text-white text-[10px] md:text-xs font-bold uppercase flex items-center gap-1 hover:text-white/80 transition-colors">
                                <Play size={10} fill="white" strokeWidth={0} /> Llamar
                            </a>
                            <a href="#ubicacion" className="text-white text-[10px] md:text-xs font-bold uppercase flex items-center gap-1 hover:text-white/80 transition-colors">
                                <Play size={10} fill="white" strokeWidth={0} /> Mapa
                            </a>
                            <a href="#contacto" className="text-white text-[10px] md:text-xs font-bold uppercase flex items-center gap-1 hover:text-white/80 transition-colors">
                                <Play size={10} fill="white" strokeWidth={0} /> Contacto
                            </a>
                        </div>
                    </div>

                    {/* Right: Hamburger Menu */}
                    <button className="text-white p-2 hover:opacity-80 transition-opacity" onClick={() => setIsOpen(!isOpen)}>
                        <Menu size={36} strokeWidth={1.5} />
                    </button>
                    
                </div>
            </nav>

            {/* Overlay Navigation Menu (Full Screen Overlay like Funtastic) */}
            <div className={`fixed inset-0 bg-black z-[60] flex flex-col justify-between transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                {/* Close Button top right */}
                <div className="flex justify-between items-center p-6 border-b border-white/10">
                    <img
                        src="https://piccolomondo.com.mx/wp-content/uploads/2024/01/Recurso-1-e1705974571200.png"
                        alt="Peri Mágico Logo"
                        className="h-10 object-contain"
                    />
                    <button className="text-white p-2 hover:opacity-80 transition-opacity" onClick={() => setIsOpen(false)}>
                        <X size={40} strokeWidth={1.5} />
                    </button>
                </div>

                <div className="flex-1 flex flex-col justify-center px-10 gap-8 max-w-lg mx-auto w-full">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="text-white text-5xl font-black uppercase tracking-tight hover:opacity-75 transition-opacity text-left"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Bottom CTA like Funtastic's "Virtual Tour" green button */}
                <div className="p-8 pb-16 max-w-lg mx-auto w-full">
                    <a href="#precios" className="btn btn-primary w-full py-5 text-2xl font-black rounded-full text-center text-white" onClick={() => setIsOpen(false)}>
                        VIRTUAL TOUR
                    </a>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;
