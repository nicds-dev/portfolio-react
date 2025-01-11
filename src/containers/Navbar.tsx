import { IoLanguage } from "react-icons/io5"
import { MdDarkMode } from "react-icons/md"
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

function NavBar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

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
          <a href="#" className="text-2xl font-bold p-2">nicds</a>

          {/* Desktop Links */}
          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="font-medium hover:text-zinc-400">
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

          {/* Mobile Menu Button */}
          <button className="sm:hidden p-2" aria-label="Toggle Sidebar" onClick={toggleSidebar}>
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`sm:invisible fixed top-0 left-0 flex flex-col h-screen w-11/12 bg-[#131416] px-5 z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center h-16 border-b border-gray-200">
          <a href="#" className="text-2xl font-bold p-2">
            nicds
          </a>
          <button
            className="p-2"
            aria-label="Close Sidebar"
            onClick={toggleSidebar}
          >
            <AiOutlineClose size={24} />
          </button>
        </div>
        <div className="grow flex flex-col justify-center items-center text-lg gap-10">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block font-medium hover:text-gray-400"
              onClick={toggleSidebar}
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="flex items-center h-16 space-x-5 mx-auto">
          <button
            aria-label="Change Language"
            className="p-2 hover:bg-gray-700 rounded-md transition w-full flex justify-center"
          >
            <IoLanguage size={20} />
          </button>
          <button
            aria-label="Toggle Dark Mode"
            className="p-2 hover:bg-gray-700 rounded-md transition w-full flex justify-center"
          >
            <MdDarkMode size={20} />
          </button>
        </div>
      </div>
  
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="sm:invisible fixed inset-0 h-screen bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </nav>
  )
}

export default NavBar