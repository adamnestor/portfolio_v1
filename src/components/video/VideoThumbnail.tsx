import { useState, useRef } from "react";
import ReactPlayer from "react-player";
import { PlayButton } from "./PlayButton";
import { MutedIndicator } from "./MutedIndicator";

interface VideoThumbnailProps {
  thumbnailImage: string;
  videoUrl: string;
  onPlayClick: () => void;
  title: string;
}

const VideoThumbnail = ({ thumbnailImage, videoUrl, onPlayClick, title }: VideoThumbnailProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const playerRef = useRef<ReactPlayer>(null);

  return (
    <div className="flex flex-col items-center">
      <div 
        className="relative w-28 h-20 rounded overflow-hidden bg-slate-light group/thumbnail"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onPlayClick}
      >
        {/* Loading Overlay */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-light/80">
            <div className="w-6 h-6 border-2 border-orange-primary border-t-transparent rounded-full animate-spin" />
          </div>
        )}

        {/* Thumbnail Image */}
        <img
          src={thumbnailImage}
          alt={`${title} preview`}
          className={`w-full h-full object-cover transition-opacity duration-300
            ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Video Player */}
        <div className={`absolute inset-0 transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <ReactPlayer
            ref={playerRef}
            url={videoUrl}
            width="100%"
            height="100%"
            playing={isHovered}
            loop={true}
            muted={true}
            onReady={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Play Button Overlay - only visible when card is hovered */}
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayButton className="absolute inset-0 flex items-center justify-center" />
        </div>

        {/* Muted Indicator */}
        {isHovered && (
          <MutedIndicator className="absolute bottom-1 right-1" />
        )}
      </div>
      
      {/* Demo Text - only visible when card is hovered */}
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-medium text-sm">
        Watch Demo
      </div>
    </div>
  );
};

export default VideoThumbnail; 