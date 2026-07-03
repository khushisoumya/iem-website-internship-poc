import { useState } from 'react'
import {
  User, Mail, Phone, MapPin, BookOpen,
  CalendarDays, MessageSquare, Send, CheckCircle2, Loader2, AlertCircle,
} from 'lucide-react'


const CONTACT_FORM_EMAIL = 'angshuman.ux@gmail.com'
const ENDPOINT = `https://formsubmit.co/ajax/${encodeURIComponent(CONTACT_FORM_EMAIL)}`

const CAMPUSES = ['Ashram', 'Gurukul', 'Management']
const DEPARTMENTS = [
  'Computer Science & Engineering (CSE)',
  'CSE (AI & Machine Learning)',
  'CSE (AI & Data Science)',
  'CSE (Data Science)',
  'CSE (Artificial Intelligence)',
  'CSE (Cyber Security)',
  'CSE (Internet of Things)',
  'Information Technology (IT)',
  'Electronics & Communication (ECE)',
  'Electrical Engineering (EE)',
  'Electrical & Electronics (EEE)',
  'Mechanical Engineering (ME)',
  'Biotechnology',
  'BCA / MCA',
  'BBA / MBA',
  'Other',
]
const YEARS = ['1st Year', '2nd Year', '3rd Year', '4th Year', 'Other']

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_RE = /^[+]?[\d\s-]{7,15}$/

const EMPTY = {
  name: '', email: '', contact: '',
  campus: '', department: '', year: '', message: '',
}

