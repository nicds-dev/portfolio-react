import { motion } from "framer-motion"
import CardProject from "@/components/CardProject"
import { useTranslation } from "react-i18next"


export default function Projects() {
  const { t } = useTranslation()
  const projects = t('projects.projects_list', { returnObjects: true }) as Record<string, any>[]

  return (
    <section id="projects" className="container py-20">
      <motion.h2
        className="title-md mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {t('projects.title')}
      </motion.h2>
      <motion.div
        className="grid-container"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
      {projects.map((project, index) => (
          <CardProject
            key={index}
            title={project.title}
            image={project.image}
            description={project.description}
            technologies={project.tags}
            demoLink={project.demo_link}
            codeLink={project.code_link}
          />
        ))}
      </motion.div>
    </section>
  )
}
