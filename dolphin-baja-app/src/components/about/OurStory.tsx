import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { sileo } from 'sileo';

export default function OurStory() {
  const { lang } = useLanguage();

  // ========================================================================
  // 📚 DATOS LOCALES (Historia, Stats, Valores y Misión Actualizada)
  // ========================================================================
  const pageData = {
    es: {
      since: "Dolphin Dive Baja",
      title: "Nuestra Historia",
      p1: "Llegamos hace 20 años a Loreto, y este hermoso paraíso nos cautivó tanto que decidimos hacerlo nuestro hogar. Fue así como en el año 2010 fundamos Dolphin Dive Baja con un sueño claro en mente: compartir la magia y los secretos del Mar de Cortés con el mundo.",
      p2: "A lo largo de los años hemos crecido no solo como un centro de buceo, sino como una verdadera comunidad. Hoy en día, somos 8 miembros en la familia Dolphin Dive, todos unidos por una misma vocación: proteger este ecosistema y mostrarte las maravillas que habitan bajo la superficie con un profundo respeto por la naturaleza.",
      stats: [
        { num: "20", label: "Años en Loreto" },
        { num: "2010", label: "Año de Inicio" },
        { num: "8", label: "Miembros en la Familia" }
      ],
      values: ["Familia", "Comunidad", "Seguridad", "Amor", "Educación", "Profesionalismo"],
      mission: {
        tag: "NUESTRO COMPROMISO",
        main: "Revelar a nuestros invitados la belleza del océano para inspirar su protección.",
        highlight: "Compartir la belleza del océano es nuestra misión; inspirar su conservación, nuestro propósito.",
        end: "Nosotros somos solo visitantes en su hogar.",
        btn: "Contactar a la familia"
      }
    },
    en: {
      since: "Dolphin Dive Baja",
      title: "Our Story",
      p1: "We arrived in Loreto 20 years ago, and this beautiful paradise captivated us so much that we decided to make it our home. That is how, in 2010, we founded Dolphin Dive Baja with a clear dream in mind: to share the magic and secrets of the Sea of Cortez with the world.",
      p2: "Over the years, we have grown not just as a dive center, but as a true community. Today, there are 8 members in the Dolphin Dive family, all united by the same calling: protecting this ecosystem and showing you the wonders that live beneath the surface with deep respect for nature.",
      stats: [
        { num: "20", label: "Years in Loreto" },
        { num: "2010", label: "Started in" },
        { num: "8", label: "Family Members" }
      ],
      values: ["Family", "Community", "Safety", "Love", "Education", "Professionalism"],
      mission: {
        tag: "OUR STATEMENT",
        main: "Reveal the beauty of the ocean to our guests and inspire its protection.",
        highlight: "Sharing the beauty of the ocean is our mission; inspiring its conservation, our purpose.",
        end: "We are only visitors in their home.",
        btn: "Contact the family"
      }
    }
  };

  const content = pageData[lang === 'en' ? 'en' : 'es'];

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Modernización y Premium Feel)
  // ========================================================================

  const entryGradientClass = `
    absolute top-0 left-0 right-0 h-32 pointer-events-none z-0 transition-colors duration-500
    bg-gradient-to-b from-slate-50 to-transparent
    dark:from-dark dark:to-transparent
  `;

  const headingClass = `
    font-title text-4xl md:text-5xl lg:text-6xl leading-[1.1] transition-colors duration-500 mb-6
    text-navy drop-shadow-sm
    dark:text-white
  `;

  const paragraphClass = `
    space-y-5 font-body font-medium text-base md:text-lg leading-relaxed transition-colors duration-500
    text-slate-600 dark:text-slate-300
  `;

  const subTitleClass = `
    inline-block text-xs md:text-sm font-bold uppercase tracking-[0.3em] transition-colors duration-500 mb-4
    text-cyan-600 dark:text-cyan-400
  `;

  const statCardClass = `
    glass-panel p-6 lg:p-8 rounded-[2rem] text-center transition-all duration-500 group hover:-translate-y-2
    hover:border-cyan-400/50 hover:shadow-cyan-500/10
  `;

  const statNumClass = `
    block font-title text-5xl lg:text-6xl mb-2 transition-colors duration-300 drop-shadow-sm
    text-cyan-600 group-hover:text-cyan-500
    dark:text-cyan-400 dark:group-hover:text-cyan-300
  `;

  const statLabelClass = `
    text-[10px] md:text-xs font-body font-bold uppercase tracking-[0.2em] transition-colors
    text-slate-500 group-hover:text-slate-700
    dark:text-slate-400 dark:group-hover:text-slate-200
  `;

  const handleSmartEmail = (e: React.MouseEvent, packageName: string) => {
    e.preventDefault();
    const email = 'ventas@dolphindivebaja.com';
    const subject = lang === 'es' ? `Reserva Paquete: ${packageName}` : `Package Booking: ${packageName}`;
    const message = lang === 'es'
      ? `Hola Equipo Dolphin, me gustaría reservar el paquete ${packageName}, ¿me dan más información por favor?`
      : `Hello Dolphin Team, I would like to book the ${packageName} package, could you give me more information please?`;

    navigator.clipboard.writeText(email).catch(() => { });

    sileo.success({
      title: lang === 'es' ? '¡Abriendo Gmail!' : 'Opening Gmail!',
      description: lang === 'es' ? 'También copiamos el correo por si usas otra app.' : 'We also copied the email just in case.',
    });

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

    setTimeout(() => {
      window.open(gmailLink, '_blank');
    }, 800);
  };

  return (
    <section className="relative py-8 md:py-16 px-6 overflow-hidden z-10">
      {/* Gradiente para conectar suavemente con el Hero */}
      <div className={entryGradientClass} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =========================================
            PARTE 1: HISTORIA Y ESTADÍSTICAS
        ========================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center mb-24 md:mb-32">

          {/* Columna Texto (Toma 7 espacios) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-2"
          >
            <span className={subTitleClass}>{content.since}</span>
            <h2 className={headingClass}>{content.title}</h2>
            <div className={paragraphClass}>
              <p>{content.p1}</p>
              <p>{content.p2}</p>
            </div>

            {/* Valores en formato Píldoras */}
            <div className="flex flex-wrap gap-2.5 pt-6">
              {content.values.map((val, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full border text-[10px] md:text-xs font-bold uppercase tracking-widest shadow-sm transition-colors duration-500 
                  bg-white border-slate-200 text-cyan-700 
                  dark:bg-white/5 dark:border-white/10 dark:text-cyan-400"
                >
                  {val}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Columna Stats Grid (Toma 5 espacios) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 md:gap-5">
            {content.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`${statCardClass} ${idx === 2 ? 'col-span-2' : 'col-span-1'}`}
                style={{ willChange: "transform" }}
              >
                <span className={statNumClass}>{stat.num}</span>
                <span className={statLabelClass}>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =========================================
            PARTE 2: BANNER DE MISIÓN REDISEÑADO
        ========================================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden p-1 bg-gradient-to-br from-cyan-400/30 via-transparent to-blue-500/30 shadow-2xl group"
        >
          {/* Fondo Cristal del Banner */}
          <div className="relative h-full w-full rounded-[2.3rem] md:rounded-[2.8rem] px-6 py-16 md:py-24 text-center flex flex-col items-center justify-center overflow-hidden
            bg-white/90 dark:bg-dark/90 backdrop-blur-3xl"
          >
            {/* Luces sutiles de fondo dentro de la tarjeta */}
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-400/20 rounded-full blur-[80px] pointer-events-none transition-transform duration-[10s] group-hover:translate-x-20" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none transition-transform duration-[10s] group-hover:-translate-x-20" />

            <div className="relative z-20 max-w-4xl mx-auto flex flex-col items-center">
              {/* Icono decorativo */}
              <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 shadow-inner">
                <i className="ri-double-quotes-l text-3xl"></i>
              </div>

              <p className="text-slate-400 dark:text-slate-500 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6">
                {content.mission.tag}
              </p>

              <h3 className="font-title text-2xl md:text-4xl text-navy dark:text-white leading-relaxed md:leading-tight mb-8">
                {content.mission.main}
                <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 drop-shadow-sm block mt-2">
                  "{content.mission.highlight}"
                </span>
              </h3>

              <p className="font-body text-base md:text-xl text-slate-500 dark:text-slate-300 font-medium italic mb-12">
                — {content.mission.end}
              </p>

              <button
                onClick={(e) => handleSmartEmail(e, content.mission.btn)}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-xl text-white font-title text-sm tracking-widest uppercase transition-all duration-300 shadow-lg active:scale-95 
                bg-cyan-600 hover:bg-cyan-500 hover:-translate-y-1
                dark:bg-cyan-500 dark:text-navy dark:hover:bg-cyan-400"
              >
                <i className="ri-mail-send-line text-lg"></i>
                {content.mission.btn}
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}