import { useEffect, useMemo, useRef, useState } from 'react'
import { Search, ChevronDown, Menu, X, Volume2, VolumeX } from 'lucide-react'
import Logo from '../common/Logo'
import MegaMenu from './MegaMenu'
import { menu } from '../../data/menu'
import voiceAudio from '../../assets/voice.mp3'
import musicAudio from '../../assets/music.mp3'


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [openIdx, setOpenIdx] = useState(null) // mobile accordion
  const [searchOpen, setSearchOpen] = useState(false)
  const [q, setQ] = useState('')
  const [activeId, setActiveId] = useState('top') // scroll-spy: currently visible section
  const [hash, setHash] = useState(() => (typeof window !== 'undefined' ? window.location.hash : ''))
  const [muted, setMuted] = useState(false) // background audio on by default
  const searchRef = useRef(null)
  const audioRef = useRef(null)

  // Background audio: on by default. Browsers block autoplay with sound until
  // the user interacts with the page, so we attempt to play immediately and,
  // if that's rejected, start on the first user gesture. The intro voice plays
  // once (no loop); when it ends we switch to the background music on loop.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.loop = false // voice must not loop
    audio.volume = 0.5

    let switchedToMusic = false
    const onEnded = () => {
      if (switchedToMusic) return
      switchedToMusic = true
      audio.src = musicAudio
      audio.loop = true // music loops indefinitely
      audio.currentTime = 0
      if (!audio.muted) audio.play().catch(() => {})
    }
    audio.addEventListener('ended', onEnded)

    const start = () => {
      if (audioRef.current && !audioRef.current.muted) {
        audioRef.current.play().catch(() => {})
      }
    }

    start()

    const onGesture = () => {
      start()
      window.removeEventListener('pointerdown', onGesture)
      window.removeEventListener('keydown', onGesture)
    }
    window.addEventListener('pointerdown', onGesture)
    window.addEventListener('keydown', onGesture)

    return () => {
      audio.removeEventListener('ended', onEnded)
      window.removeEventListener('pointerdown', onGesture)
      window.removeEventListener('keydown', onGesture)
    }
  }, [])

  const toggleMute = () => {
    const audio = audioRef.current
    setMuted((prev) => {
      const next = !prev
      if (audio) {
        audio.muted = next
        if (!next) audio.play().catch(() => {})
      }
      return next
    })
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track the hash so we can highlight the parent nav item on routed subpages
  // (e.g. #/placement-overview → "Placements", #/about-us → "About IEM").
  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  const isRoutedPage = hash.startsWith('#/')

  // Which top-level menu item owns the current routed sub-link.
  const activeParentLabel = useMemo(() => {
    if (!isRoutedPage) return null
    for (const item of menu) {
      if (item.href === hash) return item.label
      if (item.mega?.columns.some((col) => col.links.some((l) => l.href === hash))) {
        return item.label
      }
    }
    return null
  }, [hash, isRoutedPage])

  // Scroll-spy: highlight the nav item whose section is currently in view.
  useEffect(() => {
    const ids = menu
      .map((m) => m.href)
      .filter((h) => h?.startsWith('#') && h.length > 1)
      .map((h) => h.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)
    if (!sections.length) return

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveId(visible.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  // Broadcast the search term to the Programs section and jump to it.
  const runSearch = (term) => {
    window.dispatchEvent(new CustomEvent('iem:search', { detail: term.trim() }))
    document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })
  }

  const onSearchClick = () => {
    if (!searchOpen) {
      setSearchOpen(true)
      requestAnimationFrame(() => searchRef.current?.focus())
    } else if (q.trim()) {
      runSearch(q)
      setSearchOpen(false)
    } else {
      setSearchOpen(false)
    }
  }

  const onSearchKey = (e) => {
    if (e.key === 'Enter' && q.trim()) {
      runSearch(q)
      setSearchOpen(false)
    } else if (e.key === 'Escape') {
      setSearchOpen(false)
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-soft' : 'shadow-[0_1px_0_rgba(15,23,42,0.06)]'
      }`}
    >
      {/* Background audio — intro voice plays once on load, then loops the
          background music; toggled via the navbar speaker icon */}
      <audio ref={audioRef} src={voiceAudio} preload="auto" />

      <div className="container-x flex h-20 items-center justify-between gap-4">
        <Logo className="shrink-0" />

        {/* Desktop nav — centered in its own flex column so links sit centered
            without ever overlapping the logo or the action buttons. */}
        <nav className="hidden h-full flex-1 items-center justify-center gap-x-1 xl:flex">
          {menu.map((item) => {
            const isActive = isRoutedPage
              ? item.label === activeParentLabel
              : item.href?.length > 1 && item.href.slice(1) === activeId
            return (
              <div key={item.label} className="group relative flex h-full items-center">
                <a
                  href={item.href}
                  className={`relative flex shrink-0 items-center gap-0.5 whitespace-nowrap rounded-lg px-3 py-2 text-[13px] font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-brand-blue'
                      : 'text-ink-700 hover:text-brand-blue'
                  }`}
                >
                  {item.label}
                  {item.mega && (
                    <ChevronDown
                      size={13}
                      className={`mt-0.5 transition-all duration-200 group-hover:rotate-180 group-hover:text-brand-blue ${
                        isActive ? 'text-brand-blue' : 'text-ink-400'
                      }`}
                    />
                  )}
                  {/* Animated underline — fills on hover, stays lit when active */}
                  <span
                    className={`pointer-events-none absolute inset-x-2.5 -bottom-0.5 h-0.5 origin-center rounded-full bg-brand-blue transition-transform duration-300 ease-out ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
                {item.mega && <MegaMenu mega={item.mega} label={item.label} />}
              </div>
            )
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2.5">
          {/* Working search — expands inline, submits to the Programs section */}
          <div className="flex items-center">
            <div
              className={`flex items-center overflow-hidden rounded-full bg-surface-muted transition-all duration-300 ${
                searchOpen
                  ? 'mr-1 w-40 px-3.5 py-2 ring-1 ring-slate-200 sm:w-56'
                  : 'w-0'
              }`}
            >
              <input
                ref={searchRef}
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={onSearchKey}
                placeholder="Search programs…"
                className="w-full bg-transparent text-[13px] text-ink-700 outline-none placeholder:text-ink-400"
              />
            </div>
            <button
              aria-label="Search"
              onClick={onSearchClick}
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-ink-700 transition-colors hover:bg-surface-muted hover:text-brand-blue"
            >
              <Search size={18} />
            </button>
          </div>

          {/* Audio mute / unmute toggle */}
          <button
            aria-label={muted ? 'Unmute audio' : 'Mute audio'}
            aria-pressed={muted}
            onClick={toggleMute}
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-ink-700 transition-colors hover:bg-surface-muted hover:text-brand-blue"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
          <a
  href="https://exam.iem.edu.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group relative hidden overflow-hidden rounded-xl
    bg-gradient-to-r from-brand-blue via-brand-sky to-brand-blue
    px-5 py-3 text-sm font-semibold text-white
    shadow-pill
    transition-all duration-500 ease-out
    hover:-translate-y-1.5
    hover:scale-105
    hover:rotate-[1deg]
    hover:shadow-[0_20px_50px_rgba(22,86,196,0.45)]
    active:translate-y-0
    active:scale-95
    sm:inline-flex
  "
>
  {/* Animated Border Glow */}
  <span className="
    absolute inset-0 rounded-xl
    bg-gradient-to-r from-brand-sky via-white/40 to-brand-sky
    opacity-0 blur-xl
    transition-all duration-500
    group-hover:opacity-70
  " />

  {/* Moving Shine */}
  <span className="absolute inset-0 overflow-hidden rounded-xl">
    <span
      className="
        absolute top-0 left-[-150%]
        h-full w-20
        rotate-12
        bg-white/30
        blur-md
        transition-all duration-1000
        group-hover:left-[150%]
      "
    />
  </span>

  {/* Ripple Pulse */}
  <span className="
    absolute inset-0 rounded-xl
    border border-white/20
    scale-100 opacity-0
    transition-all duration-700
    group-hover:scale-110
    group-hover:opacity-100
  " />

  {/* Background Animation */}
  <span className="
    absolute inset-0
    bg-gradient-to-r
    from-brand-blue
    via-brand-sky
    to-brand-blue
    bg-[length:200%_200%]
    transition-all duration-700
    group-hover:animate-pulse
  " />

  {/* Content */}
  <span className="relative z-10 flex items-center gap-2">
    Admissions Open

    <svg
      className="
        transition-all duration-300
        group-hover:translate-x-2
        group-hover:scale-125
      "
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  </span>
</a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-md text-ink-900 xl:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-100 bg-white xl:hidden">
          <nav className="container-x flex flex-col py-2">
            {menu.map((item, i) =>
              item.mega ? (
                <div key={item.label} className="border-b border-slate-50">
                  <button
                    onClick={() => setOpenIdx(openIdx === i ? null : i)}
                    className="flex w-full items-center justify-between py-3 text-sm font-medium text-ink-700"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`text-ink-400 transition-transform ${openIdx === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openIdx === i && (
                    <div className="pb-3">
                      {item.mega.columns.map((col) => (
                        <div key={col.title} className="mb-2">
                          <p className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-ink-400">
                            {col.title}
                          </p>
                          {col.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              {...(link.external
                                ? { target: '_blank', rel: 'noopener noreferrer' }
                                : {})}
                              onClick={() => setOpen(false)}
                              className="block rounded-md px-3 py-2 text-[13px] text-ink-600 hover:bg-surface-soft hover:text-brand-blue"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      ))}
                      {item.mega.featured && (
                        <a
                          href={item.mega.featured.href}
                          onClick={() => setOpen(false)}
                          className="mx-3 mt-1 block rounded-lg bg-blue-cta px-4 py-3 text-[13px] font-semibold text-white"
                        >
                          {item.mega.featured.title}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-slate-50 py-3 text-sm font-medium text-ink-700"
                >
                  {item.label}
                </a>
              ),
            )}
            <a href="https://exam.iem.edu.in/" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full whitespace-nowrap sm:hidden">
              Admissions Open
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
