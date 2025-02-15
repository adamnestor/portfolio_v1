import Tag from "../../shared/Tag";

interface Position {
  company: string;
  dateRange: string;
}

interface ExperienceCardProps {
  title: string;
  positions: Position[];
  description: string;
  technologies: string[];
}

const ExperienceCard = ({
  title,
  positions,
  description,
  technologies,
}: ExperienceCardProps) => {
  return (
    <div className="block group hover:bg-orange-light rounded-lg p-4 -m-4 transition-colors shadow-card hover:shadow-card-hover">
      <div>
        <h3 className="text-slate-dark text-lg font-medium mb-3 group-hover:text-orange-primary">
          {title}
        </h3>
        <div className="grid grid-cols-[140px_1fr] gap-x-4">
          <div className="space-y-2">
            {positions.map(({ dateRange }) => (
              <span
                key={dateRange}
                className="text-slate-medium text-base whitespace-nowrap block"
              >
                {dateRange}
              </span>
            ))}
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              {positions.map(({ company, dateRange }) => (
                <span
                  key={`${company}-${dateRange}`}
                  className="text-slate-dark text-lg font-medium block"
                >
                  {company}
                </span>
              ))}
            </div>
            {description && (
              <p className="text-slate-dark text-base group-hover:text-slate-dark">
                {description}
              </p>
            )}
            {technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <Tag key={tech} label={tech} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
