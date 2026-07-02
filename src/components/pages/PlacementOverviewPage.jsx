import { useEffect, useRef, useState } from 'react'
import { ChevronRight, ChevronLeft, Quote } from 'lucide-react'
import Reveal from '../common/Reveal'
import { IMAGES } from '../../data/images'

/* ────────────────────────────────────────────────────────────────────────
   Data
   ──────────────────────────────────────────────────────────────────────── */

// Vibrant segment palette — colours are assigned to recruiters by position so
// each year's donut reads as a distinct, colourful ring.
const PALETTE = [
  '#f87171', '#fb923c', '#fbbf24', '#34d399', '#22d3ee', '#38bdf8',
  '#818cf8', '#a78bfa', '#f472b6', '#2dd4bf', '#60a5fa', '#4ade80',
]

// Each admissions year has its own recruiter line-up and placement counts, so
// both the companies and the chart proportions change as you switch tabs.
const PLACEMENT_DATA = {
  2024: [
    { name: 'Infosys', value: 46 }, { name: 'TCS', value: 32 }, { name: 'Cognizant', value: 24 },
    { name: 'Capgemini', value: 18 }, { name: 'GREYB', value: 11 }, { name: 'Wipro', value: 28 },
    { name: 'EY', value: 16 }, { name: 'NRI Infotech', value: 10 }, { name: 'Abzooba', value: 8 },
    { name: 'Fusion Charts', value: 7 }, { name: 'IBM', value: 14 }, { name: 'DXC Technologies', value: 12 },
  ],
  2023: [
    { name: 'TCS', value: 41 }, { name: 'Infosys', value: 30 }, { name: 'Accenture', value: 26 },
    { name: 'Wipro', value: 22 }, { name: 'Cognizant', value: 19 }, { name: 'Capgemini', value: 15 },
    { name: 'IBM', value: 13 }, { name: 'Deloitte', value: 11 }, { name: 'PwC', value: 9 },
    { name: 'Tech Mahindra', value: 17 }, { name: 'HCL', value: 12 }, { name: 'Mindtree', value: 8 },
  ],
  2022: [
    { name: 'Wipro', value: 38 }, { name: 'Cognizant', value: 30 }, { name: 'Infosys', value: 27 },
    { name: 'Amazon', value: 12 }, { name: 'Oracle', value: 10 }, { name: 'SAP Labs', value: 9 },
    { name: 'LTI', value: 16 }, { name: 'Mphasis', value: 11 }, { name: 'Zoho', value: 7 },
    { name: 'Genpact', value: 14 }, { name: 'Hexaware', value: 8 }, { name: 'TCS', value: 25 },
  ],
  2021: [
    { name: 'TCS', value: 35 }, { name: 'Accenture', value: 28 }, { name: 'Infosys', value: 24 },
    { name: 'Capgemini', value: 18 }, { name: 'IBM', value: 15 }, { name: 'Wipro', value: 20 },
    { name: 'Cognizant', value: 22 }, { name: 'Virtusa', value: 9 }, { name: 'Nagarro', value: 8 },
    { name: 'Coforge', value: 7 }, { name: 'Birlasoft', value: 6 }, { name: 'Sapient', value: 10 },
  ],
  2020: [
    { name: 'Infosys', value: 32 }, { name: 'TCS', value: 29 }, { name: 'Cognizant', value: 22 },
    { name: 'Wipro', value: 19 }, { name: 'Tech Mahindra', value: 14 }, { name: 'HCL', value: 16 },
    { name: 'IBM', value: 11 }, { name: 'Accenture', value: 24 }, { name: 'Cisco', value: 7 },
    { name: 'Dell', value: 8 }, { name: 'Ericsson', value: 6 }, { name: 'Deloitte', value: 9 },
  ],
  2025: [
    { name: 'TCS', value: 30 }, { name: 'Wipro', value: 25 }, { name: 'Infosys', value: 23 },
    { name: 'Cognizant', value: 18 }, { name: 'Accenture', value: 16 }, { name: 'iGate', value: 8 },
    { name: 'Syntel', value: 7 }, { name: 'Reliance', value: 12 }, { name: 'L&T Infotech', value: 14 },
    { name: 'KPIT', value: 6 }, { name: 'Persistent', value: 9 }, { name: 'Mindtree', value: 10 },
  ],
  2026: [
    { name: 'Infosys', value: 26 }, { name: 'TCS', value: 24 }, { name: 'Wipro', value: 21 },
    { name: 'Cognizant', value: 17 }, { name: 'HCL', value: 12 }, { name: 'Tech Mahindra', value: 13 },
    { name: 'IBM', value: 9 }, { name: 'Accenture', value: 15 }, { name: 'Capgemini', value: 11 },
    { name: 'NIIT', value: 6 }, { name: 'Sonata', value: 5 }, { name: 'Mindtree', value: 8 },
  ],
}
const YEARS = [2026, 2025, 2024, 2023, 2022, 2021, 2020]

