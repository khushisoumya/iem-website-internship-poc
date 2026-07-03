import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Search, ChevronDown, ArrowRight, ArrowLeft, Cpu, Briefcase, UtensilsCrossed,
  MonitorSmartphone, Scale, GraduationCap, Users, FlaskConical, Globe2, ShieldCheck,
  Code2, BrainCircuit, Database, Wifi, Network, RadioTower, Zap, Building2, X,
} from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import Reveal from '../common/Reveal'
import { IMAGES } from '../../data/images'

const tabs = ['All Programs', 'Engineering', 'Management', 'Hotel Management', 'BCA MCA', 'Law']
const levels = ['All Levels', 'Undergraduate', 'Postgraduate']

const programs = [
  {
    Icon: Cpu,
    iconBg: 'bg-blue-50 text-brand-blue',
    title: 'Engineering',
    duration: 'B.Tech · M.Tech',
    desc: 'Specializations in 13+ disciplines',
    image: IMAGES.programEngineering,
    cat: 'Engineering',
  },
  {
    Icon: Briefcase,
    iconBg: 'bg-emerald-50 text-emerald-600',
    title: 'Management',
    duration: 'BBA · MBA',
    desc: 'Industry-focused programs with global exposure',
    image: IMAGES.programManagement,
    cat: 'Management',
  },
  {
    Icon: UtensilsCrossed,
    iconBg: 'bg-amber-50 text-amber-600',
    title: 'Hotel Management',
    duration: 'BHM',
    desc: 'Building hospitality excellence with practical training',
    image: IMAGES.programHotel,
    cat: 'Hotel Management',
  },
  {
    Icon: MonitorSmartphone,
    iconBg: 'bg-violet-50 text-violet-600',
    title: 'BCA MCA',
    duration: 'BCA · MCA',
    desc: 'Future-ready programs in computer applications and IT',
    image: IMAGES.programBca,
    cat: 'BCA MCA',
  },
  {
    Icon: Scale,
    iconBg: 'bg-rose-50 text-rose-600',
    title: 'Law',
    duration: 'LL.B · LL.M',
    desc: 'Shaping legal minds for a just tomorrow',
    image: IMAGES.programLaw,
    cat: 'Law',
  },
]

