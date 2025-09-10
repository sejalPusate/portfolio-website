import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import readImg from "../assets/read.jpg";
import codeImg from "../assets/code.jpg";
import travelImg from "../assets/travel.png";

const cards = [
  { id: 1, title: "I Read", image: readImg },
  { id: 2, title: "I Code", image: codeImg },
  { id: 3, title: "I Travel", image: travelImg },
];

export default function RotatingCards() {
  const [index, setIndex] = useState(0);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[400px] h-[450px] mx-0 ml-[60px] perspective-[1000px]">
      {cards.map((card, i) => {
        const offset = (i - index + cards.length) % cards.length;

        // Position logic for front, left, right, back
        let x = 0,
          z = 0,
          opacity = 0.5,
          scale = 0.8;
        if (offset === 0) {
          // front card
          x = 0;
          z = 100;
          opacity = 1;
          scale = 1;
        } else if (offset === 1) {
          // right
          x = 200;
          z = 0;
        } else if (offset === cards.length - 1) {
          // left
          x = -200;
          z = 0;
        } else {
          // back
          x = 0;
          z = -200;
          opacity = 0.3;
          scale = 0.7;
        }

        return (
          <motion.div
            key={card.id}
            className="absolute top-0 left-0 w-[220px] h-[300px] bg-white shadow-xl rounded-2xl flex flex-col items-center justify-between overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ x, z, opacity, scale }}
            transition={{ duration: 0.8 }}
          >
            {/* Image */}
            <div className="flex-1 flex items-center justify-center">
              <img
                src={card.image}
                alt={card.title}
                className="w-[300px] h-[260px] object-cover rounded-xl"
              />
            </div>

            {/* Title with line */}
            <div className="w-full text-center py-3 border-t border-gray-300">
              <p className="text-lg font-semibold">{card.title}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
