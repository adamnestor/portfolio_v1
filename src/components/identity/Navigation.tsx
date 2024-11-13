const Navigation = () => {
  return (
    <nav className="flex flex-col gap-6">
      <a
        href="#about"
        className="text-slate-medium hover:text-orange-primary uppercase tracking-wider font-medium"
      >
        About
      </a>
      <a
        href="#experience"
        className="text-slate-medium hover:text-orange-primary uppercase tracking-wider font-medium"
      >
        Experience
      </a>
      <a
        href="#projects"
        className="text-slate-medium hover:text-orange-primary uppercase tracking-wider font-medium"
      >
        Projects
      </a>
    </nav>
  );
};

export default Navigation;
