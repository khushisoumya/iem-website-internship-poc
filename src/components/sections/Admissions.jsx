import { FileText, ClipboardCheck, Users2, GraduationCap, ChevronRight, Download, BadgeCheck } from 'lucide-react'

const steps = [
  { Icon: FileText, title: 'Apply Online', desc: 'Fill the application form online' },
  { Icon: ClipboardCheck, title: 'Entrance Test', desc: 'Appear for the IEMJEE entrance test' },
  { Icon: Users2, title: 'Counselling', desc: 'Attend counselling session' },
  { Icon: GraduationCap, title: 'Admission', desc: 'Confirm your admission' },
]

export default function Admissions() {
  return (
    <section id="admissions" className="container-x py-14 lg:py-16">
      <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-card sm:p-8 lg:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          {/* Steps */}
          <div>
            <h3 className="text-xl font-bold text-ink-900 sm:text-2xl">Your Journey Starts Here</h3>
            <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4">
              {steps.map(({ Icon, title, desc }, i) => (
                <div key={title} className="relative flex flex-col items-start">
                  {/* connector */}
                  {i < steps.length - 1 && (
                    <span className="absolute left-12 top-5 hidden h-px w-[calc(100%-1rem)] bg-slate-200 sm:block" />
                  )}
                  <span className="relative z-10 grid h-11 w-11 place-items-center rounded-full bg-brand-blue text-white shadow-pill">
                    <Icon size={18} />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-ink-900">{title}</p>
                  <p className="mt-1 text-[12px] leading-snug text-ink-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col gap-3 lg:w-64 lg:border-l lg:border-slate-100 lg:pl-10">

  {/* Continue Application */}
  <a
    href="https://exam.iem.edu.in/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group relative overflow-hidden rounded-xl
      bg-brand-navy px-5 py-3 text-sm font-medium text-white
      transition-all duration-300
      hover:shadow-[0_12px_30px_rgba(22,86,196,0.25)]
      hover:-translate-y-1
    "
  >
    <span
      className="
        absolute inset-0 origin-left scale-x-0
        bg-brand-blue
        transition-transform duration-500
        group-hover:scale-x-100
      "
    />

    <span className="relative z-10 flex items-center justify-between">
      Continue Application
      <ChevronRight
        size={16}
        className="
          transition-transform duration-300
          group-hover:translate-x-1
        "
      />
    </span>
  </a>

  {/* Download Brochure */}
<a
  href="#"
  className="
    group relative overflow-hidden rounded-xl
    border border-slate-200 bg-white
    px-5 py-3 text-sm font-medium text-ink-700
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_12px_30px_rgba(22,86,196,0.20)]
    hover:border-brand-blue
  "
>
  <span
    className="
      absolute inset-0 origin-left scale-x-0
      bg-brand-blue
      transition-transform duration-500
      group-hover:scale-x-100
    "
  />

  <span className="relative z-10 flex items-center justify-between transition-colors duration-300 group-hover:text-white">
    Download Brochure

    <Download
      size={16}
      className="
        transition-all duration-300
        group-hover:translate-y-[-2px]
        group-hover:scale-110
      "
    />
  </span>
</a>

{/* Check Eligibility */}
<a
  href="#"
  className="
    group relative overflow-hidden rounded-xl
    border border-slate-200 bg-white
    px-5 py-3 text-sm font-medium text-ink-700
    transition-all duration-300
    hover:-translate-y-1
    hover:shadow-[0_12px_30px_rgba(22,86,196,0.20)]
    hover:border-brand-blue
  "
>
  <span
    className="
      absolute inset-0 origin-left scale-x-0
      bg-brand-blue
      transition-transform duration-500
      group-hover:scale-x-100
    "
  />

  <span className="relative z-10 flex items-center justify-between transition-colors duration-300 group-hover:text-white">
    Check Eligibility

    <BadgeCheck
      size={16}
      className="
        transition-all duration-300
        group-hover:scale-110
        group-hover:rotate-6
      "
    />
  </span>
</a>

</div>
        </div>
      </div>
    </section>
  )
}
