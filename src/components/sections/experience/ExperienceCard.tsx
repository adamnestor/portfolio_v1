import Tag from "../../shared/Tag";
import ExternalLink from "../../shared/ExternalLink";

interface ExperienceCardProps {
  title: string;
  company: string;
  companyUrl: string;
  dateRange: string;
  description: string;
  technologies: string[];
}

const ExperienceCard = ({
  title,
  company,
  companyUrl,
  dateRange,
  description,
  technologies,
}: ExperienceCardProps) => {
  return (
    <a
      href={companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block group hover:bg-orange-light rounded-lg p-4 -m-4 transition-colors shadow-card hover:shadow-card-hover"
    >
      <div className="grid grid-cols-[140px_1fr] gap-4 pr-8">
        <span className="text-slate-light text-lg group-hover:text-slate-medium whitespace-nowrap transition-colors">
          {dateRange}
        </span>
        <div>
          <h3 className="text-slate-dark text-xl font-medium mb-1">
            <ExternalLink
              href={companyUrl}
              className="group-hover:text-orange-primary"
            >
              {title} · {company}
            </ExternalLink>
          </h3>
          <p className="text-slate-medium text-lg group-hover:text-slate-dark">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech) => (
              <Tag key={tech} label={tech} />
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ExperienceCard;
