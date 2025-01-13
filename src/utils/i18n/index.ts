import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import LanguageDetector from "i18next-browser-languagedetector"
import enLang from "@/utils/i18n/locales/en.json"
import esLang from "@/utils/i18n/locales/es.json"


i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: { translation: enLang },
      es: { translation: esLang }
    },
    fallbackLng: "en",
    detection: {
      order: ['navigator', 'localStorage', 'cookie', 'sessionStorage', 'querystring'], // Priority of detection methods
      // Keys to lookup the language from
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      lookupCookie: 'i18next',
      lookupSessionStorage: 'i18nextLng',
      lookupQuerystring: 'lng',
    },

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n