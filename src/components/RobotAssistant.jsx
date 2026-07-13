import { useState, useRef, useEffect } from 'react'
import { X, Send } from 'lucide-react'
import { agentKB, profile } from '../data/content.js'

function matchAgent(message) {
  const m = message.toLowerCase()
  for (const entry of agentKB) {
    if (entry.keywords.some((k) => m.includes(k))) return entry.answer
  }
  return "I don't have a scripted answer for that yet — try asking about experience, skills, education, HTB, or how to get in touch. (This is a rule-based preview; a real agent is coming.)"
}

export default function RobotAssistant() {
  const [open, setOpen] = useState(false)
  const [greeting, setGreeting] = useState(true)
  const [messages, setMessages] = useState([
    { who: 'bot', text: `Hi, I'm ${profile.assistantName} — a preview of Veera's assistant. Ask me about experience, skills, education, HTB, or contact.` },
  ])
  const [input, setInput] = useState('')
  const logRef = useRef(null)

  useEffect(() => {
    const t = setTimeout(() => setGreeting(false), 5000)
    return () => clearTimeout(t)
  }, [])

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

  const toggleOpen = () => {
    setGreeting(false)
    setOpen((o) => !o)
  }

  return (
    <>
      {open && (
        <div className="fixed right-4 top-[228px] z-[80] flex w-[min(340px,calc(100vw-32px))] flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-2xl sm:right-10">
          <div className="flex items-center justify-between border-b border-border px-4 py-3.5">
            <span className="font-mono text-xs text-muted">
              <b className="text-ink">{profile.assistantName}</b> · Veera's assistant preview
            </span>
            <button onClick={() => setOpen(false)} aria-label="Close assistant">
              <X size={16} className="text-muted hover:text-ink" />
            </button>
          </div>

          <div ref={logRef} className="h-[220px] overflow-y-auto px-4 py-3 font-mono text-[12.5px]">
            {messages.map((msg, i) => (
              <p key={i} className={`mb-2 ${msg.who === 'user' ? 'text-cyan' : 'text-amber'}`}>
                {msg.who === 'user' ? 'you> ' : 'bot> '}
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

      {greeting && !open && (
        <div className="fixed right-6 top-[172px] z-[80] animate-bot-greeting rounded-lg border border-border bg-surface px-3.5 py-2.5 font-mono text-xs shadow-xl sm:right-10">
          <div className="absolute -top-[7px] right-8 h-3 w-3 rotate-45 border-l border-t border-border bg-surface" />
          Hi, I'm {profile.assistantName} 👋 Ask me about Veera
        </div>
      )}

      <button
        onClick={toggleOpen}
        aria-label={open ? `Close ${profile.assistantName}` : `Open ${profile.assistantName}, Veera's assistant`}
        className="fixed right-6 top-20 z-[80] h-20 w-20 cursor-pointer sm:right-10 sm:top-24"
      >
        <div className="relative h-full w-full animate-bot-float">
          <svg viewBox="0 0 120 120" className="h-full w-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.45)]">
            <defs>
              <radialGradient id="botBody" cx="35%" cy="30%" r="75%">
                <stop offset="0%" stopColor="#1C2A44" />
                <stop offset="100%" stopColor="#0F1830" />
              </radialGradient>
            </defs>

            <ellipse cx="60" cy="98" rx="16" ry="4" className="animate-bot-thruster" fill="#F2A93B" opacity="0.35" />

            <g className="origin-[30px_58px] animate-bot-wave">
              <rect x="18" y="52" width="16" height="7" rx="3.5" fill="#1C2A44" stroke="#23304A" />
            </g>
            <rect x="86" y="54" width="16" height="7" rx="3.5" fill="#1C2A44" stroke="#23304A" />

            <line x1="60" y1="18" x2="60" y2="6" stroke="#4FD8C4" strokeWidth="2" />
            <circle cx="60" cy="5" r="4" fill="#F2A93B" className="animate-bot-blink-slow" />

            <circle cx="60" cy="58" r="34" fill="url(#botBody)" stroke="#23304A" strokeWidth="1.5" />
            <circle cx="60" cy="58" r="34" fill="none" stroke="#4FD8C4" strokeWidth="1" opacity="0.25" />

            <g>
              <ellipse cx="60" cy="60" rx="20" ry="14" fill="#080D18" stroke="#23304A" />
              <g className="origin-[60px_60px] animate-bot-blink">
                <circle cx="60" cy="60" r="7" fill="#4FD8C4" />
                <circle cx="62.5" cy="57.5" r="2" fill="#EAFBF8" />
              </g>
            </g>

            <circle cx="38" cy="46" r="2.4" fill="#F2A93B" opacity="0.9" />
            <circle cx="82" cy="46" r="2.4" fill="#F2A93B" opacity="0.9" />
          </svg>
        </div>
      </button>
    </>
  )
}
