import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 bg-black overflow-hidden">
            {/* Background Image / Video Container */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <video
                    src="http://piccolomondo.com.mx/wp-content/uploads/2024/01/WhatsApp-Video-2023-12-11-at-9.01.57-PM.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container relative z-20 flex flex-col h-full justify-center items-center md:items-end md:text-right w-full pt-[15vh] pb-[45vh] md:pb-64">
                {/* Main Content: Big Call to Action overlaying image */}
                <div className="w-full md:w-2/3 flex flex-col items-center md:items-end text-center md:text-right">
                    <div className="bg-white p-6 transform -rotate-2 mb-6 border-4 border-black relative shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h1 className="text-black text-3xl md:text-5xl font-black leading-tight tracking-tighter">
                            ¡La magia comienza aquí! <br />
                            <span className="text-magenta" style={{ color: 'var(--color-accent-magenta)' }}>Vive una experiencia que nunca olvidarás</span>
                        </h1>
                    </div>

                    <p className="text-white text-lg md:text-xl font-bold bg-black/60 p-4 mb-8 max-w-lg">
                        Diversión sin límites para toda la familia: juegos mecánicos, atracciones extremas, arcade y mucho más en el parque techado más emocionante de México.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center md:justify-end gap-6 w-full md:max-w-xl">
                        <a href="#contacto" className="btn w-full md:w-auto text-lg px-8 py-4 rounded-[50px] shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:translate-y-1 hover:shadow-none flex justify-center items-center gap-2 font-black uppercase transition-all" style={{ backgroundColor: '#ffcc00', color: 'black' }}>
                            🎂 Cotiza tu fiesta
                        </a>
                        <a href="#precios" className="btn w-full md:w-auto text-lg px-8 py-4 rounded-[50px] border-4 border-white hover:bg-white hover:text-black transition-colors flex justify-center items-center gap-2 font-black uppercase" style={{ backgroundColor: 'transparent', color: 'white' }}>
                            Ver boletos
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Horizontal Days & Hours Panel */}
            <div className="absolute bottom-12 md:bottom-20 left-0 w-full z-40 bg-black border-y-4 border-secondary/50 pt-4 pb-4 md:pb-6 shadow-[0_-10px_30px_rgba(0,0,0,0.8)]">
                <div className="container px-4 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-10">
                        {/* Title Section */}
                        <div className="flex items-center gap-4 w-full lg:w-auto justify-center lg:justify-start">
                            <h2 className="text-white text-2xl md:text-3xl font-black uppercase tracking-wide flex items-center gap-2 mb-0 shrink-0">
                                Días & Horarios
                            </h2>
                        </div>

                        {/* Hours Section */}
                        <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-end gap-6 md:gap-10 w-full text-white font-bold text-sm md:text-base">
                            <div className="flex flex-col items-center">
                                <span className="text-gray-400 text-xs md:text-sm font-bold tracking-wider mb-1">Lunes</span>
                                <span className="text-red-500 font-black">Cerrado</span>
                            </div>
                            <div className="flex flex-col items-center border-l-2 border-white/10 pl-6 md:pl-10">
                                <span className="text-gray-400 text-xs md:text-sm font-bold tracking-wider mb-1">Martes - Jueves</span>
                                <span>1:00 pm - 8:00 pm</span>
                            </div>
                            <div className="flex flex-col items-center border-l-2 border-white/10 pl-6 md:pl-10">
                                <span className="text-gray-400 text-xs md:text-sm font-bold tracking-wider mb-1">Viernes</span>
                                <span>1:00 pm - 8:30 pm</span>
                            </div>
                            <div className="flex flex-col items-center border-l-2 border-white/10 pl-6 md:pl-10">
                                <span className="text-gray-400 text-xs md:text-sm font-bold tracking-wider mb-1">Sábado - Domingo</span>
                                <span>12:00 pm - 9:00 pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Angled Decorative Strip */}
            <div className="absolute bottom-0 left-0 w-full h-[12vw] z-30 overflow-hidden line-height-0">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full block">
                    <polygon points="0,100 100,0 100,100" fill="white" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
