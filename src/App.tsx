import NavBar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"

function App() {

  return (
    <div
      className="absolute top-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(176,189,255,0.1),rgba(255,255,255,0))]"
    >
      <NavBar />
      <main className="max-w-6xl mx-auto">
        <Hero />
        <About />
      </main>
    </div>
  )
}

export default App
