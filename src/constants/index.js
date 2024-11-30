import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

//socials
import linkedin from '../assets/socials/linkedin.svg';

//collab
import node from '../assets/collaboration/node-js.svg';
import react from '../assets/collaboration/reactjs.svg';
import postgress from '../assets/collaboration/postgresq.svg';
import mongo from '../assets/collaboration/mongodb.svg';
import firebase from '../assets/collaboration/firebase.svg';
import native from '../assets/collaboration/native.svg';
import tail from '../assets/collaboration/tailwind.svg';
import next from '../assets/collaboration/nextjs.svg';



//benefits
import app from '../assets/benefits/appdesign.svg';
import web from '../assets/benefits/webdev.svg';
import market from '../assets/benefits/market.svg';
import web1 from '../assets/benefits/9906021.svg';
import market1 from '../assets/benefits/market1.jpg';
import con from '../assets/benefits/5149654.jpg';
import app1 from '../assets/benefits/app1.jpg';
import cons from '../assets/benefits/cons.jpg';
import soca from '../assets/benefits/management.svg';
import poster from '../assets/benefits/design.jpg';

//workers
import navaneeth from '../assets/workers/navaneeth.jpg';
import anish from '../assets/workers/anish.jpg'


export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "#hero",
  },
  {
    id: "1",
    title: "Servies",
    url: "#features",
  },
  {
    id: "2",
    title: "Contact",
    url: "#contact",
  },


];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "App development",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "Currently",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Web development",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "Currently",
    status: "done",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Poster",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "Currently",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Saas",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "Nov 2024 - Present",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "We prioritize user satisfaction and tailor our tech stack to deliver the best possible product. Whether it's a sleek web application, a robust mobile app, or a scalable backend system, we meticulously select and implement the most suitable technologies to ensure a secure, performant, and user-friendly experience.";

export const collabContent = [
  {
    id: "0",
    title: "UI/UX",
    text: "We leverage the power of Figma to design visually stunning and user-friendly interfaces. Figma allows us to collaborate seamlessly with designers and developers, ensuring a cohesive design and development process.",
  },
  {
    id: "1",
    title: "Frontend ",
    text:"Frontend development, we primarily rely on ReactJS, a powerful JavaScript library that allows us to create dynamic user interfaces. To style and structure our applications, we utilize a combination of Tailwind CSS for rapid development and Bootstrap for pre-built components. We also leverage Material-UI and Shadcn for advanced UI components and design systems."
  },
  {
    id: "2",
    title: "Backend",
    text:'Backend development is powered by Node.js, a versatile JavaScript runtime environment. We build RESTful APIs using Express.js to handle data requests and responses. For database management, we utilize a combination of Firebase for real-time data synchronization, PostgreSQL for structured data, and MongoDB for flexible, document-based data storage.'
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Native",
    icon: native,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "NodeJs",
    icon: node,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "ReactJS",
    icon: react,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "tailwind",
    icon: tail,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Postgress",
    icon: postgress,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Mongodb",
    icon: mongo,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Firebase",
    icon: firebase,
    width: 38,
    height: 32,
  },
 
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Web Development",
    text: "Expert web development services to bring your online vision to life.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: web,
    imageUrl: web1,
  },
  {
    id: "1",
    title: "Mobile App Development",
    text: "Innovative app development for seamless user experiences.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: app,
    imageUrl: app1,
    light: true,
  },
  {
    id: "2",
    title: "Consultancy Services",
    text: "Strategic consulting to elevate your digital presence.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: cons,
  },
  {
    id: "3",
    title: "Social Media Management",
    text: " Engaging social media strategies to boost your brand.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: soca,
    imageUrl: con,
    light: true,
  },
  {
    id: "4",
    title: "Ecommerce development",
    text: "Innovative eCommerce development solutions to engage and delight your customers.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: poster,
  },
  {
    id: "5",
    title: "Digital Marketing",
    text: "Comprehensive digital marketing campaigns to maximize your reach.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: market,
    imageUrl: market1,
  },
];

export const socials = [
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://x.com/growisencom",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://www.instagram.com/growisenco/",
  },
  {
    id: "3",
    title: "Linkedin",
    iconUrl: linkedin,
    url: "https://in.linkedin.com/company/growisen",
  },

];

export const workers = [
  {
    id: 1,
    name: 'Albin Sony',
    role: 'CEO & Founder',
    image: '/api/placeholder/300/400'
  },
  {
    id: 2,
    name: 'Seion Shoji',
    role: 'CEO & Founder',
    image: '/api/placeholder/300/400'
  },
  {
    id: 3,
    name: 'Alen P Aji',
    role: 'Tech Lead',
    image: '/api/placeholder/300/400'
  },
  {
    id: 4,
    name: 'Anish V Mathew',
    role: 'Developer',
    image: anish
  },
  {
    id: 5,
    name: 'Athul Sabu',
    role: 'Developer',
    image: '/api/placeholder/300/400'
  },
  {
    id: 6,
    name: 'Navaneeth Krishna',
    role: 'Developer',
    image: navaneeth
  },
  {
    id: 7,
    name: 'Naveen Alex',
    role: 'Developer',
    image: '/api/placeholder/300/400'
  },
  


];