import { Instagram, Facebook, Youtube, Send } from 'lucide-react';

// Custom TikTok icon since Lucide doesn't have an official one by default
const TikTokIcon = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const Footer = () => {
    return (
        <footer className="bg-black text-white w-full">
            
            {/* 10. Newsletter Subscription Section (Funtastic Clone) */}
            <div className="w-full relative py-20 border-y-8 border-black overflow-hidden" style={{
                backgroundColor: 'var(--color-primary)',
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(255, 215, 0, 0.4) 40px, rgba(255, 215, 0, 0.4) 80px)'
            }}>
                <div className="container max-w-4xl text-center relative z-10 bg-primary/90 p-8 md:p-12 border-8 border-black shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform -rotate-1">
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 tracking-tighter text-white drop-shadow-md">
                        SUBSCRIBE
                    </h2>
                    <p className="text-white font-bold mb-8 text-xl">
                        Suscríbete a nuestro boletín para recibir ofertas exclusivas y promociones increíbles.
                    </p>
                    <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="Tu correo electrónico" 
                            className="bg-white text-black border-4 border-black px-8 py-5 rounded-full flex-1 font-black text-lg outline-none focus:ring-4 focus:ring-black"
                            required
                        />
                        <button type="submit" className="bg-black text-white px-12 py-5 border-4 border-black rounded-full font-black text-lg uppercase tracking-wider hover:bg-white hover:text-black transition-all">
                            Suscribirse
                        </button>
                    </form>
                </div>
            </div>

            {/* 11. Main Footer Content (Horizontal Funtastic Layout) */}
            <div className="container pt-16 pb-8">
                {/* Horizontal Row: Logo | Nav Links | Socials */}
                <div className="flex flex-col xl:flex-row items-center justify-between gap-10 mb-16 border-b-2 border-white/20 pb-16">
                    
                    {/* Logo */}
                    <a href="#top" className="shrink-0 bg-white p-4 rounded-xl border-4 border-black hover:-translate-y-1 transition-transform">
                        <img
                            src="https://piccolomondo.com.mx/wp-content/uploads/2024/01/Recurso-1-e1705974571200.png"
                            alt="Peri Mágico Logo"
                            className="h-16 md:h-20 object-contain"
                        />
                    </a>
                    
                    {/* Inline Center Navigation Links */}
                    <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4">
                        <a href="#atracciones" className="text-white text-sm md:text-base font-black uppercase hover:text-secondary transition-colors">Atracciones</a>
                        <span className="text-gray-600 hidden md:inline">|</span>
                        <a href="#" className="text-white text-sm md:text-base font-black uppercase hover:text-secondary transition-colors">Waiver</a>
                        <span className="text-gray-600 hidden md:inline">|</span>
                        <a href="#precios" className="text-white text-sm md:text-base font-black uppercase hover:text-secondary transition-colors">Precios</a>
                        <span className="text-gray-600 hidden md:inline">|</span>
                        <a href="#eventos" className="text-white text-sm md:text-base font-black uppercase hover:text-secondary transition-colors">Membresía</a>
                        <span className="text-gray-600 hidden md:inline">|</span>
                        <a href="#" className="text-white text-sm md:text-base font-black uppercase hover:text-secondary transition-colors">Trabaja con Nosotros</a>
                        <span className="text-gray-600 hidden md:inline">|</span>
                        <a href="#eventos" className="text-white text-sm md:text-base font-black uppercase hover:text-secondary transition-colors">Eventos y Grupos</a>
                        <span className="text-gray-600 hidden md:inline">|</span>
                        <a href="#" className="text-white text-sm md:text-base font-black uppercase hover:text-secondary transition-colors">Franquicia</a>
                        <span className="text-gray-600 hidden md:inline">|</span>
                        <a href="#" className="text-white text-sm md:text-base font-black uppercase hover:text-secondary transition-colors">FAQs</a>
                        <span className="text-gray-600 hidden md:inline">|</span>
                        <a href="#contacto" className="text-white text-sm md:text-base font-black uppercase hover:text-secondary transition-colors">Contacto</a>
                    </div>
                    
                    {/* Social Media */}
                    <div className="flex gap-4 shrink-0">
                        <a href="https://www.instagram.com/perimagicooficial" className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full hover:bg-magenta hover:text-white transition-all hover:-translate-y-1">
                            <Instagram size={24} />
                        </a>
                        <a href="https://www.facebook.com/perimagico" className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-all hover:-translate-y-1">
                            <Facebook size={24} />
                        </a>
                        <a href="https://www.youtube.com" className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full hover:bg-red-600 hover:text-white transition-all hover:-translate-y-1">
                            <Youtube size={24} />
                        </a>
                        <a href="https://www.tiktok.com" className="w-12 h-12 bg-white text-black flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-all hover:-translate-y-1 border-2 border-transparent hover:border-white">
                            <TikTokIcon size={24} />
                        </a>
                    </div>
                </div>

                {/* Inline Bottom Contact Info */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-12 text-center text-sm font-bold text-gray-400">
                    <div className="flex items-center gap-2">
                        <span className="text-xl">📍</span> Centro Comercial Galerias Perinorte, Cuautitlán Izcalli, Mex.
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xl">📞</span> <a href="tel:5558182348" className="hover:text-white hover:underline transition-colors">55 5818 2348</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xl">✉️</span> <a href="mailto:ventas@perimagico.com.mx" className="hover:text-white hover:underline transition-colors">ventas@perimagico.com.mx</a>
                    </div>
                </div>

                {/* Bottom copyright */}
                <div className="border-t-2 border-white/10 pt-8 flex text-center justify-center">
                    <p className="font-bold text-sm text-gray-600 uppercase tracking-widest">
                        © 2026 Perimágico. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
