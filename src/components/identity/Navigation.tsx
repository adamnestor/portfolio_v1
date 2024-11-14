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
      const headerHeight = 80;
      const targetTop = targetElement.getBoundingClientRect().top;
      const scrollToY = window.scrollY + targetTop - headerHeight;

      window.scrollTo({
        top: scrollToY,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="flex flex-col gap-6">
      {navItems.map(({ id, label }) => (
        <div key={id} className="flex items-center group">
          <div className="relative flex items-center">
            {/* Animated line */}
            <div
              className={`
                h-[1px]
                transition-all duration-300 ease-in-out
                ${
                  activeSection === id
                    ? "w-12 bg-orange-primary"
                    : "w-6 bg-slate-medium group-hover:w-8"
                }
                mr-4
              `}
            />
            {/* Navigation text */}
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(id);
              }}
              className={`
                uppercase tracking-wider
                transition-all duration-300 ease-in-out
                ${
                  activeSection === id
                    ? "text-orange-primary font-semibold scale-105"
                    : "text-slate-medium font-medium hover:text-slate-dark"
                }
              `}
            >
              {label}
            </a>
          </div>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
