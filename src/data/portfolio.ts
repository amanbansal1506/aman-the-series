/**
 * Central portfolio data — Aman Bansal.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it appears on the resume.
 *
 * TODO markers below are the few things still to fill in with your own details.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Aman Bansal',
  displayName: 'Aman Bansal',
  givenName: 'Aman',
  firstName: 'AMAN',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A BANSAL ORIGINAL',
  role: 'Full-Stack Developer',
  /** Small "rating" badge next to the hero meta line. */
  badge: 'FULL-STACK',
  tagline: ['Full-Stack Developer', 'Java', 'Generative AI'],
  intro:
    'A Computer Science graduate and full-stack developer with front-end internship experience, building projects with React, Node.js and PostgreSQL — skilled in Java, SQL and REST API development, with a strong foundation in data structures and object-oriented programming.',
  location: 'Pune, Maharashtra',
  email: 'bansalaman2419@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/aman-bansal-464b6a270',
    github: 'https://github.com/amanbansal1506',
    leetcode: 'https://leetcode.com/u/amanbansa',
  },
  resumePdf: '/assets/AmanBansal_SWE.pdf',
  resumeFileName: 'AmanBansal_SWE.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Aman Bansal',
  },
  /** Shown as a floating chip on the hero portrait. */
  stackChip: 'Java · React · Node.js',
  interests: ['Full-Stack Development', 'Generative AI', 'Data Structures & Algorithms'],
};

/** Most recent first. */
export const education = [
  {
    school: 'C-DAC (ACTS)',
    short: 'PGCP-AC',
    place: 'Pune',
    degree: 'Post Graduate Certification in Advanced Computing',
    period: 'August 2026 – February 2027',
    score: 'In progress',
  },
  {
    school: 'Chandigarh University',
    short: 'B.E. CSE',
    place: 'Mohali',
    degree: 'Bachelor of Engineering — Computer Science and Engineering',
    period: 'July 2022 – June 2026',
    score: 'Class of 2026',
  },
];

