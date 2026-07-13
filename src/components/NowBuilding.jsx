import Reveal from './Reveal.jsx'
import { htbMachines } from '../data/content.js'

const cards = [
  {
    title: 'AI agent deployment',
    desc: 'Working through hands-on coursework on building, deploying and operating AI agents in production — treating them as another workload to architect around, not a black box.',
  },
  {
    title: 'Offensive security (HTB)',
    desc: `Building penetration-testing skills on Hack The Box. Machines rooted so far: ${htbMachines.length}${
      htbMachines.length === 0 ? ' — tracker goes live here as boxes fall.' : '.'
    }`,
  },
  {
    title: 'This portfolio',
    desc: 'A living deployment log rather than a static CV — updated as new stages move from "in progress" to "passing."',
  },
]

export default function NowBuilding() {
  return (
    <section id="now" className="border-b border-border px-7 py-[72px]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-cyan">05</span>
          <h2 className="font-display text-[clamp(24px,3.2vw,32px)] font-semibold tracking-tight">
            What I'm building now
          </h2>
        </div>
        <p className="mb-8 max-w-xl text-[15px] text-muted">
          The next layer of the stack. Still shipping, still learning in the open.
        </p>

        <Reveal className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="rounded-md border border-border bg-surface p-5.5 p-[22px]">
              <div className="mb-2.5 font-display text-[17px] font-semibold">{card.title}</div>
              <div className="text-[13.5px] text-muted">{card.desc}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
