import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal'

const stats = [
  { end: 500,  suffix: '+',  label: 'Empresas Atendidas',      icon: '🏢', color: '#7c3aed' },
  { end: 2,    suffix: 'M+', label: 'Mensagens Automatizadas', icon: '💬', color: '#06b6d4' },
  { end: 98,   suffix: '%',  label: 'Satisfação dos Clientes', icon: '⭐', color: '#10b981' },
  { end: 24,   suffix: '/7', label: 'Disponibilidade da IA',   icon: '⚡', color: '#f59e0b' },
]

// Easing: deceleração suave (ease-out cubic)
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3)
}

function CountUp({ end, suffix, color, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          const tick = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = easeOutCubic(progress)
            setCount(Math.round(eased * end))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <div
      ref={ref}
      className="stat-number"
      style={{
        background: `linear-gradient(135deg, ${color}, var(--cyan-l))`,
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        marginBottom: '0.4rem',
      }}
    >
      {count}{suffix}
    </div>
  )
}

export default function Stats() {
  return (
    <section style={{
      padding: '3rem 0',
      background: 'rgba(255,255,255,0.015)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container">
        <div className="stats-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1.5rem',
          textAlign: 'center',
        }}>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} direction="up">
              <div style={{ padding: '1.5rem 1rem' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>{s.icon}</div>
                <CountUp end={s.end} suffix={s.suffix} color={s.color} />
                <div style={{ color: 'var(--txt-2)', fontSize: '0.85rem', fontWeight: 500 }}>
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
