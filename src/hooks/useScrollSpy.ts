import { useEffect, useState } from "react";

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState<string>("about");

  useEffect(() => {
    const sections = ["about", "experience", "projects"]
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only update for elements entering the viewport
          if (entry.isIntersecting) {
            // Get the ID of the element that's now visible
            const visibleId = entry.target.id;
            setActiveSection(visibleId);
          }
        });
      },
      {
        // Root is the scrollable container (right panel)
        root: null, // null means use viewport
        // When element is 40% visible, trigger the callback
        threshold: 0.4,
        // Add some margin to trigger slightly before the element reaches the top
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    // Observe all sections
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup
    return () => observer.disconnect();
  }, []);

  return activeSection;
};
