import { Play } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 bg-black overflow-hidden">
            {/* Background Image / Video Container */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src="https://piccolomondo.com.mx/wp-content/uploads/2024/01/Image-1.webp"
                    alt="Peri Mágico Experiences"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container relative z-20 flex flex-col md:flex-row items-center w-full gap-12">
                {/* Left Side: Days & Hours Panel (like Funtastic) */}
                <div className="w-full md:w-1/3 mt-10 md:mt-0">
                    <div className="bg-black/80 backdrop-blur-sm p-8 rounded-tr-3xl rounded-br-3xl border-l-8 border-secondary" style={{ borderLeftColor: 'var(--color-secondary)' }}>
                        <h2 className="text-white text-4xl mb-6">Días & Horarios</h2>

                        <div className="space-y-4 text-white font-bold text-lg">
                            <div className="flex justify-between items-center pb-2 border-b border-white/20">
                                <span>Lunes</span>
                                <span className="text-red-500">Cerrado</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-white/20">
                                <span>Martes - Jueves</span>
                                <span>4pm - 9pm</span>
                            </div>
                            <div className="flex justify-between items-center pb-2 border-b border-white/20">
                                <span>Viernes</span>
                                <span>4pm - 11pm</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>Sabado - Domingo</span>
                                <span>12pm - 11pm</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Big Call to Action overlaying image */}
                <div className="w-full md:w-2/3 flex flex-col items-center md:items-end text-center md:text-right pb-20">
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

                    <div className="flex flex-col gap-4 w-full md:max-w-xs">
                        <button className="btn btn-outline-yellow w-full text-lg py-4 border-[3px] rounded-[50px]">
                            Fiestas Infantiles
                        </button>
                        <button className="btn btn-magenta w-full text-lg py-4 rounded-[50px] border-[3px] border-transparent hover:border-white">
                            Comprar Boletos
                        </button>
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
