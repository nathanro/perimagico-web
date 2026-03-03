import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Send } from 'lucide-react';
import Layout from '../components/Layout';

const Contacto = () => {
    return (
        <Layout>
            <section className="pt-40 pb-24 bg-black">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-2xl mx-auto mb-20"
                    >
                        <h1 className="text-6xl font-black mb-6">ESTAMOS EN <span className="text-gradient">CONTACTO</span></h1>
                        <p className="text-text-muted">¿Tienes alguna duda o quieres organizar un evento? Nuestro equipo está listo para ayudarte a crear magia.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl font-black mb-10 uppercase tracking-tighter underline decoration-primary underline-offset-8" style={{ textDecorationColor: 'var(--color-primary)' }}>Info de Contacto</h2>

                            <div className="space-y-10">
                                <div className="flex gap-6 items-start">
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(137, 207, 240, 0.1)' }}>
                                        <MapPin className="text-primary" style={{ color: 'var(--color-primary)' }} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">Visítanos</h4>
                                        <p className="text-text-muted">Plaza Galerías, Ciudad de México, CP 12345</p>
                                        <a href="#" className="text-xs font-black text-secondary mt-2 inline-block uppercase" style={{ color: 'var(--color-secondary)' }}>Ver en Google Maps</a>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)' }}>
                                        <Phone className="text-secondary" style={{ color: 'var(--color-secondary)' }} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">Llámanos</h4>
                                        <p className="text-text-muted">+52 55 1234 5678</p>
                                        <p className="text-text-muted">+52 55 8765 4321</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 items-start">
                                    <div className="w-14 h-14 rounded-2xl bg-magenta/10 flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(255, 0, 255, 0.1)' }}>
                                        <Mail className="text-magenta" style={{ color: 'var(--color-accent-magenta)' }} />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">Escríbenos</h4>
                                        <p className="text-text-muted">hola@perimagico.com</p>
                                        <p className="text-text-muted">ventas@perimagico.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-16">
                                <h4 className="text-sm font-black uppercase tracking-widest text-text-muted mb-6">Síguenos en Redes</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 glass flex items-center justify-center hover:bg-magenta transition-all">
                                        <Instagram size={24} />
                                    </a>
                                    <a href="#" className="w-12 h-12 glass flex items-center justify-center hover:bg-magenta transition-all">
                                        <Facebook size={24} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-10"
                        >
                            <h3 className="text-2xl font-black mb-8 uppercase">Envíanos un Mensaje</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-text-muted ml-1">Nombre</label>
                                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold uppercase text-text-muted ml-1">Email</label>
                                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-text-muted ml-1">Asunto</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all appearance-none">
                                        <option>Información General</option>
                                        <option>Fiesta de Cumpleaños</option>
                                        <option>Evento Corporativo</option>
                                        <option>Escuelas / Grupos</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase text-text-muted ml-1">Mensaje</label>
                                    <textarea rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-primary outline-none transition-all"></textarea>
                                </div>
                                <button type="button" className="btn btn-magenta w-full py-4 text-lg">
                                    ENVIAR MENSAJE <Send size={18} />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contacto;
