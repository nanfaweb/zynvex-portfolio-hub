"use server";

import { validateContact, type ContactState } from "@/lib/contact";

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Bots fill every field, including the hidden one people never see.
  if (formData.get("company")) {
    return { status: "success", message: "Thanks! Your message is on its way." };
  }

  const values = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    topic: String(formData.get("topic") ?? ""),
    message: String(formData.get("message") ?? ""),
  };

  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Please fix the highlighted fields.", errors, values };
  }

  // Delivery is a log line for now; swap in an email provider (Resend, etc.) when one is set up.
  console.info("[contact]", { ...values, receivedAt: new Date().toISOString() });

  return {
    status: "success",
    message: `Thanks, ${values.name.split(" ")[0]}! I'll get back to you within two days.`,
  };
}
