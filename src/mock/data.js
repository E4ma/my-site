import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'E4ma | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Howdy! I am ',
  name: 'Ifeoma',
  subtitle: 'A Calgary based Web Developer',
  subtitleA: 'pronounced [ee - FAW - mah]',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'arm-brace1.jpg',
  paragraphOne: 'The name is Ifeoma Idoko....Welcome to my site! I am a big picture thinker and a psychology enthusiast, known to have a curious nature, problem solving skills, the ability to learn quickly and a continous improvement mindset.',
  paragraphTwo: 'Runner up for the award of Female Wealth Manager of the Year in Canada (2019), currently completing a Full Stack Web Developer program at EvolveU and loving every minute of it. See my projects for some of my work so far.',
  paragraphThree: '',
  resume: 'Resume', // if no resume, the button will not show up
  projects: 'Projects',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'evolveu-landing.jpg',
    title: 'Landing Page',
    info: 'A simple landing page I created for a landing page contest hosted by EvolveU, the organization where I am completing a Full Stack Web Developer program. I won this contest.',
    info2: '',
    url: 'https://e4ma.github.io/evolveu-landingpage/',
    repo: 'https://github.com/E4ma/evolveu-landingpage', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'roamin.jpg',
    title: 'Roamin`',
    info: 'This is a full stack app prototype, created over the course of 4 weeks with 3 other teammates. The app currently recommends places for the user to visit within their town, based on the travel personality chosen by the user.',
    info2: 'The objective of the app (in future) is to build and store for the user, vacation destinations and activities within Canada, displayed in English and French, and enable the user access to book them.',
    url: 'https://youtu.be/AY5wVro-8UE',
    repo: 'https://github.com/E4ma/travelapp-combined.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'portfolio.JPG',
    title: 'Portfolio Website',
    info: 'This is a portfolio website I built using HTML5, CSS3 and vanilla Javascript as my first project. I was excited to play around with what I had newly learned and I look forward to learning how to make the illustration walk across the page.',
    info2: 'That would be hella cool!',
    url: 'https://e4ma.github.io/evolveu_project1/',
    repo: 'https://github.com/E4ma/evolveu_project1', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Like what you see? Awesome!',
  btn: '',
  email: 'email@ifeomaidoko.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ifeomaidoko/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/E4ma',
    },
  ],
};


