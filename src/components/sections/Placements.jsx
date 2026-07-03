import { useEffect, useRef, useState } from 'react'
import {
  IndianRupee, TrendingUp, Building2, ArrowRight, Handshake, Compass, Lightbulb,
  Trophy, Quote, ChevronLeft, ChevronRight, Star,
} from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import Reveal from '../common/Reveal'
import CountUp from '../common/CountUp'

// Recruiter logos. Drop the real PNGs into src/assets/images/ using these
// exact filenames and they will appear automatically.
import googleLogo from '../../assets/images/google.png'
import microsoftLogo from '../../assets/images/microsoft.png'
import amazonLogo from '../../assets/images/amazon.png'
import tcsLogo from '../../assets/images/tcs.png'
import infosysLogo from '../../assets/images/infosys.png'
import wiproLogo from '../../assets/images/wipro.png'
import deloitteLogo from '../../assets/images/deloitte.png'
import accentureLogo from '../../assets/images/accenture.png'

const stats = [
  { Icon: IndianRupee, prefix: '₹', value: 70, suffix: ' LPA', label: 'Highest Package', sub: '2024 Batch' },
  { Icon: IndianRupee, prefix: '₹', value: 8.6, decimals: 1, suffix: ' LPA', label: 'Average Package', sub: '2024 Batch' },
  { Icon: TrendingUp, value: 95, suffix: '%', label: 'Placement Rate', sub: '2024 Batch' },
  { Icon: Building2, value: 500, suffix: '+', label: 'Recruiters', sub: 'Visit Every Year' },
]

const recruiters = [
  { src: googleLogo, name: 'Google' },
  { src: microsoftLogo, name: 'Microsoft' },
  { src: amazonLogo, name: 'Amazon' },
  { src: tcsLogo, name: 'TCS' },
  { src: infosysLogo, name: 'Infosys' },
  { src: wiproLogo, name: 'Wipro' },
  { src: deloitteLogo, name: 'Deloitte' },
  { src: accentureLogo, name: 'Accenture' },
]

const highlights = [
  { Icon: Handshake, title: 'Strong Industry Connect', desc: 'Deep relationships with leading companies across sectors.' },
  { Icon: Compass, title: 'Career Support', desc: 'Resume building, mock interviews and one-on-one mentoring.' },
  { Icon: Lightbulb, title: 'Skill Development', desc: 'Industry-aligned training workshops and certifications.' },
  { Icon: Trophy, title: 'Excellent Track Record', desc: 'Consistent placement growth and top recruiters year on year.' },
]

