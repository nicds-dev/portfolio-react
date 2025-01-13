import { IoLanguage } from 'react-icons/io5'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useState } from 'react'
import { useTranslation } from "react-i18next"

interface PreferencesControlsProps {
  className: string,
  direction: "top" | "bottom",
}

function PreferencesControls(props: PreferencesControlsProps) {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const { t, i18n } = useTranslation()

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev)
  }
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    setDropdownOpen(false)
  }

  return (
    <div className={props.className}>
      <div className="relative">
        <button
          aria-label="Change Language"
          className="p-2 hover:bg-zinc-700 rounded-md transition"
          onClick={toggleDropdown}
        >
          <IoLanguage size={20} />
        </button>
        {isDropdownOpen && (
          <div className={`absolute right-0 mt-2 w-36 bg-zinc-700 shadow-xl rounded-md ${
            props.direction === 'top' ? 'bottom-10 right-0' : 'right-0'}`}
          >
            <ul className="p-1">
              <li>
                <button
                  onClick={() => changeLanguage("en")}
                  className="w-full text-left px-4 py-2 hover:bg-zinc-600 rounded-md"
                >
                  {t('navbar.lang.en')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => changeLanguage("es")}
                  className="w-full text-left px-4 py-2 hover:bg-zinc-600 rounded-md"
                >
                  {t('navbar.lang.es')}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <button
        aria-label="Toggle Dark Mode"
        className="p-2 hover:bg-zinc-700 rounded-md transition"
        onClick={toggleDarkMode}
      >
        {isDarkMode ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
      </button>
    </div>
  )
}

export default PreferencesControls