import { IoLanguage } from 'react-icons/io5'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { useState } from 'react'
import { useTranslation } from "react-i18next"

interface PreferencesControlsProps {
  className: string,
  direction?: string,
}

function PreferencesControls(props: PreferencesControlsProps) {
  const { t, i18n } = useTranslation()
  const [isDropdownOpen, setDropdownOpen] = useState(false)

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const storedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null
    const defautlTheme = storedTheme || 'dark'

    document.documentElement.classList.toggle('dark', defautlTheme === 'dark')
    return defautlTheme
  })

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
  }

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev)
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
          className="p-2 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md transition"
          onClick={toggleDropdown}
        >
          <IoLanguage size={20} />
        </button>
        {isDropdownOpen && (
          <div
            className={`absolute ${props.direction === 'top' ? 'bottom-10' : 'mt-2'} right-0 text-sm w-32 bg-zinc-300 dark:bg-zinc-700 shadow-xl rounded-md`}
          >
            <ul className="p-1">
              {["en", "es"].map((lang) => (
                <li key={lang}>
                  <button
                    onClick={() => changeLanguage(lang)}
                    className="w-full text-left px-4 py-1 hover:bg-zinc-200 dark:hover:bg-zinc-600 rounded-md"
                  >
                    {t(`navbar.lang.${lang}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <button
        aria-label="Toggle Dark/Light Mode"
        className="p-2 hover:bg-zinc-300 dark:hover:bg-zinc-700 rounded-md transition"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <MdDarkMode size={20} /> : <MdLightMode size={20} />}
      </button>
    </div>
  )
}

export default PreferencesControls