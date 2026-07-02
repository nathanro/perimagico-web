import { MessageCircle } from 'lucide-react';
import { CONTACT } from '../data/siteContent';

const WhatsAppFloat = () => (
    <a
        href={`https://wa.me/${CONTACT.whatsapp}`}
        target="_blank"
        rel="noreferrer"
        className="wa-float"
        aria-label="Contactar por WhatsApp"
    >
        <MessageCircle size={28} color="#fff" fill="#fff" />
    </a>
);

export default WhatsAppFloat;
