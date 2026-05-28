import Reveal from './Reveal'

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'IA & Machine Learning',
    description:
      'Modelos personalizados treinados com os dados da sua empresa para previsão de demanda, análise de comportamento, detecção de fraudes e muito mais.',
    features: ['Modelos preditivos', 'Análise de dados', 'Automação inteligente'],
    color: '#7c3aed',
    badge: 'Mais popular',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Chatbot Inteligente',
    description:
      'Atendimento automático 24/7 em site, Instagram, Facebook e muito mais. Resolva dúvidas, qualifique leads e feche vendas sem precisar de equipe.',
    features: ['Atendimento 24/7', 'Multi-plataforma', 'NLP avançado'],
    color: '#06b6d4',
    badge: null,
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Automação WhatsApp',
    description:
      'Disparo de mensagens em massa, fluxos de atendimento automatizados, agendamento de respostas e integração com CRM direto no WhatsApp Business.',
    features: ['Disparo em massa', 'Fluxos de atendimento', 'Integração CRM'],
    color: '#10b981',
    badge: 'Novo',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: 'Consultoria de TI',
    description:
      'Diagnóstico tecnológico completo, planejamento de roadmap digital, otimização de infraestrutura e implementação de soluções escaláveis para o seu negócio.',
    features: ['Diagnóstico digital', 'Roadmap estratégico', 'Suporte técnico'],
    color: '#f59e0b',
    badge: null,
  },
]

export default function Services() {
  return (
    <section id="servicos" className="section-pad section-alt">
      <div className="container">
        {/* Header */}
        <Reveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>🛠 Nossos Serviços</div>
          <h2 className="section-title font-display">
            Tecnologia que <span className="gradient-text">transforma</span> negócios
          </h2>
          <div className="divider" />
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Do atendimento ao cliente à consultoria estratégica, entregamos soluções completas de IA para empresas de todos os tamanhos.
          </p>
          </div>
        </Reveal>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
          gap: '1.5rem',
        }}>
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 100} direction="up">
              <div className="glass-card grad-border" style={{ padding: '2rem', height: '100%' }}>
              {/* Icon */}
              <div style={{
                width: 64, height: 64,
                background: `rgba(${hexToRgb(s.color)},0.1)`,
                border: `1px solid rgba(${hexToRgb(s.color)},0.2)`,
                borderRadius: 14,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem',
                color: s.color,
              }}>
                {s.icon}
              </div>

              {/* Badge */}
              {s.badge && (
                <span style={{
                  display: 'inline-block',
                  fontSize: '0.7rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  color: s.color,
                  background: `rgba(${hexToRgb(s.color)},0.1)`,
                  border: `1px solid rgba(${hexToRgb(s.color)},0.25)`,
                  padding: '0.2rem 0.6rem', borderRadius: 100,
                  marginBottom: '0.75rem',
                }}>
                  {s.badge}
                </span>
              )}

              <h3 style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '1.2rem', fontWeight: 700,
                marginBottom: '0.75rem',
              }}>
                {s.title}
              </h3>

              <p style={{ color: 'var(--txt-2)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                {s.description}
              </p>

              {/* Feature tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                {s.features.map(f => (
                  <span key={f} style={{
                    fontSize: '0.75rem', color: 'var(--txt-3)',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid var(--border)',
                    padding: '0.25rem 0.65rem', borderRadius: 100,
                  }}>
                    {f}
                  </span>
                ))}
              </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// Helper to convert hex color to r,g,b string
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (!result) return '255,255,255'
  return `${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}`
}
