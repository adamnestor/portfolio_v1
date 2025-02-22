const Journey = () => {
  return (
    <div className="space-y-12">
      <div className="text-lg text-slate-dark mb-8">
        <p>
          My path to software development started in education, where I learned to break down 
          complex ideas and explain them clearly. This foundation in communication and 
          problem-solving now helps me write better code and work effectively with teams.
        </p>
      </div>
      
      <div className="space-y-12">
        <ExperienceList />
        <EducationList />
      </div>
    </div>
  );
}; 