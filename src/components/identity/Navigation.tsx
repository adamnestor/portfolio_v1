import { useScrollSpy } from "../../hooks/useScrollSpy";

const Navigation = () => {
  const activeSection = useScrollSpy();

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  return (
    <nav className="flex flex-col gap-6">
      {navItems.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`
            uppercase tracking-wider font-medium transition-colors
            ${
              activeSection === id
                ? "text-orange-primary"
                : "text-slate-medium hover:text-orange-primary"
            }
          `}
        >
          {label}
        </a>
      ))}
    </nav>
  );
};

export default Navigation;
