const TechStack = () => {
  return (
    <div className="space-y-12">
      <div className="space-y-6">
        <h3 className="text-xl font-medium text-slate-dark">Backend Development</h3>
        <p className="text-lg text-slate-dark">
          I build robust server-side applications using Java and Spring Boot. My focus is on 
          creating scalable APIs, implementing secure authentication, and managing data with 
          MySQL and Hibernate.
        </p>
        <div className="flex flex-wrap gap-2">
          <Tag label="Java" />
          <Tag label="Spring Boot" />
          <Tag label="MySQL" />
          <Tag label="Hibernate/JPA" />
          <Tag label="RESTful APIs" />
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-medium text-slate-dark">Frontend Development</h3>
        <p className="text-lg text-slate-dark">
          I create responsive user interfaces with React and TypeScript, styling with 
          Tailwind CSS. I focus on building maintainable components and managing 
          application state effectively.
        </p>
        <div className="flex flex-wrap gap-2">
          <Tag label="React" />
          <Tag label="TypeScript" />
          <Tag label="Tailwind CSS" />
          <Tag label="JavaScript" />
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-medium text-slate-dark">Tools & Practices</h3>
        <p className="text-lg text-slate-dark">
          I use industry-standard tools and follow best practices for version control, 
          testing, and deployment. I'm experienced with Git workflows and writing 
          maintainable, well-tested code.
        </p>
        <div className="flex flex-wrap gap-2">
          <Tag label="Git" />
          <Tag label="Maven" />
          <Tag label="JUnit" />
          <Tag label="CI/CD" />
        </div>
      </div>
    </div>
  );
}; 