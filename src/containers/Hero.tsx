import { motion } from "motion/react"
import { TbFileDownload } from "react-icons/tb"
import { IoArrowDown } from "react-icons/io5"
import ButtonFilled from "@/components/ButtonFilled"
import ButtonOutline from "@/components/ButtonOutline"
import { useTranslation } from "react-i18next"

function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center my-8 sm:my-2 max-w-6xl mx-auto px-6 xl:px-0">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">{t('hero.title')} Nicolás.</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-sky-500 via-teal-300 to-sky-500 bg-clip-text text-transparent mb-8">
          {t('hero.subtitle')}
        </h2>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-lg sm:max-w-xl">
          {t('hero.paragraph')}
        </p>
        <div className="flex flex-col-reverse sm:flex-row justify-center items-center text-sm gap-4">
          <ButtonFilled
            href="#about"
            className="flex items-center justify-center"
            text={t('hero.buttons.about_me')}
          >
            <IoArrowDown className="ml-3 animate-bounce-slow" />
          </ButtonFilled>
          <ButtonOutline
            href="/path-to-your-cv.pdf"
            text={t('hero.buttons.download_cv')}
            className="flex items-center justify-center"
          >
            <TbFileDownload className="ml-3" />
          </ButtonOutline>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero