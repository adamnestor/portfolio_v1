import EducationCard from "./EducationCard";
import { education } from "../../../data/education";
import SectionTitle from "../../shared/SectionTitle";

const EducationList = () => {
  return (
    <section id="education" className="mb-24">
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-12">
        {education.map((edu) => (
          <EducationCard key={`${edu.school}-${edu.degree}`} {...edu} />
        ))}
      </div>
    </section>
  );
};

export default EducationList;
