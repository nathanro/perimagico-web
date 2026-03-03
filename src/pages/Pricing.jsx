import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Layout from '../components/Layout';

const Pricing = () => {

    const tiers = [
        {
            name: 'Acceso General / Individual',
            price: '$235',
            description: 'Acceso al parque, solo 4 juegos mecánicos y/o extremos (1 sola vez). No incluye atracciones.',
            color: 'var(--color-primary)', // Azul Baby
            textColor: '#000',
            popular: false
        },
        {
            name: 'Daypass',
            price: '$350',
            description: 'Entrada al parque, todos los juegos mecánicos y/o extremos las veces que quieran respetando altura y regla del juego. No incluye atracciones.',
            color: 'var(--color-accent-magenta)', // Magenta
            textColor: '#fff',
            popular: false
        },
        {
            name: 'Daypass Platinum',
            price: '$450',
            description: 'La experiencia definitiva. Entrada al parque, todos los juegos mecánicos y/o extremos Y atracciones ilimitadas.',
            color: 'var(--color-secondary)', // Amarillo
            textColor: '#000',
            popular: true
        }
    ];

    const families = [
        {
            name: 'Familiar Normal',
            price: '$1200',
            desc: '4 personas con daypass. No incluye atracciones.',
            color: 'var(--color-primary)',
            textColor: '#000'
        },
        {
            name: 'Familiar Premium',
            price: '$1550',
            desc: '4 personas con daypass. $250 de crédito en árcade, 1 pizza familiar, refresco 2L, 4 bolsas palomitas. INCLUYE atracciones ilimitadas.',
            color: 'var(--color-accent-magenta)',
            textColor: '#fff'
        }
    ]

    return (
        <Layout>
            {/* Heavy Black Header Section */}
            <section className="pt-40 pb-20 bg-black text-white relative">
                <div className="container relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6">PRECIOS &<br /><span className="text-secondary" style={{ color: 'var(--color-secondary)' }}>PAQUETES</span></h1>
                    <p className="text-xl font-bold max-w-2xl mx-auto">
                        ¡Sumérgete en la diversión HOY! La magia está a un clic de distancia.
                    </p>
                </div>
            </section>

            {/* Main Pricing Cards - Black Background mapping to Reference 3 */}
            <section className="py-24 bg-black">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {tiers.map((tier, idx) => (
                            <motion.div
                                key={idx}
                                className="p-8 flex flex-col border-4 border-black relative transition-transform hover:-translate-y-2 shadow-[10px_10px_0_0_rgba(255,255,255,0.2)]"
                                style={{ backgroundColor: tier.color, color: tier.textColor }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                {tier.popular && (
                                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-black text-white text-sm font-black px-6 py-2 uppercase tracking-widest border-2 border-white">
                                        MÁS POPULAR
                                    </div>
                                )}
                                <div className="flex-1">
                                    <h3 className="text-2xl lg:text-3xl font-black uppercase mb-8 leading-tight">{tier.name}</h3>
                                    <p className="font-bold text-sm mb-2 opacity-80 uppercase tracking-wide">A partir de</p>
                                    <div className="text-5xl lg:text-7xl font-black mb-6 tracking-tighter">{tier.price}</div>
                                    <p className="font-bold text-base leading-relaxed mb-8">
                                        {tier.description}
                                    </p>
                                </div>
                                <button className="w-full bg-black text-white font-black py-4 uppercase rounded-full hover:bg-gray-800 transition-colors border-2 border-black hover:border-white">
                                    COMPRAR
                                </button>
                            </motion.div>
                        ))}
                    </div>

                    <h2 className="text-center text-4xl md:text-6xl text-white font-black uppercase mb-16">Paquetes Familiares</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {families.map((fam, idx) => (
                            <div
                                key={idx}
                                className="p-8 border-4 border-white shadow-[10px_10px_0_0_var(--color-secondary)] flex flex-col justify-between"
                                style={{ backgroundColor: fam.color, color: fam.textColor }}
                            >
                                <div>
                                    <h3 className="text-3xl font-black uppercase mb-4">{fam.name}</h3>
                                    <div className="text-5xl font-black mb-6 tracking-tighter">{fam.price}</div>
                                    <p className="font-bold text-lg mb-8">
                                        {fam.desc}
                                    </p>
                                </div>
                                <button className="w-full bg-black text-white font-black py-4 uppercase rounded-full hover:bg-gray-800 transition-colors border-2 border-black">
                                    RESERVAR PAQUETE
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 bg-white text-black p-6 font-bold text-center border-4 border-red-500 transform -rotate-1 relative">
                        <span className="text-red-500 font-black text-xl mr-2">AVISO IMPORTANT:</span>
                        Ningún paquete familiar o general incluye calcetas antiderrapantes ($60).
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Pricing;
