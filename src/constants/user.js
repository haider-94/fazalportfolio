import {
  boon1,
  boon2,
  klaro1,
  klaro2,
  klaro3,
  prologis1,
  prologis2,
  prologis3,
  runbuddy1,
  runbuddy2,
  vstora,
  w9manager,
  xcite,
  phone,
  github,
  gmail,
  linkedin,
  stackoverflow,
} from "../../public";

export const user = {
  about: `A Software Engineering Graduate, playing with apps for over 5+ years. I am a Coder by choice and Problem Solver by profession.
  Currently serving as a Full Stack Eng. at Vendor Jump.Project Count: 25+
  `,
  personal: {
    name: "Sam Gill",
    title: "Full Stack Senior Software Engineer",
  },
  experience: [
    {
      id: 1,
      duration: "2022 - Present",
      role: "Senior Lead Engineer",
      company: "Independent Contractor",
      jd: "Worked as a Full Stack Eng. on KLARO(a mobile app).The app was based on monitoring the atmospheric stats of a Humidor and user notification based on personal preferences. The app had shopify integrated modules and backend integrated in Ruby on Rails and NodeJs.",
      stacks: [
        "React Native",
        "Ruby on Rails",
        "AWS",
        "Node",
        "Redux",
        "Shopify",
        "Push Notifications",
        "BLE Integration",
      ],
    },
    {
      id: 2,
      duration: "Aug 2021 - Apr 2022",
      role: "Senior Lead Engineer",
      company: "Nisum",
      jd: "Delivered high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
      stacks: ["React Native", "JavaScript", "React", "Typescript", "Node"],
    },
    {
      id: 3,
      duration: "Jan 2019 - Aug 2021",
      role: "Senior Lead Engineer",
      company: "Devsinc",
      jd: "Worked as a Full Stack Software Engineer, with expertise in Front End Development.",
      stacks: ["ROR", "React", "React Native", "Angular 8", "PostgreSQL"],
    },
    {
      id: 4,
      duration: "Mar 2018 - Dec 2018",
      role: "Senior Lead Engineer",
      company: "Codexia",
      jd: "Worked as an Ionic Developer with a startup on following apps:- QuitFix: Anti Smoking app, keeping a track of non smoked days with some reward features.- Kodeec: A Property Selling app with Firebase configured APIs.- Cambuz: Social Media app with limited E-commerce and gaming modules and Angular6 based Admin Panel. I learnt the basics of hybrid mobile applications and manual mobile testing.",
      stacks: ["Ionic", "Angular", "Firebase"],
    },
    {
      id: 5,
      duration: "Sep 2017 - Feb 2018",
      role: "Senior Lead Engineer",
      company: "Narsun Studios",
      jd: `It was my first professional experience in the software industry. I was involved in:
      - Making Web Based mobile apps for Xcite Interactive
      - Maintaining the code quality and understanding the architecture
      - Integrating app with Firebase APIs for data manipulation
      - Knowing the concepts Git
      - Creating UI by working closely with UI / UX designers
      
      I learnt the basic of Web Development, Git, UI development and Front End Programming.`,
      stacks: ["Angular 6", "Firebase", "Node", "Electron"],
    },
  ],
  projects: [
    {
      id: 2,
      projectName: "Vstora",
      description: `One stop solution for creating and managing your online business with inventory management.`,
      link: "https://vstora.com/",
      images: [vstora],
    },
    {
      id: 3,
      projectName: "KLARO",
      description: `A mobile app to monitor atmospheric stats of a humidor and broadcast notifications based on user personal preferences. It had integrations with shopify, apple store and couple of other third-party statistical apps.`,
      link: "https://klarocigars.com/",
      images: [klaro1, klaro2, klaro3],
    },
    {
      id: 4,
      projectName: "Prologis",
      description: `A web app to manage your property, find warehouse solutions, contact support and more. It is an owner, operator, and developer of industrial real estate, focused on global markets across the Americas, Europe, and Asia.`,
      link: "https://www.prologis.com/",
      images: [prologis1, prologis2, prologis3],
    },
    {
      id: 5,
      projectName: "Run Buddy",
      description: `A hybrid mobile application to manage workout scheduling for pets. App included features like authentication, scheduling, payment integrations, Google Places APIs integrations, chat module, camera and call integrations.`,
      link: "http://runbuddymobile.com/",
      images: [runbuddy1, runbuddy2],
    },
    {
      id: 6,
      projectName: "Boon – Hiring and Referral Management System",
      description: `A platform that provides organizations to put on Job vacancies for candidates to apply and refer others for the position. It had a web-based admin panel and for end users a web app along with hybrid mobile app was designed. Jobs had associated
      bounties and a complete hiring process was automated.`,
      link: "https://goboon.co/",
      images: [boon1, boon2],
    },
    {
      id: 7,
      projectName: "W9Manager – Taxation and W9 Management System",
      description: `A corporate level web system designed to manage W9s and taxation related legal procedures. Application had service- based modules for different clients including vendors imports and management, TIN import and management, services for legal procedures.`,
      link: "https://www.w9manager.com/",
      images: [w9manager],
    },
    {
      id: 8,
      projectName: "Charity and Donation System ",
      description: `An app to manage cases for charity and monthly donations. Cases had validation stages and upon completion a donation plan was granted to the case. It had an admin panel for managerial tasks and different portals as per user role.`,
    },
    {
      id: 9,
      projectName: "Xcite -- Interactive Games",
      description: `These were web-based apps, used to interact with animations designed on Unreal Engine. Animations were played on stadium jumbotrons, apps interacted using firebase and the game stats were saved using firestore.`,
      link: "https://www.gcmvp.com/",
      images: [xcite],
    },
  ],

  navItems: [
    // {
    //   link: "tel:+923244962952",
    //   alt: "phone icon",
    //   icon: phone,
    // },
    // {
    //   link: "mailto:fazalkarim.se@gmail.com",
    //   alt: "gmail icon",
    //   icon: gmail,
    // },
    // {
    //   link: "https://github.com/fazal26",
    //   alt: "github icon",
    //   icon: github,
    // },
    {
      link: "https://www.linkedin.com/in/sammygill/",
      alt: "linkedin icon",
      icon: linkedin,
    },
    // {
    //   link: "https://stackoverflow.com/users/10195813/fazal-karim",
    //   alt: "stackoverflow icon",
    //   icon: stackoverflow,
    // },
  ],

  personalNavbar: [
    {
      selected: "● About",
      notSelected: "About",
    },
    {
      selected: "● Experience",
      notSelected: "Experience",
    },
    {
      selected: "● Projects",
      notSelected: "Projects",
    },
  ],
};
