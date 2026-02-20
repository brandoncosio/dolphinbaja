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
                    },
                    {
                        title: "APRENDE A BUCEAR<br/>EN EL PARAÍSO",
                        subtitle: "Cursos PADI con los más altos estándares, desde nivel principiante hasta profesional."
                    },
                    {
                        title: "DESCUBRE LA MAGIA<br/>DE LAS ISLAS",
                        subtitle: "Expediciones inolvidables a Isla Coronado e Isla del Carmen."
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
                    { kicker: "Aprende", title: "Cursos PADI" },
                    { kicker: "Nosotros", title: "Nuestro Equipo" },
                    { kicker: "Planifica", title: "Ubicación y Contacto" },
                    { kicker: "Inspírate", title: "Nuestra Galería" }
                ]
            },
            valueProps: {
                tag: "Te ofrecemos",
                titleStart: "Buceo responsable y",
                titleHighlight: "experiencias auténticas",
                desc: "En Dolphin Dive Baja no solo te llevamos a bucear. Creamos experiencias seguras, humanas y conscientes dentro del Parque Nacional Bahía de Loreto.",
                cards: [
                    { title: "Centro PADI 5 Estrellas", desc: "Somos el único Centro PADI 5 Estrellas y Cressi Dive Center en Loreto, cumpliendo con los más altos estándares." },
                    { title: "Grupos Pequeños", desc: "Máximo 6 buzos por Dive Master u 8 snorkelistas por guía. Atención humana y personalizada." },
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
                    "Experiencias únicas",
                    "Misterios profundos",
                    "Equipamiento de Primera",
                    "Únete a la Aventura",
                    "Alebrijes del Mar",
                    "Caballitos de Mar",
                    "Nuestros Amigos",
                    "Detalles Únicos",
                    "Biodiversidad",
                    "Inmersión Total",
                    "Mar Profundo",
                    "Colores Vivos",
                    "Arrecifes",
                    "Vida Marina",
                    "Aventuras"
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
            tag: "Nuestros Servicios",
            titleStart: "Vive el",
            titleHighlight: "Mar de Cortés",
            btnDetails: "Ver detalles",
            list: [
                { id: "01", title: "Fun Dives", description: "Inmersiones de dos tanques para buzos certificados. Explora los mejores arrecifes de las islas Coronados y Carmen.", tags: ["2 Tanques", "PADI", "Guía Pro"] },
                { id: "02", title: "Snorkeling Adventure", description: "Perfecto para familias. Conecta con la vida marina en aguas cristalinas y disfruta de un lunch en playas vírgenes.", tags: ["Familiar", "Equipo Incluido", "Lunch"] },
                { id: "03", title: "Cursos de Buceo", description: "¿Quieres aprender? Desde tu primera burbuja hasta certificaciones avanzadas con el único centro PADI 5 Estrellas.", tags: ["Open Water", "Referidos", "e-Learning"] }
            ],
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
                // 👇 AQUÍ SE ELIMINÓ EL SUNSET CRUISE
                snorkel: [
                    { title: "Tour Isla Coronados", price: "$85 USD", duration: "4 Horas", desc: "Para toda la familia. Playas de arena blanca, aguas turquesas y avistamiento de delfines en el trayecto.", includes: ["Equipo de Snorkel", "Chaleco Salvavidas", "Lunch Box", "Sombra en Playa"], imgKey: "snorkelImg" }
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
        aboutPage: {
            hero: {
                tag: "Nuestra Esencia",
                titleStart: "Más que buceo,<br/>somos",
                titleHighlight: "Familia",
                desc: "Conectando personas con la vida marina del Parque Nacional Bahía de Loreto a través de experiencias responsables y humanas."
            },
            story: {
                since: "Desde 2010",
                title: "Un negocio familiar en el corazón de Loreto",
                p1: "Somos Rafa (abogado) y María (mercadóloga). Llegamos a este paraíso buscando una vida tranquila para nuestros hijos, quienes hoy son orgullosamente loretanos.",
                p2: "El destino nos trajo al mar y la comunidad nos acogió. Hoy, los cuatro trabajamos para devolver un poco de lo recibido, ofreciendo experiencias auténticas donde tú eres el invitado de honor en nuestra casa: el Mar de Cortés.",
                values: ["Familia", "Comunidad", "Respeto", "Pasión"],
                stats: [
                    { num: "2010", label: "Año de inicio" },
                    { num: "15+", label: "Años en Loreto" },
                    { num: "4", label: "Miembros familia" },
                    { num: "100%", label: "Pasión por el mar" }
                ],
                mission: {
                    tag: "Nuestra Misión",
                    titleStart: "Educar sobre qué",
                    titleHighlight1: "ES",
                    titleMid: "el mar,<br/>¡para",
                    titleHighlight2: "PROTEGERLO",
                    titleEnd: "!",
                    quote: '"Primero los animales, segundo los animales, tercero los animales.<br/>Nosotros somos los visitantes."',
                    btn: "Contáctanos por correo"
                }
            },
            history: {
                title: "Un Poco de Historia...",
                events: [
                    { year: "2013", title: "Nace Dolphin Dive Baja", desc: "Bruce Williams y Susan Speck nos pasan la estafeta. Le agregamos el 'Baja' y comenzamos esta aventura.", img: "/assets/nosotros/time1.webp" },
                    { year: "PADI", title: "26 Años de Excelencia", desc: "Mantenemos el estatus de PADI Dive Center 5 Estrellas, celebrando más de dos décadas de seguridad y calidad.", img: "/assets/nosotros/time2.webp" },
                    { year: "AWARE", title: "Compromiso Ambiental", desc: "Trabajamos activamente en el proyecto PADI AWARE para mantener nuestro océano limpio y protegido.", img: "/assets/nosotros/time3.webp" },
                    { year: "2022", title: "Somos Cressi Point", desc: "Nos convertimos en Centro de Buceo Cressi (CDC), garantizando el mejor equipo y tecnología para ti.", img: "/assets/nosotros/time4.webp" }
                ]
            },
            team: {
                tag: "Nuestro Recurso Humano",
                title: "Equipo local y profesional",
                desc: "Creemos en el desarrollo profesional de nuestra comunidad. Desde 2016 hemos formado a 7 Dive Masters mexicanos, con nuevos talentos en proceso para este 2026. Además, el alma de nuestras expediciones son nuestros capitanes: gente de mar que creció en Loreto y conoce perfectamente cada isla y arrecife del Parque Nacional.",
                members: [
                    { name: "Kaliman", role: "Capitán", img: "/assets/nosotros/kaliman2.png" },
                    { name: "Alex", role: "Dive Master", img: "/assets/nosotros/alex.webp" },
                    { name: "Pablo", role: "Dive Master", img: "/assets/nosotros/pablo.webp" },
                    { name: "Luis", role: "Capitán", img: "/assets/nosotros/luis.webp" },
                    { name: "Fiona", role: "DM Training", img: "/assets/nosotros/fiona.webp" },
                    { name: "Rafa Jr", role: "DM Training", img: "/assets/nosotros/rafa3.webp" },
                    { name: "Rafa", role: "Instructor", img: "/assets/nosotros/rafa2.webp" },
                    { name: "María", role: "Assistant Inst.", img: "/assets/nosotros/maria.webp" },
                    { name: "Erubiel", role: "Capitán", img: "/assets/nosotros/CapEru.webp" }
                ]
            },
            gallery: {
                cressi: {
                    tag: "Cressi Point",
                    title: "Pasión y tecnología bajo el mar",
                    desc: "Somos el único distribuidor autorizado Cressi en Loreto. Calidad y servicio para garantizar que tu equipo esté a la altura de tu aventura.",
                    cta: "Visítanos o contáctanos"
                },
                collage: {
                    title: "Atrévete a vivir la experiencia"
                }
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
        privacyPage: {
            tag: "LEGAL · INFORMACIÓN",
            title: "Política de Privacidad",
            introShort: "Esta Política explica cómo Dolphin Baja usa y protege la información que proporcionas al utilizar este sitio web.",
            summary: {
                title: "Resumen Rápido",
                list: [
                    "Recopilamos datos para mejorar servicios.",
                    "Podemos enviar correos; puedes cancelar.",
                    "Usamos cookies para analítica.",
                    "No vendemos tus datos sin permiso."
                ]
            },
            sections: [
                {
                    title: "Información General",
                    content: "El presente Política de Privacidad establece los términos en que Dolphin Baja usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios."
                },
                {
                    title: "Información que es recogida",
                    content: "Nuestro sitio web podrá recoger información personal por ejemplo: Nombre, información de contacto como su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación."
                },
                {
                    title: "Uso de la información recogida",
                    content: "Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios.\nEs posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio; estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.\nDolphin Baja está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado."
                },
                {
                    title: "Cookies",
                    content: "Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente.\nNuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador.\nSin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web; estas no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente. Usted puede aceptar o negar el uso de cookies; sin embargo la mayoría de navegadores aceptan cookies automáticamente."
                },
                {
                    title: "Enlaces a Terceros",
                    content: "Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas."
                },
                {
                    title: "Control de su información personal",
                    content: "En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web. Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico. En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.\nEsta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.\nDolphin Baja se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento."
                }
            ],
            footer: "Última actualización: 2024"
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
        },
        cookies: {
            title: "Preferencias de Cookies",
            text: "Usamos cookies propias y de terceros para asegurar que tengas la mejor experiencia de navegación en el Mar de Cortés.",
            link: "Ver Política",
            accept: "Aceptar Todo",
            decline: "Solo necesarias"
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
                    },
                    {
                        title: "LEARN TO DIVE<br/>IN PARADISE",
                        subtitle: "PADI courses with the highest standards, from beginner to professional levels."
                    },
                    {
                        title: "DISCOVER THE MAGIC<br/>OF THE ISLANDS",
                        subtitle: "Unforgettable expeditions to Coronado and del Carmen Islands."
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
                    { kicker: "Learn", title: "PADI Courses" },
                    { kicker: "About Us", title: "Our Team" },
                    { kicker: "Plan", title: "Location & Contact" },
                    { kicker: "Get Inspired", title: "Our Gallery" }
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
                    "Unique Experiences",
                    "Deep Mysteries",
                    "Top Tier Gear",
                    "Join the Adventure",
                    "Sea Alebrijes",
                    "Seahorses",
                    "Our Friends",
                    "Unique Details",
                    "Biodiversity",
                    "Total Immersion",
                    "Deep Sea",
                    "Vivid Colors",
                    "Reefs",
                    "Marine Life",
                    "Adventures"
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
            tag: "Our Services",
            titleStart: "Experience the",
            titleHighlight: "Sea of Cortez",
            btnDetails: "View details",
            list: [
                { id: "01", title: "Fun Dives", description: "Two-tank dives for certified divers. Explore the best reefs of Coronados and Carmen islands.", tags: ["2 Tanks", "PADI", "Pro Guide"] },
                { id: "02", title: "Snorkeling Adventure", description: "Perfect for families. Connect with marine life in crystal clear waters and enjoy lunch at pristine beaches.", tags: ["Family", "Gear Included", "Lunch"] },
                { id: "03", title: "Diving Courses", description: "Want to learn? From your first bubble to advanced certifications with the only PADI 5-Star Center.", tags: ["Open Water", "Referrals", "e-Learning"] }
            ],
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
                // 👇 AQUÍ SE ELIMINÓ EL SUNSET CRUISE
                snorkel: [
                    { title: "Coronados Island Tour", price: "$85 USD", duration: "4 Hours", desc: "For the whole family. White sand beaches, turquoise waters, and dolphin watching on the way.", includes: ["Snorkel Gear", "Life Jacket", "Lunch Box", "Beach Shade"], imgKey: "snorkelImg" }
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
        aboutPage: {
            hero: {
                tag: "Our Essence",
                titleStart: "More than diving,<br/>we are",
                titleHighlight: "Family",
                desc: "Connecting people with the marine life of the Loreto Bay National Park through responsible and human experiences."
            },
            story: {
                since: "Since 2010",
                title: "A family business in the heart of Loreto",
                p1: "We are Rafa (lawyer) and Maria (marketer). We arrived in this paradise looking for a quiet life for our children, who today are proudly from Loreto.",
                p2: "Fate brought us to the sea and the community welcomed us. Today, the four of us work to give back a little of what we received, offering authentic experiences where you are the guest of honor in our home: the Sea of Cortez.",
                values: ["Family", "Community", "Respect", "Passion"],
                stats: [
                    { num: "2010", label: "Starting Year" },
                    { num: "15+", label: "Years in Loreto" },
                    { num: "4", label: "Family Members" },
                    { num: "100%", label: "Passion for the sea" }
                ],
                mission: {
                    tag: "Our Mission",
                    titleStart: "Educate on what the sea",
                    titleHighlight1: "IS",
                    titleMid: ",<br/>in order to",
                    titleHighlight2: "PROTECT IT",
                    titleEnd: "!",
                    quote: '"Animals first, animals second, animals third.<br/>We are the visitors."',
                    btn: "Contact us by email"
                }
            },
            history: {
                title: "A Little Bit of History...",
                events: [
                    { year: "2013", title: "Dolphin Dive Baja is Born", desc: "Bruce Williams and Susan Speck passed the torch to us. We added 'Baja' and started this adventure.", img: "/assets/nosotros/time1.webp" },
                    { year: "PADI", title: "26 Years of Excellence", desc: "We maintain the 5-Star PADI Dive Center status, celebrating over two decades of safety and quality.", img: "/assets/nosotros/time2.webp" },
                    { year: "AWARE", title: "Environmental Commitment", desc: "We actively work with the PADI AWARE project to keep our ocean clean and protected.", img: "/assets/nosotros/time3.webp" },
                    { year: "2022", title: "We are Cressi Point", desc: "We became a Cressi Dive Center (CDC), guaranteeing the best gear and technology for you.", img: "/assets/nosotros/time4.webp" }
                ]
            },
            team: {
                tag: "Our Human Resource",
                title: "Local and Professional Team",
                desc: "We believe in the professional development of our community. Since 2016, we have trained 7 Mexican Dive Masters, with new talents in training for 2026. Furthermore, the soul of our expeditions are our captains: local seafarers who grew up in Loreto and perfectly know every island and reef of the National Park.",
                members: [
                    { name: "Kaliman", role: "Captain", img: "/assets/nosotros/kaliman2.png" },
                    { name: "Alex", role: "Dive Master", img: "/assets/nosotros/alex.webp" },
                    { name: "Pablo", role: "Dive Master", img: "/assets/nosotros/pablo.webp" },
                    { name: "Luis", role: "Captain", img: "/assets/nosotros/luis.webp" },
                    { name: "Fiona", role: "DM Training", img: "/assets/nosotros/fiona.webp" },
                    { name: "Rafa Jr", role: "DM Training", img: "/assets/nosotros/rafa3.webp" },
                    { name: "Rafa", role: "Instructor", img: "/assets/nosotros/rafa2.webp" },
                    { name: "María", role: "Assistant Inst.", img: "/assets/nosotros/maria.webp" },
                    { name: "Erubiel", role: "Captain", img: "/assets/nosotros/CapEru.webp" }
                ]
            },
            gallery: {
                cressi: {
                    tag: "Cressi Point",
                    title: "Passion and technology under the sea",
                    desc: "We are the only authorized Cressi dealer in Loreto. Quality and service to ensure your gear matches the level of your adventure.",
                    cta: "Visit or contact us"
                },
                collage: {
                    title: "Dare to live the experience"
                }
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
        privacyPage: {
            tag: "LEGAL · INFORMATION",
            title: "Privacy Policy",
            introShort: "This Privacy Policy explains how Dolphin Dive Baja uses and protects the information you provide when using this website.",
            summary: {
                title: "Quick Summary",
                list: [
                    "We collect data to improve services.",
                    "We may send emails; you can cancel anytime.",
                    "We use cookies for analytics.",
                    "We do not sell your data without consent."
                ]
            },
            sections: [
                {
                    title: "General Information",
                    content: "This Privacy Policy establishes the terms under which Dolphin Dive Baja uses and protects the information that is provided by its users when using its website. This company is committed to the security of its users' data. When we ask you to fill in personal information fields by which you can be identified, we do so ensuring that it will only be used in accordance with the terms of this document. However, this Privacy Policy may change over time or be updated, so we recommend and emphasize reviewing this page continuously to ensure you agree with such changes."
                },
                {
                    title: "Information Collected",
                    content: "Our website may collect personal information such as: Name, contact information like your email address, and demographic information. Likewise, when necessary, specific information may be required to process an order or make a delivery or billing."
                },
                {
                    title: "Use of Collected Information",
                    content: "Our website uses the information in order to provide the best possible service, particularly to maintain a user registry, orders if applicable, and improve our products and services.\nIt is possible that emails may be sent periodically through our site with special offers, new products, and other advertising information that we consider relevant to you or that may provide you with some benefit; these emails will be sent to the address you provide and may be canceled at any time.\nDolphin Dive Baja is highly committed to fulfilling the commitment to keep your information secure. We use the most advanced systems and update them constantly to ensure that there is no unauthorized access."
                },
                {
                    title: "Cookies",
                    content: "A cookie refers to a file that is sent with the purpose of requesting permission to be stored on your computer. Upon accepting said file, it is created and the cookie then serves to have information regarding web traffic, and also facilitates future visits to a recurring website.\nOur website uses cookies to identify the pages that are visited and their frequency. This information is used solely for statistical analysis and then the information is permanently deleted. You can delete cookies at any time from your computer.\nHowever, cookies help to provide a better service for websites; they do not give access to information from your computer or from you, unless you want it and provide it directly. You can accept or deny the use of cookies; however, most browsers accept cookies automatically."
                },
                {
                    title: "Links to Third Parties",
                    content: "This website may contain links to other sites that may be of your interest. Once you click on these links and leave our page, we no longer have control over the site to which you are redirected and therefore we are not responsible for the terms or privacy nor for the protection of your data on those other third-party sites. Said sites are subject to their own privacy policies, so it is recommended that you consult them to confirm that you agree with them."
                },
                {
                    title: "Control of Your Personal Information",
                    content: "At any time you may restrict the collection or use of personal information that is provided to our website. Each time you are asked to fill out a form, such as user registration, you can check or uncheck the option to receive information by email. In case you have checked the option to receive our newsletter or advertising, you can cancel it at any time.\nThis company will not sell, cede nor distribute personal information that is collected without your consent, unless required by a judge with a court order.\nDolphin Dive Baja reserves the right to change the terms of this Privacy Policy at any time."
                }
            ],
            footer: "Last updated: 2024"
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
        },
        cookies: {
            title: "Cookie Preferences",
            text: "We use our own and third-party cookies to ensure you have the best browsing experience in the Sea of Cortez.",
            link: "View Policy",
            accept: "Accept All",
            decline: "Necessary only"
        }
    }
};