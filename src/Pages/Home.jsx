import React, { useState, useEffect } from 'react';
import { ChevronDown, Download, ExternalLink, Github, Linkedin, Mail, Copy, Check } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);

  const roles = [
    "Final Year CS Student",
    "MERN Stack Developer", 
    "Full Stack Engineer",
    "Problem Solver"
  ];

  const email = "sejalpusate@gmail.com";

  useEffect(() => {
    setIsVisible(true);
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    
    // Add CSS for twinkling animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 1; transform: scale(1.2); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      clearInterval(roleInterval);
      document.head.removeChild(style);
    };
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const scrollToSection = () => {
    // Smooth scroll to next section 
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Twinkling Stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white/20 rounded-full opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite ${Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>

              {/* Main Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-white">I help founders turn ideas into seamless </span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic font-light">
                  digital experiences
                </span>
              </h1>

              {/* Introduction */}
              <div className="flex items-center gap-3 mb-12">
                <span className="text-gray-300 text-lg">Hello, I'm Sejal Pusate</span>
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
                  <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">SP</span>
                  </div>
                </div>
                <span className="text-gray-300 text-lg">a Full Stack Developer</span>
              </div>

              {/* Dynamic Role */}
              <div className="mb-12 h-8 flex items-center">
                <h2 className="text-lg text-purple-300 font-light">
                  <span className="inline-block min-w-0">
                    {roles[currentRole]}
                  </span>
                  <span className="inline-block w-0.5 h-5 bg-purple-400 ml-1 animate-pulse"></span>
                </h2>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <button className="group relative px-6 py-3 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden">
                  <div className="relative flex items-center gap-2 justify-center">
                    Let's Connect
                    <ExternalLink size={18} className="transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </button>
                
                <div className="flex items-center gap-2">
                  <button className="group px-6 py-3 border border-gray-600 rounded-full text-gray-300 font-semibold backdrop-blur-sm bg-white/5 transition-all duration-300 hover:bg-white/10 hover:border-gray-500">
                    <div className="flex items-center gap-2 justify-center">
                      <Mail size={18} />
                      {email}
                    </div>
                  </button>
                  
                  <button 
                    onClick={copyEmail}
                    className="group p-3 rounded-full border border-gray-600 backdrop-blur-sm bg-white/5 text-gray-300 hover:bg-white/10 hover:border-gray-500 transition-all duration-300 hover:scale-105 relative"
                    title={emailCopied ? "Copied!" : "Copy email"}
                  >
                    {emailCopied ? (
                      <Check size={18} className="text-green-400 transition-all duration-300" />
                    ) : (
                      <Copy size={18} className="transition-all duration-300 group-hover:scale-110" />
                    )}
                    
                    {/* Tooltip */}
                    <div className={`absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap transition-all duration-200 ${
                      emailCopied ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                    }`}>
                      {emailCopied ? 'Copied!' : 'Copy email'}
                    </div>
                  </button>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" }, 
                  { icon: Mail, href: "#", label: "Email" }
                ].map(({ icon: Icon, href, label }, index) => (
                  <a
                    key={label}
                    href={href}
                    className="group p-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-white hover:bg-purple-500/20 hover:border-purple-400/30 transition-all duration-300"
                    aria-label={label}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Side - Portrait Image */}
            <div className={`lg:flex justify-center items-center transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <div className="relative">
                {/* Main Portrait Container */}
                <div className="w-80 h-96 lg:w-96 lg:h-[500px] rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 overflow-hidden">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">AB</span>
                      </div>
                      <p className="text-gray-400 text-sm">Your Portrait Here</p>
                    </div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/30 to-pink-500/30 blur-xl opacity-50 -z-10"></div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/80 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500/80 rounded-full animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator - Centered at bottom */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <button 
              onClick={scrollToSection}
              className="group animate-bounce hover:animate-none transition-all duration-300"
            >
              <div className="flex flex-col items-center text-gray-500 hover:text-purple-400">
                <span className="text-sm mb-2 opacity-70">Scroll to explore</span>
                <div className="p-2 rounded-full border border-gray-600/30 group-hover:border-purple-400/50 transition-colors duration-300">
                  <ChevronDown size={20} />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Glassmorphism overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Home;