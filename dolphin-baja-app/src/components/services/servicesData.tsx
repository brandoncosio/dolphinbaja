// src/components/services/servicesData.tsx
import React from 'react';

// ========================================================================
// 🖼️ IMPORTACIÓN DE IMÁGENES Y VIDEOS
// ========================================================================
import funDivesImg from '/assets/images/colash1.webp';
import nocturno from '/assets/contentD/img/nocturno.webp';
import coursesImg from '/assets/images/certificacionpadi.jpeg';
import isla from '/assets/contentD/img/recorridoisla.webp';
import experienciasImg from '/assets/images/experiencias.webp';
import bubbleImg from '/assets/images/bubblem.webp';
import leones from '/assets/contentD/img/leonesm.webp';
import carmen from '/assets/contentD/img/IslaCarmen.webp';
import danzantes from '/assets/contentD/img/IslaDanzantes.webp';

import colorFImg from '/assets/images/ColorF.webp';
import certImg from '/assets/images/cert.webp';
import cert2Img from '/assets/images/cert2.webp';
import cert3Img from '/assets/images/cert3.webp';
import cert4Img from '/assets/images/cert4.webp';

import dan1 from '/assets/contentD/img/dan1.webp';
import dan2 from '/assets/contentD/img/dan2.webp';
import car1 from '/assets/contentD/img/car1.webp';
import car2 from '/assets/contentD/img/car2.webp';

import fun1 from '/assets/contentD/img/fun1.webp';
import fun2 from '/assets/contentD/img/fun2.webm';
import fun3 from '/assets/contentD/img/fun3.webm';

import padiLogo from '/assets/contentD/img/PADI.png';
import cressiLogo from '/assets/contentD/img/cressi.png';

import cour1 from '/assets/contentD/img/cour1.webp';
import cour2 from '/assets/contentD/img/cour2.webp';
import cour3 from '/assets/contentD/img/cour3.webm';
import cour4 from '/assets/contentD/img/cour4.webm';
import cour5 from '/assets/contentD/img/cour5.webm';

import coro1 from '/assets/contentD/img/coro1.webp';
import coro2 from '/assets/contentD/img/coro2.webp';

// ========================================================================
// 🎞️ CONFIGURACIÓN DE CARRELES
// ========================================================================
const loretoReel = [funDivesImg, fun1];
const coronadoReel = [isla, coro1, coro2];
const nocturnoReel = [nocturno, fun2, fun3];

const bubbleReel = [bubbleImg, cour1];
const discoverReel = [colorFImg, cour2];
const openWaterReel = [coursesImg, cour3];
const advancedReel = [certImg, cour4];
const rescueReel = [cert2Img, cour5];

const carmenReel = [carmen, car1, car2];
const danzantesReel = [danzantes, dan1, dan2];

// ========================================================================
// 📦 EXPORTACIONES CENTRALIZADAS
// ========================================================================

// Exportamos logos y hero para que el componente principal los use
export const serviceAssets = {
    heroBg: funDivesImg,
    padiLogo,
    cressiLogo
};

export const imageDict: Record<string, string> = {
    funDivesImg, nocturno, coursesImg,
    isla, experienciasImg, bubbleImg, leones,
    carmen, danzantes,
    colorFImg, certImg, cert2Img, cert3Img, cert4Img
};

export const getCategoriesList = (lang: string) => [
    { id: 'paquetes', label: lang === 'es' ? 'Paquetes' : 'Packages', icon: 'ri-vip-crown-fill' },
    { id: 'fundives', label: 'Fun Dives', icon: 'ri-anchor-fill' },
    { id: 'cursos', label: lang === 'es' ? 'Cursos' : 'Courses', icon: 'ri-medal-fill' },
    { id: 'snorkel', label: 'Snorkel', icon: 'ri-sun-fill' }
];

export const generateGallery = (mainImg: string, type: 'dive' | 'snorkel' | 'course' | 'package') => {
    const fallbackGalleries = {
        dive: [mainImg, bubbleImg, leones, nocturno],
        snorkel: [mainImg, experienciasImg, isla, carmen],
        course: [mainImg, certImg, cert2Img, colorFImg],
        package: [mainImg, funDivesImg, danzantes, isla]
    };
    return Array.from(new Set(fallbackGalleries[type])).slice(0, 4);
};

