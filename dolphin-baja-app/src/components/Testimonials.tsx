import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

// ========================================================================
// 🗄️ BASE DE DATOS DE TESTIMONIOS (Extraídos del documento real)
// ========================================================================
const realTestimonials = [
  {
    name: "Jean",
    date: "Abril 2025",
    text: "Gran viaje con Alex que sabía dónde ir y estaba muy bien informado sobre la historia de la zona. Nos encantó ver ballenas jorobadas que despejaban el agua repetidamente y volteaban. También los delfines rodearon juguetonamente nuestro barco. Y las tetas de patas azules estaban allí para saludarnos... Nos sentimos bendecidos de haber conocido a Alex y de disfrutar a fondo de 5 maravillosas horas explorando la belleza del Mar de Cortés y la Isla Coronado."
  },
  {
    name: "Gary H.",
    date: "Septiembre 2024",
    text: "Este es nuestro tercer año de buceo con Dolphin Dive en Loreto y son maravillosos. María, Ensel y Alex son grandes maestros del buceo. Llévate a donde quieras ir, bucea a la velocidad y profundidad que solicites y conoce algunos lugares increíbles para experiencias maravillosas... Nunca hemos tenido una mala inmersión con esta gente. Recomiendo encarecidamente Dolphin Dive a cualquier buceador independientemente de sus niveles de experiencia."
  },
  {
    name: "Michele R.",
    date: "Enero 2024",
    text: "¡La inmersión con leones marinos fue genial! Alex fue un gran guía y manejó los problemas con nuestro grupo sin problemas. El agua estaba fría, así que prepárate para eso, pero fue un gran día con toneladas de delfines, leones marinos, peces guitarra y anguilas... ¡Hay mucho que ver!"
  },
  {
    name: "Nathan S.",
    date: "Octubre 2023",
    text: "Recomiendo altamente Dolphin Dive para tours de buceo y snorkel en Loreto. María y Rafa son increíbles y se aseguran de que cada parte de su recorrido sea excepcional. Cada uno de los miembros de su personal es amable, servicial y está muy bien informado."
  },
  {
    name: "Alphaus S.",
    date: "Octubre 2023",
    text: "Personal experimentado, muy conocedor y apasionado de todo lo relacionado con el agua. El tour de snorkel y almuerzo fue lo más destacado de nuestra semana en Loreto. María es una excelente guía y anfitriona. El personal y la tripulación son increíbles al ayudar a los amantes de la tierra a experimentar la rica diversidad y belleza de la vida en el océano. Muy, muy recomendable."
  },
  {
    name: "Susana C.",
    date: "Hace 3 meses",
    text: "María, Rafa y Pablo han conseguido que el buceo para mí no se quede en la mala experiencia que tuve en España. Mil gracias por ser tan atentos, cuidar de nosotros, y hacer que en este viaje a Loreto, hayamos disfrutado tanto del buceo."
  },
  {
    name: "Teresa B.",
    date: "Hace un año",
    text: "Experiencia excelente! Acompañaron a la persona que hacía discover (su primer buceo) con mucha paciencia y atención, dando indicaciones claras y con mucha precaución. Mientras íbamos al lugar del buceo, encontramos una ballena azul y estuvimos alrededor de una hora haciendo observación, con el capitán (el Güero) y el instructor (Alex) explicándonos sobre ballenas. Super recomendado!"
  },
  {
    name: "Janika M.",
    date: "Hace 6 meses",
    text: "Reservamos una excursión de snorkel y quedamos muy satisfechos. De camino, vimos un hermoso banco de delfines y pudimos relajarnos... El equipo fue muy amable y me atendió, me sugirió varias alternativas y, al final, me dieron suficiente ropa para cubrirme por completo, así que me animé a volver al agua en el segundo punto y disfrutar de verdad del snorkel. La comida también estuvo deliciosa."
  },
  {
    name: "Mark Z.",
    date: "Hace 6 meses",
    text: "Nos atendieron de maravilla. Alex, nuestro instructor de buceo, fue increíble. Hicimos dos días de buceo en ambas islas y todo salió perfecto. Recomiendo ampliamente la tienda."
  }
];

export default function Testimonials() {
  const { t } = useLanguage();

  // Mantenemos los títulos dinámicos según el idioma (inglés/español)
  const content = t.testimonials;

  // Estilo de tarjeta de cristal
  const glassCardClass = `
    p-8 rounded-[2rem] border transition-all duration-500 shadow-lg relative overflow-hidden group flex flex-col h-full
    bg-white/80 border-slate-200 hover:border-cyan-400/40 hover:-translate-y-2
    dark:bg-white/5 dark:backdrop-blur-xl dark:border-white/10 dark:shadow-none dark:hover:border-white/20
  `;

  return (
    <section className="relative py-24 px-6 md:px-20 z-10 max-w-7xl mx-auto overflow-hidden">

      {/* HEADER */}
      <div className="text-center mb-16 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs md:text-sm font-bold uppercase tracking-[0.4em] text-cyan-600 dark:text-cyan-400 mb-4 block font-body drop-shadow-md"
        >
          {content.tag}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-title text-3xl md:text-5xl text-navy dark:text-white drop-shadow-sm leading-tight mb-6"
        >
          {content.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto font-body text-slate-600 dark:text-slate-300 leading-relaxed font-medium"
        >
          {content.desc}
        </motion.p>
      </div>

      {/* GRID DE TESTIMONIOS */}
      {/* Usamos items-stretch para que todas las tarjetas midan lo mismo aunque el texto varíe */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10 items-stretch">
        {realTestimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (idx % 3) * 0.15, duration: 0.5 }}
            className={glassCardClass}
          >
            {/* Comillas decorativas de fondo */}
            <i className="ri-double-quotes-l absolute -top-4 -right-4 text-8xl text-cyan-500/10 dark:text-cyan-400/5 group-hover:scale-110 transition-transform duration-500"></i>

            {/* Estrellas (5 estrellas fijas) */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <i key={i} className="ri-star-fill text-yellow-400 text-lg"></i>
              ))}
            </div>

            {/* Texto del Testimonio (Ajuste visual para textos largos) */}
            <p className="font-body text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed flex-grow relative z-10 italic mb-8">
              "{testimonial.text}"
            </p>

            {/* Info del Cliente */}
            <div className="mt-auto flex items-center gap-4 relative z-10 border-t border-slate-100 dark:border-white/10 pt-4">
              <div className="w-12 h-12 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400 font-title text-xl border border-cyan-200 dark:border-cyan-400/20 shrink-0">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-title text-navy dark:text-white text-lg leading-none mb-1">{testimonial.name}</h4>
                <span className="font-body text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                  {testimonial.date}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}