const avatar = (id) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=200&h=200&q=80`

const testimonials = [
  {
    quote: 'IEM gave me not just a world-class education, but the confidence and skills to crack top tech interviews. The placement cell supported me at every step.',
    name: 'Ankit Verma', role: 'B.Tech CSE · Placed at Google', img: avatar('photo-1507003211169-0a1dd7228f2d'), company: 'Google',
  },
  {
    quote: 'The mentorship and mock interviews were game-changers. I walked into my final round feeling completely prepared and landed my dream consulting role.',
    name: 'Priya Sharma', role: 'MBA · Placed at Deloitte', img: avatar('photo-1494790108377-be9c29b29330'), company: 'Deloitte',
  },
  {
    quote: 'From day one the training cell pushed us to build real projects. That hands-on experience is exactly what set my profile apart with recruiters.',
    name: 'Rahul Das', role: 'B.Tech IT · Placed at Microsoft', img: avatar('photo-1500648767791-00dcc994a43e'), company: 'Microsoft',
  },
  {
    quote: 'The coding bootcamps and aptitude sessions made all the difference. I cleared multiple offers and chose the one I was most excited about.',
    name: 'Sneha Gupta', role: 'MCA · Placed at Amazon', img: avatar('photo-1438761681033-6461ffad8d80'), company: 'Amazon',
  },
  {
    quote: 'Beyond academics, IEM built my communication and leadership. The placement drive felt smooth because the faculty had prepared us for everything.',
    name: 'Arjun Mehta', role: 'B.Tech ECE · Placed at TCS', img: avatar('photo-1519085360753-af0119f7cbe7'), company: 'TCS',
  },
  {
    quote: 'The exposure to live industry projects and the supportive alumni network gave me a real head start in my marketing career.',
    name: 'Ananya Roy', role: 'BBA · Placed at Accenture', img: avatar('photo-1544005313-94ddf0286df2'), company: 'Accenture',
  },
]

export default function Placements() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = testimonials.length

  const go = (n) => setIndex((prev) => (n + count) % count)
  const next = () => go(index + 1)
  const prev = () => go(index - 1)

  // Auto-advance, pausing on hover.
  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((p) => (p + 1) % count), 5000)
    return () => clearInterval(id)
  }, [paused, count])

  return (
    <section id="placements" className="relative overflow-hidden bg-surface-muted py-16 lg:py-20">
      {/* decorative background orbs */}
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-brand-sky/10 blur-3xl" />

      <div className="container-x relative">
        <SectionHeader
          eyebrow="Placements"
          title="Building Careers. Creating Futures."
          subtitle="Our strong industry connect and dedicated training ensure outstanding placements year after year."
        />

        {/* stat cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map(({ Icon, prefix, value, decimals, suffix, label, sub }, i) => (
            <Reveal key={label} delay={i * 90} y={26}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-slate-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-cardhover">
                <span className="absolute right-0 top-0 h-20 w-20 -translate-y-8 translate-x-8 rounded-full bg-brand-blue/5 transition-transform duration-500 group-hover:scale-150" />
                <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-surface-soft text-brand-blue transition-colors duration-300 group-hover:bg-brand-blue group-hover:text-white">
                  <Icon size={18} />
                </span>
                <p className="relative mt-4 font-display text-2xl font-extrabold text-ink-900">
                  <CountUp end={value} prefix={prefix} suffix={suffix} decimals={decimals || 0} />
                </p>
                <p className="relative mt-0.5 text-[13px] font-semibold text-ink-700">{label}</p>
                <p className="relative text-[11.5px] text-ink-400">{sub}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* recruiters marquee */}
        <Reveal className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-[15px] font-semibold text-ink-900">Our Top Recruiters</h3>
            <a href="#" className="link-arrow text-[13px]">
              View All Recruiters
              <ArrowRight size={13} />
            </a>
          </div>
          <div className="group relative mt-4 overflow-hidden rounded-2xl border border-slate-100 bg-white py-5 shadow-soft">
            {/* edge fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
            <div className="flex w-max animate-marquee items-center gap-4 group-hover:[animation-play-state:paused]">
              {[...recruiters, ...recruiters].map((r, i) => (
                <div
                  key={`${r.name}-${i}`}
                  className="grid h-16 w-40 shrink-0 place-items-center rounded-xl border border-slate-100 bg-surface-muted px-4 transition-colors duration-300 hover:border-brand-blue/30 hover:bg-white"
                >
                  <img
                    src={r.src}
                    alt={r.name}
                    className="max-h-9 max-w-[120px] object-contain opacity-70  transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* highlights + testimonial carousel */}
        <div className="mt-10 grid gap-5 lg:grid-cols-[1.4fr_1fr]">
          <Reveal x={-30} y={0}>
            <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-soft sm:p-7">
              <h3 className="text-lg font-bold text-ink-900">Placement Highlights 2024</h3>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                {highlights.map(({ Icon, title, desc }, i) => (
                  <Reveal key={title} delay={i * 80} y={18}>
                    <div className="group flex gap-3">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-surface-soft text-brand-blue transition-all duration-300 group-hover:-rotate-6 group-hover:bg-brand-blue group-hover:text-white">
                        <Icon size={17} />
                      </span>
                      <div>
                        <p className="text-[13.5px] font-semibold text-ink-900">{title}</p>
                        <p className="mt-0.5 text-[12px] leading-relaxed text-ink-500">{desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <a href="/#/placement-overview" className="btn-primary mt-7 px-6 py-3">
                View Placement Brochure
                <ArrowRight size={16} />
              </a>
            </div>
          </Reveal>

          {/* Testimonial carousel */}
          <Reveal x={30} y={0}>
            <div
              className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-navy via-brand-navy2 to-[#0a142e] p-7 text-white shadow-card"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {/* animated decorative blobs */}
              <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 animate-blob rounded-full bg-brand-blue/30 blur-2xl" />
              <span className="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 animate-blob rounded-full bg-brand-gold/20 blur-2xl [animation-delay:3s]" />

              <div className="relative flex h-full flex-col">
                <Quote size={40} className="text-brand-gold/50" />

                {/* sliding track */}
                <div className="mt-3 flex-1 overflow-hidden">
                  <div
                    className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                  >
                    {testimonials.map((t) => (
                      <div key={t.name} className="flex w-full shrink-0 flex-col">
                        <div className="mb-3 flex gap-1">
                          {Array.from({ length: 5 }).map((_, s) => (
                            <Star key={s} size={15} className="fill-brand-gold text-brand-gold" />
                          ))}
                        </div>
                        <p className="text-[14.5px] leading-relaxed text-white/90">“{t.quote}”</p>
                        <div className="mt-6 flex items-center gap-3">
                          <img
                            src={t.img}
                            alt={t.name}
                            loading="lazy"
                            className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-gold"
                          />
                          <div>
                            <p className="text-sm font-semibold">{t.name}</p>
                            <p className="text-[12px] text-white/60">{t.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* controls */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        aria-label={`Go to testimonial ${i + 1}`}
                        onClick={() => go(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === index ? 'w-6 bg-brand-gold' : 'w-1.5 bg-white/30 hover:bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      aria-label="Previous testimonial"
                      onClick={prev}
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white/20 active:scale-95"
                    >
                      <ChevronLeft size={18} />
                    </button>
                    <button
                      aria-label="Next testimonial"
                      onClick={next}
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition-all duration-300 hover:scale-110 hover:bg-white/20 active:scale-95"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
