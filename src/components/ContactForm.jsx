import { useState } from 'react';

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
        <section id="contacto" className="bg-brandblue py-16 md:py-20 text-white relative overflow-hidden">
            <div className="container max-w-5xl px-4 md:px-8">
                <h2 className="text-center text-4xl md:text-5xl font-black uppercase tracking-wide mb-12">
                    FORMULARIO DE CONTACTO
                </h2>

                {status && (
                    <div className="bg-white text-brandblue border-l-8 border-primary p-4 font-black text-lg my-6 rounded-lg shadow-lg max-w-2xl mx-auto text-center animate-bounce">
                        {status}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        
                        {/* Left Column: Input Fields */}
                        <div className="space-y-6 flex flex-col justify-between">
                            <div>
                                <label htmlFor="name" className="block text-base font-black uppercase tracking-wider mb-2 text-white/90">
                                    • Nombres completo
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white text-black border-2 border-transparent rounded-xl px-5 py-3.5 font-bold shadow-premium focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/20 transition-all"
                                    placeholder="Ingresa tu nombre..."
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-base font-black uppercase tracking-wider mb-2 text-white/90">
                                    • Correo electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white text-black border-2 border-transparent rounded-xl px-5 py-3.5 font-bold shadow-premium focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/20 transition-all"
                                    placeholder="tu@correo.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-base font-black uppercase tracking-wider mb-2 text-white/90">
                                    • Teléfono
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white text-black border-2 border-transparent rounded-xl px-5 py-3.5 font-bold shadow-premium focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/20 transition-all"
                                    placeholder="Tu número telefónico"
                                />
                            </div>
                        </div>

                        {/* Right Column: Checkboxes and Message */}
                        <div className="space-y-6">
                            <div>
                                <label className="block text-base font-black uppercase tracking-wider mb-3 text-white/90">
                                    • Motivo de contacto:
                                </label>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                                    {reasons.map((r) => (
                                        <label key={r} className="flex items-center gap-2 cursor-pointer font-bold text-sm text-white hover:text-secondary transition-colors">
                                            <input
                                                type="radio"
                                                name="reason"
                                                value={r}
                                                checked={formData.reason === r}
                                                onChange={handleChange}
                                                className="w-4 h-4 accent-primary cursor-pointer"
                                            />
                                            {r}
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="4"
                                    className="w-full bg-white text-black border-2 border-transparent rounded-2xl px-5 py-4 font-bold shadow-premium focus:outline-none focus:border-secondary focus:ring-4 focus:ring-secondary/20 transition-all resize-none"
                                    placeholder="¿En qué podemos ayudarte? Escribe tu mensaje aquí..."
                                ></textarea>
                            </div>
                        </div>

                    </div>

                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            className="bg-primary border-4 border-primary text-white px-12 py-4 text-xl rounded-full uppercase font-black tracking-widest shadow-[4px_4px_0_0_rgba(0,0,0,0.25)] hover:bg-transparent hover:text-white transition-all hover:scale-105 active:scale-95"
                        >
                            ENVIAR MENSAJE
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
