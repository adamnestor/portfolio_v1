import EducationList from "./education/EducationList";
import ExperienceList from "./experience/ExperienceList";
import ProjectList from "./projects/ProjectList";

const RightPanel = () => {
  return (
    <div className="pt-16">
      {/* About section */}
      <section id="about" className="text-slate-medium space-y-4 mb-24">
        <p>
          I'm a full-stack developer who thrives on solving complex
          communication challenges through innovative software solutions.
          Currently, I'm developing an AI-powered messaging platform, where I
          integrate external APIs and architect scalable systems using Java,
          Spring Boot, and React.
        </p>
        <p>
          My background in education and philosophy has honed my ability to
          break down complex technical concepts and communicate effectively
          across teams. I bring this skill to every aspect of development,
          whether I'm debugging intricate issues or designing new features,
          focusing on delivering elegant, maintainable code that drives business
          value.
        </p>
        <p>
          At my core, I'm passionate about building robust applications using
          modern technologies like TypeScript, RESTful APIs, and SQL, while
          following industry best practices with Git and Docker. My experience
          teaching has strengthened my ability to collaborate and adapt quickly
          in fast-paced environments. I'm ready to bring this unique combination
          of technical expertise and clear communication to your next
          challenging project.
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
