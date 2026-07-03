import { useMemo, useState } from 'react'
import { ArrowUpRight, Calendar, ChevronRight, Lightbulb, Search, X } from 'lucide-react'
import PageHeader from '../common/PageHeader'

// LOCAL-FIRST imagery. Files named `innovation1.png`, `innovation2.jpg`, … in
// src/assets/images/ are matched to each project by its `image` key
// automatically. Missing images fall back to a branded gradient tile so the
// layout always renders.
const innovationModules = import.meta.glob(
  '../../assets/images/innovation*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}',
  { eager: true, query: '?url', import: 'default' },
)
const projectImages = {}
for (const [path, url] of Object.entries(innovationModules)) {
  const base = path.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase()
  projectImages[base] = url
}

const PUBLISHED = 'Nov 2, 2023'

// IEM IEDC / Innovation project showcase (sourced from iem.edu.in/tag/innovation).
// Each entry looks for its `image` key in src/assets/images/ (innovation1.*).
const projects = [
  {
    image: 'innovation1',
    tag: 'Aerospace',
    title: 'Unmanned Air Vehicle Assembly',
    desc: 'Unmanned Air Vehicle (UAV) assembly integrates electric motors, power electronics, and propellers into the aircraft structure. Electric and servo motors, driven by batteries, provide propulsion without…',
  },
  {
    image: 'innovation2',
    tag: 'Robotics',
    title: 'Multitasking Spider Robot',
    desc: 'The Multitasking Spider Robot is an innovative and versatile robotic system designed to mimic the characteristics and movements of a spider while incorporating various sensors for enhanced…',
  },
  {
    image: 'innovation3',
    tag: 'Renewable Energy',
    title: 'Sunflower: A Solar Tracking System',
    desc: 'A sunflower solar tracking system is designed to optimize solar panels’ efficiency by aligning them with the sun’s position throughout the day. The name “sunflower” derives from how sunflowers naturally…',
  },
  {
    image: 'innovation4',
    tag: 'Sustainability',
    title: 'Terracotta-Based Air Cooler System',
    desc: 'The Terracotta-based air cooler system is an innovative and sustainable solution for cooling indoor spaces. It utilizes the natural properties of terracotta, a porous clay material, to provide effective…',
  },
  {
    image: 'innovation5',
    tag: 'Biomedical',
    title: 'Prosthetic Arm',
    desc: 'A prosthetic arm is an artificial limb designed to replace a missing or non-functional arm. It is a prosthetic device used to restore upper limb functionality and mobility for individuals who have undergone…',
  },
  {
    image: 'innovation6',
    tag: 'IoT',
    title: 'Wi-Fi-Based Smart Projector Screen',
    desc: 'In this modern era, technological advancement has taken a great leap forward in the field of education. People prefer the use of technologies for information sharing rather than books themselves…',
  },
  {
    image: 'innovation7',
    tag: 'IoT',
    title: 'Crowd-Based Air Temperature & Ventilation Control',
    desc: 'A smart device senses occupancy and crowd density in a room to automatically regulate air temperature and ventilation, improving comfort while cutting down on energy waste…',
  },
  {
    image: 'innovation8',
    tag: 'Renewable Energy',
    title: 'Triboelectric Energy Cell from Water Sources',
    desc: 'This project fabricates a triboelectric energy cell that harvests electricity from the motion of various water sources, exploring a clean, self-sustaining route to low-power generation…',
  },
  {
    image: 'innovation9',
    tag: 'Embedded',
    title: 'Motorized Skateboard',
    desc: 'A battery-powered motorized skateboard with wireless throttle control offers an affordable, eco-friendly last-mile personal transport solution built around a brushless hub motor…',
  },
  {
    image: 'innovation10',
    tag: 'IoT',
    title: 'Emergency Protection for Women’s Safety',
    desc: 'A wearable safety device that, at the press of a button, shares the user’s live location and triggers instant alerts to registered contacts and authorities during an emergency…',
  },
  {
    image: 'innovation11',
    tag: 'IoT',
    title: 'Air Quality Regulator',
    desc: 'An automated air quality regulator continuously monitors indoor pollutants and activates purification and ventilation to maintain a healthy breathing environment…',
  },
  {
    image: 'innovation12',
    tag: 'Aerospace',
    title: 'Aerial Forest Ranger',
    desc: 'An autonomous drone system patrols forest areas to detect fire, illegal activity and environmental hazards, relaying real-time aerial data back to ground stations…',
  },
  {
    image: 'innovation13',
    tag: 'IoT',
    title: 'Machine Overheat Detector with Alert',
    desc: 'A sensor-based system monitors industrial machine temperatures in real time and issues instant alerts before overheating can cause damage or costly downtime…',
  },
  {
    image: 'innovation14',
    tag: 'Communication',
    title: 'LiFi Communication System for Disaster Management',
    desc: 'A Li-Fi based communication link transmits data through light to maintain reliable connectivity in disaster zones where conventional radio networks fail…',
  },
  {
    image: 'innovation15',
    tag: 'Software',
    title: 'IIC Resource App (Initial Phase)',
    desc: 'A mobile application developed for the Institution’s Innovation Council to centralise resources, events and project tracking for student innovators…',
  },
  {
    image: 'innovation16',
    tag: 'Sustainability',
    title: 'Atmospheric Water Generator',
    desc: 'An atmospheric water generator extracts and condenses moisture from ambient air to produce clean drinking water, offering relief in water-scarce regions…',
  },
  {
    image: 'innovation17',
    tag: 'IoT',
    title: 'Lakshman Rekha Shield',
    desc: 'A perimeter safety shield uses sensors to create a virtual protective boundary, detecting intrusions and instantly alerting users to potential threats…',
  },
  {
    image: 'innovation18',
    tag: 'IoT',
    title: 'IoT-Based Fire Extinguisher',
    desc: 'An IoT-enabled fire extinguisher detects flames and smoke automatically, suppresses the fire and notifies occupants and emergency services in real time…',
  },
  {
    image: 'innovation19',
    tag: 'Biomedical',
    title: 'Design & Development of a 4-in-1 Smart Mask',
    desc: 'A multifunctional smart mask integrates air filtration, health-vital monitoring, communication and environmental sensing into a single wearable device…',
  },
  {
    image: 'innovation20',
    tag: 'IoT',
    title: 'Home Automation System',
    desc: 'A connected home automation system lets users monitor and control lighting, appliances and security remotely for greater convenience and energy efficiency…',
  },
  {
    image: 'innovation21',
    tag: 'Biomedical',
    title: 'Low-Cost Portable ECG Machine',
    desc: 'An affordable, portable ECG machine captures and displays heart activity on the go, making cardiac screening accessible in rural and resource-limited settings…',
  },
]

