import Link from "next/link";
import { Hero } from "@/components/hero";
import { ProfileCard } from "@/components/profile-card";
import { ProjectCard } from "@/components/project-card";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <main className="flex-1">
      <Hero />

      <section
        aria-labelledby="featured-heading"
        className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24"
      >
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="featured-heading" className="font-display text-4xl sm:text-5xl">
            Featured work
          </h2>
          <Link
            href="/projects"
            className="text-sm text-ink-soft underline decoration-line underline-offset-4 hover:decoration-accent"
          >
            All projects →
          </Link>
        </div>
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <li key={project.slug}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <ProfileCard profile={profile} />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-display text-4xl leading-tight sm:text-5xl">
              Have a project, role or idea worth building?
            </h2>
            <p className="mt-4 text-lg text-ink-soft">
              I&apos;m open to internships and collaborations, especially full-stack and
              applied-AI work.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-opacity hover:opacity-90"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
