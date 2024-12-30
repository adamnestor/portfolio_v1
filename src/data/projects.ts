export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "CourtVision",
    description:
      "CourtVision is a real-time NBA statistics analysis tool that helps users identify statistical performance patterns by calculating hit rates and a confidence score for points, assists, and rebounds across different time periods. The platform features an intuitive dashboard displaying today's games with associated player stats, detailed player analysis views with performance visualizations, and the ability to save both single picks and parlays while tracking their accuracy over time.",
    image: "/CV.jpg",
    link: "",
    technologies: [
      "React + TypeScript",
      "Spring Boot",
      "MySQL",
      "Redis",
      "Tailwind CSS",
      "Docker",
      "Railway",
      "PlanetScale",
      "Vercel",
    ],
  },
  {
    title: "ServiceTally",
    description:
      "A Spring Boot application for tracking student service hours, enabling schools to monitor and approve student volunteer activities. The application features role-based authentication allowing administrators to manage multiple schools while students can submit and track their service progress. Built with Java, Spring Security, MySQL, and custom-designed with vanilla JavaScript and CSS.",
    image: "/servicetally.jpg",
    link: "https://servicetally.up.railway.app",
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Hibernate",
      "Vanilla JS",
      "CSS",
      "Railway",
    ],
  },
];
