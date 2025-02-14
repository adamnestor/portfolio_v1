import { Project } from "../../../data/projects";
import Tag from "../../shared/Tag";
import ExternalLink from "../../shared/ExternalLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="block group hover:bg-orange-light rounded-lg p-4 -m-4 transition-colors shadow-card hover:shadow-card-hover">
      <div className="flex gap-6">
        <div className="w-28 h-20 rounded overflow-hidden bg-slate-light">
          <img
            src={project.image}
            alt={`${project.title} preview`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-1">
            <h3 className="text-slate-dark text-lg font-medium group-hover:text-orange-primary">
              {project.title}
            </h3>
            <ExternalLink
              href={project.codeUrl}
              className="text-slate-medium hover:text-orange-primary text-base font-medium"
              aria-label="View source code on GitHub"
            >
              See Code
            </ExternalLink>
            {project.link && (
              <ExternalLink
                href={project.link}
                className="text-slate-medium hover:text-orange-primary text-base font-medium"
              >
                Live Demo
              </ExternalLink>
            )}
          </div>
          <p className="text-slate-medium text-base group-hover:text-slate-dark mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tag key={tech} label={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
