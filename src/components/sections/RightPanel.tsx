import EducationList from "./education/EducationList";
import ExperienceList from "./experience/ExperienceList";
import ProjectList from "./projects/ProjectList";

const RightPanel = () => {
  return (
    <div className="pt-16">
      {/* About section */}
      <section id="about" className="text-slate-medium text-xl space-y-4 mb-24">
        <p>
          I’m a full-stack developer focused on solving complex challenges with
          innovative solutions. Currently, I’m building an AI-powered messaging
          platform, integrating APIs and developing scalable systems using Java,
          Spring Boot, and React.
        </p>
        <p>
          My background in education and philosophy has refined my ability to
          break down complex concepts and communicate them clearly, whether
          collaborating with teams or explaining technical details. I apply
          these skills throughout development, from debugging issues to
          designing features, always with a focus on clean, maintainable code.
        </p>
        <p>
          I work with a range of technologies, including Java, Spring Boot,
          React, RESTful APIs, SQL, and TypeScript, while continuously expanding
          my toolkit. I prioritize scalable, efficient solutions, using best
          practices like Git and Docker to ensure robust, maintainable
          applications.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-24">
        <ProjectList />
      </section>
      {/* Experience Section */}
      <section id="experience" className="mb-24">
        <ExperienceList />
      </section>
      <section id="education" className="mb-24">
        <EducationList />
      </section>
    </div>
  );
};

export default RightPanel;
