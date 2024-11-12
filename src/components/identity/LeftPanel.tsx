const LeftPanel = () => {
  return (
    <div className="flex flex-col h-full pt-16">
      {/* Profile Section */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img
            src="/40.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-text-dark text-4xl font-bold">Brittany Chiang</h1>
          <h2 className="text-text-muted text-xl">Front End Engineer</h2>
        </div>
      </div>

      <p className="text-text-light mb-12">
        I build accessible, pixel-perfect digital experiences for the web.
      </p>

      {/* Navigation */}
      <nav className="flex flex-col gap-6">
        <a
          href="#about"
          className="text-text-light hover:text-brand-blue uppercase tracking-wider font-medium"
        >
          About
        </a>
        <a
          href="#experience"
          className="text-text-light hover:text-brand-blue uppercase tracking-wider font-medium"
        >
          Experience
        </a>
        <a
          href="#projects"
          className="text-text-light hover:text-brand-blue uppercase tracking-wider font-medium"
        >
          Projects
        </a>
      </nav>

      {/* Social Links */}
      <div className="flex gap-6 mt-auto">
        <a
          href="https://github.com"
          className="text-text-light hover:text-brand-blue"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com"
          className="text-text-light hover:text-brand-blue"
        >
          LinkedIn
        </a>
        <a
          href="https://codesandbox.io"
          className="text-text-light hover:text-brand-blue"
        >
          CodeSandbox
        </a>
        <a
          href="https://instagram.com"
          className="text-text-light hover:text-brand-blue"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default LeftPanel;
