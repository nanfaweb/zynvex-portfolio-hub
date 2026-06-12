"use client";

import { useActionState, useState } from "react";
import { sendMessage } from "@/app/contact/actions";
import { topics, validateContact, type ContactErrors, type ContactState, type ContactValues } from "@/lib/contact";

const initialState: ContactState = { status: "idle" };

const fieldClass =
  "mt-2 w-full rounded-xl border bg-paper-raised px-4 py-3 text-base outline-none transition-colors placeholder:text-muted/70 focus:border-ink focus-visible:ring-2 focus-visible:ring-accent/40";

export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendMessage, initialState);
  const [clientErrors, setClientErrors] = useState<ContactErrors>({});

  const serverErrors = state.status === "error" ? state.errors : {};
  const errors = { ...serverErrors, ...clientErrors };
  const defaults: Partial<ContactValues> = state.status === "error" ? state.values : {};

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-paper-raised p-8">
        <p className="font-display text-4xl">Message sent.</p>
        <p className="mt-3 text-lg text-ink-soft">{state.message}</p>
      </div>
    );
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const data = new FormData(event.currentTarget);
    const found = validateContact({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      topic: String(data.get("topic") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    setClientErrors(found);
    if (Object.keys(found).length > 0) event.preventDefault();
  }

  function clearError(field: keyof ContactValues) {
    if (!clientErrors[field]) return;
    setClientErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  const border = (field: keyof ContactValues) => (errors[field] ? "border-red-500" : "border-line");

  return (
    <form action={formAction} onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      <div className="hidden" aria-hidden>
        <label>
          Company
          <input name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label htmlFor="name" className="text-sm font-medium">Name</label>
        <input
          id="name"
          name="name"
          autoComplete="name"
          defaultValue={defaults.name}
          onChange={() => clearError("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${fieldClass} ${border("name")}`}
          placeholder="Ada Lovelace"
        />
        {errors.name && <p id="name-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          defaultValue={defaults.email}
          onChange={() => clearError("email")}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${fieldClass} ${border("email")}`}
          placeholder="you@example.com"
        />
        {errors.email && <p id="email-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
      </div>

      <fieldset className="sm:col-span-2">
        <legend className="text-sm font-medium">What&apos;s it about?</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <label key={topic} className="cursor-pointer">
              <input
                type="radio"
                name="topic"
                value={topic}
                defaultChecked={defaults.topic === topic}
                onChange={() => clearError("topic")}
                className="peer sr-only"
              />
              <span className="inline-block rounded-full border border-line px-4 py-2 text-sm transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-paper peer-focus-visible:ring-2 peer-focus-visible:ring-accent/50">
                {topic}
              </span>
            </label>
          ))}
        </div>
        {errors.topic && <p className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.topic}</p>}
      </fieldset>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          defaultValue={defaults.message}
          onChange={() => clearError("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass} ${border("message")} resize-y`}
          placeholder="A few lines about what you have in mind…"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400">{errors.message}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-accent-ink disabled:opacity-60"
        >
          {pending ? "Sending…" : "Send message"}
        </button>
        {state.status === "error" && (
          <p role="alert" className="text-sm text-red-600 dark:text-red-400">{state.message}</p>
        )}
      </div>
    </form>
  );
}
