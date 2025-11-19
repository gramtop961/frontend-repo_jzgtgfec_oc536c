import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks! I will get back to you shortly.')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(700px_300px_at_50%_100%,rgba(34,197,94,0.12),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-3xl font-semibold text-white tracking-tight">Let’s build something great</h2>
          <p className="text-white/70 mt-2">Tell me about your project and timeline.</p>

          <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
            <input name="name" value={form.name} onChange={onChange} placeholder="Name" className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" required />
            <input type="email" name="email" value={form.email} onChange={onChange} placeholder="Email" className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" required />
            <textarea name="message" rows="5" value={form.message} onChange={onChange} placeholder="Your message" className="rounded-xl bg-white/10 border border-white/10 px-4 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" required />
            <button type="submit" className="rounded-full bg-white text-slate-900 px-5 py-3 text-sm font-semibold hover:opacity-90">Send message</button>
            {status && <p className="text-white/80 text-sm">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
