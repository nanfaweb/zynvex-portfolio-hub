import { Hero } from "@/components/hero";
import { ProfileCard } from "@/components/profile-card";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <section className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <ProfileCard profile={profile} />
        </div>
      </section>
    </main>
  );
}
