import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 w-full border-t-2 border-gray-200">
            <div className="container py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 pb-12 border-b border-gray-200">
                    <div className="flex flex-col items-center md:items-start">
                        <a href="#top" className="inline-block mb-4 hover:opacity-80 transition-opacity">
                            <img src="/images/logo.png" alt="Perimágico Logo" className="h-16 object-contain" />
                        </a>
                        <p className="text-sm text-gray-600 text-center md:text-left">El mejor parque de diversiones familiar</p>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="font-bold text-lg text-gray-900 mb-4 uppercase tracking-wide">Contacto</h3>
                        <div className="space-y-3 text-sm text-gray-700">
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <Phone size={18} className="text-gray-600 flex-shrink-0" />
                                <a href="tel:+525558182348" className="hover:text-gray-900 transition-colors font-semibold">55 5818 2348</a>
                            </div>
                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                <Mail size={18} className="text-gray-600 flex-shrink-0" />
                                <a href="mailto:ventas@perimagico.com.mx" className="hover:text-gray-900 transition-colors font-semibold break-all">ventas@perimagico.com.mx</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="font-bold text-lg text-gray-900 mb-4 uppercase tracking-wide">Ubicación</h3>
                        <div className="flex items-start gap-2">
                            <MapPin size={18} className="text-gray-600 flex-shrink-0 mt-1" />
                            <p className="text-sm text-gray-700 text-center md:text-left">Centro Comercial Galerías Perinorte<br />Cuautitlán Izcalli<br />Estado de México</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="font-bold text-lg text-gray-900 mb-4 uppercase tracking-wide">Horarios</h3>
                        <div className="space-y-2 text-sm text-gray-700">
                            <div className="text-center md:text-left">
                                <p className="font-semibold">Mar - Jue</p>
                                <p>1:00 pm - 8:00 pm</p>
                            </div>
                            <div className="text-center md:text-left">
                                <p className="font-semibold">Viernes</p>
                                <p>1:00 pm - 8:30 pm</p>
                            </div>
                            <div className="text-center md:text-left">
                                <p className="font-semibold">Sáb - Dom</p>
                                <p>12:00 pm - 10:00 pm</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-600 font-semibold tracking-wide">
                    <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                        <a href="#inicio" className="hover:text-gray-900 transition-colors">Inicio</a>
                        <span className="text-gray-300">|</span>
                        <a href="#juegos-atracciones" className="hover:text-gray-900 transition-colors">Atracciones</a>
                        <span className="text-gray-300">|</span>
                        <a href="#restaurante" className="hover:text-gray-900 transition-colors">Restaurante</a>
                        <span className="text-gray-300">|</span>
                        <a href="#contacto" className="hover:text-gray-900 transition-colors">Contacto</a>
                    </div>
                    <div className="text-center md:text-right">© 2026 Perimágico. Todos los derechos reservados.</div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
