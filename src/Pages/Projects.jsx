// src/Pages/Projects.jsx
import { useState } from "react";
import { ExternalLink, Code2, Award, Cpu } from "lucide-react";
import { Github } from "lucide-react";
import Certificates from "./Certificates";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaJava, FaPython } from "react-icons/fa";
import { SiExpress, SiMongodb, SiTailwindcss, SiPostman, SiPhp, SiWordpress, SiAndroidstudio, SiOpencv, SiScikitlearn, SiOpenai, SiHuggingface, SiReactrouter, SiFramer, SiFigma } from "react-icons/si";


export default function Projects() {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      id: 1,
      title: "ResumeAI",
      description:
        "ResumeAI is an AI-powered resume builder that helps you create a professional resume in minutes.",
      image: "src/assets/screenshot-landing.png",
      github: "https://github.com/sejalPusate/AI-based-Resume-and-Cover-letter-Builder",
    },
    {
      id: 2,
      title: "Zomato Clone",
      description:
        "A full-stack food delivery application that mimics Zomato's core features, including restaurant browsing, menu viewing, and order placement.",
      image: "src/assets/zomato-landing.jpg",
      github: "https://github.com/sejalPusate/zomato-clone",
    },
    {
      id: 3,
      title: "Pallavi Academy",
      description:
        "A comprehensive educational platform for Pallavi Academy, featuring course listings, enrollment, and student resources.",
      image: "src/assets/pallavi-landing.png",
      github: "https://your-live-demo-link.com",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[10002B] to-[#24004] text-gray-100 px-6 sm:px-12 py-16 relative">
      {/* Header */}
      <header className="text-center mb-14">
        <h1 className="text-5xl font-bold mb-3 text-white-400 drop-shadow-lg">
          Curated <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent italic font-light">
                  work
                  </span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Explore my journey through projects, certifications, and technical
          expertise. Each section represents a milestone in my continuous
          learning path.
        </p>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center gap-6 mb-16">
        <button
          onClick={() => setActiveTab("projects")}
          className={`flex items-center gap-2 px-8 py-4 rounded-xl shadow border transition ${
            activeTab === "projects"
              ? "bg-gradient-to-r from-purple-800 to-purple-600 text-white border-purple-500 shadow-lg"
              : "bg-[#12121a] hover:bg-[#1a1a25] text-gray-300 border-gray-700"
          }`}
        >
          <Code2 size={18} /> Projects
        </button>
        <button
          onClick={() => setActiveTab("certificates")}
          className={`flex items-center gap-2 px-8 py-4 rounded-xl shadow border transition ${
            activeTab === "certificates"
              ? "bg-gradient-to-r from-purple-800 to-purple-600 text-white border-purple-500 shadow-lg"
              : "bg-[#12121a] hover:bg-[#1a1a25] text-gray-300 border-gray-700"
          }`}
        >
          <Award size={18} /> Certificates
        </button>
        <button
          onClick={() => setActiveTab("techstack")}
          className={`flex items-center gap-2 px-8 py-4 rounded-xl shadow border transition ${
            activeTab === "techstack"
              ? "bg-gradient-to-r from-purple-800 to-purple-600 text-white border-purple-500 shadow-lg"
              : "bg-[#12121a] hover:bg-[#1a1a25] text-gray-300 border-gray-700"
          }`}
        >
          <Cpu size={18} /> Tech Stack
        </button>
      </nav>

      {/* Content */}
      <main>
        {/* Projects Section */}
          {activeTab === "projects" && (
            <section
              id="projects"
              className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#12121a]/80 border border-gray-800 rounded-2xl shadow-lg overflow-hidden 
                            hover:shadow-purple-900/40 transition duration-300 group"
                >
                  {/* Image Wrapper with 3D effect */}
                  <div
                    className="relative w-full h-56 overflow-hidden 
                              transform transition duration-500 ease-out 
                              group-hover:scale-105 group-hover:rotate-1"
                    style={{ perspective: "1000px" }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-2xl 
                                transform transition duration-500 ease-out 
                                group-hover:scale-110 group-hover:rotate-1"
                    />
                  </div>

                  <div className="p-6 flex flex-col justify-between h-56">
                    <div>
                      <h2 className="text-xl font-semibold mb-2 text-gray-100">
                        {project.title}
                      </h2>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-4 flex justify-center items-center">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-300 hover:text-gray-100 font-medium text-sm"
                      >
                        GitHub <Github size={15} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          )}
        {/* Certificates Section */}
        {activeTab === "certificates" && <Certificates />}

        {/* Tech Stack Section */}
        {activeTab === "techstack" && (
          <section className="text-center">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">
              Tech Stack
            </h2>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
              <FaReact size={50} className="text-blue-400 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" title="React" />
              <FaNodeJs size={50} className="text-green-500 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" title="Node.js" />
              <SiExpress size={50} className="text-gray-400 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(156,163,175,0.8)]" title="Express" />
              <SiMongodb size={50} className="text-green-600 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(22,163,74,0.8)]" title="MongoDB" />
              <FaHtml5 size={50} className="text-orange-500 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" title="HTML5" />
              <FaCss3Alt size={50} className="text-blue-500 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" title="CSS3" />
              <FaJs size={50} className="text-yellow-400 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" title="JavaScript" />
              <SiTailwindcss size={50} className="text-cyan-400 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]" title="Tailwind CSS" />
              <FaGitAlt size={50} className="text-red-500 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(239,68,68,0.8)]" title="Git" />
              
              {/* Extended Tech */}
              <SiPostman size={50} className="text-orange-400 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(251,146,60,0.8)]" title="Postman" />
              <SiPhp size={50} className="text-indigo-500 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]" title="PHP" />
              <SiWordpress size={50} className="text-blue-400 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" title="WordPress" />
              <SiAndroidstudio size={50} className="text-green-500 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" title="Android Studio" />
              <FaJava size={50} className="text-red-600 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(220,38,38,0.8)]" title="Java" />
              <FaPython size={50} className="text-yellow-400 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(250,204,21,0.8)]" title="Python" />
              <SiOpencv size={50} className="text-green-400 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]" title="OpenCV" />
              <SiScikitlearn size={50} className="text-orange-500 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" title="Scikit-learn" />

              {/* APIs / AI */}
              <SiOpenai size={50} className="text-purple-400 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]" title="OpenAI API" />
              <SiHuggingface size={50} className="text-yellow-500 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]" title="Hugging Face" />

              {/* UI & Tools */}
              <SiReactrouter size={50} className="text-pink-400 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(244,114,182,0.8)]" title="React Router" />
              <SiFramer size={50} className="text-pink-500 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" title="Framer Motion" />
              <SiFigma size={50} className="text-purple-500 hover:scale-110 transition-transform hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" title="Figma" />
            </div>
          </section>
        )}

      </main>
    </div>
  );
}
