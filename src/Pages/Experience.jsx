import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.max(0, Math.min(1, scrollTop / docHeight));
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      date: "FEB 2025 - MAR 2025",
      company: "EYGDS & AICTE",
      role: "MERN Stack Developer Intern",
      location: "Maharshtra, India",
      remote: true,
      achievements: [
        "Developed a full-stack web application using the MERN stack to streamline food delivery processes (zomato clone)",
        "Implemented user authentication, real-time order tracking, and payment integration",
        "Achieved a 30% reduction in delivery times through optimized routing algorithms",
      ],
      skills: [
        "JavaScript",
        "Node.js",
        "MongoDB",
        "React",
        "Tailwind CSS",
        "Express.js",
        "Git",
        "Figma",
      ],
    },
    {
      date: "FEB 2024 - PRESENT",
      company: "GitHub",
      role: "Open Source Contributor",
      remote: true,
      achievements: [
        "Contributed to open-source projects with 15,000+ GitHub stars",
        "Engaged with developer communities, collaborating on innovative solutions",
      ],
      skills: [
        "React",
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "Bootstrap",
        "Git",
        "Python",
        "PHP",
        "MySQL",
        "Android Studio",
        "Java",
        "HTML",
        "CSS",
        "Figma",
        "Hugging Face",
        "OpenAI",
      ],
    },
  ];

  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Experience That</h1>
          <h2 className="text-5xl font-bold">
            Brings{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic font-light">
              Ideas to Life
            </span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Base */}
          <div className="absolute left-8 top-0 w-1 bg-gray-700 h-full"></div>

          {/* Progress Line */}
          <div
            className="absolute left-8 top-0 w-1 rounded-full transition-all duration-300 ease-out"
            style={{
              height: `${scrollProgress * 100}%`,
              background: `linear-gradient(to bottom, #ff00ff, #7a00ff, #240046)`,
            }}
          ></div>

          {/* Moving Dot */}
          <div
            className="absolute left-[22px] w-5 h-5 rounded-full shadow-lg transition-transform duration-300 ease-out"
            style={{
              top: `calc(${scrollProgress * 100}% - 10px)`,
              background:
                "radial-gradient(circle at center, #ff00ff 0%, #7a00ff 50%, #240046 100%)",
              border: "3px solid white",
            }}
          ></div>

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-24 pb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="bg-gray-800 rounded-lg p-4 shadow-md max-w-3xl mx-auto hover:scale-[1.02] transition-transform duration-300">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Left Column */}
                  <div className="md:w-1/3">
                    <p className="text-xs text-gray-400 mb-1">{exp.date}</p>
                    <h3 className="text-lg font-bold mb-1">{exp.company}</h3>
                    {exp.location && (
                      <p className="text-gray-300 mb-1 text-sm">
                        📍 {exp.location}
                      </p>
                    )}
                    {exp.remote && (
                      <p className="text-gray-300 text-sm">🏠 Remote work</p>
                    )}
                  </div>

                  {/* Right Column */}
                  <div className="md:w-2/3">
                    <h4 className="text-xl font-bold mb-3 text-white">
                      {exp.role}
                    </h4>

                    <div className="space-y-2 mb-4">
                      {exp.achievements.map((achievement, i) => (
                        <p
                          key={i}
                          className="text-gray-300 leading-snug text-sm"
                        >
                          {achievement}
                        </p>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-xs border border-gray-600 hover:border-gray-500 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollTimeline;
