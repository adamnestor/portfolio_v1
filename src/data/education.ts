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
      "I completed a 36-week full-stack software development program focused on Java and object-oriented programming. The program covered core Java concepts, Spring Boot, REST APIs, Spring Security, and MySQL with Hibernate. I learned Git workflows, JUnit testing, and Maven build tools while building web applications. Through weekly check-ins and code reviews, I built several projects including ServiceTally, my capstone application for managing student volunteer hours.",
    technologies: [
      "Java Spring Framework",
      "MySQL",
      "RESTful APIs",
      "Hibernate/JPA",
      "Git",
      "Maven",
      "Spring Security",
      "JavaScript",
      "Test-Driven Development",
      "Microservices",
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
