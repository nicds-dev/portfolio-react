import ButtonDark from "@/components/ButtonDark"
import { motion } from "framer-motion"
import { SiLinkedin, SiGithub } from "react-icons/si"
import { IoMdMail } from "react-icons/io"

function Contact () {

  const socials = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/nicds/", icon: SiLinkedin },
    { name: "Github", href: "https://github.com/nicds-dev/", icon: SiGithub },
    { name: "Email", href: "mailto:nicdsdev@gmail.com", icon: IoMdMail },
  ]

  return (
    <section id="contact" className="py-16 flex flex-col justify-center items-center text-center max-w-6xl mx-auto px-6 xl:px-0">
      <motion.h2
        className="text-3xl font-bold mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
      >
        Contact me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h3
          className="text-4xl sm:text-4.5xl font-bold bg-gradient-to-r from-[#8fe9c2] via-[#70b8c8] to-[#8fe9c2] bg-clip-text text-transparent mb-10"
        >
          Keep In Touch.
        </h3>
        <p className="text-xl text-zinc-400 mb-12 max-w-lg sm:max-w-xl">
          I'm just a few clicks away. Feel free to reach out via my socials,
          and I'll get back to you as soon as possible.
        </p>
        <div className="flex flex-row justify-center items-center text-sm gap-3">
          {socials.map((social, index) => {
            const Icon = social.icon
            return (
              <ButtonDark
                key={index}
                href={social.href}
                text={social.name}
                className="flex flex-row-reverse items-center justify-center"
              >
                <Icon className="mr-2 text-[#8fe9c2]" />
              </ButtonDark>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Contact