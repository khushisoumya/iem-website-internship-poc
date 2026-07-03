import {
  ArrowRight,
  BookOpen,
  Bot,
  Building2,
  Briefcase,
  ChevronRight,
  Code,
  Cog,
  Database,
  Dna,
  FlaskConical,
  GraduationCap,
  Microchip,
  Radio,
  Scale,
  Shield,
  Trophy,
  UtensilsCrossed,
  Users,
  Wifi,
  Zap,
} from 'lucide-react'
import buildingImg from '../../assets/images/building2.png'
import { academicDepartments, departmentImages, sectionOrder } from '../../data/departments'

const stats = [
  { label: 'Departments', value: '21', Icon: GraduationCap },
  { label: 'Experienced Faculty', value: '150+', Icon: Users },
  { label: 'State-of-the-art Labs', value: '55+', Icon: FlaskConical },
  { label: 'Research Centres', value: '25+', Icon: BookOpen },
  { label: 'Placement Rate', value: '95%', Icon: Trophy },
]

const departmentIcons = {
  biotechnology: Dna,
  'cyber-security': Shield,
  'data-science': Database,
  'iot-cyber-blockchain': Shield,
  'ai-data-science': Bot,
  iot: Wifi,
  'artificial-intelligence': Bot,
  'ai-ml': Bot,
  cse: Microchip,
  electrical: Zap,
  'electrical-electronics': Zap,
  'electronics-communications': Radio,
  'information-technology': Microchip,
  mba: Briefcase,
  mca: Code,
  bba: Briefcase,
  bca: Code,
  law: Scale,
  bhm: UtensilsCrossed,
  'mechanical-engineering': Cog,
  bsh: BookOpen,
}

const researchCentres = [
  'IEM IEDC',
  'IEM Research Foundation',
  'IEM Labs',
  'IEMA Research and Development',
  'Smart Society USA',
]

// Group departments by section, preserving the section order declared in the
// data layer. Sections not present in `sectionOrder` are appended at the end.
function groupBySection(list) {
  const bySection = {}
  for (const dept of list) {
    ;(bySection[dept.section] ??= []).push(dept)
  }
  const ordered = sectionOrder.filter((s) => bySection[s])
  const extras = Object.keys(bySection).filter((s) => !sectionOrder.includes(s))
  return [...ordered, ...extras].map((section) => ({
    section,
    items: bySection[section],
  }))
}

function DepartmentCard({ slug, title, summary, iconKey }) {
  const Icon = departmentIcons[iconKey] ?? Building2
  const image = departmentImages[slug] ?? buildingImg

  return (
    <a
      href={`#/academics/${slug}`}
      className="group relative flex min-h-[158px] flex-col overflow-hidden rounded-[18px] border border-[#dbe4ff] bg-white p-4 shadow-[0_10px_30px_rgba(31,49,99,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-white/30 hover:shadow-[0_18px_44px_rgba(31,49,99,0.18)]"
    >
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
      />
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(6,27,78,0.92),rgba(12,55,145,0.78))]" />
      </div>

      <div className="flex items-start justify-between gap-4">
        <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-brand-blue transition-colors duration-300 group-hover:bg-white/10 group-hover:text-white">
          <Icon size={22} strokeWidth={1.8} />
        </span>
      </div>

      <div className="relative z-10 mt-3 flex-1">
        <h3 className="max-w-full text-[17px] font-bold leading-[1.25] tracking-[-0.01em] text-[#0b2457] transition-colors duration-300 group-hover:text-white sm:text-[18px]">
          {title}
        </h3>
        <p className="mt-1.5 max-w-[240px] text-[12px] leading-5 text-ink-500 transition-colors duration-300 group-hover:text-white/95">
          {summary}
        </p>
      </div>

      <div className="relative z-10 mt-3 flex justify-end">
        <span className="grid h-8 w-8 place-items-center rounded-lg border border-blue-100 bg-white text-brand-blue transition-colors duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
          <ArrowRight size={15} />
        </span>
      </div>
    </a>
  )
}

