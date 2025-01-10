import NavBar from "@/containers/Navbar"
import Hero from "@/containers/Hero"
import About from "@/containers/About"
import Projects from "@/containers/Projects"
import Contact from "@/containers/Contact"

function App() {

  return (
    <div className="text-neutral-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div
          className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(176,189,255,0.1),rgba(255,255,255,0))]"
        />
      </div>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App