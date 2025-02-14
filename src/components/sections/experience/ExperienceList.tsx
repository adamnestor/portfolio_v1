import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../../data/experience";

const ExperienceList = () => {
  return (
    <div className="space-y-12">
      {experiences.map((experience) => (
        <ExperienceCard key={experience.dateRange} {...experience} />
      ))}
    </div>
  );
};

export default ExperienceList;
