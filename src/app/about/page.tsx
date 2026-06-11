import type { Metadata } from "next";
import Image from "next/image";
import { ProfileCard } from "@/components/profile-card";
import { skills, timeline } from "@/data/about";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "About",
  description: "Who I am, what I work with, and what I've been building.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
      <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-12">
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <ProfileCard profile={profile} />
          </div>
        </aside>

        <div className="flex flex-col gap-12 lg:col-span-8">
          <figure className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line bg-paper-raised">
            <Image
              src="https://picsum.photos/seed/lahore-desk/1200/675"
              alt="A workspace photo"
              fill
              priority
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover"
            />
          </figure>

          <section aria-labelledby="about-heading">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              About
            </p>
            <h1
              id="about-heading"
              className="mt-3 font-display text-4xl leading-tight sm:text-5xl md:text-6xl"
            >
              I like turning rough ideas into things people can{" "}
              <em className="text-accent">actually use</em>.
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                I&apos;m a computer science student in Lahore. Most of my week goes to
                full-stack web work, and the rest goes to whatever problem has
                caught my attention lately, from decoding custom-font Quran PDFs
                to classifying DNA strands with NLP.
              </p>
              <p>
                Lately I&apos;ve been working on production habits: typed
                components, sensible folder structure, and deploying early so
                feedback comes from a real URL.
              </p>
            </div>
          </section>

          <section aria-labelledby="skills-heading">
            <h2 id="skills-heading" className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Toolbox
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {skills.map((group) => (
                <div key={group.title} className="rounded-2xl border border-line p-5">
                  <h3 className="font-display text-2xl">{group.title}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-md bg-paper-raised px-2.5 py-1 font-mono text-xs text-ink-soft ring-1 ring-line"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="timeline-heading">
            <h2 id="timeline-heading" className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Timeline
            </h2>
            <ol className="mt-5 border-l border-line">
              {timeline.map((entry) => (
                <li key={entry.title} className="relative pb-8 pl-6 last:pb-0">
                  <span className="absolute -left-[5px] top-2 size-2.5 rounded-full border-2 border-paper bg-accent" />
                  <p className="font-mono text-xs text-muted">{entry.date}</p>
                  <h3 className="mt-1 font-semibold">{entry.title}</h3>
                  <p className="mt-1 max-w-prose text-ink-soft">{entry.detail}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>
    </main>
  );
}
