import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.tagline };
}

export default async function ProjectPage(props: PageProps<"/projects/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="flex-1">
      <article className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <Link
          href="/projects"
          className="font-mono text-xs uppercase tracking-[0.2em] text-muted hover:text-ink"
        >
          ← All projects
        </Link>

        <header className="mt-6 grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h1 className="font-display text-5xl leading-[0.95] sm:text-7xl">{project.title}</h1>
            <p className="mt-4 text-xl text-ink-soft sm:text-2xl">{project.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-sm font-medium hover:border-ink"
            >
              Source code ↗
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-accent hover:text-accent-ink"
              >
                Visit live ↗
              </a>
            )}
          </div>
        </header>

        <figure className="relative mt-10 aspect-[16/8] overflow-hidden rounded-2xl border border-line bg-line">
          <Image
            src={`https://picsum.photos/seed/${project.slug}/1600/800`}
            alt=""
            fill
            priority
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover"
          />
        </figure>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <dl className="grid grid-cols-2 gap-6 self-start rounded-2xl border border-line p-6 lg:col-span-4 lg:grid-cols-1">
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-muted">Year</dt>
              <dd className="mt-1 font-display text-2xl">{project.year}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.18em] text-muted">Status</dt>
              <dd className="mt-1 font-display text-2xl">{project.status}</dd>
            </div>
            <div className="col-span-2 lg:col-span-1">
              <dt className="text-xs uppercase tracking-[0.18em] text-muted">Stack</dt>
              <dd className="mt-2 flex flex-wrap gap-1.5">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-md px-2 py-0.5 font-mono text-xs ring-1 ring-line">
                    {item}
                  </span>
                ))}
              </dd>
            </div>
          </dl>

          <div className="lg:col-span-8">
            <p className="text-lg leading-relaxed text-ink-soft sm:text-xl">{project.description}</p>
            <h2 className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-muted">
              Highlights
            </h2>
            <ul className="mt-4 divide-y divide-line border-y border-line">
              {project.highlights.map((item, i) => (
                <li key={item} className="flex gap-4 py-4">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>

      <Link
        href={`/projects/${next.slug}`}
        className="group block border-t border-line transition-colors hover:bg-paper-raised"
      >
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-5 py-10 sm:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Next project</p>
            <p className="mt-2 font-display text-4xl sm:text-5xl">{next.title}</p>
          </div>
          <span aria-hidden className="text-3xl transition-transform group-hover:translate-x-2">
            →
          </span>
        </div>
      </Link>
    </main>
  );
}
