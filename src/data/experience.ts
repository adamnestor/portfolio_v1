export interface Experience {
  title: string;
  positions: Position[];
  description: string;
  technologies: string[];
}

export interface Position {
  company: string;
  dateRange: string;
}

export const experiences: Experience[] = [
  {
    title: "Full-Stack Developer",
    positions: [
      {
        company: "We Make Good Software",
        dateRange: "2023 — Present",
      },
    ],
    description: `I'm developing an SMS communication system using Twilio's API that enables course creators to manage text messaging with students. Using Spring Boot and MySQL, I'm building a high-volume processing pipeline with bi-directional communication through REST APIs and webhooks. I work closely with our AI team to integrate automated responses that enhance user engagement while reducing manual intervention.`,
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
    positions: [
      {
        company: "Lake Catholic High School",
        dateRange: "2021 — Present",
      },
      {
        company: "Cleveland Central Catholic High School",
        dateRange: "2020 — 2021",
      },
    ],
    description: `I taught theology courses and a philosophy elective, breaking down difficult ideas to help students understand and engage with the material. I also planned and ran school retreats, which meant coordinating schedules and details with students, parents, and teachers. Through both teaching and retreat planning, I learned to explain complex topics clearly and work well with many different people.`,
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
    title: "Director of Youth Ministry",
    positions: [
      {
        company: "St. Joan of Arc Catholic Church",
        dateRange: "2018-2020",
      },
      {
        company: "Holy Martyrs Catholic Church",
        dateRange: "2016-2018",
      },
    ],
    description:
      "Over four years as a youth minister, I ran programs that grew to 350 participants and 65 volunteers. I planned and led multi-day retreats, training sessions, and weekly activities. This meant explaining plans clearly, solving unexpected problems, and helping both new and experienced volunteers work well together.",
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
];
