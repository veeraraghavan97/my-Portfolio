import { motion } from 'framer-motion'
import Pipeline from './Pipeline.jsx'

export default function Hero() {
  return (
    <header className="border-b border-border px-7 pb-16 pt-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-5 flex items-center gap-2.5 font-mono text-xs uppercase tracking-widest text-amber"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_8px_rgba(242,169,59,0.8)]" />
          cloud → ai agent ops → security
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="max-w-3xl font-display text-[clamp(38px,6vw,64px)] font-bold leading-[1.04] tracking-tight"
        >
          Infrastructure that other engineers build on —{' '}
          <span className="text-cyan">and try to break.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-5 max-w-xl text-lg text-muted"
        >
          Veera Raghavan Muthappan. Platform engineer with 5+ years hardening enterprise
          Azure environments, now extending that discipline into deploying AI agents and
          offensive security.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3.5"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded font-mono text-[13.5px] font-semibold bg-cyan px-5 py-3 text-[#04120F] transition-colors hover:bg-[#6EE7D4]"
          >
            Get in touch
          </button>
          <button
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded border border-border px-5 py-3 font-mono text-[13.5px] transition-colors hover:border-muted"
          >
            See the work ↓
          </button>
        </motion.div>

        <Pipeline />
      </div>
    </header>
  )
}
