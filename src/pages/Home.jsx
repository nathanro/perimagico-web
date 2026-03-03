import { motion } from 'framer-motion';
import { Calendar, Clock, Star, Zap, Ticket } from 'lucide-react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

const Home = () => {
    const attractionsPreview = [
        { name: 'Guácala', type: 'Extremo', color: 'var(--color-accent-magenta)' },
        { name: 'La Rueda', type: 'Familiar', color: 'var(--color-primary)' },
        { name: 'Ninja Parkour', type: 'Activo', color: 'var(--color-secondary)' },
        { name: 'Inflatables', type: 'Niños', color: 'var(--color-accent-orange)' },
    ];

    return (
        <Layout>
            <Hero />

            {/* Schedules & Quick Info */}
            <section className="section-padding relative overflow-hidden">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass p-8 col-span-1 lg:col-span-2"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center" style={{ backgroundColor: 'rgba(255, 215, 0, 0.1)' }}>
                                    <Clock className="text-secondary" style={{ color: 'var(--color-secondary)' }} />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-black">HORARIOS DE <span className="text-primary">MAGIA</span></h2>
                                    <p className="text-text-muted text-sm">Planifica tu visita hoy mismo.</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { day: 'Lun', hours: 'Cerrado', active: false },
                                    { day: 'Mar - Jue', hours: '4pm - 9pm', active: true },
                                    { day: 'Vie', hours: '4pm - 11pm', active: true },
                                    { day: 'Sáb - Dom', hours: '12pm - 11pm', active: true },
                                ].map((item) => (
                                    <div key={item.day} className={`p-4 rounded-xl border ${item.active ? 'border-white/10 bg-white/5' : 'border-red-500/20 bg-red-500/5 opacity-50'}`}>
                                        <span className="block text-xs font-bold uppercase tracking-widest text-text-muted mb-1">{item.day}</span>
                                        <span className={`text-lg font-black ${!item.active ? 'text-red-400' : 'text-white'}`}>{item.hours}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass p-8 bg-gradient-to-br from-primary/10 to-transparent"
                        >
                            <Star className="text-secondary mb-4" style={{ color: 'var(--color-secondary)' }} />
                            <h3 className="text-2xl font-black mb-4">¿LISTO PARA <br />LA AVENTURA?</h3>
                            <p className="text-sm text-text-muted mb-6">Compra tus boletos en línea y evita filas. ¡Aprovecha nuestros paquetes familiares!</p>
                            <button className="btn btn-primary w-full">COMPRAR BOLETOS</button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Attractions Grid */}
            <section className="section-padding bg-gradient-to-b from-transparent to-black/40">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                        <div>
                            <span className="text-primary font-bold tracking-[0.3em] uppercase mb-2 block" style={{ color: 'var(--color-primary)' }}>Experiencias</span>
                            <h2 className="text-5xl font-black">ATRACCIONES <span className="text-gradient">DESTACADAS</span></h2>
                        </div>
                        <button className="btn btn-outline">VER TODO <ArrowRight size={18} /></button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {attractionsPreview.map((attr, idx) => (
                            <motion.div
                                key={attr.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="group relative h-[400px] rounded-3xl overflow-hidden glass border-white/5"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10" />
                                <div className="absolute top-4 left-4 z-20">
                                    <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/10">
                                        {attr.type}
                                    </span>
                                </div>
                                <div className="absolute bottom-6 left-6 z-20">
                                    <h3 className="text-2xl font-black mb-2 group-hover:text-primary transition-colors" style={{ '--hover-color': attr.color }}>{attr.name}</h3>
                                    <button className="flex items-center gap-2 text-xs font-bold text-text-muted group-hover:text-white transition-colors">
                                        LEER MÁS <Zap size={14} className="text-secondary" style={{ color: 'var(--color-secondary)' }} />
                                    </button>
                                </div>
                                {/* Placeholder image background */}
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(https://images.unsplash.com/photo-1505312015328-912b5cd37eef?q=80&w=400&h=600&fit=crop)` }}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick CTA Daypass */}
            <section className="py-24">
                <div className="container">
                    <div className="glass p-12 relative overflow-hidden flex flex-col items-center text-center">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-magenta/5 via-transparent to-primary/5 -z-10" />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-2xl"
                        >
                            <Ticket size={48} className="text-magenta mb-6 mx-auto" style={{ color: 'var(--color-accent-magenta)' }} />
                            <h2 className="text-4xl font-black mb-6">MÁXIMA DIVERSIÓN CON EL <br /><span className="text-secondary" style={{ color: 'var(--color-secondary)' }}>DAYPASS PLATINUM</span></h2>
                            <p className="text-text-muted mb-10">
                                ¿Por qué limitarse? Con nuestro Daypass Platinum tienes acceso ilimitado a todas nuestras atracciones,
                                juegos extremos e inflables durante todo el día por solo $450.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button className="btn btn-magenta px-10 py-4 text-lg">COMPRAR AHORA</button>
                                <button className="btn btn-outline px-10">VER OTROS PRECIOS</button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

// Internal icon for the button since ArrowRight wasn't imported in this specific scope check
const ArrowRight = ({ size }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14m-7-7 7 7-7 7" />
    </svg>
);

export default Home;
