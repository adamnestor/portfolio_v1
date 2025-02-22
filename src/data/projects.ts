export interface Project {
  title: string;
  description: string;
  keyFeatures: {
    icon:
      | "lineChart"
      | "calculator"
      | "barChart"
      | "users"
      | "shield"
      | "clipboardCheck";
    text: string;
  }[];
  thumbnailImage: string; // Logo image
  video: string; // This will now be a Vimeo URL
  codeUrl: string;
  link?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "CourtVision",
    description:
      "CourtVision analyzes NBA player statistics to predict game performance using custom confidence scores.",
    keyFeatures: [
      {
        icon: "lineChart",
        text: "Real-time dashboard showing historical hit rates and prediction accuracy",
      },
      {
        icon: "calculator",
        text: "Custom algorithm weighing recent games, matchups, and team dynamics",
      },
      {
        icon: "barChart",
        text: "Detailed player breakdowns with performance visualization",
      },
    ],
    thumbnailImage: "/thumbnails/courtvision-thumb.jpg",
    video: "https://vimeo.com/1058767374/b07463716e?share=copy",
    codeUrl: "https://github.com/adamnestor/courtvision-backend",
    link: "https://github.com/adamnestor/courtvision-frontend-v2",
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
      "ServiceTally streamlines student service hour management with a multi-school platform for tracking, approving, and reporting volunteer activities.",
    keyFeatures: [
      {
        icon: "users",
        text: "Multi-school dashboard for tracking and approving service hours",
      },
      {
        icon: "shield",
        text: "Role-based access control for students and administrators",
      },
      {
        icon: "clipboardCheck",
        text: "Progress tracking and reporting for student volunteer activities",
      },
    ],
    thumbnailImage: "/thumbnails/servicetally-thumb.jpg",
    video: "https://vimeo.com/1058767481/be7e5c809d?share=copy",
    link: "https://servicetally.up.railway.app",
    codeUrl: "https://github.com/adamnestor/serviceTally",
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
