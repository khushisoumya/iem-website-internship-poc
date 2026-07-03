import { ChevronRight } from 'lucide-react'
import { IMAGES } from '../../data/images'

/* ────────────────────────────────────────────────────────────────────────
   Shared page header / banner used by every routed sub-page so the header
   image, height and layout stay identical across the whole site.

   Props:
     title    — the page heading (required)
     crumb    — breadcrumb label for the current page (defaults to title)
     subtitle — optional supporting line under the title
   ──────────────────────────────────────────────────────────────────────── */
export default function PageHeader({ title, crumb, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-brand-navy">
      {/* Full-bleed campus image, consistent on every page */}
      <img
        src={IMAGES.heroCampus}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Readability gradient — dark on the left where the text sits */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/90 to-brand-navy/40" />

      {/* Fixed vertical rhythm → identical header height across pages */}
      <div className="container-x relative flex min-h-[240px] flex-col justify-center py-16 sm:min-h-[300px] sm:py-20">
        <nav className="flex items-center gap-1.5 text-[12.5px] text-white/70">
          <a href="#top" className="transition-colors hover:text-white">
            Home
          </a>
          <ChevronRight size={13} />
          <span className="text-white">{crumb || title}</span>
        </nav>
        <h1 className="mt-4 animate-fade-up font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <span className="mt-4 block h-1 w-20 rounded-full bg-brand-gold" />
        {subtitle && (
          <p className="mt-5 max-w-xl animate-fade-up text-[14px] leading-relaxed text-white/80 [animation-delay:120ms]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
