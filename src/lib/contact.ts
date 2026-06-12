export const topics = ["Internship", "Freelance project", "Collaboration", "Just saying hi"] as const;

export type ContactValues = {
  name: string;
  email: string;
  topic: string;
  message: string;
};

export type ContactErrors = Partial<Record<keyof ContactValues, string>>;

export type ContactState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | { status: "error"; message: string; errors: ContactErrors; values: ContactValues };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Shared by the client (instant feedback) and the server action (source of truth).
export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  if (values.name.trim().length < 2) errors.name = "Tell me your name.";
  if (!EMAIL.test(values.email.trim())) errors.email = "That email doesn't look right.";
  if (!topics.includes(values.topic as (typeof topics)[number])) errors.topic = "Pick a topic.";
  if (values.message.trim().length < 20) errors.message = "A little more detail, please (20+ characters).";
  if (values.message.length > 2000) errors.message = "Keep it under 2000 characters.";
  return errors;
}
