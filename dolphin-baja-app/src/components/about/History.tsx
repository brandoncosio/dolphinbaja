import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function History() {
  const { lang } = useLanguage();

  // ========================================================================
  // 📚 DATOS LOCALES (Historia y Evolución de la Empresa)
  // ========================================================================
  const pageData = {
    es: {
      title: "Nuestra Evolución",
      events: [
        {
          year: "Inicios",
          title: "Nacimiento del negocio familiar en Loreto",
          desc: "Hace casi 20 años llegamos al maravilloso puerto de Loreto, donde su belleza natural nos cautivó y nos llevó a decidir establecernos aquí. Nuestros hijos, orgullosamente loretanos, crecieron en una comunidad que les inculcó el valor de la amistad y la dicha de vivir rodeados de naturaleza.\n\nDesde el primer momento, nuestro pensamiento fue de profundo agradecimiento por haber encontrado uno de los lugares más hermosos de México y del mundo. Fue entonces cuando nació también nuestro compromiso de protegerlo.\n\nA lo largo de los años, hemos participado activamente en la comunidad, integrándonos a asociaciones y grupos con el propósito de preservar la cultura y las costumbres de este pueblo, cuna de la historia de las Californias.",
          img: "/assets/images/colash4.webp", // 👈 Cambia por una foto bonita de los inicios o de Loreto
          isLogo: false
        },
        {
          year: "2010",
          title: "El Legado",
          desc: "Bruce Williams (Mr. Leyenda) y Susan Speck (Women Divers Hall of Fame) nos confiaron la estafeta para continuar con su legado: la protección y el amor por el mundo submarino del Parque Nacional Bahía de Loreto.\n\nCon orgullo le dimos nuestro propio sello al añadir “Baja” a nuestro nombre, marcando así el inicio de una aventura que nos ha permitido conocer a personas extraordinarias y compartir con ellas nuestra pasión por el océano.\n\nA lo largo de los años, hemos sido testigos del crecimiento de muchos buzos que comenzaron su camino con nosotros y hoy son Divemasters e instructores. Muchos de ellos no solo forman parte de nuestra historia, sino que siguen siendo parte de nuestra vida: amigos que el mar nos regaló para siempre.",
          img: "/assets/images/experiencias.webp", // 👈 Cambia por una foto representativa
          isLogo: false
        },
        {
          year: "2000",
          title: "PADI 5-Star Dive Center",
          desc: "Desde el año 2000, hemos mantenido nuestro centro PADI 5 estrellas con dedicación y pasión, esforzándonos por ofrecer un nivel de servicio excepcional, cumpliendo con los más altos estándares de calidad y seguridad. Cada año nos actualizamos mediante cursos de naturaleza, primeros auxilios y atención al cliente, asegurando siempre la mejor experiencia para quienes nos visitan.",
          img: "/assets/contentD/img/PADI.png",
          isLogo: true
        },
        {
          year: "AWARE",
          title: "Project AWARE",
          desc: "Participamos activamente con PADI en el programa Project AWARE, trabajando para mantener los más de 40 sitios de buceo lo más saludables posible. En cada inmersión, invitamos a nuestros huéspedes a practicar un buceo responsable, disfrutando del entorno marino con admiración, sin tocar ni alterar la vida bajo el agua.",
          img: "/assets/contentD/img/PADI_AWARE.webp", // 👈 Asegúrate de guardar el logo de AWARE aquí
          isLogo: true
        },
        {
          year: "2022",
          title: "Cressi Dive Center",
          desc: "Desde 2022, nos convertimos en un Cressi Dive Center al mantener un alto estándar de calidad en nuestro servicio, lo que nos permite ofrecer productos de buceo de una marca con gran trayectoria y reconocida a nivel mundial en la industria del buceo.",
          img: "/assets/contentD/img/cressi.png",
          isLogo: true
        }
      ]
    },
    en: {
      title: "Our Evolution",
      events: [
        {
          year: "Origins",
          title: "The Birth of the Family Business in Loreto",
          desc: "Nearly 20 years ago, we arrived at the wonderful port of Loreto, where its natural beauty captivated us and led us to decide to settle here. Our children, proudly Loretanos, grew up in a community that taught them the value of friendship and the joy of living surrounded by nature.\n\nFrom the very first moment, our thought was one of deep gratitude for having found one of the most beautiful places in Mexico and the world. It was then that our commitment to protect it was also born.\n\nOver the years, we have actively participated in the community, joining associations and groups with the purpose of preserving the culture and customs of this town, the cradle of the history of the Californias.",
          img: "/assets/images/colash4.webp",
          isLogo: false
        },
        {
          year: "2010",
          title: "The Legacy",
          desc: "Bruce Williams (Mr. Legend) and Susan Speck (Women Divers Hall of Fame) entrusted us with the baton to continue their legacy: the protection and love for the underwater world of the Loreto Bay National Park.\n\nWe proudly added our own stamp by adding “Baja” to our name, marking the beginning of an adventure that has allowed us to meet extraordinary people and share our passion for the ocean with them.\n\nOver the years, we have witnessed the growth of many divers who started their journey with us and today are Divemasters and instructors. Many of them are not only part of our history, but remain part of our lives: friends that the sea gave us forever.",
          img: "/assets/images/experiencias.webp",
          isLogo: false
        },
        {
          year: "2000",
          title: "PADI 5-Star Dive Center",
          desc: "Since 2000, we have maintained our 5-Star PADI center with dedication and passion, striving to offer an exceptional level of service, meeting the highest standards of quality and safety. Every year we update ourselves through nature, first aid, and customer service courses, always ensuring the best experience for those who visit us.",
          img: "/assets/contentD/img/PADI.png",
          isLogo: true
        },
        {
          year: "AWARE",
          title: "Project AWARE",
          desc: "We actively participate with PADI in the Project AWARE program, working to keep the more than 40 dive sites as healthy as possible. On every dive, we invite our guests to practice responsible diving, enjoying the marine environment with admiration, without touching or altering life underwater.",
          img: "/assets/contentD/img/PADI_AWARE.webp",
          isLogo: true
        },
        {
          year: "2022",
          title: "Cressi Dive Center",
          desc: "Since 2022, we became a Cressi Dive Center by maintaining a high standard of quality in our service, allowing us to offer diving products from a brand with a great trajectory and recognized worldwide in the diving industry.",
          img: "/assets/contentD/img/cressi.png",
          isLogo: true
        }
      ]
    }
  };

  const content = pageData[lang === 'en' ? 'en' : 'es'];

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS
  // ========================================================================

  const headingClass = `
    font-title text-4xl md:text-5xl lg:text-6xl transition-colors duration-500
    text-navy drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]
    dark:text-white dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]
  `;

  const titleGlowClass = `
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-48 h-48 rounded-full pointer-events-none transition-colors duration-500
    bg-cyan-100/50 blur-[60px]
    dark:bg-ocean/20 dark:blur-[80px]
  `;

  const connectorLineClass = `
    hidden md:block absolute left-[88px] lg:left-[108px] top-0 bottom-0 w-[2px] -z-10 transition-colors duration-500
    bg-gradient-to-b from-transparent via-slate-200 to-transparent
    dark:from-transparent dark:via-cyan-400/30 dark:to-transparent
  `;

  const eventCardClass = `
    group relative p-6 md:p-8 lg:p-10 rounded-[2.5rem] md:rounded-[3rem] border transition-all duration-500 flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-12 items-center overflow-hidden
    /* LIGHT MODE */
    bg-white border-slate-200 shadow-xl shadow-slate-200/50 hover:border-cyan-400/40 hover:-translate-y-2
    /* DARK MODE (Matte Glass) */
    dark:bg-white/5 dark:backdrop-blur-2xl dark:border-white/10 dark:shadow-none dark:hover:border-cyan-400/50 dark:hover:-translate-y-2
  `;

  const yearClass = `
    font-title text-4xl md:text-5xl transition-transform duration-500 group-hover:scale-105
    text-yellow-500 drop-shadow-sm
    dark:text-yellow-400 dark:drop-shadow-[0_2px_15px_rgba(250,204,21,0.25)]
  `;

  const eventTitleClass = `
    font-title text-2xl md:text-3xl mb-4 transition-colors duration-300 drop-shadow-sm leading-tight
    text-navy group-hover:text-cyan-600
    dark:text-white dark:group-hover:text-cyan-300
  `;

  const eventDescClass = `
    font-body font-medium leading-relaxed text-base md:text-lg drop-shadow-sm transition-colors whitespace-pre-line
    text-slate-600
    dark:text-slate-200
  `;

  // Imagen normal de la línea del tiempo (Foto)
  const imageContainerClass = `
    w-full md:w-64 lg:w-72 aspect-video md:aspect-[4/3] rounded-2xl md:rounded-3xl overflow-hidden shrink-0 border transition-all duration-500 relative z-10
    /* LIGHT */
    border-slate-200 shadow-md group-hover:shadow-xl
    /* DARK */
    dark:border-white/20 dark:shadow-[0_10px_20px_rgba(0,0,0,0.3)] dark:group-hover:shadow-[0_15px_30px_rgba(102,216,227,0.15)] dark:group-hover:border-cyan-400/40
  `;

  // Contenedor especial adaptado para que los logos se vean limpios y perfectos
  const logoContainerClass = `
    w-full md:w-56 lg:w-64 aspect-video rounded-2xl md:rounded-3xl overflow-hidden shrink-0 border transition-all duration-500 relative z-10 flex items-center justify-center p-6
    bg-white dark:bg-white/10 border-slate-200 dark:border-white/20 shadow-md group-hover:shadow-xl group-hover:border-cyan-400/40
  `;

  return (
    <section id="historia" className="relative pb-24 md:pb-32 px-6 md:px-20 scroll-mt-24 z-10">
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 relative"
        >
          <div className={titleGlowClass} />
          <h2 className={headingClass}>
            {content.title}
          </h2>
        </motion.div>

        <div className="space-y-8 md:space-y-12 relative">
          <div className={connectorLineClass} />

          {content.events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.6, ease: "easeOut" }}
              className={eventCardClass}
              style={{ willChange: "transform" }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none 
                bg-transparent dark:bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] dark:from-cyan-400/10 dark:via-transparent dark:to-transparent"
              />

              <div className="flex flex-col items-center md:items-start min-w-[120px] lg:min-w-[150px] relative z-10 shrink-0">
                <span className={yearClass}>
                  {event.year}
                </span>
                <div className="h-1.5 w-12 rounded-full mt-4 group-hover:w-24 transition-all duration-500 shadow-sm
                  bg-cyan-500 shadow-cyan-200
                  dark:bg-cyan-400 dark:shadow-[0_0_15px_rgba(34,211,238,0.6)]"></div>
              </div>

              <div className="flex-1 text-center md:text-left relative z-10">
                <h3 className={eventTitleClass}>
                  {event.title}
                </h3>
                <p className={eventDescClass}>
                  {event.desc}
                </p>
              </div>

              <div className={event.isLogo ? logoContainerClass : imageContainerClass}>
                <img
                  src={event.img}
                  alt={event.title}
                  loading="lazy"
                  decoding="async"
                  className={event.isLogo
                    ? "w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                    : "w-full h-full object-cover group-hover:scale-110 transition-all duration-[1.5s] ease-out will-change-transform filter contrast-[1.15] saturate-[1.15]"}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}