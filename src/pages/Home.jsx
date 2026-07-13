import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import TicketShop from '../components/TicketShop';
import InstagramFeed from '../components/InstagramFeed';
import useReveal from '../hooks/useReveal';
import {
    ATTRACTIONS,
    HOURS,
    LOCATION,
    SOCIAL,
    CONTACT,
    BRAND_NAME,
} from '../data/siteContent';
import { TICKETS_BASE_URL } from '../utils/ticketsUrl';

const Home = () => {
    useReveal();

    return (
        <Layout>
            {/* Hero */}
            <section id="inicio" className="hero">
                <div className="hero-bg" aria-hidden="true">
                    <img
                        src="/images/banner/Cumpleaños.png"
                        alt=""
                        className="hero-mobile-img"
                    />
                    <video
                        src="/videos/int.mp4"
                        loop
                        muted
                        autoPlay
                        playsInline
                        preload="metadata"
                        poster="/images/banner/Cumpleaños.png"
                    />
                </div>

                <div className="wrap">
                    <div className="hero-content">
                        <span className="eyebrow">✦ Galerías Perinorte, Cuautitlán Izcalli</span>
                        <h1>
                            El mejor parque de <span>diversión familiar</span>
                        </h1>
                        <p>
                            Descubre nuestras atracciones únicas diseñadas para que toda la familia
                            pase un rato inolvidable.
                        </p>
                        <div className="hero-actions">
                            <a
                                href={TICKETS_BASE_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary"
                            >
                                Comprar boletos
                            </a>
                            <a href="#atracciones" className="btn btn-outline">
                                Ver atracciones
                            </a>
                        </div>

                        <div className="horarios-card reveal">
                            <h3>Horarios</h3>
                            {HOURS.map(({ day, hours, closed, highlight }) => (
                                <div
                                    key={day}
                                    className={`horarios-row ${closed ? 'closed' : ''} ${highlight ? 'highlight' : ''}`}
                                >
                                    <span className="day">{day}</span>
                                    <span className="time">{hours}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hero-stats reveal">
                        <div className="hero-stat">
                            <div className="icon">📍</div>
                            <strong>Galerías Perinorte</strong>
                            <span>Cuautitlán Izcalli, Edo. Méx.</span>
                        </div>
                        <div className="hero-stat">
                            <div className="icon">🕐</div>
                            <strong>Mar – Dom</strong>
                            <span>Consulta horarios arriba</span>
                        </div>
                        <div className="hero-stat">
                            <div className="icon">🎫</div>
                            <strong>Desde $249</strong>
                            <span>Accesos para todas las edades</span>
                        </div>
                        <div className="hero-stat">
                            <div className="icon">🎢</div>
                            <strong>6 experiencias</strong>
                            <span>Mecánicos, arcade, Flotyland y más</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Atracciones */}
            <section id="atracciones" className="section-pad">
                <div className="wrap">
                    <div className="section-head reveal">
                        <span className="eyebrow">Atracciones y juegos</span>
                        <h2>Descubre el parque</h2>
                        <p>
                            Descubre nuestras atracciones únicas diseñadas para que toda la familia
                            pase un rato inolvidable.
                        </p>
                    </div>

                    <div className="attractions-grid">
                        {ATTRACTIONS.map((game) => (
                            <article key={game.title} className="attraction-card reveal">
                                <img src={game.img} alt={game.title} loading="lazy" />
                                <div className="attraction-body">
                                    <span className="attraction-tag">{game.tag}</span>
                                    <h3>{game.title}</h3>
                                    <p>{game.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <TicketShop />

            {/* Cumpleaños + Restaurante */}
            <section id="cumpleanos" className="section-pad">
                <div className="wrap">
                    <div className="banners-wrap">
                        <div className="banner-section reveal">
                            <img
                                className="bg"
                                src="/images/banner/Cumpleaños.png"
                                alt={`Cumpleaños en ${BRAND_NAME}`}
                            />
                            <div className="overlay" />
                            <div className="banner-content">
                                <span className="eyebrow">Celebra con nosotros</span>
                                <h3>Cumpleaños</h3>
                                <p>
                                    Tu evento con nosotros será inolvidable. Celebra tu cumpleaños con
                                    la mejor diversión, áreas exclusivas y paquetes a tu medida
                                    diseñados para sorprender a todos.
                                </p>
                                <a href="#contacto" className="btn btn-primary">
                                    Ver más
                                </a>
                            </div>
                        </div>

                        <div className="banner-section reveal" id="restaurante">
                            <img
                                className="bg"
                                src="/images/banner/Food Court.png"
                                alt={`Food Court de ${BRAND_NAME}`}
                            />
                            <div className="overlay" />
                            <div className="banner-content">
                                <img
                                    src="/images/banner/Food Court text.png"
                                    alt="Food Court"
                                    className="food-logo"
                                />
                                <p>
                                    Recarga toda esa energía perdida después de tanta diversión.
                                    Contamos con una amplia variedad de alimentos deliciosos como
                                    pizzas calientitas, hamburguesas, paninis, snacks y las bebidas
                                    más refrescantes.
                                </p>
                                <a href="#contacto" className="btn btn-outline">
                                    Ver más
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Galería / Instagram */}
            <section id="galeria" className="section-pad">
                <div className="wrap">
                    <div className="section-head reveal">
                        <span className="eyebrow">Galería</span>
                        <h2>{SOCIAL.instagramHandle}</h2>
                        <p>Síguenos en Instagram y descubre la magia del parque.</p>
                    </div>

                    <InstagramFeed />

                    <div className="gallery-cta reveal">
                        <a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="btn btn-outline">
                            Síguenos en Instagram
                        </a>
                    </div>
                </div>
            </section>

            {/* Ubicación */}
            <section id="ubicacion" className="section-pad">
                <div className="wrap">
                    <div className="location-grid">
                        <div className="location-info reveal">
                            <span className="eyebrow">Ubicación</span>
                            <h2>Te esperamos en Galerías Perinorte</h2>
                            <p>{LOCATION.full}</p>

                            <div className="hours-table">
                                {HOURS.map(({ day, hours, closed }) => (
                                    <div
                                        key={day}
                                        className={`hours-row ${closed ? 'closed' : ''}`}
                                    >
                                        <span className="day">{day}</span>
                                        <span className="time">{hours}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="location-contact">
                                <a href={`tel:${CONTACT.phoneTel}`}>
                                    <span className="ic">📞</span>
                                    {CONTACT.phone}
                                </a>
                                <div>
                                    <span className="ic">📍</span>
                                    {LOCATION.city}
                                </div>
                            </div>

                            <a
                                href={LOCATION.mapsUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="btn btn-primary"
                            >
                                Cómo llegar
                            </a>
                        </div>

                        <div className="map-frame reveal">
                            <iframe
                                src={LOCATION.mapsEmbed}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title={`Ubicación de ${BRAND_NAME} en Galerías Perinorte`}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <ContactForm />
        </Layout>
    );
};

export default Home;
