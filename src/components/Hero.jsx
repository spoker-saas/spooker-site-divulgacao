import { useState, useEffect, useRef } from 'react'

const slides = [
  {
    eyebrow: '⚡ O Futuro Chegou',
    titleLines: ['Você está', 'preparado para', 'o futuro?'],
    highlightLine: 2,
    subtitle:
      'A Inteligência Artificial está transformando mercados globalmente. Empresas que adotam IA crescem até 3× mais rápido que a concorrência — não fique para trás.',
    cta: 'Quero me preparar',
    ctaHref: '#contato',
    ctaSecondary: 'Ver serviços',
    ctaSecondaryHref: '#servicos',
    accent: '#7c3aed',
    badge: { icon: '🚀', text: '+ de 500 empresas já transformadas' },
  },
  {
    eyebrow: '🤖 Vantagem Competitiva',
    titleLines: ['Já utiliza IA', 'na sua', 'empresa?'],
    highlightLine: 0,
    subtitle:
      'Enquanto você lê isso, seus concorrentes estão automatizando atendimento, reduzindo custos e escalando com chatbots e IA. Quando você começa?',
    cta: 'Começar agora',
    ctaHref: '#contato',
    ctaSecondary: 'Como funciona',
    ctaSecondaryHref: '#como-funciona',
    accent: '#06b6d4',
    badge: { icon: '📊', text: 'Redução de até 70% nos custos de atendimento' },
  },
  {
    eyebrow: '🌐 Spooker Intelligence',
    titleLines: ['Automatize.', 'Escale.', 'Conquiste.'],
    highlightLine: 2,
    subtitle:
      'Chatbots inteligentes, automações no WhatsApp, machine learning e consultoria de TI estratégica. Uma parceria completa para levar seu negócio ao próximo nível.',
    cta: 'Falar com especialista',
    ctaHref: '#contato',
    ctaSecondary: 'Nossos serviços',
    ctaSecondaryHref: '#servicos',
    accent: '#10b981',
    badge: { icon: '⭐', text: '98% de satisfação dos clientes' },
  },
]

// Inline SVG icons
const ChevronLeft = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M15 18l-6-6 6-6" />
  </svg>
)
const ChevronRight = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M9 18l6-6-6-6" />
  </svg>
)
const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)
const ChevronDown = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M6 9l6 6 6-6" />
  </svg>
)

