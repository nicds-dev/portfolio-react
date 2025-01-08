import { motion } from "motion/react"
import { TbFileDownload } from "react-icons/tb";
import { IoArrowDown } from "react-icons/io5";

function Hero() {
  return (
    <section id="hero" className="h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Nicolás.</h1>
        <h2 className="text-2xl md:text-3xl font-medium bg-gradient-to-r from-[#8fe9c2] via-[#70b8c8] to-[#8fe9c2] bg-clip-text text-transparent mb-8">Backend Developer</h2>
        <p className="text-xl mb-12 max-w-2xl">
          Crafting robust and scalable server-side solutions for modern web applications.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center text-sm gap-4">
          <a
            href="#about"
            className="bg-white hover:bg-gray-300 text-black font-medium py-2 px-4 rounded-md flex items-center justify-center transition">
            More About Me
            <IoArrowDown className="ml-3 animate-bounce-slow" />
          </a>
          <a
            href="/path-to-your-cv.pdf"
            download
            className="border border-[#27272A] hover:bg-[#27272A] text-white font-medium py-2 px-4 rounded-md flex items-center justify-center transition">
            Download CV
            <TbFileDownload className="ml-3 h-4 w-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;