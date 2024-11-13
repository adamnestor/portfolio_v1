import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../../data/experience";

const ExperienceList = () => {
  return (
    <section id="experience" className="mb-24">
      <h2 className="text-slate-dark text-2xl font-medium mb-8">Experience</h2>
      <div className="space-y-12">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.dateRange} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
