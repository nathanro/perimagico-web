/** Contenido publicado en perimagico.com */

export const BRAND_NAME = 'Perimagico';

export const CONTACT = {
    phone: '+52 55 5818 2348',
    phoneDisplay: '55 5818 2348',
    phoneTel: '+52558182348',
    email: 'info@perimagico.com',
    whatsapp: '5215558182348',
};

export const SOCIAL = {
    instagram: 'https://www.instagram.com/perimagicooficial',
    facebook: 'https://www.facebook.com/perimagico',
    instagramHandle: '@perimagicooficial',
};

export const LOCATION = {
    name: 'Centro Comercial Galerías Perinorte',
    city: 'Cuautitlán Izcalli, Estado de México',
    full: 'Centro Comercial Galerías Perinorte, Cuautitlán Izcalli, Estado de México.',
    mapsUrl: 'https://maps.app.goo.gl/wYcE2Z76iC8Rk5j59',
    mapsEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15031.543415848525!2d-99.1994646549301!3d19.610813972626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f568e61295db%3A0xeab5bc034d610010!2sGaler%C3%ADas%20Perinorte!5e0!3m2!1ses-419!2smx!4v1714588500203!5m2!1ses-419!2smx',
};

export const HOURS = [
    { day: 'Lunes', hours: 'Cerrado', closed: true },
    { day: 'Martes – Jueves', hours: '1:00 pm – 8:00 pm' },
    { day: 'Viernes', hours: '1:00 pm – 8:30 pm' },
    { day: 'Sábado – Domingo', hours: '12:00 pm – 10:00 pm', highlight: true },
];

export const NAV_LINKS = [
    { name: 'Galería', path: '#galeria' },
    { name: 'Boletos', path: '#boletos' },
    { name: 'Atracciones', path: '#atracciones' },
    { name: 'Cumpleaños', path: '#cumpleanos' },
    { name: 'Restaurante', path: '#restaurante' },
    { name: 'Contacto', path: '#contacto' },
];

export const ATTRACTIONS = [
    {
        title: 'Reptour',
        tag: 'Naturaleza',
        img: '/images/juegos/Reptour.png',
        desc: 'Descubre de cerca serpientes, lagartos y reptiles asombrosos. Vive una experiencia cara a cara con la naturaleza más salvaje.',
    },
    {
        title: 'Piccolo Ludo',
        tag: 'Kids',
        img: '/images/juegos/Piccolo Ludo.png',
        desc: 'Diversión, juego e imaginación en un entorno seguro, colorido e interactivo pensado para los más pequeños.',
    },
    {
        title: 'Juegos Mecánicos',
        tag: 'Para todos',
        img: '/images/juegos/Juegos mecanicos.png',
        desc: 'Adrenalina y diversión para todas las edades, en un ambiente seguro, dinámico y lleno de energía.',
    },
    {
        title: 'Sendero Jurásico',
        tag: 'Aventura',
        img: '/images/juegos/Sendero Jurasico.png',
        desc: 'Compite en cuatriciclos con diseño de dinosaurio en la pista más divertida del parque.',
    },
    {
        title: 'Arcade',
        tag: 'Retos',
        img: '/images/juegos/Arcade.png',
        desc: 'Videojuegos clásicos y modernos, retos interactivos y pura emoción en un ambiente vibrante y familiar.',
    },
    {
        title: 'Flotyland',
        tag: 'Inflables',
        img: '/images/juegos/Flotyland.png',
        desc: 'Sector lleno de color donde los niños exploran, saltan y disfrutan en un entorno seguro y mágico.',
    },
];

export const TICKETS = [
    {
        id: 'acceso-adulto',
        name: 'Acceso Adulto',
        price: 249,
        img: '/images/accesos/Acceso Adulto.png',
        features: [
            '4 juegos mecánicos o extremos a elección',
            'Acceso a Piccolo Ludo',
        ],
    },
    {
        id: 'day-pass',
        name: 'Day Pass',
        price: 349,
        img: '/images/accesos/Day Pass.png',
        features: [
            'Juegos mecánicos ilimitados',
            'Juegos extremos ilimitados',
            'Acceso a Piccolo Ludo',
        ],
    },
    {
        id: 'day-pass-platinum',
        name: 'Day Pass Platinum',
        price: 549,
        img: '/images/accesos/Day Pass Platinum.png',
        features: [
            'Juegos mecánicos y extremos ilimitados',
            'Acceso a Atracciones',
            'Acceso a Piccolo Ludo',
            'Flotyland incluido',
        ],
    },
    {
        id: 'day-pass-familiar-platinum',
        name: 'Day Pass Familiar Platinum',
        price: 1999,
        img: '/images/accesos/Day Pass Familiar Platinum.png',
        isRecommended: true,
        features: [
            'Day Pass Platinum para 4 personas',
            '1 pizza familiar',
            '1 refresco 2 L',
            '4 bolsas de palomitas',
        ],
    },
];

export const CONTACT_REASONS = [
    'Fiestas / Eventos',
    'Boletos / Tickets',
    'Reservación',
    'Quejas / Sugerencias',
    'Otro',
];

export const FOOTER_TAGLINE =
    'El parque de diversiones más mágico del norte de la Ciudad de México, en Galerías Perinorte.';