export const experience = [
  {
    company: 'Unified Mentor Pvt. Ltd.',
    role: 'Front-End Development Intern',
    period: 'June 2025 – September 2025',
    points: [
      'Developed responsive web features as part of a front-end development internship.',
      'Identified and fixed UI defects to keep the interface consistent and reliable.',
      'Translated client requirements into working features.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  /** Optional — shown as a badge on the card when set, e.g. '2026'. */
  year?: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  /** Optional live demo link. */
  live?: string;
  palette: Palette;
  motif: 'network' | 'route' | 'chat';
};

export const projects: Project[] = [
  {
    id: 'networx',
    title: 'Networx',
    genre: 'Full-Stack • Microservices • Caching',
    logline: 'A full-stack networking platform with a Redis-cached feed, a Java Spring Boot microservice and FFmpeg HLS video streaming.',
    stack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'Spring Boot', 'FFmpeg HLS', 'JWT'],
    build: [
      'Built a full-stack networking platform on React.js, Node.js, Express.js and PostgreSQL, with a REST API secured by JWT authentication.',
      'Added Redis caching to the feed in February 2026 — a cache hit returns in about 20 ms versus about 500 ms uncached (roughly 25× faster), with zero database queries and zero microservice calls.',
      'Split the backend and the Java Spring Boot microservice into separate dedicated repositories, and added FFmpeg-based HLS video streaming.',
    ],
    features: ['Redis-cached feed', 'JWT authentication', 'REST API on Node.js + Express', 'Java Spring Boot microservice', 'FFmpeg HLS video streaming'],
    metrics: [
      { value: '~25×', label: 'faster feed on a Redis cache hit' },
      { value: '~20 ms', label: 'cached feed response' },
      { value: '~500 ms', label: 'uncached feed response' },
      { value: '0', label: 'DB queries or microservice calls on a cache hit' },
    ],
    github: 'https://github.com/amanbansal1506/NetworX',
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'network',
  },
  {
    id: 'tripgenie',
    title: 'TripGenie',
    genre: 'AI • Full-Stack • Travel',
    logline: 'An AI trip planner that turns a chat about destination, duration, budget and group size into hotel picks and a day-wise itinerary.',
    stack: ['Next.js', 'TypeScript', 'OpenAI API', 'Convex', 'Arcjet', 'Google Places API'],
    build: [
      'Built an AI-powered trip planner in Next.js and TypeScript, using the OpenAI API for a chat that collects destination, duration, budget and group size.',
      'Generated AI hotel recommendations with pricing, ratings and real images through the Google Places API.',
      'Designed a day-wise itinerary timeline with timings and ticket details, plus login and a landing page backed by Convex and Arcjet.',
    ],
    features: [
      'Login and landing page',
      'AI chat for trip input',
      'AI hotel recommendations',
      'Pricing, ratings & real images via Google Places',
      'Day-wise itinerary with timings & ticket details',
    ],
    metrics: [
      { value: '4', label: 'trip inputs: destination, duration, budget, group size' },
      { value: 'AI', label: 'hotel picks with pricing, ratings and real photos' },
      { value: 'Day-wise', label: 'itinerary timeline with timings & ticket details' },
    ],
    github: 'https://github.com/amanbansal1506/TripGenie',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'route',
  },
  {
    id: 'vibeconnect',
    title: 'VibeConnect',
    genre: 'Real-time • WebSocket • Chat',
    logline: 'A real-time chat app where people create or join rooms with a room key and talk with formatted messages.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'Socket.IO', 'WebSocket'],
    build: [
      'Built a real-time chat app with Node.js, Express and Socket.IO — users create or join rooms with a room key and exchange messages instantly.',
      'Added bold and italic formatting, clickable links, username identification and duplicate-username prevention in a responsive UI.',
      'Published a live demo on GitHub Pages.',
    ],
    features: [
      'Create or join rooms with a room key',
      'Real-time messaging via Socket.IO',
      'Bold, italic & clickable-link formatting',
      'Username identification',
      'Duplicate-username prevention',
      'Responsive UI',
    ],
    metrics: [
      { value: 'Live', label: 'real-time messaging over Socket.IO' },
      { value: 'Room key', label: 'to create or join a room' },
      { value: '3', label: 'message formats: bold, italic, clickable links' },
    ],
    github: 'https://github.com/amanbansal1506/VibeConnect',
    live: 'https://amanbansal1506.github.io/VibeConnect',
    palette: { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' },
    motif: 'chat',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'oracle-genai',
    title: 'GenAI Professional',
    org: 'Oracle Cloud Infrastructure 2025',
    detail: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional — scored 92%.',
    laurel: 'Scored 92%',
  },
  {
    id: 'young-turks',
    title: 'Young Turks 2026',
    org: 'Naukri Campus',
    detail: 'Skill contest, October 2026 — 98.42 percentile.',
    laurel: '98.42 Percentile',
  },
  {
    id: 'google-mlops',
    title: 'MLOps for GenAI',
    org: 'Google Cloud',
    detail: 'Earned the "Machine Learning Operations (MLOps) for Generative AI" badge on Google Cloud.',
    laurel: 'Skill Badge',
  },
  {
    id: 'tcs-ion',
    title: 'GenAI Essentials',
    org: 'TCS iON Career Edge',
    detail: 'Completed the Generative AI Essentials programme, 2–17 October 2026.',
    laurel: 'Completed',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Oracle', name: 'OCI 2025 Certified Generative AI Professional' },
  { issuer: 'Google Cloud', name: 'Machine Learning Operations (MLOps) for Generative AI' },
  { issuer: 'TCS iON', name: 'Career Edge — Generative AI Essentials' },
  { issuer: 'NPTEL', name: 'Cloud Computing' },
  { issuer: 'NPTEL', name: 'Multi-Core Computer Architecture' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Java comes first',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'C', mono: 'C' },
      { name: 'C++', mono: 'C+' },
      { name: 'Python', mono: 'Py' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'Next.js', mono: 'Nx' },
      { name: 'HTML5', mono: 'Ht' },
      { name: 'CSS3', mono: 'Cs' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Server-side logic & real-time',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'JWT Auth', mono: 'Jw' },
      { name: 'WebSocket', mono: 'Ws' },
      { name: 'Socket.IO', mono: 'Si' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational, document & cache',
    skills: [
      { name: 'PostgreSQL', mono: 'Pg' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'Redis', mono: 'Rd' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Deployment',
    subtitle: 'Shipping it live',
    skills: [
      { name: 'GCP', mono: 'Gc' },
      { name: 'Vercel', mono: 'Vc' },
      { name: 'Railway', mono: 'Rw' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & Data',
    subtitle: 'Models, APIs & data tooling',
    skills: [
      { name: 'OpenAI API', mono: 'Oa' },
      { name: 'Vertex AI', mono: 'Vx' },
      { name: 'NumPy', mono: 'Np' },
      { name: 'Pandas', mono: 'Pd' },
      { name: 'Scikit-learn', mono: 'Sk' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    subtitle: 'Everyday workflow',
    skills: [
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Postman', mono: 'Pm' },
      { name: 'Linux', mono: 'Lx' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'Core Concepts',
    subtitle: 'The foundations',
    skills: [
      { name: 'DSA', mono: 'Ds' },
      { name: 'OOP', mono: 'Oo' },
    ],
  },
  {
    id: 'exploring',
    title: 'Exploring',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Generative AI', mono: 'Ai' },
      { name: 'MLOps', mono: 'Ml' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, internship or certifications on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  Java: ['Primary language', 'DSA practice'],
  JavaScript: ['VibeConnect', 'Front-End Internship at Unified Mentor'],
  TypeScript: ['TripGenie'],
  'React.js': ['Networx'],
  'Next.js': ['TripGenie'],
  HTML5: ['VibeConnect'],
  CSS3: ['VibeConnect'],
  'Node.js': ['Networx', 'VibeConnect'],
  'Express.js': ['Networx', 'VibeConnect'],
  'REST APIs': ['Networx'],
  'JWT Auth': ['Networx'],
  WebSocket: ['VibeConnect'],
  'Socket.IO': ['VibeConnect'],
  PostgreSQL: ['Networx'],
  Redis: ['Networx — feed cache'],
  GCP: ['Google Cloud MLOps for Generative AI'],
  'OpenAI API': ['TripGenie'],
  GitHub: ['VibeConnect live demo on GitHub Pages'],
  DSA: ['LeetCode practice'],
  'Generative AI': ['Oracle GenAI Professional', 'TCS iON GenAI Essentials', 'TripGenie'],
  MLOps: ['Google Cloud MLOps for Generative AI'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2022 – 2026',
    synopsis: 'Four years of Computer Science and Engineering at Chandigarh University, Mohali.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Engineer',
        description: 'Bachelor of Engineering in Computer Science and Engineering at Chandigarh University, Mohali.',
        tags: ['B.E.', 'CSE'],
        runtime: 'Jul 2022 – Jun 2026',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Foundation',
        description: 'A solid base in data structures, object-oriented programming and SQL — the groundwork for everything that followed.',
        tags: ['DSA', 'OOP', 'SQL'],
        runtime: 'Core CS',
        palette: jade,
      },
      {
        code: 'S01 E03',
        title: 'The Languages',
        description: 'Java first, with C, C++, Python, JavaScript and TypeScript alongside it.',
        tags: ['Java', 'C / C++', 'Python', 'JavaScript', 'TypeScript'],
        runtime: 'Skills',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Learning on the Job',
    period: 'Jun – Sep 2025',
    synopsis: 'A front-end development internship at Unified Mentor Pvt. Ltd.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Intern',
        description: 'Front-End Development Intern at Unified Mentor Pvt. Ltd.',
        tags: ['Front-End', 'Internship'],
        runtime: 'Jun – Sep 2025',
        palette: ocean,
      },
      {
        code: 'S02 E02',
        title: 'The Builder',
        description: 'Developed responsive web features and fixed UI defects.',
        tags: ['Responsive UI', 'Bug fixing'],
        runtime: 'Unified Mentor',
        palette: crimson,
      },
      {
        code: 'S02 E03',
        title: 'The Translator',
        description: 'Turned client requirements into working features.',
        tags: ['Requirements', 'Delivery'],
        runtime: 'Unified Mentor',
        palette: jade,
      },
    ],
  },
  {
    number: 3,
    title: 'Certified & Competing',
    period: '2025 – 2026',
    synopsis: 'Generative AI credentials, a Google Cloud MLOps badge and a top-percentile skill contest.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Certified',
        description: 'Oracle Cloud Infrastructure 2025 Certified Generative AI Professional — scored 92%.',
        tags: ['Oracle', 'OCI', 'Generative AI'],
        runtime: '92%',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'The Contender',
        description: 'Naukri Campus Young Turks 2026 skill contest — 98.42 percentile.',
        tags: ['Naukri Campus', 'Young Turks'],
        runtime: 'Oct 2026',
        palette: amber,
      },
      {
        code: 'S03 E03',
        title: 'The Learner',
        description: 'Google Cloud MLOps for Generative AI and the TCS iON Career Edge Generative AI Essentials programme.',
        tags: ['Google Cloud', 'MLOps', 'TCS iON'],
        runtime: 'Oct 2026',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Originals',
    period: 'Projects',
    synopsis: 'Three Originals — a networking platform, an AI trip planner and a real-time chat app.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The Networker',
        description: 'Networx — React.js, Node.js and PostgreSQL, with a Redis-cached feed that responds about 25× faster on a hit.',
        tags: ['React.js', 'Node.js', 'PostgreSQL', 'Redis'],
        runtime: 'Original #1',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'The Planner',
        description: 'TripGenie — an AI chat that plans hotels and a day-wise itinerary from destination, duration, budget and group size.',
        tags: ['Next.js', 'TypeScript', 'OpenAI API'],
        runtime: 'Original #2',
        palette: ocean,
      },
      {
        code: 'S04 E03',
        title: 'The Connector',
        description: 'VibeConnect — real-time chat rooms over Socket.IO, with a live demo on GitHub Pages.',
        tags: ['Socket.IO', 'WebSocket', 'Node.js'],
        runtime: 'Original #3',
        palette: violet,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'The next arc: advanced computing at C-DAC, Pune.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Post Graduate Certification in Advanced Computing at C-DAC, Pune.',
        tags: ['C-DAC', 'Pune', 'Advanced Computing'],
        runtime: 'Aug 2026 – Feb 2027',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Core language', title: 'Java', detail: 'First on the resume skills list', palette: amber },
  { label: 'The flagship Original', title: 'Networx', detail: 'Redis-cached feed • ~25× faster on a hit', palette: crimson },
  { label: 'The AI Original', title: 'TripGenie', detail: 'AI chat • hotels • day-wise itinerary', palette: ocean },
  { label: 'The real-time Original', title: 'VibeConnect', detail: 'Rooms • Socket.IO • live demo', palette: violet },
  { label: 'Top credential', title: 'Oracle GenAI Pro', detail: 'OCI 2025 • scored 92%', palette: jade },
  { label: 'Biggest contest', title: 'Young Turks 2026', detail: 'Naukri Campus • 98.42 percentile', palette: amber },
  { label: 'Cloud credential', title: 'Google Cloud', detail: 'MLOps for Generative AI', palette: ocean },
  { label: 'The internship', title: 'Front-End Intern', detail: 'Unified Mentor Pvt. Ltd.', palette: crimson },
  { label: 'Latest programme', title: 'TCS iON', detail: 'Generative AI Essentials • Oct 2026', palette: violet },
  { label: 'Current chapter', title: 'C-DAC Pune', detail: 'Advanced Computing • Aug 2026 – Feb 2027', palette: jade },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'CSE → Advanced Computing',
    lines: ['B.E. in Computer Science — Chandigarh University, Mohali', 'PG Certification in Advanced Computing — C-DAC, Pune'],
    chips: ['Class of 2026', 'C-DAC 2026–27'],
  },
  {
    kicker: 'Skills',
    title: 'Java first.',
    lines: ['C, C++, Python, JavaScript, TypeScript, SQL', 'React.js, Next.js · Node.js, Express.js · PostgreSQL, MongoDB'],
    chips: ['Java', 'React.js', 'Next.js', 'Node.js', 'PostgreSQL', 'TypeScript'],
  },
  {
    kicker: 'Internship',
    title: 'Front-End Intern',
    lines: ['Unified Mentor Pvt. Ltd. · June – September 2025', 'Responsive features · UI fixes · Client requirements'],
  },
  {
    kicker: 'Projects',
    title: 'Three Originals',
    lines: ['Networx — Redis feed, ~25× faster on a hit', 'TripGenie — AI trip planner', 'VibeConnect — real-time chat rooms'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['Oracle GenAI Professional — 92%', 'Young Turks 2026 — 98.42 percentile', 'Google Cloud — MLOps for Generative AI'],
  },
  {
    kicker: 'Certified',
    title: `${certifications.length} Certifications`,
    lines: ['Oracle · Google Cloud · TCS iON', 'NPTEL'],
  },
  {
    kicker: 'Current mission',
    title: 'Now at C-DAC',
    lines: ['Advanced Computing · Pune', 'August 2026 – February 2027'],
  },
];

export type ProfileId = 'aman' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'aman',
    name: 'Aman',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & internship', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
