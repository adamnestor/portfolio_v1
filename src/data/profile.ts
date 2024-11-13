export interface SocialLink {
  platform: string;
  url: string;
}

export const socialLinks: SocialLink[] = [
  { platform: "GitHub", url: "https://github.com" },
  { platform: "LinkedIn", url: "https://linkedin.com" },
  { platform: "CodeSandbox", url: "https://codesandbox.io" },
  { platform: "Instagram", url: "https://instagram.com" },
];

export interface Profile {
  name: string;
  title: string;
  description: string;
  imagePath: string;
}

export const profileData: Profile = {
  name: "Brittany Chiang",
  title: "Front End Engineer",
  description:
    "I build accessible, pixel-perfect digital experiences for the web.",
  imagePath: "/40.jpg",
};