export default function Hero() {
  const [active, setActive] = useState(0)
  const [key, setKey] = useState(0)
  const [progress, setProgress] = useState(0)
  const intervalRef = useRef(null)
  const progressRef = useRef(null)

  const SLIDE_DURATION = 6000

  const goTo = (idx) => {
    setActive(idx)
    setKey(k => k + 1)
    setProgress(0)
  }

  const next = () => goTo((active + 1) % slides.length)
  const prev = () => goTo((active - 1 + slides.length) % slides.length)

  // Autoplay
  useEffect(() => {
    intervalRef.current = setInterval(next, SLIDE_DURATION)
    return () => clearInterval(intervalRef.current)
  }, [active])

  // Progress bar animation
  useEffect(() => {
    setProgress(0)
    const start = Date.now()
    progressRef.current = setInterval(() => {
      const elapsed = Date.now() - start
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100))
    }, 50)
    return () => clearInterval(progressRef.current)
  }, [key])

  const slide = slides[active]

  return (
    <section
      id="inicio"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--bg-deep)',
      }}
    >
      {/* ── Animated background ── */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        {/* Grid */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(124,58,237,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(124,58,237,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridDrift 18s linear infinite',
        }} />
        {/* Radial base */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `
            radial-gradient(ellipse 70% 70% at 70% 30%, rgba(124,58,237,0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 60% at 20% 80%, rgba(6,182,212,0.08) 0%, transparent 60%)
          `,
        }} />
        {/* Floating orbs */}
        <div className="animate-float" style={{
          position: 'absolute', width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)',
          top: -120, right: -80,
        }} />
        <div className="animate-float-slow" style={{
          position: 'absolute', width: 350, height: 350, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
          bottom: -60, left: -80,
        }} />
        <div className="animate-float" style={{
          animationDelay: '3s',
          position: 'absolute', width: 220, height: 220, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)',
          top: '40%', right: '15%',
        }} />

        {/* Decorative rotating ring */}
        <div className="animate-spin-slow hide-mobile" style={{
          position: 'absolute', width: 480, height: 480,
          right: '6%', top: '50%', transform: 'translateY(-50%)',
          border: '1px solid rgba(124,58,237,0.1)',
          borderRadius: '50%',
        }} />
        <div className="animate-spin-slow hide-mobile" style={{
          animationDirection: 'reverse', animationDuration: '20s',
          position: 'absolute', width: 320, height: 320,
          right: 'calc(6% + 80px)', top: '50%', transform: 'translateY(-50%)',
          border: '1px dashed rgba(6,182,212,0.08)',
          borderRadius: '50%',
        }} />
      </div>

      {/* ── Progress bar ── */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: 3, background: 'rgba(255,255,255,0.06)', zIndex: 10,
      }}>
        <div style={{
          height: '100%',
          width: `${progress}%`,
          background: `linear-gradient(90deg, ${slide.accent}, var(--cyan-l))`,
          transition: 'width 0.05s linear',
          boxShadow: `0 0 10px ${slide.accent}`,
        }} />
      </div>

      {/* ── Slide content ── */}
      <div className="container" style={{ position: 'relative', zIndex: 5, paddingTop: '5rem', paddingBottom: '5rem' }}>
        <div
          key={key}
          className="slide-enter"
          style={{ maxWidth: 680 }}
        >
          {/* Badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 100, padding: '0.4rem 1rem',
            fontSize: '0.8rem', color: 'var(--txt-2)',
            marginBottom: '1.25rem',
            animation: 'fadeIn 0.5s ease 0.1s both',
          }}>
            <span>{slide.badge.icon}</span>
            <span>{slide.badge.text}</span>
          </div>

          {/* Eyebrow */}
          <div className="eyebrow" style={{ animation: 'fadeUp 0.5s ease 0.15s both' }}>
            {slide.eyebrow}
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: 'clamp(2.6rem, 6vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '1.5rem',
              animation: 'fadeUp 0.55s ease 0.2s both',
            }}
          >
            {slide.titleLines.map((line, i) =>
              i === slide.highlightLine ? (
                <span key={i} className="gradient-text" style={{ display: 'block' }}>{line}</span>
              ) : (
                <span key={i} style={{ display: 'block' }}>{line}</span>
              )
            )}
          </h1>

          {/* Subtitle */}
          <p style={{
            color: 'var(--txt-2)', fontSize: '1.1rem', lineHeight: 1.75,
            marginBottom: '2.25rem', maxWidth: 560,
            animation: 'fadeUp 0.55s ease 0.28s both',
          }}>
            {slide.subtitle}
          </p>

          {/* CTAs */}
          <div style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap',
            animation: 'fadeUp 0.55s ease 0.36s both',
          }}>
            <a href={slide.ctaHref} className="btn-primary">
              {slide.cta}
              <ArrowRight />
            </a>
            <a href={slide.ctaSecondaryHref} className="btn-secondary">
              {slide.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      {/* ── Slide nav dots + arrows ── */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: 0, right: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem',
        zIndex: 10,
      }}>
        <button onClick={prev} style={{
          background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border)',
          borderRadius: 8, width: 38, height: 38,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--txt-2)', cursor: 'pointer', transition: 'all 0.2s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--txt-2)' }}
        >
          <ChevronLeft />
        </button>

        <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                background: i === active ? slide.accent : 'rgba(255,255,255,0.2)',
                border: 'none', borderRadius: 100, cursor: 'pointer',
                width: i === active ? 28 : 8,
                height: 8,
                transition: 'all 0.4s ease',
                boxShadow: i === active ? `0 0 10px ${slide.accent}` : 'none',
              }}
            />
          ))}
        </div>

        <button onClick={next} style={{
          background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border)',
          borderRadius: 8, width: 38, height: 38,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'var(--txt-2)', cursor: 'pointer', transition: 'all 0.2s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'var(--txt-2)' }}
        >
          <ChevronRight />
        </button>
      </div>

      {/* ── Scroll hint ── */}
      <div className="hide-mobile" style={{
        position: 'absolute', bottom: '2.2rem', right: '2rem',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.35rem',
        color: 'var(--txt-3)', fontSize: '0.7rem', letterSpacing: '0.08em',
        textTransform: 'uppercase',
        animation: 'float 2.5s ease-in-out infinite',
      }}>
        <span>Scroll</span>
        <ChevronDown />
      </div>
    </section>
  )
}
