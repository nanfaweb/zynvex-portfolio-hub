import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { LocalTime } from "@/components/local-time";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch about internships, projects or collaborations.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Contact</p>
          <h1 className="mt-3 font-display text-5xl leading-[0.95] sm:text-7xl">
            Let&apos;s <em className="text-accent">talk</em>.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Internship, freelance work or a half-formed idea: send it over. I usually
            reply within two days.
          </p>
          <div className="mt-8 space-y-3 border-t border-line pt-6 text-sm">
            <LocalTime timeZone={profile.timeZone} label="Lahore time" />
            {profile.socials.map((social) => (
              <p key={social.href}>
                <span className="text-muted">{social.label} · </span>
                <a href={social.href} className="underline decoration-line underline-offset-4 hover:decoration-accent">
                  {social.handle}
                </a>
              </p>
            ))}
          </div>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
