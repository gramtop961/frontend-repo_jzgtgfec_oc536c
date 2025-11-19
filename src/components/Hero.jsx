import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] pt-28 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="py-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Open for freelance work
            </span>
            <h1 className="mt-4 text-5xl md:text-6xl font-semibold leading-tight tracking-tight text-white">
              Crafting playful, user-centered experiences
            </h1>
            <p className="mt-4 text-white/80 max-w-xl">
              I’m a UX designer focused on turning complex problems into intuitive, delightful interfaces — balancing research, accessibility, and motion.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:opacity-90">View work</a>
              <a href="#contact" className="rounded-full border border-white/20 px-5 py-3 text-sm text-white hover:bg-white/10">Get in touch</a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-xs text-white/70">
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-fuchsia-400" /> UX Strategy</span>
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-400" /> Prototyping</span>
              <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-400" /> Motion</span>
            </div>
          </motion.div>

          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
