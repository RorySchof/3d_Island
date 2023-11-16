import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [

    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },

    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },

    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },

    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },

    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
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
   
    
   
    // {
    //     imageUrl: mongodb,
    //     name: "MongoDB",
    //     type: "Database",
    // },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
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
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
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
    }
];

export const experiences = [
    {
        title: "Full Stack Web Developer",
        company_name: "Freelance ",
        icon: tesla,
        iconBg: "#accbe1",
        date: "2023 - Current",
        points: [
            "Developing resilient end-to-end websites and web applications by employing a rigorous approach encompassing research, strategic planning, design, coding, and comprehensive testing.",
            "Collaborating effectively, either autonomously or as a team member, to meet project timelines and ensure excellent deliverables.",
            "Recent Graduate of Lighthouse Labs Full Stack Web Development Bootcamp",



            
        ],
    },
    {
        title: "Digital Marketer",
        company_name: "Freelance",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "2022 - 2023",
        points: [
            "Developed and managed online marketing campaigns for a variety of clients with a focus on real estate",
            "Increased customer click-through rates by creating engaging and informative web content.",
            "Project managing the entirety of digital marketing campaigns from initial consultation to on-time delivery.",
        ],
    },
    {
        title: "Realtor",
        company_name: "Re/Max in Paradise",
        icon: tesla,
        iconBg: "#b7e4c7",
        date: "2019 -2021",
        points: [
            "Sold residential and commercial real estate in the Dominican Republic.",
            "Built a successful property management company for the brokerage.",
            "Tasked with the role of office administrator.",
        ],
    },
    {
        title: "Business Development Manager",
        company_name: "Re/Max 2000 - Duggal Team",
        icon: tesla,
        iconBg: "#a2d2ff",
        date: "2015- 2019",
        points: [
            "Responsible for hiring and training realtors.",
            "Led daily sales training sessions.",
            "Developed an in-house mortgage brokerage to increase the company's bottom line.",
            "Key member of a Diamond Award-winning team - the company's highest award.",
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
        link: 'https://github.com/RorySchof',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/roryschofield/',
    }
];

export const projects = [
    
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Scheduler',
        description: `React based project to create meetings for students to connect with mentors in real-time.
    Created using React, Axios, Classnames, Normalize, Storybook`,
        link: 'https://github.com/RorySchof/scheduler_app/blob/master/README.md',
    },
    
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Jungle',
        description: 'A mini e-commerce application built with Ruby on Rails that allows visitors to view, purchase, and review products. Email receipts are sent upon a successful order that uses the Stripe API for secure transactions. Built with Ruby, Rails, Stripe API, PostgreSQL, Bootstrap CSS',
        link: 'https://github.com/RorySchof/Jungle_App/blob/master/README.md',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Modern Nike Mockup',
        description: 'A modern and minimalist mock-up for Nike using html, javascript and tailwind.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: '3d Portfolio',
        description: '3d full stack web developer portfolio using html, tailwind, javascript, and threeJS.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Tiny App',
        description: 'RESTful URL Shortening service. Created with Express.JS and Node.JS',
        link: 'https://github.com/RorySchof/tinyapp/blob/main/README.md',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Your Idea Here',
        description: 'If you can dream of it, we can create it together.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];