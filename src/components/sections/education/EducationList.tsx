import EducationCard from "./EducationCard";
import { education } from "../../../data/education";

const EducationList = () => {
  return (
    <div className="space-y-12">
      {education.map((edu) => (
        <EducationCard key={`${edu.school}-${edu.degree}`} {...edu} />
      ))}
    </div>
  );
};

export default EducationList;
