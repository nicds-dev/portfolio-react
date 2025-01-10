import { motion } from "framer-motion"
import CardProject from "@/components/CardProject"

export default function Projects() {

  const projects = [
    {
      title: "Simple blog Django REST Framework + Vue",
      image: "https://nicds.vercel.app/img/blog-drf-vue.692bfaca.webp",
      description:
        "Simple blog made with DRF, basic Vue3 (Views, Store, Router, etc.) and Bootstrap styles.",
      technologies: ["Django", "REST", "Vue", "Bootstrap"],
      demoLink: "https://www.youtube.com/watch?v=VJwhOxdH7N0",
      codeLink: "https://github.com/nicds-dev/blog-drf-vue",
    },
    {
      title: "Test Django REST Framework + Postman",
      image: "https://nicds.vercel.app/img/drf-test.3d10af3f.webp",
      description:
        "Test of basic concepts of DRF (ORM framework, serializers, class-based views, etc.).",
      technologies: ["Django", "REST", "Postman"],
      demoLink: "https://www.youtube.com/watch?v=9Aa4D3C1d4Q&t=106s",
      codeLink: "https://github.com/nicds-dev/django_test",
    },
  ]

	return (
		<section id="projects" className="py-20 max-w-6xl mx-auto px-6 xl:px-0">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					className="text-3xl font-bold mb-12 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					Projects
				</motion.h2>
				<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
					{projects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<CardProject
                title={project.title}
                image={project.image}
                description={project.description}
                technologies={project.technologies}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}
