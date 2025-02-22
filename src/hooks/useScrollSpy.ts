import { useEffect, useState } from "react";

export const useScrollSpy = () => {
  const [activeSection, setActiveSection] = useState<string>("building-now");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["building-now", "work-with", "built", "journey"]
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => section !== null);

      // Get the section closest to the top of the viewport
      const current = sections.reduce((nearest, section) => {
        const distance = Math.abs(section.getBoundingClientRect().top);
        const nearestDistance = Math.abs(nearest.getBoundingClientRect().top);
        return distance < nearestDistance ? section : nearest;
      }, sections[0]);

      if (current?.id) {
        setActiveSection(current.id);
      }
    };

    // Initial check
    handleScroll();

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return activeSection;
};
