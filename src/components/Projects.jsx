import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Fintech onboarding redesign',
    tags: ['Research', 'Wireframes', 'Usability'],
    desc: 'Reduced time-to-value by 46% with a progressive onboarding flow.',
    image: 'https://images.unsplash.com/photo-1563775985010-22480f2a7e91?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxGaW50ZWNoJTIwb25ib2FyZGluZyUyMHJlZGVzaWdufGVufDB8MHx8fDE3NjM1NzQ3ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'Health app design system',
    tags: ['Design System', 'Accessibility', 'Figma'],
    desc: 'Built a scalable system with WCAG-compliant components and tokens.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'SaaS dashboard UX',
    tags: ['IA', 'Prototyping', 'Motion'],
    desc: 'Simplified IA and added micro-interactions to improve task success.',
    image: 'https://images.unsplash.com/photo-1651760464181-49092525ca3b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWFTJTIwZGFzaGJvYXJkJTIwVVh8ZW58MHwwfHx8MTc2MzU3NDc4NHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_20%,rgba(168,85,247,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Selected Work</h2>
          <p className="text-white/70 mt-2">A snapshot of projects spanning research, prototyping, and systems.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              viewport={{ once: true, margin: '-100px' }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] uppercase tracking-wide rounded-full bg-white/10 text-white/80 px-2 py-1">{t}</span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <p className="text-white/70 text-sm mt-1">{p.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
