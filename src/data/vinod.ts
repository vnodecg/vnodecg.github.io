import { Resume } from "../interfaces/resume";
import flamboyanz from '../assets/logos/flamboyanz.jpeg';
import hashcube from '../assets/logos/hashcube.jpeg';
import songline from '../assets/logos/uninstall.jpeg';
import smartwebs from '../assets/logos/smartwebs.jpeg';
import ciena from '../assets/logos/ciena.jpeg';
import auburn from '../assets/logos/auburn.jpeg';
import vtu from '../assets/logos/vtu.jpeg';
import google from '../assets/logos/google.jpeg';

const resume: Resume = {
  basics: {
    name: "Vinod C G",
    label: "Engineering manager",
    email: "vnodecg1990@gmail.com",
    phone: "+91 95358 49622",
    url: "",
    summary: "Accomplished Software Engineering Manager and Full Stack Developer, adept at leading distributed teams, delivering successful projects, and implementing UI/UX solutions.",
    location: {
      address: "",
      postalCode: "",
      city: "Bangalore",
      countryCode: "IN",
    },
    profiles: [
      {
        network: "linkedin",
        username: "vnodecg",
        url: "https://www.linkedin.com/in/vnodecg",
      },
    ],
  },
  work: [
    {
      name: "Ciena",
      position: "Software Engineering Manager",
      location: "Bangalore, India",
      url: "https://ciena.com",
      startDate: "2021-03-01",
      logo: ciena,
      highlights: [
        "Lead and manage a highly productive and distributed team of 12 developers and 2 QA engineers.",
        "Mentor team members, provide technical guidance, and swiftly address their queries.",
        "Create comprehensive software design documents to ensure efficient development of features and products.",
        "Collaborate with the team to set clear objectives and key results, fostering a sprint-to-sprint approach to achieve targets.",
        "Conduct regular 1:1 meetings to support team members' growth, training, and career advancement.",
        "Spearhead requirement gathering, analysis, scoping, task creation, and sprint planning with stakeholders.",
        "Successfully deliver and manage multiple VS Code extensions for the Blue Planet platform.",
        "Play a crucial role in talent acquisition by conducting interviews and closely collaborating with HR for open positions.",
        "Design robust architectures and author software design documentation for various features in Blue Planet extensions.",
        "Facilitate seamless communication between cross-functional teams, fostering a collaborative work environment.",
        "Proactively engage with end-users across different time zones to collect feedback, leading to continuous product improvement.",
        "Conduct team-building activities to promote cohesion and enhance teamwork.",
      ],
    },
    {
      name: "Ciena",
      position: "Technical lead",
      location: "Austin, Texas",
      url: "https://ciena.com",
      startDate: "2018-11-01",
      endDate: "2021-03-01",
      logo: ciena,
      highlights: [
        "Innovatively implemented a wizard UI for creating and modifying Network Service Descriptor designs.",
        "Addressed scalability issues in the Network Function Virtualization UI, significantly enhancing performance.",
        "Developed a sophisticated JavaScript visualization library for network functions and elements.",
        "Led the successful migration of projects from Ember.js to Angular, improving maintainability and efficiency.",
        "Implemented continuous integration and deployment using TeamCity, streamlining the development process.",
        "Drove the creation, development, and management of Visual Studio Code extensions (TypeScript-based) for the Blue Planet platform.",
        "Translated UX mockups and prototypes into a robust and intuitive Blue Planet VS Code extension.",
        "Demonstrated exceptional leadership by guiding and supporting a front-end team of 6 through sprint-to-sprint activities.",
        "Actively contributed to the hiring process, conducting interviews to onboard talented engineers.",
      ],
    },
    {
      name: "Smartwebs Inc.",
      position: "Senior Fullstack developer",
      location: "Austin, Texas",
      logo: smartwebs,
      url: "https://smartwebs.com",
      startDate: "2018-07-01",
      endDate: "2018-11-01",
      highlights: [
        "Implemented and optimized features for SmartViolations (Home Association Software) using Angular.js and C#.",
        "Championed the adoption of the latest development strategies and continuous integration practices.",
        "Led the establishment of Agile methodologies, including JIRA, daily standups, and sprint planning.",
        "Successfully integrated Freshdesk (customer support software) into existing applications, improving customer satisfaction.",
        "Played a pivotal role in migrating the codebase to TypeScript for enhanced code quality.",
      ],
    },
    {
      name: "Songline Analytics Pvt Ltd.",
      position: "Senior Fullstack developer",
      location: "Bangalore, India",
      url: "https://www.crunchbase.com/organization/uninstall-io",
      startDate: "2015-11-01",
      endDate: "2016-12-01",
      logo: songline,
      highlights: [
        "Developed a dynamic AngularJS-based frontend dashboard to track uninstalls using uninstall.io API.",
        "Designed and implemented visually appealing websites uninstall.io and deepinsights.io using Middleman, HTML, CSS, and JavaScript.",
        "Created a robust push provider for Apple Push Notification Service using Go Lang, Redis, and CouchDB.",
        "Collaborated closely with business analytics and customer success teams to enhance the user experience of the uninstall.io dashboard.",
        "Proactively updated the dashboard with innovative features and bug fixes based on user analytics.",
      ],
    },
    {
      name: "Hashcube Software Pvt Ltd.",
      position: "Fullstack developer",
      location: "Bangalore, India",
      url: "https://www.hashcube.com/",
      logo: hashcube,
      startDate: "2013-09-01",
      endDate: "2015-10-01",
      highlights: [
        "Developed engaging Sudoku Quest game for Facebook Game Room using Backbone.js, jQuery, HTML, and CSS.",
        "Contributed significantly to the implementation of a highly acclaimed mobile version of Sudoku Quest using a hybrid JavaScript framework.",
        "Skillfully integrated various SDKs, including Facebook, Google Services, and Game Analytics, into the Sudoku Quest game.",
        "Designed and built an extendable express.js-based API server for a new game, Gummy Farm.",
        "Collaborated with a talented team to develop the mobile version of Gummy Farm using JavaScript.",
        "Actively participated in hiring processes, conducting interviews to bring in skilled engineers and designers.",
      ],
    },
    {
      name: "Flamboyanz Software Pvt Ltd.",
      position: "Fullstack developer",
      location: "Bangalore, India",
      url: "https://www.linkedin.com/company/flamboyanz-software-private-limited/?originalSubdomain=in",
      logo: flamboyanz,
      startDate: "2012-11-01",
      endDate: "2013-08-01",
      highlights: [
        "Successfully implemented a comprehensive restaurant management system called Tukudu using Hibernate, Struts, HTML, CSS, and JavaScript.",
        "Showcased innovative skills in creating an augmented reality application using the Vuforia SDK and Unity 3D.",
        "Assisted the team in establishing effective development processes and adhering to industry best practices.",
      ],
    },
  ],
  education: [
    {
      institution: "Auburn University",
      url: "https://www.auburn.edu/",
      logo: auburn,
      area: "Computer Science and Software Engineering",
      studyType: "Masters",
      score: "3.5",
      courses: [
        "User Interface Design and Evaluation",
        "Human-Computer Interaction",
        "Software Quality Assurance",
        "Software Process",
        "Computational Intelligence & Adversarial Learning",
        "Artificial Intelligence",
        "Advanced OS",
        "Cryptographic and non-cryptographic methods for network security",
        "Advanced Topics in Algorithms",
        "Advanced Computer architecture",
      ],
    },
    {
      institution: "Vishweshvaraya Technological University",
      url: "https://vtu.ac.in/",
      logo: vtu,
      area: "Computer Science Engineering",
      studyType: "Bachelors",
      score: "65%",
    },
  ],
  certificates: [
    {
      name: "Google Project Management: Specialization",
      date: "2023-02-18",
      issuer: "Coursera",
      logo: google,
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/L99Q76PWG52B",
    },
    {
      name: "Foundations of UX",
      date: "2021-03-28",
      issuer: "Coursera",
      logo: google,
      url: "https://www.coursera.org/account/accomplishments/specialization/certificate/L99Q76PWG52B",
    },
  ],
  skills: [
    {
      name: "Frontend Development (Web and Mobile)",
      level: "Master",
      keywords: [
        "HTML5",
        "CSS3",
        "Sass",
        'User Experience',
        "JavaScript",
        "TypeScript",
        "REST",
        "HTTP",
        "JSON",
        "jQuery",
        "AngularJS",
        "Angular",
        "React",
        "React-native",
        "Dart",
        "Flutter",
        "Bootstrap",
      ],
    },
    {
      name: "Backend development",
      level: "Master",
      keywords: [
        'Python',
        'SQL',
        'MongoDB',
        'Node.js',
        'Express.js'
      ],
    },
    {
      name: "Machine Learning and AI",
      level: "Intermediate",
      keywords: [
        'numpy',
        'scipy',
        'pandas',
        'tensorflow',
        'Neural networks',
        'matplotlib',
        'Reinforcement learning',
      ],
    },
    {
      name: "Devops",
      level: "Intermediate",
      keywords: [
        'Build Automation',
        'Jenkins',
        'Github Actions',
        'Gitlab CI',
        'Shell scripting',
        'Linux',
      ],
    },
    {
      name: 'Management',
      level: 'Master',
      keywords: [
        'Sprint management',
        'Team Management',
        'Stakeholder communication',
        'Sofware design',
        'Risk management',
        'Agile methodology',
        'Mentoring',
        'Hiring',
        'Career development',
        'Life-Cycle management',
        'Techincal Architecture',
        'Software Design',
        'Optimizing',
        'Documentation',
        'Team Management',
      ]
    },
    { name: "Other Tools", level: "Master", keywords: ['Jira', 'Jira Structures', 'Confluence', "Slack Workflows"] },
  ],
  languages: [
    {
      language: "English",
      fluency: "Read, Write and Speak",
    },
    {
      language: "Hindi",
      fluency: "Read, Write and Speak",
    },
    {
      language: "Telugu",
      fluency: "Read and Speak",
    },
    {
      language: "Kannada",
      fluency: "Read, Write and Speak",
    },
  ],
  projects: [
    {
      name: "Novus Editor",
      startDate: "2012-01-01",
      summary:
        "A full-featured source code editor with real-time chat and a shared scratchpad built using JavaFX and codemirror.JS",
    },
    {
      name: "Advanced learning tool (ALT)",
      summary:
        "E-learning platform built to help Auburn University teachers teach advanced phonetic transcriptions to students. Built using React.JS, Redux, Ruby on Rails.",
      startDate: "2018-05-04",
    },
    {
      name: "Ms Pacman RL",
      summary:
        "Reinforcement learning AI class project built using NumPy, TensorFlow, gym. The program plays Ms. Pacman game intelligently to obtain max score using Q Learning.",
      startDate: "2017-07-01",
    },
    {
      name: "Peer Share",
      summary:
        "Award-winning project for Tata Communications Collabhack 2013. Uses web sockets to share files between users",
      startDate: "2013-08-12",
    },
    {
      name: "Malware CAT",
      summary:
        "A malware detector written from scratch in pure Java without libraries. Includes implementation of algorithms like K Nearest-Neighbors, Web Crawler, Steady State GA, Neural network with multiple activation functions, etc.",
      startDate: "2018-04-01",
    },
  ],
};

export default resume;
