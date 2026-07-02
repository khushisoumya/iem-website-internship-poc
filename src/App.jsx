import { useEffect, useState } from 'react'
import TopBar from './components/layout/TopBar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Loader from './components/common/Loader'
import EnquiryModal from './components/common/EnquiryModal'

import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Rankings from './components/sections/Rankings'
import Admissions from './components/sections/Admissions'
import Programs from './components/sections/Programs'
import Global from './components/sections/Global'
import Placements from './components/sections/Placements'
import StatsBand from './components/sections/StatsBand'
import Campus from './components/sections/Campus'
import News from './components/sections/News'
import CtaBand from './components/sections/CtaBand'

import AdmissionsPage from './components/pages/AdmissionsPage'
import PlacementOverviewPage from './components/pages/PlacementOverviewPage'
import AboutUsPage from './components/pages/AboutUsPage'
import ContactUsPage from './components/pages/ContactUsPage'
import InnovationProjectsPage from './components/pages/InnovationProjectsPage'
import DepartmentPage from './components/Departments/DepartmentPage'
import Academics from './components/academics/Academics'
import AboutIemPage from './components/About/About'

// Hashes that resolve to the full Admissions page (every Admissions dropdown
// sub-link except IEMJEE).
const ADMISSIONS_ROUTES = [
  '#/admission-process',
  '#/eligibility-criteria',
  '#/fee-structure',
  '#/scholarships',
  '#/education-loan',
]

const PLACEMENT_ROUTE = '#/placement-overview'
const CONTACT_ROUTE = '#/contact-us'
const ABOUT_ROUTE = '#/about-us'
const ABOUT_IEM_ROUTE = '#/about-iem'
const ACADEMICS_ROUTE = '#/academics'
const ACADEMICS_PREFIX = '#/academics/'
const INNOVATION_ROUTE = '#/research/innovation'

export default function App() {
  const [hash, setHash] = useState(() => (typeof window !== 'undefined' ? window.location.hash : ''))
  const [enquiryOpen, setEnquiryOpen] = useState(false)

  useEffect(() => {
    const onHash = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  // Open the admission enquiry popup shortly after the intro loader clears.
  useEffect(() => {
    const t = setTimeout(() => setEnquiryOpen(true), 3200)
    return () => clearTimeout(t)
  }, [])

  const isAdmissionsPage = ADMISSIONS_ROUTES.includes(hash)
  const isPlacementPage = hash === PLACEMENT_ROUTE
  const isContactPage = hash === CONTACT_ROUTE
  const isAboutPage = hash === ABOUT_ROUTE
  const isAboutIemPage = hash === ABOUT_IEM_ROUTE
  const isAcademicsPage = hash === ACADEMICS_ROUTE
  const isInnovationPage = hash === INNOVATION_ROUTE
  const isDepartmentPage = hash.startsWith(ACADEMICS_PREFIX)
  const departmentSlug = isDepartmentPage ? hash.slice(ACADEMICS_PREFIX.length) : null
  const isRoutedPage =
    isAdmissionsPage ||
    isPlacementPage ||
    isContactPage ||
    isAboutPage ||
    isAboutIemPage ||
    isAcademicsPage ||
    isInnovationPage ||
    isDepartmentPage

  // Scroll to top when entering a routed page; scroll to the anchor when
  // returning to a homepage section from another page.
  useEffect(() => {
    if (isRoutedPage) {
      window.scrollTo({ top: 0 })
    } else if (hash && hash !== '#top' && !hash.startsWith('#/')) {
      const el = document.querySelector(hash)
      if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth' }))
    }
  }, [hash, isRoutedPage])

  return (
    <div className="min-h-screen bg-white">
      <Loader />
      <EnquiryModal open={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
      <TopBar />
      <Navbar />
      <main>
        {isRoutedPage ? (
          // Every routed subpage shares the same CtaBand just above the footer.
          <>
            {isAdmissionsPage ? (
              <AdmissionsPage />
            ) : isPlacementPage ? (
              <PlacementOverviewPage />
            ) : isContactPage ? (
              <ContactUsPage />
            ) : isAboutPage ? (
              <AboutUsPage />
            ) : isAboutIemPage ? (
              <AboutIemPage />
            ) : isAcademicsPage ? (
              <Academics />
            ) : isInnovationPage ? (
              <InnovationProjectsPage />
            ) : isDepartmentPage ? (
              <DepartmentPage slug={departmentSlug} />
            ) : null}
            <CtaBand />
          </>
        ) : (
          <>
            <Hero />
            <About />
            <Rankings />
            <Admissions />
            <Programs />
            <Global />
            <Placements />
            <StatsBand />
            <Campus />
            <News />
            <CtaBand />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}
