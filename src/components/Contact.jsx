import { Mail, Linkedin } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { profile } from '../data/content.js'

export default function Contact() {
  return (
    <section id="contact" className="px-7 py-[72px]">
      <div className="mx-auto max-w-5xl">
        <Reveal className="flex flex-wrap items-end justify-between gap-8">
          <h2 className="max-w-lg font-display text-[clamp(24px,3.2vw,32px)] font-semibold tracking-tight">
            Let's talk about what you're building.
          </h2>
          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2.5 border-b border-border pb-2.5 font-mono text-[14.5px] transition-colors hover:text-cyan"
            >
              <Mail size={15} /> {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 border-b border-border pb-2.5 font-mono text-[14.5px] transition-colors hover:text-cyan"
            >
              <Linkedin size={15} /> {profile.linkedinLabel}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
