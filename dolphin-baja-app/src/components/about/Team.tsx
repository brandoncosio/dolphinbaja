import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

export default function Team() {
  const { t } = useLanguage();
  const content = t.aboutPage.team;

  return (
    // Se quita el bg-slate-900 para usar el fondo del main y se le da z-10
    <section id="equipo" className="relative py-24 px-6 md:px-20 scroll-mt-20 z-10">

      {/* Glow de fondo central (Liquid Light) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-cyan-400/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ENCABEZADO */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400 mb-4 block font-body drop-shadow-md"
          >
            {content.tag}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-title text-3xl md:text-5xl text-white mb-6 drop-shadow-md"
          >
            {content.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-body text-slate-300 leading-relaxed text-base md:text-lg"
          >
            {content.desc}
          </motion.p>
        </div>

        {/* GRID DEL EQUIPO */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12 md:gap-y-16">
          {content.members.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Contenedor del Avatar (Estilo Liquid Glass) */}
              <div className="w-32 h-32 md:w-44 md:h-44 rounded-full p-1.5 border border-white/10 bg-white/5 backdrop-blur-md group-hover:border-cyan-400/50 group-hover:bg-cyan-400/10 transition-all duration-500 mb-5 relative shadow-[0_10px_25px_rgba(0,0,0,0.3)] group-hover:shadow-[0_15px_35px_rgba(102,216,227,0.2)]">

                <div className="w-full h-full rounded-full overflow-hidden bg-dark/80 relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1s] ease-out group-hover:scale-110"
                  />
                  {/* Overlay sutil que se quita al pasar el mouse */}
                  <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>

              </div>

              {/* Textos del Miembro */}
              <h3 className="font-title text-xl md:text-2xl text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300 drop-shadow-sm">
                {member.name}
              </h3>
              <p className="font-body text-xs md:text-sm text-yellow-400 font-bold uppercase tracking-wider drop-shadow-sm">
                {member.role}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}