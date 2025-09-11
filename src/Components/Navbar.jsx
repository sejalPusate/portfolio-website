import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Experience", path: "#experience" },
    { name: "Contact Me", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        // Always show navbar when near the top
        setIsVisible(true);
      } else if (window.scrollY > lastScrollY) {
        // Scrolling down → hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up → show navbar
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-white/10 backdrop-blur-md border-b border-white/20 text-white px-8 py-0.5 shadow-md fixed top-0 w-full z-50 transition-transform duration-300 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-12 h-12 bg-white flex items-center justify-center rounded">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        </div>

        {/* Nav Links */}
        <ul className="flex justify-center space-x-10">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.path}
                className="relative pb-1 text-xl font-medium transition-colors duration-300 text-gray-300 hover:text-purple-400"
              >
                {item.name}
                {/* underline effect */}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
