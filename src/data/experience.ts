export interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  dateRange: string;
  description: string;
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    title: "Full-Stack Developer",
    company: "We Make Good Software",
    companyUrl: "https://wemakegoodsoftware.com/",
    dateRange: "2023 — Present",
    description: `Here you can write a detailed description of your role and achievements. 
      You can include multiple lines and be specific about your contributions and responsibilities.`,
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "RESTful APIs",
      "Axios",
      "Ngrok",
    ],
  },
  {
    title: "High School Teacher",
    company: "Lake Catholic High School",
    companyUrl: "https://www.lakecatholic.org",
    dateRange: "2021 — Present",
    description: `I designed and implemented engaging lessons for theology courses and a philosophy elective, consistently translating abstract concepts into accessible learning experiences. My experience in the classroom and leading class retreats showcased my ability to manage complex projects with multiple stakeholders - including students, parents, and faculty - while adapting to changing needs`,
    technologies: [
      "Curriculum Development",
      "Program Management",
      "Complex Problem Solving",
      "Research & Analysis",
      "Communication",
      "Cross-functional Collaboration",
      "Adaptative Teaching",
    ],
  },
  {
    title: "Junior Web Developer",
    company: "TechStart Solutions",
    companyUrl: "https://example.com",
    dateRange: "2018 - 2020",
    description:
      "Collaborated with a team of developers to build and maintain responsive web applications for educational institutions. Implemented user interface components using React and helped migrate legacy systems to modern web frameworks. Worked closely with UX designers to ensure accessibility standards were met across all projects.",
    technologies: [
      "React",
      "JavaScript",
      "CSS",
      "Node.js",
      "Express",
      "MongoDB",
    ],
  },
];
