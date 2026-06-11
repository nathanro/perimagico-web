import { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Instagram, MapPin, Volume2, VolumeX } from 'lucide-react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Home = () => {
    const [isMuted, setIsMuted] = useState(true);
    const videoRef = useRef(null);
    const carouselRef = useRef(null);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 350;
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const games = [
        {
            title: 'Reptour',
            img: '/images/juegos/Reptour.png',
            desc: 'Espacio único donde descubrirás de cerca la majestuosidad de serpientes, lagartos y reptiles asombrosos. Aprende sobre sus misterios, rompe mitos y vive una experiencia cara a cara con la naturaleza más salvaje.'
        },
        {
            title: 'Piccolo Ludo',
            img: '/images/juegos/Piccolo Ludo.png',
            desc: 'Pensado para los más pequeños, donde la diversión, el juego y la imaginación se combinan en un entorno seguro, colorido e interactivo. Un lugar ideal para explorar, aprender y disfrutar en familia.'
        },
        {
            title: 'Juegos Mecánicos',
            img: '/images/juegos/Juegos mecanicos.png',
            desc: 'Los Juegos Mecánicos de Perimágico ofrecen adrenalina, diversión y experiencias inolvidables para todas las edades. Desde atracciones familiares hasta juegos llenos de emoción, cada experiencia está diseñada para disfrutar en un ambiente seguro, dinámico y lleno de energía.'
        },
        {
            title: 'Sendero Jurásico',
            img: '/images/juegos/Sendero Jurasico.png',
            desc: '¡Rugidos, ruedas y velocidad! Ven a competir en la pista más divertida de Perimágico a bordo de increíbles cuatriciclos con diseño de dinosaurio. Una carrera prehistórica pensada para toda la familia.'
        },
        {
            title: 'Arcade',
            img: '/images/juegos/Arcade.png',
            desc: 'Nuestro sector de juegos arcade combina diversión, adrenalina y tecnología para todas las edades. Disfruta de videojuegos clásicos y modernos, desafíos interactivos y experiencias llenas de emoción en un ambiente vibrante y familiar.'
        },
        {
            title: 'Flotyland',
            img: '/images/juegos/Flotyland.png',
            desc: 'Espacio ideal para los más pequeños dentro de Perimágico. Un sector lleno de color, diversión y juegos diseñados para que los niños exploren, salten y disfruten en un entorno seguro y mágico junto a toda la familia.'
        }
    ];

    const tickets = [
        {
            name: 'Acceso Adulto',
            img: '/images/accesos/Acceso Adulto.png',
            path: '#contacto'
        },
        {
            name: 'Day Pass',
            img: '/images/accesos/Day Pass.png',
            path: '#contacto'
        },
        {
            name: 'Day Pass Platinum',
            img: '/images/accesos/Day Pass Platinum.png',
            path: '#contacto'
        },
        {
            name: 'Day Pass Familiar Platinum',
            img: '/images/accesos/Day Pass Familiar Platinum.png',
            isRecommended: true,
            path: '#contacto'
        }
    ];

    const instagramPosts = [
        { img: '/images/insta_1.png', likes: 142, comments: 12 },
        { img: '/images/insta_2.png', likes: 98, comments: 5 },
        { img: '/images/insta_3.png', likes: 210, comments: 24 },
        { img: '/images/insta_4.png', likes: 185, comments: 15 },
        { img: '/images/insta_5.png', likes: 312, comments: 41 }
    ];

    return (
        <Layout>
            <div id="top"></div>

            <section className="relative w-full h-[650px] md:h-[750px] lg:h-[850px] bg-black overflow-hidden flex items-center justify-center">
                <video
                    ref={videoRef}
                    src="/videos/int.mp4"
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-75"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/40 z-10" />

                <div className="container relative z-20 w-full h-full flex flex-col md:flex-row items-center justify-between pt-32 pb-12 gap-8">
                    
                    <div className="w-full sm:w-[360px] glass-panel rounded-3xl p-6 md:p-8 text-white shadow-neon-blue border-4 border-secondary transform hover:scale-102 transition-transform duration-300 self-start md:self-center mt-4">
                        <h2 className="text-2xl md:text-3xl font-black uppercase text-center mb-6 tracking-wider border-b-2 border-white/20 pb-3">
                            Horarios
                        </h2>
                        
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                <span className="font-black text-secondary tracking-wide text-sm md:text-base">LUNES</span>
                                <span className="bg-primary text-white text-xs md:text-sm font-black uppercase px-3 py-1 rounded-full animate-pulse">
                                    Cerrado
                                </span>
                            </div>
                            <div className="flex flex-col border-b border-white/10 pb-2">
                                <span className="font-black text-secondary tracking-wide text-xs">MARTES - JUEVES</span>
                                <span className="font-bold text-base md:text-lg">1:00 pm - 8:00 pm</span>
                            </div>
                            <div className="flex flex-col border-b border-white/10 pb-2">
                                <span className="font-black text-secondary tracking-wide text-xs">VIERNES</span>
                                <span className="font-bold text-base md:text-lg">1:00 pm - 8:30 pm</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-black text-secondary tracking-wide text-xs">SÁBADO - DOMINGO</span>
                                <span className="font-bold text-base md:text-lg text-yellow-300">12:00 pm - 10:00 pm</span>
                            </div>
                        </div>
                        
                        <div className="mt-6 pt-6 border-t-2 border-white/20">
                            <p className="text-secondary font-black text-xs uppercase tracking-wide mb-2">Contáctanos</p>
                            <a href="tel:+525558182348" className="text-white font-black text-lg hover:text-yellow-300 transition-colors">
                                📞 55 5818 2348
                            </a>
                        </div>
                    </div>


                    <button 
                        onClick={toggleMute}
                        className="absolute bottom-6 right-6 md:bottom-12 md:right-12 z-25 bg-black/60 backdrop-blur-sm border-2 border-white/20 text-white p-3.5 rounded-full hover:bg-white hover:text-black hover:border-white transition-all shadow-md"
                        aria-label={isMuted ? "Unmute video" : "Mute video"}
                    >
                        {isMuted ? <VolumeX size={22} /> : <Volume2 size={22} />}
                    </button>

                </div>
            </section>

            <section id="juegos-atracciones" className="bg-white py-20 relative overflow-hidden border-b-8 border-black">
                <div className="container px-4 md:px-8">
                    <div className="text-center md:text-left mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-primary text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4">
                                ATRACCIONES <span className="text-primary font-black lowercase text-4xl md:text-5xl font-sans inline-block rotate-[-2deg] bg-secondary text-black px-4 py-1.5 rounded-xl border-4 border-black ml-2 shadow-[4px_4px_0_0_rgba(0,0,0,1)]">Juegos</span>
                            </h2>
                            <p className="text-gray-700 font-bold text-lg md:text-xl">
                                Descubre nuestras atracciones únicas diseñadas para que tus hijos y toda la familia pasen un rato inolvidable.
                            </p>
                        </div>
                        <div className="flex gap-3 shrink-0">
                            <button 
                                onClick={() => scrollCarousel('left')}
                                className="w-14 h-14 bg-primary text-white hover:bg-secondary hover:text-black border-4 border-black rounded-full flex items-center justify-center transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
                                aria-label="Atracción anterior"
                            >
                                <ChevronLeft size={28} strokeWidth={3} />
                            </button>
                            <button 
                                onClick={() => scrollCarousel('right')}
                                className="w-14 h-14 bg-primary text-white hover:bg-secondary hover:text-black border-4 border-black rounded-full flex items-center justify-center transition-all shadow-[4px_4px_0_0_rgba(0,0,0,1)] active:translate-y-1 active:shadow-none"
                                aria-label="Siguiente atracción"
                            >
                                <ChevronRight size={28} strokeWidth={3} />
                            </button>
                        </div>
                    </div>

                    <div 
                        ref={carouselRef}
                        className="flex overflow-x-auto gap-6 pb-8 pt-4 px-2 no-scrollbar scroll-smooth snap-x snap-mandatory"
                    >
                        {games.map((game, idx) => (
                            <div 
                                key={idx}
                                className="w-[300px] sm:w-[380px] md:w-[420px] shrink-0 bg-white border-4 border-black rounded-3xl overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] hover:-translate-y-2 transition-all duration-300 snap-start flex flex-col h-[600px] md:h-[680px]"
                            >
                                <div className="h-96 md:h-[500px] bg-gray-200 border-b-4 border-black overflow-hidden relative group">
                                    <img 
                                        src={game.img} 
                                        alt={game.title} 
                                        className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                                    />
                                    <div className="absolute top-4 left-4 bg-secondary text-black font-black uppercase text-xs px-3 py-1.5 rounded-lg border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                                        Perimágico
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-3">
                                            {game.title}
                                        </h3>
                                        <p className="text-gray-600 font-bold text-sm leading-relaxed">
                                            {game.desc}
                                        </p>
                                    </div>
                                    <a 
                                        href="#contacto" 
                                        className="inline-block mt-4 text-primary font-black uppercase text-sm tracking-widest hover:text-secondary hover:translate-x-1 transition-all"
                                    >
                                        MÁS INFORMACIÓN &rarr;
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="accesos" className="bg-[#009bfb] py-20 text-white relative overflow-hidden border-b-8 border-black">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container px-4 md:px-8 relative z-10 text-center">
                    <h2 className="text-secondary text-5xl md:text-6xl font-black uppercase tracking-tight mb-2 drop-shadow-md">
                        Accesos
                    </h2>
                    <p className="text-white font-bold text-lg md:text-xl uppercase tracking-wider mb-12 opacity-95">
                        La diversión está a un día de distancia
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
                        {tickets.map((t, idx) => (
                            <div 
                                key={idx} 
                                className={`bg-white rounded-3xl overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,0.25)] border-4 border-black flex flex-col justify-between transform hover:-translate-y-3 hover:scale-102 hover:shadow-neon-blue transition-all duration-300 ${t.isRecommended ? 'relative ring-4 ring-secondary border-secondary ring-offset-4 ring-offset-brandblue' : ''}`}
                            >
                                <div className="h-48 bg-gray-300 border-b-4 border-black overflow-hidden">
                                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-6 flex flex-col gap-4">
                                    {t.isRecommended && (
                                        <div className="bg-secondary text-black font-black uppercase text-xs px-3 py-2 rounded-lg text-center border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)]">
                                            ⭐ Más Recomendado
                                        </div>
                                    )}
                                    <h3 className="text-black font-black text-lg uppercase tracking-tight">
                                        {t.name}
                                    </h3>
                                    <a 
                                        href={t.path}
                                        className="bg-primary text-white border-2 border-black px-6 py-3 rounded-full font-black uppercase text-sm tracking-widest hover:bg-secondary hover:text-black shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] transition-all self-center"
                                    >
                                        Reservar
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="cumpleanos" className="relative w-full h-[500px] md:h-[600px] bg-black overflow-hidden flex items-center border-b-8 border-black">
                <img 
                    src="/images/banner/Birthday.png" 
                    alt="Cumpleaños en Perimágico" 
                    className="absolute inset-0 w-full h-full object-cover z-0" 
                />
                
                <div className="absolute inset-0 bg-black/45 z-10" />

                <div className="container px-4 md:px-8 relative z-20 flex justify-end">
                    <div className="w-full max-w-[460px] bg-black/85 backdrop-blur-md border-4 border-black p-8 rounded-3xl shadow-[12px_12px_0_0_rgba(0,0,0,0.6)] transform hover:scale-102 transition-transform duration-300">
                        <div className="h-16 md:h-20 mb-6 flex justify-start items-center">
                            <span className="text-white font-black text-3xl md:text-4xl">CUMPLEAÑOS</span>
                        </div>
                        <p className="text-gray-200 font-bold text-base md:text-lg leading-relaxed mb-8">
                            Tu evento con nosotros será inolvidable. Celebra tu cumpleaños con la mejor diversión, áreas exclusivas y paquetes a tu medida diseñados para sorprender a todos.
                        </p>
                        <a 
                            href="#contacto" 
                            className="inline-block bg-primary text-white border-2 border-black px-10 py-3.5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-secondary hover:text-black shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] transition-all"
                        >
                            VER MÁS
                        </a>
                    </div>
                </div>
            </section>

            <section id="restaurante" className="relative w-full h-[500px] md:h-[600px] bg-black overflow-hidden flex items-center border-b-8 border-black">
                <img 
                    src="/images/banner/Food Court.png" 
                    alt="Food Court de Perimágico" 
                    className="absolute inset-0 w-full h-full object-cover z-0" 
                />
                
                <div className="absolute inset-0 bg-black/45 z-10" />

                <div className="container px-4 md:px-8 relative z-20 flex justify-start">
                    <div className="w-full max-w-[460px] bg-black/85 backdrop-blur-md border-4 border-black p-8 rounded-3xl shadow-[12px_12px_0_0_rgba(0,0,0,0.6)] transform hover:scale-102 transition-transform duration-300">
                        <div className="h-16 md:h-20 mb-6 flex justify-start items-center">
                            <img 
                                src="/images/banner/Food Court text.png" 
                                alt="Food Court Logo" 
                                className="h-full object-contain filter brightness-200" 
                            />
                        </div>
                        <p className="text-gray-200 font-bold text-base md:text-lg leading-relaxed mb-8">
                            Recarga toda esa energía perdida después de tanta diversión. Contamos con una amplia variedad de alimentos deliciosos como pizzas calientitas, hamburguesas, paninis, snacks y las bebidas más refrescantes.
                        </p>
                        <a 
                            href="#contacto" 
                            className="inline-block bg-primary text-white border-2 border-black px-10 py-3.5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-secondary hover:text-black shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] transition-all"
                        >
                            VER MÁS
                        </a>
                    </div>
                </div>
            </section>

            <section id="feed-instagram" className="bg-white py-16 border-b-8 border-black">
                <div className="container px-4 md:px-8 text-center">
                    <a 
                        href="https://www.instagram.com/perimagicooficial" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="inline-flex items-center gap-3 mb-10 hover:scale-105 transition-transform"
                    >
                        <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-md">
                            <Instagram size={26} strokeWidth={2.5} />
                        </div>
                        <span className="text-black text-2xl md:text-3xl font-black uppercase tracking-tight">
                            @perimagicooficial
                        </span>
                    </a>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0 max-w-6xl mx-auto">
                        {instagramPosts.map((post, idx) => (
                            <a 
                                key={idx} 
                                href="https://www.instagram.com/perimagicooficial" 
                                target="_blank" 
                                rel="noreferrer" 
                                className={`group overflow-hidden hover:opacity-80 transition-opacity duration-300 aspect-square relative ${idx >= 4 ? 'hidden lg:block' : ''} ${idx >= 3 ? 'hidden sm:block' : ''}`}
                            >
                                <img 
                                    src={post.img} 
                                    alt={`Instagram post ${idx + 1}`} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <section id="ubicacion" className="relative w-full h-[500px] bg-gray-200 border-b-8 border-black flex items-center">
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
                
                <div className="container px-4 md:px-8 relative z-20 flex justify-start">
                    <div className="w-full max-w-md">
                        <h2 className="text-white text-4xl md:text-5xl font-black uppercase tracking-tight mb-6">
                            Ubicación
                        </h2>
                        <div className="flex items-start gap-3 mb-8 text-white">
                            <MapPin size={28} className="flex-shrink-0 mt-1" />
                            <p className="font-bold text-lg">
                                Centro Comercial Galerías Perinorte<br />
                                Cuautitlán Izcalli, Estado de México
                            </p>
                        </div>
                        <a 
                            href="#contacto" 
                            className="inline-block bg-primary text-white border-2 border-black px-10 py-3.5 rounded-full font-black text-sm uppercase tracking-widest hover:bg-secondary hover:text-black shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] transition-all"
                        >
                            Cómo llegar
                        </a>
                    </div>
                </div>
            </section>

            <ContactForm />
        </Layout>
    );
};

export default Home;
