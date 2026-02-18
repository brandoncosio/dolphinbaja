import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Team() {
  const { t } = useLanguage();
  const content = t.aboutPage.team;

  // ========================================================================
  // 🎨 ESTILOS SEPARADOS (Clean Code & Matte Fix)
  // ========================================================================

  // 1. Luz de Fondo Central (Muy sutil en Dark)
  const bgGlowClass = `
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] max-w-4xl rounded-full pointer-events-none -z-10 blur-[120px] md:blur-[150px] transition-colors duration-500
    bg-cyan-400/5
    dark:bg-white/5
  `;

  // 2. Textos Encabezado
  const tagClass = `
    text-xs md:text-sm font-bold uppercase tracking-[0.4em] mb-4 block font-body drop-shadow-md transition-colors duration-500
    text-cyan-600 dark:text-cyan-400
  `;

  const titleClass = `
    font-title text-3xl md:text-5xl lg:text-6xl mb-6 leading-tight transition-colors duration-500
    text-navy drop-shadow-[0_2px_8px_rgba(0,0,0,0.1)]
    dark:text-white dark:drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]
  `;

  const descClass = `
    font-body font-medium leading-relaxed text-base md:text-lg drop-shadow-sm transition-colors duration-500
    text-slate-600 dark:text-slate-100
  `;

  // 3. Contenedor Avatar (CORREGIDO: Sin resplandor neón en Dark)
  const avatarContainerClass = `
    w-32 h-32 md:w-44 md:h-44 rounded-full p-2 backdrop-blur-2xl transition-all duration-500 mb-5 relative group-hover:scale-105
    
    /* LIGHT MODE: Borde limpio + Sombra suave */
    border border-slate-200 bg-white shadow-xl shadow-slate-200/50 group-hover:border-cyan-400/50
    
    /* DARK MODE: Matte Glass (Sin shadow exterior) */
    dark:border-white/10 dark:bg-white/5 dark:shadow-none 
    dark:group-hover:border-white/30 dark:group-hover:bg-white/10
  `;

  // 4. Nombre y Rol
  const nameClass = `
    font-title text-xl md:text-2xl mb-1 transition-colors duration-300 drop-shadow-sm text-center
    text-navy group-hover:text-cyan-600
    dark:text-white dark:group-hover:text-cyan-300
  `;

  const roleClass = `
    font-body text-xs md:text-sm font-bold uppercase tracking-widest drop-shadow-sm text-center transition-colors
    text-yellow-600 dark:text-yellow-400
  `;

  return (
    <section id="equipo" className="relative py-24 px-6 md:px-20 scroll-mt-20 z-10">

      {/* Luz de fondo central */}
      <div
        className={bgGlowClass}
        style={{ willChange: 'transform' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* =========================================
            ENCABEZADO
            ========================================= */}
        <div className="text-center mb-16 md:mb-20 max-w-3xl mx-auto">
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
            GRID DEL EQUIPO
            ========================================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-16">
          {content.members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center group cursor-pointer hover:-translate-y-2 transition-transform duration-500"
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Contenedor del Avatar */}
              <div className={avatarContainerClass}>
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-navy relative border border-slate-100 dark:border-white/10" style={{ willChange: 'transform' }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 will-change-transform"
                  />
                </div>
              </div>

              {/* Textos del Miembro */}
              <h3 className={nameClass}>
                {member.name}
              </h3>

              <p className={roleClass}>
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}