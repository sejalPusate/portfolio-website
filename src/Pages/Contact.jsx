import React, { useState, useEffect } from 'react';
import Form from "../Components/Form";
import { Mail, Send, Github, Linkedin, Twitter, Instagram, MessageCircle, Sparkles, Code, Rocket } from 'lucide-react';

const ContactPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showForm, setShowForm] = useState(false); // Add this state

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger animations on mount
    setTimeout(() => setIsVisible(true), 100);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Function to handle button click
  const handleContactClick = () => {
    setShowForm(true);
  };

  // Function to close form
  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-40">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <div className="w-full h-full bg-blue-400 rounded-full animate-ping"></div>
          </div>
        ))}
        
        {/* Larger glowing orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-purple-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-cyan-500/25 rounded-full blur-lg animate-bounce" style={{ animationDuration: '4s' }}></div>
      </div>

      {/* Dynamic mesh gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform -skew-y-12 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-purple-500/10 to-transparent transform skew-y-12 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Animated wave background with enhanced effect */}
      <div className="absolute inset-0 opacity-25">
        <svg viewBox="0 0 1200 800" className="w-full h-full">
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0,300 C300,200 600,400 900,300 C1050,250 1150,350 1200,300 L1200,800 L0,800 Z"
            fill="url(#waveGradient1)"
            className="animate-pulse"
            style={{ animationDuration: '3s' }}
          />
          <path
            d="M0,400 C300,300 600,500 900,400 C1050,350 1150,450 1200,400 L1200,800 L0,800 Z"
            fill="url(#waveGradient2)"
            opacity="0.7"
            className="animate-pulse"
            style={{ animationDelay: '1s', animationDuration: '4s' }}
          />
          <path
            d="M0,500 C300,400 600,600 900,500 C1050,450 1150,550 1200,500 L1200,800 L0,800 Z"
            fill="url(#waveGradient1)"
            opacity="0.5"
            className="animate-pulse"
            style={{ animationDelay: '2s', animationDuration: '5s' }}
          />
        </svg>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center p-4 md:p-6">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Animated main heading */}
          <div className="mb-6 overflow-hidden">
            <h1 className={`text-4xl md:text-4xl font-bold text-white mb-6 tracking-tight transition-all duration-1500 ease-out ${
              isVisible ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'
            }`}>
              FROM CONCEPT TO <span className="font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">CREATION</span>
            </h1>
            <h2 className={`text-4xl md:text-4xl font-bold text-white tracking-tight transition-all duration-1500 ease-out delay-500 ${
              isVisible ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'
            }`}>
              LET'S MAKE IT <span className="font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">HAPPEN!</span>
            </h2>
          </div>

          {/* Enhanced circular logo/badge */}
          <div className={`mb-6 flex justify-center transition-all duration-1000 delay-1000 ${
            isVisible ? 'transform scale-100 opacity-100' : 'transform scale-0 opacity-0'
          }`}>
            <div className="relative group">
              {/* Main badge */}
              <div className="w-24 h-24 rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="text-blue-400 text-2xl mb-1 animate-bounce" />
                <span className="text-xs text-white font-semibold">SP</span>
              </div>
              
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-500/30 animate-ping"></div>
              <div className="absolute -inset-2 rounded-full border border-purple-500/20 animate-spin" style={{ animationDuration: '8s' }}>
                {/* Rotating elements around badge */}
                <Code className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-400 w-4 h-4" />
                <Sparkles className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-purple-400 w-4 h-4" />
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-pink-400 rounded-full"></div>
              </div>
              
              {/* Outer glow effect */}
              <div className="absolute -inset-4 rounded-full border border-blue-500/10 animate-pulse opacity-50"></div>
            </div>
          </div>

          {/* Enhanced CTA Button - Updated with onClick */}
          <div className={`mb-8 transition-all duration-1000 delay-1500 ${
            isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
          }`}>
            <button
              onClick={handleContactClick}
              className="group relative px-6 py-2.5 bg-gradient-to-r from-[#1a1a3a] to-[#2a2a4a] hover:from-[#2a2a4a] hover:to-[#3a3a5a] text-white font-bold text-base rounded-full border-2 border-transparent bg-clip-padding shadow-2xl transition-all duration-500 hover:shadow-blue-500/50 hover:scale-105"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Button border gradient */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
              <div className="absolute inset-0.5 rounded-full bg-gradient-to-r from-[#1a1a3a] to-[#2a2a4a] group-hover:from-[#2a2a4a] group-hover:to-[#3a3a5a] transition-all duration-500"></div>
              
              <span className="relative flex items-center gap-2 z-10">
                <Mail className={`w-5 h-5 transition-transform duration-500 ${isHovered ? 'rotate-12' : ''}`} />
                Let's get in touch
                <Send className={`w-5 h-5 transition-transform duration-500 ${isHovered ? 'translate-x-2 rotate-12' : ''}`} />
              </span>
              
              {/* Button glow effect */}
              <div className={`absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
            </button>
          </div>

          {/* Enhanced availability text */}
          <div className={`mb-4 transition-all duration-1000 delay-2000 ${
            isVisible ? 'transform translate-y-0 opacity-100' : 'transform translate-y-10 opacity-0'
          }`}>
            <h3 className="text-xl md:text-lg text-white font-bold mb-3">
              I'm available for{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent italic font-bold">
                full-time roles
              </span>{' '}
              &{' '}
              <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent italic font-bold">
                freelance projects
              </span>
              .
            </h3>
            <p className="text-gray-300 text-base max-w-3xl mx-auto leading-relaxed">
              I thrive on crafting dynamic web applications, and delivering seamless user experiences, that leave lasting impressions.
            </p>
          </div>

        </div>
      </div>

      {/* Enhanced Footer */}
      <div className="bottom-0 left-0 right-0 p-0.5 backdrop-blur-sm bg-black/20 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          
          {/* Enhanced Copyright */}
          <div className="text-gray-400 text-sm">
            Copyright © 2025 | All rights reserved by {'Sejal Pusate '}
          </div>

          {/* Enhanced Social Buttons */}
          <div className="flex space-x-4">
            {[
              { icon: Github, href: "https://github.com/sejalPusate" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/sejalpusate/" },
              { icon: Instagram, href: "https://www.instagram.com/sejal.pusate22" }
            ].map((social, index) => (
              <button
                key={index}
                type="button"
                onClick={() => window.open(social.href, "_blank", "noopener,noreferrer")}
                className="relative group text-gray-400 hover:text-white transition-all duration-300 p-3 rounded-full hover:bg-white/10 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-purple-400"
              >
                <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Form Modal - Add this */}
      {showForm && (
        <Form onClose={handleCloseForm} />
      )}

      {/* Additional ambient effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div 
          className="absolute w-96 h-96 bg-blue-500/5 rounded-full blur-3xl transition-all duration-1000"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>
    </div>
  );
};

export default ContactPage;