import {
  Play,
  ArrowRight,
  Users,
  Building2,
  TrendingUp,
  Award,
  Sparkles,
  ChevronDown,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import VideoModal from '../common/VideoModal'
import heroImage from '../../assets/images/hero-img.png'
import nirfLogo from '../../assets/images/nirf.png'
import aicteLogo from '../../assets/images/aicte.png'
import nbaLogo from '../../assets/images/nba.png'

// Campus-tour video shown in the pop-out player. Swap this one YouTube ID for
// a different campus-tour video and nothing else needs to change.
// (https://youtu.be/udkQ5gD7m6s)
const CAMPUS_TOUR_VIDEO_ID = 'udkQ5gD7m6s'

// Minimalist accreditation / ranking badges shown in the hero. Logos sit in
// clean frosted pills with a one-line stat so they read as credentials, not
// clutter.
const ACCREDITATIONS = [
  { name: 'NIRF', stat: 'Ranked', src: nirfLogo },
  { name: 'AICTE', stat: 'Approved', src: aicteLogo },
  { name: 'NBA', stat: 'Accredited', src: nbaLogo },
]

// Optional background video. Drop `hero-video.mp4` into src/assets/images/ and
// it is picked up automatically. Using import.meta.glob keeps the build green
// even when the file isn't present yet (returns an empty object → undefined).
const videoModules = import.meta.glob('../../assets/images/hero-video.mp4', {
  eager: true,
  query: '?url',
  import: 'default',
})
const heroVideo = Object.values(videoModules)[0]

const stats = [
  {
    Icon: Users,
    value: 12000,
    suffix: '+',
    label: 'Students',
  },
  {
    Icon: Building2,
    value: 500,
    suffix: '+',
    label: 'Recruiters',
  },
  {
    Icon: TrendingUp,
    value: 95,
    suffix: '%',
    label: 'Placement Rate',
  },
  {
    Icon: Award,
    value: 30,
    suffix: '+',
    label: 'Years of Excellence',
  },
]

function Counter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment

      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [end, duration])

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  )
}

// Background video that fades in over the poster image once it can play, and
// stays hidden if the source fails to load.
function HeroVideo({ src }) {
  const [ready, setReady] = useState(false)
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster={heroImage}
      onCanPlay={() => setReady(true)}
      onError={() => setReady(false)}
      className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
        ready ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}

