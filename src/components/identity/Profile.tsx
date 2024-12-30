import { Profile as ProfileData } from "../../data/profile";

interface ProfileProps {
  profile: ProfileData;
}

const Profile = ({ profile }: ProfileProps) => {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="w-28 h-28 rounded-full overflow-hidden">
        <img
          src={profile.imagePath}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h1 className="text-slate-dark text-5xl font-bold mb-1">{profile.name}</h1>
        <h2 className="text-slate-medium text-2xl">{profile.title}</h2>
      </div>
    </div>
  );
};

export default Profile;