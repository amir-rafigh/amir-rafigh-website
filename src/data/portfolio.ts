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
  name: "Jensen Omega",
  firstName: "Jensen",
  role: "Software Developer",
  bio: "I started my software journey from photography. Through that, I learned to love the process of creating from scratch. Since then, this has led me to software development as it fulfills my love for learning and building things.",
  portrait: {
    src: "/portfolio/jensen-omega.webp",
    alt: "Jensen wearing glasses and a dark jacket in front of a coral ring",
    width: 512,
    height: 396,
  } satisfies PortfolioImage,
  resumeUrl: "",
  email: "",
  githubUrl: "",
  linkedinUrl: "",
};

export const technologies = [
  "HTML5",
  "CSS",
  "JavaScript",
  "Node.js",
  "React",
  "Git",
  "GitHub",
];

export const services = [
  { icon: "website", label: "Website Development" },
  { icon: "app", label: "App Development" },
  { icon: "hosting", label: "Website Hosting" },
] as const;

export const statistics = [
  { value: 120, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Client satisfaction" },
  { value: 10, suffix: "+", label: "Years of experience" },
];

export const projects: Project[] = [
  {
    id: "battleship",
    title: "Battleship",
    technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
    description:
      "Used components of JavaScript to implement basic data structures through the game of Battleship. Used a terminal to display ships and track where ships are hit or missed.",
    image: {
      src: "/portfolio/battleship.webp",
      alt: "Battleship terminal showing turns, hits, misses, and a sunk cruiser",
      width: 373,
      height: 184,
    },
    repositoryUrl: "",
    demoUrl: "",
  },
  {
    id: "movie-titles-api",
    title: "Movie Titles API",
    technologies: ["HTML", "CSS", "JavaScript", "API", "Version control"],
    description:
      "Uses a public movie API to build a collection of movie titles that sorts from A to Z or vice versa. It also counts the movies in each list and lets users save favorites in a separate list.",
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
