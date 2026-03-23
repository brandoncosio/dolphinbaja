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
const generalSnorkelReel = [experienciasImg, carmen, danzantes, isla, car1, dan1]; // Carrusel fusionado

// ========================================================================
// 📦 EXPORTACIONES CENTRALIZADAS
// ========================================================================
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
    { id: 'intro', label: lang === 'es' ? 'Intro al Buceo' : 'Intro to Diving', icon: 'ri-lifebuoy-fill' },
    { id: 'cursos', label: lang === 'es' ? 'Cursos PADI' : 'PADI Courses', icon: 'ri-medal-fill' },
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
                        desc: "Disfruta 5 días espectaculares de buceo en el parque nacional bahía de loreto, explorando sitios increíbles llenos de vida y belleza natural. Te alojarás en uno de los mejores hoteles de loreto, donde te sentirás perfectamente bien atendido. Los desayunos están incluidos.\n\nRequisitos: 12-70+ años, certificado de buceo.",
                        features: ["Solo buzos certificados", "5 días buceando (10 tanques)", "6 noches de hotel con desayuno incluído", "Transfer: aeropuerto - hotel - aeropuerto", "Vigencia: Julio a Octubre"],
                        note: "Mínimo 2 buzos"
                    },
                    {
                        id: 'blue-escape', name: "Blue Escape", target: "Para buzos certificados", duration: "3 Días", color: "ocean",
                        desc: "La escapada perfecta de fin de semana. Tres días intensos de inmersiones en las majestuosas aguas de Loreto, combinados con una estancia cómoda y relajante.\n\nRequisitos: 12-70+ años, certificado de buceo.",
                        features: ["3 días buceando (6 tanques)", "4 noches de hotel con desayuno incluído", "Transfer: aeropuerto - hotel - aeropuerto", "Válido de Julio a Octubre"],
                        note: "Mínimo 2 buzos"
                    },
                    {
                        id: 'beyond-surface', name: "Beyond the Surface", target: "Obtén tu PADI Open Water", duration: "4-5 Días", color: "yellow",
                        desc: "Conviértete en un buzo certificado con este paquete integral. Incluye toda tu teoría, inmersiones de práctica y certificación oficial PADI.\n\nRequisitos: 12-70+ años, saber nadar, buena salud.",
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
                            <span className="font-bold text-cyan-600 block mb-2">SI NO HAS BUCEADO EN MÁS DE 1 AÑO - POR TU SEGURIDAD TE RECOMENDAMOS UN REFRESH.</span>
                            De camino a los sitios de buceo, podemos ver:<br />
                            • Delfines • Mantas Mobula • Peces voladores • Ballenas (por temporada), etc.<br /><br />
                            Durante las inmersiones podemos ver gran diversidad de vida marina:<br />
                            • Corales duros y blandos (negro, californica, copa naranja y muchos más) • Anémonas tubulares • Tortugas marinas • Anguilas • Tiburones de arrecife • Pecio C-54 (9–24 m de profundidad) • Lobos marinos • Delfines • Grandes cardúmenes • Vida macro (nudibranquios, blénidos, gobios, jawfishes, etc.) • ¡y mucho más!<br /><br />
                            Buceos matutinos todo el año (8:00 - 13:00 hrs). Cita 7:30 AM en la tienda. Dos tanques en Coronados, Carmen o Danzantes.<br />
                            Buceos vespertinos (Junio–Octubre) de 14:00 PM a 18:00 PM.<br />
                            *Grupos pequeños: máximo 6 buzos por Dive Master.<br /><br />
                            Buzos solos: Intentaremos encontrarte un compañero. Si no, puedes reservar un tour privado a Coronados.<br />
                            *Nuestras tarifas se basan en pesos, el USD se ajustará según el tipo de cambio.<br />
                            Complementos Opcionales:<br />
                            • 3er tanque con costo extra (Julio–Octubre) min 2 pax<br />
                            • Tour privado con costo extra<br />
                            • Renta de lámparas y computadora de buceo disponible<br /><br />
                            *Buceos nocturnos disponibles para buzos avanzados:
                            <button onClick={() => actions.onNavigate('night-dive')} className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-[9px] font-bold uppercase tracking-tighter hover:bg-cyan-200 transition-colors pointer-events-auto">
                                Ver Info <i className="ri-arrow-right-up-line"></i>
                            </button>
                        </>
                    ),
                    includes: ["2 tanques (3er opcional con costo extra)", "Plomos y tanques", "Lunch, fruta, agua", "Requisitos: 12-70+ años, certificado de buceo", "❌ NO incluye propinas al guía y capitán"]
                },
                {
                    title: "Isla Coronados", duration: "Medio Día", imgKey: "isla", reel: coronadoReel,
                    desc: "La isla impresiona con sus formaciones de roca volcánica, creadas hace más de 125,000 años, y es hogar de garzas, gaviotas, cormoranes, pelícanos, águilas pescadoras y otras aves marinas.\nTambién encontrarás una amigable colonia de lobos marinos que reside allí todo el año (excepto de mediados de julio a mediados de agosto).\n\n10 SITIOS DE BUCEO PARA EXPLORAR EN ESTA ISLA\n\nREQUISITOS:\n- Buena salud\n- Saber nadar\n- Certificado de buceo\n- Edad: 12-70+ años\n❌ NO incluye equipo de buceo ni propinas para la tripulación.",
                    includes: ["Tarifas del Parque Marino", "Plomos y tanques", "Lunch, fruta y agua"]
                },
                {
                    title: "Buceo en Isla del Carmen", duration: "5 - 6 hrs", imgKey: "carmen", reel: carmenReel,
                    desc: "Tour de 5-6 horas con viaje en lancha de aprox. 45 min. En el camino, podrás ver delfines, aves marinas, rayas y más. Sus impresionantes acantilados —una mezcla de arena fosilizada, roca volcánica, basalto y más— te dejarán maravillado; también hay cuevas en la superficie que deslumbrarán tus sentidos.\n\nEs la isla más larga (casi 30 km de longitud) con 18 sitios de buceo en el norte, sur y oeste. Buceos desde principiantes a avanzados. Tenemos sitios para todos los niveles de certificación.\n\nREQUISITOS:\n- Buena salud y saber nadar\n- Certificado de buceo\n- Edad: 12-70+ años",
                    includes: ["Tarifas del Parque Marino", "Lunch, fruta, agua", "Plomos y tanques", "❌ NO incluye: Equipo de buceo, Propinas"]
                },
                {
                    title: "Buceo en Islas Danzantes", duration: "5 - 6 hrs", imgKey: "danzantes", reel: danzantesReel,
                    desc: "Tour de 5-6 horas con viaje en lancha de 40 min. En el camino podrás encontrar delfines, rayas, aves marinas y más.\n\nLa Isla de los Danzantes, nombrada así por las tradiciones ancestrales de los Guaycuras. Cuenta con impresionantes formaciones rocosas en forma de pináculo y una formación similar a una ventana con ángulos rectos de 90°. Podemos hacer una parada en alguna de las playas cercanas para disfrutar la vista mientras comemos.\n\nREQUISITOS:\n- Buena salud y saber nadar\n- Certificado de buceo\n- Edad: 12-70+ años",
                    includes: ["Tarifas del Parque Marino", "Lunch, fruta, agua", "Plomos y tanques", "❌ NO incluye: Equipo de buceo, Propinas"]
                },
                {
                    title: "Night Dive (Buceo Nocturno)", duration: "18:00 - 21:00 hrs", imgKey: "nocturno", reel: nocturnoReel, hideBookNow: true,
                    desc: "Los buceos nocturnos siempre son fascinantes, ya que nos permiten descubrir un comportamiento completamente distinto en las mismas especies que observamos durante el día: algunos descansan, otros salen de cacería y muchos se ocultan para evitar a sus depredadores.\nEsta actividad está dirigida a buzos avanzados que cuenten con la especialidad de buceo nocturno.\nVen y disfruta con nosotros de esta increíble aventura bajo el mar.",
                    includes: [],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                            <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-moon-fill text-cyan-600"></i> ONLY FOR ADVANCED DIVERS</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                                <li>Night dive (Julio–Octubre, solo buzos avanzados): 1 inmersión de tarde + 1 inmersión nocturna (4:00–8:00 PM) min 2 pax.</li>
                                <li>Night dive 1 tanque (Julio-Octubre, solo buzos avanzados).</li>
                            </ul>
                            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                                <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">Incluye:</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Tarifas del parque marino, lunch, fruta, agua, plomos y tanques, luz química para el chaleco.</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                                <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">Requisitos:</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Buena salud, saber nadar, certificación avanzada con aventura nocturna, 12-70+ años.</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                                <p className="font-bold text-red-500 dark:text-red-400 mb-1">No Incluye:</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Equipo de buceo, propinas para la tripulación. Lámparas disponibles para renta.</p>
                            </div>
                        </div>
                    )
                },
                {
                    title: "Scuba Refresh Program", duration: "Medio Día", imgKey: "colorFImg", reel: discoverReel,
                    desc: "Si no has buceado en más de 1 año, por tu seguridad te recomendamos realizar nuestro programa Refresher. Completarás un repaso teórico en PADI.com (registrando nuestra tienda Dolphin Dive Baja #20390) y pagarás una tarifa directamente a PADI.\n\n• 1er tanque: Repaso de habilidades básicas.\n• 2do tanque: Inmersión de exploración guiada.\n\nREQUISITOS: Edad 12-70+ años, saber nadar, certificado médico y buena condición de salud.",
                    includes: ["Repaso teórico y práctico en el agua", "Equipo completo"]
                }
            ],
            intro: [
                {
                    title: "Introducción al Buceo (Discover Scuba)", duration: "Medio Día", imgKey: "colorFImg", reel: discoverReel,
                    desc: "El Discover Scuba Dive es una experiencia introductoria diseñada para aquellos que desean explorar el mundo submarino sin necesidad de certificación previa. El único requisito es saber nadar. Es una actividad apta desde los 12 años.\n\nDurante la actividad, realizarás dos inmersiones:\n• 1ra inmersión (instrucción): Aprenderás a usar el equipo y te familiarizarás con él.\n• 2da inmersión (exploración): Disfruta de una inmersión guiada a una profundidad máxima de 12 metros.\n\nREQUISITOS: 12-70+ años, saber nadar, certificado médico, buena salud.",
                    includes: ["Clase teórica corta", "Instrucción personalizada", "Renta completa de equipo", "Lunch, snacks y bebidas", "Brazalete del Parque Marino", "Mínimo 2 pax"]
                },
                {
                    title: "Bubble Makers", duration: "2 - 3 hrs", imgKey: "bubbleImg", reel: bubbleReel,
                    desc: "Es una actividad diseñada especialmente para niños.\nNO ES UNA CERTIFICACIÓN.\nInmersión máxima en aguas controladas de 2 a 4 metros.\n\nREQUISITOS: Edad de 8 a 11 años, buena salud, saber nadar.",
                    includes: ["1 Tanque", "Equipo completo incluido", "Mínimo 2 pax + 1 adulto responsable"]
                }
            ],
            cursos: [
                {
                    title: "Open Water Diver", duration: "Máx 3 Días", imgKey: "coursesImg", reel: openWaterReel, hideBookNow: true,
                    desc: "Estamos encantados de que quieras descubrir el mundo submarino con Dolphin Dive Baja. Como el único Centro de Buceo PADI 5 Estrellas y Centro Cressi en Loreto, estamos aquí para hacer tu experiencia verdaderamente inolvidable.\n\nPorque tu seguridad y diversión son nuestras prioridades, recomendamos planificar tu certificación entre Junio y Octubre—cuando las aguas de Loreto están más tranquilas, creando las condiciones perfectas para bucear.\n\nREQUISITOS OBLIGATORIOS:\n- 12 a 70+ años\n- Saber nadar\n- Certificado médico\n- Estar en buena condición de salud",
                    includes: ["Renta de equipo, lastre y tanques", "Lunch y agua", "Brazaletes del parque marino", "❌ Propinas no incluidas"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-5">
                            <div className="pt-2">
                                <h4 className="font-title text-lg text-navy dark:text-white mb-3">Cómo funciona la certificación</h4>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">1. Teoría (online – PADI eLearning):</p>
                                        <ul className="list-disc pl-5 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                                            <li>Ve a store.padi.com y completa la teoría en línea.</li>
                                            <li>Al registrarte, selecciona nuestro dive shop: <strong className="text-navy dark:text-white">Dolphin Dive Center #20390</strong>.</li>
                                            <li>Una vez que te registres, recibiremos una notificación y nos prepararemos para guiarte en las sesiones prácticas.</li>
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
                                </div>
                            </div>
                        </div>
                    )
                },
                {
                    title: "Advanced Open Water", duration: "2 - 3 Días", imgKey: "certImg", reel: advancedReel,
                    desc: "¿Ya eres un buzo certificado? Es hora de expandir tus habilidades y explorar nuevas profundidades con el Curso PADI Advanced Open Water. ¡Experimenta nuevas aventuras, gana confianza y descubre el océano de una manera completamente nueva!\n\nREQUISITOS: 12-70+ años, saber nadar, certificado médico, buena salud, certificación Open Water.",
                    includes: ["5 Inmersiones en total", "Lunch y agua"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                            <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-compass-3-fill text-cyan-600"></i> Resumen del Curso</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">Para unirte, debes haber completado tu Certificación PADI Open Water. Recomendamos tener al menos 20 inmersiones registradas para sentirte más cómodo.</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Nuestro programa funciona de <strong className="text-cyan-600 dark:text-cyan-400">Mayo a Octubre</strong>.</p>
                            </div>
                            <div className="pt-1">
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-star-smile-fill text-yellow-500"></i> Qué Aprenderás</h4>
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
                    desc: "Lleva tu aventura bajo el mar al siguiente nivel 🌊\nEl curso Rescue Diver es una de las experiencias más gratificantes del buceo. No solo mejorarás tu confianza, sino que también aprenderás a cuidar de ti y de los demás mientras disfrutas del océano.\nA través de ejercicios dinámicos y escenarios reales, desarrollarás habilidades para prevenir y manejar situaciones de emergencia de forma tranquila y efectiva.\nAprenderás técnicas de rescate, uso de equipo especializado desde embarcación y cómo resolver pequeños imprevistos… todo en un ambiente divertido y lleno de aprendizaje.\n\nREQUISITOS:\n• Certificación PADI Advanced Open Water\n• Certificación EFR vigente (últimos 24 meses)\n• 12-70+ años, buena salud, certificado médico.",
                    includes: ["Prácticas de rescate", "Equipo y tanques", "Lunch y agua"]
                },
                {
                    title: "Curso EFR (Emergency First Response®️)", duration: "1 Día", imgKey: "colorFImg", reel: discoverReel,
                    desc: "Prepárate para actuar cuando más importa 🚑\nEl curso te brinda las habilidades y la confianza necesarias para responder ante situaciones de emergencia, tanto dentro como fuera del agua. Aprenderás qué hacer en esos momentos críticos entre que ocurre un incidente y llega la ayuda profesional.\nA través de prácticas guiadas, desarrollarás técnicas esenciales como RCP, primeros auxilios y evaluación de lesiones.\n\nEste curso es accesible para todos, sin necesidad de experiencia previa. Además, es un requisito para las certificaciones Rescue Diver y Divemaster.",
                    includes: ["Teoría en línea a través de PADI", "Sesión práctica en tienda (aprox. 4 horas)"]
                },
                {
                    title: "Divemaster", duration: "A consultar", imgKey: "coursesImg", reel: openWaterReel,
                    desc: "Convierte tu pasión en tu carrera profesional. El curso PADI Divemaster es tu primer paso en el mundo del buceo profesional. Trabajarás estrechamente con un instructor PADI para perfeccionar tus habilidades de buceo, afinar tus habilidades de rescate y obtener conocimientos teóricos de nivel profesional.\n\nAprenderás a guiar a buceadores certificados y asistir en el entrenamiento de nuevos buceadores.",
                    includes: ["Entrenamiento profesional intensivo", "Prácticas reales guiando buzos", "Consulta requisitos completos por correo"]
                }
            ],
            snorkel: [
                {
                    title: "Snorkeling en el Parque Nacional Bahía de Loreto", duration: "Medio Día", imgKey: "carmen", reel: generalSnorkelReel,
                    desc: "Loreto es uno de los mejores lugares en el mundo para hacer snorkel. Somos parte de un Área Natural Protegida de más de 206,000 hectáreas, rodeada por cinco espectaculares islas.\nNuestros tours visitan tres de las cinco islas del Parque Marino (una por día), donde hay más de 30 increíbles sitios de snorkel para explorar. Dependiendo de las condiciones del clima, confirmaremos a cuál de las tres islas iremos: Coronados, Carmen o Danzantes.\n\n💦 Qué Esperar:\n• Grupos pequeños (máx 6-8 personas) para una experiencia personalizada.\n• Lugares impresionantes que te harán sentir en otro mundo.\n• Guía naturalista bilingüe y capitán.\n• Lanchas tipo panga con asientos acolchados y sombra.\n\nREQUISITOS: 12-70+ años, saber nadar, buena salud.",
                    includes: ["Lunch, snacks, fruta fresca y bebidas", "Tarifas del Parque Marino", "❌ NO incluye: Equipo de snorkel ni traje de neopreno (disponibles para renta)"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-6">
                            <div>
                                <h4 className="font-title text-xl text-cyan-600 dark:text-cyan-400 mb-2">Isla Coronados</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Tour de 4–5 horas. Viaje en lancha de 25 min. Es común avistar delfines, tortugas, rayas, lobos marinos y aves. La isla impresiona con sus formaciones volcánicas y alberga una amigable colonia de lobos marinos (excepto de mediados de julio a mediados de agosto). Después pararemos en una playa de arena blanca para relajarnos y comer.</p>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <h4 className="font-title text-xl text-cyan-600 dark:text-cyan-400 mb-2">Isla del Carmen</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Tour de 5–6 horas. Viaje en lancha de 45 min. Sus impresionantes acantilados y cuevas deslumbrarán tus sentidos. Exploraremos playas hermosas y con suerte veremos borrego cimarrón. Comeremos en una playa de arena blanca cercana.</p>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <h4 className="font-title text-xl text-cyan-600 dark:text-cyan-400 mb-2">Islas Danzantes</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Tour de 5–6 horas. Viaje en lancha de 40 min. Nombrada por las danzas ancestrales de los Guaycuras. Destaca por sus pináculos de roca y una famosa formación en forma de ventana. Disfrutaremos el lunch en una de sus hermosas bahías.</p>
                            </div>
                        </div>
                    )
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
                        desc: "Enjoy 5 spectacular days of diving in the Loreto Bay National Park, exploring breathtaking sites teeming with life and natural beauty. You will stay at one of Loreto's premier hotels, where you will receive exceptional service. Breakfast is included.\n\nRequirements: 12-70+ years old, dive certificate.",
                        features: ["Certified divers only", "5 days of diving (10 tanks)", "6 hotel nights with breakfast included", "Transfer: Airport - Hotel - Airport", "Valid: July to October"],
                        note: "Minimum 2 divers"
                    },
                    {
                        id: 'blue-escape', name: "Blue Escape", target: "For certified divers", duration: "3 Days", color: "ocean",
                        desc: "The perfect weekend getaway. Three intense days of diving in the majestic waters of Loreto, combined with a comfortable and relaxing stay.\n\nRequirements: 12-70+ years old, dive certificate.",
                        features: ["3 days diving (6 tanks)", "4 nights hotel with breakfast included", "Transfer: Airport - Hotel - Airport", "Valid: July - October"],
                        note: "Minimum 2 divers"
                    },
                    {
                        id: 'beyond-surface', name: "Beyond the Surface", target: "Get your PADI Open Water", duration: "4-5 Days", color: "yellow",
                        desc: "Become a certified diver with this comprehensive package. Includes all your theory, practice dives, and official PADI certification.\n\nRequirements: 12-70+ years old, good health, know how to swim.",
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
                            <span className="font-bold text-cyan-600 block mb-2">IF YOU HAVEN'T DIVED IN OVER A YEAR - FOR YOUR SAFETY WE RECOMMEND A REFRESH.</span>
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
                            Optional Add-ons:<br />
                            • 3rd tank extra fee (July–October) min 2 pax<br />
                            • Private tour extra fee<br />
                            • Torch and dive computer rental available<br /><br />
                            *Night dives available for advanced divers:
                            <button onClick={() => actions.onNavigate('night-dive')} className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-[9px] font-bold uppercase tracking-tighter hover:bg-cyan-200 transition-colors pointer-events-auto">
                                See Info <i className="ri-arrow-right-up-line"></i>
                            </button>
                        </>
                    ),
                    includes: ["2 tanks (3rd optional extra)", "Tanks and weights", "Lunch, fruit, water", "Requirements: 12-70+ years old, dive certificate", "❌ Gratuities are not included - thank you for supporting our crew!"]
                },
                {
                    title: "Coronados Island", duration: "Half Day", imgKey: "isla", reel: coronadoReel,
                    desc: "It’s common to spot dolphins, turtles, rays, sea lions, & sea birds. The island impresses with its volcanic rock formations, created more than 125,000 years ago, and is home to herons, seagulls, cormorants, pelicans, ospreys, and other sea birds. \nYou’ll also encounter a friendly sea lion colony that resides there year-round. (except mid July to mid august). \n\n10 DIVE SITES TO EXPLORE IN THIS ISLAND\n\nREQUERIMENTS:\n- Good Health & know how to swim\n- Dive Certificate\n- Age 12-70+ years old\n❌ NOT included Dive Gear, and Gratuities for the crew.",
                    includes: ["Marine Park fees", "Weights & Tanks", "Lunch, fruit, water"]
                },
                {
                    title: "Carmen Island Dive", duration: "5 - 6 hrs", imgKey: "carmen", reel: carmenReel,
                    desc: "A 5–6 hour tour with an approximately 45-minute boat ride. Along the way, you may spot dolphins, seabirds, rays & more. Its impressive cliffs —a mix of fossilized sand, volcanic rock, basalt, and more— will leave you amazed; there are also on surface some caves that make the landscape a place sure to dazzle your senses.\n\nLONGEST ISLAND WITHIN ALMOST 30 KM LENGTH / 18 DIVE SITES ALL OVER CARMEN NORTH- SOUTH WEST. Dives from beginners to advanced. We have sites for all certification levels.\n\nREQUERIMENTS:\n- Good Health & know how to swim\n- Dive Certificate\n- Age 12-70+ years old",
                    includes: ["Marine park fees", "Lunch, fruit, water", "Weights & tanks", "❌ Not included: Dive gear, Gratuities for the crew"]
                },
                {
                    title: "Danzantes Island Dive", duration: "5 - 6 hrs", imgKey: "danzantes", reel: danzantesReel,
                    desc: "A 5–6 hour tour, with a 40-minute boat ride. You may encounter dolphins, rays, sea birds, and more, along the way.\n\nThe Island of the Dancers, named after the ancestral dance traditions performed by the Guaycuras during their indigenous rituals. The island features impressive pinnacle-shaped rock formations that make it truly distinctive, as well as a rock formation resembling a window with perfectly straight 90° angles. We can stop in one of the beaches around to enjoy the view, while enjoy our lunch.\n\nREQUERIMENTS:\n- Good Health & know how to swim\n- Dive Certificate\n- Age 12-70+ years old",
                    includes: ["Marine park fees", "Lunch, fruit, water", "Weights & tanks", "❌ Not included: Dive gear, Gratuities for the crew"]
                },
                {
                    title: "Night Dive", duration: "18:00 - 21:00 hrs", imgKey: "nocturno", reel: nocturnoReel, hideBookNow: true,
                    desc: "Night dives are always fascinating, as they let us observe completely different behaviors from the same animals we see during the day -some asleep, others hunting , and many hiding to avoid becoming prey.\nThis activity is designed for advanced divers with a night diving speciality certification.\nCome and enjoy this unique underwater adventure with us!",
                    includes: [],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                            <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-moon-fill text-cyan-600"></i> ONLY FOR ADVANCED DIVERS</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                                <li>Night dive (July–October, advanced divers only): 1 afternoon dive + 1 night dive (4:00–8:00 PM) min 2 pax.</li>
                                <li>Night dive 1 tank (July-October, advanced divers only).</li>
                            </ul>
                            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                                <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">Includes:</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Marine park fees, lunch, fruit, water, weights & tanks, night light stick for the BCD.</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                                <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">Requirements:</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Good health, know how to swim, advanced dive certificate w/ night adventure, age 12- 70+ years old.</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-white/10">
                                <p className="font-bold text-red-500 dark:text-red-400 mb-1">Not Included:</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Dive gear, Gratuities for the crew. Available for rent: torch.</p>
                            </div>
                        </div>
                    )
                },
                {
                    title: "Scuba Refresh Program", duration: "Half Day", imgKey: "colorFImg", reel: discoverReel,
                    desc: "If it’s been more than 1 year since your last dive, we recommend our refresher program. You will complete a theory review on PADI.com (register our shop: Dolphin Dive Baja #20390) and pay a fee directly to PADI.\n\n• 1st tank: basic skills refresher\n• 2nd tank: guided exploration dive\n\nREQUIREMENTS: Age 12-70+ years old, good health, know how to swim, medical certificate.",
                    includes: ["Theoretical and practical review in water", "Full gear included"]
                }
            ],
            intro: [
                {
                    title: "Discover Scuba (Intro Dive)", duration: "Half Day", imgKey: "colorFImg", reel: discoverReel,
                    desc: "The Discover Scuba Dive is an introductory diving experience designed for those who want to explore the underwater world without needing prior certification. The only requisite is to know how to swim. It is an activity for kids since 12 years old.\n\nDuring the activity, you will do two dives:\n• First dive (instruction): Learn how to use the equipment and get comfortable with it.\n• Second dive (exploration): Enjoy a guided dive to a maximum depth of 12 meters.\n\nREQUIREMENTS: 12-70+ years old, good health, know how to swim.",
                    includes: ["Short theory class", "Personalized instruction", "Full scuba gear rental", "Lunch, snacks, and drinks", "Marine Park bracelet", "Min 2 pax"]
                },
                {
                    title: "Bubble Makers", duration: "2 - 3 hrs", imgKey: "bubbleImg", reel: bubbleReel,
                    desc: "Activity designed specially for kids.\nNOT A CERTIFICATION.\nMax depth in confined waters is 2 to 4 meters.\n\nREQUIREMENTS: Ages 8 - 11 years, good health, know how to swim.",
                    includes: ["1 Tank", "Full gear included", "Min 2 pax + 1 responsible adult"]
                }
            ],
            cursos: [
                {
                    title: "Open Water Diver", duration: "Max 3 Days", imgKey: "coursesImg", reel: openWaterReel, hideBookNow: true,
                    desc: "We’re thrilled that you want to discover the underwater world with Dolphin Dive Baja. As the only exclusive PADI 5-Star Dive Center & Cressi Dive Center in Loreto, we’re here to make your diving experience truly unforgettable.\n\nBecause your safety and enjoyment are our top priorities, we recommend planning your certification between June and October—when the waters of Loreto are at their calmest and most predictable, creating the perfect conditions for diving.\n\nREQUIREMENTS:\n- Age 12-70+ years old\n- Know how to swim\n- Medical certificate\n- Be in good health condition",
                    includes: ["Gear, weights, and tanks", "Lunch and water", "Marine park bracelets", "❌ Gratuities are not included"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-5">
                            <div className="pt-2">
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
                        </div>
                    )
                },
                {
                    title: "Advanced Open Water", duration: "2 - 3 Days", imgKey: "certImg", reel: advancedReel,
                    desc: "Already a certified diver? It’s time to expand your skills and explore new depths with the PADI Advanced Open Water Course at Dolphin Dive Center. Experience new adventures, build confidence, and discover the ocean in a whole new way!\n\nREQUIREMENTS: 12-70+ years old, know how to swim, medical certificate, Open Water certification.",
                    includes: ["5 total dives", "Lunch and water"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                            <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-compass-3-fill text-cyan-600"></i> Course Overview</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">To join, you must have completed your PADI Open Water Certification. We recommend having at least 20 logged dives to help you feel more comfortable and get the most out of the course.</p>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Our program runs from <strong className="text-cyan-600 dark:text-cyan-400">May to October</strong>.</p>
                            </div>
                            <div className="pt-1">
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-star-smile-fill text-yellow-500"></i> What You’ll Learn</h4>
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
                    desc: "Take your underwater adventure to the next level 🌊\nThe Rescue Diver course is one of the most rewarding experiences in diving. Not only will you build your confidence, but you’ll also learn how to take care of yourself and others while enjoying the ocean.\nThrough dynamic exercises and real-life scenarios, you’ll develop skills to prevent and manage emergencies calmly and effectively.\n\nREQUIREMENTS:\n• PADI Advanced Open Water Certification\n• Current EFR certification (within 24 months)\n• Age 12-70+ years old, good health.",
                    includes: ["Rescue practices", "Gear and tanks", "Lunch and water"]
                },
                {
                    title: "EFR Course (Emergency First Response®️)", duration: "1 Day", imgKey: "colorFImg", reel: discoverReel,
                    desc: "Be ready to act when it matters most 🚑\nThe Emergency First Response®️ (EFR) course gives you the skills and confidence to respond to emergencies, both in and out of the water. You will learn what to do in those critical moments between an incident and the arrival of professional help.\nThrough guided practices, you’ll develop essential techniques like CPR and first aid.\n\nThis course is accessible to everyone, no previous experience required. It is also a prerequisite for Rescue Diver and Divemaster certifications.",
                    includes: ["Online theory via PADI", "Practical session at the shop (approx 4 hours)"]
                },
                {
                    title: "Divemaster", duration: "On request", imgKey: "coursesImg", reel: openWaterReel,
                    desc: "Turn your passion into a career. The PADI Divemaster course is your first level of professional training. You’ll work closely with a PADI Instructor to fine-tune your dive skills, refine your rescue skills, and gain professional-level dive theory knowledge.\n\nYou will learn how to guide certified divers and assist with the training of new divers.",
                    includes: ["Intensive professional training", "Real practice guiding divers", "Ask for full requirements via email"]
                }
            ],
            snorkel: [
                {
                    title: "Snorkeling in the Loreto Bay National Marine Park", duration: "Half Day", imgKey: "carmen", reel: generalSnorkelReel,
                    desc: "Loreto is one of the best places in the world for snorkeling. We are part of a Protected Natural Area of over 206,000 hectares, surrounded by five spectacular islands.\nOur tours visit three of the five islands within the Marine Park (one per day), where there are over 30 amazing snorkeling sites to explore. Depending on the weather conditions, we will confirm to go to either Coronados, Carmen or Danzantes.\n\n💦 What to Expect:\n• Small groups (maximum 6–8 people) for a personalized experience.\n• Stunning locations that will make you feel like you’re in another world.\n• A bilingual naturalist guide and boat captain.\n• Panga-style boats with cushioned seats and shade.\n\nREQUIREMENTS: 12-70+ years old, good health, know how to swim.",
                    includes: ["Lunch, snacks, fresh fruit and soft drinks", "Marine Park fees", "❌ Not included: snorkeling gear & wet suit (available for rent)"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-6">
                            <div>
                                <h4 className="font-title text-xl text-cyan-600 dark:text-cyan-400 mb-2">Coronados Island</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">4–5 hour tour. With a 25 min ride. It’s common to spot dolphins, turtles, rays, sea lions, & sea birds. The island impresses with its volcanic rock formations and a friendly sea lion colony (except mid July to mid august). After circling the island, we’ll stop at a white sandy beach to swim, relax, and eat.</p>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <h4 className="font-title text-xl text-cyan-600 dark:text-cyan-400 mb-2">Carmen Island</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">A 5–6 hour tour with an approximately 45-minute boat ride. Its impressive cliffs and caves will leave you amazed. We’ll explore beautiful beaches and may even spot bighorn sheep. We’ll stop at one of the beaches nearby to enjoy a light seaside lunch.</p>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <h4 className="font-title text-xl text-cyan-600 dark:text-cyan-400 mb-2">Danzantes Island</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">A 5–6 hour tour, with a 40-minute boat ride. Named after ancestral Guaycura dances. The island features impressive pinnacle-shaped rock formations and a 90° window. We can stop in one of the beaches around to enjoy the view and our lunch.</p>
                            </div>
                        </div>
                    )
                }
            ]
        }
    };

    return localData[lang === 'en' ? 'en' : 'es'];
};

// ========================================================================
// 🛠️ INTERFACES DE TYPESCRIPT
// ========================================================================
export type TabKey = 'fundives' | 'intro' | 'cursos' | 'snorkel';

export interface ServiceItem {
    title: string;
    duration: string;
    desc: string | React.ReactNode;
    includes: string[];
    imgKey: string;
    reel?: string[];
    extraContent?: React.ReactNode;
    hideBookNow?: boolean;
}

export interface ModalData {
    title: string;
    desc: string | React.ReactNode;
    duration?: string;
    includes: string[];
    images: string[];
    extraContent?: React.ReactNode;
    footerContent?: React.ReactNode;
    hideBookNow?: boolean;
}