import NavBar from "@/containers/Navbar"
import Hero from "@/containers/Hero"
import About from "@/containers/About"
import Projects from "@/containers/Projects"
import Contact from "@/containers/Contact"
import Footer from "@/containers/Footer"

function App() {

  return (
    <div className="text-zinc-900 dark:text-zinc-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-gradient"
          />
      </div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App