import { ArrowRight, MessageCircle } from 'lucide-react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';

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
            <Hero />

            {/* Live The Experience Section */}
            <section className="bg-white py-24 relative overflow-hidden">
                {/* Dynamic Angles Background */}
                <div className="absolute top-1/2 left-0 w-[120%] h-64 -translate-y-1/2 -rotate-3" style={{ backgroundColor: 'var(--color-secondary)' }} />
                <div className="absolute top-1/2 left-0 w-[120%] h-32 -translate-y-1/2 rotate-2" style={{ backgroundColor: 'var(--color-accent-magenta)' }} />

                <div className="container relative z-10">
                    <div className="mb-12">
                        <h2 className="text-magenta text-6xl md:text-7xl font-black mb-6 uppercase" style={{ color: 'var(--color-accent-magenta)' }}>Vive La<br />Experiencia</h2>
                        <p className="text-xl md:text-2xl font-bold max-w-4xl text-black">
                            Experiencia única y sin igual en un Centro de Entretenimiento Familiar techado que cuenta con <span className="text-magenta">atracciones increíbles</span> y <span className="text-secondary">magia en vivo</span> con luces y efectos para toda la familia.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 mb-8 border-4 border-black bg-black">
                        {experienceCards.map((card, idx) => (
                            <div key={idx} className="relative h-[400px] md:h-[500px] overflow-hidden group border-r-4 border-black last:border-r-0">
                                <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

                                <div className="absolute bottom-6 left-6 right-6">
                                    {card.desc && <p className="text-white text-sm font-bold mb-4 bg-black/60 p-2">{card.desc}</p>}
                                    <h3 className="text-white text-3xl font-black tracking-tighter uppercase drop-shadow-lg">{card.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end">
                        <button className="btn btn-magenta px-8" style={{ backgroundColor: 'var(--color-accent-magenta)' }}>VER MÁS</button>
                    </div>
                </div>
            </section>

            {/* Prices & Packages Section - Based on Reference 3 */}
            <section className="bg-black py-24">
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
            <section className="bg-white py-24" style={{ backgroundImage: 'linear-gradient(45deg, #f5f5f5 25%, transparent 25%, transparent 75%, #f5f5f5 75%, #f5f5f5), linear-gradient(45deg, #f5f5f5 25%, transparent 25%, transparent 75%, #f5f5f5 75%, #f5f5f5)', backgroundSize: '20px 20px', backgroundPosition: '0 0, 10px 10px' }}>
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {attractionsPreview.map((attr, idx) => (
                            <div key={idx} className="relative h-[250px] md:h-[300px] overflow-hidden group bg-black cursor-pointer shadow-xl border-4 border-white transform transition-transform hover:-translate-y-2">
                                <img src={attr.img} alt={attr.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300 group-hover:scale-110" />
                                {/* Color Overlay logic -> Alternate colors for fun blocky look */}
                                <div className="absolute inset-0 mix-blend-multiply opacity-40 transition-opacity group-hover:opacity-0"
                                    style={{ backgroundColor: idx % 3 === 0 ? 'var(--color-primary)' : idx % 3 === 1 ? 'var(--color-secondary)' : 'var(--color-accent-magenta)' }} />

                                <div className="absolute inset-0 flex items-center justify-center p-6 text-center z-10">
                                    <h3 className="text-white text-3xl font-black uppercase tracking-tight drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                                        {attr.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Food Bar Section Preview - Based on Reference 5 */}
            <section className="bg-white py-12 relative overflow-hidden flex flex-col">
                {/* Red Banner across the top left */}
                <div className="bg-magenta p-12 text-white w-full lg:w-3/4 relative z-10 transform -rotate-1 shadow-2xl" style={{ backgroundColor: 'var(--color-accent-magenta)' }}>
                    <h2 className="text-5xl md:text-7xl font-black uppercase mb-6">Peri Mágico<br />Food Bar</h2>
                    <p className="font-bold text-lg md:text-xl max-w-2xl leading-relaxed">
                        Toda esa energía que quemas saltando, bailando, escalando y jugando en nuestras atracciones necesita reponerse,
                        y tenemos tus comidas favoritas. Toma un descanso y disfruta de una rebanada de pizza, tu panini favorito, papas fritas,
                        nuggets y más.
                    </p>
                </div>
                <div className="w-full lg:w-2/3 h-[500px] absolute right-0 top-0 z-0 hidden lg:block bg-black flex items-center justify-center p-8">
                    <img src="https://piccolomondo.com.mx/wp-content/uploads/2024/01/pizza.png" className="w-auto h-full max-h-[400px] object-contain drop-shadow-2xl transform rotate-3" alt="Pizza" />
                </div>
            </section>

            {/* Floating Chat WhatsApp icon simulation (Funtastic Depot style) */}
            <div className="fixed bottom-8 right-8 z-50">
                <button className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer border-4 border-white">
                    <MessageCircle size={32} color="#fff" fill="#fff" />
                </button>
            </div>

        </Layout>
    );
};

export default Home;