// ========================================================================
// 📚 DATOS LOCALES (Motor de Traducción y Contenido)
// Recibe "actions" para separar la lógica de UI del contenido.
// ========================================================================
export const getServicesData = (lang: string, actions: { onNavigate: (id: string) => void }) => {
    const localData = {
        es: {
            hero: {
                tag: "Catálogo de Servicios",
                title: "Sumérgete en el",
                highlight: "Acuario del Mundo",
                desc: "Explora el Parque Nacional Bahía de Loreto.\nComo el único Centro de Buceo exclusivo PADI 5 Estrellas y Cressi Dive Center en la región, tu seguridad y disfrute son nuestra máxima prioridad."
            },
            paquetes: {
                title: "Paquetes de Buceo",
                subtitle: "Experiencias All-Inclusive",
                items: [
                    {
                        id: 'deep-blue', name: "Baja Ocean", target: "Para buzos certificados", duration: "5 Días", color: "cyan",
                        desc: "Disfruta 5 días espectaculares de buceo en el parque nacional bahía de loreto, explorando sitios increíbles llenos de vida y belleza natural. Te alojarás en uno de los mejores hoteles de loreto, donde te sentirás perfectamente bien atendido. Los desayunos están incluidos.",
                        features: ["Solo buzos certificados", "De 12 hasta 70 años", "5 días buceando (10 tanques)", "6 noches de hotel con desayuno incluído", "Transfer: aeropuerto - hotel - aeropuerto", "Vigencia: Julio a Octubre"],
                        note: "Mínimo 2 buzos"
                    },
                    {
                        id: 'blue-escape', name: "Blue Escape", target: "Para buzos certificados", duration: "3 Días", color: "ocean",
                        desc: "La escapada perfecta de fin de semana. Tres días intensos de inmersiones en las majestuosas aguas de Loreto, combinados con una estancia cómoda y relajante.",
                        features: ["De 12 hasta 70+ años", "3 días buceando (6 tanques)", "4 noches de hotel con desayuno incluído", "Transfer: aeropuerto - hotel - aeropuerto", "Válido de Julio a Octubre"],
                        note: "Mínimo 2 buzos"
                    },
                    {
                        id: 'beyond-surface', name: "Beyond the Surface", target: "Obtén tu PADI Open Water", duration: "4-5 Días", color: "yellow",
                        desc: "Conviértete en un buzo certificado con este paquete integral. Incluye toda tu teoría, inmersiones de práctica y certificación oficial PADI.",
                        features: [
                            "Repaso de teoría (eLearning completado)",
                            "Sesión en aguas confinadas",
                            "Ejercicios en Aguas Abiertas 1, 2, 3 y 4",
                            "+2 días extra de buceo (4 tanques)",
                            "Computadora de buceo Cressi",
                            "Total de 5 a 6 días"
                        ],
                        note: "Mínimo 2 buzos"
                    }
                ]
            },
            fundives: [
                {
                    title: "Parque Nacional Bahía de Loreto", duration: "Medio Día", imgKey: "funDivesImg", reel: loretoReel,
                    desc: (
                        <>
                            De camino a los sitios de buceo, podemos ver:<br />
                            • Delfines • Mantas Mobula • Peces voladores • Ballenas (por temporada) • Aves marinas, etc.<br /><br />
                            Durante el buceo veremos una gran diversidad de vida marina:<br />
                            • Corales duros y blandos (negro, californica, copa naranja y más)<br />
                            • Anémonas de tubo • Tortugas marinas • Anguilas • Tiburones de arrecife<br />
                            • El Pecio C-54 (30–80 pies de prof.) • Lobos marinos • Delfines<br />
                            • Grandes bancos de peces<br />
                            • Vida macro (nudibranquios, blenios, gobios, peces bocón, etc.)<br />
                            • ¡Y mucho más!<br /><br />
                            Buceos matutinos todo el año (8:00 - 13:00 hrs). Cita 7:30 AM en la tienda. Dos tanques en Coronados, Carmen o Danzantes.<br />
                            Buceos vespertinos (Junio–Octubre) de 14:00 PM a 18:00 PM.<br />
                            *Grupos pequeños: máximo 6 buzos por Dive Master.<br /><br />
                            Buzos solos: Intentaremos encontrarte un compañero. Si no, puedes reservar un tour privado a Coronados.<br />
                            *Nuestras tarifas se basan en pesos, el USD se ajustará según el tipo de cambio.<br />
                            💡 Las propinas no están incluidas - ¡gracias por apoyar a nuestro equipo!<br /><br />
                            Complementos Opcionales:<br />
                            • 3er tanque con costo extra (Julio–Octubre) min 2 pax<br />
                            • Tour privado con costo extra<br />
                            • Renta de lámparas disponible<br />
                            • Renta de computadora de buceo disponible<br /><br />
                            *Buceos nocturnos disponibles para buzos avanzados:
                            <button
                                onClick={() => actions.onNavigate('night-dive')}
                                className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-[9px] font-bold uppercase tracking-tighter hover:bg-cyan-200 transition-colors pointer-events-auto"
                            >
                                Ver Info <i className="ri-arrow-right-up-line"></i>
                            </button>
                        </>
                    ),
                    includes: ["Lunch, snacks, agua", "Tanques y plomos", "Tarifas del Parque Marino", "Requisito: Mínimo 2 buzos"]
                },
                {
                    title: "Isla Coronados", duration: "Medio Día", imgKey: "isla", reel: coronadoReel,
                    desc: "Es común avistar delfines, tortugas, mantarrayas, lobos marinos y aves marinas. La isla impresiona con sus formaciones de roca volcánica, creadas hace más de 125,000 años, y es hogar de garzas, gaviotas, cormoranes, pelícanos, águilas pescadoras y otras aves marinas. \nTambién encontrarás una amigable colonia de lobos marinos que reside allí todo el año (excepto de mediados de julio a mediados de agosto). \n10 SITIOS DE BUCEO PARA EXPLORAR EN ESTA ISLA\n\nREQUISITOS:\n-Buena salud\n-Saber nadar\n-Certificado de buceo\n-Edad: 12-70+ años\n❌ NO incluye equipo de buceo ni propinas para la tripulación.",
                    includes: ["Tarifas del Parque Marino", "Plomos y tanques", "Lunch, fruta y agua"]
                },
                {
                    title: "Night Dive (Buceo Nocturno)", duration: "18:00 - 21:00 hrs", imgKey: "nocturno", reel: nocturnoReel,
                    desc: "La actividad perfecta para ver el mar con otros ojos. Disponible solamente de julio a octubre. Solo para buzos avanzados.",
                    includes: ["1 o 2 tanques (según horario)", "Luz en el tanque", "Lunch y agua", "Plomos y tanques"]
                }
            ],
            cursos: [
                {
                    title: "Bubble Makers", duration: "2 - 3 hrs", imgKey: "bubbleImg", reel: bubbleReel,
                    desc: "Es una actividad diseñada especialmente para niños. NO ES UNA CERTIFICACIÓN. Inmersión máxima en aguas controladas de 2 a 4 metros.",
                    includes: ["Edad: 8 - 11 años", "1 Tanque", "Equipo completo incluido", "Mínimo 2 pax + 1 adulto responsable"]
                },
                {
                    title: "Discover Scuba (Introducción al Buceo)", duration: "Medio Día", imgKey: "colorFImg", reel: discoverReel,
                    desc: "Vivirás por primera vez la experiencia del buceo, dirigida por un Dive Master capacitado. NO ES UNA CERTIFICACIÓN. Inmersión máxima de 12 mts / 36 ft. El primer tanque es de explicación y el segundo de exploración.",
                    includes: ["Edad: 12 - 70+ años", "Corta clase teórica", "2 Tanques (Explicación y Exploración)", "Mínimo 2 pax"]
                },
                {
                    title: "Open Water Diver", duration: "Máx 3 Días", imgKey: "coursesImg", reel: openWaterReel,
                    desc: "Como el único PADI 5-Star y Cressi Dive Center en Loreto, haremos tu experiencia inolvidable. Repaso de teoría en salón de clases, seguido de ejercicios en aguas confinadas y aguas abiertas.",
                    includes: ["Edad: 12 - 70+ años", "Renta de equipo, lastre y tanques", "Lunch y agua", "Brazaletes del parque marino"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                            <h4 className="font-title text-lg text-navy dark:text-white mb-3">Cómo funciona la certificación</h4>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">1. Teoría (online – PADI eLearning):</p>
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                                        <li>Ve a store.padi.com y completa la teoría en línea.</li>
                                        <li>Al registrarte, selecciona nuestro dive shop: <strong className="text-navy dark:text-white">Dolphin Dive Center #20390</strong>.</li>
                                        <li>Una vez que te registres, recibiremos una notificación y nos prepararemos para guiarte en las sesiones prácticas en Loreto.</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">2. Entrenamiento Práctico (en Loreto):</p>
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                                        <li>Día 1: Sesión en salón de clases (3 horas)</li>
                                        <li>Día 2: Práctica en aguas confinadas + Inmersiones en Aguas Abiertas 1 & 2</li>
                                        <li>Día 3: Inmersiones en Aguas Abiertas 3 & 4</li>
                                    </ul>
                                </div>
                                <p className="text-sm italic text-slate-500 mt-2 border-t border-slate-200 dark:border-white/10 pt-3">
                                    Proporcionamos todo el equipo de buceo, además de lunch, fruta, snacks y tarifas del parque marino todos los días.
                                </p>
                            </div>
                        </div>
                    )
                },
                {
                    title: "Advanced Open Water", duration: "2 - 3 Días", imgKey: "certImg", reel: advancedReel,
                    desc: "¿Ya eres un buzo certificado? Es hora de expandir tus habilidades y explorar nuevas profundidades con el Curso PADI Advanced Open Water. ¡Experimenta nuevas aventuras, gana confianza y descubre el océano de una manera completamente nueva!",
                    includes: ["Edad: 12 - 70+ años", "5 Inmersiones en total", "Lunch y agua", "Solo buzos certificados"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                            <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-compass-3-fill text-cyan-600"></i> Resumen del Curso</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">Para unirte, debes haber completado tu Certificación PADI Open Water. Recomendamos tener al menos 20 inmersiones registradas para sentirte más cómodo.</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Nuestro programa funciona de <strong className="text-cyan-600 dark:text-cyan-400">Mayo a Octubre</strong>, cuando el océano ofrece la mejor visibilidad y condiciones más tranquilas.</p>
                            </div>
                            <div className="pt-1">
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-star-smile-fill text-yellow-500"></i> Qué Aprenderás</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">Completarás cinco inmersiones de aventura diseñadas para mejorar tus habilidades de buceo.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-bold text-sm text-cyan-700 dark:text-cyan-400 mb-1">Inmersiones Obligatorias:</p>
                                        <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                                            <li>Buceo Profundo</li>
                                            <li>Navegación Subacuática</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-cyan-700 dark:text-cyan-400 mb-1">Elige Tres Opciones:</p>
                                        <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                                            <li>Flotabilidad Avanzada</li>
                                            <li>Buceo en Naufragio</li>
                                            <li>Buceo a la Deriva</li>
                                            <li>Buceo Nocturno</li>
                                            <li>Dive Against Debris</li>
                                            <li>Búsqueda y Recuperación</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    title: "Rescue Diver", duration: "3 - 4 Días", imgKey: "cert2Img", reel: rescueReel,
                    desc: "Desafiante y gratificante. Aprende a prevenir y manejar emergencias en el agua. Desarrolla tu confianza como buzo practicando escenarios de rescate reales.",
                    includes: ["Edad: 12 - 70+ años", "Prácticas de rescate", "Equipo y tanques", "Lunch y agua"]
                }
            ],
            snorkel: [
                {
                    title: "Tour a Isla del Carmen", duration: "Medio Día", imgKey: "carmen", reel: carmenReel,
                    desc: "La isla más grande del Parque. Sus impresionantes acantilados, una mezcla de arena fosilizada, roca volcánica y basalto, te dejarán maravillado; además de contar con cuevas que deslumbrarán tus sentidos.",
                    includes: ["Edad: 12 - 70+ años", "Paseo en lancha y Guía", "Equipo de Snorkel", "Lunch y bebidas"]
                },
                {
                    title: "Tour a Islas Danzantes", duration: "Medio Día", imgKey: "danzantes", reel: danzantesReel,
                    desc: "Nombrada por las danzas ancestrales de los Guaycuras. Cuenta con impresionantes formaciones rocosas en forma de pináculo y una formación similar a una ventana con ángulos perfectos de 90°.",
                    includes: ["Edad: 12 - 70+ años", "Paseo en lancha y Guía", "Equipo de Snorkel", "Lunch y bebidas"]
                }
            ]
        },
        en: {
            hero: {
                tag: "Services Catalog",
                title: "Dive into the Aquarium",
                highlight: "of the World With Dolphin Dive Baja",
                desc: "Explore the Loreto Bay National Park.\nAs the only exclusive PADI 5-Star Dive Center & Cressi Dive Center in the region, your safety and enjoyment are our top priorities."
            },
            paquetes: {
                title: "Dive Packages",
                subtitle: "All-Inclusive Experiences",
                items: [
                    {
                        id: 'deep-blue', name: "Baja Ocean", target: "For certified divers", duration: "5 Days", color: "cyan",
                        desc: "Enjoy 5 spectacular days of diving in the Loreto Bay National Park, exploring breathtaking sites teeming with life and natural beauty. You will stay at one of Loreto's premier hotels, where you will receive exceptional service. Breakfast is included.",
                        features: ["Certified divers only", "Ages 12 to 70", "5 days of diving (10 tanks)", "6 hotel nights with breakfast included", "Transfer: Airport - Hotel - Airport", "Valid: July to October"],
                        note: "Minimum 2 divers"
                    },
                    {
                        id: 'blue-escape', name: "Blue Escape", target: "For certified divers", duration: "3 Days", color: "ocean",
                        desc: "The perfect weekend getaway. Three intense days of diving in the majestic waters of Loreto, combined with a comfortable and relaxing stay.",
                        features: ["Ages 12 to 70+", "3 days diving (6 tanks)", "4 nights hotel with breakfast included", "Transfer: Airport - Hotel - Airport", "Valid: July - October"],
                        note: "Minimum 2 divers"
                    },
                    {
                        id: 'beyond-surface', name: "Beyond the Surface", target: "Get your PADI Open Water", duration: "4-5 Days", color: "yellow",
                        desc: "Become a certified diver with this comprehensive package. Includes all your theory, practice dives, and official PADI certification.",
                        features: ["Theory review (Have done the eLearning)", "Confined Waters", "Open Waters exercises 1, 2, 3 & 4", "+2 extra days diving (4 tanks)", "Cressi Dive Computer", "Total Days 5-6"],
                        note: "Minimum 2 divers"
                    }
                ]
            },
            fundives: [
                {
                    title: "Loreto Bay National Park", duration: "Half Day", imgKey: "funDivesImg", reel: loretoReel,
                    desc: (
                        <>
                            On our way to the dive sites, we can see:<br />
                            • Dolphins • Mobula rays • Flying fish • Whales (seasonal) • Sea birds, etc.<br /><br />
                            While diving we can see a lot of sea life diversity:<br />
                            • Hard & soft corals (black, californica, orange cup, and more)<br />
                            • Tube anemones • Sea turtles • Eels • Reef sharks<br />
                            • Wreck C-54 (30–80 ft. deep) • Sea lions • Dolphins<br />
                            • Large schools of fish<br />
                            • Macro life (nudibranchs, blennies, gobies, jawfishes, etc.)<br />
                            • & much more!!<br /><br />
                            Morning dives all year (8:00 - 13:00 hrs). Meet at 7:30 AM at the shop. Two tanks in Coronados, Carmen, or Danzantes.<br />
                            Afternoon dives (June–October) from 2:00 PM to 6:00 PM.<br />
                            *Groups are small: 6 divers maximum per Dive Master.<br /><br />
                            Solo diver: We’ll try to find you a buddy. If not, you can book a private tour to Coronados.<br />
                            *Our rates are based on pesos, the USD adjusts depending on the exchange rate.<br />
                            💡 Gratuities are not included - thank you for supporting our crew!<br /><br />
                            Optional Add-ons:<br />
                            • 3rd tank extra fee (July–October) min 2 pax<br />
                            • Private tour extra fee<br />
                            • Torch rental available<br />
                            • Dive computer available<br /><br />
                            *Night dives available for advanced divers:
                            <button
                                onClick={() => actions.onNavigate('night-dive')}
                                className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-[9px] font-bold uppercase tracking-tighter hover:bg-cyan-200 transition-colors pointer-events-auto"
                            >
                                See Info <i className="ri-arrow-right-up-line"></i>
                            </button>
                        </>
                    ),
                    includes: ["Lunch, snacks, water", "Tanks and weights", "Marine Park fees", "Requirements: Min 2 divers"]
                },
                {
                    title: "Coronados Island", duration: "Half Day", imgKey: "isla", reel: coronadoReel,
                    desc: "It’s common to spot dolphins, turtles, rays, sea lions, & sea birds. The island impresses with its volcanic rock formations, created more than 125,000 years ago, and is home to herons, seagulls, cormorants, pelicans, ospreys, and other sea birds. \nYou’ll also encounter a friendly sea lion colony that resides there year-round. (except mid July to mid august). \n10 DIVE SITES TO EXPLORE  IN THIS ISLAND\n\nREQUERIMENTS:\n-Good Health\n-Know how to swim\n-Dive Certificate\n-Age 12-70+ years old\n❌ NOT included Dive Gear, and Gratuities for the crew.",
                    includes: ["Marine Park fees", "Weights & Tanks", "Lunch, fruit, water"]
                },
                {
                    title: "Night Dive", duration: "18:00 - 21:00 hrs", imgKey: "nocturno", reel: nocturnoReel,
                    desc: "Discover the magic of the sea at night. Only available from July to October. Advanced divers only.",
                    includes: ["1 or 2 tanks (by schedule)", "Tank light included", "Lunch and water", "Tanks and weights"]
                }
            ],
            cursos: [
                {
                    title: "Bubble Makers", duration: "2 - 3 hrs", imgKey: "bubbleImg", reel: bubbleReel,
                    desc: "Activity designed specially for kids. NOT A CERTIFICATION. Max depth in confined waters is 2 to 4 meters.",
                    includes: ["Ages: 8 - 11 years", "1 Tank", "Full gear included", "Min 2 pax + 1 responsible adult"]
                },
                {
                    title: "Discover Scuba (Intro Dive)", duration: "Half Day", imgKey: "colorFImg", reel: discoverReel,
                    desc: "Experience diving for the first time, guided by a trained Dive Master. NOT A CERTIFICATION. Max depth 12m / 36ft. First tank for explanation, second for exploration.",
                    includes: ["Ages: 12 - 70+ years", "Short theory class", "2 Tanks (Explanation & Exploration)", "Min 2 pax"]
                },
                {
                    title: "Open Water Diver", duration: "Max 3 Days", imgKey: "coursesImg", reel: openWaterReel,
                    desc: "As the only PADI 5-Star & Cressi Dive Center in Loreto, we make your experience unforgettable. Classroom theory review, followed by confined and open water exercises.",
                    includes: ["Ages: 12 - 70+ years", "Gear, weights, and tanks", "Lunch and water", "Marine park bracelets"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                            <h4 className="font-title text-lg text-navy dark:text-white mb-3">How the Certification Works</h4>
                            <div className="space-y-4">
                                <div>
                                    <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">1. Theory (online – PADI eLearning):</p>
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                                        <li>Go to store.padi.com and complete the theory online.</li>
                                        <li>When registering, select our dive shop: <strong className="text-navy dark:text-white">Dolphin Dive Center #20390</strong>.</li>
                                        <li>Once you register, we’ll receive a notification and get ready to guide you through the practical sessions in Loreto with Dolphin Dive Baja.</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">2. Practical Training (in Loreto):</p>
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                                        <li>Day 1: Classroom session (3 hours)</li>
                                        <li>Day 2: Practical training sessions.</li>
                                        <li>Day 3: Open Water Dives 3 & 4</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    title: "Advanced Open Water", duration: "2 - 3 Days", imgKey: "certImg", reel: advancedReel,
                    desc: "Already a certified diver? It’s time to expand your skills and explore new depths with the PADI Advanced Open Water Course at Dolphin Dive Center. Experience new adventures, build confidence, and discover the ocean in a whole new way!",
                    includes: ["Ages: 12 - 70+ years", "5 total dives", "Lunch and water", "Certified divers only"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                            <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-compass-3-fill text-cyan-600"></i> Course Overview</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">To join, you must have completed your PADI Open Water Certification. We recommend having at least 20 logged dives to help you feel more comfortable and get the most out of the course.</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Our program runs from <strong className="text-cyan-600 dark:text-cyan-400">May to October</strong>, when the ocean offers the best visibility and calm conditions.</p>
                            </div>
                            <div className="pt-1">
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-star-smile-fill text-yellow-500"></i> What You’ll Learn</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">You’ll complete five adventure dives designed to enhance your diving skills and open new opportunities underwater.</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <p className="font-bold text-sm text-cyan-700 dark:text-cyan-400 mb-1">Mandatory Dives:</p>
                                        <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                                            <li>Deep Diving</li>
                                            <li>Underwater Navigation</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm text-cyan-700 dark:text-cyan-400 mb-1">Choose Three:</p>
                                        <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                                            <li>Peak Performance Buoyancy</li>
                                            <li>Wreck Dive</li>
                                            <li>Drift Dive</li>
                                            <li>Night Dive</li>
                                            <li>Dive Against Debris</li>
                                            <li>Search & Recovery</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    title: "Rescue Diver", duration: "3 - 4 Days", imgKey: "cert2Img", reel: rescueReel,
                    desc: "Challenging and rewarding. Learn to prevent and manage emergencies in the water. Build your confidence by practicing real rescue scenarios.",
                    includes: ["Ages: 12 - 70+ years", "Rescue practices", "Gear and tanks", "Lunch and water"]
                }
            ],
            snorkel: [
                {
                    title: "Isla del Carmen Tour", duration: "Half Day", imgKey: "carmen", reel: carmenReel,
                    desc: "The largest island in the park. Its impressive cliffs—a mix of fossilized sand, volcanic rock, and basalt—will leave you amazed, along with caves that will dazzle your senses.",
                    includes: ["Ages: 12 - 70+ years", "Boat ride & Guide", "Snorkel Gear", "Lunch & drinks"]
                },
                {
                    title: "Danzantes Island Tour", duration: "Half Day", imgKey: "danzantes", reel: danzantesReel,
                    desc: "Named after ancestral Guaycura dances. Features impressive pinnacle-shaped rock formations and a window-like rock formation with perfect 90° angles.",
                    includes: ["Ages: 12 - 70+ years", "Boat ride & Guide", "Snorkel Gear", "Lunch & drinks"]
                }
            ]
        }
    };

    return localData[lang === 'en' ? 'en' : 'es'];
};

// ========================================================================
// 🛠️ INTERFACES DE TYPESCRIPT
// ========================================================================
export type TabKey = 'fundives' | 'cursos' | 'snorkel';

export interface ServiceItem {
    title: string;
    duration: string;
    desc: string | React.ReactNode;
    includes: string[];
    imgKey: string;
    reel?: string[];
    extraContent?: React.ReactNode;
}

export interface ModalData {
    title: string;
    desc: string | React.ReactNode;
    duration?: string;
    includes: string[];
    images: string[];
    extraContent?: React.ReactNode;
    footerContent?: React.ReactNode;
}