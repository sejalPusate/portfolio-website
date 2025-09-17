import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext"; // <-- Import Theme Context
import { Sun, Moon } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme, toggleTheme } = useTheme(); // <-- Access theme + toggle

  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Experience", path: "#experience" },
    { name: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setIsVisible(true);
      } else if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      {/* Logo stays outside navbar */}
      <a
        href="#home"
        className="fixed top-4 left-6 z-[60] flex items-center gap-2"
      >
        <div className="w-23 h-23 flex items-center justify-center rounded-full">
          <img
            src={logo}
            alt="Logo"
            className="w-16 h-16 object-contain dark:invert-0 invert"
          />
        </div>
      </a>

      {/* Floating Curved Navbar */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 
        bg-black/30 dark:bg-white/10 backdrop-blur-xl rounded-full 
        border border-white/10 shadow-lg px-10 py-3 
        transition-transform duration-300 ${
          isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="flex items-center justify-center space-x-10">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.path}
                className="relative pb-1 text-lg font-medium transition-colors duration-300 
                  text-gray-300 hover:text-purple-400 dark:text-gray-200 dark:hover:text-purple-300"
              >
                {item.name}
                {/* underline effect */}
                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}

          {/* Dark/Light Toggle Button */}
          <li>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all hover:bg-white/10 dark:hover:bg-black/20"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400 transition-transform duration-300 hover:rotate-12" />
              ) : (
                <Moon className="w-5 h-5 text-gray-300 transition-transform duration-300 hover:rotate-12" />
              )}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
