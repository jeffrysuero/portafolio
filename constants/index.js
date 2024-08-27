import GithubIcon from "./../public/assets/icons/github.svg";
import LinkedInIcon from "./../public/assets/icons/linkedin.svg";
import XIcon from "./../public/assets/icons/x.svg";
import InstagramIcon from "./../public/assets/icons/instagram.svg";
import FrontendIcon from "./../public/assets/icons/frontend.svg";
import LeaderShipIcon from "./../public/assets/icons/leadership.svg";
import ProblemSolvingIcon from "./../public/assets/icons/problem-solving.svg";
import FreelancerIcon from "./../public/assets/icons/freelance.svg";
import BackendIcon from "./../public/assets/icons/backend.svg";
import FullStackIcon from "./../public/assets/icons/full-stack.svg";
const basePath = process.env.NODE_ENV === 'production' ? '/portafolio' : '';
const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: <FullStackIcon />,
  },
  {
    title: "Frontend Developer",
    icon: <FrontendIcon />,
  },
  {
    title: "Backend Developer",
    icon: <BackendIcon />,
  },
  // {
  //   title: "Problem Solving",
  //   icon: <ProblemSolvingIcon />,
  // },
  {
    title: "Freelancer",
    icon: <FreelancerIcon />,
  },
  // {
  //   title: "Leadership",
  //   icon: <LeaderShipIcon />,
  // },
];

