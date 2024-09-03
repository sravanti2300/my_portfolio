import {
    rupeek,
    truminds
} from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    pure,
    nodejs,
    react,
    sass,
    typescript,
    chatbot,
    stocks,
    database,
    drone,
    cafe,
    neu,
    ba,
    postgres,
    sql,
    python,
    JAVA
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: postgres,
        name: "postres",
        type: "Database",
    },
    {
        imageUrl: sql,
        name: "SQL",
        type: "Database",

    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: JAVA,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },

    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [


    {
        title: "SDE Intern",
        date: "May 2024 - Aug 2024",
        icon: pure,
        iconBg: "#a2d2ff",
        company_name: "Pure Storage, Santa Clara, CA",
        points: [
            "As part of the Flash Array Files team, implemented Transport Layer Security for Network File Systems (NFS) in C++ and oversaw the entire SDLC, including design, performance analysis, stage three, and stress testing",
            "Configured hardware offload of encryption using kernel TLS, reducing CPU usage over user space TLS by 30%",
            "Improved latency by 400% through performance workload analysis of encryption mechanisms",
        ],
    },
    {
        title: "Northeastern University, Boston, MA",
        date: "Expected May 2025",
        icon: neu,
        iconBg: "#a2d2ff",
        company_name: "Masters in Sciences, Software Engineering Systems",
        points: [
            "Database Design & Architecture",
            "Object Oriented Programming",
            "Program Structures & Algorithms",
            "Cloud Computing and Network Architecture",
            "Software Engineering",
            "Design Patterns"
        ],
    },
    {
        title: "Software Development Engineer",
        company_name: "Rupeek, India",
        date: "Aug 2021 - Aug 2023",
        icon: rupeek,
        iconBg: "#a2d2ff",
        points: [
            "Led the development, testing, and debugging of 12+ microservice applications of Payment transaction handling using the Latest Technologies of AWS, Node.js, Java, MongoDB, Redis, and Postgresql.",
            "Developed a Document Signing Service for digitizing loan renewals, reducing manual signing and improving renewals by two crores (~ $10 million) per month using Express.js, MongoDB, and AWS S3 bucket.",
            "Implemented a Money Routing Micro Service for handling payment settlements, improving the efficiency of the tech support team, and reducing manual settlements by 30% using Sails.js, AWS SQS & SNS.",
            "Contributed to the development of the Scalable APIs of the Loan Gateway Microservice to optimize data retrieval, serving 600k daily API requests from mobile and web applications.",
            "Optimized the loan data synchronization process via Event-Driven Architecture leveraging Java and AWS SQS, preventing the display of outdated information. Efficiently handled daily updates for 200,000 loans per day.",
            "Conducted 50+ PR reviews, managed 10+ production releases, Continuous Integration/Deployment Pipeline Integration in Jenkins, Load/Stress Testing, unit/integration/E2E testing, and KTs to the new team members.",
        ],
    },
    {
        title: "SDE Intern",
        company_name: "Truminds, India",
        icon: truminds,
        iconBg: "#a2d2ff",
        date: "Jan 2021 - June 2021",
        points: [
            "Contributed to the development of the N4 Interface Node and Session procedures simulation in C++ based on an extensive review of the 3GPP documentation for 5G architecture.",
            "Implemented applications (HTTP, PFCP) and transport layer protocols (UDP, TCP) for seamless communication between multiple 5G architecture nodes using C++ and socket programming.",
            "Implemented multithreading to efficiently accommodate 5000 sessions, integrating Redis cache for storing user session information with mutex locks to ensure effective concurrency control in C++.",
        ],
    },
    {
        type: "education",
        title: "Indian Institute of Information Technology, India",
        icon: ba,
        iconBg: "#a2d2ff",
        date: "June 2017 - Jul 2021",
        company_name: "Bachelors in Electronics & Communication Engineering",
        points: [
            "Operating Systems",
            "Computer Networking",
            "Data Structures & Algorithms",
            "Pattern Recognition"
        ],

    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sravanti2300',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sravanti-kanchi/',
    }
];

