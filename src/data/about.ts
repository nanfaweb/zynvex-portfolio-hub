import type { SkillGroup, TimelineEntry } from "@/lib/types";

export const skills: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Browser extensions"],
  },
  {
    title: "Backend & data",
    items: ["Supabase", "PostgreSQL", "FastAPI", "Node.js", "REST APIs"],
  },
  {
    title: "ML & research",
    items: ["Python", "scikit-learn", "RAG pipelines", "NLP", "Jupyter"],
  },
  {
    title: "Mobile & systems",
    items: ["Android (Java/Kotlin)", "C++", "OpenMP / SIMD", "Git"],
  },
];

export const timeline: TimelineEntry[] = [
  {
    date: "Jun 2026",
    title: "Zynvex Full Stack Internship",
    detail: "Six weeks of production-grade Next.js, Supabase and AI work, one shipped app per week.",
  },
  {
    date: "Jun 2026",
    title: "Shipped QuranLens",
    detail: "A Chrome extension that identifies the Surah and Ayah being recited in a YouTube video, entirely on-device.",
  },
  {
    date: "Apr 2026",
    title: "Carobar & Campfire",
    detail: "A RAG-powered used-car search for Pakistan, and a social app with an AI companion.",
  },
  {
    date: "Feb 2026",
    title: "CineFAST",
    detail: "An Android movie booking app with secure auth, cloud sync and local persistence.",
  },
  {
    date: "Nov 2025",
    title: "ReDNA",
    detail: "Applied NLP techniques to classify DNA strands.",
  },
  {
    date: "Jun 2025",
    title: "Back-end certification projects",
    detail: "Timestamp, header parser, URL shortener, exercise tracker and file metadata microservices.",
  },
];
