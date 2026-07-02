import { useState } from 'react'
import {
  Calendar, ArrowUpRight, Trophy, FileText, Megaphone,
  Cpu, Users, Code2, Presentation, Music,
} from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import { IMAGES } from '../../data/images'

const tabs = ['Awards & Achievements', 'Upcoming Events']

const awards = [
  {
    Icon: Trophy,
    date: 'Jan 18, 2026',
    title: 'Awarded the Prestigious IEEE AP-S Undergraduate Summer Research Scholarship (USRS) 2026',
    desc: 'IEM students recognised globally for outstanding research contributions in antennas and propagation.',
  },
  {
    Icon: Trophy,
    date: 'Jan 12, 2026',
    title: 'IEM Adined League 2026: A Celebration of Talent and Triumph',
    desc: 'Students showcased extraordinary talent across multiple competitive arenas.',
  },
  {
    Icon: Trophy,
    date: 'Jan 05, 2026',
    title: 'IEM Team Wins Smart India Hackathon 2025 Grand Finale',
    desc: 'A five-member team took home the top prize for a healthcare AI solution.',
  },
  {
    Icon: Trophy,
    date: 'Dec 28, 2025',
    title: 'Best Research Paper Award at International Conference on Computing',
    desc: 'Faculty and students honoured for pioneering work in machine learning.',
  },
]

// Upcoming events rendered as a bento grid — mixed tile sizes, some with
// imagery. `span` controls how each tile stretches across the grid.
const events = [
  {
    Icon: Cpu, date: 'Feb 12–14, 2026', tag: 'Techno-Management Fest',
    title: 'INNOVACION 2026',
    desc: "IEM's flagship Annual Techno-Management Fest — three electrifying days of hackathons, robotics, coding sprints, business challenges and tech talks that draw thousands of innovators from across the country.",
    image: IMAGES.tech,
    span: 'col-span-2 sm:row-span-2',
  },
  {
    Icon: Music, date: 'Mar 06–08, 2026', tag: 'Cultural Fest',
    title: 'IEMPACT 2026',
    desc: 'The grand Annual Cultural Fest of IEM — live concerts, dance, drama, fashion shows and star-night performances that turn the campus into a celebration of art and talent.',
    image: IMAGES.cultural,
    span: 'col-span-2 sm:row-span-2',
  },
  {
    Icon: Presentation, date: 'Feb 18, 2026', tag: 'Workshop',
    title: 'AI & Robotics Workshop',
    desc: 'Hands-on sessions with industry mentors on building intelligent systems.',
    span: 'col-span-2',
  },
  {
    Icon: Code2, date: 'Feb 25, 2026', tag: 'Hackathon',
    title: "National Hackathon 'CodeStorm'",
    desc: '36 hours of building with mentors from top tech firms.',
    span: 'col-span-2',
  },
  {
    Icon: Users, date: 'Mar 15, 2026', tag: 'Conclave',
    title: 'Alumni Meet & Industry Conclave',
    desc: 'Reconnect, network and hear from industry leaders.',
    span: 'col-span-2',
  },
]

const bulletins = [
  'Online admission for 2026-27 academic session now open',
  'Last date for IEMJEE 2026 application: March 31, 2026',
  'Important notice regarding semester examination schedule',
  'Registrations open for INNOVACION 2026 & the cultural fest IEMPACT 2026',
]

const press = [
  { title: 'Press Release: IEM ranked among top 10 private institutions', date: 'Jan 20, 2026' },
  { title: 'Press Release: New AI & Data Science centre inaugurated', date: 'Jan 10, 2026' },
  { title: 'Press Release: IEM signs MoU with global tech leaders', date: 'Dec 22, 2025' },
]

