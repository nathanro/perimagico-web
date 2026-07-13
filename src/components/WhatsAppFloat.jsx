import { MessageCircle } from 'lucide-react';
import { whatsappChatUrl } from '../data/siteContent';

const WhatsAppFloat = () => (
    <a
        href={whatsappChatUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="wa-float"
        aria-label="Chatear por WhatsApp — atención a clientes"
    >
        <MessageCircle size={24} color="#fff" fill="#fff" strokeWidth={0} />
        <span className="wa-float-label">WhatsApp</span>
    </a>
);

export default WhatsAppFloat;
