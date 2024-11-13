import { useScrollSpy } from "../../hooks/useScrollSpy";

const Navigation = () => {
  const activeSection = useScrollSpy();

  const navItems = [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
  ];

  const handleNavClick = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const headerHeight = 80; // Adjust this value to match your header height
      const targetTop = targetElement.getBoundingClientRect().top;
      const scrollToY = window.pageYOffset + targetTop - headerHeight;

      window.scrollTo({
        top: scrollToY,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="flex flex-col gap-6">
      {navItems.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            handleNavClick(id);
          }}
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
