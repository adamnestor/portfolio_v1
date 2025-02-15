import Tag from "../../shared/Tag";

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
  dateRange,
  description,
  technologies,
}: EducationCardProps) => {
  return (
    <div className="block group hover:bg-orange-light rounded-lg p-4 -m-4 transition-colors shadow-card hover:shadow-card-hover">
      <div className="grid grid-cols-[140px_1fr] gap-4 pr-8">
        <span className="text-slate-medium text-base group-hover:text-slate-medium whitespace-nowrap transition-colors">
          {dateRange}
        </span>
        <div>
          <h3 className="text-slate-dark text-lg font-medium mb-1 group-hover:text-orange-primary">
            {degree}
          </h3>
          <div className="text-slate-dark text-base group-hover:text-slate-dark mb-3">
            {school}
          </div>
          {description && (
            <p className="text-slate-dark text-base group-hover:text-slate-dark">
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
    </div>
  );
};

export default EducationCard;
