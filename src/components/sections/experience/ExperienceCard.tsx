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
    technologies 
  }: ExperienceCardProps) => {
    return (
      <a 
        href={companyUrl}
        className="block group hover:bg-orange-light rounded-lg p-4 -m-4 transition-colors shadow-card hover:shadow-card-hover"
      >
        <div className="grid grid-cols-[140px_1fr] gap-4 pr-8">
          <span className="text-slate-light group-hover:text-slate-medium whitespace-nowrap transition-colors">
            {dateRange}
          </span>
          <div>
            <h3 className="text-slate-dark text-xl mb-1 inline-flex items-center gap-2 group-hover:text-orange-primary">
              {title} · {company}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </h3>
            <p className="text-slate-medium group-hover:text-slate-dark">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-1.5 rounded-full bg-orange-light text-orange-primary group-hover:bg-white text-sm transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </a>
    );
  };
  
  export default ExperienceCard;