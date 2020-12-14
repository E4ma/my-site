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
  img: 'profile.jpg',
  paragraphOne: 'The name is Ifeoma Idoko....Welcome to my site! I am a big picture thinker and psychology enthusiast known for having a curious nature, problem solving, the ability to learn quickly and a continous improvement mindset',
  paragraphTwo: 'Runner up for the award of Female Wealth Manager of the Year in Canada, I am currently completing a Full Stack Web Developer program at EvolveU and loving every minute of it. See my projects for some of my work so far.',
  paragraphThree: '',
  resume: 'Resume', // if no resume, the button will not show up
  projects: 'Projects',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'face-detect.JPG',
    title: 'Face Detection bot',
    info: 'A simple website that detects faces in pictures. All you have to do it input the picture URL. I built this using mainly React and it makes API calls to Clarifai. It was fun to use some CSS libraries in this project',
    info2: '',
    url: 'https://e4ma.github.io/face-detection-bot/',
    repo: 'https://github.com/E4ma/face-detection-bot', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Roamin`',
    info: 'This is a full stack app prototype created over the course of 4 weeks with 3 other teammates. The app currently recommends places for the user to visit within their town based on the travel personality chosen by the user.',
    info2: 'The objective of the app (in future) is to build and store for the user, vacation destinations and activities within Canada, displayed in English and French, and enable the user access to book them.',
    url: '',
    repo: 'https://github.com/E4ma', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'robotfriends.jpg',
    title: 'Robot Friends',
    info: 'This app lets you search for robot friends from already stored data. The Robots were lovingly delivered by Robohash.org!',
    info2: 'See live and have fun with the robots!',
    url: 'https://e4ma.github.io/robofriends/',
    repo: 'https://github.com/E4ma/robofriends', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work with me? Awesome!',
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
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};