// Departments under each program. Mirrors the live IEM department list.
const departments = [
  // ── Engineering ────────────────────────────────────────────────
  { name: 'Computer Science & Engineering', degree: 'B.Tech', level: 'Undergraduate', cat: 'Engineering', Icon: Code2, accent: 'bg-blue-50 text-brand-blue', desc: 'Core computing, algorithms, systems and software engineering.' },
  { name: 'CSE — Artificial Intelligence', degree: 'B.Tech', level: 'Undergraduate', cat: 'Engineering', Icon: BrainCircuit, accent: 'bg-indigo-50 text-indigo-600', desc: 'Intelligent systems, reasoning and applied machine learning.' },
  { name: 'CSE — Artificial Intelligence & Machine Learning', degree: 'B.Tech', level: 'Undergraduate', cat: 'Engineering', Icon: BrainCircuit, accent: 'bg-indigo-50 text-indigo-600', desc: 'Deep learning, neural networks and predictive modelling.' },
  { name: 'CSE — Artificial Intelligence & Data Science', degree: 'B.Tech', level: 'Undergraduate', cat: 'Engineering', Icon: Database, accent: 'bg-cyan-50 text-cyan-600', desc: 'AI fused with large-scale data analytics and insight.' },
  { name: 'CSE — Data Science', degree: 'B.Tech', level: 'Undergraduate', cat: 'Engineering', Icon: Database, accent: 'bg-cyan-50 text-cyan-600', desc: 'Statistics, big data pipelines and data-driven decisions.' },
  { name: 'CSE — Cyber Security', degree: 'B.Tech', level: 'Undergraduate', cat: 'Engineering', Icon: ShieldCheck, accent: 'bg-emerald-50 text-emerald-600', desc: 'Network defence, ethical hacking and secure systems.' },
  { name: 'CSE — Internet of Things', degree: 'B.Tech', level: 'Undergraduate', cat: 'Engineering', Icon: Wifi, accent: 'bg-teal-50 text-teal-600', desc: 'Connected devices, embedded systems and smart sensors.' },
  { name: 'CSE — IoT & Cyber Security incl. Blockchain', degree: 'B.Tech', level: 'Undergraduate', cat: 'Engineering', Icon: Network, accent: 'bg-teal-50 text-teal-600', desc: 'IoT, security and distributed ledger / blockchain technology.' },
  { name: 'Information Technology', degree: 'B.Tech', level: 'Undergraduate', cat: 'Engineering', Icon: MonitorSmartphone, accent: 'bg-violet-50 text-violet-600', desc: 'Enterprise software, networks and information systems.' },
  { name: 'Electronics & Communications Engineering', degree: 'B.Tech', level: 'Undergraduate', cat: 'Engineering', Icon: RadioTower, accent: 'bg-amber-50 text-amber-600', desc: 'Communication systems, VLSI and embedded electronics.' },
  { name: 'Electrical Engineering', degree: 'B.Tech', level: 'Undergraduate', cat: 'Engineering', Icon: Zap, accent: 'bg-yellow-50 text-yellow-600', desc: 'Power systems, control engineering and electrical machines.' },
  { name: 'Electrical & Electronics Engineering', degree: 'B.Tech', level: 'Undergraduate', cat: 'Engineering', Icon: Zap, accent: 'bg-yellow-50 text-yellow-600', desc: 'A blend of electrical power and modern electronics.' },
  { name: 'Biotechnology', degree: 'B.Tech', level: 'Undergraduate', cat: 'Engineering', Icon: FlaskConical, accent: 'bg-rose-50 text-rose-600', desc: 'Genetics, bioprocess engineering and life sciences.' },

  // ── Management ─────────────────────────────────────────────────
  { name: 'Master of Business Administration', degree: 'MBA', level: 'Postgraduate', cat: 'Management', Icon: Briefcase, accent: 'bg-emerald-50 text-emerald-600', desc: 'Leadership, finance, marketing and strategic management.' },
  { name: 'Bachelor of Business Administration', degree: 'BBA', level: 'Undergraduate', cat: 'Management', Icon: Briefcase, accent: 'bg-emerald-50 text-emerald-600', desc: 'Business fundamentals with a strong managerial foundation.' },

  // ── Hotel Management ───────────────────────────────────────────
  { name: 'Bachelor of Hotel Management', degree: 'BHM', level: 'Undergraduate', cat: 'Hotel Management', Icon: UtensilsCrossed, accent: 'bg-amber-50 text-amber-600', desc: 'Hospitality, culinary arts and hotel operations.' },

  // ── BCA MCA ────────────────────────────────────────────────────
  { name: 'Bachelor of Computer Applications', degree: 'BCA', level: 'Undergraduate', cat: 'BCA MCA', Icon: MonitorSmartphone, accent: 'bg-violet-50 text-violet-600', desc: 'Programming, web technologies and application development.' },
  { name: 'Master in Computer Applications', degree: 'MCA', level: 'Postgraduate', cat: 'BCA MCA', Icon: Code2, accent: 'bg-violet-50 text-violet-600', desc: 'Advanced software engineering and computing concepts.' },

  // ── Law ────────────────────────────────────────────────────────
  { name: 'Bachelor of Laws', degree: 'LL.B', level: 'Undergraduate', cat: 'Law', Icon: Scale, accent: 'bg-rose-50 text-rose-600', desc: 'Constitutional, corporate and criminal law foundations.' },
]

// Maps a department name to its academic sub-page slug (#/academics/<slug>).
// Names not listed here have no dedicated page yet and fall back to admissions.
const departmentRoutes = {
  'Computer Science & Engineering': 'cse',
  'CSE — Artificial Intelligence': 'cse-ai',
  'CSE — Artificial Intelligence & Machine Learning': 'cse-ai-ml',
  'CSE — Artificial Intelligence & Data Science': 'cse-ai-data-science',
  'CSE — Data Science': 'cse-data-science',
  'CSE — Cyber Security': 'cse-cyber-security',
  'CSE — Internet of Things': 'cse-iot',
  'CSE — IoT & Cyber Security incl. Blockchain': 'cse-iot-cs-blockchain',
  'Information Technology': 'it',
  'Electronics & Communications Engineering': 'ece',
  'Electrical Engineering': 'ee',
  'Electrical & Electronics Engineering': 'eee',
  'Biotechnology': 'biotechnology',
  'Master of Business Administration': 'mba',
  'Bachelor of Business Administration': 'bba',
  'Bachelor of Hotel Management': 'bhm',
  'Bachelor of Computer Applications': 'bca',
  'Master in Computer Applications': 'mca',
  'Bachelor of Laws': 'law',
}

const stats = [
  { Icon: GraduationCap, value: '50+', label: 'Programs Offered' },
  { Icon: Users, value: '300+', label: 'Approved Faculty' },
  { Icon: FlaskConical, value: '100+', label: 'Labs & Centres' },
  { Icon: Globe2, value: '25+', label: 'Industry Collaborations' },
  { Icon: ShieldCheck, value: 'NAAC A+', label: 'Accredited Institute' },
]

