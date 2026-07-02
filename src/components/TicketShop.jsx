import { TICKETS } from '../data/siteContent';
import { TICKETS_BASE_URL, ticketTypeUrl } from '../utils/ticketsUrl';

const TicketShop = () => {
    return (
        <section id="boletos" className="section-pad">
            <div className="wrap">
                <div className="section-head reveal">
                    <span className="eyebrow">Boletos</span>
                    <h2>Compra tus boletos</h2>
                    <p>Adquiere tu acceso y vive una experiencia única. Elige fecha y completa tu pago en ticketsperimagico.com.</p>
                </div>

                <div className="tickets-grid">
                    {TICKETS.map((ticket) => (
                        <article
                            key={ticket.id}
                            className={`ticket-card reveal ${ticket.isRecommended ? 'featured' : ''}`}
                        >
                            {ticket.isRecommended && (
                                <span className="ticket-ribbon">★ El más recomendado</span>
                            )}
                            <span className="ticket-name">{ticket.name}</span>
                            <div className="ticket-price">
                                ${ticket.price.toLocaleString('es-MX')}{' '}
                                <span>MXN</span>
                            </div>
                            <ul className="ticket-features">
                                {ticket.features.map((feature) => (
                                    <li key={feature}>
                                        <span className="check">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={ticketTypeUrl()}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn btn-block ${ticket.isRecommended ? 'btn-primary' : 'btn-outline'}`}
                            >
                                Comprar en línea
                            </a>
                        </article>
                    ))}
                </div>

                <p className="tickets-note reveal">
                    Compra segura en{' '}
                    <a href={TICKETS_BASE_URL} target="_blank" rel="noopener noreferrer">
                        <strong>ticketsperimagico.com</strong>
                    </a>
                </p>
            </div>
        </section>
    );
};

export default TicketShop;
