import type { Metadata } from "next";
import { ProjectGrid } from "@/components/project-grid";
import { allTags, projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Web apps, extensions, mobile apps and ML experiments I've built.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-12 sm:px-8 sm:py-16">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        Selected work · {projects.length} projects
      </p>
      <h1 className="mt-3 max-w-3xl font-display text-5xl leading-[0.95] sm:text-7xl">
        Things I&apos;ve <em className="text-accent">built</em>.
      </h1>
      <div className="mt-10">
        <ProjectGrid projects={projects} tags={allTags} />
      </div>
    </main>
  );
}
