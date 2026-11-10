type PortfolioImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Project = {
  id: string;
  title: string;
  technologies: string[];
  description: string;
  image: PortfolioImage;
  repositoryUrl: string;
  demoUrl: string;
};

// Replace these values and the images in public/portfolio with your own.
// Leave a URL empty to show a demo preview in its place.
export const profile = {
  name: "Amir Rafigh",
  firstName: "Amir",
  role: "Software Engineer",
  bio: "I'm a Software Engineer passionate about designing and building scalable, efficient, and user-focused web applications, turning complex ideas into reliable digital solutions.",
  portrait: {
    src: "/photo_2026-11-11_00-16-20.jpg",
    alt: "Amir Rafigh wearing sunglasses by the sea",
    width: 1280,
    height: 1138,
  } satisfies PortfolioImage,
  resumeUrl: "",
  email: "amir.rafigh.work@gmail.com",
  githubUrl: "https://github.com/amir-rafigh",
  linkedinUrl: "https://www.linkedin.com/in/amir-rafigh-",
  instagramUrl: "https://www.instagram.com/amir_rafigh_",
  telegramUrl: "https://t.me/Amir_rafigh_01",
  tel: "+989397804934",
};

export const technologies = [
  "Next.js",
  "Tailwind",
  "JavaScript",
  "Node.js",
  "React",
  "Git",
  "GitHub",
  "Docker",
  "TypeScript",
  "postgreSQL"
];

export const services = [
  { icon: "website", label: "Website Development" },
  { icon: "app", label: "App Development" },
  { icon: "hosting", label: "Website Hosting" },
] as const;

export const statistics = [
  { value: 5, suffix: "+", label: "Completed Projects" },
  { value: 3, suffix: "+", label: "Years of experience" },
];

export const projects: Project[] = [
  {
    id: "battleship",
    title: "ROBOOLIFT",
    technologies: ["node.js", "tailwind", "postgresSQL", "TypeScript", "next.js"],
    description:
      "Used components of JavaScript to implement basic data structures through the game of Battleship. Used a terminal to display ships and track where ships are hit or missed.",
    image: {
      src: "/portfolio/roboolift-quick-design.webp",
      alt: "RobooLift Quick Design interface with an isometric elevator shaft beside the project inputs",
      width: 1376,
      height: 769,
    },
    repositoryUrl: "",
    demoUrl: "https://roboolift.com",
  },
  {
    id: "movie-titles-api",
    title: "Movie Titles API",
    technologies: ["HTML", "CSS", "JavaScript", "API", "Version control"],
    description:      "ROBOOLIFT is a web platform that helps project teams plan elevators and request engineering services. Its visual previews and preliminary calculations show what can fit in the available shaft and help estimate cabin size, capacity, and clearance requirements. Teams can develop a detailed design for a new or partially built installation, order a cabin, or submit existing drawings for engineering review.",
    image: {
      src: "/portfolio/movie-titles-api.webp",
      alt: "The Godfather and Top Gun: Maverick in the movie collection",
      width: 371,
      height: 184,
    },
    repositoryUrl: "",
    demoUrl: "",
  },
  {
    id: "javascript-calculator",
    title: "JavaScript Calculator",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    description:
      "Uses simple algorithm concepts in JavaScript to produce an arithmetic result in a terminal.",
    image: {
      src: "/portfolio/javascript-calculator.webp",
      alt: "JavaScript code that reads an operator and calculates the result",
      width: 374,
      height: 184,
    },
    repositoryUrl: "",
    demoUrl: "",
  },
  {
    id: "saas-landing-page",
    title: "SaaS Landing Page",
    technologies: ["HTML", "CSS"],
    description:
      "Used HTML concepts such as creating a form and a basic skeleton. It also used components of both grid and flexbox to produce a landing page.",
    image: {
      src: "/portfolio/saas-landing-page.webp",
      alt: "Front landing page with the headline Empowering teams with the freedom",
      width: 373,
      height: 184,
    },
    repositoryUrl: "",
    demoUrl: "",
  },
];
