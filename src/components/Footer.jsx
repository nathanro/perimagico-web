import { Instagram, Facebook } from 'lucide-react';
import {
    NAV_LINKS,
    CONTACT,
    SOCIAL,
    HOURS,
    LOCATION,
    FOOTER_TAGLINE,
} from '../data/siteContent';

const Footer = () => {
    const navWithHome = [{ name: 'Inicio', path: '#inicio' }, ...NAV_LINKS];

    return (
        <footer className="footer">
            <div className="wrap footer-top">
                <div className="footer-brand">
                    <a href="#inicio" className="logo">
                        <img src="/images/logo.png" alt="Perimágico" />
                    </a>
                    <p>{FOOTER_TAGLINE}</p>
                    <div className="social-row">
                        <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                            <Facebook size={18} />
                        </a>
                        <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Navegación</h4>
                    <ul>
                        {navWithHome.map(({ name, path }) => (
                            <li key={name}>
                                <a href={path}>{name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contacto</h4>
                    <ul>
                        <li>
                            <a href={`tel:${CONTACT.phoneTel}`}>{CONTACT.phone}</a>
                        </li>
                        <li>
                            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                        </li>
                        <li>{LOCATION.full}</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Horarios</h4>
                    <ul>
                        {HOURS.map(({ day, hours }) => (
                            <li key={day}>
                                <span>{day}: </span>
                                <span>{hours}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="wrap footer-bottom">
                <span>© {new Date().getFullYear()} Perimágico. Todos los derechos reservados.</span>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <a href="#contacto">Aviso de Privacidad</a>
                    <span>·</span>
                    <a href="#contacto">Términos y Condiciones</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
