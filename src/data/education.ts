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
      school: "Your Bootcamp Name",
      schoolUrl: "https://example.com",
      dateRange: "2023",  // Update with actual dates
      description: "Completed an intensive 9-month full-stack development program focused on building modern web applications. Developed multiple projects using React, TypeScript, Node.js, and other contemporary technologies.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "RESTful APIs",
        "Git",
        "Jest"
      ],
    },
    {
      degree: "Master of Science in Education",
      school: "Your University",
      schoolUrl: "https://example.com",
      dateRange: "Year",
    },
    {
      degree: "Bachelor of Arts in Philosophy",
      school: "Your University",
      schoolUrl: "https://example.com",
      dateRange: "Year",
    },
  ];