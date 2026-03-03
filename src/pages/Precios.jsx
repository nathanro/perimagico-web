import { motion } from 'framer-motion';
import { Check, Star, Users, Pizza, Zap } from 'lucide-react';
import Layout from '../components/Layout';

const Pricing = () => {
    const tiers = [
        {
            name: 'Acceso General',
            price: '$235',
            description: 'Ideal para quienes quieren conocer por primera vez.',
            features: ['Entrada al parque', '4 juegos mecánicos/extremos (1 vez)', 'Acceso a Food Bar'],
            cta: 'Elegir Acceso',
            accent: 'var(--color-primary)'
        },
        {
            name: 'Daypass',
            price: '$350',
            description: 'Diversión ilimitada en juegos mecánicos.',
            features: ['Entrada al parque', 'Juegos mecánicos ilimitados', 'Juegos extremos ilimitados', 'Respeta altura y reglas de juegos'],
            highlight: true,
            cta: 'Elegir Daypass',
            accent: 'var(--color-accent-magenta)'
        },
        {
            name: 'Daypass Platinum',
            price: '$450',
            description: 'La experiencia completa de Peri Mágico.',
            features: ['Entrada al parque', 'Juegos mecánicos ilimitados', 'Atracciones ilimitadas (Todas)', 'Prioridad en acceso'],
            cta: 'Elegir Platinum',
            accent: 'var(--color-secondary)'
        }
    ];

    const families = [
        {
            name: 'Familiar Normal',
            price: '$1200',
            details: '4 personas con Daypass. (No incluye atracciones especiales).',
            icon: <Users size={32} />
        },
        {
            name: 'Familiar Premium',
            price: '$1,550',
            details: '4 personas con Daypass + $250 Arcade + Pizza Familiar + Refresco 2L + 4 Palomitas + Atracciones Ilimitadas.',
            icon: <Pizza size={32} />,
            featured: true
        }
    ];

    return (
        <Layout>
            <section className="pt-40 pb-24 bg-black">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-2xl mx-auto mb-20"
                    >
                        <h1 className="text-6xl font-black mb-6">PLANES & <span className="text-gradient">PRECIOS</span></h1>
                        <p className="text-text-muted">Elige el pase que mejor se adapte a tu aventura. Todos nuestros pases garantizan un día lleno de magia.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-32">
                        {tiers.map((tier, idx) => (
                            <motion.div
                                key={tier.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className={`flex flex-col p-10 rounded-[32px] glass relative ${tier.highlight ? 'border-magenta/40 bg-magenta/5 scale-105 z-10' : ''}`}
                                style={{ borderColor: tier.highlight ? 'rgba(255, 0, 255, 0.4)' : 'rgba(255, 255, 255, 0.05)' }}
                            >
                                {tier.highlight && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-magenta text-white text-[10px] font-black px-4 py-1 rounded-full uppercase tracking-widest" style={{ backgroundColor: 'var(--color-accent-magenta)' }}>
                                        MÁS POPULAR
                                    </div>
                                )}
                                <h3 className="text-sm font-black tracking-[0.2em] text-text-muted uppercase mb-4">{tier.name}</h3>
                                <div className="flex items-baseline gap-1 mb-6">
                                    <span className="text-5xl font-black">{tier.price}</span>
                                    <span className="text-text-muted text-sm uppercase">/ Persona</span>
                                </div>
                                <p className="text-sm text-text-muted mb-8 leading-relaxed">{tier.description}</p>
                                <div className="space-y-4 mb-10 flex-1">
                                    {tier.features.map((f) => (
                                        <div key={f} className="flex items-start gap-3 text-sm">
                                            <div className="mt-1 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                                                <Check size={10} className="text-primary" />
                                            </div>
                                            <span>{f}</span>
                                        </div>
                                    ))}
                                </div>
                                <button
                                    className={`btn w-full ${tier.highlight ? 'btn-magenta' : 'btn-outline'}`}
                                    style={{ backgroundColor: tier.highlight ? 'var(--color-accent-magenta)' : 'transparent' }}
                                >
                                    {tier.cta}
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Family Packages */}
                    <div className="mb-24">
                        <h2 className="text-4xl font-black mb-12 text-center underline decoration-primary underline-offset-[12px]" style={{ textDecorationColor: 'var(--color-primary)' }}>PAQUETES FAMILIARES</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {families.map((fam) => (
                                <div key={fam.name} className={`glass p-8 flex items-center gap-8 group transition-all ${fam.featured ? 'bg-secondary/5 border-secondary/20' : ''}`}>
                                    <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${fam.featured ? 'bg-secondary text-black' : 'bg-white/5 text-white'}`} style={{ backgroundColor: fam.featured ? 'var(--color-secondary)' : 'rgba(255, 255, 255, 0.05)' }}>
                                        {fam.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="text-2xl font-black uppercase">{fam.name}</h4>
                                            <span className="text-3xl font-black text-secondary" style={{ color: 'var(--color-secondary)' }}>{fam.price}</span>
                                        </div>
                                        <p className="text-sm text-text-muted max-w-md">{fam.details}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Important Notice */}
                    <div className="glass p-6 border-white/10 flex justify-center text-center">
                        <p className="text-xs text-text-muted uppercase tracking-widest font-bold">
                            <Zap size={14} className="inline mr-2 text-primary" /> Ningún paquete familiar o general incluye calcetas antiderrapantes ($60)
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Pricing;
