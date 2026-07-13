import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { skillLayers } from '../data/content.js'

export default function Skills() {
  const [filter, setFilter] = useState(null)

  const allItems = [...new Set(skillLayers.flatMap((l) => l.items))]

  return (
    <section id="skills" className="border-b border-border px-7 py-[72px]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-cyan">03</span>
          <h2 className="font-display text-[clamp(24px,3.2vw,32px)] font-semibold tracking-tight">
            Skills, by layer
          </h2>
        </div>
        <p className="mb-8 max-w-xl text-[15px] text-muted">
          Read top to bottom the way you'd read an architecture diagram — from the workloads
          running on top, down to the languages that hold it all together. Click a skill to
          highlight it wherever it shows up.
        </p>

        <Reveal className="overflow-hidden rounded-md border border-border">
          {skillLayers.map((layer, i) => (
            <div
              key={layer.name}
              className={`grid grid-cols-1 gap-4 p-4.5 px-5 py-4 md:grid-cols-[190px_1fr] md:items-center ${
                i % 2 === 1 ? 'bg-surface2' : 'bg-surface'
              }`}
            >
              <div className="font-mono text-[12.5px] uppercase tracking-wide text-amber">
                {layer.name}
              </div>
              <div className="flex flex-wrap gap-2">
                {layer.items.map((item) => {
                  const isActive = filter === item
                  return (
                    <button
                      key={item}
                      onClick={() => setFilter(isActive ? null : item)}
                      className={`rounded border px-2.5 py-1.5 font-mono text-xs transition-colors ${
                        isActive
                          ? 'border-cyan bg-cyan text-[#04120F]'
                          : filter
                          ? 'border-border bg-bg text-muted opacity-50'
                          : 'border-border bg-bg text-ink hover:border-cyan hover:text-cyan'
                      }`}
                    >
                      {item}
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </Reveal>

        {filter && (
          <p className="mt-4 font-mono text-xs text-muted">
            Showing where <span className="text-cyan">{filter}</span> appears — click it again to clear.
          </p>
        )}
      </div>
    </section>
  )
}
