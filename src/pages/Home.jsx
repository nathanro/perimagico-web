import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Home = () => {

    const experienceCards = [
        { title: 'Parque Techado', desc: 'Diversión sin importar el clima. Nuestro parque interior alberga decenas de juegos mecánicos y atracciones extremas para toda la familia.', img: '/images/upscaled/Image-1-1.png', color: 'bg-primary' },
        { title: 'Atracciones Extremas', desc: 'Tirolesa, Bungee, Xtreme, Sendero del Terror y más. Adrenalina pura para los más valientes sin importar la edad.', img: '/images/upscaled/Image-1-2.png', color: 'bg-magenta' },
        { title: 'Zona Arcade', desc: 'Pon a prueba tus habilidades en nuestra área de arcade con los mejores videojuegos y gana premios increíbles.', img: '/images/upscaled/Image-1-3.png', color: 'bg-orange-500' },
        { title: 'Experiencia Familiar', desc: 'Desde los más pequeños hasta los adultos, en Perimágico toda la familia encuentra diversión y momentos mágicos inolvidables.', img: '/images/upscaled/Image-1-4.png', color: 'bg-secondary' },
    ];

    const pricingPackages = [
        {
            title: 'ACCESO',
            price: '$235',
            desc: 'Entrada al parque + 4 juegos mecánicos y/o extremos (1 sola vez). No incluye atracciones.',
            color: 'var(--color-primary)',
            popular: false
        },
        {
            title: 'DAY PASS',
            price: '$350',
            desc: 'Entrada al parque + todos los juegos mecánicos y extremos ilimitados. No incluye atracciones.',
            color: 'var(--color-secondary)',
            textColor: 'var(--color-black)',
            popular: true
        },
        {
            title: 'DAY PASS PLATINUM',
            price: '$450',
            desc: 'La experiencia completa: juegos ilimitados + atracciones ilimitadas. ¡El máximo de diversión!',
            color: 'var(--color-primary)',
            popular: false
        }
    ];

    const attractionsPreview = [
        { name: 'Guácala', img: '/images/upscaled/Image-1-5.png' },
        { name: 'Ninja Parkour', img: '/images/upscaled/Image-1-6.png' },
        { name: 'Inflatables', img: '/images/upscaled/Image-1-7.png' },
        { name: 'Carros Eléctricos', img: '/images/upscaled/Image-1-8.png' },
        { name: 'Sendero del Terror', img: '/images/upscaled/Image-1-9.png' },
        { name: 'Food Bar', img: '/images/upscaled/pizza.png' },
    ];

    return (
        <Layout>
            <div id="top"></div>
            <Hero />

            {/* Sobre Nosotros Section */}
            <section className="bg-black py-20 border-b-8 border-gray-900 text-center relative z-20">
                <div className="container max-w-4xl mx-auto px-4">
                    <p className="text-orange-500 font-bold tracking-widest uppercase mb-4 text-sm">SOBRE NOSOTROS</p>
                    <h2 className="text-yellow-300 text-4xl md:text-5xl font-black mb-8">
                        ¡Bienvenido a Perimágico!
                    </h2>
                    <p className="text-gray-300 font-medium text-lg md:text-xl leading-relaxed mb-6">
                        El lugar donde la diversión cobra vida y la emoción nunca se detiene. Sumérgete en un mundo lleno de magia y alegría, donde la adrenalina se fusiona con la risa, creando momentos inolvidables para toda la familia.
                    </p>
                    <p className="text-gray-300 font-medium text-lg md:text-xl leading-relaxed mb-8">
                        En nuestro parque de diversiones encontrarás una mezcla perfecta de juegos mecánicos que desafían la gravedad, emocionantes atracciones extremas que te harán palpitar el corazón y una amplia variedad de juegos de arcade para poner a prueba tus habilidades.
                    </p>
                    <p className="text-yellow-400 font-bold text-xl md:text-2xl">
                        ¡Prepárate para vivir la magia en cada rincón de Perimágico!
                    </p>
                </div>
            </section>

            {/* Live The Experience Section */}
            <section id="experiencia" className="bg-white py-24 relative overflow-hidden">
                {/* Dynamic Angles Background */}
                <div className="absolute top-1/2 left-0 w-[120%] h-64 -translate-y-1/2 -rotate-3" style={{ backgroundColor: 'var(--color-secondary)' }} />
                <div className="absolute top-1/2 left-0 w-[120%] h-32 -translate-y-1/2 rotate-2" style={{ backgroundColor: 'var(--color-accent-magenta)' }} />

                <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12">
                    {/* Left: Text */}
                    <div className="lg:w-1/3 text-center lg:text-left">
                        <p className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-2">VIVE LA EXPERIENCIA</p>
                        <h2 className="text-magenta text-5xl md:text-6xl font-black mb-6 leading-tight" style={{ color: 'var(--color-accent-magenta)' }}>Diversión<br />para todos</h2>
                        <p className="text-lg md:text-xl font-bold text-gray-800 mb-8">
                            Un destino único para crear recuerdos inolvidables y compartir risas y aventuras con amigos y seres queridos.
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
                            <p className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-4">TARIFAS</p>
                            <h2 className="text-white text-5xl md:text-6xl font-black mb-6 leading-none">Boletos &<br />Paquetes</h2>
                            <p className="text-white font-bold text-lg mb-8">
                                ¡Empieza la diversión hoy! El juego comienza a un solo clic de distancia.
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
                        <p className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-2">PARQUE TECHADO</p>
                        <h2 className="text-black text-5xl md:text-6xl font-black uppercase mb-4">Nuestras Atracciones</h2>
                        <p className="text-xl font-bold max-w-2xl mx-auto">¡Descubre nuestras atracciones únicas donde toda la familia la va a pasar increíble!</p>
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
            <section id="menu" className="bg-white py-24 border-t-8 shadow-inner overflow-hidden flex flex-col" style={{ borderTopColor: 'var(--color-accent-magenta)' }}>
                <div className="container relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        {/* Left side: Image */}
                        <div className="lg:w-1/2 w-full">
                            <div className="relative border-4 border-black p-4 bg-gray-100 shadow-[12px_12px_0_0_var(--color-accent-magenta)] transform -rotate-2 group hover:rotate-0 transition-transform duration-500">
                                <img src="/images/upscaled/pizza.png" className="w-full h-auto max-h-[500px] object-cover group-hover:scale-105 transition-transform duration-500" alt="Peri Mágico Food Bar" />
                            </div>
                        </div>

                        {/* Right side: Text */}
                        <div className="lg:w-1/2 w-full text-center lg:text-left">
                            <div className="bg-magenta inline-block text-white px-6 py-2 rounded-full font-black text-sm uppercase tracking-wider mb-6" style={{ backgroundColor: 'var(--color-accent-magenta)' }}>
                                Zona de Alimentos
                            </div>
                            <h2 className="text-black text-4xl md:text-6xl font-black mb-6 leading-none">
                                Área de <br />
                                <span className="text-magenta" style={{ color: 'var(--color-accent-magenta)' }}>Alimentos</span>
                            </h2>
                            <p className="text-gray-700 font-bold text-lg md:text-xl mb-8 leading-relaxed">
                                Toda la energía que quemas saltando, corriendo y aventándote en nuestras atracciones necesita recargarse. ¡Tenemos todo lo que necesitas en nuestra área de alimentos! Descansa un momento y disfruta de tus comidas favoritas para volver a la acción.
                            </p>
                            <a href="#menu" className="btn btn-primary px-10 py-4 text-xl border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-[2px_2px_0_0_rgba(0,0,0,1)] uppercase inline-block">
                                Ver Menú
                            </a>
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
