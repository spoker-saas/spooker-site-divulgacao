import Reveal from './Reveal'

const steps = [
  {
    number: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: 'Diagnóstico Gratuito',
    description:
      'Analisamos os processos da sua empresa, identificamos gargalos e mapeamos onde a IA pode gerar mais impacto. Tudo em uma reunião de 30 minutos.',
    color: '#7c3aed',
  },
  {
    number: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Implementação Ágil',
    description:
      'Desenvolvemos e configuramos a solução ideal para o seu negócio. Chatbots, automações e integrações prontas em até 7 dias úteis.',
    color: '#06b6d4',
  },
  {
    number: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Crescimento Contínuo',
    description:
      'Monitoramos resultados, otimizamos continuamente e escalamos as soluções conforme sua empresa cresce. Parceria de longo prazo.',
    color: '#10b981',
  },
]

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-pad">
      <div className="container">
        {/* Header */}
        <Reveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="eyebrow eyebrow-cyan" style={{ justifyContent: 'center' }}>📋 Processo</div>
          <h2 className="section-title font-display">
            Como <span className="gradient-text">funciona</span>
          </h2>
          <div className="divider" />
          <p className="section-sub" style={{ margin: '0 auto' }}>
            Da conversa inicial aos resultados reais em 3 etapas simples e rápidas.
          </p>
        </div>
        </Reveal>

        {/* Steps */}
        <div style={{ position: 'relative' }}>
          {/* Connecting line (desktop) */}
          <div className="hide-mobile" style={{
            position: 'absolute',
            top: 42,
            left: '15%',
            right: '15%',
            height: 1,
            background: 'linear-gradient(90deg, var(--purple), var(--cyan))',
            opacity: 0.2,
            zIndex: 0,
          }} />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2rem',
            position: 'relative',
            zIndex: 1,
          }}>
            {steps.map((step, i) => (
              <Reveal key={step.number} delay={i * 130} direction="up">
                <div style={{ textAlign: 'center' }}>
                {/* Number circle */}
                <div style={{
                  width: 84, height: 84,
                  borderRadius: '50%',
                  background: `rgba(255,255,255,0.03)`,
                  border: `2px solid rgba(255,255,255,0.08)`,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{ color: step.color }}>{step.icon}</div>
                  {/* Step number badge */}
                  <div style={{
                    position: 'absolute', top: -8, right: -8,
                    width: 26, height: 26,
                    background: step.color,
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.7rem', fontWeight: 700,
                    color: '#fff',
                  }}>
                    {step.number.replace('0', '')}
                  </div>
                </div>

                <div style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '0.75rem', fontWeight: 700,
                  color: step.color,
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  marginBottom: '0.5rem',
                }}>
                  {step.number}
                </div>

                <h3 style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '1.2rem', fontWeight: 700,
                  marginBottom: '0.75rem',
                }}>
                  {step.title}
                </h3>

                <p style={{ color: 'var(--txt-2)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {step.description}
                </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA below */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <a href="#contato" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2rem' }}>
            Quero começar agora
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
