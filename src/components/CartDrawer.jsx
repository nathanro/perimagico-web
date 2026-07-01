import { createPortal } from 'react-dom';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const WHATSAPP = '525538861424';

const CartDrawer = () => {
    const { items, total, isOpen, setIsOpen, updateQty, removeItem, clearCart } = useCart();

    const checkoutMessage = encodeURIComponent(
        items.length
            ? `Hola, quiero reservar:\n${items
                  .map((i) => `- ${i.name} x${i.qty} ($${i.price * i.qty})`)
                  .join('\n')}\nTotal: $${total}`
            : 'Hola, quiero información sobre boletos en Perimágico.'
    );

    return createPortal(
        <>
            {/* Botón flotante del carrito — siempre visible en móvil */}
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

            {/* Overlay del carrito */}
            <div
                aria-hidden={!isOpen}
                className={`fixed inset-0 z-[9998] transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                <button
                    type="button"
                    className="absolute inset-0 bg-black/60"
                    onClick={() => setIsOpen(false)}
                    aria-label="Cerrar carrito"
                />

                <aside
                    className={`absolute right-0 top-0 h-full w-full max-w-md bg-[#009bfb] text-white flex flex-col shadow-2xl transition-transform duration-300 overflow-hidden rounded-l-3xl ${
                        isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <header className="flex items-center justify-between px-5 py-4 border-b border-white/20 shrink-0 bg-[#007acc]">
                        <h2 className="text-xl font-black uppercase tracking-wide">Carrito</h2>
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:text-secondary transition-colors"
                            aria-label="Cerrar"
                        >
                            <X size={28} />
                        </button>
                    </header>

                    <div className="flex-1 overflow-y-auto overscroll-contain p-4 space-y-3">
                        {items.length === 0 ? (
                            <div className="bg-white/10 rounded-2xl p-6 text-center">
                                <ShoppingBag size={40} className="mx-auto mb-3 opacity-70" />
                                <p className="font-bold text-white/90">Tu carrito está vacío</p>
                                <p className="text-sm text-white/70 mt-1">
                                    Agrega boletos desde la sección de abajo.
                                </p>
                            </div>
                        ) : (
                            items.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white text-black rounded-2xl p-3 flex gap-3 items-center border-2 border-black shadow-md"
                                >
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-16 h-16 object-contain rounded-lg bg-gray-50 shrink-0"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <p className="font-black text-sm uppercase truncate">{item.name}</p>
                                        <p className="text-primary font-black">${item.price * item.qty}</p>
                                        <div className="flex items-center gap-2 mt-1">
                                            <button
                                                type="button"
                                                onClick={() => updateQty(item.id, item.qty - 1)}
                                                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300"
                                                aria-label="Quitar uno"
                                            >
                                                <Minus size={14} />
                                            </button>
                                            <span className="font-black text-sm w-5 text-center">{item.qty}</span>
                                            <button
                                                type="button"
                                                onClick={() => updateQty(item.id, item.qty + 1)}
                                                className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center border border-gray-300"
                                                aria-label="Agregar uno"
                                            >
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeItem(item.id)}
                                        className="text-gray-400 hover:text-primary p-1 shrink-0"
                                        aria-label="Eliminar"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))
                        )}
                    </div>

                    <footer className="p-4 border-t border-white/20 bg-[#007acc] shrink-0 space-y-3">
                        <div className="flex justify-between items-center text-lg font-black">
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
