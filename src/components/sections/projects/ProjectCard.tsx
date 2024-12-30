import { Project } from "../../../data/projects";
import Tag from "../../shared/Tag";
import ExternalLink from "../../shared/ExternalLink";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group hover:bg-orange-light rounded-lg p-4 -m-4 transition-colors shadow-card hover:shadow-card-hover"
    >
      <div className="flex gap-6">
        <div className="w-28 h-20 rounded overflow-hidden bg-slate-light">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-slate-dark text-xl font-medium mb-1">
            <ExternalLink
              href={project.link}
              className="group-hover:text-orange-primary"
            >
              {project.title}
            </ExternalLink>
          </h3>
          <p className="text-slate-medium text-lg group-hover:text-slate-dark mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tag key={tech} label={tech} />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
