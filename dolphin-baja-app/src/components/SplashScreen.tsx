import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function SplashScreen() {
  // 1. Generación de Burbujas (Más lentas y orgánicas)
  const bubbles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      id: `bubble-${i}`,
      size: Math.random() * 30 + 10, // Tamaño entre 10px y 40px
      left: Math.random() * 100, // Posición horizontal aleatoria
      duration: Math.random() * 6 + 4, // Velocidad de subida reducida (4 a 10 seg)
      delay: Math.random() * 2, // Retraso inicial
    }));
  }, []);

  // 2. Generación de Fauna Marina
  const animals = useMemo(() => {
    const seaCreatures = ["🐢", "🐟", "🐠", "🐬", "🐙"];
    return Array.from({ length: 6 }).map((_, i) => {
      const isLeftToRight = Math.random() > 0.5; 
      
      return {
        id: `animal-${i}`,
        emoji: seaCreatures[Math.floor(Math.random() * seaCreatures.length)],
        size: Math.random() * 30 + 30, // Tamaño del emoji (30px a 60px)
        top: Math.random() * 70 + 10, // Altura en la pantalla (10% a 80%)
        duration: Math.random() * 10 + 15, // Nado muy lento (15 a 25 seg)
        delay: Math.random() * 2,
        startX: isLeftToRight ? "-20vw" : "120vw", 
        endX: isLeftToRight ? "120vw" : "-20vw",   
        scaleX: isLeftToRight ? 1 : -1,            
      };
    });
  }, []);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      // 👇 AQUÍ ESTÁ EL CAMBIO: z-[200] para superar al Navbar (z-[100])
      className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0C71A5] to-[#071a24]"
    >
      {/* Capa 1: Animales Marinos */}
      {animals.map((animal) => (
        <motion.div
          key={animal.id}
          className="absolute select-none pointer-events-none drop-shadow-md"
          style={{
            fontSize: animal.size,
            top: `${animal.top}%`,
            scaleX: animal.scaleX, 
            filter: "grayscale(100%) brightness(200%) opacity(0.15)", 
          }}
          initial={{ x: animal.startX, y: 0 }}
          animate={{
            x: animal.endX,
            y: ["0px", "15px", "-15px", "0px"] 
          }}
          transition={{
            x: { duration: animal.duration, ease: "linear", delay: animal.delay },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" } 
          }}
        >
          {animal.emoji}
        </motion.div>
      ))}

      {/* Capa 2: Burbujas */}
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute bottom-[-50px] rounded-full border border-white/20 bg-white/5 backdrop-blur-sm"
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.left}%`,
          }}
          animate={{
            y: ["0vh", "-120vh"], 
            x: ["0px", "20px", "-20px", "0px"], 
          }}
          transition={{
            y: {
              duration: bubble.duration,
              repeat: Infinity,
              ease: "linear",
              delay: bubble.delay,
            },
            x: {
              duration: bubble.duration / 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror",
              delay: bubble.delay,
            }
          }}
        />
      ))}

      {/* Capa 3: Logo Central */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10"
      >
        <img 
          src="src/assets/images/logodolphin.webp" 
          alt="Dolphin Dive Baja" 
          className="w-48 drop-shadow-[0_0_30px_rgba(255,255,255,0.15)] md:w-64"
        />
      </motion.div>
    </motion.div>
  );
}