import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from 'lucide-react';

// TODO: Actualizar cuando estén disponibles los datos reales
const CONTACT_PHONE = '+52 55 3886 1424';
const CONTACT_EMAIL = 'Samantha.garcia.vare@gmail.com';

const TikTokIcon = ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.01a8.16 8.16 0 0 0 4.77 1.52V7.07a4.85 4.85 0 0 1-1-.38z" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-white text-black w-full border-t-4 border-black">

            {/* Main footer grid */}
            <div className="container max-w-6xl px-4 md:px-8 py-14">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* COL 1: Logo + descripción + redes */}
                    <div className="lg:col-span-1 flex flex-col gap-5">
                        <a href="#top" className="inline-block">
                            <img
                                src="/images/logo.png"
                                alt="Perimágico Logo"
                                className="h-14 object-contain"
                            />
                        </a>
                        <p className="text-gray-500 font-bold text-sm leading-relaxed">
                            El parque de diversiones más mágico del norte de la Ciudad de México, en Galerías Perinorte.
                        </p>
                        {/* Social icons */}
                        <div className="flex gap-2.5 flex-wrap">
                            <a
                                href="https://www.facebook.com/perimagico"
                                target="_blank" rel="noreferrer"
                                aria-label="Facebook"
                                className="w-10 h-10 bg-black hover:bg-primary text-white rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="https://www.instagram.com/perimagicooficial"
                                target="_blank" rel="noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 bg-black hover:bg-primary text-white rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
                            >
                                <Instagram size={18} />
                            </a>
                            <a
                                href="https://www.tiktok.com"
                                target="_blank" rel="noreferrer"
                                aria-label="TikTok"
                                className="w-10 h-10 bg-black hover:bg-primary text-white rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
                            >
                                <TikTokIcon size={18} />
                            </a>
                            <a
                                href="https://www.youtube.com"
                                target="_blank" rel="noreferrer"
                                aria-label="YouTube"
                                className="w-10 h-10 bg-black hover:bg-primary text-white rounded-full flex items-center justify-center transition-all hover:-translate-y-0.5"
                            >
                                <Youtube size={18} />
                            </a>
                        </div>
                    </div>

                    {/* COL 2: Navegación */}
                    <div>
                        <h4 className="font-black uppercase tracking-widest text-xs text-gray-400 mb-5">
                            Navegación
                        </h4>
                        <ul className="space-y-3">
                            {[
                                { label: 'Inicio', href: '#top' },
                                { label: 'Atracciones y Juegos', href: '#juegos-atracciones' },
                                { label: 'Accesos', href: '#accesos' },
                                { label: 'Cumpleaños', href: '#cumpleanos' },
                                { label: 'Restaurante', href: '#restaurante' },
                                { label: 'Contacto', href: '#contacto' },
                            ].map(({ label, href }) => (
                                <li key={label}>
                                    <a
                                        href={href}
                                        className="font-bold text-sm text-gray-600 hover:text-primary transition-colors flex items-center gap-1.5 group"
                                    >
                                        <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* COL 3: Contacto */}
                    <div>
                        <h4 className="font-black uppercase tracking-widest text-xs text-gray-400 mb-5">
                            Contacto
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                                <span className="text-sm font-bold text-gray-600 leading-relaxed">
                                    Centro Comercial Galerías Perinorte,<br />
                                    Cuautitlán Izcalli, Estado de México
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                {CONTACT_PHONE !== 'TODO_TELEFONO' ? (
                                    <a href={`tel:${CONTACT_PHONE}`} className="text-sm font-bold text-gray-600 hover:text-primary transition-colors">
                                        {CONTACT_PHONE}
                                    </a>
                                ) : (
                                    <span className="text-sm font-bold text-gray-300">Próximamente</span>
                                )}
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                {CONTACT_EMAIL !== 'TODO_EMAIL' ? (
                                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm font-bold text-gray-600 hover:text-primary transition-colors break-all">
                                        {CONTACT_EMAIL}
                                    </a>
                                ) : (
                                    <span className="text-sm font-bold text-gray-300">Próximamente</span>
                                )}
                            </li>
                        </ul>
                    </div>

                    {/* COL 4: Horarios */}
                    <div>
                        <h4 className="font-black uppercase tracking-widest text-xs text-gray-400 mb-5 flex items-center gap-2">
                            <Clock size={14} />
                            Horarios
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { day: 'Lunes',           hours: 'Cerrado',           highlight: true },
                                { day: 'Martes — Jueves', hours: '1:00 — 8:00 pm' },
                                { day: 'Viernes',         hours: '1:00 — 8:30 pm' },
                                { day: 'Sábado — Domingo', hours: '12:00 — 10:00 pm', bold: true },
                            ].map(({ day, hours, highlight, bold }) => (
                                <li key={day} className="flex justify-between items-baseline gap-2 text-sm">
                                    <span className="font-bold text-gray-500">{day}</span>
                                    <span className={`font-black text-right ${highlight ? 'text-primary' : bold ? 'text-secondary' : 'text-black'}`}>
                                        {hours}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t-2 border-gray-100">
                <div className="container max-w-6xl px-4 md:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-bold text-gray-400">
                    <span>© 2026 Perimágico. Todos los derechos reservados.</span>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-primary transition-colors">Aviso de Privacidad</a>
                        <span>·</span>
                        <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
