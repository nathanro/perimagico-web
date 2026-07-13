import { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle, Instagram, Facebook } from 'lucide-react';
import { CONTACT, CONTACT_REASONS, SOCIAL, whatsappChatUrl } from '../data/siteContent';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        reason: 'Fiestas / Eventos',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({
            name: '',
            email: '',
            phone: '',
            reason: 'Fiestas / Eventos',
            message: '',
        });
        setTimeout(() => setSubmitted(false), 6000);
    };

    return (
        <section id="contacto" className="section-pad">
            <div className="wrap">
                <div className="section-head reveal">
                    <span className="eyebrow">Contacto</span>
                    <h2>Contáctanos</h2>
                    <p>¿Tienes dudas o quieres reservar? Escríbenos y te respondemos a la brevedad.</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-direct reveal">
                        <a
                            className="direct-card whatsapp"
                            href={whatsappChatUrl()}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <span className="ic">
                                <MessageCircle size={22} />
                            </span>
                            <div>
                                <strong>WhatsApp</strong>
                                <span>{CONTACT.phoneDisplay}</span>
                            </div>
                        </a>

                        <a className="direct-card phone" href={`tel:${CONTACT.phoneTel}`}>
                            <span className="ic">
                                <Phone size={22} />
                            </span>
                            <div>
                                <strong>Teléfono</strong>
                                <span>{CONTACT.phone}</span>
                            </div>
                        </a>

                        <a className="direct-card mail" href={`mailto:${CONTACT.email}`}>
                            <span className="ic">
                                <Mail size={22} />
                            </span>
                            <div>
                                <strong>Correo</strong>
                                <span>{CONTACT.email}</span>
                            </div>
                        </a>

                        <div className="social-row">
                            <a href={SOCIAL.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    <div className="contact-card reveal">
                        {submitted ? (
                            <div className="contact-success">
                                <CheckCircle size={56} color="#25d366" />
                                <h3>¡Mensaje enviado!</h3>
                                <p>Te responderemos a la brevedad. ¡Gracias!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit}>
                                <h3>Envíanos un mensaje</h3>
                                <p>Completa el formulario y te contactamos lo antes posible.</p>

                                <div className="field-row">
                                    <div className="field">
                                        <label htmlFor="name">Nombre completo *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tu nombre"
                                        />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="phone">Teléfono *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder={CONTACT.phoneDisplay}
                                        />
                                    </div>
                                </div>

                                <div className="field">
                                    <label htmlFor="email">Correo electrónico *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="tu@correo.com"
                                    />
                                </div>

                                <div className="field">
                                    <label>Motivo de contacto</label>
                                    <div className="reason-chips">
                                        {CONTACT_REASONS.map((reason) => (
                                            <button
                                                key={reason}
                                                type="button"
                                                className={`reason-chip ${formData.reason === reason ? 'active' : ''}`}
                                                onClick={() => setFormData({ ...formData, reason })}
                                            >
                                                {reason}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="field">
                                    <label htmlFor="message">Mensaje</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        placeholder="¿En qué podemos ayudarte?"
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary btn-block">
                                    <Send size={18} />
                                    Enviar mensaje
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
