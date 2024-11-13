import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/projects";
import SectionTitle from "../../shared/SectionTitle"; // Add this import

const ProjectList = () => {
  return (
    <section id="projects" className="mb-24">
      <SectionTitle>Projects</SectionTitle> {/* Replace h2 with this */}
      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
