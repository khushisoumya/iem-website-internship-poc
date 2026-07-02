import { Building, Network, BookOpen, Users } from 'lucide-react'
import { IMAGES } from '../../data/images'
import Reveal from '../common/Reveal'

const items = [
  { Icon: Building, value: '3', label: 'Colleges' },
  { Icon: Network, value: '111+', label: 'Departments' },
  { Icon: BookOpen, value: '300+', label: 'Programs' },
  { Icon: Users, value: '3200+', label: 'Academicians' },
]

export default function StatsBand() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-24">
      {/* Background image — swap IMAGES.heroCampus for a local asset if desired */}
      <img
        src={IMAGES.heroCampus}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Layered overlays keep text legible over any photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/95 via-brand-navy2/90 to-[#0a142e]/95" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-blue/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-brand-sky/15 blur-3xl" />

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold backdrop-blur-sm">
            The IEM Advantage
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Learning for Career Excellence
          </h2>
          <p className="mt-4 text-[14.5px] leading-relaxed text-white/70">
            A thriving academic ecosystem built to turn curiosity into capability
            and students into industry-ready leaders.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {items.map(({ Icon, value, label }, i) => (
            <Reveal key={label} delay={i * 100} y={26}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-brand-gold/40 hover:bg-white/10">
                <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand-blue/20 transition-transform duration-500 group-hover:scale-150" />
                <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-white/10 text-brand-gold transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-navy">
                  <Icon size={24} />
                </span>
                <p className="relative mt-5 font-display text-4xl font-extrabold text-white sm:text-[42px]">
                  {value}
                </p>
                <p className="relative mt-1 text-[13.5px] font-medium tracking-wide text-white/70">
                  {label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
