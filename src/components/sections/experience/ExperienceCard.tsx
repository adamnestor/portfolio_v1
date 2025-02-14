import Tag from "../../shared/Tag";

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
  dateRange,
  description,
  technologies,
}: ExperienceCardProps) => {
  return (
    <div className="block group hover:bg-orange-light rounded-lg p-4 -m-4 transition-colors shadow-card hover:shadow-card-hover">
      <div className="grid grid-cols-[140px_1fr] gap-4 pr-8">
        <span className="text-slate-light text-base group-hover:text-slate-medium whitespace-nowrap transition-colors">
          {dateRange}
        </span>
        <div>
          <h3 className="text-slate-dark text-lg font-medium mb-1 group-hover:text-orange-primary">
            {title} · {company}
          </h3>
          <p className="text-slate-dark text-base group-hover:text-slate-dark">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech) => (
              <Tag key={tech} label={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
