import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Importamos el contexto de idioma
import { useLanguage } from '../context/LanguageContext';

// Imágenes
import imgTours from '/assets/images/tours.webp';
import imgExperiencias from '/assets/images/experiencias.webp';
import imgStaff from '/assets/images/staff.webp';
import imgPlanifica from '/assets/images/planifica2.webp';

export default function Highlights() {
  const { t } = useLanguage();
  const content = t.home.highlights;

  const highlightsData = [
    {
      id: 1,
      kicker: content.cards[0].kicker,
      title: content.cards[0].title,
      image: imgTours,
      link: "/servicios",
      // Móvil: rectangular. Tablet: ancho completo. Escritorio: Asimétrico grande.
      size: "aspect-[4/3] sm:col-span-2 md:col-span-2 md:row-span-2 md:aspect-auto",
      delay: 0
    },
    {
      id: 2,
      kicker: content.cards[1].kicker,
      title: content.cards[1].title,
      image: imgExperiencias,
      link: "/servicios",
      // Móvil/Tablet: cuadrado. Escritorio: Normal.
      size: "aspect-square sm:aspect-auto md:col-span-1 md:row-span-1",
      delay: 0.1
    },
    {
      id: 3,
      kicker: content.cards[2].kicker,
      title: content.cards[2].title,
      image: imgStaff,
      link: "/nosotros",
      size: "aspect-square sm:aspect-auto md:col-span-1 md:row-span-1",
      delay: 0.2
    },
    {
      id: 4,
      kicker: content.cards[3].kicker,
      title: content.cards[3].title,
      image: imgPlanifica,
      link: "/contacto",
      // Tablet: 2 col. Escritorio: Ancho final abajo
      size: "aspect-[4/3] sm:col-span-2 md:col-span-2 md:row-span-1 md:aspect-auto",
      delay: 0.3
    }
  ];

  return (
    <section className="relative z-10 w-full py-16 md:py-24 px-6 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ENCABEZADO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 md:mb-16 text-center md:text-left relative"
        >
          {/* Luz decorativa suave con tu nuevo azul marino */}
          <div className="absolute top-1/2 left-1/2 md:-left-10 -translate-x-1/2 md:-translate-x-0 -translate-y-1/2 -z-10 h-32 w-32 rounded-full bg-cyan-400/15 blur-[60px]" />

          <span className="text-xs font-bold uppercase tracking-[0.4em] text-cyan-400 block mb-4 drop-shadow-md">
            {content.tag}
          </span>
          <h2 className="font-title text-3xl md:text-5xl lg:text-6xl text-white leading-tight drop-shadow-lg">
            {content.titleStart} <br className="hidden md:block" /> <span className="text-yellow-400">{content.titleHighlight}</span>
          </h2>
          <p className="mt-4 md:mt-6 text-slate-200 max-w-2xl mx-auto md:mx-0 text-base md:text-lg leading-relaxed font-body font-medium drop-shadow-md">
            {content.desc}
          </p>
        </motion.div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:auto-rows-[250px] gap-4 md:gap-6">
          {highlightsData.map((item) => (
            <Link
              to={item.link}
              key={item.id}
              className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-dark/40 shadow-lg hover:border-cyan-400/40 hover:shadow-[0_15px_40px_rgba(102,216,227,0.15)] transition-all duration-500 block ${item.size}`}
              style={{ willChange: 'transform' }} // Optimización Safari
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item.delay, duration: 0.6, ease: "easeOut" }}
                className="h-full w-full relative"
              >
                {/* Imagen */}
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  // 'will-change-transform' evita parpadeos en iOS al hacer hover
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 will-change-transform"
                />

                {/* 👇 EL SECRETO DE LUMINOSIDAD: Un solo gradiente que protege el texto y libera la foto */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/10 to-transparent transition-opacity duration-500 group-hover:via-dark/30" />

                {/* Textos */}
                <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10 flex flex-col justify-end h-full">
                  <div className="transform transition-transform duration-500 md:group-hover:-translate-y-2">
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block drop-shadow-md">
                      {item.kicker}
                    </span>
                    <h3 className="font-title text-xl md:text-2xl lg:text-3xl text-white mb-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] leading-tight">
                      {item.title}
                    </h3>

                    {/* Link "Ver detalles" */}
                    <div className="flex items-center gap-2 text-xs md:text-sm font-bold text-yellow-400 opacity-100 md:opacity-0 transform md:translate-y-4 transition-all duration-500 md:group-hover:opacity-100 md:group-hover:translate-y-0 drop-shadow-md">
                      {content.cardLink} <i className="ri-arrow-right-line md:group-hover:translate-x-1 transition-transform"></i>
                    </div>
                  </div>
                </div>

                {/* Botón flotante top-right (Solo Desktop) */}
                <div className="hidden md:flex absolute top-6 right-6 h-12 w-12 bg-white/5 backdrop-blur-md rounded-full items-center justify-center border border-white/20 text-white shadow-lg group-hover:bg-cyan-400/20 group-hover:text-cyan-400 group-hover:border-cyan-400/50 transition-all duration-500 z-10">
                  <i className="ri-arrow-right-up-line text-xl group-hover:rotate-45 transition-transform duration-300"></i>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}