import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, ArrowRight, Mail, Phone } from 'lucide-react'
import Logo from '../common/Logo'

const columns = [
  {
    title: 'Our Campuses',
    links: ['IEM Saltlake', 'IEM Newtown', 'UEM Kolkata', 'UEM Jaipur', 'IEM Management House'],
  },
  {
    title: 'Statutory Committees',
    links: [
      'Grievance Redressal Committee',
      'Anti-Ragging Committee',
      'Anti-Ragging Squad',
      'Internal Complaints Committee',
      'SC / ST Committee',
      'Minority Cell',
    ],
  },
  {
    title: 'News and Media',
    links: ['News', 'Events', 'Media Coverage', 'Newsletter', 'Gallery', 'Blog'],
  },
  {
    title: 'Important Links',
    links: ['NIRF', 'NAAC', 'Mandatory Disclosure', 'IQAC', 'Anti-Ragging', 'Feedback', 'Privacy Policy'],
  },
]

const socials = [
  { Icon: Facebook, label: 'Facebook' },
  { Icon: Instagram, label: 'Instagram' },
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: Twitter, label: 'Twitter' },
  { Icon: Youtube, label: 'YouTube' },
]

// Popping circles for the animated footer backdrop.
const CIRCLES = [
  { left: '6%', top: '30%', size: 120, delay: '0s' },
  { left: '20%', top: '70%', size: 80, delay: '1.4s' },
  { left: '42%', top: '20%', size: 160, delay: '0.7s' },
  { left: '58%', top: '64%', size: 100, delay: '2.1s' },
  { left: '74%', top: '28%', size: 140, delay: '1s' },
  { left: '88%', top: '72%', size: 90, delay: '2.8s' },
  { left: '32%', top: '48%', size: 60, delay: '3.2s' },
  { left: '66%', top: '40%', size: 70, delay: '1.8s' },
]

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-brand-navy2 text-white/70">
      

      {/* IEMJEE apply banner — the arrow opens the exam portal */}
      <div className="relative z-10 border-b border-white/10">
        <div className="container-x py-8">
          <a
            href="https://exam.iem.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start justify-between gap-5 overflow-hidden rounded-3xl bg-gradient-to-r from-brand-bluedark via-brand-blue to-brand-sky p-7 shadow-card transition-all duration-300 hover:shadow-[0_20px_50px_rgba(22,86,196,0.35)] sm:flex-row sm:items-center sm:p-9"
          >
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/80">
                Admissions Open · 2026
              </p>
<h3 className="mt-2 font-display text-2xl font-extrabold text-yellow-400 sm:text-3xl">                Apply for IEMJEE 2026
              </h3>
              <p className="mt-1.5 text-[13.5px] text-white/80">
                Take the first step towards a future of innovation and excellence.
              </p>
            </div>
            <span className="flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-blue transition-all duration-300 group-hover:gap-4">
              Apply Now
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-blue text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:rotate-45">
                <ArrowRight size={17} />
              </span>
            </span>
          </a>
        </div>
      </div>

      <div className="relative z-10 container-x py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1fr]">
          {/* Brand + address */}
          <div>
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-[13px] leading-relaxed">
              Institute of Engineering &amp; Management — nurturing minds and building excellence to
              create leaders for a better tomorrow.
            </p>
            <p className="mt-4 flex items-start gap-2 text-[13px] leading-relaxed">
              <MapPin size={15} className="mt-0.5 shrink-0 text-brand-gold" />
              Gurukul, Y-12, Block-EP, Sector-V, Salt Lake, Kolkata 700091
            </p>
            <div className="mt-3 space-y-2">
              <a href="mailto:info@iem.edu.in" className="flex items-center gap-2 text-[13px] transition-colors hover:text-white">
                <Mail size={14} className="shrink-0 text-brand-gold" />
                info@iem.edu.in
              </a>
              <a href="tel:+913323572059" className="flex items-center gap-2 text-[13px] transition-colors hover:text-white">
                <Phone size={14} className="shrink-0 text-brand-gold" />
                +91 33 2357 2059
              </a>
            </div>

            <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/50">
              Social Links
            </p>
            <div className="mt-3 flex items-center gap-2.5">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white/80 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-blue hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-semibold uppercase tracking-wide text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="group inline-flex items-center gap-1.5 text-[13px] transition-colors hover:text-brand-gold"
                    >
                      <span className="h-px w-0 bg-brand-gold transition-all duration-300 group-hover:w-3" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-[12px] sm:flex-row">
          <p>© 2026 IEM. Designed by IEM. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="transition-colors hover:text-white">Terms of Use</a>
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
