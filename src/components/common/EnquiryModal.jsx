import { useEffect, useState } from 'react'
import { X, GraduationCap, User, Mail, Phone, BookOpen, Send, CheckCircle2 } from 'lucide-react'

const PROGRAMS = [
  'B.Tech — Engineering',
  'BBA / MBA — Management',
  'BCA / MCA',
  'BHM — Hotel Management',
  'LL.B / LL.M — Law',
]

// Modern admission-enquiry popup. Rendered by App and shown shortly after load.
// Closes on the X button, backdrop click, or Escape.
export default function EnquiryModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', program: PROGRAMS[0] })

  // Escape to close + lock background scroll while open.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-[90] grid place-items-center p-4">
      {/* backdrop */}
      <div
        className="absolute inset-0 bg-brand-navy/70 backdrop-blur-sm animate-[fade-up_0.3s_ease-out]"
        onClick={onClose}
      />

      {/* dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Admission enquiry"
        className="relative grid w-full max-w-3xl animate-[fade-up_0.45s_ease-out] overflow-hidden rounded-3xl bg-white shadow-cardhover md:grid-cols-[0.9fr_1.1fr]"
      >
        {/* close button */}
        <button
          onClick={onClose}
          aria-label="Close enquiry form"
          className="absolute right-4 top-4 z-20 grid h-9 w-9 place-items-center rounded-full bg-white/80 text-ink-700 shadow-soft backdrop-blur transition-all duration-300 hover:rotate-90 hover:bg-brand-blue hover:text-white"
        >
          <X size={18} />
        </button>

        {/* left visual panel */}
        <div className="relative hidden overflow-hidden bg-gradient-to-br from-brand-bluedark via-brand-blue to-brand-navy p-8 text-white md:block">
          <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <span className="pointer-events-none absolute -bottom-12 -left-8 h-44 w-44 rounded-full bg-brand-sky/20 blur-2xl" />
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] backdrop-blur">
            <GraduationCap size={14} className="text-brand-gold" />
            Session 2026
          </span>
          <h3 className="mt-6 font-display text-3xl font-extrabold leading-tight text-white">
            Begin Your Journey at IEM
          </h3>
          <p className="mt-3 text-[13.5px] leading-relaxed text-white/80">
            Share a few details and our admission team will reach out with everything you need to
            know about programs, fees and scholarships.
          </p>
          <ul className="mt-6 space-y-2.5 text-[13px] text-white/85">
            {['NAAC A+ Accredited', '95% Placement Rate', '500+ Recruiters'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-brand-gold" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* right form panel */}
        <div className="p-7 sm:p-9">
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center py-8 text-center">
              <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-50 text-emerald-500">
                <CheckCircle2 size={34} />
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-ink-900">Thank you!</h3>
              <p className="mt-2 max-w-xs text-[13.5px] leading-relaxed text-ink-500">
                Your enquiry has been received. Our admission team will contact you shortly.
              </p>
              <button onClick={onClose} className="btn-primary mt-6 px-6 py-2.5">
                Close
              </button>
            </div>
          ) : (
            <>
              <h3 className="font-display text-xl font-bold text-ink-900 sm:text-2xl">
                Admission Enquiry
              </h3>
              <p className="mt-1 text-[13px] text-ink-500">
                Fill in the form — it only takes a minute.
              </p>

              <form onSubmit={submit} className="mt-6 space-y-4">
                <Field Icon={User} placeholder="Full Name" value={form.name} onChange={set('name')} required />
                <Field Icon={Mail} type="email" placeholder="Email Address" value={form.email} onChange={set('email')} required />
                <Field Icon={Phone} type="tel" placeholder="Phone Number" value={form.phone} onChange={set('phone')} required />

                <label className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-surface-muted px-3.5 py-3 transition-colors focus-within:border-brand-blue">
                  <BookOpen size={17} className="shrink-0 text-ink-400" />
                  <select
                    value={form.program}
                    onChange={set('program')}
                    className="w-full bg-transparent text-sm text-ink-700 outline-none"
                  >
                    {PROGRAMS.map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </label>

                <button type="submit" className="btn-primary w-full py-3">
                  <Send size={16} />
                  Submit Enquiry
                </button>
                <p className="text-center text-[11px] text-ink-400">
                  By submitting you agree to be contacted by the IEM admission team.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

function Field({ Icon, ...props }) {
  return (
    <label className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-surface-muted px-3.5 py-3 transition-colors focus-within:border-brand-blue">
      <Icon size={17} className="shrink-0 text-ink-400" />
      <input
        {...props}
        className="w-full bg-transparent text-sm text-ink-700 outline-none placeholder:text-ink-400"
      />
    </label>
  )
}
