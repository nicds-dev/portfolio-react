import { motion } from "motion/react"
import { TbFileDownload } from "react-icons/tb"
import { IoArrowDown } from "react-icons/io5"
import ButtonFilled from "@/components/ButtonFilled"
import ButtonOutline from "@/components/ButtonOutline"
import { useTranslation } from "react-i18next"

function Hero() {
  const { t } = useTranslation()

  return (
    <section id="hero" className="h-[calc(100vh-4rem)] container flex-center-col">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="title-lg mb-4">{t('hero.title')} Nicolás.</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gradient mb-8">
          {t('hero.subtitle')}
        </h2>
        <p className="text-paragraph text-large-spacing mb-12">
          {t('hero.paragraph')}
        </p>
        <div className="flex-responsive-align text-sm">
          <ButtonFilled
            href="#about"
            className="flex-center-row"
            text={t('hero.buttons.about_me')}
          >
            <IoArrowDown className="ml-3 animate-bounce-slow" />
          </ButtonFilled>
          <ButtonOutline
            href="/path-to-your-cv.pdf"
            text={t('hero.buttons.download_cv')}
            className="flex-center-row"
          >
            <TbFileDownload className="ml-3" />
          </ButtonOutline>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero