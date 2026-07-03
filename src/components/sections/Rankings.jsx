import { useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Trophy,
  Award,
  Building2,
  GraduationCap,
  Download,
} from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import Reveal from '../common/Reveal'

// Award / recognition logos. Drop the real PNGs into src/assets/images/ using
// these exact filenames and they will appear automatically.
import nirfLogo from '../../assets/images/nirf.png'
import telegraphLogo from '../../assets/images/telegraph.png'
import abpLogo from '../../assets/images/abp.png'
import starNewsLogo from '../../assets/images/star-news.png'
import nbaLogo from '../../assets/images/nba.png'
import aicteLogo from '../../assets/images/aicte.png'
import zeeLogo from '../../assets/images/zee.png'
import ugcLogo from '../../assets/images/ugc.png'

// NIRF ranking reports (src/assets/pdf) — each card links to its download.
import overallReport from '../../assets/pdf/overall.pdf'
import engineeringReport from '../../assets/pdf/engineering.pdf'
import managementReport from '../../assets/pdf/management.pdf'
import innovationReport from '../../assets/pdf/Innovation.pdf'

// Renders any ordinal suffix (1st, 2nd, 3rd, 14th …) with a raised superscript
// so ranking figures read typographically, e.g. 32ⁿᵈ.
function withOrdinalSup(text) {
  const parts = String(text).split(/(\d+)(st|nd|rd|th)\b/g)
  const out = []
  for (let i = 0; i < parts.length; i++) {
    // The split yields groups of [before, number, suffix, before, …]
    if (i > 0 && (parts[i] === 'st' || parts[i] === 'nd' || parts[i] === 'rd' || parts[i] === 'th')) {
      out.push(
        <sup key={i} className="text-[0.62em] font-semibold">
          {parts[i]}
        </sup>,
      )
    } else {
      out.push(parts[i])
    }
  }
  return out
}

const recognizedBy = [
  { src: nirfLogo, name: 'NIRF' },
  { src: nbaLogo, name: 'NBA' },
  { src: aicteLogo, name: 'AICTE' },
  { src: ugcLogo, name: 'UGC' },
  { src: telegraphLogo, name: 'The Telegraph' },
  { src: abpLogo, name: 'ABP Group' },
  { src: starNewsLogo, name: 'Star News Award' },
   { src: zeeLogo, name: 'Zee News' },
  
  
  
]

const timelineData = [
  {
    year: '2024',
    tag: 'Excellence in BBA',
    items: [
      {
        icon: Trophy,
        title: 'BBA 2nd Ranking of IEM BBA in East & Central Region',
        source: 'GHRDC',
      },
      {
        icon: Trophy,
        title: 'BBA 2nd Ranking of IEM BBA in West Bengal',
        source: 'GHRDC',
      },
      {
        icon: Trophy,
        title: 'BBA College of Eminence 7th Ranking in India',
        source: 'GHRDC',
      },
    ],
  },
  {
    year: '2025',
    tag: 'Recognized Leadership',
    items: [
      {
        icon: Award,
        title: 'IEM ranked 32 across India as Top Private B School',
        source: 'Outlook, 2024',
      },
      {
        icon: Award,
        title: 'Top private B School among Kolkata & East Zone',
        source: 'Outlook, 2024',
      },
      {
        icon: Award,
        title: 'IEM ranked 14 as Best Private University',
        source: 'Outlook, 2024',
      },
    ],
  },
  {
    year: '2026',
    tag: 'Early Achievements',
    items: [
      {
        icon: Award,
        title: 'Rated Silver A++ Business School',
        source: "Just Careers' Magazine, 2011",
      },
      {
        icon: Award,
        title: 'Champion East',
        source: 'NEN Entrepreneurship Network',
      },
      {
        icon: Trophy,
        title: '3rd amongst Government & Private Colleges in WB',
        source: 'The Telegraph, 2009',
      },
      {
        icon: Building2,
        title: 'Outstanding Engineering Institute in Eastern India',
        source: 'Star News, 2011',
      },
      {
        icon: GraduationCap,
        title: 'Best Self-financed Engineering Institute in WB',
        source: 'ABP Group, 2010',
      },
    ],
  },
]

const rankings = [
  { rank: '151–200', label: 'Overall', report: overallReport },
  { rank: '151–200', label: 'Engineering', report: engineeringReport },
  { rank: '151–300', label: 'Management', report: managementReport },
  { rank: '151–300', label: 'Innovation', report: innovationReport },
]

