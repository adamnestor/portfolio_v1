import EducationList from "./education/EducationList";
import ExperienceList from "./experience/ExperienceList";
import ProjectList from "./projects/ProjectList";

const RightPanel = () => {
  return (
    <div className="pt-16">
      {/* About section */}
      <section id="about" className="text-slate-dark text-base space-y-4 mb-24">
        <h2 className="text-2xl font-semibold mb-8">About</h2>
        <p>
          I'm a full-stack developer building applications with Java, Spring
          Boot, and React. Currently, I'm developing an AI-integrated messaging
          platform at We Make Good Software, where I'm building systems to
          handle large amounts of text messages and automate responses.
        </p>
        <p>
          My transition from education to software development has enhanced my
          ability to break down complex problems and explain them clearly. I use
          these skills when designing websites, writing API endpoints, and
          working with developers and designers. Whether building real-time
          statistical analysis tools or secure multi-user systems, I focus on
          writing clean, maintainable code.
        </p>
        <p>
          I work primarily with Java, Spring Boot, and React, and I'm
          experienced with RESTful APIs, Spring Data JPA, and TypeScript. I
          build websites with Tailwind CSS, set up user authentication systems,
          and connect applications with external services. From processing large
          datasets to testing code, I write programs that work well and are easy
          to maintain.
        </p>
        <p>
          I'm open to new opportunities where I can apply these skills, take on
          challenges, and continue learning
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-24">
        <h2 className="text-2xl font-semibold mb-8">Projects</h2>
        <ProjectList />
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-24">
        <h2 className="text-2xl font-semibold mb-8">Experience</h2>
        <ExperienceList />
      </section>

      {/* Education Section */}
      <section id="education" className="mb-24">
        <h2 className="text-2xl font-semibold mb-8">Education</h2>
        <EducationList />
      </section>
    </div>
  );
};

export default RightPanel;
