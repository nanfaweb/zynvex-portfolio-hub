import Link from "next/link";
import { LocalTime } from "@/components/local-time";
import { profile } from "@/data/profile";

const headline = ["I", "build", "web", "things", "that", "ship."];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-line">
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute -right-32 -top-40 -z-10 size-[34rem] rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] bg-[size:56px_56px] opacity-40 [mask-image:radial-gradient(ellipse_at_top_left,black_30%,transparent_70%)]"
      />

      <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-24 sm:pt-24">
        <div className="animate-fade-up">
          <LocalTime timeZone={profile.timeZone} label="Available for internships · Lahore" />
        </div>

        <h1 className="mt-6 font-display text-[clamp(3.25rem,11vw,8.5rem)] leading-[0.92] tracking-tight">
          {headline.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
              <span
                className={`animate-rise inline-block ${word === "ship." ? "italic text-accent" : ""}`}
                style={{ animationDelay: `${120 + i * 90}ms` }}
              >
                {word}
              </span>
              {i < headline.length - 1 && " "}
            </span>
          ))}
        </h1>

        <p
          className="animate-fade-up mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          style={{ animationDelay: "700ms" }}
        >
          {profile.summary}
        </p>

        <div
          className="animate-fade-up mt-10 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "850ms" }}
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent hover:text-accent-ink"
          >
            See my work
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div className="overflow-hidden border-t border-line py-4" aria-hidden>
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap font-mono text-xs uppercase tracking-[0.2em] text-muted">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-10">
              {["Next.js", "TypeScript", "Supabase", "Tailwind", "Python", "FastAPI", "Gemini", "PostgreSQL", "Chrome Extensions", "Android"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-10">
                    {item}
                    <span className="text-accent">✦</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
