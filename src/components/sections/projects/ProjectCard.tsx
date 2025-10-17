import { useState } from "react";
import { Project } from "../../../data/projects";
import Tag from "../../shared/Tag";
import ExternalLink from "../../shared/ExternalLink";
import VideoThumbnail from "../../video/VideoThumbnail";
import VideoModal from "../../video/VideoModal";
import {
  LineChart,
  Calculator,
  BarChart3,
  Users,
  Shield,
  ClipboardCheck,
  Server, // NEW
  MessageSquare, // NEW
  Database, // NEW
} from "lucide-react";
import TechWord from "../../shared/TechWord";

interface ProjectCardProps {
  project: Project;
}

const iconMap = {
  lineChart: LineChart,
  calculator: Calculator,
  barChart: BarChart3,
  users: Users,
  shield: Shield,
  clipboardCheck: ClipboardCheck,
  server: Server, // NEW
  messageSquare: MessageSquare, // NEW
  database: Database, // NEW
} as const;

const formatDescription = (description: string) => {
  const techWords = [
    "React",
    "TypeScript",
    "Spring Boot",
    "Hibernate",
    "Java",
    "MySQL",
    "PostgreSQL", // Added
    "Tailwind CSS",
  ];

  let formattedDesc = description;
  techWords.forEach((word) => {
    formattedDesc = formattedDesc.replace(
      new RegExp(`\\b${word}\\b`, "g"),
      `<TechWord>${word}</TechWord>`
    );
  });

  return formattedDesc.split(/<TechWord>|<\/TechWord>/).map((part, index) => {
    return index % 2 === 1 ? <TechWord key={index}>{part}</TechWord> : part;
  });
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getLinkLabel = (projectTitle: string, linkType: "code" | "link") => {
    if (projectTitle === "CourtVision") {
      return linkType === "code" ? "Backend Code" : "Frontend Code";
    }
    if (projectTitle === "We Make Good Software") {
      return "Live Product"; // Only one link for WMGS
    }
    return linkType === "code" ? "See Code" : "Live Demo";
  };

  return (
    <div className="block group hover:bg-orange-light rounded-lg p-4 -m-4 transition-colors shadow-card hover:shadow-card-hover">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Only show video thumbnail if video exists */}
        {project.video && project.thumbnailImage && (
          <VideoThumbnail
            thumbnailImage={project.thumbnailImage}
            videoUrl={project.video}
            onPlayClick={() => setIsModalOpen(true)}
            title={project.title}
          />
        )}
        <div className="flex-1 space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-slate-dark text-lg font-medium group-hover:text-orange-primary">
                {project.title}
              </h3>
            </div>
            {/* NEW: Display type and dateRange */}
            <div className="text-slate-medium text-sm mb-3">
              {project.type === "professional" ? (
                <span>Professional Work • {project.dateRange}</span>
              ) : (
                <span>Personal Project</span>
              )}
            </div>
            {/* Links - conditionally render code link */}
            <div className="flex items-center gap-4">
              {project.codeUrl && (
                <ExternalLink
                  href={project.codeUrl}
                  className="text-slate-dark hover:text-orange-primary text-base font-medium"
                  aria-label="View source code on GitHub"
                >
                  {getLinkLabel(project.title, "code")}
                </ExternalLink>
              )}
              {project.link && (
                <ExternalLink
                  href={project.link}
                  className="text-slate-dark hover:text-orange-primary text-base font-medium"
                >
                  {getLinkLabel(project.title, "link")}
                </ExternalLink>
              )}
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <p className="text-slate-dark text-lg">
                {formatDescription(project.description)}
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h4 className="text-slate-dark font-medium mb-3">
                Key features:
              </h4>
              <div className="space-y-4">
                {project.keyFeatures.map((feature, index) => {
                  const Icon = iconMap[feature.icon];
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <Icon
                        size={20}
                        className="text-orange-primary flex-shrink-0 mt-1"
                      />
                      <span className="text-slate-dark text-lg">
                        {feature.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {project.technologies.map((tech) => (
              <Tag key={tech} label={tech} />
            ))}
          </div>
        </div>
      </div>

      {/* Only render video modal if video exists */}
      {isModalOpen && project.video && (
        <VideoModal
          videoUrl={project.video}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProjectCard;
