/** Contenido real publicado en perimagico.com */

export const CONTACT = {
    phone: '+52 55 3886 1424',
    phoneTel: '+525538861424',
    email: 'info@perimagico.com',
    whatsapp: '5215538861424',
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
        desc: 'Espacio único donde descubrirás de cerca la majestuosidad de serpientes, lagartos y reptiles asombrosos. Aprende sobre sus misterios, rompe mitos y vive una experiencia cara a cara con la naturaleza más salvaje.',
    },
    {
        title: 'Piccolo Ludo',
        tag: 'Kids',
        img: '/images/juegos/Piccolo Ludo.png',
        desc: 'Pensado para los más pequeños, donde la diversión, el juego y la imaginación se combinan en un entorno seguro, colorido e interactivo. Un lugar ideal para explorar, aprender y disfrutar en familia.',
    },
    {
        title: 'Juegos Mecánicos',
        tag: 'Para todos',
        img: '/images/juegos/Juegos mecanicos.png',
        desc: 'Los Juegos Mecánicos de Perimágico ofrecen adrenalina, diversión y experiencias inolvidables para todas las edades. Desde atracciones familiares hasta juegos llenos de emoción, cada experiencia está diseñada para disfrutar en un ambiente seguro, dinámico y lleno de energía.',
    },
    {
        title: 'Sendero Jurásico',
        tag: 'Aventura',
        img: '/images/juegos/Sendero Jurasico.png',
        desc: '¡Rugidos, ruedas y velocidad! Ven a competir en la pista más divertida de Perimágico a bordo de increíbles cuatriciclos con diseño de dinosaurio. Una carrera prehistórica pensada para toda la familia.',
    },
    {
        title: 'Arcade',
        tag: 'Retos',
        img: '/images/juegos/Arcade.png',
        desc: 'Nuestro sector de juegos arcade combina diversión, adrenalina y tecnología para todas las edades. Disfruta de videojuegos clásicos y modernos, desafíos interactivos y experiencias llenas de emoción en un ambiente vibrante y familiar.',
    },
    {
        title: 'Flotyland',
        tag: 'Acuático',
        img: '/images/juegos/Flotyland.png',
        desc: 'Espacio ideal para los más pequeños dentro de Perimágico. Un sector lleno de color, diversión y juegos diseñados para que los niños exploren, salten y disfruten en un entorno seguro y mágico junto a toda la familia.',
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

export const INSTAGRAM_POSTS = [
    { img: '/images/insta_1.png', likes: 142, comments: 12 },
    { img: '/images/insta_2.png', likes: 98, comments: 5 },
    { img: '/images/insta_3.png', likes: 210, comments: 24 },
    { img: '/images/insta_4.png', likes: 185, comments: 15 },
    { img: '/images/insta_5.png', likes: 312, comments: 41 },
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
