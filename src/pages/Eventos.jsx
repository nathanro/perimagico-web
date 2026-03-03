import { motion } from 'framer-motion';
import { Cake, Briefcase, PartyPopper, Check } from 'lucide-react';
import Layout from '../components/Layout';

const Eventos = () => {
    return (
        <Layout>
            <section className="pt-40 pb-20 bg-primary" style={{ backgroundColor: 'var(--color-primary)' }}>
                <div className="container relative z-10 text-center">
                    <h1 className="text-6xl md:text-8xl text-black font-black uppercase tracking-tighter mb-6 transform -rotate-2">
                        MOMENTOS <br /><span className="text-white" style={{ textShadow: '4px 4px 0px #000' }}>INOLVIDABLES</span>
                    </h1>
                    <p className="text-xl font-bold max-w-2xl mx-auto text-black bg-white p-4 border-4 border-black inline-block mt-4 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        Celebra tus eventos más importantes con nosotros. Desde cumpleaños hasta corporativos.
                    </p>
                </div>
            </section>

            <section className="py-24 bg-white relative overflow-hidden">
                {/* Diagonal Background Shape */}
                <div className="absolute top-0 right-0 w-full md:w-1/2 h-full transform skew-x-12 origin-top-right z-0" style={{ backgroundColor: 'var(--color-secondary)' }} />

                <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16">

                    {/* Fiestas Infantiles */}
                    <div className="bg-black p-12 border-8 border-white text-white shadow-2xl relative">
                        {/* Decorator */}
                        <div className="absolute -top-6 -right-6 w-16 h-16 bg-magenta rounded-full border-4 border-white flex items-center justify-center transform rotate-12" style={{ backgroundColor: 'var(--color-accent-magenta)' }}>
                            <Cake size={32} color="#fff" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">CUMPLEAÑOS<br /><span className="text-primary" style={{ color: 'var(--color-primary)' }}>MÁGICOS</span></h2>

                        <p className="font-bold text-lg mb-8 leading-relaxed">
                            Regálale a tu pequeño el mejor día de su vida. Nuestros paquetes de cumpleaños incluyen todo lo necesario para una fiesta sin preocupaciones.
                        </p>

                        <ul className="space-y-4 mb-10 font-bold">
                            <li className="flex items-center gap-4"><Check className="text-primary" size={24} style={{ color: 'var(--color-primary)' }} /> Área reservada exclusiva</li>
                            <li className="flex items-center gap-4"><Check className="text-primary" size={24} style={{ color: 'var(--color-primary)' }} /> Menú infantil y pastel</li>
                            <li className="flex items-center gap-4"><Check className="text-primary" size={24} style={{ color: 'var(--color-primary)' }} /> Acceso ilimitado a atracciones</li>
                            <li className="flex items-center gap-4"><Check className="text-primary" size={24} style={{ color: 'var(--color-primary)' }} /> Coordinador de eventos</li>
                        </ul>

                        <button className="btn btn-magenta w-full text-xl py-4 border-4 border-transparent hover:border-white">COTIZAR AHORA</button>
                    </div>

                    {/* Eventos Corporativos */}
                    <div className="bg-white p-12 border-8 border-black text-black shadow-[15px_15px_0_0_var(--color-accent-magenta)] relative mt-12 md:mt-24">
                        {/* Decorator */}
                        <div className="absolute -top-6 -left-6 w-16 h-16 bg-secondary text-black rounded-full border-4 border-black flex items-center justify-center transform -rotate-12" style={{ backgroundColor: 'var(--color-secondary)' }}>
                            <Briefcase size={32} color="#000" />
                        </div>

                        <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 leading-tight">EVENTOS<br /><span className="text-magenta" style={{ color: 'var(--color-accent-magenta)' }}>CORPORATIVOS</span></h2>

                        <p className="font-bold text-lg mb-8 leading-relaxed">
                            Lleva tus eventos empresariales o integraciones a un nivel extraordinario. Un espacio seguro, grande y versátil.
                        </p>

                        <ul className="space-y-4 mb-10 font-bold">
                            <li className="flex items-center gap-4"><PartyPopper className="text-magenta" size={24} style={{ color: 'var(--color-accent-magenta)' }} /> Alquiler total del parque</li>
                            <li className="flex items-center gap-4"><PartyPopper className="text-magenta" size={24} style={{ color: 'var(--color-accent-magenta)' }} /> Catering de alta calidad</li>
                            <li className="flex items-center gap-4"><PartyPopper className="text-magenta" size={24} style={{ color: 'var(--color-accent-magenta)' }} /> Equipo audiovisual</li>
                            <li className="flex items-center gap-4"><PartyPopper className="text-magenta" size={24} style={{ color: 'var(--color-accent-magenta)' }} /> Staff privado</li>
                        </ul>

                        <button className="btn btn-black w-full text-xl py-4 border-4 border-black hover:bg-white hover:text-black transition-colors">SOLICITAR INFO</button>
                    </div>

                </div>
            </section>
        </Layout>
    );
};

export default Eventos;
