import Reveal from './Reveal.jsx'
import { experience } from '../data/content.js'

export default function Experience() {
  return (
    <section id="experience" className="border-b border-border px-7 py-[72px]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-9 flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-cyan">02</span>
          <h2 className="font-display text-[clamp(24px,3.2vw,32px)] font-semibold tracking-tight">
            Experience
          </h2>
        </div>

        <div className="border-l border-border pl-7">
          {experience.map((role, i) => (
            <Reveal key={role.title + role.client} delay={i * 0.08} className="relative pb-11 last:pb-0">
              <div className="absolute -left-[33px] top-1 h-2.5 w-2.5 rounded-full border-2 border-cyan bg-bg" />
              <div className="mb-1.5 flex flex-wrap items-baseline justify-between gap-2">
                <div className="font-display text-lg font-semibold">
                  {role.title} <span className="font-body font-normal text-muted">·</span>{' '}
                  <span className="font-medium text-cyan">{role.client}</span>{' '}
                  <span className="text-sm font-normal text-muted">(via {role.via})</span>
                </div>
                <div className="whitespace-nowrap font-mono text-xs text-muted">{role.date}</div>
              </div>
              <ul className="mt-2.5 list-disc pl-4.5 pl-[18px] text-[14.5px] text-muted">
                {role.bullets.map((b) => (
                  <li key={b} className="mb-1.5">
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
