import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NUM_PARTICLES = 20;

const generateRandomPosition = () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
});

const generateRandomDuration = () => Math.random() * 20 + 10;

const FloatingParticles = () => {
  const [particles, setParticles] = useState<
    { id: number; initial: { x: number; y: number } }[]
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: NUM_PARTICLES }).map((_, i) => ({
      id: i,
      initial: generateRandomPosition(),
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-lathran-orange/60 rounded-full"
          initial={particle.initial}
          animate={{
            x: [
              particle.initial.x,
              generateRandomPosition().x,
              generateRandomPosition().x,
              generateRandomPosition().x,
            ],
            y: [
              particle.initial.y,
              generateRandomPosition().y,
              generateRandomPosition().y,
              generateRandomPosition().y,
            ],
          }}
          transition={{
            duration: generateRandomDuration(),
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
