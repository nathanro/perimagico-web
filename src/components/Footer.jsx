import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook, Ticket } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-20 pb-10 border-t-8 border-magenta relative overflow-hidden" style={{ borderColor: 'var(--color-accent-magenta)' }}>
            {/* Top Banner overlapping */}
            <div className="absolute top-0 left-0 w-full h-4 bg-secondary transform -skew-y-1 origin-top-left" style={{ backgroundColor: 'var(--color-secondary)' }} />
            <div className="absolute top-0 right-0 w-full h-4 bg-primary transform skew-y-1 origin-top-right" style={{ backgroundColor: 'var(--color-primary)' }} />

            <div className="container relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand & Info */}
                    <div className="space-y-6">
                        <Link to="/" className="inline-block">
                            <div className="bg-white rounded-xl p-3 font-black text-3xl leading-none text-center border-4 border-white transform -rotate-3 hover:rotate-0 transition-transform inline-block">
                                <span className="block text-black">PERI</span>
                                <span className="block text-magenta" style={{ color: 'var(--color-accent-magenta)' }}>MÁGICO</span>
                            </div>
                        </Link>
                        <p className="font-bold text-gray-400">
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
                        <h4 className="text-2xl font-black uppercase mb-6 text-white border-l-4 border-secondary pl-4" style={{ borderColor: 'var(--color-secondary)' }}>Aventuras</h4>
                        <ul className="space-y-3 font-bold text-gray-300">
                            <li><Link to="/atracciones" className="hover:text-primary transition-colors">Todas las Atracciones</Link></li>
                            <li><Link to="/precios" className="hover:text-primary transition-colors">Precios y Paquetes</Link></li>
                            <li><Link to="/eventos" className="hover:text-primary transition-colors">Fiestas de Cumpleaños</Link></li>
                            <li><Link to="/restaurante" className="hover:text-primary transition-colors">Food Bar Menu</Link></li>
                        </ul>
                    </div>

                    {/* Legal / Help */}
                    <div>
                        <h4 className="text-2xl font-black uppercase mb-6 text-white border-l-4 border-primary pl-4" style={{ borderColor: 'var(--color-primary)' }}>Ayuda</h4>
                        <ul className="space-y-3 font-bold text-gray-300">
                            <li><a href="#" className="hover:text-secondary transition-colors">Preguntas Frecuentes</a></li>
                            <li><a href="#" className="hover:text-secondary transition-colors">Reglas del Parque</a></li>
                            <li><a href="https://piccolomondo.com.mx/terminos-y-condiciones/" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">Términos y Condiciones</a></li>
                            <li><a href="https://piccolomondo.com.mx/aviso-de-privacidad/" target="_blank" rel="noreferrer" className="hover:text-secondary transition-colors">Aviso de Privacidad</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-2xl font-black uppercase mb-6 text-white border-l-4 border-orange-500 pl-4" style={{ borderColor: 'var(--color-accent-orange)' }}>Contacto</h4>
                        <ul className="space-y-4 font-bold text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-primary mt-1 shrink-0" size={20} style={{ color: 'var(--color-primary)' }} />
                                <span>Centro Comercial Galerias Perinorte, Cuautitlán Izcalli, Mex.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-secondary shrink-0" size={20} style={{ color: 'var(--color-secondary)' }} />
                                <a href="tel:5558939528" className="hover:text-white transition-colors">55 5893 9528</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-magenta shrink-0" size={20} style={{ color: 'var(--color-accent-magenta)' }} />
                                <a href="mailto:ventas@perimagico.com.mx" className="hover:text-white transition-colors">ventas@perimagico.com.mx</a>
                            </li>
                        </ul>
                        <Link to="/reservaciones" className="mt-8 btn btn-primary w-full border-4 border-transparent hover:border-white">
                            <Ticket size={24} className="mr-2" /> COMPRAR BOLETOS
                        </Link>
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
