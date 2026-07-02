import { createContext, useContext, useMemo, useState, useCallback } from 'react';

const CartContext = createContext(null);

const itemKey = (id, visitDate) => `${id}::${visitDate || ''}`;

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    const addItem = useCallback((ticket) => {
        setItems((prev) => {
            const key = itemKey(ticket.id, ticket.visitDate);
            const existing = prev.find((item) => itemKey(item.id, item.visitDate) === key);
            if (existing) {
                return prev.map((item) =>
                    itemKey(item.id, item.visitDate) === key
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }
            return [...prev, { ...ticket, qty: 1 }];
        });
        setIsOpen(true);
    }, []);

    const removeItem = useCallback((id, visitDate) => {
        const key = itemKey(id, visitDate);
        setItems((prev) => prev.filter((item) => itemKey(item.id, item.visitDate) !== key));
    }, []);

    const updateQty = useCallback((id, qty, visitDate) => {
        const key = itemKey(id, visitDate);
        if (qty < 1) {
            setItems((prev) => prev.filter((item) => itemKey(item.id, item.visitDate) !== key));
            return;
        }
        setItems((prev) =>
            prev.map((item) =>
                itemKey(item.id, item.visitDate) === key ? { ...item, qty } : item
            )
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
