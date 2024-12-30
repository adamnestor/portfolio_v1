import { SocialLink } from "../../data/profile";

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks = ({ links }: SocialLinksProps) => {
  return (
    <div className="flex gap-6">
      {links.map(({ platform, url }) => (
        <a
          key={platform}
          href={url}
          className="text-slate-medium text-lg hover:text-orange-primary"
        >
          {platform}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
