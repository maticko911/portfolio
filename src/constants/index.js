import { univerza, Csharp, meta, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    pricewise,
    react,
    redux,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
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
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    
];

export const experiences = [
    {
        title: "Starting my coding journey!",
        company_name: "University of Maribor",
        icon: univerza,
        iconBg: "#accbe1",
        date: "October 2021 - Present",
        points: [
            "Starting my coding, journey at University of Maribor"
        ],
    },
    {
        title: "C#",
        company_name: "C#",
        icon: Csharp,
        iconBg: "#fbc3bc",
        date: "October 2021 - Present",
        points: [
            "Introduced to programming with C#, my first language, in October 2021.",
        ],
    },
    {
        title: "Javascript",
        company_name: "Web development",
        icon: javascript,
        iconBg: "#b7e4c7",
        date: "November 2022 - Present",
        points: [
            "Entered the world of web development in November 2022 using JavaScript.",
            "Discovered the power of creating interactive web pages through JavaScript.",
        ],
    },
    {
        title: "React",
        company_name: "React",
        icon: react,
        iconBg: "#a2d2ff",
        date: "August 2023 - Present",
        points: [
            "Embraced React as a favorite library for building interactive user interfaces.",
        ],
    },
    {
        title: "NextJS",
        company_name: "NextJS",
        icon: nextjs,
        iconBg: "#a2d2ff",
        date: "December 2023 - Present",
        points: [
            "Currently exploring NextJS to enhance and optimize web development projects.",
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
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Food_app',
        description: 'Developed a web application that helps you order delicious recipes. ',
        link: 'https://github.com/maticko911/food_app.git',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Weather_app',
        description: 'This application provides weather forecasts for a specific location for the next 5 days.',
        link: 'https://github.com/maticko911/weather_app.git',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/maticko911/car_showcase.git',
    },
];