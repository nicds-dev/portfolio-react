import ButtonOutline from "@/components/ButtonOutline"
import { motion } from "framer-motion"
import { SiLinkedin, SiGithub } from "react-icons/si"
import { IoMdMail } from "react-icons/io"
import { useTranslation } from "react-i18next"

function Contact () {
  const { t } = useTranslation()
  const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nicds/", icon: SiLinkedin },
    { name: "Github", href: "https://github.com/nicds-dev/", icon: SiGithub },
    { name: "Email", href: "mailto:nikolasdurango@gmail.com", icon: IoMdMail },
  ]

  return (
    <section id="contact" className="container flex-center-col py-16">
      <motion.h2
        className="title-md mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {t('contact.title')}
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3
          className="text-4xl sm:text-4.5xl font-bold text-gradient pb-2 mb-8"
        >
          {t('contact.subtitle')}
        </h3>
        <p className="text-paragraph text-large-spacing mb-12">
          {t('contact.paragraph')}
        </p>
        <div className="flex-center-row text-sm gap-3">
          {socials.map((social, index) => {
            const Icon = social.icon
            return (
              <ButtonOutline
                key={index}
                href={social.href}
                text={social.name}
                className="flex-center-row-reverse"
              >
                <Icon className="mr-2 text-teal-500" />
              </ButtonOutline>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Contact