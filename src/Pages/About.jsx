import { Link } from "react-scroll";
import { Linkedin, Github, Instagram } from 'lucide-react';
import SpinningCards from '../Components/SpinningCards';

export default function AboutPage() {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-8 py-6">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-gray-300 text-sm uppercase tracking-wide mb-2">
            MORE ABOUT ME
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold leading-tight mb-4">
                I'm Sejal, a <br />
                creative{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic font-light">
                  engineer
                </span>
              </h1>
            </div>

            <div className="space-y-2 text-gray-300 text-base leading-relaxed">
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

            {/* Buttons Section */}
            <div className="flex space-x-4 pt-4">
              {/* Download Resume Button */}
              <a
                href="/SejalPusate_Resume_SDE_FullStack.pdf" // Place your resume in public/ folder
                download="Sejal_Pusate_Resume"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-pink-500/50"
              >
                Download Resume
              </a>

              {/* View Projects Button */}
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  offset={-80} // adjust if you have a fixed navbar
                  className="cursor-pointer px-6 py-3 rounded-lg border border-purple-400 text-purple-300 font-semibold shadow-lg transition-all duration-300 hover:bg-purple-500 hover:text-white hover:scale-105">
                  View Projects
                </Link>
            </div>
            {/* Social Links */}
            <div className="flex space-x-4 pt-6">
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
              {/* Right Content - Spinning Cards */}
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
