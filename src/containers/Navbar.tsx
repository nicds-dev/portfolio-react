import { IoLanguage } from "react-icons/io5"
import { MdDarkMode } from "react-icons/md"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
import { motion } from "framer-motion"

function NavBar() {

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center h-16 border-b border-gray-200 px-5">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-primary p-2">nicds</a>

          {/* Desktop Links */}
          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="font-medium hover:text-gray-300">
                {item.name}
              </a>
            ))}
          </div>

          {/* Icons */}
          <div className="hidden sm:flex sm:space-x-1">
            <button aria-label="Change Language" className="p-2 hover:bg-[#27272A] rounded-md transition">
              <IoLanguage size={20} />
            </button>
            <button aria-label="Toggle Dark Mode" className="p-2 hover:bg-[#27272A] rounded-md transition">
              <MdDarkMode size={20} />
            </button>
          </div>
        </div>
      </div>
    </nav>
    
  )
}

export default NavBar