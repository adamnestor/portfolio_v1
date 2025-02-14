import Profile from "./Profile";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
import ExternalLink from "../shared/ExternalLink";
import { profileData, socialLinks } from "../../data/profile";

const LeftPanel = () => {
  return (
    <div className="flex flex-col h-full pt-8">
      <Profile profile={profileData} />

      <p className="text-slate-dark text-base mb-8">
        {profileData.description}
      </p>

      <Navigation />

      <div className="mt-auto pb-8 flex items-center gap-8">
        <SocialLinks links={socialLinks} />
        <ExternalLink
          href="/path-to-your-resume.pdf"
          className="text-slate-dark text-base font-medium hover:text-orange-primary transition-colors duration-300"
        >
          View Full Résumé
        </ExternalLink>
      </div>
    </div>
  );
};

export default LeftPanel;
