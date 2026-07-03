import {
  Info, UserCog, Building2, Cpu, BookOpen, FileText, ScrollText,
  Dumbbell, Camera, Trophy, Award, Handshake, FlaskConical, Briefcase,
} from 'lucide-react'
import { IMAGES } from './images'

// Navigation model. Items with a `mega` block render a hover dropdown card.
// Every dropdown shares the same width/layout: link columns on the left and a
// single image on the right. Content mirrors the live iem.edu.in menu.
export const menu = [
  { label: 'Home', href: '#top' },

  {
    label: 'About IEM',
    href: '#/about-iem',
    mega: {
      align: 'left',
      image: IMAGES.aboutVideo,
      columns: [
        {
          title: 'The Institute',
          Icon: Info,
          links: [
            { label: 'About Us', href: '#/about-us' },
            { label: 'About IEM', href: '#/about-iem' },
            { label: 'Vision & Mission', href: '#' },
            { label: 'About Management', href: '#' },
            { label: 'Infrastructure', href: '#campus' },
            { label: 'Sustainability', href: '#' },
          ],
        },
        {
          title: 'Academics Office',
          Icon: UserCog,
          links: [
            { label: 'Office of the Dean', href: '#' },
            { label: 'Faculty', href: '#' },
            { label: 'Notices', href: '#' },
            { label: 'Grievance Redressal', href: '#' },
          ],
        },
      ],
    },
  },

  {
    label: 'Group',
    href: '#',
    mega: {
      align: 'left',
      image: IMAGES.heroCampus,
      columns: [
        {
          title: 'Our Campuses',
          Icon: Building2,
          cols: 2,
          links: [
            { label: 'IEM Salt Lake', href: 'https://iem.edu.in/', external: true },
            { label: 'IEM Newtown', href: 'https://uem.edu.in/uem-kolkata/', external: true },
            { label: 'UEM Kolkata', href: 'https://uem.edu.in/uem-kolkata/', external: true },
            { label: 'UEM Jaipur', href: 'https://uem.edu.in/uem-jaipur/', external: true },
            { label: 'IEM Management House', href: 'https://iem.edu.in/', external: true },
          ],
        },
      ],
    },
  },

  {
    label: 'Academics',
    href: '#/academics',
    mega: {
      align: 'left',
      wide: true,
      image: IMAGES.programEngineering,
      columns: [
        {
          title: 'Engineering',
          Icon: Cpu,
          links: [
            { label: 'Computer Sc. & Engg.', href: '#/academics/cse' },
            { label: 'CSE — AI & ML', href: '#/academics/cse-ai-ml' },
            { label: 'CSE — AI & Data Sc.', href: '#/academics/cse-ai-data-science' },
            { label: 'CSE — Data Science', href: '#/academics/cse-data-science' },
            { label: 'CSE — Cyber Security', href: '#/academics/cse-cyber-security' },
            { label: 'CSE — Internet of Things', href: '#/academics/cse-iot' },
            { label: 'Information Technology', href: '#/academics/it' },
            { label: 'Electronics & Comm.', href: '#/academics/ece' },
            { label: 'Electrical Engineering', href: '#/academics/ee' },
            { label: 'Mechanical Engineering', href: '#/academics/mechanical' },
            { label: 'Biotechnology', href: '#/academics/biotechnology' },
            { label: 'View All Departments →', href: '#/academics' },
          ],
        },
        {
          title: 'Management & Applications',
          Icon: Briefcase,
          links: [
            { label: 'MBA', href: '#/academics/mba' },
            { label: 'BBA', href: '#/academics/bba' },
            { label: 'MCA', href: '#/academics/mca' },
            { label: 'BCA', href: '#/academics/bca' },
            { label: 'Law', href: '#/academics/law' },
            { label: 'Hotel Mgmt (BHM)', href: '#/academics/bhm' },
            { label: 'Basic Sc. & Humanities (BSH)', href: '#/academics/bsh' },
          ],
        },
        {
          title: 'Resources',
          Icon: BookOpen,
          links: [
            { label: 'Scholarships', href: '#' },
            { label: 'Library', href: '#' },
            { label: 'Academic Calendar', href: '#' },
            { label: 'IEM LMS', href: 'https://courses.iemverse.ai/', external: true },
            { label: 'IEMA Tutor', href: 'https://www.iema.ai/', external: true },
          ],
        },
      ],
    },
  },

  {
    label: 'Admissions',
    href: '#/admission-process',
    mega: {
      align: 'left',
      image: IMAGES.programManagement,
      columns: [
        {
          title: 'Admissions',
          Icon: FileText,
          links: [
            { label: 'Admission Process', href: '#/admission-process' },
            { label: 'IEMJEE 2026', href: '#admissions' },
            { label: 'Eligibility Criteria', href: '#/eligibility-criteria' },
          ],
        },
        {
          title: 'Fees & Aid',
          Icon: ScrollText,
          links: [
            { label: 'Fee Structure', href: '#/fee-structure' },
            { label: 'Scholarships', href: '#/scholarships' },
            { label: 'Education Loan', href: '#/education-loan' },
          ],
        },
      ],
    },
  },

  {
    label: 'Campus Life',
    href: '#campus',
    mega: {
      align: 'right',
      image: IMAGES.campusLife,
      columns: [
        {
          title: 'Student Life',
          Icon: Dumbbell,
          links: [
            { label: 'Galleries', href: '#campus' },
            { label: 'Sports', href: '#' },
            { label: 'Gymkhana', href: '#' },
            { label: 'IEM MUN', href: '#' },
            { label: 'Cultural Events', href: '#' },
            { label: 'Professional Society', href: '#' },
          ],
        },
        {
          title: 'Publications & Events',
          Icon: Camera,
          links: [
            { label: 'Techniche Magazine', href: '#' },
            { label: 'IEM Magazine', href: '#' },
            { label: 'IEM Newsletter', href: '#' },
            { label: 'Seminars & Workshops', href: '#' },
            { label: 'Conferences', href: '#' },
            { label: 'Event Reports', href: '#' },
          ],
        },
      ],
    },
  },

  {
    label: 'Placements',
    href: '#/placement-overview',
    mega: {
      align: 'right',
      image: IMAGES.placementTeam,
      columns: [
        {
          title: 'Placements',
          Icon: Trophy,
          links: [
            { label: 'Placement Overview', href: '#/placement-overview' },
            { label: 'Graduation Outcome', href: '#' },
            { label: 'Placement News', href: '#' },
          ],
        },
        {
          title: 'Career Support',
          Icon: Award,
          links: [
            { label: 'Top Recruiters', href: '#placements' },
            { label: 'Internships', href: '#' },
            { label: 'Training & Mentoring', href: '#' },
          ],
        },
      ],
    },
  },

  {
    label: 'Research',
    href: '#/research/innovation',
    mega: {
      align: 'right',
      image: IMAGES.research,
      columns: [
        {
          title: 'Research & Development',
          Icon: FlaskConical,
          links: [
            { label: 'Publications', href: '#' },
            { label: 'Funded Projects', href: '#' },
            { label: 'IPR', href: '#' },
            { label: 'IEDC Project List', href: '#/research/innovation' },
            { label: 'Innovation', href: '#/research/innovation' },
            { label: 'Research Guide', href: '#' },
          ],
        },
      ],
    },
  },
  { label: 'Contact Us', href: '#/contact-us' },
]
