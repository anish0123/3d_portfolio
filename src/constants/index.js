import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    swappie,
    tgrwrt,
    documentChat,
    omaGarden,
    homeweather,
    petmatchfinder,
    java,
    spring_boot,
    php,
    solidjs
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Spring Boot",
      icon: spring_boot,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Solid.js",
      icon: solidjs,
    },
    
  ];

  const education = [
    {
      degree: "Bachelor in Information Technology",
      date: "Aug 2021 - Present",
      location: "Espoo, Finland",
      school: "Metropolia University of Applied Sciences"
    },
    {
      degree: "Bachelor in Business Administration",
      date: "Sept 2016 - May 2020",
      location: "Espoo, Finland",
      school: "Laurea University of Applied Sciences"
    }
  ]
  
  const experiences = [
    {
      title: "Diagnostics and Preparation Coach",
      company_name: "Swappie",
      icon: swappie,
      iconBg: "#383E56",
      date: "Jul 2020 2020 - Apr 2023",
      points: [
        "Providing training and support to members of team.",
        "Recording the data of received materials.",
        "Running diagnostics of refurbished phones.",
        "Repairing of refurbished phones.",
      ],
    },
    {
      title: "Software Development Trainee",
      company_name: "TOYOTA GAZOO Racing World Rally Team",
      icon: tgrwrt,
      iconBg: "#E6DEDD",
      date: "Aug 2023 - Aug 2024",
      points: [
        "Developing and implementing web applications using SCRUM Agile methods.",
        "Creating and maintaining user interfaces using SolidJS, Tailwind CSS, and TypeScript.",
        "Creating and integrating APIs for seamless communication between the front-end and back - end components of applications.",
        "Ensuring efficient data organisation using SQL Server, H2 Memory Database, MySQL, MariaDB.",
        "Utilising version control systems like Git to track code changes and collaborate with other team members.",
        "Managing Azure DevOps CI/CD pipelines to deploy code changes."
      ],
    },
    {
      title: "Junior Software Developer",
      company_name: "TOYOTA GAZOO Racing World Rally Team",
      icon: tgrwrt,
      iconBg: "#383E56",
      date: "Sept 2024 - Present",
      points: [
        "Supporting software design and coding efforts under the guidance of senior developers.",
        "Participating in development meetings and contributing to discussions on project progress, challenges, and solutions.",
        "Learning and familiarising with the codebase, continuously improving coding skills and technical knowledge.",
        "Writing, testing, and maintaining code to support ongoing projects and feature development.",
        "Developing a deep understanding of the business domain, ensuring alignment of technical solutions with business needs.",
        "Collecting and analysing user feedback to enhance program functionality and user experience.",
        "Monitoring the performance of internal systems and identifying opportunities for optimisation."
      ],
    },
  ];
 
  
  const projects = [
    
    {
      name: "Pet Match Finder",
      description:
        "Pet Match Finder is an application where users are able to login, view pets, adopt pets or put pets for adoption online, provide ratings and feedback to other users. It is a graphQl server built with TypeScript, Node.js and Express. The main aim of this app is to create seamless interface for pet adoption.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "GraphQL",
          color: "pink-text-gradient",
        },
      ],
      image: petmatchfinder,
      source_code_link: "https://github.com/anish0123/petMatchFinderAPI",
    },
    {
      name: "Home Weather",
      description:
        "HomeWeather is an android mobile sensor-based application utilizing DHT22 temperature-humidity sensor. This is a project developed under Metropolia University of Applied Sciences. For further information, please see below or contact one of the developers",
      tags: [
        {
          name: "Kotlin",
          color: "blue-text-gradient",
        },
        {
          name: "Firebase",
          color: "green-text-gradient",
        },
        {
          name: "Arduino",
          color: "pink-text-gradient",
        },
      ],
      image: homeweather,
      source_code_link: "https://github.com/anish0123/HomeWeather",
    },
    {
      name: "Oma Garden",
      description:
        "Oma Garden is a mobile application built with React Native that allows users to upload and share pictures of their beloved plants. This app is designed to provide a seamless and user-friendly experience for plant enthusiasts.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "javaScript",
          color: "green-text-gradient",
        },
        {
          name: "react-hooks",
          color: "pink-text-gradient",
        },
      ],
      image: omaGarden,
      source_code_link: "https://github.com/anish0123/omaGarden",
    },
    {
      name: "Document Chat",
      description:
        "Document Chat is a project developed under Metropolia University of Applied Sciences's scope. It is an application where user can login to keep chat history, chat, upload a document to interact with (e.g Q&A), and logout.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Llama 2",
          color: "pink-text-gradient",
        },
      ],
      image: documentChat,
      source_code_link: "https://github.com/anish0123/DocumentChat",
    },
  ];
  
  export { technologies, experiences, projects, education };