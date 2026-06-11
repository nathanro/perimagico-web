import { useState } from 'react';
import { Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';

// TODO: Reemplazar con datos reales cuando estén disponibles
const CONTACT_PHONE   = '+52 55 3886 1424';
const CONTACT_EMAIL   = 'Samantha.garcia.vare@gmail.com';
const CONTACT_WHATSAPP = '5215538861424';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        reason: 'Fiestas / Eventos',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const reasons = [
        'Fiestas / Eventos',
        'Boletos / Tickets',
        'Reservación',
        'Quejas / Sugerencias',
        'Otro'
    ];

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', reason: 'Fiestas / Eventos', message: '' });
        setTimeout(() => setSubmitted(false), 6000);
    };

    return (
        <section id="contacto" className="bg-white py-20 border-t-8 border-black">
            <div className="container max-w-6xl px-4 md:px-8">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-black text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-3">
                        Contáctanos
                    </h2>
                    <p className="text-gray-500 font-bold text-base md:text-lg max-w-lg mx-auto">
                        ¿Tienes dudas o quieres reservar? Escríbenos y te respondemos a la brevedad.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

                    {/* LEFT: Contact shortcuts */}
                    <div className="lg:col-span-2 flex flex-col gap-4">

                        {/* Phone */}
                        <a
                            href={CONTACT_PHONE !== 'TODO_TELEFONO' ? `tel:${CONTACT_PHONE}` : '#contacto'}
                            className="flex items-center gap-4 bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 hover:border-primary hover:bg-primary/5 transition-all group"
                        >
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Phone size={22} className="text-white" />
                            </div>
                            <div>
                                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-0.5">Teléfono</p>
                                <p className="font-black text-black text-base">
                                    {CONTACT_PHONE !== 'TODO_TELEFONO' ? CONTACT_PHONE : 'Próximamente'}
                                </p>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href={CONTACT_WHATSAPP !== 'TODO_WHATSAPP_NUMBER' ? `https://wa.me/${CONTACT_WHATSAPP}` : '#contacto'}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-4 bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all group"
                        >
                            <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <MessageCircle size={22} className="text-white" />
                            </div>
                            <div>
                                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-0.5">WhatsApp</p>
                                <p className="font-black text-black text-base">
                                    {CONTACT_WHATSAPP !== 'TODO_WHATSAPP_NUMBER' ? 'Escríbenos' : 'Próximamente'}
                                </p>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href={CONTACT_EMAIL !== 'TODO_EMAIL' ? `mailto:${CONTACT_EMAIL}` : '#contacto'}
                            className="flex items-center gap-4 bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5 hover:border-primary hover:bg-primary/5 transition-all group"
                        >
                            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <Mail size={22} className="text-white" />
                            </div>
                            <div>
                                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-0.5">Correo</p>
                                <p className="font-black text-black text-base break-all">
                                    {CONTACT_EMAIL !== 'TODO_EMAIL' ? CONTACT_EMAIL : 'Próximamente'}
                                </p>
                            </div>
                        </a>

                        {/* Horarios rápidos */}
                        <div className="bg-gray-50 border-2 border-gray-100 rounded-2xl px-6 py-5">
                            <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-3">Horarios</p>
                            <div className="space-y-1.5 text-sm font-bold text-black">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Lunes</span>
                                    <span className="text-primary">Cerrado</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Mar — Jue</span>
                                    <span>1:00 — 8:00 pm</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Viernes</span>
                                    <span>1:00 — 8:30 pm</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Sáb — Dom</span>
                                    <span className="text-secondary font-black">12:00 — 10:00 pm</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Form */}
                    <div className="lg:col-span-3">
                        {submitted ? (
                            <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                                <CheckCircle size={64} className="text-green-500" />
                                <h3 className="text-2xl font-black uppercase text-black">¡Mensaje enviado!</h3>
                                <p className="text-gray-500 font-bold">Te responderemos a la brevedad. ¡Gracias!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">

                                {/* Nombre + Teléfono */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                                            Nombre completo *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Tu nombre"
                                            className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3.5 font-bold text-black placeholder-gray-300 focus:outline-none focus:border-primary focus:bg-white transition-all"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                                            Teléfono *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="55 1234 5678"
                                            className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3.5 font-bold text-black placeholder-gray-300 focus:outline-none focus:border-primary focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                                        Correo electrónico *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="tu@correo.com"
                                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3.5 font-bold text-black placeholder-gray-300 focus:outline-none focus:border-primary focus:bg-white transition-all"
                                    />
                                </div>

                                {/* Motivo */}
                                <div>
                                    <label className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                                        Motivo de contacto
                                    </label>
                                    <div className="flex flex-wrap gap-2">
                                        {reasons.map((r) => (
                                            <label
                                                key={r}
                                                className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 cursor-pointer font-bold text-sm transition-all ${
                                                    formData.reason === r
                                                        ? 'bg-primary border-primary text-white'
                                                        : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                                                }`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="reason"
                                                    value={r}
                                                    checked={formData.reason === r}
                                                    onChange={handleChange}
                                                    className="hidden"
                                                />
                                                {r}
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Mensaje */}
                                <div>
                                    <label htmlFor="message" className="block text-xs font-black uppercase tracking-widest text-gray-400 mb-2">
                                        Mensaje
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        placeholder="¿En qué podemos ayudarte?"
                                        className="w-full bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3.5 font-bold text-black placeholder-gray-300 focus:outline-none focus:border-primary focus:bg-white transition-all resize-none"
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="w-full flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-xl font-black text-base uppercase tracking-widest hover:bg-primary/90 active:scale-98 transition-all shadow-lg hover:shadow-xl"
                                >
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
