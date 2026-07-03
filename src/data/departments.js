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
    'Learn from experienced academicians and industry practitioners committed to mentoring the next generation of professionals.',
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

// The order in which sections are shown on the Academics listing page.
export const sectionOrder = [
  'Engineering',
  'Management',
  'Computer Applications',
  'Law',
  'Hotel Management',
  'Basic Sciences & Humanities',
]

// Builds a full department object from the fields unique to each department,
// filling in the shared defaults above.
function makeDept({
  slug,
  title,
  section = 'Engineering',
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
    section,
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
  // ─────────────────────────────── Engineering ───────────────────────────────
  cse: makeDept({
    slug: 'cse',
    title: 'Computer Science & Engineering',
    tagline: 'Building strong foundations in software, systems and intelligent computing.',
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
    title: 'CSE (Artificial Intelligence & Machine Learning)',
    tagline: 'Developing software engineers for AI, machine learning and intelligent products.',
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

  'cse-ai-data-science': makeDept({
    slug: 'cse-ai-data-science',
    title: 'CSE (Artificial Intelligence & Data Science)',
    tagline: 'Blending AI, analytics and computing for next-generation intelligent systems.',
    heroSummary:
      'A programme uniting artificial intelligence with large-scale data analytics to build insight-driven, intelligent systems.',
    description:
      'This specialisation fuses core computer science, artificial intelligence and data science, preparing students to build intelligent systems that learn from data at scale.',
    aboutDescription:
      'The curriculum combines machine learning, statistics and data engineering with strong software foundations and applied capstone projects.',
    points: [
      'Applied AI backed by large-scale data analytics',
      'Statistics, data engineering and modelling',
      'End-to-end machine learning projects',
      'Industry-relevant tooling and MLOps',
    ],
    vision:
      'To produce engineers who transform data into intelligent, real-world impact.',
    focusAreas: [
      { title: 'Data-Driven AI', description: 'Learning systems built on large, real-world datasets.' },
      { title: 'Big Data Analytics', description: 'Pipelines, warehousing and distributed processing.' },
      { title: 'Applied Machine Learning', description: 'Modelling, evaluation and deployment.' },
    ],
    labs: [
      { title: 'AI & Data Lab', description: 'GPU compute for AI and data workloads.' },
      { title: 'Analytics Lab', description: 'Environments for statistical computing.' },
      { title: 'Visualisation Studio', description: 'Interactive dashboards and reporting.' },
    ],
    programs: ['B.Tech in CSE (AI & Data Science)', 'M.Tech in Data Science'],
  }),

  'cse-data-science': makeDept({
    slug: 'cse-data-science',
    title: 'CSE (Data Science)',
    tagline: 'Applying data, algorithms and computing to build insight-driven systems.',
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
    tagline: 'Training intelligent computing engineers for machine learning and automation.',
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
    tagline: 'Building secure computing systems, digital defence and resilient software platforms.',
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

  'cse-iot': makeDept({
    slug: 'cse-iot',
    title: 'CSE (Internet of Things)',
    tagline: 'Designing smart products through software, sensing and connected computing.',
    heroSummary:
      'A specialisation in embedded systems, sensor networks and edge computing that power the connected world.',
    description:
      'The Internet of Things specialisation trains students to design smart, connected products spanning hardware, software and cloud.',
    aboutDescription:
      'Students learn embedded programming, sensor integration, wireless networking and edge/cloud computing through hands-on projects.',
    points: [
      'Embedded systems and microcontrollers',
      'Sensor networks and wireless communication',
      'Edge and cloud integration',
      'Smart, connected product development',
    ],
    vision:
      'To build engineers who connect the physical and digital worlds intelligently.',
    focusAreas: [
      { title: 'Embedded Systems', description: 'Microcontrollers and real-time firmware.' },
      { title: 'Sensor Networks', description: 'Distributed sensing and communication.' },
      { title: 'Edge Computing', description: 'Processing at the edge, integrated with the cloud.' },
    ],
    labs: [
      { title: 'IoT Lab', description: 'Development kits, sensors and connectivity modules.' },
      { title: 'Embedded Systems Lab', description: 'Boards and tooling for firmware development.' },
      { title: 'Networks Lab', description: 'Infrastructure for wireless and edge networking.' },
    ],
    programs: ['B.Tech in CSE (IoT)'],
  }),

  'cse-iot-cs-blockchain': makeDept({
    slug: 'cse-iot-cs-blockchain',
    title: 'CSE (IoT & Cyber Security incl. Blockchain)',
    tagline: 'Combining connected systems, security and blockchain-enabled digital trust.',
    heroSummary:
      'A programme uniting the Internet of Things, cyber security and blockchain to build secure, decentralised connected systems.',
    description:
      'This specialisation combines IoT engineering with cyber security and blockchain, preparing students to build secure and trustworthy connected systems.',
    aboutDescription:
      'The curriculum spans embedded and connected systems, security engineering and distributed-ledger / blockchain technology.',
    points: [
      'Secure IoT and embedded systems',
      'Network and application security',
      'Blockchain and distributed ledgers',
      'Decentralised, trust-based applications',
    ],
    vision:
      'To engineer secure, decentralised and trustworthy connected systems.',
    focusAreas: [
      { title: 'IoT Security', description: 'Securing connected devices end to end.' },
      { title: 'Blockchain', description: 'Distributed ledgers, smart contracts and dApps.' },
      { title: 'Distributed Trust', description: 'Cryptographic trust across systems.' },
    ],
    labs: [
      { title: 'IoT & Security Lab', description: 'Connected devices with a security focus.' },
      { title: 'Blockchain Lab', description: 'Environments for distributed-ledger development.' },
      { title: 'Cyber Range', description: 'Isolated environment for security practice.' },
    ],
    programs: ['B.Tech in CSE (IoT & Cyber Security incl. Blockchain Technology)'],
  }),

  it: makeDept({
    slug: 'it',
    title: 'Information Technology',
    tagline: 'Building reliable digital systems, enterprise platforms and networked solutions.',
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
    title: 'Electronics & Communications Engineering',
    tagline: 'Enabling digital connectivity through electronics, signals and communication networks.',
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
    tagline: 'Powering modern infrastructure through energy systems and electrical design.',
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

  eee: makeDept({
    slug: 'eee',
    title: 'Electrical & Electronics Engineering',
    tagline: 'Combining energy systems with electronics and intelligent control.',
    heroSummary:
      'A department bridging electrical power engineering with modern electronics and intelligent control systems.',
    description:
      'The Department of Electrical & Electronics Engineering blends power engineering with electronics, control and embedded systems.',
    aboutDescription:
      'Students study power electronics, electrical machines, control systems and electronics with a strong practical, lab-driven approach.',
    points: [
      'Power electronics and electrical machines',
      'Control and automation systems',
      'Electronics and embedded integration',
      'Renewable energy and smart systems',
    ],
    vision:
      'To develop engineers who integrate power and electronics for a smarter, sustainable future.',
    focusAreas: [
      { title: 'Power Electronics', description: 'Converters, drives and power conditioning.' },
      { title: 'Control Systems', description: 'Automation and intelligent control.' },
      { title: 'Renewable Energy', description: 'Solar, wind and smart-grid integration.' },
    ],
    labs: [
      { title: 'Power Electronics Lab', description: 'Converters, drives and power systems.' },
      { title: 'Machines Lab', description: 'Electrical machines and instrumentation.' },
      { title: 'Control Lab', description: 'Control and automation experiments.' },
    ],
    programs: ['B.Tech in Electrical & Electronics Engineering'],
  }),

  mechanical: makeDept({
    slug: 'mechanical',
    title: 'Mechanical Engineering',
    tagline: 'Designing, analysing and building the systems that power industry.',
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
    tagline: 'Harnessing biological systems for healthcare, research and industrial innovation.',
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

  // ─────────────────────────────── Management ────────────────────────────────
  mba: makeDept({
    slug: 'mba',
    title: 'Master of Business Administration (MBA)',
    section: 'Management',
    tagline: 'Developing strategic leaders for business, entrepreneurship and global enterprises.',
    heroSummary:
      'A rigorous management programme building strategic leaders across finance, marketing, operations and analytics.',
    description:
      'The MBA programme develops well-rounded managers and entrepreneurs through a blend of management theory, analytics and real-world practice.',
    aboutDescription:
      'Students build expertise across finance, marketing, operations and human resources, supported by live projects, case studies and industry mentorship.',
    points: [
      'Finance, marketing, operations and HR',
      'Data-driven, analytics-led decision making',
      'Live projects and industry mentorship',
      'Leadership, strategy and entrepreneurship',
    ],
    vision:
      'To develop ethical, analytical leaders who create value for organisations and society.',
    focusAreas: [
      { title: 'Finance & Analytics', description: 'Corporate finance, investments and business analytics.' },
      { title: 'Marketing & Strategy', description: 'Brand, digital marketing and strategic management.' },
      { title: 'Operations & HR', description: 'Operations, supply chain and people management.' },
    ],
    labs: [
      { title: 'Analytics & Finance Lab', description: 'Tools for financial modelling and analytics.' },
      { title: 'Behavioural Research Lab', description: 'Space for consumer and organisational research.' },
      { title: 'Simulation Lab', description: 'Business simulation and strategy games.' },
    ],
    programs: ['MBA (Master of Business Administration)'],
  }),

  bba: makeDept({
    slug: 'bba',
    title: 'Bachelor of Business Administration (BBA)',
    section: 'Management',
    tagline: 'Creating business-ready graduates with strong management and communication skills.',
    heroSummary:
      'An undergraduate management programme building strong business fundamentals and a managerial mindset.',
    description:
      'The BBA programme lays a strong foundation in business management, communication and analytical thinking for future managers and entrepreneurs.',
    aboutDescription:
      'Students learn the fundamentals of management, finance, marketing and communication, with practical exposure through projects and internships.',
    points: [
      'Core management and business fundamentals',
      'Communication and presentation skills',
      'Entrepreneurship and problem solving',
      'Internships and industry exposure',
    ],
    vision:
      'To nurture confident, business-ready graduates with a strong ethical foundation.',
    focusAreas: [
      { title: 'Management Fundamentals', description: 'Principles of management and organisation.' },
      { title: 'Entrepreneurship', description: 'Venture creation and business planning.' },
      { title: 'Business Communication', description: 'Professional communication and soft skills.' },
    ],
    labs: [
      { title: 'Business Analytics Lab', description: 'Tools for spreadsheets and analytics.' },
      { title: 'Communication Lab', description: 'Space for presentations and group work.' },
      { title: 'Case-Study Studio', description: 'Collaborative learning environments.' },
    ],
    programs: ['BBA (Bachelor of Business Administration)'],
  }),

  // ─────────────────────────── Computer Applications ─────────────────────────
  mca: makeDept({
    slug: 'mca',
    title: 'Master in Computer Applications (MCA)',
    section: 'Computer Applications',
    tagline: 'Advancing application development, systems design and software engineering capability.',
    heroSummary:
      'A postgraduate programme advancing software engineering, systems design and emerging computing technologies.',
    description:
      'The MCA programme deepens students’ software engineering, systems and computing expertise, preparing them for advanced roles in the IT industry.',
    aboutDescription:
      'The curriculum covers software engineering, data and systems, and emerging technologies, backed by substantial project work.',
    points: [
      'Advanced software engineering',
      'Data structures, databases and systems',
      'Emerging technologies and cloud',
      'Capstone and industry projects',
    ],
    vision:
      'To produce highly capable software professionals for a rapidly evolving industry.',
    focusAreas: [
      { title: 'Software Engineering', description: 'Design and delivery of robust software.' },
      { title: 'Data & Systems', description: 'Databases, systems and distributed computing.' },
      { title: 'Emerging Technologies', description: 'Cloud, AI and modern application stacks.' },
    ],
    labs: [
      { title: 'Software Development Lab', description: 'Workstations for full-stack development.' },
      { title: 'Computing Lab', description: 'Environments for systems and data work.' },
      { title: 'Project & Innovation Lab', description: 'Space for capstone and research projects.' },
    ],
    programs: ['MCA (Master in Computer Applications)'],
  }),

  bca: makeDept({
    slug: 'bca',
    title: 'Bachelor of Computer Applications (BCA)',
    section: 'Computer Applications',
    tagline: 'Building software application skills through programming, databases and digital systems.',
    heroSummary:
      'An undergraduate programme building strong software application skills across programming, web and databases.',
    description:
      'The BCA programme builds practical software development skills through programming, web technologies, databases and digital systems.',
    aboutDescription:
      'Students gain hands-on experience across programming languages, web and application development and database systems.',
    points: [
      'Programming and problem solving',
      'Web and application development',
      'Databases and digital systems',
      'Project-based, practical learning',
    ],
    vision:
      'To create job-ready application developers with strong fundamentals.',
    focusAreas: [
      { title: 'Programming & Databases', description: 'Core programming and data management.' },
      { title: 'Web & App Development', description: 'Building modern web and mobile applications.' },
      { title: 'Digital Systems', description: 'Foundations of computing and systems.' },
    ],
    labs: [
      { title: 'Programming Lab', description: 'Workstations for coding and development.' },
      { title: 'Web Technologies Lab', description: 'Environments for web and app development.' },
      { title: 'Project Lab', description: 'Space for application projects.' },
    ],
    programs: ['BCA (Bachelor of Computer Applications)'],
  }),

  // ─────────────────────────────────── Law ───────────────────────────────────
  law: makeDept({
    slug: 'law',
    title: 'Law',
    section: 'Law',
    tagline: 'Preparing legal professionals with analytical thinking, ethics and advocacy skills.',
    heroSummary:
      'A programme shaping legal minds through constitutional, corporate and criminal law with strong advocacy training.',
    description:
      'The School of Law prepares students for the legal profession through rigorous academics, moot courts and practical training.',
    aboutDescription:
      'Students study constitutional, corporate, criminal and commercial law, developing analytical thinking, ethics and advocacy skills.',
    points: [
      'Constitutional, corporate and criminal law',
      'Moot courts and advocacy training',
      'Legal research and writing',
      'Ethics and professional practice',
    ],
    vision:
      'To shape principled legal professionals committed to justice.',
    focusAreas: [
      { title: 'Constitutional & Criminal Law', description: 'Foundations of rights and criminal justice.' },
      { title: 'Corporate & Commercial Law', description: 'Business, corporate and commercial practice.' },
      { title: 'Advocacy & Ethics', description: 'Courtroom skills and professional ethics.' },
    ],
    labs: [
      { title: 'Moot Court Hall', description: 'Simulated courtroom for advocacy practice.' },
      { title: 'Legal Aid Clinic', description: 'Community legal aid and practical exposure.' },
      { title: 'Legal Research Lab', description: 'Databases and resources for legal research.' },
    ],
    programs: ['LL.B (Bachelor of Laws)', 'BA LL.B (Hons.)'],
  }),

  // ────────────────────────────── Hotel Management ───────────────────────────
  bhm: makeDept({
    slug: 'bhm',
    title: 'BHM (Bachelor of Hotel Management)',
    section: 'Hotel Management',
    tagline: 'Preparing hospitality professionals for service excellence and operational leadership.',
    heroSummary:
      'A programme building hospitality excellence through culinary arts, front-office and food & beverage management.',
    description:
      'The Bachelor of Hotel Management programme trains students for leadership roles across the hospitality and service industry.',
    aboutDescription:
      'Students gain hands-on experience in culinary arts, front office, housekeeping and food & beverage operations, supported by industry internships.',
    points: [
      'Culinary arts and food production',
      'Front office and housekeeping operations',
      'Food & beverage service and management',
      'Industry internships and exposure',
    ],
    vision:
      'To develop hospitality leaders known for service excellence.',
    focusAreas: [
      { title: 'Culinary Arts', description: 'Food production and kitchen operations.' },
      { title: 'Front Office & Housekeeping', description: 'Guest services and accommodation operations.' },
      { title: 'Food & Beverage Management', description: 'Service, planning and operations.' },
    ],
    labs: [
      { title: 'Training Kitchen', description: 'Professional kitchen for culinary training.' },
      { title: 'Front Office Lab', description: 'Simulated hotel front-office operations.' },
      { title: 'Bakery & Confectionery Lab', description: 'Baking and pastry production.' },
    ],
    programs: ['BHM (Bachelor of Hotel Management)'],
  }),

  // ────────────────────────── Basic Sciences & Humanities ────────────────────
  bsh: makeDept({
    slug: 'bsh',
    title: 'BSH (Basic Science & Humanities)',
    section: 'Basic Sciences & Humanities',
    tagline: 'Strengthening scientific foundations, communication and human-centred thinking.',
    heroSummary:
      'The foundational department strengthening science, mathematics and communication across all programmes.',
    description:
      'The Department of Basic Science & Humanities builds the scientific, mathematical and communication foundations that underpin every engineering and management programme.',
    aboutDescription:
      'Through physics, chemistry, mathematics and humanities, the department strengthens the fundamentals and soft skills essential for professional success.',
    points: [
      'Applied physics and chemistry',
      'Engineering mathematics',
      'Communication and soft skills',
      'Humanities and human-centred thinking',
    ],
    vision:
      'To build strong scientific and human foundations for every graduate.',
    focusAreas: [
      { title: 'Applied Physics & Chemistry', description: 'Fundamental sciences for engineering.' },
      { title: 'Mathematics', description: 'Engineering mathematics and analytical methods.' },
      { title: 'Communication & Humanities', description: 'Language, ethics and human values.' },
    ],
    labs: [
      { title: 'Physics Lab', description: 'Experiments in applied and engineering physics.' },
      { title: 'Chemistry Lab', description: 'Practical work in engineering chemistry.' },
      { title: 'Language & Communication Lab', description: 'Space for communication skills training.' },
    ],
    programs: ['Foundational courses across all B.Tech programmes'],
  }),
}

// Maps each department slug to the icon key used by the Academics page's
// departmentIcons lookup.
const iconKeyBySlug = {
  cse: 'cse',
  'cse-ai-ml': 'ai-ml',
  'cse-ai-data-science': 'ai-data-science',
  'cse-data-science': 'data-science',
  'cse-ai': 'artificial-intelligence',
  'cse-cyber-security': 'cyber-security',
  'cse-iot': 'iot',
  'cse-iot-cs-blockchain': 'iot-cyber-blockchain',
  it: 'information-technology',
  ece: 'electronics-communications',
  ee: 'electrical',
  eee: 'electrical-electronics',
  mechanical: 'mechanical-engineering',
  biotechnology: 'biotechnology',
  mba: 'mba',
  bba: 'bba',
  mca: 'mca',
  bca: 'bca',
  law: 'law',
  bhm: 'bhm',
  bsh: 'bsh',
}

// Convenience list for the Academics listing page (slug, title, summary, icon,
// section). Order follows the declaration order in `departments` above.
export const academicDepartments = Object.values(departments).map((d) => ({
  slug: d.slug,
  title: d.title,
  summary: d.tagline,
  section: d.section,
  iconKey: iconKeyBySlug[d.slug],
}))

// Optional per-slug card images for the Academics page. Slugs not listed here
// fall back to the default building image.
export const departmentImages = {}

export default departments
