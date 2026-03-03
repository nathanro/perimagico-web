import { motion } from 'framer-motion';
import { CreditCard, Shield, Calendar as CalendarIcon, Users, ArrowRight } from 'lucide-react';
import Layout from '../components/Layout';

const Reservaciones = () => {
    return (
        <Layout>
            <section className="pt-40 pb-24 bg-black">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-2xl mx-auto mb-16"
                    >
                        <h1 className="text-5xl font-black mb-6 uppercase">BOLETERÍA <span className="text-gradient">DIGITAL</span></h1>
                        <p className="text-text-muted">Reserva tus lugares y evita filas. Tu aventura comienza aquí mismo.</p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Step 1: Selection */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="glass p-8">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center text-sm font-black">1</div>
                                    SELECCIONA TU PASE
                                </h3>
                                <div className="space-y-4">
                                    {[
                                        { name: 'Daypass Platinum', price: '$450', desc: 'Acceso total iliitado' },
                                        { name: 'Daypass', price: '$350', desc: 'Juegos mecánicos ilimitados' },
                                        { name: 'Acceso General', price: '$235', desc: '4 juegos incluidos' },
                                    ].map((pass) => (
                                        <div key={pass.name} className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-white/5 hover:border-primary/40 transition-all cursor-pointer group">
                                            <div>
                                                <span className="block font-bold group-hover:text-primary transition-colors">{pass.name}</span>
                                                <span className="text-xs text-text-muted">{pass.desc}</span>
                                            </div>
                                            <span className="text-xl font-black">{pass.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="glass p-8">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center text-sm font-black">2</div>
                                    DETALLES DE LA VISITA
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-text-muted">Fecha</label>
                                        <div className="relative">
                                            <CalendarIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                                            <input type="date" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-primary" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase text-text-muted">Cantidad de Personas</label>
                                        <div className="relative">
                                            <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                                            <input type="number" min="1" defaultValue="1" className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 outline-none focus:border-primary" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="glass p-8">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-primary text-black flex items-center justify-center text-sm font-black">3</div>
                                    MÉTODO DE PAGO
                                </h3>
                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <button className="flex items-center justify-center gap-2 p-4 rounded-xl border border-primary bg-primary/10 font-bold">
                                        <CreditCard size={18} /> TARJETA
                                    </button>
                                    <button className="flex items-center justify-center gap-2 p-4 rounded-xl border border-white/5 bg-white/5 font-bold opacity-50">
                                        PAYPAL
                                    </button>
                                </div>
                                <div className="space-y-4">
                                    <input type="text" placeholder="Número de Tarjeta" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary" />
                                    <div className="grid grid-cols-2 gap-4">
                                        <input type="text" placeholder="MM/YY" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary" />
                                        <input type="text" placeholder="CVV" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2: Summary */}
                        <div className="lg:col-span-1">
                            <div className="glass p-8 sticky top-32 bg-gradient-to-br from-magenta/5 to-transparent border-magenta/20">
                                <h3 className="text-xl font-black mb-8 uppercase">RESUMEN DE COMPRA</h3>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-muted">Daypass Platinum x 1</span>
                                        <span className="font-bold">$450.00</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-text-muted">Cargos de servicio</span>
                                        <span className="font-bold">$25.00</span>
                                    </div>
                                    <div className="h-px bg-white/10 my-4" />
                                    <div className="flex justify-between text-xl font-black">
                                        <span>TOTAL</span>
                                        <span className="text-secondary" style={{ color: 'var(--color-secondary)' }}>$475.00</span>
                                    </div>
                                </div>

                                <div className="bg-white/5 p-4 rounded-xl mb-8 flex items-start gap-3">
                                    <Shield size={20} className="text-primary flex-shrink-0" />
                                    <p className="text-[10px] text-text-muted leading-relaxed">
                                        Tus pagos están protegidos con encriptación de grado militar. No almacenamos los datos de tu tarjeta.
                                    </p>
                                </div>

                                <button className="btn btn-magenta w-full py-4 text-lg">
                                    PAGAR AHORA <ArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Reservaciones;
