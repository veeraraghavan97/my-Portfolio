import { motion } from 'framer-motion'
import { pipeline } from '../data/content.js'

export default function Pipeline() {
  return (
    <div className="mt-14">
      <div className="mb-3.5 font-mono text-[11.5px] uppercase tracking-wider text-muted">
        // career.pipeline.yaml
      </div>
      <div className="flex flex-col overflow-hidden rounded-lg border border-border bg-surface md:flex-row">
        {pipeline.map((item, i) => (
          <motion.div
            key={item.stage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
            className="flex-1 border-b border-border p-4 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
          >
            <div className="font-mono text-[13px] font-semibold">{item.stage}</div>
            <div className="mt-1.5 text-[12.5px] leading-snug text-muted">{item.desc}</div>
            <div
              className={`mt-2.5 flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-wide ${
                item.status === 'pass' ? 'text-cyan' : 'text-amber'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  item.status === 'pass' ? 'bg-cyan' : 'bg-amber animate-pulse-soft'
                }`}
              />
              {item.status === 'pass' ? 'passing' : 'in progress'}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
