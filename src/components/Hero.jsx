const Hero = () => {
    return (
        <section id="top" className="relative min-h-[95vh] flex items-center bg-black overflow-hidden pt-28 md:pt-36">
            {/* Background Image / Video Container */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/50 z-10" />
                <video
                    src="http://piccolomondo.com.mx/wp-content/uploads/2024/01/WhatsApp-Video-2023-12-11-at-9.01.57-PM.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container relative z-20 flex flex-col md:flex-row h-full justify-between items-center w-full mt-10 md:mt-20">
                
                {/* Center Content (Aligned left logically like Funtastic desktop) */}
                <div className="w-full md:w-3/5 flex flex-col items-center md:items-start text-center md:text-left gap-6 px-4">
                    <img 
                        src="https://piccolomondo.com.mx/wp-content/uploads/2024/01/Recurso-1-e1705974571200.png"
                        alt="Peri Mágico Logo"
                        className="w-72 max-w-[80%] drop-shadow-2xl mb-4"
                    />
                    <h1 className="text-white text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-none drop-shadow-lg tracking-tight">
                        ¡La magia<br className="hidden md:block" /> comienza aquí!
                    </h1>
                    <p className="text-white text-lg md:text-2xl font-bold drop-shadow-md tracking-wide max-w-xl">
                        Vive una experiencia que nunca olvidarás...
                    </p>

                    <a href="#contacto" className="btn inline-flex bg-transparent border-[3px] border-secondary text-secondary hover:bg-secondary hover:text-black py-4 px-12 rounded-full text-xl md:text-2xl font-black transition-all mt-4 w-full md:w-auto text-center">
                        Fiestas de Cumpleaños
                    </a>
                </div>

                {/* Right Sidebar: Days & Hours */}
                <div className="w-full md:w-auto mt-16 md:mt-0 right-0 md:absolute md:right-[5%] lg:right-[10%] top-1/2 md:-translate-y-1/2 flex flex-col items-center md:items-start bg-black/40 backdrop-blur-md p-8 rounded-[20px] border border-white/10 mx-4 md:mx-0 shadow-2xl">
                    <div className="flex flex-col border-l-[4px] border-secondary pl-6 space-y-6 w-full">
                        <div className="flex flex-col text-left">
                            <span className="text-white font-black text-xl uppercase tracking-widest">Lunes</span>
                            <span className="text-magenta font-black text-lg">Cerrado</span>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-white font-black text-xl uppercase tracking-widest">Martes - Jueves</span>
                            <span className="text-white font-bold text-lg">1:00 pm - 8:00 pm</span>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-white font-black text-xl uppercase tracking-widest">Viernes</span>
                            <span className="text-white font-bold text-lg">1:00 pm - 8:30 pm</span>
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-white font-black text-xl uppercase tracking-widest">Sábado - Domingo</span>
                            <span className="text-white font-bold text-lg">12:00 pm - 9:00 pm</span>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Hero;
