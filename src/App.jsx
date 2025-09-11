// App.jsx
import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Experience from "./Pages/Experience";
import Contact from "./Pages/Contact";
import MouseFollower from "./Components/MouseFollower"; // MouseFollower
import { motion } from "framer-motion";

function App() {
  return (
    <div className="relative bg-transparent">
      {/*  Mouse Follower — will stay on top of everything */}
      <MouseFollower />

      <div className="App">
        <Navbar />

        {/* Each Section */}
        <section id="home" className="section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Home />
          </motion.div>
        </section>

        <section id="about" className="section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <About />
          </motion.div>
        </section>

        <section id="projects" className="section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Projects />
          </motion.div>
        </section>

        <section id="experience" className="section">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Experience />
          </motion.div>
        </section>

        <section id="contact" className="section">
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
