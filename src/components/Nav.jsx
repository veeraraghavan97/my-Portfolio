import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import useActiveSection from '../hooks/useActiveSection.js'

const LINKS = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'experience' },
  { id: 'skills', label: 'skills' },
  { id: 'certs', label: 'certs' },
  { id: 'now', label: 'now' },
  { id: 'notes', label: 'notes' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(LINKS.map((l) => l.id))

  const handleClick = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-7">
        <div className="font-mono text-sm">
          veera<span className="text-cyan">@</span>portfolio<span className="text-cyan">:~$</span>
        </div>

        <div className="hidden gap-7 font-mono text-[13px] text-muted md:flex">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`transition-colors hover:text-cyan ${
                active === link.id ? 'text-cyan' : ''
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => handleClick('contact')}
          className="hidden rounded border border-border px-3.5 py-1.5 font-mono text-[13px] transition-colors hover:border-cyan hover:text-cyan md:inline-block"
        >
          contact
        </button>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-1 border-t border-border px-7 py-4 font-mono text-sm md:hidden">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`py-2 text-left transition-colors hover:text-cyan ${
                active === link.id ? 'text-cyan' : 'text-muted'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('contact')}
            className="mt-2 w-fit rounded border border-border px-3.5 py-1.5 text-left hover:border-cyan hover:text-cyan"
          >
            contact
          </button>
        </div>
      )}
    </nav>
  )
}