export default function Academics() {
  const grouped = groupBySection(academicDepartments)

  return (
    <div className="bg-[#f7f9ff]">
      <section className="relative overflow-hidden bg-[#0a2c75] text-white">
        <div className="absolute inset-0">
          <img src={buildingImg} alt="Engineering block" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,34,92,0.96)_0%,rgba(8,34,92,0.92)_42%,rgba(8,34,92,0.40)_72%,rgba(8,34,92,0.08)_100%)]" />
        </div>

        <div className="container-x relative z-10 py-16 sm:py-20 lg:py-24">
          <p className="text-sm text-white/75">Home &gt; Academics</p>

          <div className="mt-8 max-w-2xl">
            <p className="text-xl font-semibold text-white/90 sm:text-2xl">Explore</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-[56px]">
              Departments &amp; Programmes
            </h1>
            <div className="mt-6 h-1 w-12 rounded-full bg-brand-gold" />
            <p className="mt-6 max-w-xl text-[15px] leading-8 text-white/82 sm:text-base">
              Discover our full academic portfolio across computing, engineering, management,
              law, hospitality and foundational sciences.
            </p>
          </div>
        </div>
      </section>

      <section className="container-x relative z-20 -mt-8 sm:-mt-10">
        <div className="grid gap-px overflow-hidden rounded-[22px] bg-slate-200 shadow-[0_22px_60px_rgba(15,23,42,0.12)] md:grid-cols-5">
          {stats.map(({ label, value, Icon }) => (
            <div key={label} className="flex items-center gap-4 bg-white px-6 py-6 sm:px-7">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-blue-100 bg-blue-50 text-brand-blue">
                <Icon size={22} />
              </span>
              <div>
                <p className="font-display text-2xl font-extrabold text-brand-blue">{value}</p>
                <p className="text-[13px] text-ink-500">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-12 pt-14 sm:pb-16 sm:pt-16">
        <div className="text-center">
          <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-brand-blue">
            Our Departments
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[#0a2458] sm:text-[42px]">
            Explore Our Departments &amp; Programmes
          </h2>
          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-brand-blue" />
        </div>

        <div className="mt-12 space-y-14">
          {grouped.map(({ section, items }) => (
            <div key={section}>
              <div className="flex items-center gap-4">
                <h3 className="whitespace-nowrap text-xl font-bold text-[#0b2457] sm:text-2xl">
                  {section}
                </h3>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-[12px] font-semibold text-brand-blue">
                  {items.length} {items.length === 1 ? 'programme' : 'programmes'}
                </span>
                <span className="h-px flex-1 bg-[#dbe4ff]" />
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {items.map((dept) => (
                  <DepartmentCard key={dept.slug} {...dept} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-x pb-16">
        <div className="rounded-[22px] border border-[#dbe4ff] bg-[linear-gradient(180deg,#f6f8ff_0%,#eef3ff_100%)] px-6 py-6 shadow-[0_8px_24px_rgba(31,49,99,0.06)] sm:px-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h3 className="text-xl font-bold text-[#0b2457] sm:text-2xl">Research &amp; Innovation Centres</h3>
            </div>

            <a
              href="#/academics"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-brand-blue bg-white px-5 py-3 text-sm font-semibold text-brand-blue transition-colors hover:bg-blue-50"
            >
              View All Centres
              <ChevronRight size={16} />
            </a>
          </div>

          <div className="mt-6 grid gap-4 border-t border-blue-100 pt-5 md:grid-cols-2 xl:grid-cols-5">
            {researchCentres.map((centre) => (
              <div key={centre} className="flex items-center gap-3 border-blue-100 xl:border-r xl:last:border-r-0 xl:pr-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-brand-blue shadow-soft">
                  <Building2 size={18} />
                </span>
                <p className="text-[13px] font-medium leading-6 text-[#173165]">{centre}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
