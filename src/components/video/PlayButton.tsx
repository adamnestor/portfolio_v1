interface PlayButtonProps {
  className?: string;
}

export const PlayButton = ({ className = "" }: PlayButtonProps) => {
  return (
    <div className={`${className} group-hover:scale-110 transition-all duration-300`}>
      <div className="w-10 h-10 rounded-full bg-orange-primary/60 group-hover:bg-orange-primary flex items-center justify-center transition-colors">
        <svg 
          className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
      </div>
    </div>
  );
}; 