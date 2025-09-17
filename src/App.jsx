// App.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import MouseFollower from "./Components/MouseFollower"; 
import { motion } from "framer-motion";

function App() {
  return (
    // Global Wrapper with Dark/Light Mode Support
    <div className="min-h-screen transition-colors duration-500 
                    bg-gradient-to-br from-[#ffffff] to-[#f0f0f0] 
                    text-black 
                    dark:from-[#090017] dark:to-[#240046] dark:text-white">
      
      {/* Mouse Follower — stays on top */}
      <MouseFollower />

      <div className="App">
        <Navbar />

        {/* Each Section with smooth text color transitions */}
        <section id="home" className="section transition-colors duration-500">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Home />
          </motion.div>
        </section>

        <section id="about" className="section transition-colors duration-500">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <About />
          </motion.div>
        </section>

        <section id="projects" className="section transition-colors duration-500">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Projects />
          </motion.div>
        </section>

        <section id="experience" className="section transition-colors duration-500">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Experience />
          </motion.div>
        </section>

        <section id="contact" className="section transition-colors duration-500">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Contact />
          </motion.div>
        </section>
      </div>
    </div>
  );
}

export default App;
