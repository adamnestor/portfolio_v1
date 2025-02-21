import EducationList from "./education/EducationList";
import ExperienceList from "./experience/ExperienceList";
import ProjectList from "./projects/ProjectList";
import TechWord from "../shared/TechWord";
import { Server, Bot, Layout } from "lucide-react";
// Remove Construction import since we're not using it
// Remove these imports for now until we create the components
// import Tag from "./Tag";
// import TechStack from "./TechStack";
// import Journey from "./Journey";

const RightPanel = () => {
  return (
    <div className="pt-16">
      {/* What I'm Building Now section */}
      <section
        id="building-now"
        className="text-slate-dark text-lg space-y-6 mb-24"
      >
        <h2 className="text-3xl font-semibold mb-8">What I'm Building Now</h2>
        <p>
          Currently, at We Make Good Software (August 2024), I'm building an
          AI-integrated messaging platform that processes large volumes of
          messages and automates responses intelligently. Here's what I'm
          focused on:
        </p>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Server
              size={24}
              className="text-orange-primary flex-shrink-0 mt-1"
            />
            <div>
              Architecting a <TechWord>Java</TechWord>/
              <TechWord>Spring Boot</TechWord> backend that manages message flow
              and integrates with <TechWord>Twilio</TechWord> for reliable SMS
              delivery and tracking
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Bot size={24} className="text-orange-primary flex-shrink-0 mt-1" />
            <div>
              Working with our AI team to implement automated response systems,
              using <TechWord>Spring Boot</TechWord>'s reactive capabilities for
              efficient processing
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Layout
              size={24}
              className="text-orange-primary flex-shrink-0 mt-1"
            />
            <div>
              Creating an intuitive <TechWord>React</TechWord> frontend that
              gives course creators real-time visibility into their message
              flows and analytics
            </div>
          </div>
        </div>
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
