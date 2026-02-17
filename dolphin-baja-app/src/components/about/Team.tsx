import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Team() {
  const { t } = useLanguage();
  const content = t.aboutPage.team;

  return (
    <section id="equipo" className="relative py-24 px-6 md:px-20 scroll-mt-20 z-10">

      {/* =========================================
          Luz de fondo central (Liquid Light Optimizado)
      ========================================= */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] max-w-4xl bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none -z-10"
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
            className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-cyan-400 mb-4 block font-body drop-shadow-md"
          >
            {content.tag}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-title text-3xl md:text-5xl lg:text-6xl text-white mb-6 drop-shadow-lg"
          >
            {content.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-slate-200 leading-relaxed text-base md:text-lg drop-shadow-md"
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
              // willChange añadido al contenedor principal para que toda la animación de entrada corra por GPU
              style={{ willChange: 'transform, opacity' }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Contenedor del Avatar (Estilo Liquid Glass Apple) */}
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full p-2 border border-white/20 bg-white/5 backdrop-blur-md group-hover:border-cyan-400/60 group-hover:bg-cyan-400/10 transition-all duration-500 mb-5 relative shadow-[0_15px_30px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_40px_rgba(102,216,227,0.2)]">

                {/* Imagen del Instructor */}
                <div className="w-full h-full rounded-full overflow-hidden bg-navy relative border border-white/10" style={{ willChange: 'transform' }}>
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    // 👇 FOTO LIMPIA: Sin oscurecimientos falsos. Colores reales todo el tiempo.
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 will-change-transform"
                  />
                  {/* Se eliminó el div overlay oscuro. Ahora la foto respira 100% */}
                </div>
              </div>

              {/* Textos del Miembro */}
              <h3 className="font-title text-xl md:text-2xl text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] text-center">
                {member.name}
              </h3>

              <p className="font-body text-xs md:text-sm text-yellow-400 font-bold uppercase tracking-widest drop-shadow-md text-center">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}