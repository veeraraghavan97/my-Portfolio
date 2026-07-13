import Reveal from './Reveal.jsx'
import { notes } from '../data/content.js'

export default function Notes() {
  return (
    <section id="notes" className="border-b border-border px-7 py-[72px]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-cyan">06</span>
          <h2 className="font-display text-[clamp(24px,3.2vw,32px)] font-semibold tracking-tight">
            Notes
          </h2>
        </div>
        <p className="mb-8 max-w-xl text-[15px] text-muted">
          Write-ups on cloud, security, and whatever's currently in the "deploy" or "red team"
          stages above. New entries land here as they're written — just add to{' '}
          <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-[13px]">
            src/data/content.js
          </code>
          .
        </p>

        <Reveal className="overflow-hidden rounded-md border border-border bg-surface">
          {notes.length === 0 ? (
            <div className="px-6 py-10 text-center font-mono text-[13px] text-muted">
              No entries yet — first write-up in progress.
            </div>
          ) : (
            notes.map((note, i) => (
              <div
                key={note.title}
                className={`grid grid-cols-1 items-baseline gap-2 border-b border-border p-4.5 px-[22px] last:border-b-0 hover:bg-surface2 md:grid-cols-[150px_1fr_auto] md:gap-5 ${
                  i % 2 === 1 ? '' : ''
                }`}
              >
                <span className="font-mono text-xs text-muted">{note.date}</span>
                <div>
                  <div className="mb-1 font-display text-base font-semibold">{note.title}</div>
                  <div className="text-[13.5px] text-muted">{note.excerpt}</div>
                </div>
                <span className="w-fit whitespace-nowrap rounded border border-border px-2.5 py-1 font-mono text-[10.5px] uppercase tracking-wide text-cyan">
                  {note.tag}
                </span>
              </div>
            ))
          )}
        </Reveal>
      </div>
    </section>
  )
}
