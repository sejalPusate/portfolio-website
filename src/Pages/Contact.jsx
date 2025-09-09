import React, { useState, useEffect } from 'react';
import { Mail, Send, Github, Linkedin, Twitter, Instagram, MessageCircle } from 'lucide-react';

const ContactPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#090017] to-[#240046] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce"></div>
      </div>

      {/* Flowing wave background */}
      <div className="absolute inset-0 opacity-20">
        <svg viewBox="0 0 1200 800" className="w-full h-full">
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 C300,200 600,400 900,300 C1050,250 1150,350 1200,300 L1200,800 L0,800 Z"
            fill="url(#waveGradient)"
            className="animate-pulse"
          />
          <path
            d="M0,400 C300,300 600,500 900,400 C1050,350 1150,450 1200,400 L1200,800 L0,800 Z"
            fill="url(#waveGradient)"
            opacity="0.5"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main heading */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-3xl font-bold text-white mb-6 tracking-tight">
              FROM CONCEPT TO <span className="font-black">CREATION</span>
            </h1>
            <h2 className="text-3xl md:text-3xl font-bold text-white tracking-tight">
              LET'S MAKE IT <span className="font-black">HAPPEN!</span>
            </h2>
          </div>

          {/* Circular logo/badge */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="w-18 h-18 rounded-full border-4 border-blue-500 bg-black/50 backdrop-blur-sm flex items-center justify-center">
                <div className="text-blue-400 text-2xl">⭐</div>
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-ping"></div>
              <div className="absolute -inset-2 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: '8s' }}>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs text-blue-400 font-semibold">
                  OPEN TO WORK
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-16">
            <button
              className="group relative px-12 py-4 bg-[#1a1a3a] hover:bg-[#2a2a4a] text-white font-semibold rounded-full border border-blue-500/30 transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/25"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="flex items-center gap-3">
                Let's get in touch
                <Send className={`w-3 h-3 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Availability text */}
          <div className="mb-8">
            <h3 className="text-xl md:text-2xl text-white font-semibold mb-4">
              I'm available for full-time roles & freelance projects.
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
              I thrive on crafting dynamic web applications, and 
              delivering seamless user experiences.
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          
          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            Copyright © 2025 <span className="text-white">Sejal Pusate</span>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 p-2">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 p-2">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 p-2">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 p-2">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Mouse follower effect */}
      <div 
        className="fixed w-4 h-4 bg-blue-400/30 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${isHovered ? 1.5 : 1})`,
        }}
      />
      
      {/* Larger mouse follower */}
      <div 
        className="fixed w-8 h-8 border border-blue-400/20 rounded-full pointer-events-none z-40 transition-all duration-200 ease-out"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: `scale(${isHovered ? 1.2 : 1})`,
        }}
      />
    </div>
  );
};

export default ContactPage;