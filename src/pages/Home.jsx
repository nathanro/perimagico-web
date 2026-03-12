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
            title: 'ACCESO GENERAL',
            price: '$235',
            desc: 'Entrada al parque + 4 juegos mecánicos (1 sola vez). No incluye atracciones extremas.',
            bottomColor: 'var(--color-primary)', // Blue
        },
        {
            title: 'DAY PASS',
            price: '$350',
            desc: 'Entrada al parque + juegos mecánicos y extremos ilimitados.',
            bottomColor: 'var(--color-secondary)', // Yellow
            textColor: 'text-black',
        },
        {
            title: 'DAY PASS PLATINUM',
            price: '$450',
            desc: 'La experiencia completa: juegos y atracciones ilimitadas.',
            bottomColor: 'var(--color-primary)', // Blue
        }
    ];

    return (
        <Layout>
            <div id="top"></div>

            {/* 1. HERO SECTION (Exact Funtastic Clone) */}
            <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px] bg-black overflow-hidden flex items-center">
                {/* Background Video/Image */}
                <div className="absolute inset-0 z-0 opacity-70">
                    <img src="/images/upscaled/Image-1-1.png" alt="Perimagico Hero" className="w-full h-full object-cover" />
                </div>
                
                <div className="container relative z-10 w-full h-full flex flex-col md:flex-row items-stretch pt-20 pb-10">
                    {/* Left: Days & Hours (Black Translucent Box) */}
                    <div className="w-full md:w-5/12 lg:w-4/12 bg-black/80 text-white p-8 md:p-10 border-l-4 border-primary shadow-2xl flex flex-col justify-center">
                        <h2 className="text-3xl font-black uppercase mb-8 border-b-2 border-gray-700 pb-4">Horarios</h2>
                        
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-xl font-bold uppercase text-primary mb-1">LUNES</h3>
                                <p className="text-gray-400 font-bold uppercase">Cerrado</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold uppercase text-primary mb-1">MARTES - JUEVES</h3>
                                <p className="text-white font-bold text-lg">1:00 pm - 8:00 pm</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold uppercase text-primary mb-1">VIERNES</h3>
                                <p className="text-white font-bold text-lg">1:00 pm - 8:30 pm</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold uppercase text-primary mb-1">SÁBADO - DOMINGO</h3>
                                <p className="text-white font-bold text-lg">12:00 pm - 9:00 pm</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Main Headline & CTA */}
                    <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col items-center justify-center p-8 mt-8 md:mt-0">
                        {/* Fake "Diversion Al Maximo" Logo/Badge taking place of Funtastic Logo */}
                        <div className="bg-magenta px-8 py-3 transform -rotate-2 mb-6 shadow-xl border-4 border-black">
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white italic uppercase tracking-tighter text-center" style={{ textShadow: '4px 4px 0 #000' }}>
                                DIVERSIÓN
                            </h1>
                        </div>
                        <div className="bg-secondary px-8 py-2 transform rotate-1 mb-8 shadow-xl border-4 border-black">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black italic uppercase tracking-tighter text-center">
                                AL MÁXIMO
                            </h2>
                        </div>
                        
                        <a href="#precios" className="btn bg-primary text-white text-xl md:text-2xl py-4 px-12 border-4 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] uppercase">
                            COMPRAR BOLETOS
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. VIVE LA EXPERIENCIA (Overlapping Cards over Colored Stripes) */}
            <section id="experiencia" className="bg-white pt-20 pb-32 relative">
                <div className="container relative z-10 px-4 md:px-8">
                    <div className="max-w-3xl mb-12">
                        <h2 className="text-magenta text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-4 tracking-tighter" style={{ color: 'var(--color-accent-magenta)' }}>
                            VIVE LA EXPERIENCIA
                        </h2>
                        <p className="text-lg md:text-xl font-bold text-gray-800 leading-snug">
                            Experiencia única y original en Galerías Perinorte. Nuestro parque techado de diversiones combina <i>thrill rides</i> con un ambiente incomparable. Diversión total.
                        </p>
                    </div>
                </div>

                {/* The distinct Funtastic background stripes behind the overlapping cards */}
                <div className="absolute left-0 w-full h-[300px] mt-16 flex z-0">
                    <div className="w-1/3 h-full bg-secondary"></div>
                    <div className="w-1/3 h-full bg-magenta"></div>
                    <div className="w-1/3 h-full bg-primary"></div>
                </div>

                {/* Overlapping Vertical Image Cards */}
                <div className="container relative z-10 px-4 md:px-8 pt-8">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 justify-center">
                        {/* Card 1 */}
                        <div className="w-full md:w-1/3 bg-white border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-4 transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] bg-black overflow-hidden relative">
                                <img src="/images/upscaled/Image-1-4.png" alt="Juegos Infantiles" className="w-full h-full object-cover opacity-90" />
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-primary text-white font-black text-xl md:text-2xl uppercase tracking-tighter text-center py-3 border-2 border-black">
                                    JUNTOS
                                </div>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="w-full md:w-1/3 bg-white border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-4 transform md:translate-y-12 hover:translate-y-8 transition-transform duration-300">
                            <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] bg-black overflow-hidden relative">
                                <img src="/images/upscaled/Image-1-5.png" alt="Atracciones" className="w-full h-full object-cover opacity-90" />
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-secondary text-black font-black text-xl md:text-2xl uppercase tracking-tighter text-center py-3 border-2 border-black">
                                    DIVERSIÓN
                                </div>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="w-full md:w-1/3 bg-white border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-4 transform hover:-translate-y-2 transition-transform duration-300">
                            <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] bg-black overflow-hidden relative">
                                <img src="/images/upscaled/Image-1-9.png" alt="Extremo" className="w-full h-full object-cover opacity-90" />
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-magenta text-white font-black text-xl md:text-2xl uppercase tracking-tighter text-center py-3 border-2 border-black">
                                    FAMILIA
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="text-center mt-24 md:mt-32">
                        <a href="#atracciones" className="bg-magenta text-white text-lg font-black uppercase py-4 px-12 rounded-full border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all">
                            VER MÁS
                        </a>
                    </div>
                </div>
            </section>

            {/* 3. PRECIOS & PAQUETES (Black background, distinct two-tone vertical cards) */}
            <section id="precios" className="bg-black py-24 sm:py-32 border-t-8 border-b-8 border-gray-900">
                <div className="container px-4">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        
                        {/* Title Section */}
                        <div className="w-full lg:w-1/4">
                            <h2 className="text-white text-5xl md:text-6xl font-black uppercase mb-6 leading-[0.9] tracking-tighter">
                                PRECIOS Y<br/>PAQUETES
                            </h2>
                            <div className="w-16 h-2 bg-magenta mb-6"></div>
                            <p className="text-gray-400 font-bold mb-8 uppercase tracking-wide text-sm">
                                Elige el acceso perfecto para ti y disfruta de nuestras atracciones al máximo.
                            </p>
                            <a href="#contacto" className="btn btn-primary bg-primary text-white border-2 border-transparent px-8 py-3 rounded-full uppercase hover:bg-transparent hover:border-primary transition-all">
                                RESERVAR
                            </a>
                        </div>

                        {/* Funtastic Two-Tone Pricing Cards */}
                        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {pricingPackages.map((pkg, idx) => (
                                <div key={idx} className="flex flex-col h-full border-4 border-white shadow-[8px_8px_0_0_rgba(255,255,255,0.2)] hover:shadow-[12px_12px_0_0_rgba(255,255,255,0.4)] hover:-translate-y-2 transition-all duration-300">
                                    {/* Top Half - Black */}
                                    <div className="bg-black text-white p-8 flex flex-col justify-center items-center h-48 border-b-4 border-white">
                                        <h3 className="text-2xl md:text-3xl font-black uppercase text-center leading-tight tracking-tighter">
                                            {pkg.title}
                                        </h3>
                                    </div>
                                    
                                    {/* Bottom Half - Colored */}
                                    <div className={`p-8 flex-1 flex flex-col items-center justify-between ${pkg.textColor || 'text-white'}`} style={{ backgroundColor: pkg.bottomColor }}>
                                        <div className="text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-none">{pkg.price}</div>
                                        <p className="font-bold text-center text-sm md:text-base leading-snug mb-8 opacity-95">
                                            {pkg.desc}
                                        </p>
                                        <button className={`w-full py-4 text-xl font-black uppercase border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none transition-all ${pkg.bottomColor === 'var(--color-secondary)' ? 'bg-white text-black' : 'bg-black text-white'}`}>
                                            COMPRAR
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. NUESTRAS ATRACCIONES (White Grid Section) */}
            <section id="atracciones" className="bg-white py-24 border-b-8 border-gray-900">
                <div className="container px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-black text-5xl md:text-6xl font-black uppercase mb-4 tracking-tighter">
                            NUESTRAS ATRACCIONES
                        </h2>
                        <div className="w-24 h-2 bg-secondary mx-auto mb-6"></div>
                        <p className="text-gray-600 font-bold text-lg max-w-2xl mx-auto italic">
                            #PerimagicoIndoorPark #ThrillRides
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {attractions.map((attr, idx) => (
                            <div key={idx} className="group relative aspect-square md:aspect-[4/3] overflow-hidden bg-black cursor-pointer border-4 border-black">
                                <img src={attr.img} alt={attr.title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                                    <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight text-shadow-sm">
                                        {attr.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. FOOD BAR SECTION (Full Width Colored Background, matching client mockup) */}
            <section id="menu" className="w-full bg-magenta py-20 px-4 border-b-8 border-black">
                <div className="container p-0">
                    <div className="flex flex-col md:flex-row shadow-[12px_12px_0_0_rgba(0,0,0,1)] bg-white border-4 border-black">
                        {/* Text Content */}
                        <div className="w-full md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
                            <h2 className="text-black text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.9] mb-6 tracking-tighter">
                                PERI MÁGICO<br/><span className="text-magenta">FOOD BAR</span>
                            </h2>
                            <p className="text-gray-700 font-bold text-lg mb-8 leading-snug">
                                Toda la energía que quemas saltando, corriendo y aventándote en nuestras atracciones necesita recargarse. ¡Tenemos todo lo que necesitas en nuestra área de alimentos! Descansa un momento y disfruta de tus comidas favoritas para volver a la acción.
                            </p>
                            <div>
                                <a href="#contacto" className="inline-block bg-black text-white px-10 py-4 text-xl font-black uppercase border-4 border-black hover:bg-transparent hover:text-black transition-colors">
                                    VER MENÚ
                                </a>
                            </div>
                        </div>

                        {/* Solid color or pattern to replace the Pizza overlay requested by client */}
                        <div className="w-full md:w-1/2 bg-black flex items-center justify-center p-12 relative overflow-hidden">
                            <h2 className="text-white/10 text-9xl font-black italic uppercase text-center w-full leading-none transform -rotate-12 absolute scale-150">
                                FOOD BAR
                            </h2>
                             <div className="bg-magenta p-6 relative z-10 border-4 border-white transform rotate-3 shadow-2xl">
                                <h3 className="text-white text-3xl font-black uppercase">¡Recarga Energía!</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />

        </Layout>
    );
};

export default Home;
