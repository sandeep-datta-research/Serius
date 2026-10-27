/**
 * Central portfolio data for Sandeep Datta.
 * Achievement and credential cards marked DRAFT are temporary placeholders to verify before publishing.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Sandeep Datta',
  displayName: 'Sandeep Datta',
  firstName: 'SANDEEP',
  seriesTag: 'THE SERIES',
  originalLabel: 'A SANDEEP ORIGINAL',
  role: 'Student Developer, AI Builder & Creator',
  tagline: ['Web Development', 'AI Projects', 'Writing & AMVs'],
  intro:
    'I’m Sandeep Datta, a student developer and creator from India. I build and explore web experiences and AI projects, work on Luna AI under DeimosAI, create anime edits as Ifsato, and write Clouded by You. I’m learning by building and sharing the journey.',
  location: 'India',
  email: 'sandeepdatta866@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/sandeep-datta-9293a63/',
    github: 'https://github.com/sandeep-datta-research',
    instagram: 'https://www.instagram.com/ifsato/',
    youtube: 'https://www.youtube.com/@ifsato',
    x: 'https://x.com/ifseiua',
    webnovel: 'https://www.webnovel.com/book/clouded-by-you_35645915308878605',
    luna: 'https://github.com/sandeep-datta-research/Luna',
    deimosai: 'https://github.com/sandeep-datta-research/Deimosai',
  },
  resumePdf: '',
  portrait: {
    src: '',
    srcSet: '',
    alt: 'Portrait of Sandeep Datta',
  },
  interests: ['AI & Web Development', 'Linux & Developer Tools', 'Writing & Anime Video Editing'],
};

export const education = [
  {
    school: 'Class 10',
    place: 'India',
    degree: 'Secondary school student',
    period: 'Currently studying',
    score: 'Details to be added',
  },
];

export const experience = [
  {
    company: 'Independent Projects',
    role: 'Student Developer & Creator',
    place: 'India',
    period: 'Ongoing',
    points: [
      'Building and experimenting with personal software projects while learning web development and AI tooling.',
      'Exploring Linux, developer workflows, and cybersecurity fundamentals in a learning environment.',
      'Creating anime edits and developing the supernatural romance story Clouded by You.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'luna-ai',
    title: 'Luna AI',
    year: '2026',
    genre: 'AI • Product Development',
    logline: 'A personal AI assistant project under the DeimosAI brand.',
    stack: ['AI', 'Web Development', 'Product Design'],
    build: [
      'An ongoing personal project exploring an AI assistant experience and a polished chat interface.',
      'Project status and feature claims are intentionally kept modest until the next public release.',
    ],
    features: ['AI assistant concept', 'Chat interface', 'Product and UX iteration'],
    metrics: [
      { value: 'In progress', label: 'project status' },
      { value: 'DeimosAI', label: 'parent brand' },
    ],
    github: 'https://github.com/sandeep-datta-research/Luna',
    palette: { from: '#10091f', via: '#38206a', to: '#07070a', accent: '#b98bff' },
    motif: 'shield',
  },
  {
    id: 'deimosai',
    title: 'DeimosAI',
    year: '2026',
    genre: 'AI • Brand • Product Experiments',
    logline: 'The umbrella brand for experiments and products including Luna AI.',
    stack: ['AI', 'Product Thinking', 'Web'],
    build: [
      'Developing a long-term product vision around AI-powered tools and user experiences.',
      'This portfolio entry is a draft and will be updated with confirmed milestones.',
    ],
    features: ['AI product concepts', 'Brand development', 'Iterative prototyping'],
    metrics: [{ value: 'In development', label: 'current status' }],
    github: 'https://github.com/sandeep-datta-research/Deimosai',
    palette: { from: '#03121d', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
  },
  {
    id: 'stellan',
    title: 'Stellan',
    year: '2026',
    genre: 'Web • Portfolio • UI',
    logline: 'A cinematic personal portfolio adapted from an open-source portfolio project.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    build: [
      'Imported an existing portfolio codebase and began adapting its identity and content.',
      'The original layout and animations are being retained while the portfolio data is personalized.',
    ],
    features: ['Animated opening sequence', 'Project showcase', 'Responsive layout'],
    metrics: [{ value: 'In progress', label: 'customization status' }],
    github: 'https://github.com/sandeep-datta-research/Serius',
    palette: { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' },
    motif: 'tenants',
  },
  {
    id: 'echo',
    title: 'Echo',
    year: '2026',
    genre: 'Web • Portfolio • Interactive Design',
    logline: 'A monochrome editorial portfolio showcasing Sandeep Datta’s projects, creative work, and interests.',
    stack: ['HTML', 'Tailwind CSS', 'JavaScript', 'Interactive UI'],
    build: [
      'An editorial-style portfolio with animated sections, featured projects, and responsive layouts.',
      'Built as a companion project to the Serius / Stellan portfolio.',
    ],
    features: ['Editorial portfolio', 'Interactive project showcase', 'Responsive layout'],
    metrics: [{ value: 'Live', label: 'portfolio status' }],
    github: 'https://github.com/sandeep-datta-research/Echo',
    palette: { from: '#101010', via: '#424242', to: '#050505', accent: '#f2f2f2' },
    motif: 'flow',
  },
  {
    id: 'clouded-by-you',
    title: 'Clouded by You',
    year: 'Ongoing',
    genre: 'Writing • Romantasy • Mystery',
    logline: 'An original supernatural romance story involving rain, reincarnation, and Japanese mythology.',
    stack: ['Creative Writing', 'Worldbuilding', 'Storytelling'],
    build: [
      'Developing an ongoing web novel that combines romance, mystery, supernatural weather, and Japanese mythological inspiration.',
      'The story is published under the author name Ifsato.',
    ],
    features: ['Original characters', 'Supernatural mystery', 'Serialized storytelling'],
    metrics: [{ value: 'Ongoing', label: 'writing project' }],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'flow',
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
    id: 'luna-builder-draft',
    title: 'AI Product Builder',
    org: 'Luna AI • DRAFT',
    detail: 'Temporary portfolio placeholder for work on a personal AI assistant. Replace with a verified milestone before public use.',
    laurel: 'Draft — Verify',
  },
  {
    id: 'indie-founder-draft',
    title: 'Independent Project Creator',
    org: 'DeimosAI • DRAFT',
    detail: 'Temporary placeholder recognizing early product and brand experiments. Not an award or formal credential.',
    laurel: 'Draft — Verify',
  },
  {
    id: 'creative-author-draft',
    title: 'Web Novel Author',
    org: 'Clouded by You • DRAFT',
    detail: 'Temporary placeholder for developing an original serialized supernatural romance story.',
    laurel: 'Draft — Verify',
  },
  {
    id: 'creator-draft',
    title: 'Video Editor & AMV Creator',
    org: 'Ifsato • DRAFT',
    detail: 'Temporary placeholder for anime music video editing and online creative work. Add verified links and metrics later.',
    laurel: 'Draft — Verify',
  },
  {
    id: 'learning-draft',
    title: 'Self-Directed Learner',
    org: 'Web • AI • Linux • DRAFT',
    detail: 'Temporary placeholder for ongoing learning in development tools, Linux, and AI. Replace with specific completed work.',
    laurel: 'Draft — Verify',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'PLACEHOLDER', name: 'Add a verified certificate here', link: 'https://github.com/sandeep-datta-research' },
  { issuer: 'PLACEHOLDER', name: 'Add a completed course or credential', link: 'https://github.com/sandeep-datta-research' },
  { issuer: 'PLACEHOLDER', name: 'Add a verified competition or award', link: 'https://github.com/sandeep-datta-research' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Learning and building',
    skills: [
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'Python', mono: 'Py' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
    ],
  },
  {
    id: 'frontend',
    title: 'Web & UI',
    subtitle: 'Interfaces and experiences',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Vite', mono: 'Vi' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'Framer Motion', mono: 'Fm' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Systems',
    subtitle: 'Developer workflow',
    skills: [
      { name: 'Linux', mono: 'Lx' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'SSH', mono: 'Sh' },
      { name: 'AI Tooling', mono: 'AI' },
    ],
  },
  {
    id: 'creative',
    title: 'Creative Work',
    subtitle: 'Making things beyond code',
    skills: [
      { name: 'Creative Writing', mono: 'Wr' },
      { name: 'Video Editing', mono: 'Ve' },
      { name: 'Worldbuilding', mono: 'Wb' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, certifications or achievements on the resume.
 */
