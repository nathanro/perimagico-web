import { useMemo, useState } from 'react';
import { ChevronDown, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

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
        price: 350,
        img: '/images/accesos/Day Pass.png',
    },
    {
        id: 'day-pass-platinum',
        name: 'Day Pass Platinum',
        price: 450,
        img: '/images/accesos/Day Pass Platinum.png',
    },
    {
        id: 'day-pass-familiar-platinum',
        name: 'Day Pass Familiar Platinum',
        price: 1550,
        img: '/images/accesos/Day Pass Familiar Platinum.png',
        isRecommended: true,
    },
];

const formatVisitDate = (date) => {
    const label = date.toLocaleDateString('es-MX', {
        weekday: 'short',
        day: 'numeric',
        month: 'short',
    });
    return label.replace('.', '').toUpperCase();
};

const TicketShop = () => {
    const { addItem } = useCart();
    const [visitDate, setVisitDate] = useState(() => {
        const d = new Date();
        d.setDate(d.getDate() + 1);
        return d.toISOString().slice(0, 10);
    });

    const dateLabel = useMemo(() => formatVisitDate(new Date(`${visitDate}T12:00:00`)), [visitDate]);

    return (
        <section id="boletos" className="bg-[#009bfb] py-16 md:py-20 text-white relative overflow-x-hidden border-b-8 border-black">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container relative z-10 px-4 md:px-8">
                <div className="text-center mb-8">
                    <h2 className="text-secondary text-4xl md:text-6xl font-black uppercase tracking-tight mb-2 drop-shadow-md">
                        Boletos
                    </h2>
                    <p className="text-white font-bold text-base md:text-lg uppercase tracking-wider opacity-95">
                        La diversión está a un día de distancia
                    </p>
                </div>

                {/* Selector de fecha */}
                <div className="max-w-3xl mx-auto mb-6">
                    <label className="ticket-date-bar flex items-center justify-between gap-3 bg-[#007acc] border-2 border-black rounded-2xl px-4 py-3 shadow-[4px_4px_0_0_rgba(0,0,0,0.35)]">
                        <span className="font-black uppercase tracking-wide text-sm md:text-base whitespace-nowrap">
                            Boletos — {dateLabel}
                        </span>
                        <span className="relative flex items-center">
                            <input
                                type="date"
                                value={visitDate}
                                min={new Date().toISOString().slice(0, 10)}
                                onChange={(e) => setVisitDate(e.target.value)}
                                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                                aria-label="Elegir fecha de visita"
                            />
                            <ChevronDown size={22} className="text-secondary shrink-0 pointer-events-none" />
                        </span>
                    </label>
                </div>

                {/* Lista de boletos horizontales */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {TICKETS.map((ticket) => (
                        <article
                            key={ticket.id}
                            className={`ticket-card-horizontal relative bg-white text-black overflow-visible ${
                                ticket.isRecommended ? 'ring-4 ring-secondary ring-offset-2 ring-offset-brandblue' : ''
                            }`}
                        >
                            {ticket.isRecommended && (
                                <span className="absolute -top-3 left-4 bg-primary text-white text-[10px] font-black uppercase px-3 py-1 rounded-full border-2 border-black z-10">
                                    El más recomendado
                                </span>
                            )}

                            <div className="flex flex-row items-stretch min-h-[120px] sm:min-h-[132px]">
                                {/* Arte del boleto — franja vertical izquierda */}
                                <div className="ticket-art-strip w-[88px] sm:w-[110px] shrink-0 bg-gray-50 border-r-2 border-dashed border-gray-200 flex items-center justify-center p-1.5 sm:p-2">
                                    <img
                                        src={ticket.img}
                                        alt={ticket.name}
                                        className="w-full h-full max-h-[108px] sm:max-h-[120px] object-contain object-center"
                                    />
                                </div>

                                {/* Info + CTA — layout horizontal */}
                                <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4">
                                    <div className="min-w-0 flex-1">
                                        <h3 className="font-black uppercase text-sm sm:text-base tracking-tight leading-tight">
                                            {ticket.name}
                                        </h3>
                                        <p className="text-primary font-black text-xl sm:text-2xl mt-0.5">
                                            $ {ticket.price}
                                            <span className="text-gray-500 text-xs sm:text-sm font-bold ml-1">/ persona</span>
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => addItem(ticket)}
                                        className="ticket-add-btn shrink-0 w-full sm:w-auto flex items-center justify-center gap-2 bg-gray-100 hover:bg-secondary text-black font-black uppercase text-xs sm:text-sm px-4 py-3 sm:py-2.5 rounded-xl border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,1)] transition-all active:translate-y-0.5"
                                    >
                                        <ShoppingCart size={16} strokeWidth={2.5} />
                                        Agregar
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <p className="mt-8 text-center text-white/90 font-black uppercase text-sm tracking-widest">
                    Selecciona el paquete y agrégalo al carrito para reservar.
                </p>
            </div>
        </section>
    );
};

export default TicketShop;
