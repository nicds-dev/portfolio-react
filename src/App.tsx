import NavBar from "@/containers/Navbar"
import Hero from "@/containers/Hero"
import About from "@/containers/About"
import Projects from "@/containers/Projects"

function App() {

  return (
    <>
    <div className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(176,189,255,0.1),rgba(255,255,255,0))]"></div>
      <NavBar />
      <main className="max-w-6xl mx-auto px-6 xl:px-0">
        <Hero />
        <About />
        <Projects />
      </main>
    </>
  )
}

export default App
