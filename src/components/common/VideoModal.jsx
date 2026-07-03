import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

/* ────────────────────────────────────────────────────────────────────────
   Full-screen YouTube popup that plays OVER the current page — it never
   redirects or opens a new tab. Closes via the X button, the backdrop, or
   Escape.

   While it is open it mutes/pauses every other <video> and <audio> element on
   the page (e.g. the hero background video and any music) so the tour's audio
   is the only thing you hear, then restores their previous state on close.
   ──────────────────────────────────────────────────────────────────────── */
export default function VideoModal({ open, videoId, title = 'Video', onClose }) {
  // Remembers the muted/paused state of page media so we can restore it.
  const restoreRef = useRef([])

  useEffect(() => {
    if (!open) return

    // 1. Escape to close + lock background scroll.
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // 2. Silence the rest of the site while the tour plays.
    const media = Array.from(document.querySelectorAll('video, audio'))
    restoreRef.current = media.map((el) => ({
      el,
      muted: el.muted,
      paused: el.paused,
    }))
    media.forEach((el) => {
      el.muted = true
      try { el.pause() } catch { /* ignore */ }
    })

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      // Restore each element to how we found it.
      restoreRef.current.forEach(({ el, muted, paused }) => {
        el.muted = muted
        if (!paused) {
          const p = el.play()
          if (p && typeof p.catch === 'function') p.catch(() => {})
        }
      })
      restoreRef.current = []
    }
  }, [open, onClose])

  if (!open) return null

  const src = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`

  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-sm animate-[fade-up_0.3s_ease-out]"
        onClick={onClose}
      />

      {/* player shell */}
      <div className="relative w-full max-w-5xl animate-[fade-up_0.4s_ease-out]">
        {/* close button */}
        <button
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-11 right-0 z-10 inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-2 text-[13px] font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20 sm:-right-2"
        >
          <X size={16} />
          Close
        </button>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black shadow-cardhover ring-1 ring-white/10">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={src}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}
