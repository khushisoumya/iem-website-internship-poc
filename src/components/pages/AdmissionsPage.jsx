import {
  ClipboardList, Phone, Info, ListChecks, Users, IndianRupee, Landmark,
  Headphones, ArrowRight, ShieldAlert, ChevronRight,
} from 'lucide-react'
import Reveal from '../common/Reveal'
import { IMAGES } from '../../data/images'

const fee945 = ['1st Sem: Rs.140,000/-', '2nd-8th Sem: Rs.115,000/- each']
const booking =
  'Booking Amount: Rs. 50,000/- For class 12th Appearing Student & Rs. 1,40,000/- For Passout Student'

const courses = [
  { course: 'B.Tech – CSE', years: '4 Years', qual: ['10th – 80%', '12th – 80%'], entrance: 'IEMJEE Counselling', fee: fee945, total: 'Total: Rs.9,45,000/-', apply: true },
  { course: 'B.Tech – CSE (AI)', years: '4 Years', qual: ['10th – 70%', '12th – 70%', 'PCM – 50%'], entrance: 'IEMJEE Counselling', fee: fee945, total: 'Total: Rs.9,45,000/-', apply: true },
  { course: 'B.Tech CSE (AI & ML)', years: '4 Years', qual: ['10th – 75%', '12th – 75%', 'PCM – 50%'], entrance: 'IEMJEE Counselling', fee: fee945, total: 'Total: Rs.9,45,000/-', apply: false },
  { course: 'B.Tech – CSE (DS), AI & DS, IOT, IOT CS BCT, Cyber Security, BIO-TECH', years: '4 Years', qual: ['10th – 60%', '12th – 60%', 'PCM – 45%'], entrance: 'IEMJEE Counselling', fee: fee945, total: 'Total: Rs.9,45,000/-', apply: true },
  { course: 'B.Tech – IT', years: '4 Years', qual: ['10th – 70%', '12th – 70%', 'PCM – 50%'], entrance: 'IEMJEE Counselling', fee: fee945, total: 'Total: Rs.9,45,000/-', apply: false },
  { course: 'B.Tech ECE / Electrical / Mechanical', years: '4 Years', qual: ['10th – 60%', '12th – 60%', 'PCM – 45%'], entrance: 'IEMJEE Counselling', fee: fee945, total: 'Total: Rs.9,45,000/-', apply: false },
  { course: 'BHM – Hotel Management', years: '4 Years', qual: ['10th – 60%', '12th – 60%'], entrance: 'IEMCET Counselling', fee: ['1st Sem: Rs.60,000/-', '2nd-8th Sem: Rs.15,000/- each'], total: 'Total: Rs.9,16,000/-', apply: true },
]

const antiRagging = [
  { step: 'Step 1', text: <>Visit <a href="https://www.antiragging.in" className="font-medium text-brand-blue hover:underline">www.antiragging.in</a></> },
  { step: 'Step 2', text: <>Click on “Fill Undertaking”</> },
  { step: 'Step 3', text: <>Click on “University” and fill up the student and parent details</> },
  { step: 'Step 4', text: <>Again visit <a href="https://www.antiragging.in" className="font-medium text-brand-blue hover:underline">www.antiragging.in</a></> },
  { step: 'Step 5', text: <>Click on “Undertaking Document” and put your reference number, registered phone no and mail id, you will get a pdf. You have to print out this copy and sign.</> },
]

