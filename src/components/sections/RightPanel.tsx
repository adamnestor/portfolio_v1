import ExperienceList from "./experience/ExperienceList";
import ProjectList from "./projects/ProjectList";

const RightPanel = () => {
  return (
    <div className="pt-16">
      {/* Opening paragraph aligned with name */}
      <div className="text-slate-medium space-y-4 mb-24">
        <p>
          I'm a developer passionate about crafting accessible, pixel-perfect
          user interfaces that blend thoughtful design with robust engineering.
          My teaching background gives me a unique perspective on creating
          clear, intuitive user experiences and collaborating effectively with
          teams.
        </p>
      </div>

      {/* Experience Section */}
      <ExperienceList />

      {/* Projects Section */}
      <ProjectList />
    </div>
  );
};

export default RightPanel;
