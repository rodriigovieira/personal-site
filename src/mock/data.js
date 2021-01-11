import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Rodrigo Vieira | Mobile Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Building cutting-edge apps', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Rodrigo Vieira',
  subtitle: 'Currently building cutting-edge apps',
  cta: 'Shall we begin?',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "I was born in Aracaju, SE (Brazil) and started my first website at the age of 13. I always loved learning new technologies and finding tools to improve the quality of the systems I've built.",
  paragraphTwo:
    'After building websites using all types of tools, I took my chance with app development at 20, right after I came back from a summer in Montreal, Canada.',
  paragraphThree:
    'After this, I started traveling around the world and spent a semester overseas while working remotely. At this moment, I build amazing projects, with a special passion for mobile apps, and contribute to open-source projects.',
  resume: 'https://github.com/rodriigovieira/resume',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'ulocal.png',
    title: 'Ulocal',
    info:
      'Ulocal helps find restaurants offering local produce, microbreweries, artisans, vineyards or local designers and more. Ulocal is there for people who travel and want to quickly locate companies with local products wherever they are. Whether in unknown regions, in everyday life, as a tourist. Ulocal promotes local and ecological diversity.',
    info2: 'Lead Developer - developed with Flutter.',
    url: 'https://ulocal.co',
  },
  {
    id: nanoid(),
    img: 'reward_me_now.png',
    title: 'Reward Me Now',
    info:
      'Reward Me Now offers employers the ability to give their staff incredible perks. You can reward your employees for their hard work and help their wages go further',
    info2:
      'Developer - Developed with React Native, plus several custom modifications made in Swift and Java.',
    url: 'https://www.rewardmenow.co.uk',
  },
  {
    id: nanoid(),
    img: 'i4fit.png',
    title: 'i4fit',
    info:
      'i4fit was developed to end the traditional paper training sheet in the gym. It manages the workout of studends of dozens of gyms across Brazil. It integrtes the services provided by iFitness.',
    info2: 'Lead Developer - developed for IntegraFácil, with React Native.',
    url: '',
  },
  {
    id: nanoid(),
    img: 'bestclean.png',
    title: 'BestClean',
    info:
      "Application for an industrial laundry made to assist in all tasks related to the company's organization. Clients can track their packages and see in which exact stage their package is, and the staff can also easily manage internally all the active orders, reducing to almost 0 the use of paper.",
    info2: 'Lead Developer - developed with React, Node and Flutter.',
    url: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: "Let's Talk",
  email: 'rodriigovieira@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'stack-overflow',
      url: 'https://stackoverflow.com/users/10403944/rodrigo-vieira',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://br.linkedin.com/in/rodriigovieira',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/rodriigovieira',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
