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
                    <div className="bg-white p-4 transform -rotate-3 mb-8 border-4 border-black relative shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
                        <h1 className="text-black text-5xl md:text-7xl font-black leading-none uppercase tracking-tighter">
                            DIVERSIÓN <br />
                            <span className="text-magenta" style={{ color: 'var(--color-accent-magenta)' }}>AL MÁXIMO</span>
                        </h1>
                        <div className="absolute -bottom-4 right-10 bg-secondary text-black font-black text-xs px-4 py-1 uppercase border-2 border-black">
                            Family in Action
                        </div>
                    </div>

                    <p className="text-white text-xl font-bold bg-black/60 p-4 mb-8 max-w-lg">
                        ¡La diversión comienza aquí! Vive una experiencia inolvidable con tu familia y amigos como nunca antes en Peri Mágico.
                    </p>

                    <div className="flex flex-col md:flex-row justify-center md:justify-end gap-4 w-full md:max-w-xl">
                        <a href="#eventos" className="btn btn-outline-yellow w-full md:w-auto text-lg px-8 py-4 border-[3px] rounded-[50px] text-center inline-block">
                            Fiestas Infantiles
                        </a>
                        <a href="https://wa.me/525558182348" target="_blank" rel="noopener noreferrer" className="btn w-full md:w-auto text-lg px-8 py-4 rounded-[50px] border-[3px] border-transparent hover:border-white flex justify-center items-center gap-2" style={{ backgroundColor: '#25D366', color: 'white' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            55 5818 2348
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Horizontal Days & Hours Panel */}
            <div className="absolute bottom-16 md:bottom-20 left-0 w-full z-20">
                <div className="container">
                    <div className="bg-black/80 backdrop-blur-sm p-4 md:p-6 border-l-8 border-secondary rounded-xl flex flex-col lg:flex-row items-center justify-between gap-6" style={{ borderLeftColor: 'var(--color-secondary)' }}>
                        <h2 className="text-white text-2xl md:text-3xl font-black uppercase whitespace-nowrap mb-0">
                            Días & Horarios
                        </h2>

                        <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-end gap-4 md:gap-8 w-full text-white font-bold text-[15px]">
                            <div className="flex flex-col items-center min-w-[100px]">
                                <span className="text-gray-400 text-xs uppercase tracking-wider mb-1">Lunes</span>
                                <span className="text-red-500">Cerrado</span>
                            </div>
                            <div className="flex flex-col items-center min-w-[100px] border-l border-white/20 pl-4 md:pl-8">
                                <span className="text-gray-400 text-xs uppercase tracking-wider mb-1">Mar - Jue</span>
                                <span>1pm - 8pm</span>
                            </div>
                            <div className="flex flex-col items-center min-w-[100px] border-l border-white/20 pl-4 md:pl-8">
                                <span className="text-gray-400 text-xs uppercase tracking-wider mb-1">Viernes</span>
                                <span>1pm - 8:30pm</span>
                            </div>
                            <div className="flex flex-col items-center min-w-[120px] border-l border-white/20 pl-4 md:pl-8">
                                <span className="text-gray-400 text-xs uppercase tracking-wider mb-1">Sáb - Dom</span>
                                <span>12pm - 9pm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Angled Decorative Strip */}
            <div className="absolute bottom-0 left-0 w-full h-[8vw] z-30 overflow-hidden line-height-0">
                <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full block">
                    <polygon points="0,100 100,0 100,100" fill="white" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
