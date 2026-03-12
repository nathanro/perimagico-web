import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Ticket } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t-8 border-magenta relative overflow-hidden" style={{ borderColor: 'var(--color-accent-magenta)' }}>
            {/* Top Banner overlapping */}
            <div className="absolute top-0 left-0 w-full h-4 bg-secondary transform -skew-y-1 origin-top-left" style={{ backgroundColor: 'var(--color-secondary)' }} />
            <div className="absolute top-0 right-0 w-full h-4 bg-primary transform skew-y-1 origin-top-right" style={{ backgroundColor: 'var(--color-primary)' }} />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">

                    {/* Brand & Info */}
                    <div className="space-y-6">
                        <a href="#top" className="inline-block flex items-center h-20 bg-white rounded-xl p-2 border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform">
                            <img
                                src="https://piccolomondo.com.mx/wp-content/uploads/2024/01/Recurso-1-e1705974571200.png"
                                alt="Peri Mágico Logo"
                                className="h-full object-contain"
                            />
                        </a>
                        <p className="font-bold text-gray-400 text-sm">
                            El lugar donde la diversión cobra vida y la emoción nunca se detiene. Momentos mágicos para toda la familia.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/perimagicooficial" className="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-magenta hover:text-white transition-colors border-2 border-white transform rotate-3">
                                <Instagram size={24} />
                            </a>
                            <a href="https://www.facebook.com/perimagico" className="w-12 h-12 bg-white text-black flex items-center justify-center hover:bg-primary hover:text-white transition-colors border-2 border-white transform -rotate-2">
                                <Facebook size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-black uppercase mb-6 text-white border-l-4 border-secondary pl-4" style={{ borderColor: 'var(--color-secondary)' }}>Aventuras</h4>
                        <ul className="space-y-3 font-bold text-gray-300 text-sm">
                            <li><a href="#atracciones" className="hover:text-primary transition-colors">Todas las Atracciones</a></li>
                            <li><a href="#precios" className="hover:text-primary transition-colors">Precios y Paquetes</a></li>
                            <li><a href="#eventos" className="hover:text-primary transition-colors">Fiestas de Cumpleaños</a></li>
                        </ul>
                    </div>

                    {/* Legal / Help */}
                    <div>
                        <h4 className="text-xl font-black uppercase mb-6 text-white border-l-4 border-primary pl-4" style={{ borderColor: 'var(--color-primary)' }}>Ayuda</h4>
                        <ul className="space-y-3 font-bold text-gray-300 text-sm">
                            <li><a href="#" className="hover:text-secondary transition-colors">Preguntas Frecuentes</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Reglas del Parque</a></li>
                            <li><a href="https://piccolomondo.com.mx/terminos-y-condiciones/" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">Términos y Condiciones</a></li>
                            <li><a href="https://piccolomondo.com.mx/aviso-de-privacidad/" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">Aviso de Privacidad</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xl font-black uppercase mb-6 text-white border-l-4 border-orange-500 pl-4" style={{ borderColor: 'var(--color-accent-orange)' }}>Contacto</h4>
                        <ul className="space-y-4 font-bold text-gray-300 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary mt-1 shrink-0" size={18} style={{ color: 'var(--color-primary)' }} />
                                <span>Centro Comercial Galerias Perinorte, Cuautitlán Izcalli, Mex.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-secondary shrink-0" size={18} style={{ color: 'var(--color-secondary)' }} />
                                <a href="tel:5558182348" className="hover:text-white transition-colors">55 5818 2348</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-magenta shrink-0" size={18} style={{ color: 'var(--color-accent-magenta)' }} />
                                <a href="mailto:ventas@perimagico.com.mx" className="hover:text-white transition-colors" style={{ wordBreak: 'break-all' }}>ventas@perimagico.com.mx</a>
                            </li>
                        </ul>
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="flex flex-col justify-center">
                        <div className="bg-[#25D366]/10 p-6 rounded-2xl border-2 border-[#25D366]/30 text-center">
                            <h4 className="text-lg font-black uppercase mb-4 text-white">¿Tienes Preguntas?</h4>
                            <p className="text-sm font-bold text-gray-300 mb-6">
                                Habla directamente con nuestro equipo para reservas o dudas rápidas.
                            </p>
                            <a href="https://wa.me/525558182348" target="_blank" rel="noopener noreferrer" className="btn w-full border-4 border-transparent hover:border-white shadow-[4px_4px_0_0_rgba(255,255,255,0.2)] hover:shadow-none hover:translate-y-1 transition-all flex justify-center items-center gap-2" style={{ backgroundColor: '#25D366', color: 'white' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                55 5818 2348
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom copyright */}
                <div className="border-t-4 border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="font-bold text-sm text-gray-400">
                        © 2026 Perimágico. Todos los derechos reservados. Miembro de Piccolo Mondo Group.
                    </p>
                    <div className="font-black text-xs uppercase tracking-widest text-gray-600">
                        Potenciado por <span className="text-white">PubliExpert</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
