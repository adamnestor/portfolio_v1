import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/projects";

const ProjectList = () => {
  return (
    <div className="space-y-12">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