// Starburst "medal" points for the active timeline node — a rosette award
// shape (à la the reference award symbol) with the year in the centre.
function starburstPoints(spikes, cx, cy, outer, inner) {
  const pts = []
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outer : inner
    const a = (Math.PI / spikes) * i - Math.PI / 2
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`)
  }
  return pts.join(' ')
}

function AwardBadge({ year }) {
  return (
    <div className="relative grid h-20 w-20 origin-center animate-[fade-up_0.5s_ease-out] place-items-center drop-shadow-[0_0_28px_rgba(244,196,48,0.45)]">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <defs>
          <linearGradient id="awardGold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fde68a" />
            <stop offset="50%" stopColor="#f4c430" />
            <stop offset="100%" stopColor="#d99400" />
          </linearGradient>
          <linearGradient id="awardBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1656c4" />
            <stop offset="100%" stopColor="#0b1f44" />
          </linearGradient>
        </defs>
        {/* outer rotating rosette */}
        <g className="origin-center animate-spin-slow" style={{ transformBox: 'fill-box' }}>
          <polygon points={starburstPoints(16, 50, 50, 49, 39)} fill="url(#awardGold)" />
        </g>
        {/* static inner medallion */}
        <circle cx="50" cy="50" r="34" fill="url(#awardBlue)" stroke="#fff" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="34" fill="none" stroke="rgba(244,196,48,0.5)" strokeWidth="1" strokeDasharray="3 3" />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          className="font-display"
          fontSize="20"
          fontWeight="800"
          fill="#fff"
        >
          {year}
        </text>
      </svg>
    </div>
  )
}

export default function Rankings() {
  const [active, setActive] = useState(0)

  const next = () => active < timelineData.length - 1 && setActive(active + 1)
  const prev = () => active > 0 && setActive(active - 1)

  const progress = (active / (timelineData.length - 1)) * 100

  return (
    <section id="rankings" className="relative overflow-hidden bg-surface-muted py-20">
      

      <div className="container-x relative">
        <SectionHeader
          eyebrow="Rankings & Recognitions"
          title="A Legacy of Excellence"
          subtitle="Three decades of academic distinction, innovation, and leadership."
        />

        {/* NIRF ranking spotlight */}
        <Reveal className="mx-auto mt-12 max-w-6xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy via-brand-navy2 to-[#0a142e] p-8 text-white shadow-card sm:p-10">
            <span className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-blue/30 blur-3xl" />
            <span className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-brand-sky/20 blur-3xl" />

            <div className="relative flex flex-col items-center gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-5">
                <div className="grid h-20 w-28 shrink-0 place-items-center rounded-2xl bg-white p-3 shadow-lg">
                  <img src={nirfLogo} alt="NIRF" className="max-h-full max-w-full object-contain" />
                </div>
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-brand-gold text-yellow">
                    NIRF Ranked Institution
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold sm:text-3xl text-white">
                    Nationally Ranked Across Disciplines
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative mt-9 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4">
              {rankings.map((item, i) => (
                <Reveal
                  key={item.label}
                  delay={i * 80}
                  y={20}
                  className="shiny-border group flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-gold/40 hover:bg-white/10"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gold">
                    NIRF Band
                  </span>
                  <p className="mt-1 font-display text-[30px] font-extrabold leading-none text-white transition-colors group-hover:text-brand-gold">
                    {item.rank}
                  </p>
                  <p className="mt-2 text-[12.5px] font-medium uppercase tracking-wide text-white/60">
                    {item.label}
                  </p>
                  <a
                    href={item.report}
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="group/report relative mt-4 inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-semibold text-white/85 transition-all duration-300 hover:border-brand-gold hover:text-brand-navy hover:shadow-[0_10px_26px_rgba(244,196,48,0.4)]"
                  >
                    {/* gold fill wipes in from the left on hover */}
                    <span className="absolute inset-0 -z-0 origin-left scale-x-0 rounded-full bg-gradient-to-r from-brand-gold to-amber-300 transition-transform duration-300 ease-out group-hover/report:scale-x-100" />
                    <Download
                      size={13}
                      className="relative z-10 transition-transform duration-300 group-hover/report:-translate-y-0.5 group-hover/report:animate-bounce"
                    />
                    <span className="relative z-10">Download Report</span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Recognised by — award logo strip */}
        <Reveal className="mx-auto mt-12 max-w-5xl">
          <p className="text-center text-[12px] font-semibold uppercase tracking-[0.22em] text-ink-400">
            Recognised &amp; Awarded By
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {recognizedBy.map((logo, i) => (
              <Reveal
                key={logo.name}
                delay={i * 90}
                y={18}
                className="group flex h-28 items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-h-14 max-w-full object-contain opacity-100  transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Timeline */}
        <div className="relative mt-24">
          <div className="mb-10 flex items-center justify-between">
            <button
              onClick={prev}
              disabled={active === 0}
              className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-soft transition-all duration-300 hover:scale-110 hover:text-brand-blue disabled:opacity-40"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={next}
              disabled={active === timelineData.length - 1}
              className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-soft transition-all duration-300 hover:scale-110 hover:text-brand-blue disabled:opacity-40"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-0 top-8 h-1 w-full rounded-full bg-blue-100" />
            <div
              className="absolute left-0 top-8 h-1 rounded-full bg-brand-blue transition-all duration-700"
              style={{ width: `${progress}%` }}
            />

            <div className="relative flex justify-between">
              {timelineData.map((item, index) => (
                <button key={item.year} onClick={() => setActive(index)} className="flex flex-col items-center">
                  {active === index ? (
                    <AwardBadge year={item.year} />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white font-bold text-brand-blue shadow-soft transition-all duration-500 hover:scale-105 hover:text-brand-bluedark">
                      {item.year}
                    </div>
                  )}
                  <div className="mt-5 rounded-full bg-brand-blue px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-white">
                    {item.tag}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div key={active} className="mt-16 grid animate-fade-up gap-4 md:grid-cols-2 lg:grid-cols-3">
            {timelineData[active].items.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-2xl border border-transparent bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue/30 hover:shadow-[0_12px_40px_rgba(22,86,196,0.15)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold leading-relaxed text-ink-900">
                      {withOrdinalSup(item.title)}
                    </h3>
                    <p className="mt-2 text-xs text-ink-500">{item.source}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
