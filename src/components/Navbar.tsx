import { IoLanguage } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center h-16 border-b border-gray-200 px-5">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#hero" className="text-2xl font-bold text-primary p-2">nicds</a>
          </div>

          {/* Desktop Links */}
          <div className="hidden sm:flex sm:space-x-8">
            <a href="#about" className="text-base font-medium hover:text-gray-300">
              About
            </a>
            <a href="#projects" className="text-base font-medium hover:text-gray-300">
              Projects
            </a>
            <a href="#contact" className="text-base font-medium hover:text-gray-300">
              Contact
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-1">
            <button aria-label="Change Language" className="p-2 hover:bg-[#27272A] rounded-md transition">
              <IoLanguage size={20} />
            </button>
            <button aria-label="Toggle Dark Mode" className="p-2 hover:bg-[#27272A] rounded-md transition">
              <MdDarkMode size={20} />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Menu"
              className="sm:hidden p-2 hover:text-primary transition"
            >
              <AiOutlineMenu size={30} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="sm:hidden mt-2 space-y-2">
            <a href="#about" className="block text-base font-medium hover:text-primary hover:underline">
              About
            </a>
            <a href="#projects" className="block text-base font-medium hover:text-primary hover:underline">
              Projects
            </a>
            <a href="#contact" className="block text-base font-medium hover:text-primary hover:underline">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;