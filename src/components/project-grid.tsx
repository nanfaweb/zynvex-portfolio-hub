"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/types";

type ProjectGridProps = {
  projects: Project[];
  tags: string[];
};

export function ProjectGrid({ projects, tags }: ProjectGridProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const visible = useMemo(
    () => (activeTag ? projects.filter((p) => p.tags.includes(activeTag)) : projects),
    [projects, activeTag],
  );

  const filters = [null, ...tags];

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by tag"
        className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0"
      >
        {filters.map((tag) => {
          const selected = tag === activeTag;
          const count = tag ? projects.filter((p) => p.tags.includes(tag)).length : projects.length;
          return (
            <button
              key={tag ?? "all"}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveTag(tag)}
              className={`shrink-0 rounded-full border px-4 py-1.5 text-sm transition-colors ${
                selected ? "border-ink bg-ink text-paper" : "border-line text-ink-soft hover:border-ink"
              }`}
            >
              {tag ?? "All"}
              <span className="ml-1.5 font-mono text-xs opacity-60">{count}</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project, i) => (
          <li key={project.slug}>
            <ProjectCard project={project} priority={i < 3} />
          </li>
        ))}
      </ul>
    </div>
  );
}
