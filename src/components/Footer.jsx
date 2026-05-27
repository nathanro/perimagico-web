import { Instagram, Facebook, Youtube } from 'lucide-react';

const TikTokIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
    return (
        <footer className="bg-black text-white w-full border-t-4 border-primary">
            <div className="container py-12">
                
                {/* Horizontal Top Row: Logo | Nav Links | Social Icons */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b border-white/10">
                    
                    {/* Left: Logo Container */}
                    <div className="shrink-0 bg-white px-5 py-3 rounded-2xl border-2 border-primary shadow-md hover:scale-105 transition-transform duration-300">
                        <a href="#top">
                            <img
                                src="/images/logo.png"
                                alt="Perimágico Logo"
                                className="h-12 md:h-14 object-contain"
                            />
                        </a>
                    </div>
                    
                    {/* Center: Inline Nav Links */}
                    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 font-black text-sm uppercase tracking-wider text-gray-300">
                        <a href="#top" className="hover:text-secondary transition-colors">Inicio</a>
                        <span className="text-white/20 select-none">|</span>
                        <a href="#juegos-atracciones" className="hover:text-secondary transition-colors">Juegos</a>
                        <span className="text-white/20 select-none">|</span>
                        <a href="#juegos-atracciones" className="hover:text-secondary transition-colors">Atracciones</a>
                        <span className="text-white/20 select-none">|</span>
                        <a href="#restaurante" className="hover:text-secondary transition-colors">Restaurante</a>
                        <span className="text-white/20 select-none">|</span>
                        <a href="#contacto" className="hover:text-secondary transition-colors">Contacto</a>
                    </div>
                    
                    {/* Right: Social Media Red Circles */}
                    <div className="flex gap-3">
                        <a 
                            href="https://www.facebook.com/perimagico" 
                            target="_blank"
                            rel="noreferrer"
                            className="w-11 h-11 bg-[#fb0e08] hover:bg-secondary text-white hover:text-black flex items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md"
                            aria-label="Facebook"
                        >
                            <Facebook size={20} strokeWidth={2.5} />
                        </a>
                        <a 
                            href="https://www.instagram.com/perimagicooficial" 
                            target="_blank"
                            rel="noreferrer"
                            className="w-11 h-11 bg-[#fb0e08] hover:bg-secondary text-white hover:text-black flex items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md"
                            aria-label="Instagram"
                        >
                            <Instagram size={20} strokeWidth={2.5} />
                        </a>
                        <a 
                            href="https://www.youtube.com" 
                            target="_blank"
                            rel="noreferrer"
                            className="w-11 h-11 bg-[#fb0e08] hover:bg-secondary text-white hover:text-black flex items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md"
                            aria-label="YouTube"
                        >
                            <Youtube size={20} strokeWidth={2.5} />
                        </a>
                        <a 
                            href="https://www.tiktok.com" 
                            target="_blank"
                            rel="noreferrer"
                            className="w-11 h-11 bg-[#fb0e08] hover:bg-secondary text-white hover:text-black flex items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 shadow-md"
                            aria-label="TikTok"
                        >
                            <TikTokIcon size={20} />
                        </a>
                    </div>

                </div>

                {/* Bottom Row: Contact Info & Copyright */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-bold tracking-wide text-center md:text-left">
                    <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                        <span>📍 Centro Comercial Galerías Perinorte, Cuautitlán Izcalli, Mex.</span>
                        <span className="hidden sm:inline">•</span>
                        <span>📞 55 5818 2348</span>
                        <span className="hidden sm:inline">•</span>
                        <span>✉️ ventas@perimagico.com.mx</span>
                    </div>
                    <div className="uppercase tracking-widest text-[10px]">
                        © 2026 Perimágico. Todos los derechos reservados.
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
