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
          className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(176,189,255,0.1),rgba(255,255,255,0))]"
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