import { ExternalLink, ShoppingCart } from 'lucide-react';
import { TICKETS_BASE_URL, ticketTypeUrl } from '../utils/ticketsUrl';

const TICKETS = [
    {
        id: 'acceso-adulto',
        name: 'Acceso Adulto',
        price: 249,
        img: '/images/accesos/Acceso Adulto.png',
    },
    {
        id: 'day-pass',
        name: 'Day Pass',
        price: 349,
        img: '/images/accesos/Day Pass.png',
    },
    {
        id: 'day-pass-platinum',
        name: 'Day Pass Platinum',
        price: 549,
        img: '/images/accesos/Day Pass Platinum.png',
    },
    {
        id: 'day-pass-familiar-platinum',
        name: 'Day Pass Familiar Platinum',
        price: 1999,
        img: '/images/accesos/Day Pass Familiar Platinum.png',
        isRecommended: true,
    },
];

const TicketShop = () => {
    return (
        <section id="boletos" className="bg-[#005fa3] py-12 md:py-16 text-white relative overflow-x-hidden border-b-8 border-black">
            <div className="container relative z-10 px-4 md:px-8 max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <img
                        src="/images/logo.png"
                        alt="Perimágico"
                        className="h-14 md:h-16 mx-auto mb-4 object-contain"
                    />
                    <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight mb-2">
                        Compra tus boletos
                    </h2>
                    <p className="text-white/85 font-bold text-sm md:text-base mb-5">
                        Adquiere tu acceso y vive una experiencia única
                    </p>
                    <a
                        href={TICKETS_BASE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-secondary text-black font-black uppercase text-sm px-6 py-3 rounded-full border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] hover:bg-primary hover:text-white transition-all"
                    >
                        Comprar en línea
                        <ExternalLink size={16} />
                    </a>
                </div>

                <div>
                    <p className="text-center text-white/90 font-black uppercase text-xs sm:text-sm tracking-widest mb-4">
                        Accesos disponibles
                    </p>

                    <div className="space-y-4">
                        {TICKETS.map((ticket) => (
                            <article
                                key={ticket.id}
                                className={`ticket-card-horizontal relative bg-white text-black overflow-visible ${
                                    ticket.isRecommended ? 'ring-4 ring-secondary ring-offset-2 ring-offset-[#005fa3]' : ''
                                }`}
                            >
                                {ticket.isRecommended && (
                                    <span className="absolute -top-3 left-4 bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-full border-2 border-black z-10">
                                        El más recomendado
                                    </span>
                                )}

                                <div className="flex flex-row items-stretch min-h-[118px] sm:min-h-[132px]">
                                    <div className="ticket-art-strip w-[84px] sm:w-[110px] shrink-0 bg-gray-50 border-r-2 border-dashed border-gray-200 flex items-center justify-center p-1.5 sm:p-2">
                                        <img
                                            src={ticket.img}
                                            alt={ticket.name}
                                            className="w-full h-full max-h-[100px] sm:max-h-[120px] object-contain object-center"
                                            loading="eager"
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 p-3 sm:p-4">
                                        <div className="min-w-0 flex-1">
                                            <h3 className="font-black uppercase text-sm sm:text-base tracking-tight leading-tight">
                                                {ticket.name}
                                            </h3>
                                            <p className="text-primary font-black text-lg sm:text-2xl mt-0.5">
                                                $ {ticket.price}
                                                <span className="text-gray-500 text-xs sm:text-sm font-bold ml-1">/ persona</span>
                                            </p>
                                        </div>

                                        <a
                                            href={ticketTypeUrl()}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="ticket-add-btn shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 bg-secondary hover:bg-primary hover:text-white text-black font-black uppercase text-xs sm:text-sm px-4 py-3 sm:py-2.5 rounded-xl border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all active:translate-y-0.5"
                                        >
                                            <ShoppingCart size={16} strokeWidth={2.5} />
                                            Comprar
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                <p className="mt-8 text-center text-white/80 text-sm font-bold">
                    Elige fecha y completa tu pago en{' '}
                    <a
                        href={TICKETS_BASE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary underline hover:text-white"
                    >
                        ticketsperimagico.com
                    </a>
                </p>
            </div>
        </section>
    );
};

export default TicketShop;
