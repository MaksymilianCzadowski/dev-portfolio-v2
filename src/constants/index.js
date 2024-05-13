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
  cleed,
  incrafty,
  arondor,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  vue,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Java Developer",
    company_name: "Incrafty",
    icon: incrafty,
    iconBg: "#F7CA18",
    date: "September 2020 - June 2021",
    points: [
      "Designing and developing innovative mini-games on the Minecraft server, utilizing plugins and tools tailored to the platform.",
      "Collaborating closely with a team of enthusiasts to craft immersive and entertaining gaming experiences.",
      "Optimizing server performance to ensure smooth and seamless gameplay for players.",
      "Implementing multiplayer features and managing latency issues to ensure an enjoyable online gaming experience.",
      "Actively engaging with the player community, gathering feedback and suggestions to continuously improve the mini-games and server environment."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Cleed",
    icon: cleed,
    iconBg: "#1241cf",
    date: "June 2022 - June 2023",
    points: [
      "Developed and maintained web applications using Node.js and Vue.js, ensuring high performance and scalability.",
      "Collaborated with cross-functional teams to design and implement features that meet both user and business requirements.",
      "Implemented RESTful APIs and integrated third-party services to enhance application functionality.",
      "Utilized modern frontend development tools and techniques to create responsive and user-friendly interfaces.",
      "Participated in code reviews, providing constructive feedback to team members to maintain code quality and consistency.",
      "Troubleshooted and debugged issues to ensure smooth operation of applications in production environments."
    ],
  },
  {
    title: "Java Developer",
    company_name: "Arondor",
    icon: arondor,
    iconBg: "#ffffff",
    date: "September 2023 - Present",
    points: [
      "Designing and developing Java-based solutions for Document Management Systems (DMS) to meet client requirements and industry standards.",
      "Collaborating with interdisciplinary teams to analyze, design, and implement efficient and scalable DMS solutions.",
      "Implementing and maintaining features such as document capture, storage, retrieval, and workflow automation.",
      "Integrating third-party tools and services to extend the functionality of DMS solutions and improve user experience.",
      "Ensuring code quality and adherence to best practices through code reviews, testing, and documentation.",
      "Providing technical support and troubleshooting assistance to clients and internal teams to resolve issues and optimize performance."
    ],
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  // {
  //   name: "Job IT",
  //   description:
  //     "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "restapi",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "scss",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/",
  // },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, projects };