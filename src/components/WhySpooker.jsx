import Reveal from './Reveal'

const reasons = [
  {
    icon: '⚡',
    title: 'Implementação Rápida',
    description: 'Soluções funcionando em dias, não meses. Sem burocracia, sem complexidade desnecessária.',
  },
  {
    icon: '🎯',
    title: 'Resultados Mensuráveis',
    description: 'Dashboard completo com métricas reais: conversas automatizadas, leads gerados e ROI claro.',
  },
  {
    icon: '🔒',
    title: 'Segurança & Privacidade',
    description: 'Dados criptografados, conformidade com LGPD e infraestrutura em nuvem certificada.',
  },
  {
    icon: '🤝',
    title: 'Suporte Humano Real',
    description: 'Equipe dedicada disponível para ajudar. Atendimento por WhatsApp, e-mail e vídeo chamada.',
  },
  {
    icon: '🔄',
    title: 'Integração Total',
    description: 'Conectamos com seu CRM, ERP, sistema de agendamento ou qualquer plataforma que você já usa.',
  },
  {
    icon: '📈',
    title: 'Escala Sem Limites',
    description: 'A IA trabalha para você 24/7 e escala instantaneamente — do primeiro ao milionésimo atendimento.',
  },
]

export default function WhySpooker() {
  return (
    <section id="por-que" className="section-pad section-alt">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(500px, 100%), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', alignItems: 'center' }}>

          {/* Left column — text */}
          <Reveal direction="right" duration={800}>
            <div>
            <div className="eyebrow">💡 Por que Spooker</div>
            <h2 className="section-title font-display" style={{ textAlign: 'left', marginBottom: '1rem' }}>
              Não somos mais<br />
              <span className="gradient-text-alt">uma agência de TI.</span>
            </h2>
            <div className="divider" style={{ margin: '0 0 1.5rem' }} />
            <p style={{ color: 'var(--txt-2)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              Somos parceiros de crescimento. Cada solução que entregamos é pensada para gerar resultado real no seu negócio, com tecnologia de ponta e suporte humano de verdade.
            </p>
            <p style={{ color: 'var(--txt-2)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Combinamos expertise em IA, experiência de mercado e um time apaixonado por resolver problemas complexos de forma simples.
            </p>

            {/* Mini stats */}
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {[
                { v: '3×', l: 'Mais crescimento' },
                { v: '70%', l: 'Redução de custos' },
                { v: '7d',  l: 'Para implementar' },
              ].map(s => (
                <div key={s.l}>
                  <div style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '2rem', fontWeight: 800,
                    background: 'linear-gradient(135deg, var(--purple-l), var(--cyan-l))',
                    WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                  }}>
                    {s.v}
                  </div>
                  <div style={{ color: 'var(--txt-3)', fontSize: '0.8rem', marginTop: '0.2rem' }}>{s.l}</div>
                </div>
              ))}
            </div>
            </div>
          </Reveal>

          {/* Right column — reasons grid */}
          <Reveal direction="left" duration={800} delay={100}>
            <div className="reasons-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
          }}>
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 70} direction="up">
                <div className="glass-card" style={{ padding: '1.4rem', height: '100%' }}>
                <div style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>{r.icon}</div>
                <h4 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.95rem', fontWeight: 700,
                  marginBottom: '0.5rem',
                }}>
                  {r.title}
                </h4>
                <p style={{ color: 'var(--txt-2)', fontSize: '0.82rem', lineHeight: 1.65 }}>
                  {r.description}
                </p>
                </div>
              </Reveal>
            ))}
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
