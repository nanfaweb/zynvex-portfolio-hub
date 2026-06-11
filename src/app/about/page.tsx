import type { Metadata } from "next";
import Image from "next/image";
import { ProfileCard } from "@/components/profile-card";
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
        </div>
      </div>
    </main>
  );
}
