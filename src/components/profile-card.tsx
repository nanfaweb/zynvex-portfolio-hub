import { LocalTime } from "@/components/local-time";
import type { Profile } from "@/lib/types";

type ProfileCardProps = {
  profile: Profile;
  variant?: "compact" | "full";
};

export function ProfileCard({ profile, variant = "full" }: ProfileCardProps) {
  const isFull = variant === "full";

  return (
    <article className="rounded-2xl border border-line bg-paper-raised p-6">
      <div className="flex items-center gap-4">
        <div
          aria-hidden
          className="grid size-14 shrink-0 place-items-center rounded-full bg-ink font-display text-2xl text-paper"
        >
          {profile.initials}
        </div>
        <div className="min-w-0">
          <h2 className="truncate text-lg font-semibold tracking-tight">
            {profile.name}
          </h2>
          <p className="truncate text-sm text-muted">{profile.role}</p>
          <div className="mt-1">
            <LocalTime timeZone={profile.timeZone} label="Lahore" />
          </div>
        </div>
      </div>

      {isFull && (
        <>
          <p className="mt-5 leading-relaxed text-ink-soft">{profile.summary}</p>
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Focus areas">
            {profile.focus.map((item) => (
              <li
                key={item}
                className="rounded-full border border-line px-3 py-1 font-mono text-xs text-ink-soft"
              >
                {item}
              </li>
            ))}
          </ul>
        </>
      )}

      <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-4 text-sm">
        <div className="flex gap-2">
          <dt className="text-muted">Based in</dt>
          <dd>{profile.location}</dd>
        </div>
        {profile.socials.map((social) => (
          <div key={social.href} className="flex gap-2">
            <dt className="text-muted">{social.label}</dt>
            <dd>
              <a
                href={social.href}
                className="underline decoration-line underline-offset-4 hover:decoration-accent"
              >
                {social.handle}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}
