// Department content for the academic sub-pages rendered by DepartmentPage /
// DepartmentLayout. Keyed by slug — the slug is what the hash route
// (#/academics/<slug>), the Academics dropdown and the Programs section all use.
import heroImg from '../assets/images/building2.png'
import lab1 from '../assets/images/lab1.jpg'
import lab2 from '../assets/images/lab2.jpg'
import lab3 from '../assets/images/lab3.jpeg'

const labImages = [lab1, lab2, lab3]

// Sections that are essentially identical across departments live here once and
// are spread into every entry, so each department only declares what's unique.
const defaultStats = [
  { value: '1500+', label: 'Students' },
  { value: '60+', label: 'Faculty' },
  { value: '15+', label: 'Labs' },
  { value: '95%', label: 'Placement' },
  { value: '25+', label: 'Recruiters' },
]

const defaultFaculty = {
  title: 'Our Faculty',
  description:
    'Learn from experienced academicians and industry practitioners committed to mentoring the next generation of engineers.',
  members: [
    { name: 'Prof. (Dr.) A. Sen', role: 'Head of Department' },
    { name: 'Prof. (Dr.) R. Roy', role: 'Professor' },
    { name: 'Dr. S. Gupta', role: 'Associate Professor' },
    { name: 'Dr. M. Das', role: 'Assistant Professor' },
  ],
}

const defaultFacilities = {
  title: 'Facilities',
  description: 'Everything students need to learn, build and grow — under one roof.',
  items: [
    'Modern smart classrooms',
    'High-performance computing lab',
    'Central & departmental libraries',
    'Dedicated project & innovation space',
    'Industry-sponsored labs',
    'Seminar & conference halls',
  ],
}

// Builds a full department object from the fields unique to each department,
// filling in the shared defaults above.
function makeDept({
  slug,
  title,
  heroLabel = 'Institute of Engineering & Management',
  tagline,
  heroSummary,
  description,
  aboutDescription,
  points,
  visionTitle = 'Our Vision',
  vision,
  focusAreas,
  labs,
  programs,
  stats = defaultStats,
}) {
  return {
    slug,
    title,
    heroLabel,
    heroTitle: title,
    tagline,
    heroSummary,
    description,
    heroImage: heroImg,
    stats,
    about: {
      title: `About the Department`,
      description: aboutDescription,
      points,
      visionImage: heroImg,
      visionTitle,
      vision,
    },
    focusAreas,
    labs: labs.map((lab, i) => ({ ...lab, image: labImages[i % labImages.length] })),
    curriculum: {
      title: 'Curriculum',
      description: 'Programmes designed with academic depth and industry relevance.',
      programs,
    },
    faculty: defaultFaculty,
    facilities: defaultFacilities,
  }
}

