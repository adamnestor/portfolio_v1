import ExperienceList from "./experience/ExperienceList";

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
      <section id="projects">
        <h2 className="text-slate-dark text-2xl font-medium mb-8">Projects</h2>
        {/* Projects content coming soon */}
      </section>
    </div>
  );
};

export default RightPanel;
