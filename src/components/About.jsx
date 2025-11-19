import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_10%,rgba(56,189,248,0.12),transparent)]" />
      <div className="relative mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:col-span-2">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">About</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              I blend research-driven strategy with playful execution. My process is collaborative, transparent, and iterative — from framing the problem and sketching flows to prototyping and shipping.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {['User research & testing','Information architecture','Prototyping & motion','Design systems & tokens'].map((s) => (
                <div key={s} className="rounded-xl border border-white/10 bg-white/5 p-4 text-white/80">{s}</div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="text-white font-semibold">Toolbox</h3>
            <ul className="mt-3 space-y-2 text-white/75 text-sm">
              {['Figma','FigJam','Framer','Notion','Maze','Jira'].map(t => (<li key={t}>• {t}</li>))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
