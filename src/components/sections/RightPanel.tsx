const RightPanel = () => {
  return (
    <div className="pt-16">
      {/* Opening paragraph aligned with name */}
      <div className="text-text-muted space-y-4 mb-24">
        <p>
          I'm a developer passionate about crafting accessible, pixel-perfect
          user interfaces that blend thoughtful design with robust engineering.
          My teaching background gives me a unique perspective on creating
          clear, intuitive user experiences and collaborating effectively with
          teams.
        </p>
      </div>

      {/* Experience Section */}
      <section id="experience" className="mb-24">
        <h2 className="text-text-dark text-2xl font-medium mb-8">Experience</h2>
        <div className="space-y-12">
          {/* Development Role */}
          <a
            href="https://company-url.com"
            className="block group hover:bg-[#112240] rounded-lg p-4 -m-4 transition-colors"
          >
            <div className="grid grid-cols-[140px_1fr] gap-8">
              <span className="text-text-light whitespace-nowrap">
                2023 — Present
              </span>
              <div>
                <h3 className="text-text-dark text-xl mb-1 inline-flex items-center gap-2 group-hover:text-brand-blue">
                  Software Developer · Company Name
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </h3>
                <p className="text-text-muted group-hover:text-text-light">
                  Description of your current development role and key
                  achievements...
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-4 py-1.5 rounded-full bg-[#112240] text-brand-blue text-sm group-hover:bg-[#1D3A70]">
                    React
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-[#112240] text-brand-blue text-sm group-hover:bg-[#1D3A70]">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          </a>

          {/* Teaching Role */}
          <a
            href="https://school-url.com"
            className="block group hover:bg-[#112240] rounded-lg p-4 -m-4 transition-colors"
          >
            <div className="grid grid-cols-[140px_1fr] gap-8">
              <span className="text-text-light whitespace-nowrap">
                2018 — 2023
              </span>
              <div>
                <h3 className="text-text-dark text-xl mb-1 inline-flex items-center gap-2 group-hover:text-brand-blue">
                  High School Teacher · School Name
                  <svg
                    className="w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </h3>
                <p className="text-text-muted group-hover:text-text-light">
                  Highlight transferable skills like communication,
                  problem-solving, project management, and ability to break down
                  complex concepts...
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-4 py-1.5 rounded-full bg-[#112240] text-brand-blue text-sm group-hover:bg-[#1D3A70]">
                    Curriculum Development
                  </span>
                  <span className="px-4 py-1.5 rounded-full bg-[#112240] text-brand-blue text-sm group-hover:bg-[#1D3A70]">
                    Project Management
                  </span>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2 className="text-text-dark text-2xl font-medium mb-8">Projects</h2>
        {/* Projects content */}
      </section>
    </div>
  );
};

export default RightPanel;
