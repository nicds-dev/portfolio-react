import { motion } from "framer-motion"
import { SiPython, SiDjango, SiPostman, SiJavascript, SiReact, SiBootstrap, SiGit } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"

function About() {

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
    <section id="about" className="bg-[#131416]">
      <div className="max-w-6xl mx-auto py-20 px-6 xl:px-0">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            className="w-full md:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img src="https://nicds.vercel.app/img/profile.13fb28e4.webp" alt="about photo" width={300} height={300} className="rounded-full" />
          </motion.div>
          <motion.div
            className="w-full md:w-2/3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-6">
              Colombian <span className="italic text-[#8fe9c2]">Computer Engineer</span> with focus on web development, experience in both frontend and backend technologies.
              My journey has been one of continuous exploration and learning, allowing me to work with various technologies and methodologies.
              Dedicated to providing efficient and reliable solutions in the <span className="italic text-[#8fe9c2]">ever-evolving world</span> of web development.
            </p>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <ul className="flex flex-wrap gap-4">
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <div
                    key={index}
                    className="inline-flex items-center rounded-full bg-[#27272A] border border-transparent font-semibold text-sm py-1 px-2"
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