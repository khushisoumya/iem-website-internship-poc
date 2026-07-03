import { ChevronRight } from 'lucide-react'

// Hover dropdown "card" rendered under a nav item. Every dropdown shares the
// same fixed width and layout — link columns on the left, one image on the
// right — so the menus look consistent across the navbar.
export default function MegaMenu({ mega, label }) {
  return (
    <div
      className={`absolute top-full z-50 ${mega.wide ? 'w-[840px]' : 'w-[640px]'} pt-3 transition-all duration-200 ease-out ${
        mega.force
          ? 'visible translate-y-0 opacity-100'
          : 'invisible translate-y-1 opacity-0 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100'
      } ${mega.align === 'right' ? 'right-0' : 'left-0'}`}
    >
      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-cardhover ring-1 ring-black/[0.02]">
        {/* top accent */}
        <div className="h-1 w-full bg-blue-cta" />

        <div className="flex min-h-[214px] items-stretch gap-5 p-5">
          {/* Link columns */}
          <div className="flex min-w-0 flex-1 gap-6">
            {mega.columns.map((col) => (
              <div key={col.title} className="min-w-0 flex-1">
                <div className="mb-2 flex items-center gap-2">
                  {col.Icon && (
                    <span className="grid h-7 w-7 place-items-center rounded-md bg-surface-soft text-brand-blue">
                      <col.Icon size={15} />
                    </span>
                  )}
                  <h4 className="text-[11px] font-semibold uppercase tracking-[0.1em] text-ink-400">
                    {col.title}
                  </h4>
                </div>
                <ul className={col.cols === 2 ? 'grid grid-cols-2 gap-x-3' : ''}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        {...(link.external
                          ? { target: '_blank', rel: 'noopener noreferrer' }
                          : {})}
                        className={
                          link.highlight
                            ? 'group/link flex items-center justify-between gap-2 rounded-md border border-brand-gold/40 bg-brand-gold/10 px-2.5 py-[7px] text-[13px] font-semibold text-brand-bluedark transition-colors hover:bg-brand-gold/20'
                            : 'group/link flex items-center justify-between gap-2 rounded-md px-2.5 py-[7px] text-[13px] font-medium text-ink-600 transition-colors hover:bg-surface-soft hover:text-brand-blue'
                        }
                      >
                        <span className="whitespace-nowrap">{link.label}</span>
                        <ChevronRight
                          size={13}
                          className="shrink-0 -translate-x-1 text-brand-blue opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Image */}
          {mega.image && (
            <div className="relative w-[190px] shrink-0 overflow-hidden rounded-xl">
              <img
                src={mega.image}
                alt={label}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/75 via-brand-navy/10 to-transparent" />
              <span className="absolute inset-x-3 bottom-3 text-[13px] font-semibold leading-tight text-white">
                {label}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