// Reusable info-card shell with hover lift.
function InfoCard({ Icon, title, children }) {
  return (
    <div className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-cardhover sm:p-6">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-blue text-white shadow-pill transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105">
          <Icon size={22} />
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-[15px] font-bold text-brand-blue sm:text-base">{title}</h3>
          <div className="mt-2 text-[13px] leading-relaxed text-ink-600">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default function AdmissionsPage() {
  return (
    <>
      {/* ── Hero banner ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-navy">
        <img
          src={IMAGES.heroCampus}
          alt="IEM Campus"
          className="absolute inset-y-0 right-0 h-full w-2/3 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/95 to-brand-navy/30" />
        <div className="container-x relative py-12 sm:py-16">
          <nav className="flex items-center gap-1.5 text-[12.5px] text-white/70">
            <a href="#top" className="transition-colors hover:text-white">Home</a>
            <ChevronRight size={13} />
            <span className="text-white">Admission</span>
          </nav>
          <h1 className="mt-4 font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Admissions
          </h1>
          <p className="mt-2 max-w-md text-[14px] text-white/80">
            Start your journey towards a successful future with IEM.
          </p>
          <span className="mt-4 block h-1 w-20 rounded-full bg-brand-gold" />
        </div>
      </section>

      <div className="bg-white py-12 lg:py-16">
        <div className="container-x space-y-6">
          {/* ── Criteria + Helpline ─────────────────────────────── */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <InfoCard Icon={ClipboardList} title="Admission criteria for MBA FT and GM:">
                <ul className="space-y-1.5">
                  {['60% throughout', 'CAT / MAT Cleared', 'Have to appear for Aptitude and GD/PI'].map((t) => (
                    <li key={t} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </InfoCard>
            </Reveal>
            <Reveal delay={100}>
              <InfoCard Icon={Phone} title="Admission Helpline Number">
                <a href="tel:8010700500" className="block text-xl font-extrabold text-brand-blue transition-colors hover:text-brand-bluedark">
                  8010700500
                </a>
                <p className="mt-0.5 text-ink-500">We're here to help you!</p>
              </InfoCard>
            </Reveal>
          </div>

          {/* ── Address banner ──────────────────────────────────── */}
          <Reveal>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 transition-shadow duration-300 hover:shadow-card sm:p-6">
              <div className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white text-amber-500 shadow-soft">
                  <Info size={20} />
                </span>
                <div className="text-[13px] leading-relaxed text-ink-600">
                  <p>The IEM-UEM group's sole admission offices are located at the following addresses:</p>
                  <p className="mt-2"><b className="text-ink-900">IEM Ashram Building:</b> Ashram Building, 1st Floor, GN-34/2, Sector – V, Saltlake Electronics Complex, Kolkata – 700091, West Bengal, India.</p>
                  <p className="mt-2">
                    <b className="text-ink-900">UEM Building:</b> University Area, Plot No III-B/5, Main Arterial Road, New Town Action Area – III, Kolkata – 700160 &nbsp;|&nbsp; <b className="text-ink-900">UEM Jaipur:</b> Gurukul, Sikar Road Near Udaipuria, Rajasthan 303807
                  </p>
                  <p className="mt-2">
                    We do not operate any additional admission offices. Our official website is <a href="https://www.iem.edu.in" className="font-medium text-brand-blue hover:underline">www.iem.edu.in</a> &nbsp;|&nbsp; <b className="text-ink-900">Helpline:</b> 8010705000
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* ── Admission Step + Consideration ──────────────────── */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <InfoCard Icon={ListChecks} title="Admission Step">
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2"><CheckDot />Step 1: Documents Verification (For Newly allotted students)</li>
                  <li className="flex items-start gap-2"><CheckDot />Step 2: Payment (For Those who will take admission)</li>
                  <li className="flex items-start gap-2"><CheckDot />Step 3: Documents submission along with the Offline admission form (After submission of the entire documents student can get IT Report)</li>
                </ul>
              </InfoCard>
            </Reveal>
            <Reveal delay={100}>
              <InfoCard Icon={Users} title="Consideration">
                <p><b className="text-ink-900">Payment Mode:</b> NEFT / DD / NET Banking / Credit Card / Debit Card / Google Pay / Phone Pay</p>
                <p className="mt-2"><b className="text-ink-900">DD Name:</b> Institute of Engineering &amp; Management Trust</p>
              </InfoCard>
            </Reveal>
          </div>

          {/* ── Course table ────────────────────────────────────── */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-soft">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[820px] border-collapse text-left">
                  <thead>
                    <tr className="bg-brand-blue text-[13px] font-semibold text-white">
                      <th className="px-5 py-3.5">Course &amp; Stream</th>
                      <th className="px-5 py-3.5">Qualification</th>
                      <th className="px-5 py-3.5">Entrance</th>
                      <th className="px-5 py-3.5">Semester Fee</th>
                      <th className="px-5 py-3.5 text-center">Admission</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {courses.map((c) => (
                      <tr key={c.course} className="text-[12.5px] align-top transition-colors duration-200 hover:bg-surface-soft">
                        <td className="px-5 py-4">
                          <a href="#" className="font-bold text-brand-blue transition-colors hover:text-brand-bluedark hover:underline">{c.course}</a>
                          <p className="mt-0.5 text-ink-400">({c.years})</p>
                        </td>
                        <td className="px-5 py-4 text-ink-600">
                          {c.qual.map((q) => <p key={q}>{q}</p>)}
                        </td>
                        <td className="px-5 py-4 text-ink-600">{c.entrance}</td>
                        <td className="px-5 py-4 text-ink-600">
                          {c.fee.map((f) => <p key={f}>{f}</p>)}
                          <p className="mt-0.5 font-semibold text-ink-900">{c.total}</p>
                        </td>
                        <td className="px-5 py-4 text-center">
                          {c.apply ? (
                            <a
                              href="#"
                              className="inline-flex items-center justify-center rounded-md bg-brand-blue px-4 py-2 text-[12px] font-semibold text-white shadow-pill transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-bluedark hover:shadow-cardhover"
                            >
                              Apply Online
                            </a>
                          ) : (
                            <p className="text-[11.5px] leading-relaxed text-ink-500">
                              <b className="text-ink-900">Booking Amount:</b> Rs. 50,000/- For class 12th Appearing Student &amp; Rs. 1,40,000/- For Passout Student
                            </p>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-surface-muted py-3.5 text-center">
                <a href="#" className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-blue">
                  View All Courses &amp; Streams
                  <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* ── Payment + Bank details ──────────────────────────── */}
          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal>
              <InfoCard Icon={IndianRupee} title="Mode of Payment">
                <ul className="space-y-1.5">
                  <li className="flex items-start gap-2"><CheckDot />NEFT / DD / Google Pay / Phone Pay / Card Swipe / Net Banking</li>
                  <li className="flex items-start gap-2"><CheckDot /><span><b className="text-ink-900">Amount:</b> Rs. 6,500/- for Institute Uniform for all candidates.</span></li>
                  <li className="flex items-start gap-2"><CheckDot /><span><b className="text-ink-900">Amount:</b> Rs. 1,000/- for Medical Fitness Report for all candidates.</span></li>
                </ul>
              </InfoCard>
            </Reveal>
            <Reveal delay={100}>
              <InfoCard Icon={Landmark} title="NEFT/RTGS DETAILS">
                <dl className="space-y-1">
                  <p><b className="text-ink-900">A/C Name:</b> Institute of Engineering &amp; Management Trust</p>
                  <p><b className="text-ink-900">Name of the bank:</b> Indian Overseas Bank</p>
                  <p><b className="text-ink-900">A/C No:</b> 162010000000348</p>
                  <p><b className="text-ink-900">IFSC Code:</b> IOBA0001620</p>
                  <p><b className="text-ink-900">VD SHOULD BE IN FAVOUR OF:</b> Institute of Engineering &amp; Management Trust</p>
                </dl>
              </InfoCard>
            </Reveal>
          </div>

          {/* ── Anti-ragging banner ─────────────────────────────── */}
          <Reveal>
            <div className="rounded-2xl border border-blue-100 bg-surface-soft p-5 transition-shadow duration-300 hover:shadow-card sm:p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white text-brand-blue shadow-soft">
                  <ShieldAlert size={18} />
                </span>
                <h3 className="text-[14.5px] font-bold text-ink-900">Some Information Regarding Anti Ragging Application Form</h3>
              </div>
              <div className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
                {antiRagging.map((s) => (
                  <p key={s.step} className="text-[13px] leading-relaxed text-ink-600">
                    <b className="text-brand-blue">{s.step}:</b> {s.text}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* ── Help line banner ────────────────────────────────── */}
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 transition-shadow duration-300 hover:shadow-card">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white text-amber-500 shadow-soft">
                <Headphones size={19} />
              </span>
              <p className="text-[14px] font-semibold text-ink-900">
                Admission Help Line Number: <span className="text-brand-blue">8010700500</span>
                <span className="mx-2 text-ink-300">/</span>
                Mr. Soumenn Biswas: <span className="text-brand-blue">+91 9674005986</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  )
}

function CheckDot() {
  return <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-blue" />
}
