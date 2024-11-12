const RightPanel = () => {
    return (
      <div className="space-y-24">
        {/* About Section */}
        <section id="about">
          <h2 className="text-text-dark text-2xl font-medium mb-4">About</h2>
          <div className="text-text-muted space-y-4">
            <p>
              I'm a developer passionate about crafting accessible, pixel-perfect user interfaces 
              that blend thoughtful design with robust engineering. My teaching background gives me
              a unique perspective on creating clear, intuitive user experiences and collaborating
              effectively with teams.
            </p>
            {/* ... rest of about content ... */}
          </div>
        </section>
  
        {/* Experience Section */}
        <section id="experience">
          <h2 className="text-text-dark text-2xl font-medium mb-8">Experience</h2>
          
          {/* Development Experience */}
          <div className="mb-16">
            <h3 className="text-text-muted uppercase tracking-wider text-sm mb-6">Development</h3>
            <div className="space-y-12">
              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <div>
                    <h4 className="text-text-dark text-xl">Software Developer · Company Name</h4>
                    <p className="text-text-muted">
                      Description of your current development role and key achievements...
                    </p>
                  </div>
                  <span className="text-text-light">2023 — Present</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 rounded-full bg-brand-light/20 text-brand-blue text-sm">React</span>
                  <span className="px-3 py-1 rounded-full bg-brand-light/20 text-brand-blue text-sm">TypeScript</span>
                  {/* Add your tech stack */}
                </div>
              </div>
            </div>
          </div>
  
          {/* Teaching Experience */}
          <div>
            <h3 className="text-text-muted uppercase tracking-wider text-sm mb-6">Education</h3>
            <div className="space-y-12">
              <div className="group">
                <div className="flex justify-between items-baseline mb-2">
                  <div>
                    <h4 className="text-text-dark text-xl">High School Teacher · School Name</h4>
                    <p className="text-text-muted">
                      Highlight transferable skills like communication, problem-solving,
                      project management, and ability to break down complex concepts...
                    </p>
                  </div>
                  <span className="text-text-light">2018 — 2023</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 rounded-full bg-brand-light/20 text-brand-blue text-sm">Curriculum Development</span>
                  <span className="px-3 py-1 rounded-full bg-brand-light/20 text-brand-blue text-sm">Project Management</span>
                  <span className="px-3 py-1 rounded-full bg-brand-light/20 text-brand-blue text-sm">Communication</span>
                </div>
              </div>
              {/* Add additional teaching positions if needed */}
            </div>
          </div>
        </section>
  
        {/* Projects Section remains the same */}
      </div>
    );
  };
  
  export default RightPanel;