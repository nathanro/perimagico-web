import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const WHATSAPP = '525538861424';

const formatVisitDate = (iso) => {
    if (!iso) return '';
    const date = new Date(`${iso}T12:00:00`);
    return date
        .toLocaleDateString('es-MX', { weekday: 'short', day: 'numeric', month: 'short' })
        .replace(/\./g, '')
        .toUpperCase();
};

const CartDrawer = () => {
    const { items, total, isOpen, setIsOpen, updateQty, removeItem, clearCart } = useCart();

    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const checkoutMessage = encodeURIComponent(
        items.length
            ? `Hola, quiero reservar:\n${items
                  .map((i) => `- ${i.name} x${i.qty} (${formatVisitDate(i.visitDate)}) — $${i.price * i.qty}`)
                  .join('\n')}\nTotal: $${total}`
            : 'Hola, quiero información sobre boletos en Perimágico.'
    );

    return createPortal(
        <>
            {/* Botón flotante — visible en móvil */}
            {!isOpen && (
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-5 right-4 z-[9990] lg:hidden flex items-center gap-2 bg-primary text-white px-4 py-3 rounded-full font-black text-sm uppercase shadow-[4px_4px_0_0_rgba(0,0,0,1)] border-2 border-black"
                    aria-label="Abrir carrito"
                >
                    <ShoppingBag size={20} />
                    Carrito
                    {items.length > 0 && (
                        <span className="bg-secondary text-black text-xs font-black min-w-[1.25rem] h-5 px-1 rounded-full flex items-center justify-center">
                            {items.reduce((n, i) => n + i.qty, 0)}
                        </span>
                    )}
                </button>
            )}

            {/* Panel del carrito */}
            <div
                aria-hidden={!isOpen}
                className={`fixed inset-0 z-[9998] transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                <button
                    type="button"
                    className="absolute inset-0 bg-black/70"
                    onClick={() => setIsOpen(false)}
                    aria-label="Cerrar carrito"
                />

                <aside
                    className={`absolute inset-y-0 right-0 w-full sm:max-w-md bg-[#005fa3] text-white flex flex-col shadow-2xl transition-transform duration-300 overflow-hidden ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <header className="flex items-center justify-between px-5 py-4 border-b border-white/20 shrink-0 bg-[#004a82]">
                        <h2 className="text-xl font-black uppercase tracking-wide text-white">Carrito</h2>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-white hover:text-secondary transition-colors"
                            aria-label="Cerrar"
                        >
                            <X size={28} />
                        </button>
                    </header>

                    <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-3 bg-[#005fa3]">
                        {items.length === 0 ? (
                            <div className="rounded-2xl border-2 border-dashed border-white/40 p-8 text-center">
                                <ShoppingBag size={48} className="mx-auto mb-4 text-secondary" />
                                <p className="font-black text-lg uppercase text-white">Tu carrito está vacío</p>
                                <p className="text-sm text-white/80 mt-2 mb-6">
                                    Elige una fecha y agrega boletos para continuar.
                                </p>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsOpen(false);
                                        document.getElementById('boletos')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                    className="inline-block bg-secondary text-black font-black uppercase text-sm px-6 py-3 rounded-full border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)]"
                                >
                                    Ver boletos
                                </button>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div
                                    key={`${item.id}-${item.visitDate}`}
                                    className="bg-white text-black rounded-2xl p-3 flex gap-3 items-start border-2 border-black shadow-md"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-16 h-16 object-contain rounded-lg bg-gray-50 shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-black text-sm uppercase leading-tight">{item.name}</p>
                                        <p className="text-xs text-gray-600 font-bold mt-0.5">
                                            {formatVisitDate(item.visitDate)}
                                        </p>
                                        <p className="text-primary font-black text-lg mt-1">${item.price * item.qty}</p>
                                        <div className="flex items-center gap-2 mt-2">
                                            <button
                                                type="button"
                                                onClick={() => updateQty(item.id, item.qty - 1, item.visitDate)}
                                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300 text-black"
                                                aria-label="Quitar uno"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="font-black text-sm w-6 text-center">{item.qty}</span>
                                            <button
                                                type="button"
                                                onClick={() => updateQty(item.id, item.qty + 1, item.visitDate)}
                                                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300 text-black"
                                                aria-label="Agregar uno"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeItem(item.id, item.visitDate)}
                                        className="text-gray-500 hover:text-primary p-1 shrink-0"
                                        aria-label="Eliminar"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <footer className="p-4 border-t border-white/20 bg-[#004a82] shrink-0 space-y-3">
                        <div className="flex justify-between items-center text-lg font-black text-white">
                            <span>Total</span>
                            <span className="text-secondary">${total}</span>
                        </div>
                        <a
                            href={`https://wa.me/${WHATSAPP}?text=${checkoutMessage}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`block w-full py-3.5 rounded-full text-center font-black uppercase tracking-wider border-2 border-black shadow-[3px_3px_0_0_rgba(0,0,0,1)] transition-all ${
                                items.length
                                    ? 'bg-primary text-white hover:bg-secondary hover:text-black'
                                    : 'bg-white/20 text-white/50 pointer-events-none'
                            }`}
                            onClick={() => items.length && clearCart()}
                        >
                            Reservar por WhatsApp
                        </a>
                    </footer>
                </aside>
            </div>
        </>,
        document.body
    );
};

export default CartDrawer;
