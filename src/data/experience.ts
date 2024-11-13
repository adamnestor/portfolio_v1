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
      title: "Software Developer",
      company: "Your Company",
      companyUrl: "https://company-website.com",
      dateRange: "2023 — Present",
      description: `Here you can write a detailed description of your role and achievements. 
      You can include multiple lines and be specific about your contributions and responsibilities.`,
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS"
      ]
    },
    {
      title: "High School Teacher",
      company: "School Name",
      companyUrl: "https://school-website.com",
      dateRange: "2018 — 2023",
      description: `Description of your teaching experience, focusing on transferable skills 
      and achievements that relate to development and problem-solving.`,
      technologies: [
        "Curriculum Development",
        "Project Management",
        "Communication"
      ]
    }
  ];