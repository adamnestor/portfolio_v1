export interface SocialLink {
  platform: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com/adamnestor" },
  { platform: "LinkedIn", url: "https://www.linkedin.com/in/adamnestor/" },
];

export interface Profile {
  name: string;
  title: string;
  description: string;
  imagePath: string;
}

export const profileData: Profile = {
  name: "Hi! 👋 I'm Adam Nestor.",
  title: "Full Stack Developer | Java, SpringBoot, React",
  description:
    "I'm a Cleveland-based developer with a passion for creating software that's both powerful and easy to understand.",
  imagePath: "/tempPic.jpg",
};
