import Tag from "../../shared/Tag";
import ExternalLink from "../../shared/ExternalLink";

interface EducationCardProps {
  degree: string;
  school: string;
  schoolUrl: string;
  dateRange: string;
  description?: string;
  technologies?: string[];
}

const EducationCard = ({
  degree,
  school,
  schoolUrl,
  dateRange,
  description,
  technologies,
}: EducationCardProps) => {
  return (
    <a
      href={schoolUrl}
      className="block group hover:bg-orange-light rounded-lg p-4 -m-4 transition-colors shadow-card hover:shadow-card-hover"
    >
      <div className="grid grid-cols-[140px_1fr] gap-4 pr-8">
        <span className="text-slate-light group-hover:text-slate-medium whitespace-nowrap transition-colors">
          {dateRange}
        </span>
        <div>
          <h3 className="text-slate-dark text-xl font-medium mb-1">
            <ExternalLink
              href={schoolUrl}
              className="group-hover:text-orange-primary"
            >
              {degree}
            </ExternalLink>
          </h3>
          <div className="text-slate-medium text-lg group-hover:text-slate-dark mb-3">
            {school}
          </div>
          {description && (
            <p className="text-slate-medium text-lg group-hover:text-slate-dark">
              {description}
            </p>
          )}
          {technologies && technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {technologies.map((tech) => (
                <Tag key={tech} label={tech} />
              ))}
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default EducationCard;
