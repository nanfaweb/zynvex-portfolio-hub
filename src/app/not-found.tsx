import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-start justify-center px-5 py-24 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Error 404</p>
      <h1 className="mt-3 font-display text-6xl leading-none sm:text-8xl">
        Nothing <em className="text-accent">here</em>.
      </h1>
      <p className="mt-6 max-w-md text-lg text-ink-soft">
        This page moved, never existed, or is still on my to-do list.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-accent hover:text-accent-ink"
      >
        Back home
      </Link>
    </main>
  );
}
