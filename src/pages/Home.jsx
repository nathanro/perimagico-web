import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';

const Home = () => {

    const attractions = [
        { title: 'Atracciones Extremas', desc: 'Siente la adrenalina pura en nuestros emocionantes juegos mecánicos diseñados para desafiar tus límites y darte la mayor diversión.', img: '/images/upscaled/Image-1-2.png' },
        { title: 'Zona Arcade', desc: 'Disfruta de cientos de videojuegos clásicos y modernos. Gana tickets y canjéalos por increíbles premios en nuestra exclusiva tienda.', img: '/images/upscaled/Image-1-3.png' },
        { title: 'Guácala', desc: 'Una experiencia interactiva y viscosa donde los más pequeños podrán divertirse a lo grande experimentando texturas únicas.', img: '/images/upscaled/Image-1-5.png' },
        { title: 'Ninja Parkour', desc: 'Demuestra tu agilidad y destreza en nuestro circuito de obstáculos. ¡Compite con tus amigos y descubre quién es el más rápido!', img: '/images/upscaled/Image-1-6.png' },
        { title: 'Inflatables', desc: 'Un parque de inflables gigante para saltar, rebotar y deslizarse sin parar. Máxima seguridad y diversión garantizada para niños.', img: '/images/upscaled/Image-1-7.png' },
        { title: 'Carros Eléctricos', desc: 'Ponte al volante en nuestra pista de carritos chocones. Una atracción clásica que nunca pasa de moda para toda la familia.', img: '/images/upscaled/Image-1-8.png' },
        { title: 'Sendero del Terror', desc: 'Recorre un camino espeluznante lleno de misterios y sorpresas espantosas. Solo para los más valientes del parque.', img: '/images/upscaled/Image-1-9.png' },
    ];

    const pricingPackages = [
        {
            title: 'ACCESO GENERAL',
            price: '$235',
            desc: 'Entrada al parque + 4 juegos mecánicos (1 sola vez). No incluye atracciones extremas.',
            bottomColor: 'var(--color-primary)', // Red
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
            bottomColor: 'var(--color-primary)', // Red
        }
    ];

    return (
        <Layout>
            <div id="top"></div>

            {/* 1. HERO SECTION (Exact Funtastic Clone) */}
            <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[750px] bg-black overflow-hidden flex items-center">
                {/* Background Video/Image */}
                <div className="absolute inset-0 z-0">
                    <img src="/images/upscaled/Image-1-1.png" alt="Perimagico Hero" className="w-full h-full object-cover opacity-60" />
                </div>
                
                {/* Floating Logo Superpuesto in Hero */}
                <div className="absolute top-24 right-10 lg:right-32 z-20 hidden md:block opacity-60">
                     <img src="https://piccolomondo.com.mx/wp-content/uploads/2024/01/Recurso-1-e1705974571200.png" alt="Logo Flotante" className="w-64" style={{ filter: 'grayscale(100%) brightness(200%)' }} />
                </div>

                <div className="container relative z-10 w-full h-full flex flex-col md:flex-row items-stretch pt-28 pb-10 gap-12">
                    {/* Left: Days & Hours with Yellow accent bar */}
                    <div className="w-full md:w-5/12 lg:w-4/12 bg-black/80 text-white p-8 md:p-10 flex flex-col justify-center relative border-l-[4px] border-secondary">
                        <div className="pl-2">
                            <h2 className="text-3xl font-black uppercase mb-8 border-b-2 border-gray-700 pb-4">Horarios</h2>
                            
                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold uppercase text-secondary mb-1">LUNES</h3>
                                    <p className="text-primary font-black uppercase">Cerrado</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold uppercase text-secondary mb-1">MARTES - JUEVES</h3>
                                    <p className="text-white font-bold text-lg">1:00 pm - 8:00 pm</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold uppercase text-secondary mb-1">VIERNES</h3>
                                    <p className="text-white font-bold text-lg">1:00 pm - 8:30 pm</p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold uppercase text-secondary mb-1">SÁBADO - DOMINGO</h3>
                                    <p className="text-white font-bold text-lg">12:00 pm - 9:00 pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Main Headline & CTA matching Funtastic text */}
                    <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col items-start justify-center pl-8 md:pl-16">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-6 drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                            ¡La magia <br/><span className="text-secondary">comienza aquí!</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white font-bold mb-10 max-w-xl drop-shadow-lg leading-snug">
                            Vive una experiencia inolvidable. Diversión para toda la familia en el mejor parque techado.
                        </p>
                        
                        <div className="flex flex-col gap-4 w-full sm:w-auto items-start">
                            <a href="#eventos" className="bg-transparent text-secondary border-[4px] border-secondary text-lg hover:bg-secondary hover:text-black hover:border-transparent uppercase shadow-[4px_4px_0_0_rgba(255,194,14,1)] hover:translate-y-1 hover:shadow-none font-black text-center px-10 py-3 rounded-full transition-all flex justify-center items-center">
                                Fiestas de Cumpleaños
                            </a>
                            <a href="#precios" className="bg-primary text-white text-lg uppercase hover:brightness-110 font-black text-center shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none border-[4px] border-transparent px-14 py-3 rounded-full transition-all flex justify-center items-center">
                                Reservar Ahora
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. VIVE LA EXPERIENCIA (Overlapping Cards over Colored Stripes) */}
            <section id="experiencia" className="bg-white pt-20 pb-32 relative overflow-hidden">
                {/* Geometric Diagonal Decorations (Red + Yellow) */}
                <svg className="absolute top-0 right-0 w-64 h-64 text-primary opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="100,0 100,100 0,0" />
                </svg>
                <svg className="absolute top-0 right-0 w-48 h-48 text-secondary opacity-30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="100,0 100,100 0,0" />
                </svg>
                
                <div className="container relative z-10 px-4 md:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-12">
                        <div className="max-w-3xl flex flex-col justify-start">
                            <h2 className="text-primary text-[56px] font-black uppercase tracking-tighter leading-[1] mb-4">
                                VIVE LA EXPERIENCIA
                            </h2>
                            <p className="text-lg md:text-xl font-bold text-gray-600 leading-snug">
                                Experiencia única y original en Galerías Perinorte. Nuestro parque techado de diversiones combina <i>thrill rides</i> con un ambiente incomparable. Diversión total.
                            </p>
                        </div>
                        <div className="shrink-0 mb-2">
                            <a href="#atracciones" className="bg-primary text-white text-base font-black uppercase py-4 px-10 rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all border-2 border-transparent inline-block">
                                Ver Más
                            </a>
                        </div>
                    </div>
                </div>

                {/* The distinct Funtastic background stripes behind the overlapping cards */}
                <div className="absolute left-0 w-full h-[300px] mt-8 flex z-0">
                    <div className="w-1/3 h-full bg-secondary"></div>
                    <div className="w-1/3 h-full bg-primary"></div>
                    <div className="w-1/3 h-full" style={{ backgroundColor: 'var(--color-accent-green)' }}></div>
                </div>

                {/* Overlapping Vertical Image Cards (4 Cards) */}
                <div className="container relative z-10 px-4 md:px-8 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Card 1 */}
                        <div className="bg-white border-4 border-black p-3 transform hover:-translate-y-2 transition-transform duration-300 shadow-[12px_12px_0_0_rgba(0,0,0,1)] h-[400px]">
                            <div className="w-full h-full bg-black relative overflow-hidden group">
                                <img src="/images/upscaled/Image-1-4.png" alt="Juntos" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <h3 className="absolute bottom-6 left-6 text-white font-black text-3xl uppercase tracking-tighter">
                                    JUNTOS
                                </h3>
                            </div>
                        </div>
                        {/* Card 2 */}
                        <div className="bg-white border-4 border-black p-3 transform lg:translate-y-8 hover:translate-y-6 transition-transform duration-300 shadow-[12px_12px_0_0_rgba(0,0,0,1)] h-[400px]">
                            <div className="w-full h-full bg-black relative overflow-hidden group">
                                <img src="/images/upscaled/Image-1-5.png" alt="Diversión" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <h3 className="absolute bottom-6 left-6 text-white font-black text-3xl uppercase tracking-tighter">
                                    DIVERSIÓN
                                </h3>
                            </div>
                        </div>
                        {/* Card 3 */}
                        <div className="bg-white border-4 border-black p-3 transform hover:-translate-y-2 transition-transform duration-300 shadow-[12px_12px_0_0_rgba(0,0,0,1)] h-[400px]">
                            <div className="w-full h-full bg-black relative overflow-hidden group">
                                <img src="/images/upscaled/Image-1-9.png" alt="Familia" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <h3 className="absolute bottom-6 left-6 text-white font-black text-3xl uppercase tracking-tighter">
                                    FAMILIA
                                </h3>
                            </div>
                        </div>
                        {/* Card 4 (Added as requested to match Funtastic's 4 cards) */}
                        <div className="bg-white border-4 border-black p-3 transform lg:translate-y-8 hover:translate-y-6 transition-transform duration-300 shadow-[12px_12px_0_0_rgba(0,0,0,1)] h-[400px]">
                            <div className="w-full h-full bg-black relative overflow-hidden group">
                                <img src="/images/upscaled/Image-1-2.png" alt="Amigos" className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                                <h3 className="absolute bottom-6 left-6 text-white font-black text-3xl uppercase tracking-tighter">
                                    AMIGOS
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. PRECIOS & PAQUETES */}
            <section id="precios" className="bg-[#8b0000] relative py-24 sm:py-32 overflow-hidden border-y-8 border-black">
                {/* Geometric Red/Yellow decor background */}
                <svg className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                    <circle cx="20" cy="20" r="15" fill="var(--color-secondary)" />
                    <polygon points="80,20 100,50 60,50" fill="var(--color-primary)" />
                    <rect x="10" y="70" width="30" height="30" fill="var(--color-primary)" transform="rotate(45 25 85)" />
                    <polygon points="90,80 100,100 80,100" fill="var(--color-secondary)" />
                </svg>

                <div className="container px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        
                        <div className="w-full lg:w-1/4">
                            <h2 className="text-white text-5xl md:text-6xl font-black uppercase mb-6 leading-[0.9] tracking-tighter drop-shadow-lg">
                                PRECIOS Y<br/>PAQUETES
                            </h2>
                            <p className="text-white font-bold mb-8 uppercase tracking-wide text-lg drop-shadow-md">
                                ¡Diviértete HOY!<br/>
                                La diversión está a un clic de distancia.
                            </p>
                            <a href="#contacto" className="btn bg-black text-white px-8 py-3 rounded-full uppercase hover:brightness-110 transition-all text-sm font-black shadow-[4px_4px_0_0_rgba(0,0,0,0.5)] border-2 border-white/20 inline-block">
                                VER MÁS
                            </a>
                        </div>

                        {/* Funtastic Two-Tone Pricing Cards */}
                        <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
                            {pricingPackages.map((pkg, idx) => (
                                <div key={idx} className="flex flex-col h-full border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,0.5)] hover:-translate-y-2 transition-all duration-300">
                                    <div className="bg-[#1a1a1a] text-white p-8 flex flex-col justify-center items-center h-48 border-b-4 border-black">
                                        <h3 className="text-2xl md:text-3xl font-black uppercase text-center leading-tight tracking-tighter">
                                            {pkg.title}
                                        </h3>
                                        <span className="text-gray-400 text-sm font-bold mt-2 uppercase">Starting at</span>
                                    </div>
                                    <div className="p-8 flex-1 flex flex-col items-center justify-between" style={{ backgroundColor: pkg.bottomColor, color: pkg.textColor || 'white' }}>
                                        <div className="text-[48px] md:text-[56px] text-secondary font-black mb-6 tracking-tighter leading-none drop-shadow-md">{pkg.price}</div>
                                        <p className="font-bold text-center text-sm md:text-base leading-relaxed mb-8 opacity-95 flex-1">
                                            {pkg.desc}
                                        </p>
                                        <button className="w-full py-4 text-lg font-black rounded-full uppercase transition-all bg-primary text-white border-2 border-white/20 shadow-[4px_4px_0_0_rgba(0,0,0,0.3)] hover:-translate-y-1 hover:brightness-110">
                                            Reservar Ahora
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SECCIÓN ATRACCIONES (Con descripciones largas) */}
            <section id="atracciones" className="bg-[#f8f9fa] relative py-24 border-b-8 border-black overflow-hidden">
                {/* Geometric Diagonal Decorations (Red + Yellow) */}
                <svg className="absolute top-0 right-0 w-64 h-64 text-secondary opacity-30 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="100,0 100,100 0,0" />
                </svg>
                <svg className="absolute bottom-0 left-0 w-48 h-48 text-primary opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon fill="currentColor" points="0,0 0,100 100,100" />
                </svg>

                <div className="container px-4 relative z-10">
                    <div className="text-left mb-16 flex flex-col lg:flex-row justify-between items-end gap-6 border-b-[4px] border-black pb-8">
                        <div className="max-w-2xl">
                            <h2 className="text-primary text-[56px] font-black uppercase mb-4 tracking-tighter leading-none shadow-sm">
                                ATRACCIONES
                            </h2>
                            <p className="text-gray-700 font-bold text-lg md:text-xl">
                                Descubre nuestras atracciones únicas diseñadas para que tus hijos y toda la familia pasen un rato inolvidable llenos de adrenalina y alegría.
                            </p>
                        </div>
                        <a href="#" className="bg-primary text-white text-base font-black uppercase py-4 px-10 rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all border-2 border-transparent inline-block shrink-0">
                            Ver Más
                        </a>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {attractions.map((attr, idx) => (
                            <a href="#" key={idx} className="group flex flex-col border-4 border-black bg-white shadow-[8px_8px_0_0_rgba(0,0,0,1)] hover:shadow-[12px_12px_0_0_rgba(0,0,0,1)] transform hover:-translate-y-2 transition-all duration-300">
                                {/* Image with Title Overlay */}
                                <div className="h-56 bg-black border-b-4 border-black overflow-hidden relative">
                                    <img src={attr.img} alt={attr.title} className="w-full h-full object-cover opacity-90 group-hover:scale-110 group-hover:opacity-100 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                    <h3 className="absolute bottom-4 left-5 text-white text-2xl font-black uppercase tracking-tight drop-shadow-md pr-4 leading-tight">
                                        {attr.title}
                                    </h3>
                                </div>
                                {/* White Description Box */}
                                <div className="p-6 flex flex-col flex-1 bg-white relative">
                                    {/* Small red decorative corner */}
                                    <div className="absolute top-0 right-0 w-8 h-8 bg-primary clip-triangle opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <p className="font-bold text-gray-600 text-[15px] leading-relaxed flex-1">
                                        {attr.desc}
                                    </p>
                                    <div className="mt-6 text-primary font-black uppercase text-sm tracking-widest flex items-center gap-2 group-hover:text-black transition-colors">
                                        Explorar <span className="transform group-hover:translate-x-2 transition-transform">&rarr;</span>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. SECCIÓN MEMBRESÍA (Equivalente: Eventos Especiales / Cumpleaños) */}
            <section id="eventos" className="w-full bg-[#111] py-24 px-4 border-b-8 border-black relative overflow-hidden">
                {/* Decorative dark background elements */}
                <svg className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polygon points="50,0 100,0 100,100 0,100" fill="var(--color-primary)" />
                </svg>

                <div className="container px-4 text-center max-w-4xl mx-auto relative z-10">
                    <h2 className="text-white text-5xl md:text-7xl font-black uppercase mb-8 tracking-tighter leading-none drop-shadow-[2px_2px_0_rgba(220,38,38,0.5)]">
                        EVENTOS ESPECIALES
                    </h2>
                    <p className="text-gray-300 font-bold text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
                        Únete a nuestro selecto grupo y accede a beneficios exclusivos, invitaciones ilimitadas y áreas privadas reservando uno de nuestros paquetes festivos. Haz de tu evento, cumpleaños o visita escolar algo verdaderamente mágico e inolvidable.
                    </p>
                    <a href="#contacto" className="btn bg-primary text-white text-xl py-4 px-12 rounded-full uppercase font-black shadow-[4px_4px_0_0_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all border-2 border-transparent hover:border-white/50 inline-block">
                        Ver Más
                    </a>
                </div>
            </section>

            {/* 6. FOOD BAR SECTION (Textos detallados, fondo blanco, logos) */}
            <section id="menu" className="w-full bg-white py-24 px-4 border-b-8 border-gray-200">
                <div className="container max-w-5xl mx-auto flex flex-col items-center text-center">
                    <h2 className="text-black text-5xl md:text-6xl font-black uppercase leading-[0.9] mb-8 tracking-tighter">
                        PERIMÁGICO FOOD BAR
                    </h2>
                    <p className="text-gray-700 font-bold text-lg md:text-xl mb-12 leading-relaxed max-w-3xl">
                        Recarga toda esa energía perdida después de tanta diversión. Contamos con una amplia variedad de alimentos deliciosos como Pizzas recién horneadas con los mejores ingredientes, Paninis crujientes y calientitos, Papas a la francesa perfectas para compartir, Hamburguesas al carbón jugosas, Nuggets de pollo crujientes y las bebidas más refrescantes para toda la familia.
                    </p>
                    
                    <a href="#contacto" className="inline-block bg-primary text-white px-10 py-4 text-lg font-black uppercase rounded-full shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-all border-2 border-black mb-16">
                        Ver Más
                    </a>

                    {/* Partner Logos */}
                    <div className="w-full border-t-2 border-gray-200 pt-12">
                        <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-8">Nuestras Marcas Aliadas</h3>
                        <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                            <div className="h-20 w-32 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center font-black text-gray-400 text-lg hover:bg-white hover:shadow-md transition-all">ICE CREAM</div>
                            <div className="h-20 w-32 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center font-black text-gray-400 text-lg hover:bg-white hover:shadow-md transition-all">COLA</div>
                            <div className="h-20 w-32 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center font-black text-gray-400 text-lg hover:bg-white hover:shadow-md transition-all">CHURROS</div>
                            <div className="h-20 w-32 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center font-black text-gray-400 text-lg hover:bg-white hover:shadow-md transition-all">SNACKS</div>
                            <div className="h-20 w-32 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center font-black text-gray-400 text-lg hover:bg-white hover:shadow-md transition-all">COFFEE</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. MAPA E INDICACIONES (Full width Funtastic style) */}
            <section id="ubicacion" className="relative w-full h-[500px] bg-gray-200 border-b-8 border-black">
                {/* Full Width Map */}
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15031.543415848525!2d-99.1994646549301!3d19.610813972626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f568e61295db%3A0xeab5bc034d610010!2sGaler%C3%ADas%20Perinorte!5e0!3m2!1ses-419!2smx!4v1714588500203!5m2!1ses-419!2smx" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>

                {/* Overlaid Address Box */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0 bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0_0_rgba(0,0,0,1)] max-w-sm w-[90%] md:w-auto z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.2)]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    </div>
                    <h3 className="text-black text-2xl font-black uppercase tracking-tight mb-2">Location</h3>
                    <p className="font-bold text-gray-700 text-sm leading-snug">
                        Centro Comercial Galerias Perinorte,<br/>Cuautitlán Izcalli, Mex.
                    </p>
                    <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="mt-6 bg-black text-white text-sm font-black uppercase py-3 px-8 rounded-full hover:bg-primary transition-colors inline-block w-full">
                        Obtener Rutas
                    </a>
                </div>
            </section>

        </Layout>
    );
};

export default Home;
