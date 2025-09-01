import React from 'react';
import { Linkedin, Github, Twitter, Instagram } from 'lucide-react';
import SpinningCards from '../Components/SpinningCards';

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-300 text-sm uppercase tracking-wide mb-4">MORE ABOUT ME</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-4">
                I'm Sejal, a <br />
                creative <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic font-light">
                  engineer
                </span>
              </h1>
            </div>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm Sejal Pusate, a final-year Computer Science student passionate about building impactful projects and solving problems with clean, efficient code. I’m career-driven, adaptable, and always open to global opportunities that help me grow and contribute meaningfully.
              </p>

              <p>
                When I’m not coding or researching, you’ll find me reading novels or performing Bharatanatyam, a balance that fuels both my creativity and discipline.
              </p>

              <p className="font-medium text-white">
                I believe in waking up each day eager to make a difference!
              </p>
            </div>

            {/* Social Links */}
              <div className="flex space-x-4 pt-4">
                <a 
                  href="https://www.linkedin.com/in/sejalpusate/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://github.com/sejalPusate" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://instagram.com/sejal.pusate22" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram size={24} />
                </a>
              </div>

          </div>

          {/* Right Content - Image with Travel Tag */}
          <div className="relative max-w-sm mx-auto">
            <div className="relative">
              {/* Right Content - Spinning Cards instead of static image */}
                <div className="relative max-w-sm mx-auto">
                  <SpinningCards />
                </div>

              
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}