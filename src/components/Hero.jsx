import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background Placeholder - In a real app, this would be a <video> */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10" />
                <img
                    src="https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=2070&auto=format&fit=crop"
                    alt="Peri Mágico Experiences"
                    className="w-full h-full object-cover scale-105"
                />
                {/* Animated accent gradient */}
                <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-magenta/20 blur-[120px] rounded-full" style={{ backgroundColor: 'rgba(255, 0, 255, 0.15)' }} />
            </div>

            <div className="container relative z-20">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border border-white/20 mb-6">
                        <span className="w-2 h-2 bg-accent-magenta rounded-full animate-pulse" style={{ backgroundColor: 'var(--color-accent-magenta)' }} />
                        <span className="text-xs font-bold tracking-widest uppercase">Abierto hoy de 11am a 8pm</span>
                    </div>

                    <h1 className="text-hero leading-tight mb-6">
                        Donde la <span className="text-gradient">Diversión</span> <br />
                        Cobra Vida
                    </h1>

                    <p className="text-xl text-text-muted mb-10 max-w-xl">
                        Vive una experiencia inolvidable en el mejor parque de diversiones familiar.
                        Atracciones extremas, juegos inflables y momentos mágicos para todas las edades.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="btn btn-magenta">
                            RESERVAR BOLETOS <ArrowRight size={18} />
                        </button>
                        <button className="btn btn-outline">
                            <Play size={18} fill="currentColor" /> VER VIDEO
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Floating features info */}
            <div className="absolute bottom-10 right-10 hidden lg:block">
                <div className="glass p-6 max-w-xs">
                    <h3 className="text-secondary font-black text-xl mb-2" style={{ color: 'var(--color-secondary)' }}>DAYPASS PLATINUM</h3>
                    <p className="text-sm text-text-muted mb-4">Acceso ilimitado a todas nuestras 10+ atracciones extremas por solo $450.</p>
                    <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: '100%', backgroundColor: 'var(--color-primary)' }} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
