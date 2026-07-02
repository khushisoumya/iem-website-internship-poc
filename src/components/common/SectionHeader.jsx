// Consistent centered section heading: eyebrow label + title + optional
// subtitle, matching the repeated pattern across the page.
export default function SectionHeader({ eyebrow, title, subtitle, align = 'center', light = false }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'}>
      {eyebrow && (
        <span className={`section-eyebrow ${align === 'left' ? '!mx-0' : ''}`}>{eyebrow}</span>
      )}
      <h2
        className={`text-balance text-3xl font-bold leading-tight sm:text-[34px] lg:text-[38px] ${
          light ? '!text-white' : ''
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 text-[15px] leading-relaxed ${light ? 'text-white/70' : 'text-ink-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
