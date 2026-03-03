import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import Layout from '../components/Layout';

const Contacto = () => {
    return (
        <Layout>
            <section className="pt-40 pb-20 bg-black text-white" style={{ backgroundImage: 'radial-gradient(circle at 100% 100%, var(--color-accent-magenta) 0%, transparent 50%)' }}>
                <div className="container relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">
                        HABLEMOS DE <br /><span className="text-primary" style={{ color: 'var(--color-primary)' }}>MAGIA</span>
                    </h1>
                    <p className="text-xl font-bold max-w-2xl mx-auto">
                        ¿Tienes dudas, comentarios o quieres organizar el evento del año? Nuestro equipo está listo.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white relative">
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Info Side */}
                    <div>
                        <h2 className="text-4xl font-black uppercase mb-12 border-l-8 border-secondary pl-6" style={{ borderColor: 'var(--color-secondary)' }}>INFORMACIÓN<br />DE CONTACTO</h2>

                        <div className="space-y-10">
                            <div className="flex gap-6 items-start">
                                <div className="w-16 h-16 bg-primary text-black flex items-center justify-center transform -rotate-6 border-4 border-black shadow-[4px_4px_0_0_#000]" style={{ backgroundColor: 'var(--color-primary)' }}>
                                    <MapPin size={32} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black uppercase mb-1">Visítanos</h4>
                                    <p className="text-gray-800 font-bold text-lg">Plaza Galerías, Ciudad de México, CP 12345</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-16 h-16 bg-secondary text-black flex items-center justify-center transform rotate-6 border-4 border-black shadow-[4px_4px_0_0_#000]" style={{ backgroundColor: 'var(--color-secondary)' }}>
                                    <Phone size={32} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black uppercase mb-1">Llámanos</h4>
                                    <p className="text-gray-800 font-bold text-lg">+52 55 1234 5678</p>
                                    <p className="text-gray-800 font-bold text-lg">+52 55 8765 4321</p>
                                </div>
                            </div>

                            <div className="flex gap-6 items-start">
                                <div className="w-16 h-16 bg-magenta text-white flex items-center justify-center transform -rotate-3 border-4 border-black shadow-[4px_4px_0_0_#000]" style={{ backgroundColor: 'var(--color-accent-magenta)' }}>
                                    <Mail size={32} />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-black uppercase mb-1">Escríbenos</h4>
                                    <p className="text-gray-800 font-bold text-lg">hola@perimagico.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-16 bg-gray-100 p-8 border-4 border-black">
                            <h4 className="text-xl font-black uppercase mb-6">Síguenos en Redes</h4>
                            <div className="flex gap-4">
                                <a href="#" className="w-16 h-16 bg-black text-white flex items-center justify-center hover:bg-magenta transition-colors border-2 border-black">
                                    <Instagram size={32} />
                                </a>
                                <a href="#" className="w-16 h-16 bg-black text-white flex items-center justify-center hover:bg-magenta transition-colors border-2 border-black">
                                    <Facebook size={32} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-black p-10 md:p-16 text-white border-8 border-primary shadow-[15px_15px_0_0_var(--color-secondary)] relative" style={{ borderColor: 'var(--color-primary)' }}>
                        <h3 className="text-4xl font-black uppercase mb-10 text-center">ENVÍANOS UN<br /><span className="text-magenta" style={{ color: 'var(--color-accent-magenta)' }}>MENSAJE</span></h3>

                        <form className="space-y-6">
                            <div>
                                <label className="block text-sm font-black uppercase mb-2">Nombre Completo</label>
                                <input type="text" className="w-full bg-white text-black p-4 border-4 border-transparent focus:border-secondary outline-none rounded-none font-bold" />
                            </div>
                            <div>
                                <label className="block text-sm font-black uppercase mb-2">Correo Electrónico</label>
                                <input type="email" className="w-full bg-white text-black p-4 border-4 border-transparent focus:border-secondary outline-none rounded-none font-bold" />
                            </div>
                            <div>
                                <label className="block text-sm font-black uppercase mb-2">Motivo</label>
                                <select className="w-full bg-white text-black p-4 border-4 border-transparent focus:border-secondary outline-none rounded-none font-bold appearance-none">
                                    <option>Información General</option>
                                    <option>Fiestas Infantiles</option>
                                    <option>Eventos Corporativos</option>
                                    <option>Soporte / Otro</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-black uppercase mb-2">Mensaje</label>
                                <textarea rows="4" className="w-full bg-white text-black p-4 border-4 border-transparent focus:border-secondary outline-none rounded-none font-bold"></textarea>
                            </div>

                            <button type="button" className="btn btn-magenta w-full text-xl py-5 mt-4 border-4 border-transparent hover:border-white uppercase tracking-widest flex items-center justify-center gap-3">
                                Enviar Mensaje <Send size={24} />
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </Layout>
    );
};

export default Contacto;
