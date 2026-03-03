import { motion } from 'framer-motion';
import { Zap, ShieldCheck, Heart, Sparkles } from 'lucide-react';
import Layout from '../components/Layout';

const Attractions = () => {
    const categories = [
        {
            title: 'Grandes Emociones',
            description: 'Nuestras atracciones más icónicas para los valientes.',
            items: ['Guácala', 'Huracán', 'Globos', 'Fire Chief', 'Bumpo']
        },
        {
            title: 'Aventura Junior',
            description: 'Diversión perfecta para los más pequeños de la familia.',
            items: ['Cactus', 'Canoa', 'Scrambler', 'Jumpin', 'Mini pista', 'Grillo', 'Barón rojo', 'Mini rueda', 'Dakar', 'Tazas', 'Apache', 'Mirror Maze', 'Volantín']
        },
        {
            title: 'Xtreme & Especiales',
            description: 'Desafíos adicionales para llevar la diversión al siguiente nivel.',
            items: ['Tirolesa', 'Xtreme', 'Reptour', 'Carros eléctricos', 'Bungy', 'Sendero del Terror']
        }
    ];

    return (
        <Layout>
            <section className="pt-40 pb-20 bg-black">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <h1 className="text-6xl font-black mb-6">NUESTRAS <span className="text-gradient">ATRACCIONES</span></h1>
                        <p className="text-text-muted text-lg">
                            Desde emociones fuertes hasta aventuras suaves para los más pequeños.
                            En Peri Mágico tenemos algo especial para cada miembro de la familia.
                        </p>
                    </motion.div>

                    {categories.map((cat, catIdx) => (
                        <div key={cat.title} className="mb-24">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="h-px flex-1 bg-white/10" />
                                <h2 className="text-2xl font-black tracking-widest uppercase">{cat.title}</h2>
                                <div className="h-px flex-1 bg-white/10" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {cat.items.map((item, idx) => (
                                    <motion.div
                                        key={item}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.05 }}
                                        className="glass p-6 group hover:border-primary/40 transition-all cursor-default"
                                    >
                                        <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                            {catIdx === 0 ? <Zap className="text-magenta" size={24} /> : catIdx === 1 ? <Heart className="text-primary" size={24} /> : <ShieldCheck className="text-secondary" size={24} />}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 uppercase tracking-tight group-hover:text-white transition-colors">{item}</h3>
                                        <p className="text-xs text-text-muted leading-relaxed">
                                            Experimenta la adrenalina y la magia de {item} en un ambiente seguro y divertido.
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Restrictions Info */}
                    <div className="glass p-10 mt-20 bg-gradient-to-r from-red-500/5 to-transparent border-red-500/10">
                        <h3 className="text-xl font-black mb-6 flex items-center gap-2">
                            <Sparkles className="text-secondary" /> RESTRICCIONES DE SEGURIDAD
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-text-muted">
                            <div className="space-y-2">
                                <p><strong className="text-white uppercase">Tirolesa, Bungy y Xtreme:</strong> Mínimo 15 kg, máximo 60 kg.</p>
                                <p><strong className="text-white uppercase">Carros eléctricos:</strong> Mínimo 15 kg, máximo 40 kg.</p>
                            </div>
                            <p>
                                * Por seguridad, algunas atracciones tienen restricciones de altura y peso.
                                Favor de consultar con nuestro staff antes de abordar.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Attractions;
