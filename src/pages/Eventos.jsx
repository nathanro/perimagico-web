import { motion } from 'framer-motion';
import { Cake, Briefcase, Gift, PartyPopper, Calendar, MessageSquare } from 'lucide-react';
import Layout from '../components/Layout';

const Eventos = () => {
    return (
        <Layout>
            <section className="pt-40 pb-24 bg-black">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-2xl mx-auto mb-20"
                    >
                        <h1 className="text-6xl font-black mb-6">MOMENTOS <span className="text-gradient">INOLVIDABLES</span></h1>
                        <p className="text-text-muted">Celebra tus eventos más importantes con nosotros. Desde cumpleaños mágicos hasta eventos corporativos únicos.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
                        {/* Birthday Parties */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-10 relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-magenta/10 blur-[60px] rounded-full" style={{ backgroundColor: 'rgba(255, 0, 255, 0.1)' }} />
                            <Cake size={48} className="text-magenta mb-8" style={{ color: 'var(--color-accent-magenta)' }} />
                            <h2 className="text-4xl font-black mb-6 uppercase">CUMPLEAÑOS <br />MÁGICOS</h2>
                            <p className="text-text-muted mb-8 leading-relaxed">
                                Regálale a tu pequeño el mejor día de su vida. Nuestros paquetes de cumpleaños incluyen todo lo necesario para una fiesta sin preocupaciones y llena de diversión.
                            </p>
                            <ul className="space-y-3 mb-10 text-sm font-semibold">
                                <li className="flex items-center gap-2"><PartyPopper size={16} className="text-secondary" /> Área reservada exclusiva</li>
                                <li className="flex items-center gap-2"><PartyPopper size={16} className="text-secondary" /> Menú infantil y pastel</li>
                                <li className="flex items-center gap-2"><PartyPopper size={16} className="text-secondary" /> Acceso ilimitado a atracciones</li>
                                <li className="flex items-center gap-2"><PartyPopper size={16} className="text-secondary" /> Coordinador de eventos</li>
                            </ul>
                            <button className="btn btn-magenta w-full">COTIZAR CUMPLEAÑOS</button>
                        </motion.div>

                        {/* Corporate/Private Events */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass p-10 relative overflow-hidden group border-primary/20 bg-primary/5"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full" style={{ backgroundColor: 'rgba(137, 207, 240, 0.1)' }} />
                            <Briefcase size={48} className="text-primary" style={{ color: 'var(--color-primary)' }} />
                            <h2 className="text-4xl font-black mb-6 uppercase">EVENTOS <br />CORPORATIVOS</h2>
                            <p className="text-text-muted mb-8 leading-relaxed">
                                Lleva tus eventos empresariales, integraciones o lanzamientos de marca a un nivel extraordinario. Un espacio versátil con la mejor atmósfera.
                            </p>
                            <ul className="space-y-3 mb-10 text-sm font-semibold">
                                <li className="flex items-center gap-2"><Gift size={16} className="text-secondary" /> Alquiler total o parcial del parque</li>
                                <li className="flex items-center gap-2"><Gift size={16} className="text-secondary" /> Catering de alta calidad</li>
                                <li className="flex items-center gap-2"><Gift size={16} className="text-secondary" /> Equipo audiovisual completo</li>
                                <li className="flex items-center gap-2"><Gift size={16} className="text-secondary" /> Seguridad y staff privado</li>
                            </ul>
                            <button className="btn btn-primary w-full">SOLICITAR INFO</button>
                        </motion.div>
                    </div>

                    {/* Testimonial Placeholder */}
                    <div className="text-center py-20 border-y border-white/5">
                        <MessageSquare size={32} className="mx-auto text-secondary mb-6" style={{ color: 'var(--color-secondary)' }} />
                        <p className="text-3xl font-light italic text-white/80 max-w-4xl mx-auto leading-relaxed">
                            "La mejor fiesta de cumpleaños que hemos organizado. El staff de Peri Mágico cuidó cada detalle y los niños no querían irse. ¡Totalmente recomendado!"
                        </p>
                        <div className="mt-8">
                            <span className="block font-bold text-white uppercase tracking-widest">Familia Rodriguez</span>
                            <span className="text-xs text-text-muted">Enero 2026</span>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Eventos;
