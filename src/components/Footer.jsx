import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t-4 border-primary">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
                    
                    {/* Logo & Description */}
                    <div className="md:w-1/3 space-y-6">
                        <a href="#top" className="inline-block bg-white p-4 rounded-xl">
                            <img
                                src="https://piccolomondo.com.mx/wp-content/uploads/2024/01/Recurso-1-e1705974571200.png"
                                alt="Peri Mágico Logo"
                                className="h-16 object-contain"
                            />
                        </a>
                        <p className="font-bold text-gray-400 text-sm max-w-sm">
                            El lugar donde la diversión cobra vida y la emoción nunca se detiene. Diversión para toda la familia.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="md:w-1/3 flex justify-between gap-8">
                        <div>
                            <h4 className="text-xl font-black uppercase mb-6 text-white tracking-wide">Explora</h4>
                            <ul className="space-y-4 font-bold text-gray-400 text-sm">
                                <li><a href="#experiencia" className="hover:text-primary transition-colors uppercase">Experiencia</a></li>
                                <li><a href="#atracciones" className="hover:text-primary transition-colors uppercase">Atracciones</a></li>
                                <li><a href="#precios" className="hover:text-primary transition-colors uppercase">Precios</a></li>
                                <li><a href="#menu" className="hover:text-primary transition-colors uppercase">Alimentos</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-black uppercase mb-6 text-white tracking-wide">Legal</h4>
                            <ul className="space-y-4 font-bold text-gray-400 text-sm">
                                <li><a href="#" className="hover:text-primary transition-colors uppercase">Reglas del Parque</a></li>
                                <li><a href="https://piccolomondo.com.mx/terminos-y-condiciones/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors uppercase">Términos y Condiciones</a></li>
                                <li><a href="https://piccolomondo.com.mx/aviso-de-privacidad/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors uppercase">Aviso de Privacidad</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact & Socials */}
                    <div className="md:w-1/3 space-y-6">
                        <h4 className="text-xl font-black uppercase mb-6 text-white tracking-wide">Contacto</h4>
                        <div className="space-y-2 font-bold text-gray-400 text-sm">
                            <p>Centro Comercial Galerias Perinorte</p>
                            <p>Cuautitlán Izcalli, Mex.</p>
                            <p className="pt-2"><a href="tel:5558182348" className="hover:text-white transition-colors">Tel: 55 5818 2348</a></p>
                            <p><a href="mailto:ventas@perimagico.com.mx" className="hover:text-white transition-colors">Email: ventas@perimagico.com.mx</a></p>
                        </div>
                        
                        <div className="pt-4 flex gap-4">
                            <a href="https://www.instagram.com/perimagicooficial" className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full hover:bg-magenta hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://www.facebook.com/perimagico" className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full hover:bg-primary hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                    
                </div>

                {/* Bottom copyright */}
                <div className="border-t border-white/20 pt-8 flex text-center justify-center">
                    <p className="font-bold text-sm text-gray-500 uppercase tracking-widest">
                        © 2026 Perimágico. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
