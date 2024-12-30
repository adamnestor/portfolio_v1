export interface Education {
  degree: string;
  school: string;
  schoolUrl: string;
  dateRange: string;
  description?: string;
  technologies?: string[];
}

export const education: Education[] = [
  {
    degree: "Full Stack Development Bootcamp",
    school: "Coder's Campus",
    schoolUrl: "https://www.coderscampus.com/online-java-coding-bootcamp/",
    dateRange: "2023-2024",
    description:
      "I completed an intensive 36-week full-stack software engineering program focusing on enterprise Java development, where I progressed from front-end fundamentals to building complex applications using Spring Framework, REST APIs, and microservices architecture. The curriculum emphasized modern development practices including test-driven development, multi-threading, and secure application design with Spring Security, while also covering advanced Java 8 features, ORM with Hibernate, and database management using MySQL. The program culminated in developing a full-scale application that integrated these enterprise-level technologies, demonstrating my ability to architect and implement production-ready software solutions.",
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "RESTful APIs",
      "Git",
      "Jest",
    ],
  },
  {
    degree: "Master of Science in Education",
    school: "The University of Akron",
    schoolUrl: "https://www.uakron.edu/",
    dateRange: "2012",
  },
  {
    degree: "Bachelor of Arts in Philosophy",
    school: "The Univeristy of Akron",
    schoolUrl: "https://www.uakron.edu/",
    dateRange: "2010",
  },
];