const technologies = {
  languages: [
    {
      name: "HTML5",
      icon: `${basePath}/assets/tech/html5.svg`,
      link: "https://html.spec.whatwg.org/multipage/",
    },
    {
      name: "CSS3",
      icon: `${basePath}/assets/tech/css3.svg`,
      link: "https://www.w3.org/Style/CSS/Overview.en.html",
    },
    {
      name: "JavaScript",
      icon: `${basePath}/assets/tech/javascript.svg`,
      link: "https://262.ecma-international.org/",
    },
    {
      name: "TypeScript",
      icon: `${basePath}/assets/tech/typescript.svg`,
      link: "https://www.typescriptlang.org/",
    },
    // {
    //   name: "C",
    //   icon: "/assets/tech/c.svg",
    //   link: "https://en.cppreference.com/w/c",
    // },
    // {
    //   name: "Java",
    //   icon: "/assets/tech/java.svg",
    //   link: "https://www.java.com/en/",
    // },
    // {
    //   name: "Python",
    //   icon: "/assets/tech/python.svg",
    //   link: "https://www.python.org/",
    // },
    {
      name: "PHP",
      icon: `${basePath}/assets/tech/php.png`,
      link: "https://www.php.net/",
    },
  ],
  frameworks: [
    {
      name: "Next.js",
      icon: `${basePath}/assets/tech/nextjs.svg`,
      link: "https://nextjs.org/",
    },
    {
      name: "TailwindCSS",
      icon: `${basePath}/assets/tech/tailwindcss.svg`,
      link: "https://tailwindcss.com/",
    },
    {
      name: "Express.js",
      icon: `${basePath}/assets/tech/expressjs.png`,
      link: "https://expressjs.com/",
    },
    {
      name: "Laravel",
      icon: `${basePath}/assets/tech/Laravel.svg.png`,
      link: "https://laravel.com/",
    },
  ],
  libraries: [
    {
      name: "React",
      icon: `${basePath}/assets/tech/react.svg`,
      link: "https://react.dev/",
    },
    // {
    //   name: "Three.js",
    //   icon: "/assets/tech/threejs.svg",
    //   link: "https://threejs.org/",
    // },
    // {
    //   name: "Styled-Components",
    //   icon: "/assets/tech/styled-components.png",
    //   link: "https://styled-components.com/",
    // },
    // {
    //   name: "Framer-motion",
    //   icon: "/assets/tech/framer.svg",
    //   link: "https://www.framer.com/motion/",
    // },
    {
      name: "NextAuth.js",
      icon: `${basePath}/assets/tech/nextauthjs.png`,
      link: "https://next-auth.js.org/",
    },
    {
      name: "Prisma",
      icon: `${basePath}/assets/tech/prisma.svg`,
      link: "https://www.prisma.io/",
    },
  ],
  tools: [
    {
      name: "Git",
      icon: `${basePath}/assets/tech/git.svg`,
      link: "https://git-scm.com/",
    },
    {
      name: "Github",
      icon: `${basePath}/assets/icons/github.svg`,
      link: "https://github.com/",
    },
    {
      name: "Postman",
      icon: `${basePath}/assets/tech/postman.svg`,
      link: "https://www.postman.com/",
    },
    {
      name: "Figma",
      icon: `${basePath}/assets/tech/figma.svg`,
      link: "https://www.figma.com/",
    },
    {
      name: "Docker",
      icon: `${basePath}/assets/tech/docker.svg`,
      link: "https://www.docker.com/",
    },
    {
      name: "AWS",
      icon: `${basePath}/assets/tech/aws.svg`,
      link: "https://aws.amazon.com/",
    },
    {
      name: "DBEAVE",
      icon: `${basePath}/assets/tech/DBeaver_logo.svg.png`,
      link: "https://dbeaver.io/",
    },
  ],
  environments: [
    {
      name: "Node.js",
      icon: `${basePath}/assets/tech/nodejs.svg`,
      link: "https://nodejs.org/en",
    },
  ],
  databases: [
    {
      name: "MongoDB",
      icon: `${basePath}/assets/tech/mongodb.svg`,
      link: "https://www.mongodb.com/",
    },
    {
      name: "Firebase",
      icon: `${basePath}/assets/tech/firebase.svg`,
      link: "https://firebase.google.com/",
    },
    {
      name: "MySQL",
      icon: `${basePath}/assets/tech/my-sql.png`,
      link: "https://www.mysql.com/",
    },

    {
      name: "Postgresql",
      icon: `${basePath}/assets/tech/Postgresql_elephant.svg.png`,
      link: "https://www.postgresql.org/",
    },
    // {
    //   name: "Postgresql",
    //   icon: "/assets/tech/microsoft-sql-server-logo.svg",
    //   link: "https://www.mysql.com/",
    // }
    
  ],
};

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "MAIL BOXES ETC",
    icon: `${basePath}/assets/company/mailboxes.jpeg`,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "As a full stack developer at Mail Boxes Etc., I have led projects focusing on the PrestaShop platform, developing and optimizing eCommerce solutions. My work includes creating and customizing modules and themes in PrestaShop, as well as integrating backend systems using PHP and Laravel. I have enhanced user experience and functionality for online stores, ensuring optimal performance and a smooth shopping experience",
    ],
  },
  {
    title: "Full Stack Developer Freelancer",
    company_name: "Rodriel Tours",
    icon: `${basePath}/assets/company/rodriel.jpg`,
    iconBg: "#E6DEDD",
    date: "June 2023",
    points: [
      "I developed a taxi service system for Rodriel Tours using PHP with the Laravel framework. The project involved creating a comprehensive platform that allowed users to request taxis easily and efficiently. It included features such as online booking, route and fare management, and automatic driver assignment. Additionally, I implemented an admin panel to monitor requests, manage vehicle status, and analyze activity reports. The system was designed with an intuitive interface and a focus on security and operational efficiency",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Media Revolution, SRL",
    icon: `${basePath}/assets/company/media_revolution_srl_logo.jpeg`,
    iconBg: "#E6DEDD",
    date: "Dicember 2021 - mar 2023",
    points: [
      "At Media Revolution, I worked as a full stack developer, specializing in building modern web applications using Node.js, Next.js, and TypeORM. I focused on developing scalable and efficient solutions, creating robust backend systems and dynamic frontend interfaces. My work was aimed at delivering innovative and high-quality products that aligned with business objectives",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Monticello",
    description:
      "Monticello E-commerce is an online store specializing in the sale of honey, developed using PrestaShop and PHP. The platform offers a simple and enjoyable shopping experience, allowing customers to browse a wide selection of high-quality honey. Each product is thoroughly described, highlighting its unique features and benefits. Users can filter by type of honey, origin, and special characteristics, making it easy to find the perfect product. The store includes secure payment options and reliable shipping, ensuring a seamless purchasing experience. Inventory and order management are handled efficiently, guaranteeing product availability and timely delivery.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "prestashop",
        color: "green-text-gradient",
      },
      {
        name: "syfony",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: "/assets/projects/monticello.png",
    source_code_link: "https://github.com/jeffrysuero",
    deployed_link: "https://monticello.com.do/",
  },
  {
    name: "Rodriel Tours",
    description:
      "Rodiel Tours is a taxi service platform developed using Laravel PHP. This project provides a comprehensive solution for managing taxi bookings, allowing users to request rides quickly and efficiently. The system includes key features such as geolocation for assigning nearby taxis, an admin panel for managing bookings and drivers, and a user-friendly interface for managing profiles and tracking rides in real time. The Laravel-based architecture ensures a robust and scalable development, while API integrations and customized features offer a seamless experience for both users and administrators.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "laravel",
        color: "pink-text-gradient",
      },
      {
        name: "filament",
        color: "orange-text-gradient",
      },
      // {
      //   name: "framer-motion",
      //   color: "yellow-text-gradient",
      // },
    ],
    image: `${basePath}/assets/projects/rodriel.png`,
    source_code_link: "https://github.com/jeffrysuero",
    deployed_link: "https://gdscmvjce.vercel.app/",
  },
  {
    name: "Facility Management System",
    description:
      "This project involves creating digital cards using Next.js for the frontend and Node.js for the backend. Users can generate personalized digital cards by entering their information. Each card is associated with a unique QR code that links to a specific user profile. The key features include:Digital Card Generation: Users input their details to create a card.QR Code: Each card features a QR code that, when scanned, redirects to the user’s profile.Backend (Node.js): Handles card creation and QR code generation.Frontend (Next.js): Provides the interface for creating and viewing digital cards.This setup facilitates easy distribution and access to digital information through a simple QR code scan.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "node.js",
        color: "orange-text-gradient",
      },
      // {
      //   name: "tanstack/react-query",
      //   color: "yellow-text-gradient",
      // },
    ],
    image: `${basePath}/assets/projects/tapin.png`,
    source_code_link:
      "https://github.com/jeffrysuero",
    deployed_link:
      "https://tapin-card.com/tapin/login",
  },
  // {
  //   name: "Netflix Clone",
  //   description:
  //     "Netflix-Clone is a fully responsive web application that replicates the popular streaming platform Netflix. It is built using Next.js, Prisma, React, NextAuth.js, Tailwind CSS, MongoDB and TypeScript. This project aims to showcase the implementation of these technologies to create a feature-rich clone of Netflix.",
  //   tags: [
  //     {
  //       name: "next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "typescript",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwindcss",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "mongodb",
  //       color: "orange-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/netflix-clone.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Netflix-Clone.git",
  //   deployed_link: "https://netflix-clone12345.vercel.app",
  // },
  // {
  //   name: "Van-Life",
  //   description:
  //     "VanLife is a user-friendly website built with React that simplifies van searches. It is a web app used to browse different types of vans. It allows users to log in and offers convenient tag-based filtering for easy browsing.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "mirage.js",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "firebase-firestore",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: "/assets/projects/vanlife.png",
  //   source_code_link: "https://github.com/Shivam-Sharma-1/Van-Life.git",
  //   deployed_link: "https://myvanlife.netlify.app",
  // },
  // {
  // 	name: "Spooky-Run",
  // 	description:
  // 		"Spooky Run is a web based 2D arcade style game that allows players to play as a lost dog finding its way back home through a spooky forest. The game is built using vanilla JavaScript and utilizes HTML5 and the 'canvas' element to render graphics and handle user input.",
  // 	tags: [
  // 		{
  // 			name: "html5",
  // 			color: "blue-text-gradient"
  // 		},
  // 		{
  // 			name: "css3",
  // 			color: "green-text-gradient"
  // 		},
  // 		{
  // 			name: "javascript",
  // 			color: "pink-text-gradient"
  // 		}
  // 	],
  // 	image: "/assets/projects/spooky-run.png",
  // 	source_code_link: "https://github.com/Shivam-Sharma-1/Spooky-Run.git",
  // 	deployed_link: "https://shivam-sharma-1.github.io/Spooky-Run"
  // }
];

const socials = [
  {
    id: "github",
    icon: <GithubIcon />,
    link: "https://github.com/jeffrysuero",
  },
  {
    id: "linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/in/jeffry-pascual-suero-camilo-b2a67417b/",
  },
  // {
  //   id: "x",
  //   icon: <XIcon />,
  //   link: "https://twitter.com/Shivam_1_Sharma",
  // },
  // {
  //   id: "instagram",
  //   icon: <InstagramIcon />,
  //   link: "https://www.instagram.com/_.shivam._.here._",
  // },
];

const heroTexts = [
  "React/Next.js developer",
  500,
  "Freelancer",
  500,
  "Full-Stack developer",
  500,
  "Frontend developer",
  500,
  "Backend developer",
  500,
  "PHP developer/Laravel",
  500,
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  socials,
  heroTexts,
};
