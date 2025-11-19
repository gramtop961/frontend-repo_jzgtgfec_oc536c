import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} UX Designer — All rights reserved.</p>
          <div className="text-white/60 text-sm">Built with care, accessibility, and a bit of motion ✦</div>
        </div>
      </footer>
    </div>
  )
}

export default App
