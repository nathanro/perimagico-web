import { motion } from 'framer-motion';
import { CreditCard, Calendar as CalendarIcon, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import Layout from '../components/Layout';

const Reservaciones = () => {
    return (
        <Layout>
            <section className="pt-40 pb-20 bg-primary" style={{ backgroundColor: 'var(--color-primary)' }}>
                <div className="container relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl text-black font-black uppercase tracking-tighter mb-6 transform rotate-2">
                        BOLETERÍA <br /><span className="text-white" style={{ textShadow: '4px 4px 0px #000' }}>DIGITAL</span>
                    </h1>
                    <p className="text-xl font-bold max-w-2xl mx-auto text-black bg-white p-4 border-4 border-black inline-block mt-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        Asegura tu lugar hoy mismo y evita filas.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white">
                <div className="container grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Steps Column */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Step 1 */}
                        <div className="bg-white border-4 border-black p-8 shadow-[10px_10px_0_0_var(--color-secondary)]">
                            <h3 className="text-3xl font-black uppercase border-b-4 border-black pb-4 mb-8 flex items-center gap-4">
                                <span className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl">1</span>
                                SELECCIONA TU PASE
                            </h3>

                            <div className="space-y-4">
                                {[
                                    { name: 'Daypass Platinum', price: '$450', desc: 'Acceso total ilimitado a todo', popular: true, color: 'var(--color-secondary)' },
                                    { name: 'Daypass', price: '$350', desc: 'Juegos ilimitados (sin atracciones especiales)' },
                                    { name: 'Acceso General', price: '$235', desc: '4 juegos incluidos' },
                                ].map((pass) => (
                                    <div key={pass.name} className={`flex items-center justify-between p-6 border-4 cursor-pointer transition-colors ${pass.popular ? 'border-black bg-[#FFD700]' : 'border-gray-300 bg-gray-50 hover:border-black'}`}>
                                        <div>
                                            <span className="block text-2xl font-black uppercase">{pass.name} {pass.popular && <span className="text-xs bg-black text-white px-2 py-1 ml-2">RECOMENDADO</span>}</span>
                                            <span className="text-sm font-bold text-gray-800 mt-1 block">{pass.desc}</span>
                                        </div>
                                        <span className="text-3xl font-black">{pass.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white border-4 border-black p-8 shadow-[10px_10px_0_0_var(--color-accent-magenta)] relative">
                            <h3 className="text-3xl font-black uppercase border-b-4 border-black pb-4 mb-8 flex items-center gap-4">
                                <span className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl">2</span>
                                TU VISITA
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <label className="block text-sm font-black uppercase mb-2">FECHA</label>
                                    <div className="relative">
                                        <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={24} />
                                        <input type="date" className="w-full bg-gray-100 text-black p-4 pl-14 border-4 border-black outline-none font-bold text-lg" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-black uppercase mb-2">CANTIDAD DE PERSONAS</label>
                                    <div className="relative">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-black" size={24} />
                                        <input type="number" min="1" defaultValue="1" className="w-full bg-gray-100 text-black p-4 pl-14 border-4 border-black outline-none font-bold text-lg" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white border-4 border-black p-8 shadow-[10px_10px_0_0_var(--color-primary)]">
                            <h3 className="text-3xl font-black uppercase border-b-4 border-black pb-4 mb-8 flex items-center gap-4">
                                <span className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full text-2xl">3</span>
                                PAGO SEGURO
                            </h3>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <button className="bg-black text-white p-4 font-black text-xl uppercase border-4 border-black flex items-center justify-center gap-2">
                                    <CreditCard size={24} /> TARJETA
                                </button>
                                <button className="bg-gray-100 text-gray-500 p-4 font-black text-xl uppercase border-4 border-gray-300 flex items-center justify-center gap-2">
                                    PAYPAL
                                </button>
                            </div>

                            <div className="space-y-4">
                                <input type="text" placeholder="Número de Tarjeta" className="w-full bg-gray-50 text-black p-4 border-4 border-gray-300 focus:border-black outline-none font-bold text-lg" />
                                <div className="grid grid-cols-2 gap-4">
                                    <input type="text" placeholder="MM/YY" className="w-full bg-gray-50 text-black p-4 border-4 border-gray-300 focus:border-black outline-none font-bold text-lg" />
                                    <input type="text" placeholder="CVV" className="w-full bg-gray-50 text-black p-4 border-4 border-gray-300 focus:border-black outline-none font-bold text-lg" />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Summary Column */}
                    <div>
                        <div className="bg-black text-white p-8 border-4 border-black shadow-[15px_15px_0_0_var(--color-accent-magenta)] sticky top-32">
                            <h3 className="text-3xl font-black uppercase border-b-4 border-white pb-4 mb-8 text-secondary" style={{ color: 'var(--color-secondary)' }}>RESUMEN</h3>

                            <div className="space-y-4 mb-8 text-lg font-bold">
                                <div className="flex justify-between">
                                    <span>Daypass Platinum x 1</span>
                                    <span>$450.00</span>
                                </div>
                                <div className="flex justify-between text-gray-400 text-base">
                                    <span>Cargos de servicio</span>
                                    <span>$25.00</span>
                                </div>
                                <div className="h-1 bg-white my-6" />
                                <div className="flex justify-between text-4xl font-black uppercase text-primary" style={{ color: 'var(--color-primary)' }}>
                                    <span>TOTAL</span>
                                    <span>$475.00</span>
                                </div>
                            </div>

                            <div className="bg-white text-black p-4 font-bold text-sm flex items-start gap-4 border-4 border-white mb-8 border-dashed">
                                <ShieldCheck size={32} className="text-green-500 shrink-0" />
                                <p>Tus pagos están encriptados y protegidos con seguridad de grado militar.</p>
                            </div>

                            <button className="btn btn-magenta w-full text-2xl py-6 tracking-tighter hover:scale-105 transform transition-transform shadow-[4px_4px_0_0_#fff]">
                                PAGAR AHORA <ArrowRight size={24} className="ml-2" />
                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    );
};

export default Reservaciones;
