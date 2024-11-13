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
    description:
      "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
    image: "/test2.jpg",
    link: "https://project-url.com",
    technologies: ["React", "Express", "Spotify API", "Heroku"],
  },
  {
    title: "Virtual Lab Simulator",
    description:
      "Developed an interactive web-based laboratory simulation tool that allows students to conduct virtual science experiments. Features real-time data visualization, collaborative workspaces, and integration with common learning management systems. Implemented using React and Three.js for 3D renderings.",
    image: "/test3.jpg",
    link: "https://example.com/virtual-lab",
    technologies: ["React", "Three.js", "WebGL", "Firebase", "Material-UI"],
  },
];
