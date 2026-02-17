
export type ContentBlock =
    | { type: "text"; title?: string; content: string }
    | { type: "image"; src: string; alt: string; caption?: string }
    | { type: "stats"; items: { label: string; value: string }[] };

export interface Project {
    id: number;
    title: string;
    subheading: string;
    description: string;
    client: string;
    image: string;
    slug: string;
    timeline?: string;
    team?: string;
    results?: string[];
    content?: ContentBlock[];
}

export const bio = {
    name: "Eric",
    role: "UX Product Designer",
    tagline: "I'm Eric, UX Product Designer",
    description: "With 5 years of experience, specializing in B2B Solutions, and end to end Agile Product Development.",
};

export const skills = [
    {
        title: "User Experience Design",
        description: "Crafting seamless and intuitive interfaces that prioritize user needs and enhance engagement.",
    },
    {
        title: "Product Strategy",
        description: "Driving product vision by aligning business goals with user expectations for impactful solutions.",
    },
    {
        title: "Product Market Fit",
        description: "Bridging user insights and market demands to develop products that resonate with target audiences.",
    },
    {
        title: "Qualitative Interviews",
        description:
            "Extracting deep user insights through empathetic, targeted conversations to inform design decisions.",
    },
    {
        title: "Usability Testing",
        description:
            "Validating designs through iterative testing to ensure optimal functionality and user satisfaction.",
    },
    {
        title: "Information Architecture & Workflows",
        description: "Designing clear information architectures and workflows to streamline user journeys.",
    },
    {
        title: "Low-Code Development",
        description:
            "Accelerating app creation using platforms that minimize coding, enabling faster, cost-effective, and scalable solutions.",
    },
    {
        title: "AI Automation",
        description: "Streamlining workflows with AI to handle repetitive tasks, boost efficiency, and reduce errors.",
    },
    {
        title: "AI Agents (New)",
        description: "AI-powered systems that automate decisions and provide real-time, personalized assistance.",
    },
];

