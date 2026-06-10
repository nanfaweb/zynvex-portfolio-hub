import { ProfileCard } from "@/components/profile-card";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-5 py-16 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
        Portfolio · work in progress
      </p>
      <h1 className="mt-4 font-display text-5xl leading-none sm:text-7xl">
        {profile.name}
      </h1>
      <div className="mt-10 max-w-xl">
        <ProfileCard profile={profile} />
      </div>
    </main>
  );
}
