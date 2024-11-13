import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../../data/experience";
import SectionTitle from "../../shared/SectionTitle";

const ExperienceList = () => {
  return (
    <section id="experience" className="mb-24">
      <SectionTitle>Experience</SectionTitle>
      <div className="space-y-12">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.dateRange} {...experience} />
        ))}
      </div>
    </section>
  );
};

export default ExperienceList;
