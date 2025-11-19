import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md/0">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-xl">
          <a href="#top" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-fuchsia-500 to-blue-500 ring-2 ring-white/20 shadow-inner" />
            <span className="text-white font-semibold tracking-tight">UX Designer</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold hover:opacity-90 transition">
              Let’s collaborate
            </a>
          </nav>

          <button
            className="md:hidden text-white/90"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="mt-2 md:hidden rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-white/90 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-white text-slate-900 px-4 py-2 text-sm font-semibold"
              >
                Let’s collaborate
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
