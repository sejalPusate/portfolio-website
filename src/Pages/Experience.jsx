import React, { useEffect, useState } from 'react';

const ScrollTimeline = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        "Achieved a 30% reduction in delivery times through optimized routing algorithms"
      ],
      skills: ["JavaScript", "Node.js", "MongoDB", "React", "Tailwind CSS", "Express.js", "Git", "Figma"]
    },
    {
      date: "FEB 2024 - PRESENT",
      company: "GitHub",
      role: "Open Source Contributor",
      remote: true,
      achievements: [
        "Contributed to open-source projects with 15,000+ GitHub stars",
        "Engaged with developer communities, collaborating on innovative solutions"
      ],
      skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Bootstrap", "Git","Python", "PHP", "MySQL", "Android Studio", "Java", "HTML", "CSS", "Figma", "Hugging Face", "OpenAI"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#090017] to-[#240046] text-white p-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            Experience That
          </h1>
          <h2 className="text-5xl font-bold">
            Brings <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic font-light">
                  Ideas to Life
                  </span>
          </h2>
        </div>

        <div className="relative">
          {/* Timeline Base Line */}
          <div className="absolute left-8 top-0 w-1 bg-gray-700 h-full"></div>
          <div 
            className="absolute left-8 top-0 w-1 bg-gradient-to-b from-blue-400 to-purple-600 transition-all duration-300 ease-out"
            style={{ height: `${Math.min(scrollProgress * 200, 100)}%` }}
          ></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-24 pb-16">
              {/* Timeline Dot */}
              <div 
                className={`absolute left-6 w-5 h-5 rounded-full border-4 transition-all duration-500 ${
                  scrollProgress * experiences.length > index 
                    ? 'bg-blue-400 border-blue-400 scale-110' 
                    : 'bg-gray-700 border-gray-600'
                }`}
              ></div>

              {/* Compact Card */}
              <div className="bg-gray-800 rounded-lg p-4 shadow-md max-w-3xl mx-auto">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Left Column */}
                  <div className="md:w-1/3">
                    <p className="text-xs text-gray-400 mb-1">{exp.date}</p>
                    <h3 className="text-lg font-bold mb-1">{exp.company}</h3>
                    {exp.location && (
                      <p className="text-gray-300 mb-1 text-sm">📍 {exp.location}</p>
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
                        <p key={i} className="text-gray-300 leading-snug text-sm">
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
            </div>
          ))}
        </div>

        {/* Scroll Progress Indicator */}
        <div className="fixed bottom-8 right-8 bg-gray-800 rounded-full p-4 shadow-lg">
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12 transform -rotate-90">
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                className="text-gray-600"
              />
              <circle
                cx="24"
                cy="24"
                r="20"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 20}`}
                strokeDashoffset={`${2 * Math.PI * 20 * (1 - scrollProgress)}`}
                className="text-blue-400 transition-all duration-300"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold">
              {Math.round(scrollProgress * 100)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollTimeline;
