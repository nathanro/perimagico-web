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

            <div className="container relative z-20 flex flex-col h-full justify-center items-center md:items-end md:text-right w-full pt-10 pb-48">
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

                    <div className="flex flex-col md:flex-row justify-center md:justify-end gap-4 w-full md:max-w-xl">
                        <a href="#eventos" className="btn w-full md:w-auto text-lg px-8 py-4 rounded-[50px] shadow-lg flex justify-center items-center gap-2 font-black" style={{ backgroundColor: '#ffcc00', color: 'black' }}>
                            🎂 ¡Cotiza tu cumpleaños!
                        </a>
                        <a href="#precios" className="btn w-full md:w-auto text-lg px-8 py-4 rounded-[50px] border-4 border-black hover:border-white transition-colors flex justify-center items-center gap-2 font-black" style={{ backgroundColor: 'transparent', color: 'white' }}>
                            Ver boletos
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Horizontal Days & Hours Panel */}
            <div className="absolute bottom-[8vw] md:bottom-[10vw] left-0 w-full z-40">
                <div className="container">
                    <div className="bg-black/90 backdrop-blur-md p-4 md:p-6 border-l-8 border-secondary rounded-xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-2xl" style={{ borderLeftColor: 'var(--color-secondary)' }}>
                        <h2 className="text-white text-2xl md:text-3xl font-black uppercase whitespace-nowrap mb-0">
                            Días & Horarios
                        </h2>

                        <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-end gap-4 md:gap-8 w-full text-white font-bold text-[15px]">
                            <div className="flex flex-col items-center min-w-[100px]">
                                <span className="text-gray-400 text-xs font-bold tracking-wider mb-1">Lunes</span>
                                <span className="text-red-500">Cerrado</span>
                            </div>
                            <div className="flex flex-col items-center min-w-[100px] border-l border-white/20 pl-4 md:pl-8">
                                <span className="text-gray-400 text-xs font-bold tracking-wider mb-1">Martes - Jueves</span>
                                <span>1:00 pm - 8:00 pm</span>
                            </div>
                            <div className="flex flex-col items-center min-w-[100px] border-l border-white/20 pl-4 md:pl-8">
                                <span className="text-gray-400 text-xs font-bold tracking-wider mb-1">Viernes</span>
                                <span>1:00 pm - 8:30 pm</span>
                            </div>
                            <div className="flex flex-col items-center min-w-[120px] border-l border-white/20 pl-4 md:pl-8">
                                <span className="text-gray-400 text-xs font-bold tracking-wider mb-1">Sábado - Domingo</span>
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
