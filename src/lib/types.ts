export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export type Profile = {
  name: string;
  initials: string;
  avatar: string;
  role: string;
  location: string;
  timeZone: string;
  summary: string;
  focus: string[];
  socials: SocialLink[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type TimelineEntry = {
  date: string;
  title: string;
  detail: string;
};

export type ProjectStatus = "Shipped" | "In progress" | "Archived";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  year: number;
  status: ProjectStatus;
  tags: string[];
  stack: string[];
  highlights: string[];
  repo: string;
  live?: string;
  featured?: boolean;
};
