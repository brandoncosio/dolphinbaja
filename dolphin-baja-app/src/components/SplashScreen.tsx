import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen() {
  // Burbujas Optimizadas para iOS
  const bubbles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => {
      const depthLayer = Math.random();
      let size, opacity, duration, zIndex;

      if (depthLayer > 0.7) {
        size = Math.random() * 20 + 10;
        opacity = Math.random() * 0.3 + 0.2;
        duration = Math.random() * 2 + 2.5;
        zIndex = 30;
      } else if (depthLayer > 0.3) {
        size = Math.random() * 10 + 6;
        opacity = Math.random() * 0.2 + 0.1;
        duration = Math.random() * 3 + 4;
        zIndex = 20;
      } else {
        size = Math.random() * 5 + 3;
        opacity = Math.random() * 0.1 + 0.05;
        duration = Math.random() * 4 + 6;
        zIndex = 10;
      }

      return {
        id: `splash-bubble-${i}`,
        size,
        left: Math.random() * 100,
        duration,
        delay: Math.random() * 1.5,
        opacity,
        zIndex,
        wobble: Math.random() * 15 + 5
      };
    });
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      // bg-dark ahora invoca el Azul Arrecife de tu index.css
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* =========================================
          FONDO ABISAL LUMINOSO (Aguas Someras)
      ========================================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 👇 AUMENTAMOS LA LUZ: from-cyan-400/30 y via-ocean/30 para que los rayos de sol destaquen más sobre el nuevo fondo azul */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[150%] md:w-[100%] h-[80%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/40 via-ocean/30 to-transparent" />

        {/* navy ahora es un azul oscuro vibrante, no negro */}
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-navy to-transparent" />
      </div>

      {/* =========================================
          CAPA 1: BURBUJAS 
      ========================================= */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bottom-[-80px] rounded-full border border-white/20 bg-gradient-to-tr from-white/10 to-white/30 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            opacity: bubble.opacity,
            zIndex: bubble.zIndex,
            willChange: "transform",
          }}
          initial={{ y: "10vh", x: 0 }}
          animate={{
            y: "-110vh",
            x: ["0px", `${bubble.wobble}px`, `-${bubble.wobble}px`, "0px"],
          }}
          transition={{
            y: { duration: bubble.duration, repeat: Infinity, ease: "linear", delay: bubble.delay },
            x: { duration: bubble.duration / 1.5, repeat: Infinity, ease: "easeInOut", delay: bubble.delay },
          }}
        />
      ))}

      {/* =========================================
          CAPA 2: LOGO Y BARRA DE CARGA
      ========================================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-50 flex flex-col items-center"
      >
        {/* Halo de luz tras el logo más intenso para compensar */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-cyan-400/25 blur-[50px] rounded-full pointer-events-none" />

        {/* Logo */}
        <img
          src="/assets/images/logodolphin.webp"
          alt="Dolphin Dive Baja - Cargando"
          className="w-48 md:w-64 lg:w-72 drop-shadow-2xl relative z-10"
        />

        {/* Barra de carga minimalista */}
        <motion.div
          className="mt-10 w-40 md:w-48 h-1 bg-white/20 rounded-full overflow-hidden relative shadow-[0_0_10px_rgba(255,255,255,0.1)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-full bg-cyan-400 relative shadow-[0_0_8px_rgba(102,216,227,1)]"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Texto de Carga */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 font-title text-[10px] tracking-[0.3em] uppercase text-cyan-300 drop-shadow-md"
        >
          Sumergiendo...
        </motion.span>

      </motion.div>
    </motion.div>
  );
}