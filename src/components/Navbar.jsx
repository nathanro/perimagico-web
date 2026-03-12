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
        { name: 'Atracciones', path: '#atracciones' },
        { name: 'Waiver', path: '#' },
        { name: 'Precios', path: '#precios' },
        { name: 'Membresía', path: '#membresia' },
        { name: 'Trabaja con Nosotros', path: '#' },
        { name: 'Eventos y Grupos', path: '#eventos' },
        { name: 'Franquicia', path: '#' },
        { name: 'FAQs', path: '#' },
        { name: 'Contacto', path: '#contacto' },
    ];

    return (
        <div className="fixed w-full z-50 flex flex-col">
            {/* Top Promo Banner (Green with Yellow Text like Funtastic) */}
            <div className="bg-[#4CAF50] text-[#FFD700] text-center font-bold text-[13px] md:text-sm py-2 tracking-wider uppercase shadow-md relative z-10">
                ¡La magia del fin de semana comienza aquí!
            </div>

            {/* Main Navbar (Solid Black) */}
            <nav className={`bg-black transition-all duration-300 ${isScrolled ? 'py-2 shadow-lg' : 'py-3'}`}>
                <div className="container flex justify-between items-center gap-4">
                    
                    {/* Left: Logo */}
                    <div className="flex-shrink-0">
                        <a href="#top" className="flex items-center h-12 md:h-14">
                            <img
                                src="https://piccolomondo.com.mx/wp-content/uploads/2024/01/Recurso-1-e1705974571200.png"
                                alt="Peri Mágico Logo"
                                className="h-full object-contain"
                            />
                        </a>
                    </div>

                    {/* Middle: Desktop Navigation Links */}
                    <div className="hidden lg:flex items-center gap-4 xl:gap-5 flex-wrap justify-center flex-1 ml-4">
                        {navLinks.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.path}
                                className="text-white text-[11px] xl:text-xs font-bold hover:text-secondary transition-colors uppercase whitespace-nowrap"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Right: CTAs and Mobile Menu Toggle */}
                    <div className="flex items-center gap-3">
                        <div className="hidden md:flex items-center gap-2">
                            <a href="#" className="bg-[#22c55e] border-2 border-[#22c55e] text-white px-4 py-2 md:px-5 md:py-2 rounded-full font-bold text-xs hover:bg-transparent hover:text-[#22c55e] transition-all uppercase whitespace-nowrap flex items-center justify-center">
                                Tour Virtual
                            </a>
                            <a href="#precios" className="bg-[#dc2626] border-2 border-[#dc2626] text-white px-4 py-2 md:px-5 md:py-2 rounded-full font-bold text-xs hover:bg-transparent hover:text-[#dc2626] transition-all uppercase whitespace-nowrap flex items-center justify-center">
                                Reservar
                            </a>
                        </div>
                        
                        {/* Hamburger Menu (Always visible for mobile, or when screen is small) */}
                        <button className="text-white p-2 hover:opacity-80 transition-opacity lg:hidden" onClick={() => setIsOpen(!isOpen)}>
                            <Menu size={32} strokeWidth={1.5} />
                        </button>
                    </div>
                    
                </div>
            </nav>

            {/* Overlay Navigation Menu (Mobile) */}
            <div className={`fixed inset-0 bg-black z-[60] flex flex-col justify-between transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
                {/* Close Button top right */}
                <div className="flex justify-between items-center p-6 border-b border-white/10 shrink-0">
                    <img
                        src="https://piccolomondo.com.mx/wp-content/uploads/2024/01/Recurso-1-e1705974571200.png"
                        alt="Peri Mágico Logo"
                        className="h-10 object-contain"
                    />
                    <button className="text-white p-2 hover:opacity-80 transition-opacity" onClick={() => setIsOpen(false)}>
                        <X size={40} strokeWidth={1.5} />
                    </button>
                </div>

                <div className="flex-1 flex flex-col justify-start px-8 py-8 gap-6 w-full">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.path}
                            className="text-white text-2xl font-black uppercase tracking-tight hover:text-secondary transition-colors text-left"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    
                    <div className="flex flex-col gap-4 mt-8">
                        <a href="#" className="bg-[#22c55e] text-white w-full py-4 rounded-full font-black text-xl text-center hover:brightness-110 transition-all uppercase">
                            Tour Virtual
                        </a>
                        <a href="#precios" className="bg-[#dc2626] text-white w-full py-4 rounded-full font-black text-xl text-center hover:brightness-110 transition-all uppercase">
                            Reservar
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;
