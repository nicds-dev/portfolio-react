import { motion } from "framer-motion"
import { SiPython, SiDjango, SiPostman, SiJavascript, SiReact, SiBootstrap, SiGit } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import profile from "@/assets/profile.webp"
import { useTranslation, Trans } from "react-i18next"

function About() {
  const { t } = useTranslation()
  const skills = [
    { name: "Python", icon: SiPython },
    { name: "Django", icon: SiDjango },
    { name: "PostgreSQL", icon: BiLogoPostgresql },
    { name: "Postman", icon: SiPostman},
    { name: "JavaScript", icon: SiJavascript },
    { name: "React", icon: SiReact },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Git", icon: SiGit },
  ]

  return (
    <section id="about" className="bg-zinc-200 dark:bg-zinc-900">
      <div className="container py-20">
        <motion.h2
          className="title-md mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {t('about.title')}
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="md:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src={profile} alt="about photo" width={300} height={300} className="rounded-full" />
          </motion.div>
          <motion.div
            className="md:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-paragraph mb-6" style={{ maxWidth: "61ch" }}>
              <Trans
                i18nKey='about.paragraph'
                components={[<span className="italic text-teal-500"/>]}
              />
            </p>
            <h3 className="text-xl font-semibold mb-4">{t('about.skills')}</h3>
            <ul className="flex flex-wrap gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <div
                    key={index}
                    className="badge font-semibold text-sm py-1 px-2"
                  >
                    <Icon className="mr-2" />
                    {skill.name}
                  </div>
                )
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About