import { ArrowRight } from 'lucide-react'

const stats = [
  { value: '900+', label: 'Students Placed Abroad' },
  { value: '170+', label: 'Partner Universities' },
  { value: '95+', label: 'International Faculty' },
  { value: '60+', label: 'International Collaborations' },
]

// Lightweight dotted world-map backdrop rendered as inline SVG so the section
// is self-contained (no external map asset required).
function WorldMapBackdrop() {
  return (
    <svg
      viewBox="0 0 100 50"
      preserveAspectRatio="xMidYMid meet"
      className="absolute inset-0 h-full w-full opacity-[0.10]"
      aria-hidden="true"
    >
      <defs>
        <pattern id="dots" width="1.4" height="1.4" patternUnits="userSpaceOnUse">
          <circle cx="0.45" cy="0.45" r="0.32" fill="#1656c4" />
        </pattern>
        <clipPath id="land">
          {/* Stylised continents */}
          <path d="M12 14 q4 -4 10 -3 q6 1 8 5 q-2 6 -8 7 q-7 1 -10 -3 q-2 -4 0 -6 Z" />
          <path d="M24 26 q3 -2 6 0 q3 5 1 10 q-2 5 -5 6 q-3 -3 -3 -9 q0 -5 1 -7 Z" />
          <path d="M44 12 q6 -3 12 -1 q5 2 6 6 q-2 5 -8 6 q-7 1 -11 -3 q-2 -5 1 -8 Z" />
          <path d="M50 24 q5 -2 9 1 q3 5 1 10 q-3 5 -7 5 q-4 -4 -5 -10 q0 -4 2 -6 Z" />
          <path d="M70 14 q9 -4 18 -1 q5 3 4 8 q-3 6 -12 6 q-9 0 -13 -5 q-2 -5 3 -8 Z" />
          <path d="M78 30 q5 -2 9 0 q3 4 1 8 q-3 4 -7 3 q-4 -3 -5 -7 q0 -3 2 -4 Z" />
        </clipPath>
      </defs>
      <rect width="100" height="50" fill="url(#dots)" clipPath="url(#land)" />
    </svg>
  )
}

export default function Global() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      <WorldMapBackdrop />
      <div className="container-x relative">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-[34px]">Global Opportunities and Linkages</h2>
          <span className="mx-auto mt-3 block h-1 w-16 rounded-full bg-brand-blue" />
        </div>

        <div className="mt-12 grid items-center gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1fr_1.1fr_1fr]">
          {/* left stats */}
          <div className="flex flex-col gap-10 lg:items-end lg:text-right">
            {stats.slice(0, 2).map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>

          {/* center copy (sits over map) */}
          <div className="order-last text-center sm:col-span-2 lg:order-none lg:col-span-1">
            <h3 className="text-lg font-bold text-ink-900">Semester Abroad</h3>
            <p className="mx-auto mt-3 max-w-sm text-[14px] leading-relaxed text-ink-500">
              IEM-UEM is partnering with Semester Abroad Program (SAP), a unique initiative providing
              students an opportunity to gain international exposure and global experiences.
            </p>
            <a href="#" className="link-arrow mx-auto mt-5 w-fit">
              Learn more
              <ArrowRight size={14} />
            </a>
          </div>

          {/* right stats */}
          <div className="flex flex-col gap-10 lg:items-start lg:text-left">
            {stats.slice(2).map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="font-display text-4xl font-extrabold text-brand-blue lg:text-5xl">{value}</p>
      <p className="mt-1 text-[13.5px] font-medium text-ink-500">{label}</p>
    </div>
  )
}
