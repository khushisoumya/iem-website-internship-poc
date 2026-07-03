import {
  MapPin,
  Phone,
  Printer,
  Mail,
  Bus,
  BedDouble,
  ArrowRight,
} from 'lucide-react'
import Reveal from '../common/Reveal'
import PageHeader from '../common/PageHeader'
import ContactForm from './ContactForm'
import { IMAGES } from '../../data/images'
import buildingImg from '../../assets/images/building2.png'

/* ────────────────────────────────────────────────────────────────────────
   LOCAL-FIRST office imagery. Drop files named iem1.png, iem2.jpg, … into
   src/assets/images/ and each office card picks them up automatically by key.
   Missing files fall back to the campus building image so the page always
   renders. (The Bus & Hostel form images are kept as-is.)
   ──────────────────────────────────────────────────────────────────────── */
const iemModules = import.meta.glob(
  '../../assets/images/iem*.{png,jpg,jpeg,webp,avif,PNG,JPG,JPEG,WEBP,AVIF}',
  { eager: true, query: '?url', import: 'default' },
)
const iemImages = {}
for (const [path, url] of Object.entries(iemModules)) {
  const base = path.split('/').pop().replace(/\.[^.]+$/, '').toLowerCase()
  iemImages[base] = url
}
const iem = (key) => iemImages[key] ?? buildingImg

/* ────────────────────────────────────────────────────────────────────────
   Data — campus offices & contact directory (mirrors iem.edu.in)
   ──────────────────────────────────────────────────────────────────────── */

const OFFICES = [
  {
    title: 'IEM Group Admissions Office',
    image: iem('iem1'),
    address:
      'Ashram Building, GN-34/2, Sector – V, Saltlake Electronics Complex, Kolkata – 700 091, West Bengal, India. (Next to Cognizant Technology Solutions Private Ltd, Near SDF Building, Opposite to Nalban)',
    lines: [
      { Icon: Phone, label: 'Phone No.', value: '+91 3323572995, +91 3323572059' },
      { Icon: Printer, label: 'Fax No.', value: '+91 33 2357 2995' },
      { Icon: Mail, label: 'Email (Admissions)', value: 'admissions@iem.edu.in' },
    ],
  },
  {
    title: 'IEM Group Administration Office',
    image: iem('iem2'),
    address:
      '120 SDF Building, Saltlake Electronics Complex, Calcutta - 700091, West Bengal, India.',
    lines: [
      { Icon: Phone, label: 'Phone No.', value: '+91 33 2357 8189' },
      { Icon: Mail, label: 'Email (General)', value: 'director@iem.edu.in' },
      { Icon: Mail, label: 'Job enquiries', value: 'jobs@iem.edu.in' },
    ],
  },
  {
    title: 'IEM – College of Engineering',
    image: iem('iem3'),
    address:
      'Gurukul, Y-12, Block -EP, Sector-V, Salt Lake Electronics Complex, Kolkata – 700 091, West Bengal, India.',
    lines: [
      { Icon: Phone, label: 'Phone No.', value: '+91 33 2357 2969, +91 33 2357 7649' },
      { Icon: Printer, label: 'Fax No.', value: '+91 33 2357 8302' },
    ],
  },
  {
    title: 'IEM – College of Management',
    image: iem('iem4'),
    address:
      'Management House, D-1, Sector-V, Saltlake Electronics Complex, Kolkata – 700 091, West Bengal, India.',
    lines: [{ Icon: Phone, label: 'Phone No.', value: '+91 33 2357 8908' }],
  },
  {
    title: 'IEM – School of Information Technology',
    image: iem('iem5'),
    address:
      'Ashram Building, GN-34/2, Sector – V, Saltlake Electronics Complex, Kolkata – 700 091, West Bengal, India.',
    lines: [
      { Icon: Phone, label: 'Phone No.', value: '+91 33 2357 2995' },
      { Icon: Printer, label: 'Fax No.', value: '+91 33 2357 2995' },
    ],
  },
  {
    title: 'IEM Dhaka (Bangladesh) Office',
    image: iem('iem6'),
    address: '2/4 Mirpur Road, South Kallyanpur, Dhaka – 1207, Bangladesh.',
    lines: [
      {
        Icon: Phone,
        label: 'Phone No.',
        value: '0088-02-9004343, 9010088, 0088-01552396189, 0711907373',
      },
    ],
  },
]