function validate(form) {
  const e = {}
  if (!form.name.trim()) e.name = 'Please enter your name.'
  if (!form.email.trim()) e.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(form.email)) e.email = 'Enter a valid email address.'
  if (!form.contact.trim()) e.contact = 'Please enter your contact number.'
  else if (!PHONE_RE.test(form.contact)) e.contact = 'Enter a valid phone number.'
  if (!form.campus) e.campus = 'Please choose a campus.'
  if (!form.department) e.department = 'Please select a department.'
  if (!form.year) e.year = 'Please select a year.'
  if (!form.message.trim()) e.message = 'Please write your enquiry or message.'
  else if (form.message.trim().length < 10) e.message = 'Please add a little more detail (min. 10 characters).'
  return e
}

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | submitting | success | error

  const set = (k) => (e) => {
    const value = e && e.target ? e.target.value : e
    setForm((f) => ({ ...f, [k]: value }))
    // Clear a field's error as soon as the user edits it.
    setErrors((prev) => (prev[k] ? { ...prev, [k]: undefined } : prev))
  }

  const submit = async (e) => {
    e.preventDefault()
    const found = validate(form)
    if (Object.keys(found).length) {
      setErrors(found)
      return
    }
    setErrors({})
    setStatus('submitting')

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New enquiry from ${form.name}`,
          Name: form.name,
          Email: form.email,
          Contact: form.contact,
          Campus: form.campus,
          Department: form.department,
          Year: form.year,
          Message: form.message,
        }),
      })
      if (!res.ok) throw new Error(`Request failed (${res.status})`)
      setStatus('success')
      setForm(EMPTY)
    } catch (err) {
      setStatus('error')
    }
  }

  /* ── Success state ─────────────────────────────────────────── */
  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-slate-100 bg-white px-6 py-16 text-center shadow-card">
        <span className="grid h-20 w-20 place-items-center rounded-full bg-emerald-50 text-emerald-500 animate-[fade-up_0.5s_ease-out]">
          <CheckCircle2 size={44} />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold text-ink-900">
          Your message has been submitted
        </h3>
        <p className="mt-3 max-w-md text-[14px] leading-relaxed text-ink-500">
          Thank you for reaching out to IEM. We will reply via email or contact you on your
          provided number shortly.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-primary mt-8 px-7 py-3"
        >
          Send another message
        </button>
      </div>
    )
  }

  const submitting = status === 'submitting'

  return (
    <div className="grid overflow-hidden rounded-3xl bg-white shadow-card lg:grid-cols-[0.85fr_1.15fr]">
      {/* ── Left info panel — clean, solid, professional ──────── */}
      <div className="relative hidden flex-col bg-brand-navy p-9 text-white lg:flex">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold">
          Get in touch
        </span>
        <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-white">
          Send Us a Message
        </h3>
        <p className="mt-3 text-[13.5px] leading-relaxed text-white/70">
          Have a question about admissions, academics or campus life? Fill in the form and the
          right team will get back to you.
        </p>

        <div className="mt-9 h-px w-full bg-white/10" />

        <ul className="mt-8 space-y-5 text-[13.5px]">
          <li className="flex items-start gap-3.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-brand-gold">
              <Phone size={16} />
            </span>
            <span className="pt-1.5 text-white/85">+91 33 2357 2995 · +91 33 2357 2059</span>
          </li>
          <li className="flex items-start gap-3.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-brand-gold">
              <Mail size={16} />
            </span>
            <span className="pt-1.5 text-white/85">admissions@iem.edu.in</span>
          </li>
          <li className="flex items-start gap-3.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/[0.06] text-brand-gold">
              <MapPin size={16} />
            </span>
            <span className="pt-1.5 text-white/85">Ashram · Gurukul · Management campuses</span>
          </li>
        </ul>

        <p className="mt-auto pt-10 text-[12.5px] text-white/50">
          We typically respond within one working day.
        </p>
      </div>

      {/* ── Right form panel ──────────────────────────────────── */}
      <div className="p-6 sm:p-9">
        <form onSubmit={submit} noValidate className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              Icon={User} label="Full Name" placeholder="e.g. Riya Sharma"
              value={form.name} onChange={set('name')} error={errors.name}
            />
            <Field
              Icon={Phone} label="Contact Number" type="tel" placeholder="e.g. +91 98765 43210"
              value={form.contact} onChange={set('contact')} error={errors.contact}
            />
          </div>

          <Field
            Icon={Mail} label="Email Address" type="email" placeholder="you@example.com"
            value={form.email} onChange={set('email')} error={errors.email}
          />

          {/* Campus — segmented control */}
          <div>
            <FieldLabel>Campus</FieldLabel>
            <div className="grid grid-cols-3 gap-2">
              {CAMPUSES.map((c) => {
                const active = form.campus === c
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => set('campus')(c)}
                    className={`flex items-center justify-center gap-1.5 rounded-xl border px-2 py-3 text-[13px] font-semibold transition-all duration-300 ${
                      active
                        ? 'border-brand-blue bg-brand-blue text-white shadow-pill'
                        : 'border-slate-200 bg-surface-muted text-ink-600 hover:border-brand-blue/40 hover:text-ink-900'
                    }`}
                  >
                    <MapPin size={14} className="shrink-0" />
                    {c}
                  </button>
                )
              })}
            </div>
            <FieldError>{errors.campus}</FieldError>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <SelectField
              Icon={BookOpen} label="Department" value={form.department}
              onChange={set('department')} error={errors.department}
              placeholder="Select department" options={DEPARTMENTS}
            />
            <SelectField
              Icon={CalendarDays} label="Year" value={form.year}
              onChange={set('year')} error={errors.year}
              placeholder="Select year" options={YEARS}
            />
          </div>

          {/* Message */}
          <div>
            <FieldLabel>Enquiry / Message</FieldLabel>
            <div
              className={`flex gap-2.5 rounded-xl border bg-surface-muted px-3.5 py-3 transition-colors focus-within:border-brand-blue ${
                errors.message ? 'border-red-400' : 'border-slate-200'
              }`}
            >
              <MessageSquare size={17} className="mt-0.5 shrink-0 text-ink-400" />
              <textarea
                rows={4}
                value={form.message}
                onChange={set('message')}
                placeholder="Tell us how we can help…"
                className="w-full resize-none bg-transparent text-sm text-ink-700 outline-none placeholder:text-ink-400"
              />
            </div>
            <FieldError>{errors.message}</FieldError>
          </div>

          {status === 'error' && (
            <div className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-[13px] text-red-600">
              <AlertCircle size={16} className="mt-0.5 shrink-0" />
              <span>
                Something went wrong while sending your message. Please try again, or email us
                directly at admissions@iem.edu.in.
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="btn-primary w-full py-3.5 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? (
              <>
                <Loader2 size={17} className="animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <Send size={16} />
                Submit Message
              </>
            )}
          </button>
          <p className="text-center text-[11.5px] text-ink-400">
            By submitting, you agree to be contacted by the IEM Group via email or phone.
          </p>
        </form>
      </div>
    </div>
  )
}

/* ── Small presentational helpers ─────────────────────────────── */

function FieldLabel({ children }) {
  return <span className="mb-1.5 block text-[12.5px] font-semibold text-ink-700">{children}</span>
}

function FieldError({ children }) {
  if (!children) return null
  return <p className="mt-1.5 text-[11.5px] font-medium text-red-500">{children}</p>
}

function Field({ Icon, label, error, ...props }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <label
        className={`flex items-center gap-2.5 rounded-xl border bg-surface-muted px-3.5 py-3 transition-colors focus-within:border-brand-blue ${
          error ? 'border-red-400' : 'border-slate-200'
        }`}
      >
        <Icon size={17} className="shrink-0 text-ink-400" />
        <input
          {...props}
          className="w-full bg-transparent text-sm text-ink-700 outline-none placeholder:text-ink-400"
        />
      </label>
      <FieldError>{error}</FieldError>
    </div>
  )
}

function SelectField({ Icon, label, error, placeholder, options, ...props }) {
  return (
    <div>
      <FieldLabel>{label}</FieldLabel>
      <label
        className={`flex items-center gap-2.5 rounded-xl border bg-surface-muted px-3.5 py-3 transition-colors focus-within:border-brand-blue ${
          error ? 'border-red-400' : 'border-slate-200'
        }`}
      >
        <Icon size={17} className="shrink-0 text-ink-400" />
        <select
          {...props}
          className={`w-full bg-transparent text-sm outline-none ${
            props.value ? 'text-ink-700' : 'text-ink-400'
          }`}
        >
          <option value="" disabled>{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o} className="text-ink-700">{o}</option>
          ))}
        </select>
      </label>
      <FieldError>{error}</FieldError>
    </div>
  )
}
