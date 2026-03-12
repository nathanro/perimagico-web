import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Home = () => {

    const attractions = [
        { title: 'Atracciones Extremas', img: '/images/upscaled/Image-1-2.png' },
        { title: 'Zona Arcade', img: '/images/upscaled/Image-1-3.png' },
        { title: 'Guácala', img: '/images/upscaled/Image-1-5.png' },
        { title: 'Ninja Parkour', img: '/images/upscaled/Image-1-6.png' },
        { title: 'Inflatables', img: '/images/upscaled/Image-1-7.png' },
        { title: 'Carros Eléctricos', img: '/images/upscaled/Image-1-8.png' },
        { title: 'Sendero del Terror', img: '/images/upscaled/Image-1-9.png' },
        { title: 'Experiencia Familiar', img: '/images/upscaled/Image-1-4.png' }
    ];

    const pricingPackages = [
        {
            title: 'ACCESO',
            price: '$235',
            desc: 'Entrada al parque + 4 juegos mecánicos y/o extremos (1 sola vez). No incluye atracciones.',
            color: 'var(--color-primary)', // Maps to Funtastic's Green
        },
        {
            title: 'DAY PASS',
            price: '$350',
            desc: 'Entrada al parque + todos los juegos mecánicos y extremos ilimitados. No incluye atracciones.',
            color: 'var(--color-primary)', 
        },
        {
            title: 'DAY PASS PLATINUM',
            price: '$450',
            desc: 'La experiencia completa: juegos ilimitados + atracciones ilimitadas. ¡El máximo de diversión!',
            color: 'var(--color-primary)',
        }
    ];

    return (
        <Layout>
            <div id="top"></div>
            <Hero />

            {/* "Live The Experience" Transition Header */}
            <section className="bg-black py-16 text-center border-t border-white/10">
                <h2 className="text-magenta text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-widest drop-shadow-md">
                    Vive La Experiencia
                </h2>
            </section>

            {/* Attractions Featured Carousel (Simulated as Full Width Hero Section) with Funtastic Diagonal Cut */}
            <section className="relative w-full h-[60vh] md:h-[80vh] bg-black diagonal-bottom-clip">
                <img src="/images/upscaled/Image-1-1.png" alt="Parque Techado" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/20"></div>
                
                <div className="container relative z-10 h-full flex items-center">
                    <div className="max-w-2xl text-left pl-0 md:pl-8">
                        <h2 className="text-white text-5xl md:text-7xl lg:text-[5.5rem] font-black mb-6 uppercase leading-[0.9] drop-shadow-2xl tracking-tighter">
                            Parque<br/>Techado
                        </h2>
                        <p className="text-white text-lg md:text-2xl font-bold drop-shadow-lg mb-10 max-w-xl leading-snug">
                            Diversión sin importar el clima. Nuestro parque interior alberga decenas de juegos mecánicos y atracciones extremas para toda la familia.
                        </p>
                        <a href="#precios" className="btn btn-primary text-xl md:text-2xl py-4 px-10">Ver Boletos</a>
                    </div>
                </div>

                {/* Yellow and Magenta staggered bottom blocks to create the raw Funtastic vibe */}
                <div className="absolute bottom-0 left-0 w-full h-10 bg-secondary z-20"></div>
                <div className="absolute bottom-4 left-0 w-full h-10 bg-magenta z-10"></div>
            </section>

            {/* Attractions Grid (Cards with Center Text Overlay) */}
            <section id="atracciones" className="bg-white py-16 md:py-24 -mt-[5vw] relative z-30">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {attractions.map((attr, idx) => (
                            <div key={idx} className="card group h-[300px] md:h-[400px] cursor-pointer shadow-lg">
                                <img src={attr.img} alt={attr.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
                                    <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-wide text-center drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] px-6 leading-tight">
                                        {attr.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing & Packages (Lime Green Style Cards mapping to Primary Blue) */}
            <section id="precios" className="bg-white pb-24 pt-8">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingPackages.map((pkg, idx) => (
                            <div key={idx} className="card bg-primary p-10 flex flex-col justify-between text-white shadow-2xl hover:-translate-y-2 transition-transform duration-300">
                                <div>
                                    <h3 className="text-3xl lg:text-4xl font-black uppercase mb-12 leading-none">{pkg.title}</h3>
                                    <p className="font-bold text-sm mb-2 opacity-90 uppercase tracking-widest">A partir de</p>
                                    <div className="text-6xl lg:text-[4.5rem] font-black mb-8 leading-none tracking-tighter">{pkg.price}</div>
                                    <div className="w-12 h-1 bg-white mb-8 opacity-50"></div>
                                    <p className="font-medium text-lg lg:text-xl leading-relaxed mb-8 opacity-95">
                                        {pkg.desc}
                                    </p>
                                </div>
                                <a href="#contacto" className="btn bg-white text-primary hover:bg-gray-100 w-full text-xl py-4 mt-auto">
                                    Reservar
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FunTastic Food Bar (50/50 Split Image and Magenta Block) */}
            <section id="menu" className="flex flex-col md:flex-row w-full min-h-[60vh] bg-black">
                {/* Left side: Image full bleed */}
                <div className="w-full md:w-1/2 h-[400px] md:h-auto relative overflow-hidden">
                    <img src="/images/upscaled/pizza.png" alt="Food Bar" className="absolute inset-0 w-full h-full object-cover" />
                </div>
                
                {/* Right side: Solid Magenta Block */}
                <div className="w-full md:w-1/2 bg-magenta p-12 md:p-20 lg:p-28 flex flex-col justify-center text-white">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] mb-8 tracking-tighter drop-shadow-sm">
                        Área de<br/>Alimentos
                    </h2>
                    <p className="text-lg md:text-xl font-bold leading-relaxed mb-12 max-w-lg opacity-90">
                        Toda la energía que quemas saltando, corriendo y aventándote en nuestras atracciones necesita recargarse. ¡Tenemos todo lo que necesitas en nuestra área de alimentos! Descansa un momento y disfruta de tus comidas favoritas para volver a la acción.
                    </p>
                    <div>
                        <a href="#contacto" className="btn btn-black text-xl py-4 px-12 border-2 border-transparent hover:border-white transition-all">
                            Ver Menú
                        </a>
                    </div>
                </div>
            </section>

            <ContactForm />

        </Layout>
    );
};

export default Home;
