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
const generalSnorkelReel = [experienciasImg, carmen, danzantes, isla, car1, dan1];

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
            fundives: [
                {
                    title: "Parque Nacional Bahía de Loreto",
                    duration: "Medio Día",
                    imgKey: "funDivesImg",
                    reel: loretoReel,
                    desc: (
                        <>
                            <strong className="text-navy dark:text-white">De camino a los sitios de buceo, podemos ver:</strong><br />
                            • Delfines • Mantas Mobula • Peces voladores • Ballenas (por temporada), etc.<br /><br />
                            <strong className="text-navy dark:text-white">Durante las inmersiones podemos ver gran diversidad de vida marina:</strong><br />
                            • Corales duros y blandos (negro, californica, copa naranja y muchos más) • Anémonas tubulares • Tortugas marinas • Anguilas • Tiburones de arrecife • Pecio C-54 (9–24 m de profundidad) • Lobos marinos • Delfines • Grandes cardúmenes • Vida macro (nudibranquios, blénidos, gobios, jawfishes, etc.) • ¡y mucho más!<br /><br />
                            Buceos matutinos todo el año (8:00 - 13:00 hrs). Cita 7:30 AM en la tienda. <strong className="text-cyan-600 dark:text-cyan-400">Tres tanques</strong> en Coronados, Carmen o Danzantes.<br />
                            Buceos vespertinos (Junio–Octubre) de 14:00 PM a 18:00 PM. <br />
                            *Grupos pequeños: máximo 6 buzos por Dive Master.<br /><br />
                            Buzos solos: Intentaremos encontrarte un compañero. Si no, puedes reservar un tour privado a Coronados.<br />
                            *Nuestras tarifas se basan en pesos, el USD se ajustará según el tipo de cambio.<br /><br />
                            <strong className="text-navy dark:text-white">Complementos Opcionales:</strong><br />
                            • Tour privado con costo extra<br />
                            • Renta de lámparas y computadora de buceo disponible<br /><br />
                            <strong className="text-navy dark:text-white">Requisitos:</strong> 12-70+ años, certificado de buceo.<br /><br />
                            <span className="text-red-500 font-medium">🐙 No incluye: Equipo de buceo, ni propinas al guía y capitán.</span><br /><br />
                            *Buceos nocturnos disponibles para buzos avanzados:
                            <button onClick={() => actions.onNavigate('night-dive')} className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-[9px] font-bold uppercase tracking-tighter hover:bg-cyan-200 transition-colors pointer-events-auto">
                                Ver Info <i className="ri-arrow-right-up-line"></i>
                            </button>
                        </>
                    ),
                    includes: ["3 tanques", "Plomos y tanques", "Lunch, fruta, agua", "🐙 Equipo de buceo", "🐙 Propinas"]
                },
                {
                    title: "Isla Coronados", duration: "Medio Día", imgKey: "isla", reel: coronadoReel,
                    desc: "La isla impresiona con sus formaciones de roca volcánica de 125,000 años de antigüedad, y es hogar de garzas, gaviotas, cormoranes, pelícanos, águilas pescadoras y otras aves marinas.\nTambién encontrarás una amigable colonia de lobos marinos que reside allí todo el año (excepto de mediados de julio a mediados de agosto).\n\n¡12 SITIOS DE BUCEO PARA EXPLORAR EN ESTA ISLA!\n\nRequisitos:\n• Buena salud y saber nadar.\n• Certificado de buceo.\n• Edad: 12-70+ años.",
                    includes: ["Tarifas del Parque Marino", "Plomos y tanques", "Lunch, fruta y agua", "🐙 Equipo de buceo", "🐙 Propinas"]
                },
                {
                    title: "Buceo en Isla del Carmen", duration: "5 - 6 hrs", imgKey: "carmen", reel: carmenReel,
                    desc: "Tour de 5-6 horas con viaje en lancha de aprox. 45 min. En el camino, podrás ver delfines, aves marinas, rayas y más. Sus impresionantes acantilados —una mezcla de arena fosilizada, roca volcánica, basalto y más— te dejarán maravillado; también hay cuevas en la superficie que deslumbrarán tus sentidos.\n\nEs la isla más larga (casi 30 km de longitud) con 18 sitios de buceo en el norte, sur y oeste. Buceos desde principiantes a avanzados. Tenemos sitios para todos los niveles de certificación.\n\nRequisitos:\n• Buena salud y saber nadar.\n• Certificado de buceo.\n• Edad: 12-70+ años.",
                    includes: ["Tarifas del Parque Marino", "Lunch, fruta, agua", "Plomos y tanques", "🐙 Equipo de buceo", "🐙 Propinas"]
                },
                {
                    title: "Buceo en Islas Danzantes", duration: "5 - 6 hrs", imgKey: "danzantes", reel: danzantesReel,
                    desc: "Tour de 5-6 horas con viaje en lancha de 40 min. En el camino podrás encontrar delfines, rayas, aves marinas y más.\n\nLa Isla de los Danzantes, nombrada así por las tradiciones ancestrales de los Guaycuras. Cuenta con impresionantes formaciones rocosas en forma de pináculo y una formación similar a una ventana con ángulos rectos de 90°. Podemos hacer una parada en alguna de las playas cercanas para disfrutar la vista mientras comemos.\n\nRequisitos:\n• Buena salud y saber nadar.\n• Certificado de buceo.\n• Edad: 12-70+ años.",
                    includes: ["Tarifas del Parque Marino", "Lunch, fruta, agua", "Plomos y tanques", "🐙 Equipo de buceo", "🐙 Propinas"]
                },
                {
                    title: "Night Dive (Buceo Nocturno)", duration: "18:00 - 21:00 hrs", imgKey: "nocturno", reel: nocturnoReel, hideBookNow: true,
                    desc: "Los buceos nocturnos siempre son fascinantes, ya que nos permiten descubrir un comportamiento completamente distinto en las mismas especies que observamos durante el día: algunos descansan, otros salen de cacería y muchos se ocultan para evitar a sus depredadores.\nEsta actividad está dirigida a buzos avanzados que cuenten con la especialidad de buceo nocturno.\nVen y disfruta con nosotros de esta increíble aventura bajo el mar.\n\nRequisitos:\n• Buena salud y saber nadar.\n• Certificación avanzada con aventura nocturna.\n• Edad: 12-70+ años.",
                    includes: ["Tarifas del parque marino", "Lunch, fruta y agua", "Plomos y tanques", "Luz fluorescente", "🐙 Equipo de buceo", "🐙 Propinas"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                            <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-moon-fill text-cyan-600"></i> SOLO PARA BUZOS AVANZADOS</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                                <li>Night dive (Julio–Octubre, solo buzos avanzados): 1 inmersión de tarde + 1 inmersión nocturna (4:00–8:00 PM) min 2 pax.</li>
                                <li>Night dive 1 tanque (Julio-Octubre, solo buzos avanzados).</li>
                            </ul>
                        </div>
                    )
                },
                {
                    title: "🔄 Refresher Program", duration: "Medio Día", imgKey: "colorFImg", reel: discoverReel,
                    desc: "Si ha pasado más de 1 año desde tu última inmersión, por tu seguridad te recomendamos nuestro programa de actualización. \n\nCompletarás un repaso teórico en PADI.com (registrando nuestra tienda Dolphin Dive Baja #20390) y pagarás una tarifa directamente a PADI. Pagarás la tarifa de práctica directamente en la tienda.\n\n• 1er tanque: Repaso de habilidades básicas.\n• 2do tanque: Inmersión de exploración guiada.\n\nRequisitos: Edad 12-70+ años, saber nadar, certificado médico y buena condición de salud.",
                    includes: ["Repaso teórico", "Lunch, fruta, tarifas del parque marino", "🐙 Equipo de buceo", "🐙 Propinas"]
                }
            ],
            intro: [
                {
                    title: "Intro Diving (NO es una certificación)", duration: "Medio Día", imgKey: "colorFImg", reel: discoverReel,
                    desc: "El Discover Scuba Dive es una experiencia introductoria diseñada para aquellos que desean explorar el mundo submarino sin necesidad de certificación previa. El único requisito es saber nadar. Es una actividad apta a partir de los 12 años.\n\n👉 Durante la actividad, realizarás dos inmersiones:\n• 1ra inmersión (instrucción): Aprenderás a usar el equipo y te familiarizarás con él.\n• 2da inmersión (exploración): Disfruta de una inmersión guiada a una profundidad máxima de 12 metros.\n\nRequisitos: 12-70+ años, saber nadar, certificado médico, buena salud.",
                    includes: ["Clase teórica corta", "Instrucción personalizada", "Renta completa de equipo", "Lunch, snacks y bebidas", "Brazalete del Parque Marino", "Mínimo 2 pax"]
                },
                {
                    title: "Bubble Makers", duration: "2 - 3 hrs", imgKey: "bubbleImg", reel: bubbleReel,
                    desc: "Es una actividad diseñada especialmente para niños. NO ES UNA CERTIFICACIÓN.\nInmersión máxima en aguas controladas de 2 a 4 metros.\n\nRequisitos: Edad de 8 a 11 años, buena salud, saber nadar.",
                    includes: ["1 Tanque", "Equipo completo incluido", "🐙 Propinas"]
                }
            ],
            cursos: [
                {
                    title: "Open Water Diver", duration: "Máx 3 Días", imgKey: "coursesImg", reel: openWaterReel, hideBookNow: true,
                    desc: "Estamos encantados de que quieras descubrir el mundo submarino con Dolphin Dive Baja. Como el único Centro de Buceo exclusivo PADI 5 Estrellas y Centro Cressi en Loreto, estamos aquí para hacer tu experiencia verdaderamente inolvidable.\n\nPorque tu seguridad y diversión son nuestras prioridades, recomendamos planificar tu certificación entre Junio y Octubre—cuando las aguas de Loreto están más tranquilas, creando las condiciones perfectas para bucear.\n\nRequisitos obligatorios:\n• 12 a 70+ años.\n• Saber nadar.\n• Certificado médico.\n• Estar en buena condición de salud.",
                    includes: ["Renta de equipo, lastre y tanques", "Lunch y agua", "Brazaletes del parque marino", "🐙 Propinas"],
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
                    desc: "¿Ya eres un buzo certificado? Es hora de expandir tus habilidades y explorar nuevas profundidades con el Curso PADI Advanced Open Water. ¡Experimenta nuevas aventuras, gana confianza y descubre el océano de una manera completamente nueva!\n\nRequisitos: 12-70+ años, saber nadar, certificado médico, buena salud, certificación Open Water.",
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
                    desc: "Lleva tu aventura bajo el mar al siguiente nivel 🌊\nEl curso Rescue Diver es una de las experiencias más gratificantes del buceo.\nNo solo mejorarás tu confianza, sino que también aprenderás a cuidar de ti y de los demás mientras disfrutas del océano.\nA través de ejercicios dinámicos y escenarios reales, desarrollarás habilidades para prevenir y manejar situaciones de emergencia de forma tranquila y efectiva.\n\nAprenderás técnicas de rescate, uso de equipo especializado desde embarcación y cómo resolver pequeños imprevistos… todo en un ambiente divertido y lleno de aprendizaje.\n\nEs un curso que transforma tu manera de bucear: más seguro, más consciente y mucho más preparado.",
                    includes: ["Prácticas de rescate y emergencias", "Equipo y tanques", "Lunch y agua"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                            <div>
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2"><i className="ri-list-check text-cyan-600"></i> Requisitos</h4>
                                <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                                    <li>Certificación PADI Open Water Diver</li>
                                    <li>Certificación PADI Advanced Open Water Diver</li>
                                    <li>Buena condición física y salud general</li>
                                    <li>Inmersión de navegación subacuática completada</li>
                                    <li>Certificación en primeros auxilios (EFR) vigente (últimos 24 meses)</li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2"><i className="ri-medal-fill text-cyan-600"></i> ¿Cómo obtener tu certificación?</h4>
                                <ol className="list-decimal pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                                    <li>Completa el curso EFR (Primeros Auxilios y RCP) — requisito obligatorio.</li>
                                    <li>Realiza tu teoría en línea a través de PADI.</li>
                                    <li>Vive la experiencia en el mar con Dolphin Dive Baja (2 a 4 días de entrenamiento práctico).</li>
                                </ol>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">✨ Prepárate para convertirte en un buzo más seguro, confiado y listo para cualquier aventura.</p>
                            </div>
                        </div>
                    )
                },
                {
                    title: "Curso EFR (Emergency First Response®️)", duration: "1 Día", imgKey: "colorFImg", reel: discoverReel,
                    desc: "Prepárate para actuar cuando más importa 🚑\nEl curso de Emergency First Response®️ (EFR) te brinda las habilidades y la confianza necesarias para responder ante situaciones de emergencia, tanto dentro como fuera del agua.\nAprenderás qué hacer en esos momentos críticos entre que ocurre un incidente y llega la ayuda profesional.\n\nA través de prácticas guiadas y escenarios realistas, desarrollarás técnicas esenciales como RCP, primeros auxilios, evaluación de lesiones y manejo de emergencias de forma tranquila y efectiva.\n\nEste curso es práctico, dinámico y accesible para todos, sin necesidad de experiencia previa. Además, es un paso fundamental en tu camino como buzo profesional o avanzado.",
                    includes: ["Teoría en línea a través de PADI", "Sesión práctica en tienda (aprox. 4 horas)"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                            <div>
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2"><i className="ri-heart-pulse-fill text-red-500"></i> ¿Qué aprenderás?</h4>
                                <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                                    <li>Reanimación cardiopulmonar (RCP)</li>
                                    <li>Primeros auxilios para aliviar dolor y estabilizar lesiones</li>
                                    <li>Evaluación de emergencias y toma de decisiones</li>
                                    <li>Uso de vendajes e inmovilizaciones</li>
                                    <li>Manejo de situaciones médicas comunes</li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2"><i className="ri-information-fill text-cyan-600"></i> Requisito para buzos</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Completar este programa cumple con el requisito de primeros auxilios y RCP para las certificaciones de PADI Rescue Diver y PADI Divemaster.</p>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2"><i className="ri-medal-fill text-cyan-600"></i> ¿Cómo completar tu certificación?</h4>
                                <ol className="list-decimal pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                                    <li>Realiza tu teoría en línea a través de PADI (pago directo en la plataforma).</li>
                                    <li>Completa la sesión práctica en tienda (aprox. 4 horas).</li>
                                </ol>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">✨ Una habilidad que va más allá del buceo: aprende a ayudar, actuar y marcar la diferencia.</p>
                            </div>
                        </div>
                    )
                },
                {
                    title: "Divemaster", duration: "A consultar", imgKey: "coursesImg", reel: openWaterReel,
                    desc: "Convierte tu pasión en tu carrera profesional. El curso PADI Divemaster es tu primer paso en el mundo del buceo profesional. Trabajarás estrechamente con un instructor PADI para perfeccionar tus habilidades de buceo, afinar tus habilidades de rescate y obtener conocimientos teóricos de nivel profesional.\n\nAprenderás a guiar a buzos certificados y asistir en el entrenamiento de nuevos buzos.",
                    includes: ["Entrenamiento profesional intensivo", "Prácticas reales guiando buzos", "Consulta requisitos completos por correo"]
                }
            ],
            snorkel: [
                {
                    title: "Snorkeling en el Parque Nacional Bahía de Loreto", duration: "Medio Día", imgKey: "carmen", reel: generalSnorkelReel,
                    desc: "Loreto es uno de los mejores lugares en el mundo para hacer snorkel. Somos parte de un Área Natural Protegida de más de 206,000 hectáreas, rodeada por cinco espectaculares islas.\nNuestros tours visitan tres de las cinco islas dentro del Parque Marino (una por día), donde hay más de 30 increíbles sitios de snorkel para explorar. Dependiendo de las condiciones del clima, confirmaremos a cuál de las tres islas iremos: Coronados, Carmen (oeste) o Danzantes.\n\n💦 Qué Esperar:\n• Grupos pequeños (máximo 6–8 personas) para una experiencia personalizada.\n• Lugares impresionantes que te harán sentir en otro mundo.\n• Un guía naturalista bilingüe experto en snorkel, además del capitán, te acompañará durante todo el recorrido.\n• Lanchas tipo panga con asientos acolchados y sombra para tu comodidad.\n\nDependiendo de la isla, el viaje en lancha toma de 30 a 45 minutos. Visitamos una isla por viaje. A veces combinamos grupos de snorkel y buceo, ya que los sitios suelen coincidir. Hacemos 2 a 3 paradas diferentes.\n\n🍽️ Lunch:\nSi el grupo es solo de snorkel, disfrutaremos el lunch en una playa cercana. Si no, nos quedaremos en la lancha disfrutando del hermoso paisaje rodeados del hermoso mar.\n\nRequisitos: 12-70+ años, saber nadar, buena salud.",
                    includes: ["Lunch, snacks, fruta fresca y bebidas", "Tarifas del Parque Marino", "🐙 Equipo de snorkel y traje de neopreno"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-6">
                            <div>
                                <h4 className="font-title text-xl text-cyan-600 dark:text-cyan-400 mb-2">Isla Coronados</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Tour de 4–5 horas. Viaje en lancha de 25 min. Es común avistar delfines, tortugas, rayas, lobos marinos y aves. La isla impresiona con sus formaciones volcánicas y alberga una amigable colonia de lobos marinos (excepto de mediados de julio a mediados de agosto). Después de rodear la isla, pararemos en una playa de arena blanca para nadar, relajarnos y disfrutar de un delicioso lunch.</p>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <h4 className="font-title text-xl text-cyan-600 dark:text-cyan-400 mb-2">Isla del Carmen (Noroeste)</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Tour de 5–6 horas. Viaje en lancha de 45 min. Sus impresionantes acantilados y cuevas deslumbrarán tus sentidos. Una vez en la isla, exploraremos cuevas naturales, hermosas playas y con suerte veremos borrego cimarrón. Pararemos en una playa cercana para disfrutar su arena blanca y un lunch frente al mar.</p>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <h4 className="font-title text-xl text-cyan-600 dark:text-cyan-400 mb-2">Islas Danzantes</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Tour de 5–6 horas. Viaje en lancha de 40 min. Nombrada por las danzas ancestrales de los Guaycuras. Destaca por sus pináculos de roca y una famosa formación en forma de ventana de 90° perfectos. Podemos hacer una parada en alguna de las playas cercanas para disfrutar la vista y nuestro lunch.</p>
                            </div>
                        </div>
                    )
                }
            ]
        },
        en: {
            fundives: [
                {
                    title: "Loreto Bay National Park", duration: "Half Day", imgKey: "funDivesImg", reel: loretoReel,
                    desc: (
                        <>
                            <strong className="text-navy dark:text-white">On our way to the dive sites, we can see:</strong><br />
                            • Dolphins • Mobula rays • Flying fish • Whales (seasonal) • Sea birds, etc.<br /><br />
                            <strong className="text-navy dark:text-white">While diving we can see a lot of sea life diversity:</strong><br />
                            • Hard & soft corals (black, californica, orange cup, and more) • Tube anemones • Sea turtles • Eels • Reef sharks • Wreck C-54 (30–80 ft. deep) • Sea lions • Dolphins • Large schools of fish • Macro life (nudibranchs, blennies, gobies, jawfishes, etc.) • & much more!!<br /><br />
                            Morning dives all year (8:00 - 13:00 hrs). Meet at 7:30 AM at the shop. <strong className="text-cyan-600 dark:text-cyan-400">Three tanks</strong> in Coronados, Carmen, or Danzantes.<br />
                            Afternoon dives (June–October) from 2:00 PM to 6:00 PM.<br />
                            *Groups are small: 6 divers maximum per Dive Master.<br /><br />
                            Solo diver: We’ll try to find you a buddy. If not, you can book a private tour to Coronados.<br />
                            *Our rates are based on pesos, the USD adjusts depending on the exchange rate.<br /><br />
                            <strong className="text-navy dark:text-white">Optional Add-ons:</strong><br />
                            • Private tour extra fee<br />
                            • Torch and dive computer rental available<br /><br />
                            <strong className="text-navy dark:text-white">Requirements:</strong> Age 12-70+ years old, dive certificate.<br /><br />
                            <span className="text-red-500 font-medium">🐙 Not Included: Dive gear and Gratuities for the guide & captain.</span><br /><br />
                            *Night dives available for advanced divers:
                            <button onClick={() => actions.onNavigate('night-dive')} className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-[9px] font-bold uppercase tracking-tighter hover:bg-cyan-200 transition-colors pointer-events-auto">
                                See Info <i className="ri-arrow-right-up-line"></i>
                            </button>
                        </>
                    ),
                    includes: ["3 tanks", "Tanks and weights", "Lunch, fruit, water", "🐙 Dive gear", "🐙 Gratuities"]
                },
                {
                    title: "Coronados Island", duration: "Half Day", imgKey: "isla", reel: coronadoReel,
                    desc: "It’s common to spot dolphins, turtles, rays, sea lions, & sea birds. The island impresses with its volcanic rock formations, 125,000 years old, and is home to herons, seagulls, cormorants, pelicans, ospreys, and other sea birds. \nYou’ll also encounter a friendly sea lion colony that resides there year-round (except mid-July to mid-August). \n\n12 DIVE SITES TO EXPLORE ON THIS ISLAND\n\nRequirements:\n• Good health & know how to swim\n• Dive Certificate\n• Age 12-70+ years old",
                    includes: ["Marine Park fees", "Weights & Tanks", "Lunch, fruit, water", "🐙 Dive gear", "🐙 Gratuities"]
                },
                {
                    title: "Carmen Island Dive", duration: "5 - 6 hrs", imgKey: "carmen", reel: carmenReel,
                    desc: "A 5–6 hour tour with an approximately 45-minute boat ride. Along the way, you may spot dolphins, seabirds, rays & more. Its impressive cliffs —a mix of fossilized sand, volcanic rock, basalt, and more— will leave you amazed; there are also surface caves that make the landscape a place sure to dazzle your senses.\n\nTHE LONGEST ISLAND, SPANNING ALMOST 30 KM WITH 18 DIVE SITES ACROSS THE NORTH, SOUTH, AND WEST. Dives from beginners to advanced. We have sites for all certification levels.\n\nRequirements:\n• Good health & know how to swim\n• Dive Certificate\n• Age 12-70+ years old",
                    includes: ["Marine park fees", "Lunch, fruit, water", "Weights & tanks", "🐙 Dive gear", "🐙 Gratuities"]
                },
                {
                    title: "Danzantes Island Dive", duration: "5 - 6 hrs", imgKey: "danzantes", reel: danzantesReel,
                    desc: "A 5–6 hour tour, with a 40-minute boat ride. You may encounter dolphins, rays, sea birds, and more, along the way.\n\nThe Island of the Dancers, named after the ancestral dance traditions performed by the Guaycuras during their indigenous rituals. The island features impressive pinnacle-shaped rock formations that make it truly distinctive, as well as a rock formation resembling a window with perfectly straight 90° angles. We can stop at one of the nearby beaches to enjoy the view while having our lunch.\n\nRequirements:\n• Good health & know how to swim\n• Dive Certificate\n• Age 12-70+ years old",
                    includes: ["Marine park fees", "Lunch, fruit, water", "Weights & tanks", "🐙 Dive gear", "🐙 Gratuities"]
                },
                {
                    title: "Night Dive", duration: "18:00 - 21:00 hrs", imgKey: "nocturno", reel: nocturnoReel, hideBookNow: true,
                    desc: "Night dives are always fascinating, as they let us observe completely different behaviors from the same animals we see during the day - some asleep, others hunting, and many hiding to avoid becoming prey.\nThis activity is designed for advanced divers with a night diving speciality certification.\nCome and enjoy this unique underwater adventure with us!\n\nRequirements:\n• Good health & know how to swim.\n• Advanced dive certificate w/ night adventure.\n• Age 12- 70+ years old.",
                    includes: ["Marine park fees", "Lunch, fruit, water", "Weights & tanks", "Fluorescent light", "🐙 Dive gear", "🐙 Gratuities"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                            <h4 className="font-title text-lg text-navy dark:text-white mb-2 flex items-center gap-2"><i className="ri-moon-fill text-cyan-600"></i> ONLY FOR ADVANCED DIVERS</h4>
                            <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                                <li>Night dive (July–October, advanced divers only): 1 afternoon dive + 1 night dive (4:00–8:00 PM) min 2 pax.</li>
                                <li>Night dive 1 tank (July-October, advanced divers only).</li>
                            </ul>
                        </div>
                    )
                },
                {
                    title: "🔄 Refresher Program", duration: "Half Day", imgKey: "colorFImg", reel: discoverReel,
                    desc: "If it’s been more than 1 year since your last dive, we recommend our refresher program. \n\nYou will complete a theory review on PADI.com (register our shop: Dolphin Dive Baja #20390) and pay a fee directly to PADI. You will pay the practice fee directly at the shop.\n\n• 1st tank: basic skills refresher\n• 2nd tank: guided exploration dive\n\nRequirements: Age 12-70+ years old, good health, know how to swim, medical certificate.",
                    includes: ["Theory review", "Lunch, fruit, marine park fees", "🐙 Dive gear", "🐙 Gratuities"]
                }
            ],
            intro: [
                {
                    title: "Intro Diving (It is NOT a certification)", duration: "Half Day", imgKey: "colorFImg", reel: discoverReel,
                    desc: "The Discover Scuba Dive is an introductory diving experience designed for those who want to explore the underwater world without needing prior certification. The only requirement is knowing how to swim. It is an activity suitable for ages 12 and up.\n\n👉 During the activity, you will do two dives:\n• First dive (instruction): Learn how to use the equipment and get comfortable with it.\n• Second dive (exploration): Enjoy a guided dive to a maximum depth of 12 meters.\n\nRequirements: 12-70+ years old, good health, know how to swim.",
                    includes: ["Short theory class", "Personalized instruction", "Full scuba gear rental", "Lunch, snacks, and drinks", "Marine Park bracelet", "Min 2 pax"]
                },
                {
                    title: "Bubble Makers", duration: "2 - 3 hrs", imgKey: "bubbleImg", reel: bubbleReel,
                    desc: "Activity designed specially for kids. NOT A CERTIFICATION.\nMax depth in confined waters is 2 to 4 meters.\n\nRequirements: Ages 8 - 11 years, good health, know how to swim.",
                    includes: ["1 Tank", "Full gear included", "🐙 Gratuities"]
                }
            ],
            cursos: [
                {
                    title: "Open Water Diver", duration: "Max 3 Days", imgKey: "coursesImg", reel: openWaterReel, hideBookNow: true,
                    desc: "We’re thrilled that you want to discover the underwater world with Dolphin Dive Baja. As the only exclusive PADI 5-Star Dive Center & Cressi Dive Center in Loreto, we’re here to make your diving experience truly unforgettable.\n\nBecause your safety and enjoyment are our top priorities, we recommend planning your certification between June and October—when the waters of Loreto are at their calmest and most predictable, creating the perfect conditions for diving.\n\nRequirements:\n• Age 12-70+ years old\n• Know how to swim\n• Medical certificate\n• Be in good health condition",
                    includes: ["Gear, weights, and tanks", "Lunch and water", "Marine park bracelets", "🐙 Gratuities"],
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
                    desc: "Already a certified diver? It’s time to expand your skills and explore new depths with the PADI Advanced Open Water Course at Dolphin Dive Center. Experience new adventures, build confidence, and discover the ocean in a whole new way!\n\nRequirements: 12-70+ years old, know how to swim, medical certificate, Open Water certification.",
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
                    desc: "Take your underwater adventure to the next level 🌊\nThe Rescue Diver course is one of the most rewarding experiences in diving.\nNot only will you build your confidence, but you’ll also learn how to take care of yourself and others while enjoying the ocean.\nThrough dynamic exercises and real-life scenarios, you’ll develop skills to prevent and manage emergencies calmly and effectively.\n\nYou’ll learn rescue techniques, how to use specialized equipment from a boat, and how to solve small unexpected issues... all in a fun environment full of learning.\n\nIt's a course that transforms the way you dive: making you safer, more aware, and much more prepared.",
                    includes: ["Rescue and emergency practices", "Gear and tanks", "Lunch and water"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                            <div>
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2"><i className="ri-list-check text-cyan-600"></i> Requirements</h4>
                                <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                                    <li>PADI Open Water Diver Certification</li>
                                    <li>PADI Advanced Open Water Diver Certification</li>
                                    <li>Good physical condition and general health</li>
                                    <li>Completed underwater navigation dive</li>
                                    <li>Valid First Aid (EFR) certification (within the last 24 months)</li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2"><i className="ri-medal-fill text-cyan-600"></i> How to get your certification?</h4>
                                <ol className="list-decimal pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                                    <li>Complete the EFR course (First Aid and CPR) — mandatory requirement.</li>
                                    <li>Complete your online theory through PADI.</li>
                                    <li>Live the ocean experience with Dolphin Dive Baja (2 to 4 days of practical training).</li>
                                </ol>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">✨ Get ready to become a safer, more confident diver, ready for any adventure.</p>
                            </div>
                        </div>
                    )
                },
                {
                    title: "EFR Course (Emergency First Response®️)", duration: "1 Day", imgKey: "colorFImg", reel: discoverReel,
                    desc: "Be ready to act when it matters most 🚑\nThe Emergency First Response®️ (EFR) course gives you the skills and confidence to respond to emergencies, both in and out of the water.\nYou will learn what to do in those critical moments between an incident and the arrival of professional help.\n\nThrough guided practices and realistic scenarios, you’ll develop essential techniques like CPR, first aid, injury assessment, and emergency management calmly and effectively.\n\nThis course is practical, dynamic, and accessible to everyone, with no previous experience required. It is also a fundamental step on your path as a professional or advanced diver.",
                    includes: ["Online theory via PADI", "Practical session at the shop (approx 4 hours)"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-4">
                            <div>
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2"><i className="ri-heart-pulse-fill text-red-500"></i> What will you learn?</h4>
                                <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-1">
                                    <li>Cardiopulmonary resuscitation (CPR)</li>
                                    <li>First aid to relieve pain and stabilize injuries</li>
                                    <li>Emergency assessment and decision making</li>
                                    <li>Use of bandages and splinting</li>
                                    <li>Management of common medical situations</li>
                                </ul>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2"><i className="ri-information-fill text-cyan-600"></i> Requirement for divers</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">Completing this program meets the first aid and CPR requirement for the PADI Rescue Diver and PADI Divemaster certifications.</p>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <h4 className="font-title text-lg text-navy dark:text-white mb-2"><i className="ri-medal-fill text-cyan-600"></i> How to complete your certification?</h4>
                                <ol className="list-decimal pl-5 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                                    <li>Complete your online theory through PADI (direct payment on the platform).</li>
                                    <li>Complete the practical session at the shop (approx. 4 hours).</li>
                                </ol>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <p className="font-bold text-cyan-700 dark:text-cyan-400 mb-1">✨ A skill that goes beyond diving: learn to help, act, and make a difference.</p>
                            </div>
                        </div>
                    )
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
                    desc: "Loreto is one of the best places in the world for snorkeling. We are part of a Protected Natural Area of over 206,000 hectares, surrounded by five spectacular islands.\nOur tours visit three of the five islands within the Marine Park (one per day), where there are over 30 amazing snorkeling sites to explore. Depending on weather conditions, we will confirm whether we are visiting Coronados, Carmen (west), or Danzantes.\n\n💦 What to Expect:\n• Small groups (maximum 6–8 people) for a personalized experience.\n• Stunning locations that will make you feel like you’re in another world.\n• A bilingual naturalist snorkeling guide, besides the boat captain, will accompany you throughout the tour.\n• Panga-style boats with cushioned seats and shade for your comfort, ensuring a relaxing and enjoyable experience at sea.\n\nDepending on the island selected, the boat ride takes 30 to 45 minutes to reach the snorkeling area. We visit one island per trip. Sometimes we combine groups of snorkelers and divers, as the sites often overlap. During the excursion, we usually make 2 to 3 different snorkeling stops to enjoy the marine life.\n\n🍽️ Lunch:\nIf the group consists only of snorkelers, we’ll enjoy lunch on a nearby beach with a beautiful ocean view, if not, we might stay in the panga enjoying a beautiful landscape surrounded by the beautiful sea.\n\nRequirements: 12-70+ years old, good health, know how to swim.",
                    includes: ["Lunch, snacks, fresh fruit and soft drinks", "Marine Park fees", "🐙 Snorkeling gear & wet suit"],
                    extraContent: (
                        <div className="mt-4 p-5 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 space-y-6">
                            <div>
                                <h4 className="font-title text-xl text-cyan-600 dark:text-cyan-400 mb-2">Coronados Island</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">4–5 hour tour. With a 25 min ride. It’s common to spot dolphins, turtles, rays, sea lions, & sea birds. The island impresses with its volcanic rock formations and a friendly sea lion colony (except mid-July to mid-August). After circling the island, we’ll stop at a white sandy beach to swim, relax, and enjoy a delicious lunch with fruit, snacks, burritos or sandwiches.</p>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <h4 className="font-title text-xl text-cyan-600 dark:text-cyan-400 mb-2">Carmen Island (Northwest)</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">A 5–6 hour tour with an approximately 45-minute boat ride. Its impressive cliffs and caves will leave you amazed. Once on the island, we’ll explore natural caves, beautiful beaches, and may even spot bighorn sheep. We’ll stop at one of the beaches nearby to enjoy its white sand and a light seaside lunch.</p>
                            </div>
                            <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                                <h4 className="font-title text-xl text-cyan-600 dark:text-cyan-400 mb-2">Danzantes Island</h4>
                                <p className="text-sm text-slate-600 dark:text-slate-300">A 5–6 hour tour, with a 40-minute boat ride. Named after ancestral Guaycura dances. The island features impressive pinnacle-shaped rock formations and a 90° window. We can stop in one of the beaches around to enjoy the view, while having our lunch.</p>
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