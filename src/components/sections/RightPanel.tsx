import ProjectList from "./projects/ProjectList";
import TechWord from "../shared/TechWord";
import {
  Server,
  Bot,
  Layout,
  Database,
  Code,
  GitBranch,
  Brain,
  Users,
  Puzzle,
} from "lucide-react";
import Tag from "../shared/Tag";

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
          Currently, at <TechWord>We Make Good Software (August 2024)</TechWord>
          , I'm building an AI-integrated messaging platform that processes
          large volumes of messages and automates responses intelligently.
          Here's what I'm focused on:
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
              delivery and tracking using <TechWord>RESTful APIs</TechWord>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Bot size={24} className="text-orange-primary flex-shrink-0 mt-1" />
            <div>
              Working with our AI team to implement automated response systems,
              using <TechWord>Spring Boot</TechWord>'s reactive capabilities and{" "}
              <TechWord>MySQL</TechWord> for efficient processing
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Layout
              size={24}
              className="text-orange-primary flex-shrink-0 mt-1"
            />
            <div>
              Creating an intuitive <TechWord>React</TechWord> +{" "}
              <TechWord>TypeScript</TechWord> frontend with{" "}
              <TechWord>Tailwind CSS</TechWord> that gives course creators
              real-time visibility into their message flows and analytics
            </div>
          </div>
        </div>
      </section>

      {/* What I Work With section */}
      <section id="work-with" className="mb-24">
        <h2 className="text-3xl font-semibold mb-8">What I Work With</h2>
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Database size={24} className="text-orange-primary" />
              <h3 className="text-xl font-medium text-slate-dark">
                Backend Development
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Tag label="Java" />
              <Tag label="Spring Boot" />
              <Tag label="Node.js" />
              <Tag label="Express.js" />
              <Tag label="PostgresSQL" />
              <Tag label="MySQL" />
              <Tag label="JPA/Hibernate" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <Code size={24} className="text-orange-primary" />
              <h3 className="text-xl font-medium text-slate-dark">
                Frontend Development
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Tag label="React" />
              <Tag label="TypeScript" />
              <Tag label="JavaScript" />
              <Tag label="Tailwind CSS" />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <GitBranch size={24} className="text-orange-primary" />
              <h3 className="text-xl font-medium text-slate-dark">
                Professional Practices
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <Tag label="RESTful APIs" />
              <Tag label="Docker" />
              <Tag label="Git" />
              <Tag label="Test Driven Development" />
              <Tag label="Agile/Scrum" />
            </div>
          </div>
        </div>
      </section>

      {/* What I've Built section */}
      <section id="built" className="mb-24">
        <h2 className="text-3xl font-semibold mb-8">What I've Built</h2>
        <div className="text-lg">
          <ProjectList />
        </div>
      </section>

      {/* My Journey Here section */}
      <section id="journey" className="mb-24">
        <h2 className="text-3xl font-semibold mb-8">My Journey Here</h2>

        <div className="space-y-8 text-slate-dark text-lg">
          {/* The Foundation */}
          <div className="block group hover:bg-orange-light rounded-lg p-6 -m-6 transition-colors shadow-card hover:shadow-card-hover">
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <Brain size={24} className="text-orange-primary" />
              The Foundation
            </h3>

            <div className="space-y-8">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h4 className="text-lg font-medium mb-4">
                  B.A. in Philosophy from The University of Akron (2010)
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Puzzle
                      size={18}
                      className="text-orange-primary flex-shrink-0 mt-1"
                    />
                    <span>
                      Learned how to think logically and solve problems
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Brain
                      size={18}
                      className="text-orange-primary flex-shrink-0 mt-1"
                    />
                    <span>
                      Got really good at breaking down complicated ideas
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h4 className="text-lg font-medium mb-4">
                  M.S. in Education/Exercise Physiology (2012)
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Puzzle
                      size={18}
                      className="text-orange-primary flex-shrink-0 mt-1"
                    />
                    <span>Studied how the human body works through data</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Puzzle
                      size={18}
                      className="text-orange-primary flex-shrink-0 mt-1"
                    />
                    <span>
                      Found ways to make complex science understandable
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Teaching & Leadership */}
          <div className="block group hover:bg-orange-light rounded-lg p-6 -m-6 transition-colors shadow-card hover:shadow-card-hover">
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <Users size={24} className="text-orange-primary" />
              Teaching & Leadership (2016-2024)
            </h3>

            <div className="space-y-8">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h4 className="text-lg font-medium mb-4">
                  Director of Youth Ministry (2016-2020)
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Puzzle
                      size={18}
                      className="text-orange-primary flex-shrink-0 mt-1"
                    />
                    <span>
                      Led weekly programs and events for 350+ youth participants
                      and 65+ volunteers
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Puzzle
                      size={18}
                      className="text-orange-primary flex-shrink-0 mt-1"
                    />
                    <span>
                      Ran multiple weekly programs as the main presenter
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Puzzle
                      size={18}
                      className="text-orange-primary flex-shrink-0 mt-1"
                    />
                    <span>
                      Built systems to keep everything organized and running
                      smoothly
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h4 className="text-lg font-medium mb-4">
                  High School Teacher (2020-2024)
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Puzzle
                      size={18}
                      className="text-orange-primary flex-shrink-0 mt-1"
                    />
                    <span>
                      Made difficult concepts easy to understand through daily
                      lessons
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Puzzle
                      size={18}
                      className="text-orange-primary flex-shrink-0 mt-1"
                    />
                    <span>
                      Found creative ways to check if students really got it
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Puzzle
                      size={18}
                      className="text-orange-primary flex-shrink-0 mt-1"
                    />
                    <span>
                      Created an environment where asking questions was
                      encouraged
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Transition to Tech */}
          <div className="block group hover:bg-orange-light rounded-lg p-6 -m-6 transition-colors shadow-card hover:shadow-card-hover">
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
              <Code size={24} className="text-orange-primary" />
              Transition to Tech (2023-2024)
            </h3>

            <div className="space-y-8">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h4 className="text-lg font-medium mb-4">
                  Coders Campus Bootcamp
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Puzzle
                      size={18}
                      className="text-orange-primary flex-shrink-0 mt-1"
                    />
                    <span>
                      Built real applications with <TechWord>Java</TechWord> and{" "}
                      <TechWord>Spring Boot</TechWord>
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Puzzle
                      size={18}
                      className="text-orange-primary flex-shrink-0 mt-1"
                    />
                    <span>Created solutions for actual problems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Puzzle
                      size={18}
                      className="text-orange-primary flex-shrink-0 mt-1"
                    />
                    <span>
                      Learned modern coding practices like{" "}
                      <TechWord>Test Driven Development</TechWord> and{" "}
                      <TechWord>Git</TechWord> workflows
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-slate-dark mt-12 text-lg">
          I bring this unique mix of problem-solving, clear communication, and
          technical skills to every project I work on.
        </p>
      </section>
    </div>
  );
};

export default RightPanel;
