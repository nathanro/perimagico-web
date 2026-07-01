import { createContext, useContext, useMemo, useState, useCallback } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const addItem = useCallback((ticket) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.id === ticket.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === ticket.id ? { ...item, qty: item.qty + 1 } : item
                );
            }
            return [...prev, { ...ticket, qty: 1 }];
        });
        setIsOpen(true);
    }, []);

    const removeItem = useCallback((id) => {
        setItems((prev) => prev.filter((item) => item.id !== id));
    }, []);

    const updateQty = useCallback((id, qty) => {
        if (qty < 1) {
            setItems((prev) => prev.filter((item) => item.id !== id));
            return;
        }
        setItems((prev) =>
            prev.map((item) => (item.id === id ? { ...item, qty } : item))
        );
    }, []);

    const clearCart = useCallback(() => setItems([]), []);

    const total = useMemo(
        () => items.reduce((sum, item) => sum + item.price * item.qty, 0),
        [items]
    );

    const count = useMemo(
        () => items.reduce((sum, item) => sum + item.qty, 0),
        [items]
    );

    const value = useMemo(
        () => ({
            items,
            total,
            count,
            isOpen,
            setIsOpen,
            addItem,
            removeItem,
            updateQty,
            clearCart,
        }),
        [items, total, count, isOpen, addItem, removeItem, updateQty, clearCart]
    );

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error('useCart debe usarse dentro de CartProvider');
    return ctx;
};
