import ExperienceList from "./experience/ExperienceList";
import ProjectList from "./projects/ProjectList";

const RightPanel = () => {
  return (
    <div className="pt-16">
      {/* About section */}
      <section id="about" className="text-slate-medium space-y-4 mb-24">
        <p>
          I'm a developer passionate about crafting accessible, pixel-perfect
          user interfaces that blend thoughtful design with robust engineering.
          My teaching background gives me a unique perspective on creating
          clear, intuitive user experiences and collaborating effectively with
          teams.
        </p>
        <p>
          Beyond my role in education, I'm passionate about creating intuitive
          digital experiences that bridge technology and learning. When I'm not
          coding or teaching, you'll find me exploring new web technologies,
          contributing to open-source education projects, or mentoring aspiring
          developers. I believe in the power of combining educational insights
          with technical expertise to build tools that make learning more
          accessible and engaging. My background in both education and software
          development gives me a unique perspective on creating user-focused
          solutions that actually solve real classroom challenges.
        </p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-24">
        <ExperienceList />
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-24">
        <ProjectList />
      </section>
    </div>
  );
};

export default RightPanel;