export default function Hero() {
  // Scroll offset drives the parallax layers.
  const [offset, setOffset] = useState(0)
  const [tourOpen, setTourOpen] = useState(false)
  const rafRef = useRef(0)

  useEffect(() => {
    const onScroll = () => {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(() => setOffset(window.scrollY))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section id="top" className="relative">
      {/* Full-screen hero banner */}
      <div className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-brand-navy">
        {/* Parallax background layer — sits taller than the frame so it can
            drift without exposing edges */}
        <div
          className="absolute -inset-x-0 -top-[15%] h-[130%] will-change-transform"
          style={{ transform: `translate3d(0, ${offset * 0.28}px, 0)` }}
        >
          {/* Base image (always present) with a slow ken-burns zoom */}
          <img
            src={heroImage}
            alt="IEM campus building"
            className="absolute inset-0 h-full w-full origin-center animate-zoom-slow object-cover"
            fetchPriority="high"
          />
          {/* Optional background video, revealed only once it can play */}
          {heroVideo && <HeroVideo src={heroVideo} />}
        </div>

        {/* Gradient + depth overlays */}
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/10 to-transparent" />

        {/* Animated colour mesh — slowly shifting radial gradients for a modern,
            living backdrop */}
        <div
          className="pointer-events-none absolute inset-0 animate-mesh-move opacity-60 mix-blend-screen"
          style={{
            backgroundImage:
              'radial-gradient(closest-side at 20% 30%, rgba(22,86,196,0.55), transparent), radial-gradient(closest-side at 80% 70%, rgba(59,130,246,0.45), transparent)',
            backgroundSize: '120% 120%, 120% 120%',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Floating decorative orbs (parallax at a different rate) */}
        <div
          className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-brand-blue/25 blur-3xl"
          style={{ transform: `translate3d(0, ${offset * -0.15}px, 0)` }}
        />
        <div
          className="pointer-events-none absolute -left-20 bottom-10 h-72 w-72 rounded-full bg-brand-sky/20 blur-3xl"
          style={{ transform: `translate3d(0, ${offset * 0.12}px, 0)` }}
        />

        {/* Foreground content — subtle parallax rise + fade on scroll */}
        <div
          className="container-x relative z-10 pb-40 pt-16 will-change-transform sm:pb-44"
          style={{
            transform: `translate3d(0, ${offset * -0.12}px, 0)`,
            opacity: Math.max(0, 1 - offset / 620),
          }}
        >
          <div className="max-w-2xl">
            <span className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
             
              Admissions Open · Session 2026
            </span>

            <h1 className="mt-6 animate-fade-up font-display text-[38px] font-extrabold leading-[1.05] text-white [animation-delay:80ms] xs:text-5xl sm:text-6xl lg:text-[92px]">
              IEMJEE 2026
              <span className="mt-2 block bg-gradient-to-r from-brand-gold via-amber-300 to-brand-gold bg-clip-text text-[26px] text-transparent lg:text-[42px]">
                Shape Your Future With Us
              </span>
            </h1>

            <p className="mt-6 max-w-lg animate-fade-up text-[15px] leading-relaxed text-white/85 [animation-delay:160ms] sm:text-base">
              Begin your journey at one of India's leading institutions for
              innovation and excellence — where ambition meets opportunity.
            </p>

            <div className="mt-9 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:240ms]">
              <a
                href="https://exam.iem.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group relative inline-flex items-center gap-2 overflow-hidden
                  rounded-xl bg-brand-blue px-7 py-3.5
                  text-sm font-semibold text-white
                  shadow-pill transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:scale-[1.03]
                  hover:shadow-[0_16px_40px_rgba(22,86,196,0.45)]
                  active:scale-95
                "
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-brand-bluedark transition-transform duration-500 group-hover:scale-x-100" />
                <span className="relative z-10">Register Now</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110"
                />
              </a>

              <button
                type="button"
                onClick={() => setTourOpen(true)}
                aria-label="Play campus tour video"
                className="
                  group relative inline-flex h-[52px] items-center overflow-hidden
                  rounded-xl border border-white/20 bg-white/10 px-6 text-white
                  backdrop-blur-md transition-all duration-300
                  hover:-translate-y-1 hover:border-white/40 hover:bg-white/15
                  hover:shadow-[0_12px_30px_rgba(255,255,255,0.08)]
                "
              >
                <span className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-blue group-hover:shadow-[0_0_20px_rgba(22,86,196,0.45)]">
                  <Play size={15} className="fill-white transition-all duration-300 group-hover:scale-110" />
                </span>
                <span className="relative h-5 overflow-hidden">
                  <span className="block transition-all duration-300 group-hover:-translate-y-5">
                    Take Campus Tour
                  </span>
                  <span className="absolute left-0 top-5 whitespace-nowrap text-brand-gold transition-all duration-300 group-hover:top-0">
                    Play Tour
                  </span>
                </span>
              </button>
            </div>

            {/* Accreditation & ranking strip — a clean credential row separated
                by hairline dividers rather than bordered cards */}
            <div className="mt-11 animate-fade-up [animation-delay:320ms]">
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-brand-gold">
                Accredited &amp; Ranked By
              </span>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-5">
                {ACCREDITATIONS.map((a, i) => (
                  <div
                    key={a.name}
                    className={`group flex items-center gap-3 ${
                      i > 0 ? 'sm:border-l sm:border-white/15 sm:pl-6' : ''
                    }`}
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white p-1.5 shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={a.src}
                        alt={a.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="text-[14px] font-bold tracking-wide text-white">{a.name}</span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-white/40">
                        {a.stat}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Overlapping Stats Bar */}
      <div className="container-x relative z-20 -mt-20 sm:-mt-16">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-100 shadow-card lg:grid-cols-4">
          {stats.map(({ Icon, value, suffix, label }) => (
            <div
              key={label}
              className="group flex items-center gap-3.5 bg-white px-5 py-5 transition-all duration-300 hover:bg-surface-soft hover:shadow-cardhover sm:px-6 sm:py-6"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-surface-soft text-brand-blue transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white">
                <Icon size={20} />
              </span>

              <div>
                <p className="font-display text-xl font-bold text-brand-blue sm:text-2xl">
                  <Counter end={value} suffix={suffix} duration={2500} />
                </p>
                <p className="text-[12.5px] text-ink-500">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Campus-tour pop-out player — plays over the page, mutes site audio */}
      <VideoModal
        open={tourOpen}
        videoId={CAMPUS_TOUR_VIDEO_ID}
        title="IEM Campus Tour"
        onClose={() => setTourOpen(false)}
      />
    </section>
  )
}
