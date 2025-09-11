import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const pos = { x: e.clientX, y: e.clientY, id: Date.now() + Math.random() };

      setMousePosition({ x: e.clientX, y: e.clientY });
      setParticles((prev) => [...prev, pos]);

      // Remove particle after 500ms to avoid memory leak
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== pos.id));
      }, 500);
    };

    // Track hover on clickable elements
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.querySelectorAll("button, a, .hover-target").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("button, a, .hover-target").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Particle Trail */}
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{
              opacity: 1,
              scale: isHovered ? 1.3 : 1,
              x: p.x - (isHovered ? 10 : 6),
              y: p.y - (isHovered ? 10 : 6),
            }}
            animate={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`fixed rounded-full pointer-events-none z-50 ${
              isHovered
                ? "w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-500 blur-md"
                : "w-3 h-3 bg-purple-400/60 blur-sm"
            }`}
          />
        ))}
      </AnimatePresence>

      {/* Optional central dot to follow mouse directly */}
      <div
        className={`fixed rounded-full pointer-events-none z-50 transition-transform duration-150 ${
          isHovered
            ? "w-4 h-4 bg-gradient-to-r from-pink-400 to-blue-400 blur-sm"
            : "w-2 h-2 bg-white/80"
        }`}
        style={{
          left: mousePosition.x - (isHovered ? 8 : 4),
          top: mousePosition.y - (isHovered ? 8 : 4),
        }}
      />
    </>
  );
};

export default MouseFollower;
