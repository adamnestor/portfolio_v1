import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  id?: string;
}

const SectionTitle = ({ children, id }: SectionTitleProps) => {
  return (
    <h2 id={id} className="text-slate-dark text-2xl font-medium mb-8">
      {children}
    </h2>
  );
};

export default SectionTitle;
