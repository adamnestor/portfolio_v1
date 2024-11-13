import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/projects";

const ProjectList = () => {
  return (
    <section id="projects">
      <h2 className="text-slate-dark text-2xl font-medium mb-8">Projects</h2>
      <div className="space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
