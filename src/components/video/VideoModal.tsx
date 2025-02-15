import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

interface VideoModalProps {
  videoUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal = ({ videoUrl, isOpen, onClose }: VideoModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<ReactPlayer>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isFullscreen) {
          document.exitFullscreen();
        } else {
          onClose();
        }
      }
      if (event.key === ' ' && playerRef.current) {
        event.preventDefault();
        const player = playerRef.current.getInternalPlayer();
        player.paused ? player.play() : player.pause();
      }
      if (event.key === 'f') {
        toggleFullscreen();
      }
    };

    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('fullscreenchange', handleFullscreenChange);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, isFullscreen]);

  const toggleFullscreen = () => {
    if (!modalRef.current) return;

    if (!document.fullscreenElement) {
      modalRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div 
        ref={modalRef}
        className={`relative bg-background rounded-lg shadow-xl 
          ${isFullscreen ? 'w-full h-full' : 'w-[700px] aspect-video'}`}
      >
        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-light/80 rounded-lg">
            <div className="w-12 h-12 border-4 border-orange-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Error Message */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-light/80 rounded-lg">
            <div className="text-slate-dark text-lg">
              Error loading video. Please try again.
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="absolute -top-10 right-0 flex items-center gap-4">
          <button
            onClick={toggleFullscreen}
            className="text-white hover:text-orange-primary transition-colors"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isFullscreen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20H5v-4M15 4h4v4M4 15V9m16 0v6" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-5V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
              )}
            </svg>
          </button>
          <button
            onClick={onClose}
            className="text-white hover:text-orange-primary transition-colors"
            aria-label="Close video"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
        </div>

        {/* Video Player */}
        <ReactPlayer
          ref={playerRef}
          url={videoUrl}
          width="100%"
          height="100%"
          playing={true}
          controls={true}
          volume={1}
          muted={false}
          onReady={() => setIsLoading(false)}
          onError={() => {
            setHasError(true);
            setIsLoading(false);
          }}
          style={{ borderRadius: '0.5rem', overflow: 'hidden' }}
        />
      </div>
    </div>
  );
};

export default VideoModal; 