// Final-year examination — appeared vs passed, per programme.
const DEPARTMENTS = [
  { name: 'Bachelor of Technology in Computer Science & Engineering', appeared: 312, passed: 268 },
  { name: 'Bachelor of Technology in Information Technology', appeared: 168, passed: 151 },
  { name: 'Bachelor of Technology in Electronics & Communication Engineering', appeared: 224, passed: 206 },
  { name: 'Bachelor of Technology in Mechanical Engineering', appeared: 84, passed: 71 },
  { name: 'Bachelor of Technology in Electrical Engineering', appeared: 132, passed: 118 },
  { name: 'Bachelor of Technology in Electrical and Electronics Engineering', appeared: 62, passed: 49 },
]
const BAR_MAX = 400
const BAR_TICKS = [0, 100, 200, 300, 400]

const avatar = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=200&h=200&q=80`

const OPINIONS = [
  {
    name: 'Sumeet Chakraborty',
    role: 'Associate Consultant, Infosys Leadership Institute',
    img: avatar('photo-1519085360753-af0119f7cbe7'),
    quote: 'Your college truly is a model college for others not just across the state, but across the country as well.',
  },
  {
    name: 'Ashok Mukherjee',
    role: 'Chief Manager HR, Tata Consultancy Services',
    img: avatar('photo-1500648767791-00dcc994a43e'),
    quote: 'TCS has been proud to recruit from your Institute since its inception. These students consistently excel in our mainstream projects, and we look forward to returning for our future staffing needs.',
  },
  {
    name: 'Moumita Bhattacharya',
    role: 'Executive Resourcing, Wipro',
    img: avatar('photo-1494790108377-be9c29b29330'),
    quote: 'Yours is one of the best Institutes in terms of the quality of students that we have seen so far.',
  },
  {
    name: 'Rajarshi Sen',
    role: 'Senior Manager, Cognizant',
    img: avatar('photo-1507003211169-0a1dd7228f2d'),
    quote: 'The students from IEM come with strong fundamentals and a great attitude. They ramp up quickly and add value to our teams from very early on.',
  },
  {
    name: 'Debolina Ghosh',
    role: 'Talent Acquisition Lead, Capgemini',
    img: avatar('photo-1438761681033-6461ffad8d80'),
    quote: 'IEM has been a consistent partner in our campus hiring. The quality and readiness of the talent pool keeps us coming back year after year.',
  },
]

/* ────────────────────────────────────────────────────────────────────────
   Hooks / helpers
   ──────────────────────────────────────────────────────────────────────── */

// Fires once when the element scrolls into view.
function useInView({ threshold = 0.25 } = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])
  return [ref, inView]
}

/* ────────────────────────────────────────────────────────────────────────
   Donut chart — clean, flat 2D SVG ring. Redraws on year change & animates
   its arcs in on scroll. Hovering a segment (or its legend row) emphasises
   that slice and dims the rest.
   ──────────────────────────────────────────────────────────────────────── */

const R = 82
const SW = 32
const C = 2 * Math.PI * R
const GAP = 2.5 // px gap between segments for crisp, modern separation

function DonutChart({ year }) {
  const [wrapRef, inView] = useInView({ threshold: 0.3 })
  const [play, setPlay] = useState(false)
  const [active, setActive] = useState(null)

  // Replay the draw-on animation whenever the section enters view or the year
  // tab changes.
  useEffect(() => {
    if (!inView) return
    setPlay(false)
    const t = setTimeout(() => setPlay(true), 60)
    return () => clearTimeout(t)
  }, [inView, year])

  const data = PLACEMENT_DATA[year]
  const total = data.reduce((a, d) => a + d.value, 0)

  let acc = 0
  const segments = data.map((d, i) => {
    const arc = (d.value / total) * C
    const seg = { i, name: d.name, value: d.value, color: PALETTE[i % PALETTE.length], accArc: acc, arc }
    acc += arc
    return seg
  })

  return (
    <div ref={wrapRef} className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_240px]">
      {/* Donut */}
      <div className="relative mx-auto grid aspect-square w-full max-w-[320px] place-items-center">
        <svg viewBox="0 0 240 240" className="h-full w-full -rotate-90">
          {/* faint track ring behind the segments */}
          <circle cx="120" cy="120" r={R} fill="none" stroke="#eef2f7" strokeWidth={SW} />
          {/* flat coloured segments */}
          {segments.map((s) => (
            <circle
              key={s.i}
              cx="120"
              cy="120"
              r={R}
              fill="none"
              stroke={s.color}
              strokeWidth={active === s.i ? SW + 6 : SW}
              strokeDasharray={play ? `${Math.max(s.arc - GAP, 0.5)} ${C}` : `0 ${C}`}
              strokeDashoffset={-s.accArc}
              onMouseEnter={() => setActive(s.i)}
              onMouseLeave={() => setActive(null)}
              className="cursor-pointer"
              style={{
                transition: `stroke-dasharray 900ms cubic-bezier(0.16,1,0.3,1) ${s.i * 55}ms, stroke-width 250ms ease, opacity 250ms ease`,
                opacity: active === null || active === s.i ? 1 : 0.28,
              }}
            />
          ))}
        </svg>

        {/* center label */}
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <div key={active === null ? year : `a-${active}`} className="animate-[fade-up_0.4s_ease-out_both] text-center">
            {active === null ? (
              <>
                <p className="font-display text-3xl font-extrabold text-ink-900">{year}</p>
                <p className="mt-0.5 text-[11px] font-medium text-ink-400">{total} placed</p>
              </>
            ) : (
              <>
                <p className="max-w-[130px] font-display text-[15px] font-bold leading-tight text-ink-900">
                  {segments[active].name}
                </p>
                <p className="mt-1 text-2xl font-extrabold" style={{ color: segments[active].color }}>
                  {segments[active].value}
                </p>
                <p className="text-[11px] text-ink-400">
                  {((segments[active].value / total) * 100).toFixed(1)}%
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Legend */}
      <ul className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-1">
        {segments.map((s) => (
          <li key={s.name}>
            <button
              onMouseEnter={() => setActive(s.i)}
              onMouseLeave={() => setActive(null)}
              className={`flex w-full items-center gap-2 rounded-md px-1.5 py-1 text-left text-[12.5px] transition-all duration-200 hover:bg-surface-soft ${
                active === s.i ? 'font-semibold text-ink-900' : 'text-ink-600'
              }`}
            >
              <span
                className="h-2.5 w-2.5 shrink-0 rounded-full transition-transform duration-200"
                style={{ backgroundColor: s.color, transform: active === s.i ? 'scale(1.4)' : 'scale(1)' }}
              />
              <span className="truncate">{s.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────
   Bar chart — appeared vs passed, animated widths on scroll-in
   ──────────────────────────────────────────────────────────────────────── */

function Bar({ value, color, delay, play }) {
  const pct = (value / BAR_MAX) * 100
  return (
    <div className="relative h-4 w-full overflow-hidden rounded-r-sm bg-surface-soft">
      <div
        className="flex h-full items-center justify-end rounded-r-sm pr-1.5"
        style={{
          width: play ? `${pct}%` : '0%',
          backgroundColor: color,
          transition: `width 1100ms cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
        }}
      >
        <span
          className="text-[10px] font-semibold text-white/90 transition-opacity duration-500"
          style={{ opacity: play ? 1 : 0, transitionDelay: `${delay + 700}ms` }}
        >
          {value}
        </span>
      </div>
    </div>
  )
}

