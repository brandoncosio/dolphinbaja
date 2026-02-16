import { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen() {
  // 1. Burbujas Optimizadas para iOS (Menos cantidad, cálculos más ligeros)
  const bubbles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => { // Reducido a 15 burbujas
      const depthLayer = Math.random();
      let size, opacity, duration, zIndex;

      if (depthLayer > 0.7) {
        size = Math.random() * 20 + 10;
        opacity = Math.random() * 0.3 + 0.2; // Opacidad en lugar de Blur para simular profundidad
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
      // Salida simplificada para evitar flashes blancos en iOS
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-dark"
    >
      {/* =========================================
          FONDO ABISAL (Optimizado sin mix-blend)
      ========================================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Luz superior simulada con radial-gradient nativo */}
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[150%] md:w-[100%] h-[80%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-400/20 via-cyan-900/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-[#010406] to-transparent" />
      </div>

      {/* =========================================
          CAPA 1: BURBUJAS (Aceleración por hardware)
      ========================================= */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          // Quitamos backdrop-blur que crashea Safari
          className="absolute bottom-[-80px] rounded-full border border-white/20 bg-gradient-to-tr from-white/10 to-white/30 shadow-[inset_0_0_10px_rgba(255,255,255,0.1)]"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
            opacity: bubble.opacity,
            zIndex: bubble.zIndex,
            willChange: "transform", // 👈 ESTO SALVA LA GPU DEL IPHONE
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
        {/* Halo de luz estático */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-cyan-400/20 blur-[50px] rounded-full pointer-events-none" />

        {/* Logo */}
        <img
          src="/assets/images/logodolphin.webp"
          alt="Dolphin Dive Baja - Cargando"
          className="w-48 md:w-64 lg:w-72 drop-shadow-2xl relative z-10"
        />

        {/* Barra de carga minimalista */}
        <motion.div
          className="mt-10 w-40 md:w-48 h-1 bg-white/10 rounded-full overflow-hidden relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            className="h-full bg-cyan-400 relative"
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
          className="mt-3 font-title text-[10px] tracking-[0.3em] uppercase text-cyan-400/50"
        >
          Sumergiendo...
        </motion.span>

      </motion.div>
    </motion.div>
  );
}