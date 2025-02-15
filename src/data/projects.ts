export interface Project {
  title: string;
  description: string;
  thumbnailImage: string; // Logo image
  video: string; // Video URL
  codeUrl: string;
  link?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "CourtVision",
    description:
      "CourtVision analyzes NBA player statistics to predict game performance. The application shows historical hit rates for points, assists, and rebounds, then uses this data in a custom confidence score that weighs recent games, matchup history, and team dynamics to predict tonight's games. Users can view detailed player breakdowns with performance charts and track their prediction accuracy over time.",
    thumbnailImage: "/thumbnails/courtvision-thumb.jpg",
    video: "/videos/courtvision-demo.mp4",
    codeUrl: "https://github.com/yourusername/courtvision",
    technologies: [
      "React + TypeScript",
      "Spring Boot",
      "MySQL",
      "Tailwind CSS",
      "Recharts",
      "WebClient",
      "Spring Security",
      "Spring WebFlux",
    ],
  },
  {
    title: "ServiceTally",
    description:
      "ServiceTally helps schools manage and track student service hours. Administrators can oversee multiple schools, approve submitted hours, and manage student-admin relationships through a custom interface. Students can submit their volunteer activities and monitor their progress, with all data securely filtered based on user roles. Built as a capstone project, the application features a responsive design created with vanilla JavaScript and CSS.",
    thumbnailImage: "/thumbnails/servicetally-thumb.jpg",
    video: "/videos/servicetally-demo.mp4",
    link: "https://servicetally.up.railway.app",
    codeUrl: "https://github.com/yourusername/servicetally",
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