function BarChart() {
  const [wrapRef, inView] = useInView({ threshold: 0.2 })

  return (
    <div ref={wrapRef} className="overflow-x-auto">
      <div className="min-w-[640px]">
        {/* top axis */}
        <div className="mb-3 grid grid-cols-[200px_1fr] items-end sm:grid-cols-[280px_1fr]">
          <span className="text-right text-[11px] font-medium text-ink-400" />
          <div className="relative h-4">
            {BAR_TICKS.map((t) => (
              <span
                key={t}
                className="absolute -translate-x-1/2 text-[11px] font-medium text-ink-400"
                style={{ left: `${(t / BAR_MAX) * 100}%` }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* rows */}
        <div className="space-y-5">
          {DEPARTMENTS.map((d, i) => (
            <div key={d.name} className="grid grid-cols-[200px_1fr] items-center gap-x-4 sm:grid-cols-[280px_1fr]">
              <p className="text-right text-[11.5px] font-medium leading-tight text-ink-700">{d.name}</p>
              <div className="relative space-y-1.5">
                {/* vertical gridlines */}
                <div className="pointer-events-none absolute inset-0">
                  {BAR_TICKS.slice(1).map((t) => (
                    <span
                      key={t}
                      className="absolute top-0 h-full w-px bg-slate-100"
                      style={{ left: `${(t / BAR_MAX) * 100}%` }}
                    />
                  ))}
                </div>
                <Bar value={d.appeared} color="#1656c4" delay={i * 120} play={inView} />
                <Bar value={d.passed} color="#0b1f44" delay={i * 120 + 60} play={inView} />
              </div>
            </div>
          ))}
        </div>

        {/* legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[12px] text-ink-600">
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-brand-blue" />
            Number of students appeared in the final year examination
          </span>
          <span className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-sm bg-brand-navy" />
            Number of students passed in final year examination
          </span>
        </div>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────
   Industry opinion carousel — 3-up, center emphasised, auto-advancing
   ──────────────────────────────────────────────────────────────────────── */

function OpinionCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const n = OPINIONS.length

  const go = (k) => setIndex((k + n) % n)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((p) => (p + 1) % n), 5500)
    return () => clearInterval(id)
  }, [paused, n])

  const slots = [-1, 0, 1].map((o) => (index + o + n) % n)

  return (
    <div
      className="relative mx-auto max-w-4xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-stretch justify-center gap-4 px-10 sm:gap-6 sm:px-14">
        {slots.map((si, pos) => {
          const t = OPINIONS[si]
          const center = pos === 1
          return (
            <div
              key={`${si}-${pos}`}
              className={`relative w-full max-w-sm transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                center
                  ? 'z-10 scale-100 opacity-100'
                  : 'hidden scale-90 opacity-40 blur-[1px] md:block'
              }`}
            >
              {/* blue offset glow behind the active card */}
              <span
                className={`pointer-events-none absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-brand-blue to-brand-sky blur-md transition-all duration-500 ${
                  center ? 'translate-x-2 translate-y-3 opacity-90' : 'opacity-0'
                }`}
              />
              <div
                className={`relative flex h-[380px] flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-navy via-brand-navy2 to-[#0a142e] px-6 pb-7 pt-8 text-white shadow-card ${
                  center ? 'ring-1 ring-brand-blue/50' : ''
                }`}
              >
                {/* soft top glow inside the card */}
                <span className="pointer-events-none absolute -top-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-brand-blue/40 blur-2xl" />
                {/* content re-mounts on slide change to replay the fade-in */}
                <div
                  key={center ? si : `s-${si}`}
                  className={center ? 'flex h-full flex-col animate-[fade-up_0.55s_ease-out]' : 'flex h-full flex-col'}
                >
                  {/* avatar — sits in normal flow inside the card so it is never
                      clipped by the rounded, overflow-hidden container */}
                  <span className="mx-auto rounded-full bg-gradient-to-br from-brand-gold to-amber-300 p-[3px] shadow-[0_8px_20px_rgba(0,0,0,0.35)]">
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      onError={(e) => {
                        if (e.currentTarget.src !== IMAGES.testimonial) {
                          e.currentTarget.src = IMAGES.testimonial
                        }
                      }}
                      className="h-20 w-20 rounded-full object-cover ring-4 ring-brand-navy"
                    />
                  </span>
                  <p className="mt-4 text-center text-[15px] font-bold">{t.name}</p>
                  <p className="mt-1 text-center text-[10.5px] uppercase tracking-wide text-white/55">{t.role}</p>
                  <div className="mt-4 flex flex-1 flex-col items-center justify-center">
                    <Quote size={22} className="shrink-0 text-brand-gold/60" />
                    <p className="mt-2 line-clamp-6 text-center text-[13px] leading-relaxed text-white/85">
                      {t.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* arrows */}
      <button
        aria-label="Previous"
        onClick={() => go(index - 1)}
        className="absolute left-0 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-brand-blue shadow-soft transition-all duration-300 hover:scale-110 hover:bg-brand-blue hover:text-white"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        aria-label="Next"
        onClick={() => go(index + 1)}
        className="absolute right-0 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-slate-200 bg-white text-brand-blue shadow-soft transition-all duration-300 hover:scale-110 hover:bg-brand-blue hover:text-white"
      >
        <ChevronRight size={20} />
      </button>

      {/* dots */}
      <div className="mt-8 flex items-center justify-center gap-2">
        {OPINIONS.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to opinion ${i + 1}`}
            onClick={() => go(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-brand-blue' : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────
   Small centered heading matching the reference (title + short underline)
   ──────────────────────────────────────────────────────────────────────── */

function CenterHeading({ children }) {
  return (
    <div className="mx-auto mb-10 w-fit text-center">
      <h2 className="font-display text-2xl font-bold text-brand-blue sm:text-3xl">{children}</h2>
      <span className="mx-auto mt-3 block h-1 w-40 rounded-full bg-brand-blue/30">
        <span className="block h-full w-14 rounded-full bg-brand-blue" />
      </span>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────────────────── */

export default function PlacementOverviewPage() {
  const [year, setYear] = useState(2024)

  return (
    <>
      {/* ── Hero banner ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-navy">
        <img
          src={IMAGES.heroCampus}
          alt="IEM Campus"
          className="absolute inset-y-0 right-0 h-full w-2/3 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/30" />
        <div className="container-x relative py-14 sm:py-20">
          <nav className="flex items-center gap-1.5 text-[12.5px] text-white/70">
            <a href="#top" className="transition-colors hover:text-white">Home</a>
            <ChevronRight size={13} />
            <span className="text-white">Placement Overview</span>
          </nav>
          <h1 className="mt-4 font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            Placement Overview
          </h1>
          <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-white/80">
            Year after year our students are placed with the world&rsquo;s leading recruiters. Explore
            our placement records, examination outcomes and what the industry says about IEM.
          </p>
          <span className="mt-4 block h-1 w-20 rounded-full bg-brand-gold" />
        </div>
      </section>

      {/* ── Placement Records ───────────────────────────────────── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="container-x">
          <Reveal>
            <CenterHeading>Placement Records</CenterHeading>
          </Reveal>

          {/* Donut + year tabs */}
          <Reveal>
            <div className="rounded-3xl border border-slate-100 bg-surface-soft/60 p-6 shadow-soft sm:p-10">
              <DonutChart year={year} />

              <div className="mt-8 flex flex-wrap justify-center gap-2 rounded-2xl bg-white p-2 shadow-soft">
                {YEARS.map((y) => (
                  <button
                    key={y}
                    onClick={() => setYear(y)}
                    className={`rounded-xl px-5 py-2 text-[13px] font-semibold transition-all duration-300 ${
                      year === y
                        ? 'bg-brand-blue text-white shadow-pill'
                        : 'text-ink-600 hover:bg-surface-soft hover:text-brand-blue'
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Appeared vs passed bar chart */}
          <Reveal className="mt-8">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft sm:p-10">
              <BarChart />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Industry's opinion ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-surface-muted py-14 lg:py-20">
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-brand-sky/10 blur-3xl" />
        <div className="container-x relative">
          <Reveal>
            <CenterHeading>Industry&rsquo;s Opinion about IEM</CenterHeading>
          </Reveal>
          <Reveal>
            <OpinionCarousel />
          </Reveal>
        </div>
      </section>
    </>
  )
}
