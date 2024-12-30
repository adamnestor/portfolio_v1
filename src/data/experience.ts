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
    title: "Full-Stack Developer",
    company: "We Make Good Software",
    companyUrl: "https://wemakegoodsoftware.com/",
    dateRange: "2023 — Present",
    description: `I led the development of an SMS communication system using Twilio’s API, enabling course creators to automate text messaging with students. Using Spring Boot and MySQL, I built a high-volume message processing pipeline and implemented RESTful APIs and webhooks for bi-directional SMS communication. I developed the entire SMS flow, from message initiation to delivery, and collaborated closely with the team, especially the AI developer, to integrate automated responses for enhanced student engagement.`,
    technologies: [
      "Java",
      "Spring Boot",
      "React + Typescript",
      "RESTful APIs",
      "Twilio API",
      "Webhooks",
      "SMS Communication",
      "Automated Responses",
      "AI Integration",
      "Axios",
      "Ngrok",
    ],
  },
  {
    title: "High School Teacher",
    company: "Lake Catholic High School",
    companyUrl: "https://www.lakecatholic.org",
    dateRange: "2021 — Present",
    description: `I designed and implemented engaging lessons for theology courses and a philosophy elective, making abstract concepts accessible to diverse learners through thoughtful planning and creative approaches. I successfully managed complex projects, such as class retreats, coordinating logistics and communication among students, parents, and faculty. This role required adaptability, clear communication, and collaboration with multiple stakeholders to achieve meaningful outcomes in dynamic environments.`,
    technologies: [
      "Lesson Design",
      "Project Management",
      "Adaptability",
      "Problem Solving",
      "Research & Analysis",
      "Communication",
      "Cross-functional Collaboration",
    ],
  },
  {
    title: "High School Teacher",
    company: "Cleveland Central Catholic High School",
    companyUrl: "https://www.centralcatholichs.org/",
    dateRange: "2020-2021",
    description: "",
    technologies: [],
  },
  {
    title: "Director of Youth Ministry",
    company: "St. Joan of Arc Catholic Church",
    companyUrl: "https://spsjoa.org/",
    dateRange: "2018-2020",
    description:
      "Managed and executed large-scale events, coordinating diverse teams and adapting to evolving challenges to achieve impactful results. Demonstrated leadership in project planning, creative problem-solving, and clear communication, fostering collaboration across multiple stakeholders. Skilled at prioritizing tasks and delivering outcomes in dynamic environments, with a proven ability to train, mentor, and engage diverse audiences effectively.",
    technologies: [
      "Project Management",
      "Team Coordination",
      "Communication Strategies",
      "Problem-Solving",
      "Mentorship and Training",
      "Collaboration",
      "Adaptability",
    ],
  },
  {
    title: "Director of Youth Ministry",
    company: "Holy Martyrs Catholic Church",
    companyUrl: "https://holymartyrs.net/",
    dateRange: "2016-2018",
    description: "",
    technologies: [],
  },
];
