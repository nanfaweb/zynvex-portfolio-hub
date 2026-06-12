import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
  priority?: boolean;
};

const statusStyles: Record<Project["status"], string> = {
  Shipped: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300",
  "In progress": "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  Archived: "bg-ink/10 text-muted",
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper-raised transition-shadow hover:shadow-[0_20px_50px_-30px_rgba(0,0,0,0.45)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-line">
        <Image
          src={`https://picsum.photos/seed/${project.slug}/800/600`}
          alt=""
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <span
          className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-medium backdrop-blur ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-2xl leading-tight">
            <Link href={`/projects/${project.slug}`} className="after:absolute after:inset-0">
              {project.title}
            </Link>
          </h3>
          <span className="font-mono text-xs text-muted">{project.year}</span>
        </div>
        <p className="mt-2 text-ink-soft">{project.tagline}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.stack.slice(0, 3).map((item) => (
            <li key={item} className="rounded-md px-2 py-0.5 font-mono text-[11px] text-muted ring-1 ring-line">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