export const projects: Project[] = [
    {
        id: 1,
        title: "Banking Web Application Feature Enhancement",
        subheading: "Enhancing Card Security with Locking & Reporting Features",
        description:
            "As the primary designer, I was responsible for defining the look and functionality of the card-locking and reporting features within the existing Central 1 web platform. The project aimed to enhance the user experience by introducing advanced security and control features for card management.",
        client: "Central 1",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Lock%20n%20Block%20-%20Changes%20Saved-aNzhWFFzwuX6pcOybc7whJZTei15fS.png",
        slug: "banking-web-application-feature-enhancement",
        timeline: "3-week project from start to final handoff",
        team: "Collaborated with Product Owner and 3 Engineers",
        results: ["Streamlined card security workflow by 30%", "Cut support calls by an estimated 30%"],
        content: [
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.1.jpg-gnQ1Xuc4e1qtKB2jqcZPn13hHbFOyv.jpeg",
                alt: "Project overview and final interface",
                caption: "Final interface design for the Card Lock feature."
            },
            {
                type: "text",
                title: "The Challenge",
                content: "<p>Users needed a way to instantly secure their cards without calling support. The existing system lacked self-service options for temporary blocking or reporting lost cards, leading to high call volumes and user frustration.</p>"
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.2.jpg-17WyOE1nmEhvZif5kKnW09qwAI0hFq.jpeg",
                alt: "Company overview and project goals"
            },
            {
                type: "text",
                title: "My Role",
                content: "<p>I led the end-to-end design process, from initial stakeholder interviews to high-fidelity prototyping. I collaborated closely with a team of 3 engineers to ensure technical feasibility and adherence to the design system.</p>"
            },
            {
                type: "stats",
                items: [
                    { label: "Timeline", value: "3 Weeks" },
                    { label: "Efficiency Gain", value: "30%" },
                    { label: "Team Size", value: "4" }
                ]
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.4.jpg-Hg27WlflhvVm0IHP0jgKlpGjBrfHno.jpeg",
                alt: "Project timeline and process",
                caption: "We followed a rapid 3-week agile sprint cycle."
            },
            {
                type: "text",
                title: "Research & Discovery",
                content: "<p>We conducted competitive analysis and stakeholder interviews to understand the security requirements. Key findings indicated that speed of access was the most critical factor for users in a 'panic' state (lost card).</p>"
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.6.jpg-kOyKZQc2nGSZX0AUioJ9wc5OhTFu6J.jpeg",
                alt: "Competitor analysis research"
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.9.jpg-ytHq5dyVHEcCBh9NYziKP4hh3NEr4B.jpeg",
                alt: "Lost/stolen card reporting feature"
            },
            {
                type: "text",
                title: "The Solution",
                content: "<p>We implemented a prominent 'Lock Card' toggle on the dashboard, accessible within 1 click. We also designed a clear, step-by-step flow for permanently reporting a card as lost/stolen, which triggers automatic reissue workflows.</p>"
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case1.10.jpg-U8naSHM2Bw8e3grm7oXqeSDWE48B05.jpeg",
                alt: "Implementation and feedback results"
            }
        ]
    },
    {
        id: 2,
        title: "3-Sided Volunteer Matching Platform",
        subheading: "End to end product platform development",
        description:
            "As the lead designer, I created a web app platform that seamlessly connects skilled professionals with nonprofits and companies, empowering meaningful pro-bono collaborations and enhancing corporate employee volunteer programs. This end-to-end project involved everything from research to implementation.",
        client: "MeaningfulWork",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rawhxcziz2vb3qjexg07-w8IT8WZru7QWEErzSW9J8StdWD7zx4.webp",
        slug: "3-sided-volunteer-matching-platform",
        timeline: "4 months project from start to final handoff",
        team: "Collaborated with Product Manager, 2 Engineers, and 2 UI Interns",
        results: [
            "Successfully launched the platform within the 4-month timeline, aligning with a major nonprofit conference",
            "Onboarded 250 volunteers, 170 nonprofits, 200+ postings, 50 completed postings, and 5 corporate clients within the first 10 months of release",
            "Received positive feedback from all three user groups (volunteers, nonprofits, and corporate partners)",
        ],
        content: [
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.1.jpg-gQ8KfdZjtihcv9IXoipLL4ODr2OJHU.jpeg",
                alt: "Project overview and platform showcase",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.2.jpg-m4cPmVtR50H9lF7YGdCBhMIWuEqaR8.jpeg",
                alt: "Company overview and mission",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.3.jpg-4oDkHqyiSTOlaFAp9tpy5y3DcZSNUY.jpeg",
                alt: "Platform success metrics",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.4.jpg-f5p0PYMy6nI0NQGDUhj3wSjwJTXoTO.jpeg",
                alt: "Project timeline and development phases",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.5.jpg-gAb7EeywEW993bWXGUQ5nb0jmYETlf.jpeg",
                alt: "Research insights and emotional design principles",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.6.jpg-by2ymc4UnrGrdWIsfpsPpTqBkPvmTw.jpeg",
                alt: "User personas for volunteers and non-profits",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.7.jpg-p5kjh1mmiigdgC2MTeXkXuICxrro5h.jpeg",
                alt: "User personas for corporate partners",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.8.jpg-VwwUmOExjpTkFivQOjysNxmmwTLS4T.jpeg",
                alt: "Information architecture and wireframe planning",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.9.jpg-lrpns68kJp5VQhRO3vcHudk5AhZxGK.jpeg",
                alt: "User flow diagram",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.10.jpg-XR1vVrTkE0lyV0UYPCTTbQmaSRFePY.jpeg",
                alt: "Detailed information architecture for all user groups",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.11.jpg-1MgYv7cA2FG3EEGPVy301CoOuUt8Ce.jpeg",
                alt: "Design system documentation and visual guidelines",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.12.jpg-aKDJsHVrrRdyVTxKTlddFndUX6DtCW.jpeg",
                alt: "Volunteer portal interface designs",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.13.jpg-WwXyWGOOQU6KcQv1IDA2Oc4YDz2lk7.jpeg",
                alt: "Non-profit portal interface designs",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.14.jpg-TTsu68ew2Y6N7aaoEv7oKq0iMn1F47.jpeg",
                alt: "Corporate portal interface designs",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.15.jpg-danCJXnvuvbFgWmw1DXLEibD9CuEf7.jpeg",
                alt: "Usability testing results and insights",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.16.jpg-kMADmteiOYW6ChaRlmWUvdp9WcwcIC.jpeg",
                alt: "Volunteer testing script and methodology",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.17.jpg-4mtu47dSKCRyuHlzuFWGtYOf5eLL98.jpeg",
                alt: "Non-profit testing script and scenarios",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.18.jpg-bZmVkN3OsKzDSU6L38tpu3KqLT9Sqh.jpeg",
                alt: "Corporate testing script and tasks",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case2.19.jpg-osdM87SoY515c2b1ZPfD0vkYzGAMa7.jpeg",
                alt: "Final platform implementation across devices",
            },
        ],
    },
    {
        id: 3,
        title: "Finance Calculators Visual Re-Vamp",
        subheading: "Visual Design Re-design",
        description:
            "The finance calculators (7) were refreshed to enhance usability and aesthetics by refining UI elements and integrating design tokens from Central 1's new design system. This redesign was requested by over 300 clients as part of their broader modernization initiatives. Responsibilities included UI Design & Prototyping, Research & Analysis, Design System Integration, and Collaboration & Implementation.",
        client: "Central 1",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mortgage%20-%20Affordability-4f5DMrN0f55f3CDlblIj4vM8G2i038.png",
        slug: "finance-calculators-visual-revamp",
        timeline: "2-week project from start to final implementation",
        team: "Collaborated with 1 Front-End Developer and consulted with the Design System Creator in an Agile Style Development",
        results: [
            "The redesigned calculators featured a modernized UI with enhanced clarity, making data entry and interpretation more intuitive for users",
            "Successfully delivered a solution requested by over 300 clients, aligning with their modernization goals and improving overall satisfaction",
            "Contributed new components and refinements to the design system, increasing its adaptability for future projects",
        ],
        content: [
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.1.jpg-3moC1z8k0a6kQqB25YO1RZoEuOI4Bw.jpeg",
                alt: "Project overview and final calculator design",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.2.jpg-NQRmqZciitGPhtQ08UO8ppHRNUZFrX.jpeg",
                alt: "Central 1 company overview and mission",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.3.jpg-9r25vMFKusoQ5mfq5EjQXbD3brlq1O.jpeg",
                alt: "Project timeline and development phases",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.4.jpg-IrMZyLG9WJC9Q1cC2hPYht5U9BfLGz.jpeg",
                alt: "Competitive research and analysis",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.5.jpg-8rBQg0qu4KxfFqULhV2PpeI4FFv0IY.jpeg",
                alt: "Input types and field specifications",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.6.jpg-HwkXjKDn465BxvvZrDQrnAcUC3V7jO.jpeg",
                alt: "Initial mockups and design concepts",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.7.jpg-DAyN5ktOsajSqHCl9L7fcIq73Pfhhw.jpeg",
                alt: "Design system implementation and documentation",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.8.jpg-Mm2kpoUDoD3hr9Bop24MZiCKEwBwj9.jpeg",
                alt: "Development collaboration and implementation",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.9.jpg-y2sLaNKnCUv3MpKsNmpngVr7IfuKh8.jpeg",
                alt: "Final mortgage calculator interface comparison",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.11.jpg-cMOTqYUHczd1eErn3c6FXN6AaxHWZ7.jpeg",
                alt: "Retirement planner calculator redesign",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.12.jpg-lpLyWBN3pXKDDVtegCYL4GlZOSgBYn.jpeg",
                alt: "Education savings calculator redesign",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.13.jpg-Ewh8Gb4tdY2uYuoW2zRD8JUVAGvmjh.jpeg",
                alt: "RRIF calculator redesign",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.14.jpg-wdqBwRgzsqOGJbGVSMo3jDcjq3kvFB.jpeg",
                alt: "TFSA calculator redesign",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Case3.15.jpg-pmfYvUrXgsc9e9BABYilmdhIa8tzwu.jpeg",
                alt: "Foreign exchange calculator redesign",
            },
        ],
    },
    {
        id: 4,
        title: "Volunteer Matching Platform: A Research Case Study",
        subheading: "Usability Testing to Identify and Address UX Challenges Pre-Launch",
        description:
            "Conducted comprehensive usability testing to evaluate core functionality and user flows before the product launch, identifying critical UX pain points and providing recommendations to enhance platform usability for volunteers, nonprofits, and corporate partners.",
        client: "MeaningfulWork",
        image:
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usability-testing-ZdHjWNZXxhTWzxIRDm8J1JZS9YFNM3.jpg",
        slug: "volunteer-matching-platform-research",
        timeline: "4-week project focused on pre-launch evaluation",
        team: "Led research efforts, collaborating with Product Manager and UX team",
        results: [
            "Identified and addressed critical UX pain points before launch",
            "Provided actionable recommendations for enhancing platform usability",
            "Improved user flows for volunteers, nonprofits, and corporate partners",
        ],
        content: [
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/research-overview-nHjWNZXxhTWzxIRDm8J1JZS9YFNM3.jpg",
                alt: "Research overview and methodology",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/user-personas-kLmNOPQrStUvWxYzABCDEFGHIJK.jpg",
                alt: "User personas for volunteers, nonprofits, and corporate partners",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/usability-findings-LMNOPQrStUvWxYzABCDEFGHIJK.jpg",
                alt: "Key usability findings and pain points",
            },
            {
                type: "image",
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/recommendations-MNOPQrStUvWxYzABCDEFGHIJKL.jpg",
                alt: "Recommendations for platform improvements",
            },
        ],
    },
];
