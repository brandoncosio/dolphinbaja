import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen() {
  // 1. Generación de Burbujas Premium (Física y Profundidad)
  const bubbles = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      // 3 capas de profundidad para mayor inmersión
      const depthLayer = Math.random();
      let size, blur, opacity, duration, zIndex;

      if (depthLayer > 0.8) {
        // Frente (Muy nítidas y grandes, rápidas)
        size = Math.random() * 25 + 15;
        blur = '0px';
        opacity = Math.random() * 0.3 + 0.3; // 0.3 a 0.6
        duration = Math.random() * 2 + 2.5; // 2.5s - 4.5s
        zIndex = 30;
      } else if (depthLayer > 0.4) {
        // Medio (Tamaño normal, ligero desenfoque)
        size = Math.random() * 12 + 8;
        blur = '1px';
        opacity = Math.random() * 0.2 + 0.1; // 0.1 a 0.3
        duration = Math.random() * 3 + 4; // 4s - 7s
        zIndex = 20;
      } else {
        // Fondo (Pequeñas, muy desenfocadas, lentas)
        size = Math.random() * 6 + 3;
        blur = '4px';
        opacity = Math.random() * 0.1 + 0.05; // 0.05 a 0.15
        duration = Math.random() * 4 + 6; // 6s - 10s
        zIndex = 10;
      }

      return {
        id: `splash-bubble-${i}`,
        size,
        left: Math.random() * 100, // Distribución horizontal
        duration,
        delay: Math.random() * 1.5, // Salen escalonadas
        blur,
        opacity,
        zIndex,
        wobble: Math.random() * 20 + 10 // Qué tanto zigzaguean (10px a 30px)
      };
    });
  }, []);

  return (
    <motion.div
      // La salida: El fondo se desvanece y la cámara hace un sutil zoom hacia el océano
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* =========================================
          FONDO ABISAL (Luz penetrando el mar)
      ========================================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Luz de la superficie (Arriba al centro) */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[150%] md:w-[100%] h-[80%] bg-gradient-radial from-cyan-400/20 via-cyan-900/5 to-transparent mix-blend-screen" />

        {/* Profundidad oscura (Abajo) */}
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#02080B] to-transparent" />

        {/* Rayos de luz volumétrica (Opcional, muy sutil) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100%] h-[100%] bg-[conic-gradient(at_top_center,rgba(34,211,238,0.05)_0deg,transparent_60deg,transparent_300deg,rgba(34,211,238,0.05)_360deg)] mix-blend-overlay" />
      </div>

      {/* =========================================
          CAPA 1: BURBUJAS 3D REALISTAS
      ========================================= */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bottom-[-100px] rounded-full border border-white/20 bg-gradient-to-tr from-white/5 to-white/30 backdrop-blur-sm shadow-[inset_0_0_10px_rgba(255,255,255,0.1),0_0_15px_rgba(255,255,255,0.05)]"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            filter: `blur(${bubble.blur})`,
            opacity: bubble.opacity,
            zIndex: bubble.zIndex,
          }}
          initial={{ y: "10vh", x: 0, scale: 0.8 }}
          animate={{
            y: "-120vh", // Suben hasta salir de la pantalla
            x: ["0px", `${bubble.wobble}px`, `-${bubble.wobble}px`, "0px"], // Zigzag dinámico
            scale: [0.8, 1.2, 1], // Expansión natural al subir por la presión
          }}
          transition={{
            y: { duration: bubble.duration, repeat: Infinity, ease: "linear", delay: bubble.delay },
            x: { duration: bubble.duration / 1.5, repeat: Infinity, ease: "easeInOut", delay: bubble.delay },
            scale: { duration: bubble.duration, repeat: Infinity, ease: "easeOut", delay: bubble.delay }
          }}
        />
      ))}

      {/* =========================================
          CAPA 2: LOGO CENTRAL FLOTANTE (Liquid Glass)
      ========================================= */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 30 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -12, 0] // Efecto de flotación rítmica (respiración)
        }}
        transition={{
          scale: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }, // Curva de resorte suave
          opacity: { duration: 1, ease: "easeOut" },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut" } // Flota infinitamente
        }}
        className="relative z-50 flex flex-col items-center"
      >
        {/* Halo de luz oceánica detrás del logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-cyan-400/20 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />

        {/* Logo */}
        <img
          src="/assets/images/logodolphin.webp"
          alt="Dolphin Dive Baja - Cargando"
          className="w-48 md:w-64 lg:w-72 drop-shadow-[0_15px_30px_rgba(0,0,0,0.6)] relative z-10"
        />

        {/* Barra de carga minimalista (Neon Edge) */}
        <motion.div
          className="mt-10 w-40 md:w-48 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-xl relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className="h-full bg-cyan-400 relative"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }} // Sincronizado con la carga general (1.5s - 2s)
          >
            {/* Brillo en la punta de la barra */}
            <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/80 blur-[2px]" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-8 h-8 bg-cyan-400/50 blur-md rounded-full" />
          </motion.div>
        </motion.div>

        {/* Texto de Carga muy sutil */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-3 font-title text-[10px] tracking-[0.3em] uppercase text-cyan-400/50"
        >
          Sumergiendo...
        </motion.span>

      </motion.div>
    </motion.div>
  );
}