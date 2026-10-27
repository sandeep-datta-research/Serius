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
    'I’m Sandeep Datta, a student developer and creator from India. I build and explore web experiences and AI projects, work on Luna AI under DeimosAI, run creative projects as Ifsato, and write Clouded by You. I’m learning by building and sharing the journey.',
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
      'Developing Luna AI under the DeimosAI brand and refining web interfaces and user experiences.',
      'Creating anime music videos as Ifsato and writing the supernatural romance web novel Clouded by You.',
    ],
  },
];

export type Metric = { value: string; label: string };