export const departments = {
  cse: makeDept({
    slug: 'cse',
    title: 'Computer Science & Engineering',
    tagline: 'Building the architects of tomorrow’s technology.',
    heroSummary:
      'A flagship department offering rigorous training in computing fundamentals, systems, and modern software engineering, backed by strong research and placements.',
    description:
      'The Department of Computer Science & Engineering equips students with a strong foundation in algorithms, systems and software engineering, preparing them for careers across the technology industry and research.',
    aboutDescription:
      'From core computing and data structures to distributed systems and cloud, the curriculum blends theory with hands-on practice and real-world projects.',
    points: [
      'Strong foundation in algorithms, data structures and systems',
      'Hands-on labs, hackathons and open-source contribution',
      'Excellent placement record with top product companies',
      'Active research in AI, systems and security',
    ],
    vision:
      'To be a centre of excellence in computing education and research, producing engineers who lead technological innovation.',
    focusAreas: [
      { title: 'Software Engineering', description: 'Design, architecture and delivery of large-scale software systems.' },
      { title: 'Systems & Cloud', description: 'Operating systems, distributed computing and cloud-native development.' },
      { title: 'Artificial Intelligence', description: 'Machine learning, deep learning and intelligent applications.' },
    ],
    labs: [
      { title: 'Programming Lab', description: 'Modern workstations for full-stack and systems programming.' },
      { title: 'Data & AI Lab', description: 'GPU-backed machines for machine learning and data workloads.' },
      { title: 'Networks & Security Lab', description: 'Infrastructure for networking, cloud and cyber-security practice.' },
    ],
    programs: ['B.Tech in CSE', 'M.Tech in CSE', 'Ph.D in Computer Science'],
  }),

  'cse-ai-ml': makeDept({
    slug: 'cse-ai-ml',
    title: 'CSE (AI & Machine Learning)',
    tagline: 'Engineering intelligence into everything.',
    heroSummary:
      'A specialised programme focused on deep learning, neural networks and predictive modelling, with strong mathematical and computing foundations.',
    description:
      'This specialisation combines core computer science with advanced machine learning, preparing students to design intelligent, data-driven systems.',
    aboutDescription:
      'Students master the mathematics and engineering behind modern AI — from supervised learning to deep neural networks and generative models.',
    points: [
      'Deep learning, neural networks and generative AI',
      'Strong grounding in mathematics and statistics',
      'Applied projects with real datasets',
      'Exposure to MLOps and model deployment',
    ],
    vision:
      'To develop AI engineers who build responsible, high-impact intelligent systems.',
    focusAreas: [
      { title: 'Deep Learning', description: 'Neural architectures for vision, language and beyond.' },
      { title: 'Machine Learning', description: 'Statistical learning, modelling and evaluation.' },
      { title: 'Generative AI', description: 'Large models, transformers and generative applications.' },
    ],
    labs: [
      { title: 'AI/ML Lab', description: 'GPU clusters for training and experimentation.' },
      { title: 'Data Science Lab', description: 'Tooling for data pipelines and analytics.' },
      { title: 'Computer Vision Lab', description: 'Cameras, sensors and vision workloads.' },
    ],
    programs: ['B.Tech in CSE (AI & ML)', 'M.Tech in AI', 'Ph.D in Machine Learning'],
  }),

  'cse-data-science': makeDept({
    slug: 'cse-data-science',
    title: 'CSE (Data Science)',
    tagline: 'Turning data into decisions.',
    heroSummary:
      'A programme built around statistics, big-data pipelines and data-driven decision making across industries.',
    description:
      'The Data Science specialisation trains students to collect, process and interpret large-scale data to drive insight and decisions.',
    aboutDescription:
      'The curriculum spans statistics, data engineering and visualisation, with a strong emphasis on real business and scientific problems.',
    points: [
      'Statistics, probability and data modelling',
      'Big-data pipelines and distributed processing',
      'Data visualisation and storytelling',
      'Industry capstone projects',
    ],
    vision:
      'To produce data scientists who transform raw data into meaningful impact.',
    focusAreas: [
      { title: 'Data Engineering', description: 'Pipelines, warehousing and large-scale processing.' },
      { title: 'Statistical Modelling', description: 'Inference, forecasting and experimentation.' },
      { title: 'Analytics & BI', description: 'Visualisation and decision intelligence.' },
    ],
    labs: [
      { title: 'Big Data Lab', description: 'Clusters for distributed data processing.' },
      { title: 'Analytics Lab', description: 'Environments for statistical computing.' },
      { title: 'Visualisation Studio', description: 'Interactive dashboards and reporting.' },
    ],
    programs: ['B.Tech in CSE (Data Science)', 'M.Tech in Data Science'],
  }),

  'cse-ai': makeDept({
    slug: 'cse-ai',
    title: 'CSE (Artificial Intelligence)',
    tagline: 'Reasoning, learning and intelligent systems.',
    heroSummary:
      'A specialisation exploring intelligent systems, reasoning and applied machine learning across domains.',
    description:
      'This programme focuses on the science of building intelligent systems — from knowledge representation and reasoning to applied machine learning.',
    aboutDescription:
      'Students study the breadth of artificial intelligence, combining classical AI with modern learning-based approaches.',
    points: [
      'Search, reasoning and knowledge representation',
      'Applied machine learning across domains',
      'Robotics and intelligent agents',
      'Ethics and responsible AI',
    ],
    vision:
      'To advance intelligent systems that augment human capability.',
    focusAreas: [
      { title: 'Intelligent Agents', description: 'Autonomous systems that perceive and act.' },
      { title: 'Knowledge & Reasoning', description: 'Representation, planning and inference.' },
      { title: 'Applied ML', description: 'Learning applied to real-world domains.' },
    ],
    labs: [
      { title: 'AI Research Lab', description: 'Compute for AI research and prototyping.' },
      { title: 'Robotics Lab', description: 'Hardware for intelligent robotics.' },
      { title: 'Simulation Lab', description: 'Environments for agent training.' },
    ],
    programs: ['B.Tech in CSE (AI)', 'M.Tech in Artificial Intelligence'],
  }),

  'cse-cyber-security': makeDept({
    slug: 'cse-cyber-security',
    title: 'CSE (Cyber Security)',
    tagline: 'Defending the digital world.',
    heroSummary:
      'A specialisation in network defence, ethical hacking and secure systems engineering.',
    description:
      'The Cyber Security specialisation prepares students to protect systems, networks and data against evolving threats.',
    aboutDescription:
      'The curriculum covers cryptography, network security, ethical hacking and secure software development, with extensive hands-on labs.',
    points: [
      'Network and application security',
      'Cryptography and secure protocols',
      'Ethical hacking and penetration testing',
      'Security operations and incident response',
    ],
    vision:
      'To build security professionals who safeguard the digital infrastructure of tomorrow.',
    focusAreas: [
      { title: 'Network Security', description: 'Defending infrastructure and communications.' },
      { title: 'Ethical Hacking', description: 'Offensive testing and vulnerability assessment.' },
      { title: 'Cryptography', description: 'Secure protocols and applied cryptography.' },
    ],
    labs: [
      { title: 'Cyber Range', description: 'Isolated environment for attack/defence practice.' },
      { title: 'Forensics Lab', description: 'Tooling for digital forensics and analysis.' },
      { title: 'Network Lab', description: 'Infrastructure for secure networking.' },
    ],
    programs: ['B.Tech in CSE (Cyber Security)', 'M.Tech in Cyber Security'],
  }),

  it: makeDept({
    slug: 'it',
    title: 'Information Technology',
    tagline: 'Connecting enterprise, software and systems.',
    heroSummary:
      'A programme spanning enterprise software, networks and information systems that power modern organisations.',
    description:
      'The Department of Information Technology focuses on enterprise software, networking and information systems that keep the digital world running.',
    aboutDescription:
      'Students learn to design, build and manage the software and infrastructure behind large-scale information systems.',
    points: [
      'Enterprise software and web technologies',
      'Networking and information systems',
      'Databases and cloud infrastructure',
      'Strong internship and placement pipeline',
    ],
    vision:
      'To produce IT professionals who architect the systems that run modern enterprises.',
    focusAreas: [
      { title: 'Enterprise Software', description: 'Full-stack and enterprise application development.' },
      { title: 'Networking', description: 'Design and management of modern networks.' },
      { title: 'Cloud & DevOps', description: 'Cloud infrastructure and delivery pipelines.' },
    ],
    labs: [
      { title: 'Software Lab', description: 'Workstations for application development.' },
      { title: 'Networking Lab', description: 'Routers, switches and network simulation.' },
      { title: 'Cloud Lab', description: 'Cloud sandboxes and virtualization.' },
    ],
    programs: ['B.Tech in Information Technology', 'M.Tech in IT'],
  }),

  ece: makeDept({
    slug: 'ece',
    title: 'Electronics & Communication Engineering',
    tagline: 'From signals to systems.',
    heroSummary:
      'A department covering communication systems, VLSI and embedded electronics that shape the connected world.',
    description:
      'The Department of Electronics & Communication Engineering trains students in communication systems, VLSI design and embedded electronics.',
    aboutDescription:
      'The curriculum blends analog and digital electronics, communication theory and embedded system design with practical labs.',
    points: [
      'Communication systems and signal processing',
      'VLSI and semiconductor design',
      'Embedded systems and IoT',
      'Antenna and RF engineering',
    ],
    vision:
      'To advance electronics and communication engineering through innovation and research.',
    focusAreas: [
      { title: 'Communication Systems', description: 'Wireless, optical and digital communication.' },
      { title: 'VLSI Design', description: 'Chip design and semiconductor technology.' },
      { title: 'Embedded Systems', description: 'Microcontrollers, IoT and real-time systems.' },
    ],
    labs: [
      { title: 'VLSI Lab', description: 'EDA tools for chip design and simulation.' },
      { title: 'Communication Lab', description: 'Equipment for signal and communication experiments.' },
      { title: 'Embedded Lab', description: 'Development kits for embedded and IoT projects.' },
    ],
    programs: ['B.Tech in ECE', 'M.Tech in ECE'],
  }),

  ee: makeDept({
    slug: 'ee',
    title: 'Electrical Engineering',
    tagline: 'Powering the world responsibly.',
    heroSummary:
      'A department focused on power systems, control engineering and electrical machines.',
    description:
      'The Department of Electrical Engineering covers power systems, control, and electrical machines, with a growing emphasis on renewable energy.',
    aboutDescription:
      'Students study generation, transmission and control of electrical energy alongside modern automation and renewable technologies.',
    points: [
      'Power systems and electrical machines',
      'Control and automation engineering',
      'Renewable energy and smart grids',
      'Power electronics and drives',
    ],
    vision:
      'To lead in electrical engineering education for a sustainable energy future.',
    focusAreas: [
      { title: 'Power Systems', description: 'Generation, transmission and distribution.' },
      { title: 'Control Engineering', description: 'Automation and control systems.' },
      { title: 'Renewable Energy', description: 'Solar, wind and smart-grid technologies.' },
    ],
    labs: [
      { title: 'Machines Lab', description: 'Electrical machines and drives.' },
      { title: 'Power Systems Lab', description: 'Simulation of power networks.' },
      { title: 'Control Lab', description: 'Control and automation experiments.' },
    ],
    programs: ['B.Tech in Electrical Engineering', 'M.Tech in Power Systems'],
  }),

  mechanical: makeDept({
    slug: 'mechanical',
    title: 'Mechanical Engineering',
    tagline: 'Designing, building and moving the world.',
    heroSummary:
      'A department covering design, thermal sciences, manufacturing and modern mechatronics.',
    description:
      'The Department of Mechanical Engineering provides a broad foundation in design, thermal sciences, manufacturing and automation.',
    aboutDescription:
      'From CAD and thermodynamics to robotics and manufacturing, students gain the versatility to work across industries.',
    points: [
      'Design, CAD/CAM and product development',
      'Thermal and fluid sciences',
      'Manufacturing and automation',
      'Robotics and mechatronics',
    ],
    vision:
      'To shape mechanical engineers who innovate across design, energy and manufacturing.',
    focusAreas: [
      { title: 'Design & CAD', description: 'Product design, modelling and analysis.' },
      { title: 'Thermal Sciences', description: 'Thermodynamics, heat transfer and fluids.' },
      { title: 'Manufacturing', description: 'Modern manufacturing and automation.' },
    ],
    labs: [
      { title: 'CAD/CAM Lab', description: 'Design and manufacturing software and tools.' },
      { title: 'Thermal Lab', description: 'Experiments in heat and fluid mechanics.' },
      { title: 'Manufacturing Lab', description: 'Machining, CNC and fabrication.' },
    ],
    programs: ['B.Tech in Mechanical Engineering', 'M.Tech in Design'],
  }),

  biotechnology: makeDept({
    slug: 'biotechnology',
    title: 'Biotechnology',
    tagline: 'Engineering life sciences for a better future.',
    heroSummary:
      'A department bridging biology and engineering — genetics, bioprocess engineering and life sciences.',
    description:
      'The Department of Biotechnology integrates biology with engineering to address challenges in health, agriculture and the environment.',
    aboutDescription:
      'Students explore molecular biology, genetic engineering and bioprocess technology with strong laboratory training.',
    points: [
      'Molecular biology and genetics',
      'Bioprocess and fermentation technology',
      'Genetic and protein engineering',
      'Research in healthcare and environment',
    ],
    vision:
      'To advance biotechnology for human health and sustainable development.',
    focusAreas: [
      { title: 'Genetic Engineering', description: 'Gene manipulation and molecular techniques.' },
      { title: 'Bioprocess Technology', description: 'Fermentation and downstream processing.' },
      { title: 'Bioinformatics', description: 'Computational analysis of biological data.' },
    ],
    labs: [
      { title: 'Molecular Biology Lab', description: 'Equipment for genetic and molecular work.' },
      { title: 'Microbiology Lab', description: 'Culture and analysis facilities.' },
      { title: 'Bioprocess Lab', description: 'Fermenters and bioprocess equipment.' },
    ],
    programs: ['B.Tech in Biotechnology', 'M.Tech in Biotechnology'],
  }),
}

// Maps each department slug to the icon key used by the Academics page's
// departmentIcons lookup.
const iconKeyBySlug = {
  cse: 'cse',
  'cse-ai-ml': 'ai-ml',
  'cse-data-science': 'data-science',
  'cse-ai': 'artificial-intelligence',
  'cse-cyber-security': 'cyber-security',
  it: 'information-technology',
  ece: 'electronics-communications',
  ee: 'electrical',
  mechanical: 'mechanical-engineering',
  biotechnology: 'biotechnology',
}

// Convenience list for the Academics listing page (slug, title, summary, icon).
export const academicDepartments = Object.values(departments).map((d) => ({
  slug: d.slug,
  title: d.title,
  summary: d.tagline,
  iconKey: iconKeyBySlug[d.slug],
}))

// Optional per-slug card images for the Academics page. Slugs not listed here
// fall back to the default building image.
export const departmentImages = {}

export default departments
