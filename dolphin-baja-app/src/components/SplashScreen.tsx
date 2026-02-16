import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen() {
  // 1. Generación de Burbujas Premium (Efecto 3D de profundidad)
  const bubbles = useMemo(() => {
    return Array.from({ length: 50 }).map((_, i) => {
      // Diferenciamos entre burbujas de fondo (pequeñas y borrosas) y de frente (nítidas)
      const isForeground = Math.random() > 0.5;
      const size = isForeground ? Math.random() * 20 + 10 : Math.random() * 10 + 4;

      return {
        id: `bubble-${i}`,
        size: size,
        left: Math.random() * 100, // Posición horizontal aleatoria
        duration: Math.random() * 4 + 3, // Velocidad entre 3 y 7 seg
        delay: Math.random() * 2, // Retraso inicial para que no salgan todas de golpe
        blur: isForeground ? '0px' : '3px',
        opacity: isForeground ? 0.4 : 0.1,
      };
    });
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.05 }} // Se desvanece haciendo un leve zoom in
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-[#05131a]" // Color Abisal
    >
      {/* =========================================
          LUCES DEL FONDO OCEÁNICO (Liquid Light)
      ========================================= */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-cyan-400/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#0C71A5]/20 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      {/* =========================================
          CAPA 1: BURBUJAS 3D REALISTAS
      ========================================= */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bottom-[-50px] rounded-full border border-white/20 bg-gradient-to-tr from-white/5 to-white/20 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            filter: `blur(${bubble.blur})`,
            opacity: bubble.opacity,
          }}
          initial={{ y: "10vh", x: 0 }}
          animate={{
            y: "-120vh", // Suben hasta desaparecer
            x: ["0px", "15px", "-15px", "0px"], // Movimiento de zigzag suave
          }}
          transition={{
            y: {
              duration: bubble.duration,
              repeat: Infinity,
              ease: "linear",
              delay: bubble.delay,
            },
            x: {
              duration: bubble.duration / 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            }
          }}
        />
      ))}

      {/* =========================================
          CAPA 2: LOGO CENTRAL FLOTANTE
      ========================================= */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 20 }}
        animate={{
          scale: 1,
          opacity: 1,
          y: [0, -10, 0] // Efecto de flotación tipo respiración
        }}
        transition={{
          scale: { duration: 1, ease: "easeOut" },
          opacity: { duration: 1, ease: "easeOut" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" } // Flota infinitamente
        }}
        className="relative z-10 flex flex-col items-center"
      >
        {/* Halo de luz detrás del logo para que resalte más */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-cyan-400/20 blur-[60px] rounded-full mix-blend-screen -z-10" />

        <img
          src="/assets/images/logodolphin.webp"
          alt="Dolphin Dive Baja"
          className="w-48 md:w-64 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        />

        {/* Barra de carga minimalista estilo Liquid Glass */}
        <motion.div
          className="mt-8 w-32 h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(102,216,227,0.8)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }} // Dura casi lo mismo que el timer del Home
          />
        </motion.div>

      </motion.div>
    </motion.div>
  );
}