import { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
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
        // Here we would typically send the data to a backend or service.
        // For now, we simulate a successful submission.
        setStatus('¡Gracias por contactarnos! Te responderemos muy pronto.');
        setFormData({ name: '', email: '', phone: '', message: '' });

        setTimeout(() => {
            setStatus('');
        }, 5000);
    };

    return (
        <section id="contacto" className="bg-gray-100 py-24 relative overflow-hidden">
            <div className="container relative z-10 max-w-4xl">
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border-4 border-black relative">
                    <div className="absolute -top-6 -right-6 bg-secondary text-black font-black text-xl px-6 py-2 uppercase border-4 border-black transform rotate-3 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">
                        ¡Escríbenos!
                    </div>

                    <h2 className="text-4xl md:text-5xl font-black uppercase mb-4 text-center">Déjanos tus datos</h2>
                    <p className="font-bold text-center text-gray-600 mb-10 text-lg">
                        ¿Tienes dudas sobre nuestros paquetes o quieres reservar una fiesta? Llena el formulario y nos pondremos en contacto contigo.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Nombre Completo</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-50 border-2 border-black rounded-xl px-4 py-3 font-bold focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all"
                                    placeholder="Juan Pérez"
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Teléfono / WhatsApp</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-gray-50 border-2 border-black rounded-xl px-4 py-3 font-bold focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all"
                                    placeholder="55 1234 5678"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-gray-50 border-2 border-black rounded-xl px-4 py-3 font-bold focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all"
                                placeholder="juan@ejemplo.com"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-bold text-gray-700 uppercase tracking-wide mb-2">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="4"
                                className="w-full bg-gray-50 border-2 border-black rounded-xl px-4 py-3 font-bold focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all resize-none"
                                placeholder="Me gustaría información sobre..."
                            ></textarea>
                        </div>

                        {status && (
                            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 font-bold my-4 rounded">
                                {status}
                            </div>
                        )}

                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                className="btn btn-primary w-full md:w-auto px-12 py-4 text-xl border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)]"
                            >
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
