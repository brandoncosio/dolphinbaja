export const translations = {
    es: {
        navbar: {
            services: "Servicios",
            about: "Nosotros",
            contact: "Contacto",
            cta: "Reservar",
            languageBtn: "EN",
            submenu: {
                funDives: "Fun Dives",
                courses: "Cursos PADI",
                snorkel: "Snorkel & Tours",
                history: "Nuestra Historia",
                team: "Equipo & Staff",
                gallery: "Galería",
                location: "Ubicación",
                whatsapp: "WhatsApp Directo",
                faq: "Preguntas Frecuentes"
            }
        },
        home: {
            hero: {
                tag: "Parque Nacional Bahía de Loreto",
                btnBook: "Reservar experiencia",
                btnServices: "Ver servicios",
                slides: [
                    {
                        title: "MÁS QUE BUCEO,<br/>UNA EXPERIENCIA INOLVIDABLE",
                        subtitle: "Cada inmersión está diseñada para conectarte con el océano y la naturaleza."
                    },
                    {
                        title: "EXPLORA LORETO<br/>DESDE EL MAR",
                        subtitle: "Tours guiados y excursiones para descubrir paisajes submarinos únicos."
                    },
                    {
                        title: "SNORKEL Y AVENTURA<br/>PARA TODOS",
                        subtitle: "Vive el océano con actividades diseñadas para familias y amantes del mar."
                    }
                ]
            },
            highlights: {
                tag: "Explora",
                titleStart: "Elige tu próxima",
                titleHighlight: "Experiencia en Loreto",
                desc: "Tours, experiencias y el mar como debe vivirse: en grupos pequeños y con respeto total por la vida marina.",
                cardLink: "Ver detalles",
                cards: [
                    { kicker: "Servicios", title: "Fun Dives & Aventuras" },
                    { kicker: "Experiencias", title: "Snorkeling & Familia" },
                    { kicker: "Nosotros", title: "Familia y Misión" },
                    { kicker: "Planifica", title: "Ubicación y Contacto" }
                ]
            },
            valueProps: {
                tag: "Te ofrecemos",
                titleStart: "Buceo responsable y",
                titleHighlight: "experiencias auténticas",
                desc: "En Dolphin Dive Baja no solo te llevamos a bucear. Creamos experiencias seguras, humanas y conscientes dentro del Parque Nacional Bahía de Loreto.",
                cards: [
                    { title: "Centro PADI 5 Estrellas", desc: "Somos el único Centro PADI 5 Estrellas y Cressi Dive Center en Loreto, cumpliendo con los más altos estándares." },
                    { title: "Grupos Pequeños", desc: "Máximo 6 buzos por Dive Master o 8 snorkelistas por guía. Atención humana y personalizada." },
                    { title: "Todo Incluido", desc: "Brazaletes del parque, lunch y bebidas incluidos para que solo te preocupes por disfrutar." },
                    { title: "Nuestra Misión", desc: "Educar para proteger. Primero los animales, segundo los animales, tercero los animales." }
                ]
            },
            gallery: {
                tag: "Galería",
                title: "Instantes Inolvidables",
                btnInsta: "Ver más en Instagram",
                images: [
                    "Arrecifes de Coral",
                    "Vida Nocturna",
                    "Lobos Marinos",
                    "Aguas Cristalinas",
                    "Cardúmenes",
                    "Exploración",
                    "Tortugas Marinas",
                    "Atardeceres Mágicos"
                ]
            },
            destination: {
                tag: "Destino",
                hashtag: "#Loreto_donde_el_lujo_es_la_",
                hashtagHighlight: "naturaleza",
                desc: "Loreto es un paraíso natural dentro del Parque Nacional Bahía de Loreto: islas, arrecifes y biodiversidad incomparable.",
                card: {
                    title: "Visítanos",
                    text: "Estamos ubicados en el corazón de Loreto, listos para planear tu aventura.",
                    link: "Ver en Google Maps"
                }
            }
        },
        servicesPage: {
            // Textos para el componente del Home
            tag: "Nuestros Servicios",
            titleStart: "Vive el",
            titleHighlight: "Mar de Cortés",
            btnDetails: "Ver detalles",
            list: [
                { id: "01", title: "Fun Dives", description: "Inmersiones de dos tanques para buzos certificados. Explora los mejores arrecifes de las islas Coronados y Carmen.", tags: ["2 Tanques", "PADI", "Guía Pro"] },
                { id: "02", title: "Snorkeling Adventure", description: "Perfecto para familias. Conecta con la vida marina en aguas cristalinas y disfruta de un lunch en playas vírgenes.", tags: ["Familiar", "Equipo Incluido", "Lunch"] },
                { id: "03", title: "Cursos de Buceo", description: "¿Quieres aprender? Desde tu primera burbuja hasta certificaciones avanzadas con el único centro PADI 5 Estrellas.", tags: ["Open Water", "Referidos", "e-Learning"] }
            ],
            // Textos para la página completa de Servicios
            catalogTitle: "Catálogo de Aventuras",
            heroTitle: "Elige tu próxima",
            heroHighlight: "Inmersión",
            heroDesc: "Desde tu primera respiración bajo el agua hasta expediciones técnicas. Todo nuestro equipo es Cressi® y se renueva cada temporada.",
            categories: {
                fundives: "Fun Dives",
                cursos: "Cursos & Programas",
                snorkel: "Snorkel & Tours"
            },
            services: {
                fundives: [
                    { title: "Local Dive (Loreto Bay)", price: "$110 USD", duration: "4 Horas", desc: "Explora los arrecifes volcánicos del Parque Nacional. Vida marina abundante y formaciones rocosas impresionantes.", includes: ["2 Tanques", "Lastre y Cinturón", "Snacks y Bebidas", "Guía PADI"], imgKey: "funDivesImg" },
                    { title: "Coronados Island", price: "$140 USD", duration: "5 Horas", desc: "Nuestra inmersión más popular. Juega con lobos marinos y explora barcos hundidos llenos de vida.", includes: ["2 Tanques", "Equipo Completo", "Lunch en playa", "Permisos"], imgKey: "coronadosImg" },
                    { title: "Night Dive", price: "$95 USD", duration: "2.5 Horas", desc: "Descubre la bioluminiscencia y las criaturas que solo salen al caer el sol. Una experiencia mística.", includes: ["1 Tanque", "Linterna Primaria", "Luz de Tanque", "Solo Avanzados"], imgKey: "nightDiveImg" }
                ],
                cursos: [
                    { title: "Discover Scuba (Bautizo)", price: "$160 USD", duration: "1 Día", desc: "¿Primera vez? Aprende lo básico en piscina y realiza tu primera inmersión en el mar bajo supervisión directa.", includes: ["Clase Teórica", "Práctica en Alberca", "1 Inmersión en Mar", "Equipo Completo"], imgKey: "coursesImg" },
                    { title: "Open Water Diver", price: "$480 USD", duration: "3-4 Días", desc: "Tu certificación de por vida. Aprende a bucear de forma autónoma hasta 18 metros de profundidad.", includes: ["eLearning", "5 Módulos Alberca", "4 Inmersiones Mar", "Certificación"], imgKey: "coursesImg" },
                    { title: "Refresher (Refresh)", price: "Consultar", duration: "1 Día", desc: "¿Más de 1 año sin bucear? Retoma confianza y técnica en un área controlada antes de explorar.", includes: ["1 Tanque Habilidades", "1 Tanque Exploración", "Equipo NO incluido"], imgKey: "refreshImg" },
                    { title: "Bubble Makers", price: "Consultar", duration: "Medio día", desc: "Introducción segura y divertida para niños de 8 a 11 años. Máximo 2 metros de profundidad.", includes: ["1 Tanque", "Equipo Incluido", "Instructor PADI", "Lunch"], imgKey: "bubbleImg" }
                ],
                snorkel: [
                    { title: "Tour Isla Coronados", price: "$85 USD", duration: "4 Horas", desc: "Para toda la familia. Playas de arena blanca, aguas turquesas y avistamiento de delfines en el trayecto.", includes: ["Equipo de Snorkel", "Chaleco Salvavidas", "Lunch Box", "Sombra en Playa"], imgKey: "snorkelImg" },
                    { title: "Sunset Cruise", price: "$60 USD", duration: "3 Horas", desc: "Disfruta del atardecer en el Mar de Cortés con música suave y bebidas refrescantes.", includes: ["Bebidas (No alcohólicas)", "Botana", "Capitán Bilingüe", "Fotos"], imgKey: "experienciasImg" }
                ]
            },
            schedules: {
                title: "Horarios y Detalles Operativos",
                morning: "Mañana",
                afternoon: "Tarde",
                night: "Nocturno",
                notAvailable: "No disponible en esta modalidad",
                important: "Información Importante",
                fundives: {
                    morning: { time: "08:00 – 12:30", note: "Cita 07:30 AM", season: "Todo el año" },
                    afternoon: { time: "13:00 – 17:30", note: "Cita 12:30 PM", season: "Mayo – Octubre" },
                    night: { time: "18:00 – 20:00", note: "Cita 17:30 PM", season: "Julio – Octubre" },
                    rules: ["Equipo de buceo NO incluido en tarifa Fun Dives.", "Mínimo 2 personas para salir.", "Buzos solos: tarifa privada."]
                },
                cursos: {
                    morning: { time: "08:00 – 13:00", note: "Teoría + Alberca", season: "Todo el año" },
                    afternoon: { time: "13:00 – 17:00", note: "Inmersiones", season: "Todo el año" },
                    rules: ["Incluye todo el material didáctico.", "Certificación digital PADI incluida.", "Requiere llenado de formulario médico."]
                },
                snorkel: {
                    morning: { time: "08:00 – 12:30", note: "Cita 07:30 AM", season: "Todo el año" },
                    afternoon: { time: "13:00 – 17:30", note: "Cita 12:30 PM", season: "Mayo – Octubre" },
                    rules: ["Equipo de snorkel SÍ incluido.", "Mínimo 3 personas.", "Chaleco salvavidas obligatorio en el agua."]
                }
            },
            ui: {
                includes: "Incluye:",
                bookNow: "Reservar ahora"
            }
        },
        contact: {
            hero: {
                subtitle: "Estamos para ayudarte",
                titleStart: "Hablemos de tu próxima",
                titleHighlight: "Aventura",
                text: "Sin formularios largos. Atención directa y personalizada para planear tu inmersión perfecta en Loreto."
            },
            cards: {
                visit: {
                    title: "Visítanos",
                    text: "Calle Madero & Benito Juárez. Centro de Loreto, a una cuadra del malecón.",
                    link: "Ver en mapa"
                },
                whatsapp: {
                    title: "Chat Directo",
                    text: "La forma más rápida de reservar. Te contestamos al momento (8am - 8pm).",
                    btn: "Enviar Mensaje"
                },
                email: {
                    title: "Escríbenos",
                    text: "¿Prefieres correo? Para cotizaciones grupales o dudas detalladas.",
                    link: "ventas@dolphindivebaja.com"
                }
            },
            map: {
                title: "Punto de Encuentro",
                text: "Nuestra base de operaciones en el corazón de Loreto"
            },
            faq: {
                subtitle: "Resolver Dudas",
                title: "Preguntas Frecuentes",
                more: "¿Tienes otra pregunta?",
                link: "Pregúntanos por WhatsApp",
                list: [
                    { q: "¿Necesito certificación para bucear?", a: "Para los Fun Dives sí requerimos certificación. Si nunca has buceado, pregunta por nuestro programa 'Discover Scuba' o Bautizo." },
                    { q: "¿Incluyen equipo de renta?", a: "En los cursos y tours de snorkel sí. En los Fun Dives para certificados, el equipo tiene un costo adicional o puedes traer el tuyo." },
                    { q: "¿Cuál es la política de cancelación?", a: "Requerimos 24 horas de anticipación para cambios o cancelaciones sin cargo. Grupos grandes pueden requerir 48 horas." },
                    { q: "¿Aceptan tarjetas de crédito?", a: "Sí, aceptamos Visa, Mastercard y efectivo (Pesos/Dólares). Los pagos con tarjeta pueden tener una pequeña comisión bancaria." }
                ]
            }
        },
        footer: {
            desc: "Explorando el 'Acuario del Mundo' con pasión, seguridad y respeto por la vida marina desde 2010. Tu familia en Loreto.",
            navTitle: "Navegación",
            navLinks: { home: "Inicio", services: "Servicios", about: "Nosotros", contact: "Contacto" },
            expTitle: "Experiencias",
            contactTitle: "Contacto",
            address: "Marina de Loreto, BCS, México. CP 23880.",
            rights: "Dolphin Dive Baja. Todos los derechos reservados.",
            privacy: "Aviso de Privacidad",
            terms: "Términos y Condiciones"
        }
    },
    en: {
        navbar: {
            services: "Services",
            about: "About Us",
            contact: "Contact",
            cta: "Book Now",
            languageBtn: "ES",
            submenu: {
                funDives: "Fun Dives",
                courses: "PADI Courses",
                snorkel: "Snorkel & Tours",
                history: "Our Story",
                team: "Staff & Team",
                gallery: "Gallery",
                location: "Location",
                whatsapp: "Direct WhatsApp",
                faq: "FAQ"
            }
        },
        home: {
            hero: {
                tag: "Loreto Bay National Park",
                btnBook: "Book experience",
                btnServices: "View services",
                slides: [
                    {
                        title: "MORE THAN DIVING,<br/>AN UNFORGETTABLE EXPERIENCE",
                        subtitle: "Each dive is designed to connect you with the ocean and nature."
                    },
                    {
                        title: "EXPLORE LORETO<br/>FROM THE SEA",
                        subtitle: "Guided tours and excursions to discover unique underwater landscapes."
                    },
                    {
                        title: "SNORKEL AND ADVENTURE<br/>FOR EVERYONE",
                        subtitle: "Experience the ocean with activities designed for families and sea lovers."
                    }
                ]
            },
            highlights: {
                tag: "Explore",
                titleStart: "Choose your next",
                titleHighlight: "Experience in Loreto",
                desc: "Tours, experiences, and the sea as it should be lived: in small groups and with total respect for marine life.",
                cardLink: "View details",
                cards: [
                    { kicker: "Services", title: "Fun Dives & Adventures" },
                    { kicker: "Experiences", title: "Snorkeling & Family" },
                    { kicker: "About Us", title: "Family and Mission" },
                    { kicker: "Plan", title: "Location & Contact" }
                ]
            },
            valueProps: {
                tag: "We offer you",
                titleStart: "Responsible diving and",
                titleHighlight: "authentic experiences",
                desc: "At Dolphin Dive Baja, we don't just take you diving. We create safe, human, and conscious experiences within the Loreto Bay National Park.",
                cards: [
                    { title: "5-Star PADI Center", desc: "We are the only 5-Star PADI Center and Cressi Dive Center in Loreto, meeting the highest standards." },
                    { title: "Small Groups", desc: "Maximum 6 divers per Dive Master or 8 snorkelers per guide. Human and personalized attention." },
                    { title: "All Inclusive", desc: "Park bracelets, lunch, and drinks included so you only worry about enjoying." },
                    { title: "Our Mission", desc: "Educate to protect. Animals first, animals second, animals third." }
                ]
            },
            gallery: {
                tag: "Gallery",
                title: "Unforgettable Moments",
                btnInsta: "See more on Instagram",
                images: [
                    "Coral Reefs",
                    "Night Life",
                    "Sea Lions",
                    "Crystal Clear Waters",
                    "Schools of Fish",
                    "Exploration",
                    "Sea Turtles",
                    "Magical Sunsets"
                ]
            },
            destination: {
                tag: "Destination",
                hashtag: "#Loreto_where_luxury_is_",
                hashtagHighlight: "nature",
                desc: "Loreto is a natural paradise within the Loreto Bay National Park: islands, reefs, and incomparable biodiversity.",
                card: {
                    title: "Visit Us",
                    text: "We are located in the heart of Loreto, ready to plan your adventure.",
                    link: "View on Google Maps"
                }
            }
        },
        servicesPage: {
            // Textos para el componente del Home
            tag: "Our Services",
            titleStart: "Experience the",
            titleHighlight: "Sea of Cortez",
            btnDetails: "View details",
            list: [
                { id: "01", title: "Fun Dives", description: "Two-tank dives for certified divers. Explore the best reefs of Coronados and Carmen islands.", tags: ["2 Tanks", "PADI", "Pro Guide"] },
                { id: "02", title: "Snorkeling Adventure", description: "Perfect for families. Connect with marine life in crystal clear waters and enjoy lunch at pristine beaches.", tags: ["Family", "Gear Included", "Lunch"] },
                { id: "03", title: "Diving Courses", description: "Want to learn? From your first bubble to advanced certifications with the only PADI 5-Star Center.", tags: ["Open Water", "Referrals", "e-Learning"] }
            ],
            // Textos para la página completa de Servicios
            catalogTitle: "Adventure Catalog",
            heroTitle: "Choose your next",
            heroHighlight: "Dive",
            heroDesc: "From your first breath underwater to technical expeditions. All our gear is Cressi® and renewed every season.",
            categories: {
                fundives: "Fun Dives",
                cursos: "Courses & Programs",
                snorkel: "Snorkel & Tours"
            },
            services: {
                fundives: [
                    { title: "Local Dive (Loreto Bay)", price: "$110 USD", duration: "4 Hours", desc: "Explore the volcanic reefs of the National Park. Abundant marine life and impressive rock formations.", includes: ["2 Tanks", "Weights and Belt", "Snacks and Drinks", "PADI Guide"], imgKey: "funDivesImg" },
                    { title: "Coronados Island", price: "$140 USD", duration: "5 Hours", desc: "Our most popular dive. Play with sea lions and explore shipwrecks full of life.", includes: ["2 Tanks", "Full Gear", "Beach Lunch", "Permits"], imgKey: "coronadosImg" },
                    { title: "Night Dive", price: "$95 USD", duration: "2.5 Hours", desc: "Discover bioluminescence and creatures that only come out after dark. A mystical experience.", includes: ["1 Tank", "Primary Light", "Tank Light", "Advanced Only"], imgKey: "nightDiveImg" }
                ],
                cursos: [
                    { title: "Discover Scuba", price: "$160 USD", duration: "1 Day", desc: "First time? Learn the basics in a pool and make your first ocean dive under direct supervision.", includes: ["Theory Class", "Pool Practice", "1 Ocean Dive", "Full Gear"], imgKey: "coursesImg" },
                    { title: "Open Water Diver", price: "$480 USD", duration: "3-4 Days", desc: "Your lifetime certification. Learn to dive autonomously up to 18 meters deep.", includes: ["eLearning", "5 Pool Modules", "4 Ocean Dives", "Certification"], imgKey: "coursesImg" },
                    { title: "Refresher", price: "Inquire", duration: "1 Day", desc: "More than 1 year without diving? Regain confidence and technique in a controlled area before exploring.", includes: ["1 Skills Tank", "1 Exploration Tank", "Gear NOT included"], imgKey: "refreshImg" },
                    { title: "Bubble Makers", price: "Inquire", duration: "Half day", desc: "Safe and fun introduction for kids 8 to 11 years old. Maximum 2 meters deep.", includes: ["1 Tank", "Gear Included", "PADI Instructor", "Lunch"], imgKey: "bubbleImg" }
                ],
                snorkel: [
                    { title: "Coronados Island Tour", price: "$85 USD", duration: "4 Hours", desc: "For the whole family. White sand beaches, turquoise waters, and dolphin watching on the way.", includes: ["Snorkel Gear", "Life Jacket", "Lunch Box", "Beach Shade"], imgKey: "snorkelImg" },
                    { title: "Sunset Cruise", price: "$60 USD", duration: "3 Hours", desc: "Enjoy the sunset in the Sea of Cortez with soft music and refreshing drinks.", includes: ["Drinks (Non-alcoholic)", "Snacks", "Bilingual Captain", "Photos"], imgKey: "experienciasImg" }
                ]
            },
            schedules: {
                title: "Schedules & Operational Details",
                morning: "Morning",
                afternoon: "Afternoon",
                night: "Night",
                notAvailable: "Not available in this mode",
                important: "Important Information",
                fundives: {
                    morning: { time: "08:00 – 12:30", note: "Meet at 07:30 AM", season: "All year" },
                    afternoon: { time: "13:00 – 17:30", note: "Meet at 12:30 PM", season: "May – Oct" },
                    night: { time: "18:00 – 20:00", note: "Meet at 05:30 PM", season: "Jul – Oct" },
                    rules: ["Dive gear NOT included in Fun Dives rate.", "Minimum 2 people to depart.", "Solo divers: private rate."]
                },
                cursos: {
                    morning: { time: "08:00 – 13:00", note: "Theory + Pool", season: "All year" },
                    afternoon: { time: "13:00 – 17:00", note: "Ocean Dives", season: "All year" },
                    rules: ["Includes all training materials.", "PADI digital certification included.", "Requires medical form completion."]
                },
                snorkel: {
                    morning: { time: "08:00 – 12:30", note: "Meet at 07:30 AM", season: "All year" },
                    afternoon: { time: "13:00 – 17:30", note: "Meet at 12:30 PM", season: "May – Oct" },
                    rules: ["Snorkel gear IS included.", "Minimum 3 people.", "Life jacket mandatory in the water."]
                }
            },
            ui: {
                includes: "Includes:",
                bookNow: "Book now"
            }
        },
        contact: {
            hero: {
                subtitle: "We are here to help",
                titleStart: "Let's plan your next",
                titleHighlight: "Adventure",
                text: "No long forms. Direct and personalized attention to plan your perfect dive in Loreto."
            },
            cards: {
                visit: {
                    title: "Visit Us",
                    text: "Madero & Benito Juárez St. Downtown Loreto, one block from the boardwalk.",
                    link: "View on map"
                },
                whatsapp: {
                    title: "Direct Chat",
                    text: "The fastest way to book. We reply instantly (8am - 8pm).",
                    btn: "Send Message"
                },
                email: {
                    title: "Email Us",
                    text: "Prefer email? For group quotes or detailed inquiries.",
                    link: "ventas@dolphindivebaja.com"
                }
            },
            map: {
                title: "Meeting Point",
                text: "Our base of operations in the heart of Loreto"
            },
            faq: {
                subtitle: "Solve Doubts",
                title: "Frequently Asked Questions",
                more: "Have another question?",
                link: "Ask us on WhatsApp",
                list: [
                    { q: "Do I need certification to dive?", a: "For Fun Dives, yes. If you've never dived, ask about our 'Discover Scuba' program." },
                    { q: "Is rental gear included?", a: "Yes, for courses and snorkel tours. For certified Fun Dives, gear has an extra cost or you can bring yours." },
                    { q: "What is the cancellation policy?", a: "We require 24 hours notice for changes or cancellations free of charge. Large groups may require 48 hours." },
                    { q: "Do you accept credit cards?", a: "Yes, we accept Visa, Mastercard, and cash (Pesos/USD). Card payments may have a small bank fee." }
                ]
            }
        },
        footer: {
            desc: "Exploring the 'Aquarium of the World' with passion, safety, and respect for marine life since 2010. Your family in Loreto.",
            navTitle: "Navigation",
            navLinks: { home: "Home", services: "Services", about: "About Us", contact: "Contact" },
            expTitle: "Experiences",
            contactTitle: "Contact",
            address: "Marina de Loreto, BCS, Mexico. CP 23880.",
            rights: "Dolphin Dive Baja. All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms and Conditions"
        }
    }
};