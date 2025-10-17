import ProjectList from "./projects/ProjectList";
import TechWord from "../shared/TechWord";
import { Layout, Wrench, Database, Code, GitBranch, Users } from "lucide-react";
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
          Currently, at <TechWord>Square (March 2025)</TechWord>, an edtech
          company, I'm working with{" "}
          <TechWord>TypeScript, Express.js, PostgreSQL, and React</TechWord> to
          build full-stack applications for learning platforms. This role has
          stretched me beyond my <TechWord>Java/Spring Boot</TechWord> expertise
          into the <TechWord>Node.js</TechWord> ecosystem, demonstrating my
          ability to quickly learn new technologies and adapt to different tech
          stacks. My focus has been on improving student learning experience
          through better content accessibility.
        </p>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Layout
              size={24}
              className="text-orange-primary flex-shrink-0 mt-1"
            />
            <div>
              Built a review catalog feature allowing students to browse and
              study all their learning materials on-demand, complementing the
              existing spaced-repetition system by giving students full
              visibility and control over their entire review library.
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Database
              size={24}
              className="text-orange-primary flex-shrink-0 mt-1"
            />
            <div>
              Architected <TechWord>RESTful APIs</TechWord> with{" "}
              <TechWord>Express</TechWord> and <TechWord>PostgreSQL</TechWord>{" "}
              to retrieve, filter, and organize review items, enabling students
              to search and navigate their entire learning history.
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Wrench
              size={24}
              className="text-orange-primary flex-shrink-0 mt-1"
            />
            <div>
              Resolved critical production issues during legacy system
              migrations by restructuring API contracts between frontend and
              backend, implementing permanent solutions to prevent recurrence.
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
        <h2 className="text-3xl font-semibold mb-8">Previous Experience</h2>
        <div className="text-lg">
          <ProjectList />
        </div>
      </section>

      {/* My Journey Here section */}
      <section id="journey" className="mb-24">
        <h2 className="text-3xl font-semibold mb-8">My Journey Here</h2>
        <div className="space-y-8 text-slate-dark text-lg">
          <p>
            Before writing code, I taught high school for five years. That
            experience taught me how to break down complex ideas, ask the right
            questions, and explain things clearly - skills that turn out to be
            just as valuable in software engineering as they are in a classroom.
          </p>

          <p>
            In 2023, I made the jump into software development through Coders
            Campus's full-stack Java bootcamp. The transition hasn't always been
            smooth - there's been plenty of head-scratching moments with Spring
            Boot's "magic" or Docker containers that work perfectly on my
            machine but nowhere else. But my teaching background gives me a
            unique perspective:{" "}
            <strong>
              every bug is just another opportunity to learn something new
            </strong>
            .
          </p>

          <p>
            After every interview, every code review, every production incident
            - I'm genuinely a better developer. That growth mindset is how I
            picked up Node.js/Express at Square despite my background being
            entirely in Java and Spring Boot.
          </p>

          <div className="flex items-center gap-2 mt-12 mb-4">
            <Code size={24} className="text-orange-primary" />
            <h3 className="text-2xl font-semibold">How I Work</h3>
          </div>

          <p>
            I believe in understanding the "why" before jumping to solutions.
            When something breaks in production, I want to know why it broke and
            how to prevent that entire class of problems. My teaching background
            means I ask a lot of questions - I'd rather spend time clarifying
            requirements than build the wrong thing efficiently.
          </p>

          <p>
            I write tests because catching bugs early beats debugging at 2am.
            And I believe in leaving code better than I found it - whether
            that's refactoring a confusing method, adding documentation that
            explains the "why," or fixing that typo everyone's been living with.
          </p>

          <div className="flex items-center gap-2 mt-12 mb-4">
            <Users size={24} className="text-orange-primary" />
            <h3 className="text-2xl font-semibold">What I'm Looking For</h3>
          </div>

          <p className="mb-4">
            I'm looking for my next role on an established team where I can:
          </p>

          <ul className="space-y-3 ml-6">
            <li className="flex items-start gap-3">
              <span className="text-orange-primary mt-1">•</span>
              <span>
                Contribute my Java/Spring Boot expertise while learning from
                people who are better than me at things
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-primary mt-1">•</span>
              <span>
                Work with teams that value clear communication and documentation
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-primary mt-1">•</span>
              <span>
                Collaborate where we learn from each other and everyone
                contributes to collective growth
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-orange-primary mt-1">•</span>
              <span>
                Build things that matter - products people actually use
              </span>
            </li>
          </ul>

          <p className="mt-8 text-slate-medium">
            <strong>Education:</strong> Coders Campus Full-Stack Java Bootcamp
            (2023) • University of Akron M.S. Education (2012), B.A. Philosophy
            (2010)
          </p>
        </div>
      </section>
    </div>
  );
};

export default RightPanel;
