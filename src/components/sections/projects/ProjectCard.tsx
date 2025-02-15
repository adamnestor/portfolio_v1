import { useState } from "react";
import { Project } from "../../../data/projects";
import Tag from "../../shared/Tag";
import ExternalLink from "../../shared/ExternalLink";
import VideoThumbnail from "../../video/VideoThumbnail";
import VideoModal from "../../video/VideoModal";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getLinkLabel = (projectTitle: string, linkType: 'code' | 'link') => {
    if (projectTitle === "CourtVision") {
      return linkType === 'code' ? "Backend Code" : "Frontend Code";
    }
    return linkType === 'code' ? "See Code" : "Live Demo";
  };

  return (
    <div className="block group hover:bg-orange-light rounded-lg p-4 -m-4 transition-colors shadow-card hover:shadow-card-hover">
      <div className="flex gap-6">
        <VideoThumbnail
          thumbnailImage={project.thumbnailImage}
          videoUrl={project.video}
          onPlayClick={() => setIsModalOpen(true)}
          title={project.title}
        />
        <div className="flex-1">
          <div className="flex items-center gap-4 mb-1">
            <h3 className="text-slate-dark text-lg font-medium group-hover:text-orange-primary">
              {project.title}
            </h3>
            <ExternalLink
              href={project.codeUrl}
              className="text-slate-dark hover:text-orange-primary text-base font-medium"
              aria-label="View source code on GitHub"
            >
              {getLinkLabel(project.title, 'code')}
            </ExternalLink>
            {project.link && (
              <ExternalLink
                href={project.link}
                className="text-slate-dark hover:text-orange-primary text-base font-medium"
              >
                {getLinkLabel(project.title, 'link')}
              </ExternalLink>
            )}
          </div>
          <p className="text-slate-dark text-base group-hover:text-slate-dark mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Tag key={tech} label={tech} />
            ))}
          </div>
        </div>
      </div>

      <VideoModal
        videoUrl={project.video}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProjectCard;
