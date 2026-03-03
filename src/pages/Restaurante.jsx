import { motion } from 'framer-motion';
import { Utensils, Pizza as PizzaIcon, Coffee } from 'lucide-react';
import Layout from '../components/Layout';

const Restaurante = () => {
    const menu = [
        { category: 'Pizzas', items: ['Pepperoni Clásica', 'Hawaiana Tropical', 'Tres Quesos', 'Vegetariana Premium'] },
        { category: 'Snacks', items: ['Club Sandwich', 'Panini Italiano', 'Nachos con Queso', 'Papas a la Francesa'] },
        { category: 'Bebidas', items: ['Refrescos 2L', 'Aguas Frescas', 'Malteadas', 'Café & Té'] },
    ];

    return (
        <Layout>
            {/* Header section identical to Funtastic Depot image */}
            <section className="bg-white pt-40 pb-12 relative overflow-hidden flex flex-col items-center">
                <div className="w-full h-8 bg-black mb-8 transform -skew-y-2 absolute top-32 z-0" />

                <div className="bg-magenta p-10 text-white w-11/12 md:w-3/4 max-w-5xl relative z-10 transform -rotate-2 shadow-[15px_15px_0_0_#000] border-4 border-black mb-16" style={{ backgroundColor: 'var(--color-accent-magenta)' }}>
                    <h1 className="text-5xl md:text-8xl font-black uppercase mb-6 tracking-tighter text-center">PERI MÁGICO<br /><span className="text-secondary" style={{ color: 'var(--color-secondary)' }}>FOOD BAR</span></h1>
                    <p className="font-bold text-xl md:text-2xl text-center leading-relaxed">
                        ¡La diversión da hambre! Disfruta de una rebanada de pizza, tu panini favorito, papas fritas y mucho más.
                    </p>
                </div>

                <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] border-8 border-black shadow-[15px_15px_0_0_var(--color-primary)] overflow-hidden bg-black flex items-center justify-center p-8">
                        <img src="https://piccolomondo.com.mx/wp-content/uploads/2024/01/pizza.png" className="w-auto h-full max-h-[300px] object-contain drop-shadow-2xl" alt="Pizza" />
                        <div className="absolute top-4 left-4 bg-primary text-black font-black uppercase px-6 py-2 text-2xl border-2 border-black transform -rotate-3" style={{ backgroundColor: 'var(--color-primary)' }}>
                            Deli!
                        </div>
                    </div>

                    <div className="space-y-8">
                        {menu.map((cat, idx) => (
                            <div key={idx} className="bg-black text-white p-8 border-4 border-white shadow-[10px_10px_0_0_var(--color-secondary)]">
                                <div className="flex items-center gap-4 mb-6 border-b-4 border-white/20 pb-4">
                                    {idx === 0 ? <PizzaIcon size={32} className="text-secondary" style={{ color: 'var(--color-secondary)' }} /> : idx === 1 ? <Utensils size={32} className="text-magenta" style={{ color: 'var(--color-accent-magenta)' }} /> : <Coffee size={32} className="text-primary" style={{ color: 'var(--color-primary)' }} />}
                                    <h3 className="text-4xl font-black uppercase">{cat.category}</h3>
                                </div>
                                <ul className="space-y-3 font-bold text-lg">
                                    {cat.items.map(item => <li key={item}>• {item}</li>)}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Membership Banner */}
            <section className="bg-black text-white py-12 border-y-8 border-primary" style={{ borderColor: 'var(--color-primary)' }}>
                <div className="container text-center">
                    <h2 className="text-4xl font-black uppercase mb-4 text-secondary" style={{ color: 'var(--color-secondary)' }}>Beneficios de Membresía</h2>
                    <p className="text-xl font-bold max-w-3xl mx-auto">
                        ¡Nuestros miembros obtienen el 15% de descuento en el Food Bar todos los días! Pregunta en taquilla cómo obtener tu tarjeta.
                    </p>
                </div>
            </section>

        </Layout>
    );
};

export default Restaurante;
