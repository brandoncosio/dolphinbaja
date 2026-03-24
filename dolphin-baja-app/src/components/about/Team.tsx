import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Team() {
  const { lang } = useLanguage();

  // ========================================================================
  // 📚 BASE DE DATOS DEL EQUIPO (Control local y fácil de editar)
  // ========================================================================
  const pageData = {
    es: {
      tag: "Nuestra Familia",
      title: "Conoce al Equipo Dolphin Dive",
      desc: "Somos más que guías e instructores; somos protectores del océano y anfitriones de nuestro hogar. Cada miembro de esta familia aporta su pasión única para que tu experiencia sea inolvidable.",
      members: [
        {
          name: "María (La Jefa)",
          role: "Co-Fundadora & Mercadóloga",
          desc: "Mercadóloga con maestría en turismo y amante de los mamíferos marinos, busca cada día brindar la motivación necesaria al equipo para seguir trabajando en beneficio de nuestra comunidad y del medio ambiente.",
          img: "/assets/nosotros/maria.webp" // 👈 Cambia por la ruta real de la foto de María
        },
        {
          name: "Rafa (El Patrón)",
          role: "Co-Fundador & Coordinador",
          desc: "Con maestría en Economía de Recursos Naturales, coordina al equipo para que todo suceda. Su pasión por la naturaleza lo impulsa a trabajar de la mano con la comunidad en cada oportunidad, para que Loreto siga siendo un gran lugar para vivir.",
          img: "/assets/nosotros/rafa2.webp" // 👈 Cambia por la ruta real de Rafa
        },
        {
          name: "El Rafita (Rafa Jr)",
          role: "Ingeniero Agrónomo",
          desc: "Amante de la naturaleza, es analítico y se asegura de que todo suceda en tiempo y forma; siempre está listo para seguir aprendiendo y aportar al equipo.",
          img: "/assets/nosotros/rafa3.webp" // 👈 Cambia por la ruta real de Rafita
        },
        {
          name: "Fiona",
          role: "Mercadóloga",
          desc: "Apasionada por el mar y la naturaleza, no ve la hora de pasar cada momento junto al océano. Con su inmensa alegría y dedicación, logra unir al equipo.",
          img: "/assets/nosotros/fiona.webp" // 👈 Cambia por la ruta real de Fiona
        },
        {
          name: "Pablo",
          role: "Biólogo Marino",
          desc: "Llegó a la familia Dolphin para compartir su profundo conocimiento y contagiar a todos los visitantes su inmenso entusiasmo por el mundo marino.",
          img: "/assets/nosotros/pablo.webp" // 👈 Cambia por la ruta real de Pablo
        },
        {
          name: "Kalimán",
          role: "Guía Local",
          desc: "Con toda una vida ligada al mar desde su infancia, conoce cada rincón de la zona y nos enriquece todos los días al compartir sus invaluables vivencias y conocimientos.",
          img: "/assets/nosotros/kaliman2.png" // 👈 Cambia por la ruta real de Kalimán
        },
        {
          name: "Eruviel",
          role: "Guía Local",
          desc: "De familia de pescadores y pescador de corazón, muestra un gran entusiasmo por aprender sobre el turismo de naturaleza. Le apasiona cuidar su entorno y siempre está dispuesto a colaborar en lo que se necesite.",
          img: "/assets/nosotros/luis.webp" // 👈 Cambia por la ruta real de Eruviel
        },
        {
          name: "Alex",
          role: "Staff / Guía",
          desc: "Parte fundamental de nuestra familia, siempre dispuesto a ayudar y compartir su amor por el océano con cada visitante para garantizar una experiencia segura, fluida y sobre todo, muy divertida.",
          img: "/assets/nosotros/alex.webp" // 👈 Cambia por la ruta real de Alex
        }
      ]
    },
    en: {
      tag: "Our Family",
      title: "Meet the Dolphin Dive Team",
      desc: "We are more than guides and instructors; we are protectors of the ocean and hosts of our home. Each member of this family brings their unique passion to make your experience unforgettable.",
      members: [
        {
          name: "María (La Jefa)",
          role: "Co-Founder & Marketer",
          desc: "A marketer with a master's degree in tourism and a lover of marine mammals. She seeks every day to provide the necessary motivation to the team to continue working for the benefit of our community and the environment.",
          img: "/assets/nosotros/maria.webp"
        },
        {
          name: "Rafa (El Patrón)",
          role: "Co-Founder & Coordinator",
          desc: "With a master's degree in Natural Resource Economics, he coordinates the team to make everything happen. His passion for nature drives him to work hand in hand with the community so that Loreto remains a great place to live.",
          img: "/assets/nosotros/rafa2.webp"
        },
        {
          name: "El Rafita (Rafa Jr)",
          role: "Agronomist Engineer",
          desc: "A true nature lover, he is highly analytical and ensures that everything happens on time and in order. He is always ready to keep learning and contributing to the team.",
          img: "/assets/nosotros/rafa3.webp"
        },
        {
          name: "Fiona",
          role: "Marketer",
          desc: "Passionate about the sea and nature, she can't wait to spend every possible moment by the ocean. With her immense joy and dedication, she truly brings the team together.",
          img: "/assets/nosotros/fiona.webp"
        },
        {
          name: "Pablo",
          role: "Marine Biologist",
          desc: "He joined the Dolphin family to share his deep knowledge and spread his immense enthusiasm for the marine world to all our visitors.",
          img: "/assets/nosotros/pablo.webp"
        },
        {
          name: "Kalimán",
          role: "Local Guide",
          desc: "With a lifetime tied to the sea since his childhood, he knows every corner of the area and enriches us every day by sharing his invaluable experiences and knowledge.",
          img: "/assets/nosotros/kaliman2.png"
        },
        {
          name: "Eruviel",
          role: "Local Guide",
          desc: "Coming from a family of fishermen and a fisherman at heart, he shows great enthusiasm for learning about nature tourism. He is passionate about caring for his environment and is always willing to help.",
          img: "/assets/nosotros/luis.webp"
        },
        {
          name: "Alex",
          role: "Staff / Guide",
          desc: "A fundamental part of our family, always ready to help and share his love for the ocean with every visitor to ensure a safe, smooth, and above all, very fun experience.",
          img: "/assets/nosotros/alex.webp" // 👈 Change to real path for Alex
        }
      ]
    }
  };

  const content = pageData[lang === 'en' ? 'en' : 'es'];

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Tarjetas Glassmorphism Premium)
  // ========================================================================

  const bgGlowClass = `
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] max-w-4xl rounded-full pointer-events-none -z-10 blur-[120px] md:blur-[150px] transition-colors duration-500
    bg-cyan-400/10
    dark:bg-cyan-500/10
  `;

  const tagClass = `
    text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-4 block font-body drop-shadow-md transition-colors duration-500
    text-cyan-600 dark:text-cyan-400
  `;

  const titleClass = `
    font-title text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight transition-colors duration-500
    text-navy drop-shadow-sm
    dark:text-white
  `;

  const descClass = `
    font-body font-medium leading-relaxed text-base md:text-lg transition-colors duration-500
    text-slate-600 dark:text-slate-300
  `;

  // Nueva clase para la tarjeta premium
  const cardClass = `
    glass-panel flex flex-col items-center text-center p-8 sm:p-10 rounded-[2.5rem] group transition-all duration-500 
    hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-400/50
  `;

  return (
    <section id="equipo" className="relative py-10 md:py-16 px-6 md:px-12 lg:px-20 scroll-mt-20 z-10">

      {/* Luz de fondo central */}
      <div
        className={bgGlowClass}
        style={{ willChange: 'transform' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =========================================
            ENCABEZADO
            ========================================= */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={tagClass}
          >
            {content.tag}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={titleClass}
          >
            {content.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={descClass}
          >
            {content.desc}
          </motion.p>
        </div>

        {/* =========================================
            GRID DEL EQUIPO (Tarjetas Modernas)
            ========================================= */}
        {/* Usamos auto-fit para que se adapten bonito */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 justify-center">
          {content.members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: (idx % 4) * 0.1, duration: 0.5, ease: "easeOut" }}
              className={cardClass}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Contenedor del Avatar */}
              <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 border-4 border-white dark:border-white/10 shadow-lg group-hover:border-cyan-400 dark:group-hover:border-cyan-400 transition-colors duration-500 shrink-0">
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-[2s] ease-out group-hover:scale-110 will-change-transform"
                />
              </div>

              {/* Textos del Miembro */}
              <h3 className="font-title text-2xl md:text-3xl mb-2 transition-colors duration-300 text-navy dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                {member.name}
              </h3>

              <p className="font-body text-xs font-bold uppercase tracking-widest mb-5 text-yellow-600 dark:text-yellow-400">
                {member.role}
              </p>

              <p className="font-body text-sm md:text-base leading-relaxed text-slate-600 dark:text-slate-300">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}