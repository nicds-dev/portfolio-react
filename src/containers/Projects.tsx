import { motion } from "framer-motion"
import CardProject from "@/components/CardProject"
import { useTranslation } from "react-i18next"


export default function Projects() {
  const { t } = useTranslation()
  const projects = t('projects.projects_list', { returnObjects: true }) as Record<string, any>[]

  console.log("Hi", projects)

  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-6 xl:px-0">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        {t('projects.title')}
      </motion.h2>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CardProject
              title={project.title}
              image={project.image}
              description={project.description}
              technologies={project.tags}
              demoLink={project.demo_link}
              codeLink={project.code_link}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
