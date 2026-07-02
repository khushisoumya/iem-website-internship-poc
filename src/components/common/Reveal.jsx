import { useEffect, useRef, useState } from 'react'

// Scroll-triggered reveal wrapper. Fades + slides children into view the first
// time they enter the viewport. Pass `delay` (ms) to stagger siblings and
// `x`/`y` to control the slide-in direction.
export default function Reveal({
  children,
  as: Tag = 'div',
  className = '',
  delay = 0,
  x = 0,
  y = 28,
  duration = 700,
  once = true,
}) {
  const ref = useRef(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          if (once) io.disconnect()
        } else if (!once) {
          setShown(false)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [once])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        transition: `opacity ${duration}ms cubic-bezier(0.16,1,0.3,1), transform ${duration}ms cubic-bezier(0.16,1,0.3,1)`,
        transitionDelay: `${delay}ms`,
        opacity: shown ? 1 : 0,
        transform: shown ? 'none' : `translate3d(${x}px, ${y}px, 0)`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </Tag>
  )
}
