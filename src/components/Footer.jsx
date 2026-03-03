import { Mail, Phone, MapPin, Instagram, Facebook, Rocket } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black pt-20 pb-10 border-t border-white/5">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                                <Rocket size={20} color="#000" />
                            </div>
                            <span className="text-xl font-black">PERI <span className="text-secondary" style={{ color: 'var(--color-secondary)' }}>MÁGICO</span></span>
                        </div>
                        <p className="text-text-muted text-sm leading-relaxed">
                            El mejor parque de diversiones familiar en México. Creamos momentos mágicos y aventuras inolvidables para todas las edades.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 glass flex items-center justify-center hover:bg-magenta transition-all" style={{ '--hover-bg': 'var(--color-accent-magenta)' }}>
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 glass flex items-center justify-center hover:bg-magenta transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Explorar</h4>
                        <ul className="space-y-4 text-text-muted text-sm">
                            <li><a href="/atracciones" className="hover:text-primary">Todas las Atracciones</a></li>
                            <li><a href="/precios" className="hover:text-primary">Precios y Paquetes</a></li>
                            <li><a href="/eventos" className="hover:text-primary">Fiestas de Cumpleaños</a></li>
                            <li><a href="/restaurante" className="hover:text-primary">Food Bar Menu</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Ayuda</h4>
                        <ul className="space-y-4 text-text-muted text-sm">
                            <li><a href="#" className="hover:text-primary">Preguntas Frecuentes</a></li>
                            <li><a href="#" className="hover:text-primary">Reglas del Parque</a></li>
                            <li><a href="#" className="hover:text-primary">Términos y Condiciones</a></li>
                            <li><a href="#" className="hover:text-primary">Políticas de Privacidad</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold mb-6">Contacto</h4>
                        <ul className="space-y-4 text-text-muted text-sm">
                            <li className="flex items-center gap-3">
                                <MapPin size={18} className="text-primary" />
                                <span>Ubicación, Ciudad de México</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary" />
                                <span>+52 55 1234 5678</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary" />
                                <span>hola@perimagico.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
                    <p>© 2026 Peri Mágico. Todos los derechos reservados. Miembro de Piccolo Mondo Group.</p>
                    <p>Potenciado por <span className="font-bold text-white">PubliExpert</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