const FORMS = [
  {
    title: 'IEM Bus Service Form',
    Icon: Bus,
    image: IMAGES.campusSports,
    cta: 'IEM Bus Service Form',
    href: '#',
  },
  {
    title: 'IEM Hostel Form',
    Icon: BedDouble,
    image: IMAGES.campusHostel,
    cta: 'IEM Hostel Form',
    href: '#',
  },
]

/* ────────────────────────────────────────────────────────────────────────
   Office card — dark navy card, image header, blue title bar, contact rows
   ──────────────────────────────────────────────────────────────────────── */

function OfficeCard({ office }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-brand-navy via-brand-navy2 to-[#0a142e] p-3 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_-12px_rgba(11,31,68,0.7)]">
      {/* soft corner glow that lights up on hover */}
      <span className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-blue/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* image header */}
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={office.image}
          alt={office.title}
          loading="lazy"
          className="h-40 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-navy/70 to-transparent" />
      </div>

      {/* blue title bar */}
      <div className="relative z-10 -mt-5 mx-2 rounded-xl bg-gradient-to-r from-brand-bluedark via-brand-blue to-brand-sky px-4 py-2.5 text-center shadow-pill">
        <h3 className="text-[13.5px] font-semibold leading-tight text-white">{office.title}</h3>
      </div>

      {/* details */}
      <div className="flex flex-1 flex-col gap-3 px-3 pb-2 pt-4">
        <p className="flex gap-2 text-[12.5px] leading-relaxed text-white/70">
          <MapPin size={15} className="mt-0.5 shrink-0 text-brand-gold" />
          <span>{office.address}</span>
        </p>
        <ul className="mt-1 space-y-2 border-t border-white/10 pt-3">
          {office.lines.map((l) => (
            <li key={l.label} className="flex items-start gap-2 text-[12.5px] text-white/80">
              <l.Icon size={14} className="mt-0.5 shrink-0 text-brand-sky" />
              <span>
                <span className="font-semibold text-white">{l.label}:</span> {l.value}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────
   Form card — image with an overlaid pill button, lifts + zooms on hover
   ──────────────────────────────────────────────────────────────────────── */

function FormCard({ form }) {
  const { Icon } = form
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-cardhover">
      <div className="relative overflow-hidden">
        <img
          src={form.image}
          alt={form.title}
          loading="lazy"
          className="h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>
      <div className="flex items-center justify-center p-5">
        <a
          href={form.href}
          className="group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-brand-blue px-6 py-3 text-[13.5px] font-semibold text-white shadow-pill transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(22,86,196,0.42)] active:scale-95"
        >
          <span className="absolute inset-0 origin-left scale-x-0 bg-brand-bluedark transition-transform duration-500 group-hover/btn:scale-x-100" />
          <Icon size={16} className="relative z-10" />
          <span className="relative z-10">{form.cta}</span>
          <ArrowRight
            size={15}
            className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
          />
        </a>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────
   Page
   ──────────────────────────────────────────────────────────────────────── */

export default function ContactUsPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        crumb="Contact Us"
        subtitle="IEM is a place where innovation meets education. Reach out to any of our campuses and offices — we are committed to nurturing talent, fostering research, and shaping the leaders of tomorrow."
      />

      {/* ── Enquiry / contact form — placed first ───────────────── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="container-x">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="section-eyebrow">Enquire Now</span>
            <h2 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Have a Question? Write to Us
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
              Send us your enquiry and our team will get back to you promptly via email or phone.
            </p>
          </div>
          <Reveal y={30}>
            <div className="mx-auto max-w-4xl">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Offices directory ───────────────────────────────────── */}
      <section className="bg-surface-muted py-14 lg:py-20">
        
      
        <div className="container-x">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <span className="section-eyebrow">Our Offices</span>
            <h2 className="font-display text-3xl font-extrabold text-ink-900 sm:text-4xl">
             We're Here to Help
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-500">
              Reach out to our admissions, administration, and campus offices across IEM, Our team is here to assist you.
            </p>
          </div>
         
        </div>
      
        <div className="container-x">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {OFFICES.map((office, i) => (
              <Reveal key={office.title} delay={i * 90} y={26}>
                <OfficeCard office={office} />
              </Reveal>
            ))}
          </div>

          {/* Bus & Hostel forms */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {FORMS.map((form, i) => (
              <Reveal key={form.title} delay={i * 120} y={26}>
                <FormCard form={form} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
