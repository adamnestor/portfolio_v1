import { SocialLink } from "../../data/profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks = ({ links }: SocialLinksProps) => {
  const getIcon = (platform: string) => {
    switch (platform) {
      case "GitHub":
        return <FontAwesomeIcon icon={faGithub} size="3x" />;
      case "LinkedIn":
        return <FontAwesomeIcon icon={faLinkedin} size="3x" />;
      default:
        return platform;
    }
  };

  return (
    <div className="flex gap-6">
      {links.map(({ platform, url }) => (
        <a
          key={platform}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-medium hover:text-orange-primary"
          aria-label={platform}
        >
          {getIcon(platform)}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
