interface MutedIndicatorProps {
  className?: string;
}

export const MutedIndicator = ({ className = "" }: MutedIndicatorProps) => {
  return (
    <div className={`${className} bg-black/50 rounded-full p-1`}>
      <svg 
        className="w-4 h-4 text-white" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" 
        />
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" 
        />
      </svg>
    </div>
  );
}; 