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
        company: "Your Current Company",
        dateRange: "2023 — Present",
      },
    ],
    description: `Your description of current role and responsibilities...`,
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
        company: "First School Name",
        dateRange: "2021 — 2023",
      },
      {
        company: "Second School Name",
        dateRange: "2020 — 2021",
      },
    ],
    description: `Description of your teaching experience...`,
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
