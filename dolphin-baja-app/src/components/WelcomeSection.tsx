import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import turtleImg from '/assets/contentD/img/DSC06264.webp';

export default function WelcomeSection() {
    const { lang } = useLanguage();
    const content = {
        es: {
            badge: "Bienvenidos a Loreto",
            title: "Dolphin Dive Baja Loreto",
            subtitle: "Bucea en el Mar de Cortés, ¡El Acuario del Mundo!",
            cousteau: "El Mar de Cortés fue nombrado por el famoso Jacques Cousteau como “El acuario del mundo” y su entrada está en Loreto.",
            p1: "Con 206,000 hectáreas de mar, el Parque Nacional Bahía de Loreto ha sido un área protegida por más de 20 años y cuenta con más de 50 sitios de buceo...",
            highlight: "¡Acompáñanos a explorar el mundo subacuático de Loreto!",
            p2: "Dolphin Dive Baja ha sido miembro del PADI International Resort Association desde 2001. Estamos ubicados estratégicamente a media cuadra del malecón en la calle Juárez, a 5 minutos caminando del puerto, en el centro de Loreto.",
            welcome: "¡Buzos NAUI y SSI son bienvenidos!",
            warning: "La pesca con arpón no está permitida en nuestro parque marino."
        },
        en: {
            badge: "Welcome to Loreto",
            title: "Dolphin Dive Baja Loreto",
            subtitle: "Dive in the Sea of Cortez, The Aquarium of the World!",
            cousteau: "The Sea of Cortez was named by the famous Jacques Cousteau as 'The aquarium of the world' and its entrance is in Loreto.",
            p1: "With 206,000 hectares of sea, the Loreto Bay National Park has been a protected area for over 20 years and features more than 50 dive sites...",
            highlight: "Join us to explore the underwater world of Loreto!",
            p2: "Dolphin Dive Baja has been a member of the PADI International Resort Association since 2001. We are strategically located half a block from the malecon on Juarez Street, a 5-minute walk from the port, in downtown Loreto.",
            welcome: "NAUI and SSI divers are welcome!",
            warning: "Spearfishing is not permitted in our marine park."
        }
    };

    const text = content[lang === 'en' ? 'en' : 'es'];

    return (
        <section className="relative z-10 w-full py-16 md:py-24 px-6 md:px-12 lg:px-20 overflow-hidden transition-colors duration-500 bg-slate-50 dark:bg-dark">
            <div className="max-w-7xl mx-auto">

                <article className="flex flex-col lg:flex-row items-center relative">

                    {/* =========================================
              IMAGEN HEROICA (Fondo Fotográfico)
          ========================================= */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, x: -20 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full lg:w-[55%] h-[450px] sm:h-[500px] lg:h-[750px] rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl relative z-0"
                    >
                        <img
                            src={turtleImg}
                            alt="Tortuga marina en el Parque Nacional Bahía de Loreto"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[5s] hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent dark:from-dark/80 transition-colors duration-500 pointer-events-none" />
                    </motion.div>

                    {/* =========================================
              TARJETA DE CRISTAL (Overlap Editorial)
          ========================================= */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-[95%] sm:w-[85%] lg:w-[55%] relative z-10 -mt-24 lg:mt-0 lg:-ml-24"
                    >
                        <div className="p-8 sm:p-10 lg:p-14 rounded-[2rem] lg:rounded-[2.5rem] backdrop-blur-2xl shadow-[0_30px_60px_rgba(0,0,0,0.15)] border transition-all duration-500
              bg-white/95 border-white/80
              dark:bg-dark/90 dark:border-white/10">

                            {/* Etiqueta y Título */}
                            <div className="mb-8 border-b pb-6 border-slate-200 dark:border-white/10">
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 border
                  text-cyan-700 bg-cyan-50 border-cyan-200
                  dark:text-cyan-400 dark:bg-cyan-400/10 dark:border-cyan-400/20">
                                    <i className="ri-anchor-line text-sm"></i> {text.badge}
                                </span>
                                <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl leading-tight text-navy dark:text-white mb-3">
                                    {text.title}
                                </h2>
                                <h3 className="font-body text-base md:text-lg font-bold tracking-wide text-cyan-600 dark:text-cyan-400 uppercase">
                                    {text.subtitle}
                                </h3>
                            </div>

                            {/* Contenido Editorial */}
                            <div className="space-y-5 font-body text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                                <p className="text-lg italic text-slate-700 dark:text-slate-200 border-l-4 border-cyan-400 pl-4 py-1 my-6 bg-slate-100/50 dark:bg-white/5 rounded-r-lg">
                                    "{text.cousteau}"
                                </p>
                                <p>
                                    {text.p1}
                                </p>
                                <p className="font-title text-xl text-yellow-600 dark:text-yellow-400 pt-2">
                                    {text.highlight}
                                </p>
                                <p>
                                    {text.p2}
                                </p>
                                <p className="font-bold text-cyan-700 dark:text-cyan-300">
                                    <i className="ri-checkbox-circle-fill mr-1"></i> {text.welcome}
                                </p>
                            </div>

                            {/* Advertencia / Info Importante */}
                            <div className="mt-10 flex items-start gap-3 p-4 rounded-xl border
                bg-yellow-50 border-yellow-200 text-yellow-800
                dark:bg-yellow-400/10 dark:border-yellow-400/30 dark:text-yellow-300">
                                <i className="ri-error-warning-fill text-2xl shrink-0 mt-0.5"></i>
                                <p className="font-body text-xs md:text-sm font-bold uppercase tracking-wider mt-1">
                                    {text.warning}
                                </p>
                            </div>

                        </div>
                    </motion.div>

                </article>

            </div>
        </section>
    );
}