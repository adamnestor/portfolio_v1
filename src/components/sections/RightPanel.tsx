import EducationList from "./education/EducationList";
import ExperienceList from "./experience/ExperienceList";
import ProjectList from "./projects/ProjectList";
// Remove these imports for now until we create the components
// import Tag from "./Tag";
// import TechStack from "./TechStack";
// import Journey from "./Journey";

const RightPanel = () => {
  return (
    <div className="pt-16">
      {/* What I'm Building Now section */}
      <section id="building-now" className="text-slate-dark text-lg space-y-6 mb-24">
        <h2 className="text-3xl font-semibold mb-8">What I'm Building Now</h2>
        <p>
          At We Make Good Software, I'm developing an AI-integrated messaging platform that's 
          transforming how course creators connect with their students. Using Spring Boot and 
          MySQL, I'm building a high-volume processing pipeline that handles text message 
          communication through Twilio's API.
        </p>
        <p>
          The system processes thousands of messages daily, using webhooks and REST APIs for 
          bi-directional communication. I work closely with our AI team to integrate automated 
          responses, enhancing user engagement while reducing manual work.
        </p>
        {/* Remove Tag components for now */}
      </section>

      {/* What I Work With section */}
      <section id="work-with" className="mb-24">
        <h2 className="text-3xl font-semibold mb-8">What I Work With</h2>
        {/* Temporarily remove TechStack component */}
        <div>Coming soon...</div>
      </section>

      {/* What I've Built section */}
      <section id="built" className="mb-24">
        <h2 className="text-3xl font-semibold mb-8">What I've Built</h2>
        <ProjectList />
      </section>

      {/* My Journey Here section */}
      <section id="journey" className="mb-24">
        <h2 className="text-3xl font-semibold mb-8">My Journey Here</h2>
        {/* Temporarily remove Journey component */}
        <div className="space-y-12">
          <ExperienceList />
          <EducationList />
        </div>
      </section>
    </div>
  );
};

export default RightPanel;
