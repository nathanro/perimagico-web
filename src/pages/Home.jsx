import { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Instagram, MapPin } from 'lucide-react';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Home = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const goToSlide = useCallback((direction) => {
        if (isAnimating) return;
        setIsAnimating(true);
        setActiveSlide(prev => {
            const total = 6; // games.length
            if (direction === 'prev') return (prev - 1 + total) % total;
            return (prev + 1) % total;
        });
        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating]);

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

            {/* 1. HERO SECTION (Video background + Horarios Box Overlay) */}
            <section className="relative w-full h-[650px] md:h-[750px] lg:h-[850px] bg-black overflow-hidden flex items-center justify-center">
                {/* Background Video */}
                <video
                    src="/videos/int.mp4"
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-75"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/40 z-10" />

                {/* Hero Interactive Elements */}
                <div className="container relative z-20 w-full h-full flex flex-col md:flex-row items-center justify-between pt-32 pb-12 gap-8">
                    
                    {/* Left: Floating Horarios Card */}
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
                    </div>

                </div>
            </section>

            {/* 2. ATRACCIONES & JUEGOS — COVERFLOW SLIDER (estilo Acuario Michin) */}
            <section id="juegos-atracciones" className="bg-[#0a1628] py-16 md:py-20 relative overflow-hidden border-b-8 border-black">
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0d1f3c] to-[#060e1c] pointer-events-none" />

                <div className="relative z-10">
                    {/* Section Header */}
                    <div className="text-center mb-10 px-4">
                        <h2 className="text-white text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-3">
                            ATRACCIONES <span className="bg-secondary text-black px-4 py-1 rounded-xl border-4 border-black inline-block rotate-[-1deg] shadow-[4px_4px_0_0_rgba(0,0,0,1)] text-3xl md:text-5xl lowercase ml-2">Juegos</span>
                        </h2>
                        <p className="text-white/70 font-bold text-base md:text-lg max-w-xl mx-auto">
                            Descubre nuestras atracciones únicas diseñadas para que toda la familia pase un rato inolvidable.
                        </p>
                    </div>

                    {/* Coverflow Slider Stage */}
                    <div className="relative flex items-center justify-center" style={{ minHeight: '520px' }}>

                        {/* LEFT ARROW */}
                        <button
                            onClick={() => goToSlide('prev')}
                            className="absolute left-3 md:left-8 z-30 w-11 h-11 md:w-14 md:h-14 bg-secondary text-black rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:scale-110 active:scale-95 transition-all border-2 border-black"
                            aria-label="Atracción anterior"
                        >
                            <ChevronLeft size={26} strokeWidth={3} />
                        </button>

                        {/* RIGHT ARROW */}
                        <button
                            onClick={() => goToSlide('next')}
                            className="absolute right-3 md:right-8 z-30 w-11 h-11 md:w-14 md:h-14 bg-secondary text-black rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.6)] hover:scale-110 active:scale-95 transition-all border-2 border-black"
                            aria-label="Siguiente atracción"
                        >
                            <ChevronRight size={26} strokeWidth={3} />
                        </button>

                        {/* SLIDES TRACK — overflow hidden so side cards are clipped */}
                        <div className="w-full flex items-center justify-center overflow-hidden" style={{ height: '520px' }}>
                            <div className="relative flex items-center justify-center w-full h-full">
                                {games.map((game, idx) => {
                                    const total = games.length;
                                    let rel = idx - activeSlide;
                                    if (rel > total / 2) rel -= total;
                                    if (rel < -total / 2) rel += total;

                                    // Only render -2 to +2
                                    if (Math.abs(rel) > 2) return null;

                                    const isActive = rel === 0;
                                    const isSide = Math.abs(rel) === 1;

                                    // Scale, opacity and translateX per position
                                    const scale = isActive ? 1 : isSide ? 0.75 : 0.55;
                                    const opacity = isActive ? 1 : isSide ? 0.55 : 0.25;
                                    // translateX in % of the slide's own width — push sides outward
                                    const tx = rel === 0 ? 0 : rel === 1 ? 82 : rel === -1 ? -82 : rel === 2 ? 145 : -145;

                                    const activeW = 640;
                                    const sideW = 260;
                                    const farW = 180;
                                    const w = isActive ? activeW : isSide ? sideW : farW;
                                    const h = isActive ? 480 : isSide ? 400 : 300;

                                    return (
                                        <div
                                            key={game.title}
                                            onClick={() => !isActive && setActiveSlide(idx)}
                                            className="absolute rounded-2xl md:rounded-3xl overflow-hidden cursor-pointer"
                                            style={{
                                                width: w,
                                                height: h,
                                                transform: `translateX(${tx}%) scale(${scale})`,
                                                opacity,
                                                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                                                zIndex: isActive ? 20 : isSide ? 10 : 5,
                                            }}
                                        >
                                            {/* Image */}
                                            <img
                                                src={game.img}
                                                alt={game.title}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />

                                            {/* Active: gradient + text overlay at bottom */}
                                            {isActive && (
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
                                                    <span className="inline-block bg-secondary text-black text-xs font-black uppercase px-3 py-1 rounded-lg border-2 border-black w-fit mb-3 shadow-md">
                                                        Perimágico
                                                    </span>
                                                    <h3 className="text-white text-2xl md:text-4xl font-black uppercase tracking-tight leading-tight mb-2">
                                                        {game.title}
                                                    </h3>
                                                    <p className="text-white/80 text-sm md:text-base font-bold leading-relaxed mb-4 max-w-lg line-clamp-3">
                                                        {game.desc}
                                                    </p>
                                                    <a
                                                        href="#contacto"
                                                        className="inline-flex items-center gap-2 text-secondary font-black uppercase text-sm tracking-widest hover:gap-4 transition-all w-fit"
                                                        onClick={e => e.stopPropagation()}
                                                    >
                                                        MÁS INFORMACIÓN →
                                                    </a>
                                                </div>
                                            )}

                                            {/* Non-active: dark overlay */}
                                            {!isActive && (
                                                <div className="absolute inset-0 bg-black/50 hover:bg-black/30 transition-colors" />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Dot indicators */}
                    <div className="flex justify-center gap-2.5 mt-8 pb-2">
                        {games.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setActiveSlide(idx)}
                                className={`rounded-full transition-all duration-300 border-2 ${
                                    idx === activeSlide
                                        ? 'w-8 h-3 bg-secondary border-secondary'
                                        : 'w-3 h-3 bg-white/30 border-white/40 hover:bg-white/60'
                                }`}
                                aria-label={`Ir a ${games[idx].title}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. ACCESOS SECTION (Blue background + Tickets) */}
            <section id="accesos" className="bg-[#009bfb] py-20 text-white relative overflow-hidden border-b-8 border-black">
                {/* Decorative Elements */}
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />

                <div className="container px-4 md:px-8 relative z-10 text-center">
                    <h2 className="text-secondary text-5xl md:text-6xl font-black uppercase tracking-tight mb-2 drop-shadow-md">
                        Accesos
                    </h2>
                    <p className="text-white font-bold text-lg md:text-xl uppercase tracking-wider mb-12 opacity-95">
                        La diversión está a un día de distancia
                    </p>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-stretch">
                        {tickets.map((t, idx) => (
                            <div 
                                key={idx} 
                                className={`bg-white rounded-3xl overflow-hidden shadow-[8px_8px_0_0_rgba(0,0,0,0.25)] border-4 border-black flex flex-col justify-between transform hover:-translate-y-3 hover:scale-102 hover:shadow-neon-blue transition-all duration-300 ${t.isRecommended ? 'relative ring-4 ring-secondary border-secondary ring-offset-4 ring-offset-brandblue' : ''}`}
                            >
                                {t.isRecommended && (
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-black uppercase px-4 py-1.5 rounded-full border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] z-10 tracking-widest whitespace-nowrap animate-bounce">
                                        EL MÁS RECOMENDADO
                                    </div>
                                )}
                                
                                <div className="p-3 bg-white flex-1 flex items-center justify-center">
                                    <img 
                                        src={t.img} 
                                        alt={t.name} 
                                        className="w-full h-auto object-contain rounded-2xl" 
                                    />
                                </div>
                                
                                <div className="p-4 bg-gray-50 border-t-2 border-gray-100">
                                    <a 
                                        href={t.path} 
                                        className="w-full block bg-primary text-white py-3 rounded-full text-center font-black text-sm uppercase hover:bg-secondary hover:text-black border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:translate-y-0.5 hover:shadow-[1px_1px_0_0_rgba(0,0,0,1)] transition-all"
                                    >
                                        RESERVAR AHORA
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    <p className="mt-12 text-white/90 font-black uppercase text-base tracking-widest">
                        Seleccione el paquete que quieras reservar.
                    </p>
                </div>
            </section>

            {/* 4. CUMPLEAÑOS SECTION */}
            <section id="cumpleanos" className="relative w-full h-[500px] md:h-[600px] bg-black overflow-hidden flex items-center border-b-8 border-black">
                {/* Background Image */}
                <img 
                    src="/images/banner/Cumpleaños.png" 
                    alt="Cumpleaños en Perimágico" 
                    className="absolute inset-0 w-full h-full object-cover z-0" 
                />
                
                {/* Dark Vignette mask */}
                <div className="absolute inset-0 bg-black/40 z-10" />

                <div className="container px-4 md:px-8 relative z-20">
                    <div className="w-full max-w-[460px]">
                        <h2 className="text-secondary text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4 drop-shadow-lg">
                            CUMPLEAÑOS
                        </h2>
                        <p className="text-white font-bold text-base md:text-lg leading-relaxed mb-8 drop-shadow-md">
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

            {/* 5. FOOD COURT SECTION */}
            <section id="restaurante" className="relative w-full h-[500px] md:h-[600px] bg-black overflow-hidden flex items-center border-b-8 border-black">
                {/* Background Image */}
                <img 
                    src="/images/banner/Food Court.png" 
                    alt="Food Court de Perimágico" 
                    className="absolute inset-0 w-full h-full object-cover z-0" 
                />
                
                {/* Dark Vignette mask */}
                <div className="absolute inset-0 bg-black/45 z-10" />

                <div className="container px-4 md:px-8 relative z-20 flex justify-start">
                    <div className="w-full max-w-[460px]">
                        <div className="h-16 md:h-20 mb-6 flex justify-start items-center">
                            <img
                                src="/images/banner/Food Court text.png"
                                alt="Food Court Logo"
                                className="h-full object-contain filter brightness-200 drop-shadow-lg"
                            />
                        </div>
                        <p className="text-white font-bold text-base md:text-lg leading-relaxed mb-8 drop-shadow-md">
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

            {/* 6. INSTAGRAM FEED SECTION */}
            <section id="feed-instagram" className="bg-white py-16 border-b-8 border-black">
                <div className="container px-4 md:px-8 text-center">
                    {/* Instagram Header */}
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
                            @perimagico
                        </span>
                    </a>

                    {/* Instagram Feed 5 Posts Row */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
                        {instagramPosts.map((post, idx) => (
                            <a 
                                key={idx} 
                                href="https://www.instagram.com/perimagicooficial" 
                                target="_blank" 
                                rel="noreferrer" 
                                className={`group bg-gray-100 rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 aspect-square relative ${idx >= 4 ? 'hidden lg:block' : ''} ${idx >= 3 ? 'hidden sm:block' : ''}`}
                            >
                                <img 
                                    src={post.img} 
                                    alt={`Instagram post ${idx + 1}`} 
                                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500" 
                                />
                                {/* Hover Mask */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-black text-lg">
                                    <div className="flex items-center gap-2">
                                        <span>❤️</span>
                                        <span>{post.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span>💬</span>
                                        <span>{post.comments}</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. MAPA E INDICACIONES (Location section) */}
            <section id="ubicacion" className="relative w-full h-[500px] bg-gray-200 border-b-8 border-black">
                {/* Full Width Google Map */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15031.543415848525!2d-99.1994646549301!3d19.610813972626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f568e61295db%3A0xeab5bc034d610010!2sGaler%C3%ADas%20Perinorte!5e0!3m2!1ses-419!2smx!4v1714588500203!5m2!1ses-419!2smx" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(0.1) contrast(1.05)' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Perimágico en Galerías Perinorte"
                ></iframe>

                {/* Overlaid Address Box */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 bg-black/85 backdrop-blur-md border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,0.6)] max-w-sm w-[90%] md:w-auto z-10 flex flex-col items-center text-center text-white rounded-3xl">
                    <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mb-4 border-2 border-black shadow-md">
                        <MapPin size={28} />
                    </div>
                    <h3 className="text-secondary text-2xl font-black uppercase tracking-tight mb-2">Location</h3>
                    <p className="font-bold text-gray-200 text-sm leading-relaxed mb-6">
                        Centro Comercial Galerías Perinorte,<br/>Cuautitlán Izcalli, Estado de México.
                    </p>
                    <a 
                        href="https://maps.app.goo.gl/wYcE2Z76iC8Rk5j59" 
                        target="_blank" 
                        rel="noreferrer" 
                        className="bg-primary text-white text-sm font-black uppercase py-3.5 px-8 rounded-full border-2 border-black hover:bg-secondary hover:text-black transition-all inline-block w-full shadow-md"
                    >
                        CÓMO LLEGAR
                    </a>
                </div>
            </section>

            {/* 8. FORMULARIO DE CONTACTO */}
            <ContactForm />

        </Layout>
    );
};

export default Home;