export const projects = [
    {
        iconUrl: chatbot, // You may replace this with the appropriate icon URL
        theme: 'btn-back-red', // You may choose a suitable theme
        name: 'Whatsapp Automated Chatbot',
        description: 'Built a Rules-Based WhatsApp Chatbot Micro Service and its background workers using Express.js. Developed multiple APIs for system configurability and language localization using JSON Rule Engine, seamlessly integrating ChatGPT for user prompts. Implemented read-through cache technique for storing, and cron job to update the info to database.',
        link: 'https://github.com/sravanti2300/chatbotapp', // Replace with the actual project link
        technologies: ['MongoDB', 'Express.js', 'Node.js', 'Redis'],
        date: 'Aug 2023',
    },
    {
        iconUrl: stocks, // You may replace this with the appropriate icon URL
        theme: 'btn-back-green', // You may choose a suitable theme
        name: 'Stock Portfolio Analyzing System',
        description: 'Implemented the core logic using Factory Pattern in Spring boot. Computed the annualized returns based on the stock purchase date, and enhanced application stability with error reporting and exception handling. Increased application responsiveness by 50% with multithreading.',
        link: 'https://criodo.github.io/portfolio-sravanti-kanchi/', // Replace with the actual project link
        technologies: ['Spring Boot', 'Spring Data', 'Jackson', 'Mockito'],
        date: 'Jun 2020 - Jun 2021',
    },
    {
        iconUrl: drone, // You may replace this with the appropriate icon URL
        theme: 'btn-back-pink', // You may choose a suitable theme
        name: 'Integral Framework of UAV - Publication',
        description: 'Worked on UAV Optimized Navigation Algorithm by leveraging Traveling Salesman and Pure Pursuit Algorithms. Built the Simulation in Gazebo Leveraging ROS, and Simulink for the developed algorithms. Published the paper and attended the conference to gather greater insights into the UAV world.',
        link: 'https://ieeexplore.ieee.org/document/9550847', // Replace with the actual project link
        technologies: ['ROS', 'Matlab', 'Simulink', 'Python', 'Algorithms'],
        date: 'Aug 2019 - Aug 2021',
    },

    {
        iconUrl: cafe, // Replace with the appropriate icon URL
        theme: 'btn-back-orange', // Choose a suitable theme
        name: 'Café Management System',
        description: 'Developed a Java-based Café Management System applying Object-Oriented Design (OOD) principles. The system encompasses three main modules: Item Management, Cashier Operations, and Auditing. It allows users to manage the café menu, process customer orders, and maintain a detailed audit log of transactions.',
        link: 'https://github.com/sravanti2300/Cafe-Management-System', // Replace with the actual project link
        technologies: ['Java', 'MySQL', 'JavaFX', 'Maven'],
        date: 'Nov 2022 - Present',
    },

    {
        iconUrl: database, // Replace with the appropriate icon URL
        theme: 'btn-back-purple', // Choose a suitable theme
        name: 'EBT Application Management System',
        description: 'Designed and implemented an Application Management System for EBT (Electronic Benefit Transfer) using Oracle SQLCloud. Utilized data modeler for schema design, implemented triggers, stored procedures, indices, and fine-tuned the system. Implemented user access management and performed DDL and DML operations for efficient data processing.',
        link: 'https://github.com/sravanti0599/DMDD-DATA-KNICKS', // Replace with the actual project link
        technologies: ['Oracle SQLCloud', 'Data Modeler', 'PL/SQL'],
        date: 'Jan 2022 - Present',
    },


];

export const personalInfo = {
    name: 'Sravanti Kanchi',
    linkedin: 'https://www.linkedin.com/in/sravanti-kanchi/',
    phone: '404-450-1269',
    portfolio: 'https://sravanti2300.github.io/',
    email: 'sravanti.kanchi@gmail.com',
    github: 'https://github.com/sravanti2300'
};

export const education = {
    university: 'Northeastern University, Boston, MA',
    degree: 'Masters in Sciences, Software Engineering Systems',
    expectedGraduation: 'Expected May 2025',
    courses: [
        'Database Design',
        'Object Oriented Principles',
        'Program Structures and algorithms',
        'Enterprise Software Design'
    ]
};

export const skillsAndTools = {
    programmingLanguages: ['Javascript', 'Python', 'Java', 'HTML', 'CSS', 'Unix scripting'],
    tools: ['Node.js', 'Express.js', 'Postgresql', 'SQL', 'MongoDB', 'GIT', 'AWS', 'Redis', 'Spring Boot'],
    cloud: 'AWS (SQS-SNS, S3 Bucket, Elastic Cache, EC2, Lambda Functions, SES)',
    ciCdMonitoringLogging: ['GitHub Actions', 'Prometheus', 'Newrelic', 'Docker', 'Jenkins', 'Grafana']
};