export const skillEvidence: Record<string, string[]> = {
  JavaScript: ['Stellan portfolio customization'],
  TypeScript: ['Stellan portfolio customization'],
  React: ['Stellan portfolio customization', 'Luna AI'],
  'Tailwind CSS': ['Stellan portfolio customization'],
  'Framer Motion': ['Stellan portfolio animations'],
  'Git / GitHub': ['Luna AI', 'DeimosAI', 'Stellan'],
  'Creative Writing': ['Clouded by You'],
  'Video Editing': ['Ifsato AMV projects'],
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
    title: 'The Learning Arc',
    period: 'Ongoing',
    synopsis: 'Learning, experimenting, and finding a direction across software and creative work.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Builder',
        description: 'Exploring web development, GitHub workflows, and AI tools through hands-on projects.',
        tags: ['Web Development', 'GitHub', 'AI'],
        runtime: 'Ongoing',
        palette: violet,
      },
      {
        code: 'S01 E02',
        title: 'The Creator',
        description: 'Developing Clouded by You and creating anime edits under Ifsato.',
        tags: ['Writing', 'AMV', 'Storytelling'],
        runtime: 'Ongoing',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Building Products',
    period: '2026',
    synopsis: 'Personal projects and portfolio experiments, with details still being refined.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Luna AI',
        description: 'An AI assistant project under the DeimosAI brand.',
        tags: ['AI', 'Product', 'Web'],
        runtime: 'In development',
        palette: crimson,
      },
      {
        code: 'S02 E02',
        title: 'Stellan',
        description: 'Adapting a cinematic portfolio while preserving its original design and animations.',
        tags: ['React', 'TypeScript', 'Motion'],
        runtime: 'In progress',
        palette: amber,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'AI Project', title: 'Luna AI', detail: 'Personal AI assistant project • in development', palette: violet },
  { label: 'Parent Brand', title: 'DeimosAI', detail: 'AI product experiments', palette: ocean },
  { label: 'Portfolio', title: 'Stellan', detail: 'Cinematic portfolio customization', palette: amber },
  { label: 'Writing', title: 'Clouded by You', detail: 'Original supernatural romance web novel', palette: jade },
  { label: 'Creative Work', title: 'Ifsato AMVs', detail: 'Anime edits and video experiments', palette: crimson },
  { label: 'Focus', title: 'Web Development', detail: 'Learning by building', palette: ocean },
  { label: 'Systems', title: 'Linux', detail: 'Exploring Linux and developer workflows', palette: jade },
  { label: 'AI', title: 'AI Tooling', detail: 'Experimenting with AI-assisted development', palette: violet },
  { label: 'Learning', title: 'Cybersecurity Basics', detail: 'Foundational learning and safe practice', palette: amber },
  { label: 'Next Chapter', title: 'More Projects', detail: 'Verified milestones to be added', palette: crimson },
];

export const introSlides = [
  {
    kicker: 'The Builder',
    title: 'IDEAS INTO PROJECTS',
    lines: ['Learning by building and experimenting.', 'Exploring web development and AI tools.'],
    chips: ['Luna AI', 'DeimosAI', 'Stellan'],
  },
  {
    kicker: 'The Creator',
    title: 'STORIES & SCENES',
    lines: ['Writing Clouded by You.', 'Creating anime edits under Ifsato.'],
    chips: ['Writing', 'AMV', 'Storytelling'],
  },
  {
    kicker: 'The Explorer',
    title: 'ALWAYS LEARNING',
    lines: ['Exploring Linux and developer workflows.', 'Building skills one project at a time.'],
    chips: ['Linux', 'GitHub', 'AI'],
  },
  {
    kicker: 'Next Chapter',
    title: 'MORE TO COME',
    lines: ['Projects and verified achievements will be added as they grow.'],
    chips: ['In progress'],
  },
];

export type ProfileId = 'sandeep' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'sandeep',
    name: 'Sandeep',
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
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & training', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
