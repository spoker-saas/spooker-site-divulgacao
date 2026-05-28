import { useState, useEffect } from 'react'
import logo from '../assets/logo-spooker.png'

const links = [
  { label: 'Serviços',     href: '#servicos' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Por que Spooker', href: '#por-que' },
  { label: 'Contato',      href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.4s ease',
        background: scrolled
          ? 'rgba(5,5,15,0.92)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.06)'
          : '1px solid transparent',
        padding: scrolled ? '0.85rem 0' : '1.25rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <img
            src={logo}
            alt="Spooker"
            style={{
              height: 80,
              width: 'auto',
              mixBlendMode: 'screen',
              userSelect: 'none',
            }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hide-mobile" style={{ display: 'flex', gap: '0.25rem', alignItems: 'center' }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              style={{
                color: 'var(--txt-2)', textDecoration: 'none',
                fontSize: '0.9rem', fontWeight: 500,
                padding: '0.5rem 0.9rem', borderRadius: 7,
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.target.style.color = 'var(--txt-1)'; e.target.style.background = 'rgba(255,255,255,0.06)' }}
              onMouseLeave={e => { e.target.style.color = 'var(--txt-2)'; e.target.style.background = 'transparent' }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contato" className="btn-primary" style={{ marginLeft: '0.75rem', padding: '0.6rem 1.25rem', fontSize: '0.875rem' }}>
            Falar com IA
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'transparent', border: 'none', cursor: 'pointer',
            color: 'var(--txt-1)', padding: '0.5rem',
          }}
        >
          {menuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(5,5,15,0.97)',
          backdropFilter: 'blur(16px)',
          borderTop: '1px solid var(--border)',
          padding: '1.25rem 1.5rem 1.5rem',
          animation: 'fadeIn 0.2s ease',
        }}>
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', color: 'var(--txt-2)', textDecoration: 'none',
                padding: '0.75rem 0', borderBottom: '1px solid var(--border)',
                fontSize: '1rem', fontWeight: 500,
              }}
            >
              {l.label}
            </a>
          ))}
          <a href="#contato" className="btn-primary" onClick={() => setMenuOpen(false)} style={{ marginTop: '1.25rem', width: '100%', justifyContent: 'center' }}>
            Falar com IA
          </a>
        </div>
      )}
    </header>
  )
}
