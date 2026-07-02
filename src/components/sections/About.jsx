import { Play, ArrowRight, CheckCircle2 } from 'lucide-react'
import aboutVideo from '../../assets/images/about.png'

const badges = ['NAAC A+ Accredited', 'NBA Accredited', 'NIRF Ranked', 'AICTE Approved']

export default function About() {
  return (
    <section id="about" className="container-x py-16 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Video thumbnail */}
        <div className="relative">
          <div className="group relative overflow-hidden rounded-2xl shadow-card">
            <img
              src={aboutVideo}
              alt="Students at IEM"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-brand-navy/20" />
            
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="section-eyebrow !mx-0">About IEM</span>
          <h2 className="text-balance text-3xl font-bold leading-snug sm:text-[34px]">
            Excellence in Education
            <br className="hidden sm:block" /> Innovation in Action
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Institute of Engineering &amp; Management (IEM) has been a pioneer in technical education,
            research and innovation since its inception. Our mission is to develop competent
            professionals with strong ethical values and a passion for excellence.
          </p>

          <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3.5">
            {badges.map((badge) => (
              <div key={badge} className="flex items-center gap-2.5">
                <CheckCircle2 size={18} className="shrink-0 text-brand-blue" />
                <span className="text-[14px] font-medium text-ink-700">{badge}</span>
              </div>
            ))}
          </div>

          <a href="/#/about-iem" className="btn-primary mt-8 px-6 py-3">
            Read more about IEM
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
