interface TagProps {
  label: string;
}

const Tag = ({ label }: TagProps) => {
  return (
    <span className="
      px-4 
      py-2 
      bg-orange-primary/10
      text-orange-primary 
      font-semibold 
      rounded-full
      border-2
      border-orange-primary
      hover:bg-orange-primary 
      hover:text-white
      transition-all
      duration-200
      cursor-default
      text-base
    ">
      {label}
    </span>
  );
};

export default Tag;
