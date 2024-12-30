export interface SocialLink {
  platform: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com" },
  { platform: "LinkedIn", url: "https://linkedin.com" },
];

export interface Profile {
  name: string;
  title: string;
  description: string;
  imagePath: string;
}

export const profileData: Profile = {
  name: "Adam Nestor",
  title: "Full Stack Developer",
  description:
    "Building scalable software in Java and React, focused on clean code and clear thinking.",
  imagePath: "/tempPic.jpg",
};
