import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'
import { certifications } from '../data/content.js'

export default function Certifications() {
  return (
    <section id="certs" className="border-b border-border px-7 py-[72px]">
      <div className="mx-auto max-w-5xl">
        <div className="mb-9 flex items-baseline gap-4">
          <span className="font-mono text-[13px] text-cyan">04</span>
          <h2 className="font-display text-[clamp(24px,3.2vw,32px)] font-semibold tracking-tight">
            Certifications
          </h2>
        </div>

        <Reveal className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className={`rounded-md border p-4 px-4.5 ${
                cert.pending ? 'border-dashed border-border' : 'border-border bg-surface'
              }`}
            >
              <div className={`mb-1 text-[14.5px] font-semibold ${cert.pending ? 'text-muted' : 'text-ink'}`}>
                {cert.name}
              </div>
              <div className="font-mono text-xs text-muted">{cert.issuer}</div>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
