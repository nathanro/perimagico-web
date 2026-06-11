import { useState } from 'react';
import { Send, Phone, Mail } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        reason: 'Fiestas/Eventos',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('¡Gracias por contactarnos! Te responderemos muy pronto.');
        setFormData({ name: '', email: '', phone: '', reason: 'Fiestas/Eventos', message: '' });

        setTimeout(() => {
            setStatus('');
        }, 5000);
    };

    const reasons = [
        'Fiestas/Eventos',
        'Boletos/Tickets',
        'Quejas/Sugerencias',
        'Reservación',
        'Otros'
    ];

    return (
        <section id="contacto" className="bg-gray-50 py-20 md:py-28 relative overflow-hidden">
            <div className="container max-w-5xl px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-gray-900 mb-4">
                        Contacto
                    </h2>
                    <p className="text-gray-600 font-semibold text-lg max-w-2xl mx-auto">
                        ¿Preguntas o consultas? Nos encantaría escucharte. Completa el formulario y nos pondremos en contacto pronto.
                    </p>
                </div>

                {status && (
                    <div className="bg-green-50 border-l-4 border-green-500 text-green-800 p-4 font-semibold text-center mb-8 rounded max-w-2xl mx-auto animate-pulse">
                        ✅ {status}
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone size={24} className="text-blue-600" />
                        </div>
                        <h3 className="font-black text-gray-900 uppercase tracking-wide mb-2">Teléfono</h3>
                        <a href="tel:+525558182348" className="text-blue-600 font-bold hover:text-blue-800 transition-colors">
                            55 5818 2348
                        </a>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail size={24} className="text-blue-600" />
                        </div>
                        <h3 className="font-black text-gray-900 uppercase tracking-wide mb-2">Email</h3>
                        <a href="mailto:ventas@perimagico.com.mx" className="text-blue-600 font-bold hover:text-blue-800 transition-colors break-all">
                            ventas@perimagico.com.mx
                        </a>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Send size={24} className="text-blue-600" />
                        </div>
                        <h3 className="font-black text-gray-900 uppercase tracking-wide mb-2">WhatsApp</h3>
                        <a href="https://wa.me/525558182348" target="_blank" rel="noreferrer" className="text-blue-600 font-bold hover:text-blue-800 transition-colors">
                            Enviar mensaje
                        </a>
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-gray-200">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <label htmlFor="name" className="block text-sm font-black uppercase tracking-wide text-gray-900 mb-3">
                                    Nombre Completo
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white text-gray-900 border-2 border-gray-300 rounded-xl px-4 py-3 font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                                    placeholder="Tu nombre..."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-black uppercase tracking-wide text-gray-900 mb-3">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white text-gray-900 border-2 border-gray-300 rounded-xl px-4 py-3 font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                                    placeholder="tu@correo.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-black uppercase tracking-wide text-gray-900 mb-3">
                                    Teléfono
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white text-gray-900 border-2 border-gray-300 rounded-xl px-4 py-3 font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400"
                                    placeholder="55 12345678"
                                />
                            </div>

                            <div>
                                <label htmlFor="reason" className="block text-sm font-black uppercase tracking-wide text-gray-900 mb-3">
                                    Motivo de Contacto
                                </label>
                                <select
                                    id="reason"
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleChange}
                                    className="w-full bg-white text-gray-900 border-2 border-gray-300 rounded-xl px-4 py-3 font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                                >
                                    {reasons.map((r) => (
                                        <option key={r} value={r}>{r}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-black uppercase tracking-wide text-gray-900 mb-3">
                                Mensaje
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="6"
                                className="w-full bg-white text-gray-900 border-2 border-gray-300 rounded-xl px-4 py-3 font-semibold focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all resize-none placeholder-gray-400"
                                placeholder="Cuéntanos qué necesitas..."
                            ></textarea>
                        </div>

                        <div className="flex justify-center pt-4">
                            <button
                                type="submit"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-lg rounded-full uppercase font-black tracking-widest shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3"
                            >
                                <Send size={20} />
                                Enviar Mensaje
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
