export interface Project {
  title: string;
  type: "professional" | "personal";
  dateRange?: string;
  description: string;
  keyFeatures: {
    icon:
      | "lineChart"
      | "calculator"
      | "barChart"
      | "users"
      | "shield"
      | "clipboardCheck"
      | "server"
      | "messageSquare"
      | "database";
    text: string;
  }[];
  thumbnailImage: string;
  video?: string;
  codeUrl?: string;
  link?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "We Make Good Software",
    type: "professional",
    dateRange: "August 2024 - March 2025",
    description:
      "Enterprise messaging platform built for online course creators to communicate with students via SMS. The platform uses AI to automatically handle common questions while enabling seamless communication between instructors and students.",
    keyFeatures: [
      {
        icon: "server",
        text: "Integrated Twilio webhook system with Spring Boot backend for bidirectional SMS messaging with signature validation and error recovery",
      },
      {
        icon: "messageSquare",
        text: "Platform uses Anthropic Claude API for intelligent automated responses, determining when questions need AI versus human attention",
      },
      {
        icon: "database",
        text: "Implemented PostgreSQL database schema with JPA/Hibernate, optimizing queries for high write volumes across distributed microservices",
      },
    ],
    thumbnailImage: "/thumbnails/wmgs-thumb.jpg",
    link: "https://www.yeahapp.com/",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "PostgreSQL",
      "JPA/Hibernate",
      "Twilio API",
      "Anthropic Claude API",
      "Docker",
    ],
  },
  {
    title: "CourtVision",
    type: "personal",
    description:
      "Full-stack NBA player prediction platform analyzing 180,000+ statistics across 5 seasons to generate daily player performance predictions. Built with Spring Boot backend and React/TypeScript frontend with real-time data visualizations.",
    keyFeatures: [
      {
        icon: "lineChart",
        text: "Engineered intelligent data pipeline with rate limiting (600 req/min), batch processing, and caching to build 180,000+ record dataset while staying within API constraints",
      },
      {
        icon: "calculator",
        text: "Architected scalable RESTful API with Spring Boot handling complex data queries and JSON transformation using Jackson library",
      },
      {
        icon: "barChart",
        text: "Built normalized MySQL database schema with JPA/Hibernate ORM and optimized indexing, ensuring sub-second query times despite large dataset volume",
      },
    ],
    thumbnailImage: "/thumbnails/courtvision-thumb.jpg",
    video: "https://vimeo.com/1058767374/b07463716e?share=copy",
    codeUrl: "https://github.com/adamnestor/courtvision-backend",
    link: "https://github.com/adamnestor/courtvision-frontend-v2",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "TypeScript",
      "MySQL",
      "JPA/Hibernate",
      "Spring Security",
      "JWT",
      "Docker",
      "Tailwind CSS",
    ],
  },
];
