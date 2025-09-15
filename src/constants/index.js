import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  cubiksoft,
  Frontend,
  bootstrap,
  express,
  food,
  ecommerce,
  builders,
  crud
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Mernstack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
 
  {
    name: "React JS",
    icon: reactjs,
  },
  
  
  {
    name: "Node JS",
    icon: nodejs,
  },
    
  {
    name: "express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  
  {
    name: "git",
    icon: git,
  },
 
  
];

const experiences = [
  {
    title: "MERN stack Developer",
    company_name: "Cubiksoft Techologies",
    icon: cubiksoft,
    iconBg: "#383E56",
    date: "March 2025 - July 2025",
    points: [
      "Engineered a dynamic and responsive Food Delivery Web Application using the MERN stack, delivering a seamless user experience across all devices.",
      "Integrated secure user authentication, real-time cart management, and order tracking features to streamline the food ordering process.",
      "Designed and developed an intuitive admin dashboard for efficient management of food items, users, and order statuses.",
      "Collaborated with frontend and backend components to ensure smooth API communication, optimized performance, and maintainable codebase.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Qtree Technologies",
    icon: Frontend,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Feb 2025",
    points:[
  "Designed a fully responsive and visually appealing Home Page UI for an E-commerce Tutorial Website using modern frontend technologies.",
  "Showcased key sections like hero banner, featured products, call-to-action buttons, and promotional highlights.",
  "Focused on clean layout, smooth navigation, and beginner-friendly design to guide users through the concept of online shopping.",
  "Implemented responsive grid and reusable UI components to ensure consistency across all screen sizes."
],
  },
  {
    title: "Bootstrap Project",
    company_name: "Qtree Technologies",
    icon: bootstrap,
    iconBg: "#383E56",
    date: "Nov 2024 - Feb 2025",
    points: [
  "Developed a responsive construction company website for 'Unique Builders' using HTML, CSS, and Bootstrap 5, ensuring modern UI and mobile compatibility.",
  "Implemented a full-featured layout including carousel banners, service listings, project portfolio, and a dedicated contact form.",
  "Designed visually appealing sections like 'About Us', 'Our Services', 'Team', and 'Projects' to professionally represent company branding.",
  "Used Bootstrap components and utilities to ensure fast development, clean grid layouts, and cross-browser compatibility."
]
,
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Surya, as a fresher, has done an impressive job on the food delivery project — showing strong dedication, smart thinking, and a clear understanding of real-world application development.",
    name: "Arjun",
    designation: "Tutor",
    company: "Qtree Technologies",
    image: "src/assets/qtree.jpeg",
  }
  // ,{
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Food-delivery",
    description:
      "A full-stack food delivery web app with user login, product browsing, cart, order system, and the food items are not shown once the item add in admin panel it shows in frotend using MERN.",
    tags: [
       {
        name: "React.js",
        color: "blue-text-gradient",
      },
        {
        name: "Node.js",
        color: "pink-text-gradient",
      },
        {
        name: "Express.js",
        color: "orange-text-gradient",
      },
        {
        name: "Mongodb",
        color: "green-text-gradient",
      }
    ],
    image: food,
    source_code_link: "https://food-delivery-frontend-a7h1.onrender.com",
  },
  {
    name: "Unique E-commerce Website",
    description:
      "An online shopping tutorial platform that showcases product listings, offers, and user-friendly design to help users explore e-commerce easily.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
       
    ],
    image: ecommerce,
    source_code_link: "https://unique-ecommerce-website.vercel.app/",
  },
  {
    name: "unique-builders",
    description:
      "A professional construction company website featuring services, projects, team, and contact section with elegant UI and smooth user experience.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: builders,
    source_code_link: "https://unique-builders-chi.vercel.app/",
  },
   {
    name: "CRUD-OPERATIONS",
    description:"A CRUD project is an application that allows users to Create, Read, Update, and Delete data in a database through a simple interface. It demonstrates core database operations and is often used to learn full-stack development.",
    tags: [
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
        {
        name: "Express.js",
        color: "pink-text-gradient",
      },
        {
        name: "Mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: crud,
    source_code_link: "https://github.com/suryapandi08/crud.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
