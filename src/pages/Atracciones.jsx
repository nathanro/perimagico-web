import { motion } from 'framer-motion';
import Layout from '../components/Layout';

const Attractions = () => {
    const attractions = [
        { name: 'Guácala', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-5.webp' },
        { name: 'Huracán', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-6.webp' },
        { name: 'Ninja Parkour', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-7.webp' },
        { name: 'Inflatables', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-8.webp' },
        { name: 'Carros Eléctricos', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-9.webp' },
        { name: 'Tirolesa', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-10.webp' },
        { name: 'Mini Rueda', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-11.webp' },
        { name: 'Bungy', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-12.webp' },
        { name: 'Sendero del Terror', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-13.webp' },
    ];

    return (
        <Layout>
            <section className="pt-40 pb-20 bg-white">
                <div className="container relative z-10 text-center mb-16">
                    <h1 className="text-6xl md:text-8xl text-black font-black uppercase tracking-tighter mb-4">
                        DESCUBRE LAS <br /><span className="text-magenta text-[1.2em]" style={{ color: 'var(--color-accent-magenta)' }}>ATRACCIONES</span>
                    </h1>
                    <div className="w-32 h-2 mx-auto bg-black mb-8" />
                    <p className="text-xl font-bold max-w-3xl mx-auto text-black">
                        Contamos con más de 10 atracciones principales, juegos extremos, infantiles y de destreza. Hay algo para cada miembro de la familia.
                    </p>
                </div>

                {/* 6 Grid (based on Reference 4) */}
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {attractions.map((attr, idx) => (
                            <div key={idx} className="relative h-[300px] overflow-hidden group border-8 border-white shadow-2xl cursor-pointer">
                                <img src={attr.img} alt={attr.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                                {/* Colorful blocky overlay logic like Ninja Warrior Course block */}
                                <div className="absolute inset-0 transition-colors duration-300 mix-blend-multiply opacity-50 group-hover:opacity-70"
                                    style={{ backgroundColor: idx % 3 === 0 ? 'var(--color-accent-magenta)' : idx % 3 === 1 ? 'var(--color-primary)' : 'var(--color-secondary)' }}
                                />

                                <div className="absolute inset-0 flex items-center justify-center p-4 z-10">
                                    <h3 className="text-white text-3xl font-black uppercase text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] leading-tight flex-1">
                                        {attr.name}
                                    </h3>

                                    <div className="absolute bottom-4 right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14m-7-7 7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pricing Addons Notice block, heavy styled */}
                    <div className="mt-20 p-12 bg-black border-4 border-secondary text-white transform rotate-1 scale-100 hover:scale-105 transition-transform flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-2/3 mb-6 md:mb-0">
                            <h3 className="text-4xl font-black uppercase mb-4 text-secondary" style={{ color: 'var(--color-secondary)' }}>Atracciones & Adicionales</h3>
                            <p className="font-bold text-lg leading-relaxed">
                                Juegos individuales de chicos ($40) y grandes ($50). Actividades como Reptour, Virtual, Cerámica y Trampolines tienen costo preferencial con Brazalete. Las ventas individuales comienzan a partir de las 06:00 PM.
                            </p>
                        </div>
                        <div>
                            <button className="btn btn-magenta text-xl py-4 px-8 border-4 border-transparent hover:border-white">
                                Ver Adicionales
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Attractions;
