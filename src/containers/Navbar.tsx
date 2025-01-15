import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import PreferencesControls from "@/components/PreferencesControls"

function NavBar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false)
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen)
  const { t } = useTranslation()

  const navItems = [
    { name: t('navbar.about'), href: "#about" },
    { name: t('navbar.projects'), href: "#projects" },
    { name: t('navbar.contact'), href: "#contact" },
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center h-16 border-b border-sky-500 dark:border-zinc-400 px-5">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold p-2">nicds</a>

          {/* Desktop Links */}
          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="font-semibold text-zinc-600 hover:text-sky-500 dark:text-zinc-400 dark:hover:text-zinc-300">
                {item.name}
              </a>
            ))}
          </div>

          {/* Icons */}
          <PreferencesControls className="hidden sm:flex sm:space-x-1" />

          {/* Mobile Menu Button */}
          <button className="sm:hidden p-2" aria-label="Toggle Sidebar" onClick={toggleSidebar}>
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`sm:invisible fixed top-0 left-0 flex flex-col h-screen w-11/12 bg-zinc-200 dark:bg-zinc-900 px-5 z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center h-16 border-b border-sky-500 dark:border-zinc-400">
          <a href="#" className="text-2xl font-bold p-2" onClick={toggleSidebar}>
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
              className="block font-semibold hover:text-sky-500 dark:hover:text-zinc-400"
              onClick={toggleSidebar}
            >
              {item.name}
            </a>
          ))}
        </div>
        <PreferencesControls className="flex items-center h-16 space-x-5 mx-auto" direction="top" />
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