// Unique tags in first-seen order, prefixed with "All" for the filter bar.
const TAGS = ['All', ...projects.reduce((acc, p) => (acc.includes(p.tag) ? acc : [...acc, p.tag]), [])]

const PAGE_SIZE = 6

function ProjectCard({ project }) {
  const img = projectImages[project.image]
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue/30 hover:shadow-cardhover">
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-soft">
        {img ? (
          <img
            src={img}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-navy via-brand-navy2 to-brand-blue">
            <Lightbulb size={38} className="text-white/40 transition-transform duration-500 group-hover:scale-110" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-3 top-3 rounded-full bg-brand-blue/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {project.tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[15px] font-bold uppercase leading-snug tracking-tight text-brand-navy transition-colors duration-300 group-hover:text-brand-blue">
          {project.title}
        </h3>
        <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-ink-500">{project.desc}</p>

        <a href="#" className="link-arrow mt-4 w-fit text-[13px]">
          Read more
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
          <span className="flex items-center gap-1.5 text-[11px] text-ink-400">
            <Calendar size={12} />
            {PUBLISHED}
          </span>
          <span className="text-[11px] font-semibold text-brand-blue">Innovation</span>
        </div>
      </div>
    </article>
  )
}

export default function InnovationProjectsPage() {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('All')
  const [page, setPage] = useState(1)

  // Filter by active tag + free-text search across title and description.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return projects.filter((p) => {
      const tagOk = tag === 'All' || p.tag === tag
      const textOk = !q || p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q)
      return tagOk && textOk
    })
  }, [query, tag])

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const safePage = Math.min(page, pageCount)
  const start = (safePage - 1) * PAGE_SIZE
  const visible = filtered.slice(start, start + PAGE_SIZE)

  const changeTag = (t) => {
    setTag(t)
    setPage(1)
  }
  const changeQuery = (v) => {
    setQuery(v)
    setPage(1)
  }
  const goTo = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="bg-[#f7f9ff]">
      <PageHeader
        title="Innovation Projects"
        crumb="Research › Innovation"
        subtitle="A showcase of student-led innovation from the Innovation & Entrepreneurship Development Cell — from robotics and renewable energy to assistive technology and sustainable design."
      />

      {/* Projects */}
      <section className="container-x pb-16 pt-14 sm:pt-16">
        <div className="text-center">
          <span className="section-eyebrow">Innovation Projects</span>
          <h2 className="text-balance text-3xl font-bold leading-tight text-[#0a2458] sm:text-[34px] lg:text-[38px]">
            Ideas Built at IEM
          </h2>
          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-brand-blue" />
        </div>

        {/* Search + filter controls */}
        <div className="mt-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          {/* Filter chips */}
          <div className="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <button
                key={t}
                onClick={() => changeTag(t)}
                className={`rounded-full px-4 py-2 text-[12.5px] font-semibold transition-all duration-300 ${
                  tag === t
                    ? 'bg-brand-blue text-white shadow-pill'
                    : 'border border-slate-200 bg-white text-ink-600 hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full lg:w-72">
            <Search size={17} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => changeQuery(e.target.value)}
              placeholder="Search projects…"
              className="w-full rounded-full border border-slate-200 bg-white py-2.5 pl-10 pr-9 text-[13.5px] text-ink-700 shadow-soft outline-none transition-all duration-300 placeholder:text-ink-400 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15"
            />
            {query && (
              <button
                onClick={() => changeQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-400 transition-colors hover:text-brand-blue"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* Result count */}
        <p className="mt-5 text-[13px] text-ink-500">
          Showing <span className="font-semibold text-ink-700">{filtered.length}</span>{' '}
          {filtered.length === 1 ? 'project' : 'projects'}
          {tag !== 'All' && (
            <>
              {' '}in <span className="font-semibold text-brand-blue">{tag}</span>
            </>
          )}
        </p>

        {visible.length > 0 ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white/60 py-16 text-center">
            <Search size={30} className="mx-auto text-ink-300" />
            <p className="mt-4 text-[15px] font-semibold text-ink-700">No projects found</p>
            <p className="mt-1 text-[13px] text-ink-500">Try a different keyword or filter.</p>
            <button
              onClick={() => {
                changeQuery('')
                changeTag('All')
              }}
              className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-brand-blue px-4 py-2 text-[13px] font-semibold text-white shadow-pill transition-transform hover:-translate-y-0.5"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {pageCount > 1 && (
          <nav className="mt-12 flex flex-wrap items-center justify-center gap-2" aria-label="Pagination">
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => goTo(p)}
                aria-current={p === safePage ? 'page' : undefined}
                className={`grid h-10 w-10 place-items-center rounded-lg text-sm font-semibold transition-all duration-300 ${
                  p === safePage
                    ? 'bg-brand-navy text-white shadow-pill'
                    : 'border border-slate-200 bg-white text-ink-600 hover:-translate-y-0.5 hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => goTo(Math.min(safePage + 1, pageCount))}
              disabled={safePage === pageCount}
              className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-brand-blue transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
            >
              Next
              <ChevronRight size={16} />
            </button>
          </nav>
        )}
      </section>
    </div>
  )
}