export default function News() {
  const [active, setActive] = useState(tabs[0])

  return (
    <section id="news" className="bg-surface-muted py-16 lg:py-20">
      <div className="container-x">
        <SectionHeader eyebrow="News & Media" title="Stay Informed. Stay Inspired." />

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Main feed */}
          <div>
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                    active === tab
                      ? 'bg-brand-blue text-white shadow-pill'
                      : 'bg-white text-ink-600 ring-1 ring-slate-200 hover:text-brand-blue'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {active === 'Awards & Achievements' ? (
              <div className="mt-5 space-y-4">
                {awards.map((item) => (
                  <article
                    key={item.title}
                    className="group flex gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-cardhover"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-surface-soft text-brand-blue transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 group-hover:bg-brand-blue group-hover:text-white">
                      <item.Icon size={19} />
                    </span>
                    <div className="min-w-0">
                      <p className="flex items-center gap-1.5 text-[11.5px] font-medium text-ink-400">
                        <Calendar size={12} />
                        {item.date}
                      </p>
                      <h3 className="mt-1.5 text-[14.5px] font-semibold leading-snug text-ink-900 transition-colors group-hover:text-brand-blue">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink-500">{item.desc}</p>
                    </div>
                    <ArrowUpRight size={18} className="shrink-0 text-ink-300 transition-colors group-hover:text-brand-blue" />
                  </article>
                ))}
                <a href="#" className="link-arrow">
                  View All News
                  <ArrowUpRight size={14} />
                </a>
              </div>
            ) : (
              // Bento grid — mixed sizes, imagery on the larger tiles
              <div className="mt-5 grid auto-rows-[135px] grid-cols-2 gap-3 sm:grid-cols-4">
                {events.map((e) => (
                  <article
                    key={e.title}
                    className={`group relative overflow-hidden rounded-2xl shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-cardhover ${e.span} ${
                      e.image ? 'text-white' : 'border border-slate-100 bg-white hover:border-brand-blue/30'
                    }`}
                  >
                    {e.image ? (
                      <>
                        <img
                          src={e.image}
                          alt={e.title}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-brand-navy/10" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-surface-soft to-white" />
                    )}

                    <div className="relative flex h-full flex-col p-4">
                      <div className="flex items-start justify-between">
                        <span
                          className={`grid h-9 w-9 place-items-center rounded-lg transition-transform duration-300 group-hover:scale-110 ${
                            e.image ? 'bg-white/15 text-white backdrop-blur-sm' : 'bg-surface-soft text-brand-blue'
                          }`}
                        >
                          <e.Icon size={17} />
                        </span>
                        <span
                          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                            e.image ? 'bg-white/15 text-white backdrop-blur-sm' : 'bg-brand-blue/10 text-brand-blue'
                          }`}
                        >
                          {e.tag}
                        </span>
                      </div>

                      <div className="mt-auto">
                        <p
                          className={`flex items-center gap-1.5 text-[11px] font-medium ${
                            e.image ? 'text-white/75' : 'text-ink-400'
                          }`}
                        >
                          <Calendar size={11} />
                          {e.date}
                        </p>
                        <h3
                          className={`mt-1 text-[14px] font-bold leading-snug ${
                            e.image ? 'text-white' : 'text-ink-900'
                          }`}
                        >
                          {e.title}
                        </h3>
                        {e.desc && (
                          <p className={`mt-1 text-[11.5px] leading-relaxed ${e.image ? 'text-white/75' : 'text-ink-500'}`}>
                            {e.desc}
                          </p>
                        )}
                      </div>
                    </div>

                    <ArrowUpRight
                      size={16}
                      className={`absolute right-3 top-3 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100 ${
                        e.image ? 'text-white' : 'text-brand-blue'
                      }`}
                    />
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <SidebarCard Icon={FileText} title="About Bulletin">
              <ul className="space-y-1">
                {bulletins.map((b) => (
                  <li key={b}>
                    <a
                      href="#"
                      className="group flex gap-2.5 rounded-lg px-2 py-1.5 text-[13px] leading-relaxed text-ink-600 transition-all duration-300 hover:translate-x-1 hover:bg-surface-soft hover:text-brand-blue"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue transition-transform duration-300 group-hover:scale-150" />
                      {b}
                    </a>
                  </li>
                ))}
              </ul>
            </SidebarCard>

            <SidebarCard Icon={Megaphone} title="Press Release">
              <ul className="space-y-2">
                {press.map((p) => (
                  <li key={p.title}>
                    <a href="#" className="group block rounded-lg border-l-2 border-transparent py-1 pl-3 transition-all duration-300 hover:translate-x-1 hover:border-brand-blue hover:bg-surface-soft">
                      <p className="flex items-start gap-1.5 text-[13px] font-medium leading-snug text-ink-700 transition-colors group-hover:text-brand-blue">
                        {p.title}
                        <ArrowUpRight size={14} className="mt-0.5 shrink-0 text-ink-300 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-[11px] text-ink-400">
                        <Calendar size={11} />
                        {p.date}
                      </p>
                    </a>
                  </li>
                ))}
              </ul>
              <a href="#" className="link-arrow mt-4 text-[13px]">
                View All Press Releases
                <ArrowUpRight size={13} />
              </a>
            </SidebarCard>
          </div>
        </div>
      </div>
    </section>
  )
}

function SidebarCard({ Icon, title, children }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
      <div className="mb-4 flex items-center gap-2.5 border-b border-slate-100 pb-3">
        <span className="grid h-9 w-9 place-items-center rounded-lg bg-surface-soft text-brand-blue">
          <Icon size={17} />
        </span>
        <h3 className="text-[15px] font-bold text-ink-900">{title}</h3>
      </div>
      {children}
    </div>
  )
}
