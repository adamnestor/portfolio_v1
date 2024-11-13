import React from "react";

interface TagProps {
  label: string;
  className?: string;
}

const Tag = ({ label }: TagProps) => {
  return (
    <span className="px-4 py-1.5 rounded-full bg-orange-light text-orange-primary group-hover:bg-white text-sm transition-colors">
      {label}
    </span>
  );
};

export default Tag;
