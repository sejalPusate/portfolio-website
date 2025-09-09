import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "#home" },
    { name: "About", path: "#about" },
    { name: "Projects", path: "#projects" },
    { name: "Experience", path: "#experience" },
    { name: "Contact Me", path: "#contact" },
  ];

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 text-white px-8 py-0.5 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo on Left */}
        <div className="w-12 h-12 bg-white flex items-center justify-center rounded">
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        </div>


        {/* Navbar Links in Center/Right */}
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