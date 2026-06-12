import Link from "next/link";
import { profile } from "@/data/profile";
import { navLinks } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-3 md:items-end">
        <div>
          <p className="font-display text-3xl">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.role}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-ink-soft hover:text-ink">
                  {link.label}
                </Link>
              </li>
            ))}
            {profile.socials.map((social) => (
              <li key={social.href}>
                <a href={social.href} className="text-ink-soft hover:text-ink">
                  {social.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="font-mono text-xs text-muted md:text-right">
          © {new Date().getFullYear()} · Built with Next.js & Tailwind
        </p>
      </div>
    </footer>
  );
}
