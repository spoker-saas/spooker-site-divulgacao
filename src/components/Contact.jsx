import { useState } from 'react'
import Reveal from './Reveal'

const services = [
  'IA & Machine Learning',
  'Chatbot Inteligente',
  'Automação WhatsApp',
  'Consultoria de TI',
  'Outro',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Olá! Vim pelo site da Spooker.\n\nNome: ${form.name}\nE-mail: ${form.email}\nTelefone: ${form.phone}\nServiço: ${form.service}\nMensagem: ${form.message}`
    )
    window.open(`https://wa.me/5500000000000?text=${msg}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid var(--border)',
    borderRadius: 8,
    padding: '0.85rem 1rem',
    color: 'var(--txt-1)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    fontFamily: 'Inter, sans-serif',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '0.82rem',
    fontWeight: 600,
    color: 'var(--txt-2)',
    marginBottom: '0.4rem',
    letterSpacing: '0.03em',
  }

  return (
    <section id="contato" className="section-pad">
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Left — info */}
          <Reveal direction="right" duration={800}>
            <div>
            <div className="eyebrow">📩 Fale Conosco</div>
            <h2 className="section-title font-display" style={{ textAlign: 'left' }}>
              Vamos conversar<br />
              <span className="gradient-text">sobre seu negócio</span>
            </h2>
            <div className="divider" style={{ margin: '0.75rem 0 1.5rem' }} />
            <p style={{ color: 'var(--txt-2)', lineHeight: 1.8, marginBottom: '2rem' }}>
              Preencha o formulário ou entre em contato direto via WhatsApp. Nossa equipe responde em até 2 horas durante o horário comercial.
            </p>

            {/* Contact cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  ),
                  color: '#25d366',
                  label: 'WhatsApp',
                  value: '+55 (00) 00000-0000',
                  href: 'https://wa.me/5500000000000',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  color: '#7c3aed',
                  label: 'E-mail',
                  value: 'contato@spooker.com.br',
                  href: 'mailto:contato@spooker.com.br',
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  color: '#06b6d4',
                  label: 'Horário',
                  value: 'Seg – Sex, 8h às 18h',
                  href: null,
                },
              ].map(c => (
                <div key={c.label} style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.25rem',
                  background: 'var(--bg-card)', border: '1px solid var(--border)',
                  borderRadius: 12,
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                    background: `rgba(255,255,255,0.05)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: c.color,
                  }}>
                    {c.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--txt-3)', marginBottom: '0.15rem' }}>{c.label}</div>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--txt-1)', fontSize: '0.95rem', fontWeight: 500, textDecoration: 'none' }}>
                        {c.value}
                      </a>
                    ) : (
                      <span style={{ color: 'var(--txt-1)', fontSize: '0.95rem', fontWeight: 500 }}>{c.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </Reveal>

          {/* Right — form */}
          <Reveal direction="left" duration={800} delay={120}>
            <div className="glass-card" style={{ padding: '2rem' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                  Mensagem enviada!
                </h3>
                <p style={{ color: 'var(--txt-2)' }}>
                  Seu contato foi aberto no WhatsApp. Nossa equipe vai responder em breve!
                </p>
                <button onClick={() => setSent(false)} className="btn-secondary" style={{ marginTop: '1.5rem' }}>
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem' }}>
                  Solicitar diagnóstico grátis
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                  <div>
                    <label htmlFor="contact-name" style={labelStyle}>Nome *</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={form.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" style={labelStyle}>WhatsApp *</label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={form.phone}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="contact-email" style={labelStyle}>E-mail</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="contact-service" style={labelStyle}>Serviço de interesse *</label>
                  <select
                    id="contact-service"
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  >
                    <option value="" disabled style={{ background: '#0a0a1e' }}>Selecione um serviço</option>
                    {services.map(s => (
                      <option key={s} value={s} style={{ background: '#0a0a1e' }}>{s}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label htmlFor="contact-message" style={labelStyle}>Mensagem</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Conte um pouco sobre seu negócio e o que você precisa..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }}
                    onFocus={e => e.target.style.borderColor = 'rgba(124,58,237,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Enviar pelo WhatsApp
                </button>

                <p style={{ textAlign: 'center', color: 'var(--txt-3)', fontSize: '0.75rem', marginTop: '0.75rem' }}>
                  Ao enviar, você será redirecionado para o WhatsApp da Spooker.
                </p>
              </form>
            )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
