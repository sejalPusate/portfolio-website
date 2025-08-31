import React from 'react';
import { Linkedin, Github, Twitter } from 'lucide-react';

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
                creative <span className="text-pink-400 italic font-script">engineer</span>
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
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Right Content - Image with Travel Tag */}
          <div className="relative max-w-sm mx-auto">
            <div className="relative">
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 ">
                <img 
                  src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Sejal in nature" 
                  className="w-72 h-80 object-cover"
                />
              </div>
              
              {/* Travel Tag */}
              <div className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/30">
                <p className="text-white font-medium">I Travel</p>
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