import Profile from "./Profile";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";
import { profileData, socialLinks } from "../../data/profile";

const LeftPanel = () => {
  return (
    <div className="flex flex-col h-full pt-16">
      <Profile profile={profileData} />

      <p className="text-slate-medium text-xl mb-16">
        {profileData.description}
      </p>

      <Navigation />

      <div className="mt-20">
        <SocialLinks links={socialLinks} />
      </div>
    </div>
  );
};

export default LeftPanel;
