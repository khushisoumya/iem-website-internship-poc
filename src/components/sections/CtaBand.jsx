import { ArrowDown } from 'lucide-react'
import ctaImage from '../../assets/images/cta-band.png'

export default function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-blue-cta py-20 text-center text-white lg:py-24">
      {/* background image with a brand overlay */}
      <img
        src={ctaImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-brand-bluedark/85 via-brand-blue/70 to-brand-navy/85" />

      {/* decorative rings */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />

      <div className="container-x relative">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
          IEMJEE 2026
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/85">
          Your gateway to world-class education and limitless opportunities at IEM.
        </p>
        <a
          href="https://exam.iem.edu.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto mt-9 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur transition-transform hover:translate-y-1 hover:bg-white/25"
          aria-label="Apply now"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  )
}
