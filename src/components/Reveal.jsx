import { useEffect, useRef, useState } from 'react'

/**
 * Reveal — wraps children with a scroll-triggered fade+slide animation.
 * Props:
 *   delay     — ms delay before the transition starts (default 0)
 *   direction — 'up' | 'down' | 'left' | 'right' (default 'up')
 *   distance  — px to travel (default 36)
 *   duration  — ms (default 700)
 *   threshold — 0-1 visibility fraction to trigger (default 0.12)
 */
export default function Reveal({
  children,
  delay = 0,
  direction = 'up',
  distance = 36,
  duration = 700,
  threshold = 0.12,
  style = {},
  ...rest
}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  const vectors = {
    up:    `translateY(${distance}px)`,
    down:  `translateY(-${distance}px)`,
    left:  `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : vectors[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        willChange: 'opacity, transform',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
