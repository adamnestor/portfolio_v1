import { useEffect, useState } from "react";

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sections = ["about", "projects", "experience", "education"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        // Get all visible sections
        const visibleSections = entries.filter(entry => entry.isIntersecting);
        
        if (visibleSections.length > 0) {
          // Get the section that is most visible
          const mostVisible = visibleSections.reduce((prev, current) => {
            return (prev.intersectionRatio > current.intersectionRatio) ? prev : current;
          });
          
          setActiveSection(mostVisible.target.id);
        }
      },
      {
        root: null,
        // Use multiple thresholds for more precise detection
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        // Adjust margins to better handle section transitions
        rootMargin: "-20% 0px -20% 0px"
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return activeSection;
};
