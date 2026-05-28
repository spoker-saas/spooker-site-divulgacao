import Reveal from './Reveal'

const stats = [
  { value: '500+',  label: 'Empresas Atendidas',       icon: '🏢', color: '#7c3aed' },
  { value: '2M+',   label: 'Mensagens Automatizadas',  icon: '💬', color: '#06b6d4' },
  { value: '98%',   label: 'Satisfação dos Clientes',  icon: '⭐', color: '#10b981' },
  { value: '24/7',  label: 'Disponibilidade da IA',    icon: '⚡', color: '#f59e0b' },
]

export default function Stats() {
  return (
    <section style={{
      padding: '3rem 0',
      background: 'rgba(255,255,255,0.015)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: '1.5rem',
          textAlign: 'center',
        }}>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} direction="up">
              <div style={{ padding: '1.5rem 1rem' }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.4rem' }}>{s.icon}</div>
              <div
                className="stat-number"
                style={{
                  background: `linear-gradient(135deg, ${s.color}, var(--cyan-l))`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.4rem',
                }}
              >
                {s.value}
              </div>
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
