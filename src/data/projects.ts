export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    technologies: string[];
  }
  
  export const projects: Project[] = [
    {
      title: "Build a Spotify Connected App",
      description: "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      image: "/placeholder-project.jpg",
      link: "https://project-url.com",
      technologies: ["React", "Express", "Spotify API", "Heroku"]
    },
    // More projects will go here
  ];