import Reveal from './Reveal.jsx'
import { facts } from '../data/content.js'

export default function About() {
  return (
    <section id="about" className="border-b border-border px-7 py-18 py-[72px]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-9 flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-cyan">01</span>
          <h2 className="font-display text-[clamp(24px,3.2vw,32px)] font-semibold tracking-tight">
            About
          </h2>
        </div>

        <Reveal className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-4 text-base text-muted">
              I spent the last five years as a cloud consultant with TCS, embedded inside{' '}
              <strong className="font-semibold text-ink">Boots UK, Walgreens, Walgreens Boots Alliance</strong>{' '}
              and <strong className="font-semibold text-ink">Marks & Spencer</strong> — designing
              Azure infrastructure as code, building CI/CD pipelines, and locking down identity
              and network security for systems that can't afford downtime.
            </p>
            <p className="mb-4 text-base text-muted">
              That led to an MSc in Information Security at{' '}
              <strong className="font-semibold text-ink">Royal Holloway, University of London</strong>,
              where my dissertation focused on hardening a managed Kubernetes cluster from the
              ground up: authentication, authorization, network segmentation, and vulnerability
              scanning.
            </p>
            <p className="text-base text-muted">
              Right now I'm pointing that same infrastructure-and-security mindset at a new
              target: deploying and operating{' '}
              <strong className="font-semibold text-ink">AI agents</strong> reliably, and building
              the offensive-security instincts to know how they — and the systems around them —
              actually fail.
            </p>
          </div>

          <div className="overflow-hidden rounded-md border border-border">
            {facts.map((fact) => (
              <div
                key={fact.k}
                className="flex justify-between border-b border-border px-4.5 py-3.5 px-[18px] text-[13.5px] last:border-b-0"
              >
                <span className="font-mono text-muted">{fact.k}</span>
                <span className="text-right font-medium">{fact.v}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
