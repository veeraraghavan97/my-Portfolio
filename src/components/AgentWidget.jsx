import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send } from 'lucide-react'
import { agentKB } from '../data/content.js'

// Rule-based matcher for the preview. Swap this function for a real API
// call (e.g. to your own backend proxying an LLM) once the full agent
// ships — the UI below doesn't need to change.
function matchAgent(message) {
  const m = message.toLowerCase()
  for (const entry of agentKB) {
    if (entry.keywords.some((k) => m.includes(k))) return entry.answer
  }
  return "I don't have a scripted answer for that yet — try asking about experience, skills, education, HTB, or how to get in touch. (This is a rule-based preview; a real agent is coming.)"
}

export default function AgentWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { who: 'bot', text: 'Ask me about experience, skills, education, HTB, or contact.' },
  ])
  const [input, setInput] = useState('')
  const logRef = useRef(null)

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight
  }, [messages])

  const send = () => {
    const val = input.trim()
    if (!val) return
    setMessages((m) => [...m, { who: 'user', text: val }])
    setInput('')
    setTimeout(() => {
      setMessages((m) => [...m, { who: 'bot', text: matchAgent(val) }])
    }, 300)
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-[78px] right-5 z-[80] flex w-[min(340px,calc(100vw-40px))] flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-2xl">
          <div className="flex items-center justify-between border-b border-border px-4 py-3.5">
            <span className="font-mono text-xs text-muted">
              <b className="text-ink">VRM-Agent</b> · preview
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close agent preview">
              <X size={16} className="text-muted hover:text-ink" />
            </button>
          </div>

          <div ref={logRef} className="h-[220px] overflow-y-auto px-4 py-3 font-mono text-[12.5px]">
            {messages.map((msg, i) => (
              <p key={i} className={`mb-2 ${msg.who === 'user' ? 'text-cyan' : 'text-amber'}`}>
                {msg.who === 'user' ? 'you> ' : 'agent> '}
                {msg.text}
              </p>
            ))}
          </div>

          <div className="flex gap-1.5 border-t border-border p-2.5">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && send()}
              placeholder="Ask a question…"
              className="flex-1 rounded border border-border bg-bg px-2.5 py-2 font-mono text-xs text-ink outline-none focus:border-cyan"
            />
            <button
              onClick={send}
              className="flex items-center justify-center rounded border border-cyan bg-cyan/10 px-3 text-cyan hover:bg-cyan hover:text-[#04120F]"
              aria-label="Send"
            >
              <Send size={14} />
            </button>
          </div>

          <div className="border-t border-border px-4 py-2 font-mono text-[10.5px] text-muted">
            Preview only — a full LLM-backed agent trained on this profile is planned.
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-[80] flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 font-mono text-[12.5px] shadow-xl transition-colors hover:border-cyan"
      >
        <span className="h-2 w-2 animate-pulse-soft rounded-full bg-amber" />
        {open ? <X size={14} /> : <MessageCircle size={14} />}
        Ask VRM-Agent
      </button>
    </>
  )
}
