import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function History() {
  const { lang } = useLanguage();

  const pageData = {
    es: {
      title: "Nuestra Evolución",
      events: [
        {
          year: "Inicios",
          title: "Nacimiento del negocio familiar en Loreto",
          desc: "Hace casi 20 años llegamos al maravilloso puerto de Loreto, donde su belleza natural nos cautivó y nos llevó a decidir establecernos aquí. Nuestros hijos, orgullosamente loretanos, crecieron en una comunidad que les inculcó el valor de la amistad y la dicha de vivir rodeados de naturaleza.\n\nDesde el primer momento, nuestro pensamiento fue de profundo agradecimiento por haber encontrado uno de los lugares más hermosos de México y del mundo. Fue entonces cuando nació también nuestro compromiso de protegerlo.\n\nA lo largo de los años, hemos participado activamente en la comunidad, integrándonos a asociaciones y grupos con el propósito de preservar la cultura y las costumbres de este pueblo, cuna de la historia de las Californias.",
          img: "/assets/images/colash4.webp",
          isLogo: false
        },
        {
          year: "2010",
          title: "El Legado",
          desc: "Bruce Williams (Mr. Leyenda) y Susan Speck (Women Divers Hall of Fame) nos confiaron la estafeta para continuar con su legado: la protección y el amor por el mundo submarino del Parque Nacional Bahía de Loreto.\n\nCon orgullo le dimos nuestro propio sello al añadir “Baja” a nuestro nombre, marcando así el inicio de una aventura que nos ha permitido conocer a personas extraordinarias y compartir con ellas nuestra pasión por el océano.\n\nA lo largo de los años, hemos sido testigos del crecimiento de muchos buzos que comenzaron su camino con nosotros y hoy son Divemasters e instructores. Muchos de ellos no solo forman parte de nuestra historia, sino que siguen siendo parte de nuestra vida: amigos que el mar nos regaló para siempre.",
          img: "/assets/images/experiencias.webp",
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
          img: "/assets/contentD/img/PADI_AWARE.webp",
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
  // 🎨 ESTILOS ACTUALIZADOS (Ancho expandido)
  // ========================================================================

  const headingClass = `
    font-title text-4xl md:text-5xl lg:text-6xl transition-colors duration-500
    text-navy dark:text-white text-center
  `;

  const connectorLineClass = `
    hidden md:block absolute left-[88px] lg:left-[108px] top-0 bottom-0 w-[2px] -z-10
    bg-gradient-to-b from-transparent via-slate-200 to-transparent dark:via-cyan-400/30
  `;

  const eventCardClass = `
    group relative rounded-[2.5rem] md:rounded-[3.5rem] border transition-all duration-500 flex flex-col md:flex-row gap-8 md:gap-0 items-center overflow-hidden
    bg-white border-slate-200 shadow-xl hover:border-cyan-400/40 hover:-translate-y-2
    dark:bg-white/5 dark:backdrop-blur-2xl dark:border-white/10 dark:shadow-none dark:hover:border-cyan-400/50
  `;

  const yearClass = `
    font-title text-4xl md:text-5xl text-yellow-500 dark:text-yellow-400
  `;

  // Imagen normal (Foto) - Manteniendo el ancho grande pero ajustado al diseño expandido
  const imageContainerClass = `
    w-full md:w-[400px] lg:w-[480px] md:self-stretch rounded-3xl md:rounded-none overflow-hidden shrink-0 border-t md:border-t-0 md:border-l border-slate-100 dark:border-white/10 transition-all duration-500 relative z-10
  `;

  // Contenedor especial para Logos
  const logoContainerClass = `
    w-full md:w-72 lg:w-80 aspect-video rounded-3xl md:rounded-none overflow-hidden shrink-0 border-t md:border-t-0 md:border-l transition-all duration-500 relative z-10 flex items-center justify-center p-10
    bg-white dark:bg-white/10 border-slate-100 dark:border-white/20
  `;

  return (
    // ✅ CAMBIO: md:px-20 -> md:px-10 para estirar más hacia los lados
    <section id="historia" className="relative pb-24 px-6 md:px-10 scroll-mt-24 z-10">
      
      {/* ✅ CAMBIO: max-w-6xl (1152px) -> max-w-[1800px] para ocupar casi toda la pantalla */}
      <div className="max-w-[1800px] mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className={headingClass}>{content.title}</h2>
        </motion.div>

        <div className="space-y-12 relative">
          <div className={connectorLineClass} />

          {content.events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className={eventCardClass}
            >
              {/* Contenedor de contenido (Año + Texto) con padding */}
              <div className="flex-1 flex flex-col md:flex-row gap-8 p-8 md:p-12 items-center">
                
                {/* Año y Línea */}
                <div className="flex flex-col items-center md:items-start min-w-[120px] lg:min-w-[140px] shrink-0">
                  <span className={yearClass}>{event.year}</span>
                  <div className="h-1.5 w-12 rounded-full mt-4 bg-cyan-500 dark:bg-cyan-400"></div>
                </div>

                {/* Texto */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-title text-2xl md:text-3xl mb-4 text-navy dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {event.title}
                  </h3>
                  <p className="font-body font-medium leading-relaxed text-slate-600 dark:text-slate-200 whitespace-pre-line text-base md:text-lg">
                    {event.desc}
                  </p>
                </div>
              </div>

              {/* Imagen/Logo (Pegado al borde derecho en md+) */}
              <div className={event.isLogo ? logoContainerClass : imageContainerClass}>
                <img
                  src={event.img}
                  alt={event.title}
                  className={event.isLogo 
                    ? "w-full h-full object-contain" 
                    : "w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}