import { motion } from 'framer-motion';
import { Utensils, Sandwich, Pizza as PizzaIcon, Coffee, Info } from 'lucide-react';
import Layout from '../components/Layout';

const Restaurante = () => {
    const menu = [
        { category: 'Pizzas', items: ['Pepperoni Clásica', 'Hawaiana Tropical', 'Tres Quesos', 'Vegetariana Premium'] },
        { category: 'Sandwiches & Snacks', items: ['Club Sandwich', 'Panini Italiano', 'Nachos con Queso', 'Papas a la Francesa'] },
        { category: 'Bebidas', items: ['Refrescos 2L', 'Aguas Frescas', 'Malteadas', 'Café & Té'] },
    ];

    return (
        <Layout>
            <section className="pt-40 pb-24 bg-black">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row gap-12 items-center mb-24"
                    >
                        <div className="flex-1">
                            <span className="text-primary font-bold tracking-widest uppercase mb-4 block" style={{ color: 'var(--color-primary)' }}>Gastronomía</span>
                            <h1 className="text-6xl font-black mb-6 uppercase">FANTASTIC <span className="text-gradient">FOOD BAR</span></h1>
                            <p className="text-text-muted text-lg mb-8">
                                Toda esa energía gastada saltando, bailando y escalando en nuestras atracciones necesita ser repuesta.
                                Disfruta de nuestra selección de comida favorita para toda la familia.
                            </p>
                            <div className="flex gap-4">
                                <button className="btn btn-primary">VER MENÚ COMPLETO</button>
                            </div>
                        </div>
                        <div className="flex-1 h-[500px] w-full relative rounded-3xl overflow-hidden glass">
                            <img
                                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
                                alt="Food Bar Pizza"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {menu.map((cat, idx) => (
                            <motion.div
                                key={cat.category}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass p-8"
                            >
                                <div className="flex items-center gap-3 mb-8 pb-4 border-b border-white/10">
                                    {idx === 0 ? <PizzaIcon /> : idx === 1 ? <Utensils /> : <Coffee />}
                                    <h3 className="text-2xl font-black uppercase text-secondary" style={{ color: 'var(--color-secondary)' }}>{cat.category}</h3>
                                </div>
                                <ul className="space-y-4">
                                    {cat.items.map((item) => (
                                        <li key={item} className="flex justify-between items-center group">
                                            <span className="font-bold group-hover:text-primary transition-colors">{item}</span>
                                            <div className="h-px flex-1 mx-4 bg-white/5 group-hover:bg-white/20" />
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-20 p-8 glass text-center border-orange-500/20 bg-orange-500/5">
                        <h4 className="text-xl font-bold mb-4 flex items-center justify-center gap-2">
                            <Info className="text-orange-500" /> OPCIONES PARA MIEMBROS
                        </h4>
                        <p className="text-text-muted text-sm max-w-2xl mx-auto">
                            Nuestros miembros disfrutan de descuentos exclusivos y promociones especiales en el Food Bar todos los días.
                            ¡Pregunta por nuestras membresías en recepción!
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Restaurante;
