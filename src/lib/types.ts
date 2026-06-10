export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Profile = {
  name: string;
  initials: string;
  role: string;
  location: string;
  timeZone: string;
  summary: string;
  focus: string[];
  socials: SocialLink[];
};
