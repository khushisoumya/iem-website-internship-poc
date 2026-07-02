import { useEffect, useState } from 'react'
import logo from '../../assets/images/iem_logo.png'

// Modern intro loader. Shows a blinking IEM logo over a soft brand gradient with
// an animated progress bar, then fades itself out after a few seconds.
export default function Loader({ duration = 2600 }) {
  const [hidden, setHidden] = useState(false)   // starts the fade-out
  const [removed, setRemoved] = useState(false) // unmounts after the fade

  useEffect(() => {
    const fade = setTimeout(() => setHidden(true), duration)
    const gone = setTimeout(() => setRemoved(true), duration + 600)
    // Lock scroll while the loader is up.
    document.body.style.overflow = 'hidden'
    return () => {
      clearTimeout(fade)
      clearTimeout(gone)
      document.body.style.overflow = ''
    }
  }, [duration])

  useEffect(() => {
    if (hidden) document.body.style.overflow = ''
  }, [hidden])

  if (removed) return null

  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-gradient-to-br from-white via-surface-soft to-blue-50 transition-opacity duration-500 ${
        hidden ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      {/* soft ambient orbs */}
      <span className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <span className="pointer-events-none absolute -right-24 bottom-1/4 h-72 w-72 rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="relative flex flex-col items-center">
        {/* Logo perfectly centered inside a square stage; the droplet ripples
            share that stage's centre so they radiate outward from the logo. */}
        <div className="relative grid h-44 w-44 place-items-center">
          {/* concentric droplet ripples — expand + fade from the centre */}
          <span className="pointer-events-none absolute inset-0 rounded-full border border-brand-blue/30 animate-ping-ring" />
          <span className="pointer-events-none absolute inset-0 rounded-full border border-brand-blue/25 animate-ping-ring [animation-delay:600ms]" />
          <span className="pointer-events-none absolute inset-0 rounded-full border border-brand-sky/25 animate-ping-ring [animation-delay:1200ms]" />
          <span className="pointer-events-none absolute inset-0 rounded-full border border-brand-blue/20 animate-ping-ring [animation-delay:1800ms]" />
          {/* soft filled droplet that pulses right around the mark */}
          <span className="pointer-events-none absolute inset-[34%] rounded-full bg-brand-blue/10 blur-md animate-ping-ring" />

          {/* blinking logo — the still centre of the droplet */}
          <img
            src={logo}
            alt="IEM"
            className="relative h-20 w-auto animate-blink object-contain drop-shadow-[0_8px_24px_rgba(22,86,196,0.25)]"
          />
        </div>

        {/* progress bar */}
        <div className="relative mt-8 h-1 w-44 overflow-hidden rounded-full bg-brand-blue/15">
          <span className="absolute inset-y-0 left-0 w-1/4 rounded-full bg-gradient-to-r from-brand-blue to-brand-sky animate-loader-bar" />
        </div>
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-brand-blue/70">
          Institute of Engineering &amp; Management
        </p>
      </div>
    </div>
  )
}
