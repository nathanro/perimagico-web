/** URLs del sistema de boletos en ticketsperimagico.com (WooCommerce). */
export const TICKETS_BASE_URL = 'https://ticketsperimagico.com';
export const TICKETS_CART_URL = 'https://ticketsperimagico.com/carrito/';

/** Convierte fecha ISO (YYYY-MM-DD) + id de boleto a URL de producto WooCommerce. */
export const ticketPurchaseUrl = (ticketId, isoDate) => {
    const [year, month, day] = isoDate.split('-');
    return `${TICKETS_BASE_URL}/producto/${ticketId}-${day}-${month}-${year}/`;
};
