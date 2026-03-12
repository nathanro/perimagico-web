import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Home = () => {

    const experienceCards = [
        { title: 'Atracciones Extremas', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-1.webp', color: 'bg-primary' },
        { title: 'Experiencia', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-2.webp', color: 'bg-magenta' },
        { title: 'Magia', desc: 'Es una presentación mágica que sumerge a la audiencia en la fiesta de sus sueños.', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-3.webp', color: 'bg-orange-500' },
        { title: 'Familia', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-4.webp', color: 'bg-secondary' },
    ];

    const pricingPackages = [
        {
            title: 'Acceso General / Individual',
            price: '$235',
            desc: 'Acceso al parque, solo 4 juegos mecánicos y/o extremos (1 sola vez). No incluye atracciones premium.',
            color: 'var(--color-primary)',
            popular: false
        },
        {
            title: 'DAY PASS PLATINUM',
            price: '$450',
            desc: '¡Para una experiencia completa y máxima diversión! Tendrás acceso ilimitado a juegos mecánicos, extremos y TODAS las atracciones especiales.',
            color: 'var(--color-secondary)',
            textColor: 'var(--color-black)',
            popular: true
        },
        {
            title: 'Paquetes Familiares',
            price: 'Desde $1,200',
            desc: '¡Que comience la fiesta! Paquetes exclusivos para membresias y grupos de 4 personas. Incluye alimentos y créditos de Arcade en versión Premium.',
            color: 'var(--color-primary)',
            popular: false
        }
    ];

    const attractionsPreview = [
        { name: 'Guácala', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-5.webp' },
        { name: 'Ninja Parkour', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-6.webp' },
        { name: 'Inflatables', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-7.webp' },
        { name: 'Carros Eléctricos', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-8.webp' },
        { name: 'Sendero del Terror', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1-9.webp' },
        { name: 'Food Bar', img: 'https://piccolomondo.com.mx/wp-content/uploads/2024/01/pizza.png' },
    ];

    return (
        <Layout>
            <div id="top"></div>
            <Hero />

            {/* Live The Experience Section */}
            <section id="experiencia" className="bg-white py-24 relative overflow-hidden">
                {/* Dynamic Angles Background */}
                <div className="absolute top-1/2 left-0 w-[120%] h-64 -translate-y-1/2 -rotate-3" style={{ backgroundColor: 'var(--color-secondary)' }} />
                <div className="absolute top-1/2 left-0 w-[120%] h-32 -translate-y-1/2 rotate-2" style={{ backgroundColor: 'var(--color-accent-magenta)' }} />

                <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12">
                    {/* Left: Text */}
                    <div className="lg:w-1/3 text-center lg:text-left">
                        <h2 className="text-magenta text-5xl md:text-6xl font-black mb-6 uppercase leading-tight" style={{ color: 'var(--color-accent-magenta)' }}>Vive La<br />Experiencia</h2>
                        <p className="text-lg md:text-xl font-bold text-black mb-8">
                            Experiencia única y sin igual en un Centro de Entretenimiento Familiar techado que cuenta con <span className="text-magenta">atracciones increíbles</span> y <span className="text-secondary">magia en vivo</span> con luces y efectos para toda la familia.
                        </p>
                        <button className="btn btn-magenta px-10 py-3 text-lg rounded-full shadow-lg" style={{ backgroundColor: 'var(--color-accent-magenta)' }}>VER MÁS</button>
                    </div>

                    {/* Right: Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                        {experienceCards.map((card, idx) => (
                            <div key={idx} className="flex flex-col bg-white overflow-hidden shadow-xl transform transition-transform hover:-translate-y-2 group">
                                <div className="h-[200px] md:h-[250px] overflow-hidden">
                                    <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className={`p-6 flex flex-col justify-center min-h-[120px] ${card.color}`}>
                                    <h3 className="text-white text-2xl font-black uppercase tracking-tight text-shadow-sm">{card.title}</h3>
                                    {card.desc && <p className="text-white/95 text-sm font-bold mt-2 leading-snug">{card.desc}</p>}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prices & Packages Section - Based on Reference 3 */}
            <section id="precios" className="bg-black py-24">
                <div className="container">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        {/* Left Header */}
                        <div className="lg:w-1/4 text-center lg:text-left">
                            <h2 className="text-white text-5xl md:text-6xl font-black mb-6 uppercase leading-none">Precios &<br />Paquetes</h2>
                            <p className="text-white font-bold text-lg mb-8">
                                ¡Sumérgete en la diversión HOY!<br />La magia está a un clic de distancia.
                            </p>
                            <button className="btn btn-primary px-8 border-4 border-primary hover:bg-transparent hover:text-primary transition-all rounded-full text-black">
                                VER PRECIOS
                            </button>
                        </div>

                        {/* Right Cards */}
                        <div className="lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {pricingPackages.map((pkg, idx) => (
                                <div
                                    key={idx}
                                    className={`p-8 flex flex-col justify-between border-4 border-black relative transition-transform hover:-translate-y-2 ${pkg.popular ? 'shadow-[8px_8px_0_0_var(--color-accent-magenta)]' : 'shadow-[8px_8px_0_0_rgba(255,255,255,0.2)]'}`}
                                    style={{ backgroundColor: pkg.color, color: pkg.textColor || '#000' }}
                                >
                                    <div>
                                        <h3 className="text-2xl font-black uppercase mb-8 leading-tight">{pkg.title}</h3>
                                        <p className="font-bold text-sm mb-2 opacity-80 uppercase tracking-wide">A partir de</p>
                                        <div className="text-5xl font-black mb-6">{pkg.price}</div>
                                        <p className="font-bold text-sm leading-relaxed mb-8">
                                            {pkg.desc}
                                        </p>
                                    </div>
                                    <button className="w-full bg-black text-white font-black py-4 uppercase rounded-full hover:bg-gray-800 transition-colors">
                                        RESERVAR
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Attractions Grid - Based on Reference 4 */}
            <section id="atracciones" className="bg-gray-50 py-24 border-y-8 border-black">
                <div className="container">
                    <div className="mb-12 text-center">
                        <h2 className="text-black text-5xl md:text-6xl font-black uppercase mb-4">Nuestras Atracciones</h2>
                        <p className="text-xl font-bold max-w-2xl mx-auto">Diversión garantizada para niños y adultos. ¡Descubre todo lo que tenemos preparado para ti!</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {attractionsPreview.map((attr, idx) => (
                            <div key={idx} className="flex flex-col group transform transition-all duration-300 hover:scale-[1.02]">
                                <div className="bg-black text-center py-4 border-4 border-black border-b-0">
                                    <h3 className="text-white text-xl md:text-2xl font-black uppercase tracking-tight">
                                        {attr.name}
                                    </h3>
                                </div>
                                <div className="relative h-[200px] md:h-[250px] overflow-hidden shadow-xl border-4 border-black bg-black">
                                    <img src={attr.img} alt={attr.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Food Bar Section Preview - Based on Reference 5 */}
            <section className="bg-white py-24 border-t-8 shadow-inner overflow-hidden flex flex-col" style={{ borderTopColor: 'var(--color-accent-magenta)' }}>
                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left side: Image */}
                        <div className="lg:w-1/2 w-full">
                            <div className="relative border-4 border-black p-4 bg-gray-100 shadow-[12px_12px_0_0_var(--color-accent-magenta)] transform -rotate-2 group hover:rotate-0 transition-transform duration-500">
                                <img src="https://piccolomondo.com.mx/wp-content/uploads/2024/01/pizza.png" className="w-full h-auto max-h-[500px] object-cover group-hover:scale-105 transition-transform duration-500" alt="Peri Mágico Food Bar" />
                            </div>
                        </div>

                        {/* Right side: Text */}
                        <div className="lg:w-1/2 w-full text-center lg:text-left">
                            <div className="bg-magenta inline-block text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-wider mb-6" style={{ backgroundColor: 'var(--color-accent-magenta)' }}>
                                Zona de Alimentos
                            </div>
                            <h2 className="text-black text-5xl md:text-6xl font-black uppercase mb-6 leading-none">
                                Peri Mágico<br />
                                <span className="text-magenta" style={{ color: 'var(--color-accent-magenta)' }}>Food Bar</span>
                            </h2>
                            <p className="text-gray-700 font-bold text-lg md:text-xl mb-8 leading-relaxed">
                                Toda esa energía que quemas saltando, bailando, escalando y jugando en nuestras atracciones necesita reponerse,
                                y tenemos tus comidas favoritas. Toma un descanso y disfruta de una rebanada de pizza, tu panini favorito, papas fritas,
                                nuggets y más.
                            </p>
                            <button className="btn btn-primary px-10 py-4 text-xl border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] uppercase">
                                Ver Menú
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Ubicación Section */}
            <section id="ubicacion" className="bg-black py-20 relative">
                <div className="container">
                    <div className="mb-10 text-center">
                        <h2 className="text-white text-5xl md:text-6xl font-black uppercase mb-4">¿Cómo Llegar?</h2>
                        <p className="text-gray-300 font-bold text-lg flex items-center justify-center gap-2">
                            <span className="text-magenta text-xl" style={{ color: 'var(--color-accent-magenta)' }}>📍</span> Centro Comercial Galerias Perinorte, Cuautitlán Izcalli, Mex.
                        </p>
                    </div>
                    <div className="w-full h-[400px] md:h-[500px] border-4 border-white shadow-[8px_8px_0_0_var(--color-secondary)] overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3758.336153924707!2d-99.1918386249339!3d19.61287958169996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f56b7cd5a3a7%3A0xe78ab7c8e0eaa3ec!2sGaler%C3%ADas%20Perinorte!5e0!3m2!1sen!2smx!4v1709664553255!5m2!1sen!2smx"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación Peri Mágico"
                        ></iframe>
                    </div>
                </div>
            </section>

            <ContactForm />

        </Layout>
    );
};

export default Home;