export default function Programs() {
  const [active, setActive] = useState('All Programs')
  const [query, setQuery] = useState('')
  const [level, setLevel] = useState('All Levels')
  const [levelOpen, setLevelOpen] = useState(false)
  const levelRef = useRef(null)

  // Listen for the navbar search box.
  useEffect(() => {
    const onSearch = (e) => {
      setActive('All Programs')
      setLevel('All Levels')
      setQuery(e.detail || '')
    }
    window.addEventListener('iem:search', onSearch)
    return () => window.removeEventListener('iem:search', onSearch)
  }, [])

  // Close the level dropdown on outside click.
  useEffect(() => {
    const onClick = (e) => {
      if (levelRef.current && !levelRef.current.contains(e.target)) setLevelOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  const q = query.trim().toLowerCase()
  // We show the department drill-down when the user is searching, has picked a
  // level, or selected a specific program tab. Otherwise we show the 5 program
  // category cards.
  const showDepartments = q !== '' || level !== 'All Levels' || active !== 'All Programs'

  const matchedDepartments = useMemo(() => {
    return departments.filter((d) => {
      if (active !== 'All Programs' && d.cat !== active) return false
      if (level !== 'All Levels' && d.level !== level) return false
      if (q) {
        const hay = `${d.name} ${d.degree} ${d.cat} ${d.level}`.toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })
  }, [active, level, q])

  const visiblePrograms = active === 'All Programs' ? programs : programs.filter((p) => p.cat === active)

  const resetView = () => {
    setActive('All Programs')
    setQuery('')
    setLevel('All Levels')
  }

  return (
    <section id="programs" className="bg-surface-muted py-16 lg:py-20">
      <div className="container-x">
        <SectionHeader
          eyebrow="Academics"
          title="Explore Our Programs"
          subtitle="We offer a wide range of undergraduate, postgraduate and doctoral programs designed to build strong fundamentals and future-ready skills."
        />

        {/* Search + filter bar */}
        <Reveal className="mx-auto mt-9 flex max-w-3xl flex-col gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-soft sm:flex-row sm:items-center">
          <div className="flex flex-1 items-center gap-2.5 rounded-lg bg-surface-muted px-3.5 py-2.5">
            <Search size={17} className="text-ink-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search programs, departments or specializations..."
              className="w-full bg-transparent text-sm text-ink-700 outline-none placeholder:text-ink-400"
            />
            {query && (
              <button onClick={() => setQuery('')} aria-label="Clear search" className="text-ink-400 hover:text-ink-700">
                <X size={15} />
              </button>
            )}
          </div>

          {/* Level dropdown */}
          <div ref={levelRef} className="relative">
            <button
              onClick={() => setLevelOpen((v) => !v)}
              className="flex w-full items-center justify-between gap-2 rounded-lg bg-surface-muted px-3.5 py-2.5 text-sm font-medium text-ink-700 sm:w-40"
            >
              {level}
              <ChevronDown size={15} className={`text-ink-400 transition-transform ${levelOpen ? 'rotate-180' : ''}`} />
            </button>
            {levelOpen && (
              <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-lg border border-slate-100 bg-white py-1 shadow-cardhover">
                {levels.map((lv) => (
                  <button
                    key={lv}
                    onClick={() => {
                      setLevel(lv)
                      setLevelOpen(false)
                    }}
                    className={`block w-full px-3.5 py-2 text-left text-[13px] transition-colors hover:bg-surface-soft ${
                      level === lv ? 'font-semibold text-brand-blue' : 'text-ink-600'
                    }`}
                  >
                    {lv}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => document.getElementById('program-results')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="btn-primary px-6 py-2.5"
          >
            <Search size={15} />
            Search
          </button>
        </Reveal>

        {/* Tabs */}
        <div className="no-scrollbar mt-7 flex justify-start gap-2 overflow-x-auto pb-1 sm:justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActive(tab)
                setQuery('')
              }}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-[13px] font-medium transition-colors ${
                active === tab
                  ? 'bg-brand-blue text-white shadow-pill'
                  : 'bg-white text-ink-600 ring-1 ring-slate-200 hover:text-brand-blue'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div id="program-results" className="scroll-mt-24">
          {!showDepartments ? (
            /* ── Program category cards ─────────────────────────── */
            <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {visiblePrograms.map(({ Icon, iconBg, title, duration, desc, image, cat }, i) => (
                <Reveal key={title} delay={i * 70}>
                  <button
                    onClick={() => setActive(cat)}
                    className="group block h-full w-full overflow-hidden rounded-2xl border border-slate-100 bg-white text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-navy hover:bg-brand-navy hover:shadow-cardhover"
                  >
                    <div className="p-5">
                      <span className={`grid h-12 w-12 place-items-center rounded-xl transition-colors duration-300 ${iconBg} group-hover:!bg-white/10 group-hover:!text-brand-gold`}>
                        <Icon size={22} />
                      </span>
                      <h3 className="mt-4 text-base font-bold text-ink-900 transition-colors duration-300 group-hover:text-white">{title}</h3>
                      <p className="mt-0.5 text-[12px] font-medium text-brand-blue transition-colors duration-300 group-hover:text-brand-gold">{duration}</p>
                      <p className="mt-2 text-[12.5px] leading-relaxed text-ink-500 transition-colors duration-300 group-hover:text-white/80">{desc}</p>
                      {/* Explore button — fills on card hover */}
                      <span className="relative mt-4 inline-flex items-center gap-1.5 overflow-hidden rounded-full border border-brand-blue/30 px-4 py-2 text-[13px] font-semibold text-brand-blue transition-colors duration-300 group-hover:border-brand-gold group-hover:text-brand-navy">
                        <span className="absolute inset-0 z-0 origin-left scale-x-0 bg-brand-gold transition-transform duration-500 ease-out group-hover:scale-x-100" />
                        <span className="relative z-10 inline-flex items-center gap-1.5">
                          Explore Programmes
                          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                        </span>
                      </span>
                    </div>
                    <div className="overflow-hidden">
                      <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          ) : (
            /* ── Department drill-down / search results ─────────── */
            <div className="mt-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={resetView}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-[13px] font-medium text-ink-700 transition-colors hover:border-brand-blue hover:text-brand-blue"
                  >
                    <ArrowLeft size={14} />
                    All Programs
                  </button>
                  <h3 className="text-base font-bold text-ink-900 sm:text-lg">
                    {q
                      ? `Results for “${query.trim()}”`
                      : active !== 'All Programs'
                        ? `${active} Departments`
                        : `${level} Programs`}
                  </h3>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-[12px] font-semibold text-brand-blue">
                  {matchedDepartments.length} {matchedDepartments.length === 1 ? 'department' : 'departments'}
                </span>
              </div>

              {matchedDepartments.length === 0 ? (
                <div className="mt-10 flex flex-col items-center rounded-2xl border border-dashed border-slate-200 bg-white py-16 text-center">
                  <Search size={28} className="text-ink-400" />
                  <p className="mt-3 text-sm font-semibold text-ink-900">No matching programs found</p>
                  <p className="mt-1 text-[13px] text-ink-500">Try a different keyword or reset the filters.</p>
                  <button onClick={resetView} className="btn-primary mt-5 px-5 py-2.5">
                    Reset filters
                  </button>
                </div>
              ) : (
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {matchedDepartments.map((d, i) => (
                    <Reveal key={d.name} delay={i * 45} y={20}>
                      <article className="group relative h-full overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-cardhover">
                        <span className="absolute right-0 top-0 h-24 w-24 -translate-y-10 translate-x-10 rounded-full bg-brand-blue/5 transition-transform duration-500 group-hover:scale-150" />
                        <div className="relative flex items-start justify-between">
                          <span className={`grid h-11 w-11 place-items-center rounded-xl ${d.accent}`}>
                            <d.Icon size={20} />
                          </span>
                          <span className="rounded-full bg-surface-soft px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-brand-blue">
                            {d.level === 'Undergraduate' ? 'UG' : 'PG'}
                          </span>
                        </div>
                        <h4 className="relative mt-4 text-[14.5px] font-bold leading-snug text-ink-900">{d.name}</h4>
                        <p className="relative mt-1 text-[12px] font-semibold text-brand-blue">{d.degree}</p>
                        <p className="relative mt-2 text-[12.5px] leading-relaxed text-ink-500">{d.desc}</p>
                        <a
                          href={departmentRoutes[d.name] ? `#/academics/${departmentRoutes[d.name]}` : '#admissions'}
                          className="link-arrow relative mt-4 text-[13px]"
                        >
                          View Details
                          <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                        </a>
                      </article>
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Stats band */}
        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-slate-100 shadow-soft sm:grid-cols-3 lg:grid-cols-5">
          {stats.map(({ Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 bg-white px-4 py-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-surface-soft text-brand-blue">
                <Icon size={18} />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-ink-900">{value}</p>
                <p className="text-[11.5px] leading-tight text-ink-500">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
