import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "quranlens",
    title: "QuranLens",
    tagline: "Know which ayah is being recited, without leaving YouTube.",
    description:
      "A browser extension that identifies the Surah and Ayah being recited in a YouTube video. It matches the video's Arabic captions against the full Quran text, all on-device, so nothing leaves the browser.",
    year: 2026,
    status: "Shipped",
    tags: ["Extension", "Search"],
    stack: ["JavaScript", "Chrome Extensions", "Fuzzy matching"],
    highlights: [
      "Published on the Chrome Web Store",
      "Caption normalisation for Arabic diacritics and spelling variants",
      "Runs fully offline, with no analytics or network calls",
    ],
    repo: "https://github.com/nanfaweb/QuranLens",
    live: "https://chromewebstore.google.com/detail/jigacmpijeacfjocnodgjliikbldgdem",
    featured: true,
  },
  {
    slug: "carobar",
    title: "Carobar",
    tagline: "Used-car search for Pakistan that talks back.",
    description:
      "Chat in plain language, get matching listings with photos, a fair-price verdict and a negotiation draft. Behind it, a scrape → clean → store → embed pipeline over PakWheels listings feeds a RAG backend.",
    year: 2026,
    status: "In progress",
    tags: ["Full stack", "AI"],
    stack: ["Next.js", "FastAPI", "Supabase", "Groq · Llama 3.3", "Sentence transformers"],
    highlights: [
      "RAG chat grounded in stored listings, with streamed status",
      "On-demand scraping when the database is thin for a make",
      "Profile-based recommendations from budget, commute and family size",
    ],
    repo: "https://github.com/nanfaweb/Carobar",
    featured: true,
  },
  {
    slug: "campfire",
    title: "Campfire",
    tagline: "A cozy social feed with an AI companion.",
    description:
      "A social app with a feed, messaging, saved posts and notifications, plus Marshmallow, a Gemini-powered companion that pulls in personal context through a local RAG ingestion service.",
    year: 2026,
    status: "In progress",
    tags: ["Full stack", "AI"],
    stack: ["Next.js", "Supabase", "Gemini", "FastAPI", "Chroma"],
    highlights: [
      "Supabase auth with protected routes",
      "Vector search for personalised AI replies",
      "Local ingestion service built with FastAPI and LangChain",
    ],
    repo: "https://github.com/nanfaweb/Campfire",
    featured: true,
  },
  {
    slug: "cinefast",
    title: "CineFAST",
    tagline: "Movie booking on Android, built to feel premium.",
    description:
      "An Android app for booking movie tickets, with secure authentication, real-time cloud sync and local persistence for offline use.",
    year: 2026,
    status: "Shipped",
    tags: ["Mobile"],
    stack: ["Java", "Android", "Firebase", "Room"],
    highlights: [
      "Seat selection with live availability",
      "Offline-first booking history",
      "Material motion throughout",
    ],
    repo: "https://github.com/nanfaweb/CineFAST",
  },
  {
    slug: "redna",
    title: "ReDNA",
    tagline: "Reading DNA like language.",
    description:
      "Applies NLP techniques (k-mer tokenisation, vectorisers and classic classifiers) to sets of DNA strands and trains models to classify them.",
    year: 2025,
    status: "Archived",
    tags: ["ML", "Research"],
    stack: ["Python", "scikit-learn", "Jupyter"],
    highlights: [
      "K-mer tokenisation pipeline",
      "Classifier comparison with cross-validation",
      "Reproducible notebooks",
    ],
    repo: "https://github.com/nanfaweb/ReDNA",
  },
  {
    slug: "celestia",
    title: "CELESTIA",
    tagline: "An interactive, database-driven universe.",
    description:
      "A website for exploring stars, planets and galaxies, where every registered user becomes a star in a shared constellation and can build their own virtual solar system.",
    year: 2025,
    status: "Archived",
    tags: ["Full stack", "Database"],
    stack: ["HTML", "CSS", "JavaScript", "SQL"],
    highlights: [
      "User constellation built from sign-ups",
      "Relational celestial-body catalogue",
      "Custom solar system builder",
    ],
    repo: "https://github.com/nanfaweb/CELESTIA",
  },
  {
    slug: "backend-microservices",
    title: "Back-end microservices",
    tagline: "Five small APIs, done properly.",
    description:
      "A set of certification microservices: timestamp conversion, request header parsing, URL shortening, exercise tracking and file metadata.",
    year: 2025,
    status: "Archived",
    tags: ["Backend", "API"],
    stack: ["Node.js", "Express", "MongoDB"],
    highlights: [
      "REST endpoints with validation",
      "Persistent URL shortener with redirects",
      "Multipart upload parsing",
    ],
    repo: "https://github.com/nanfaweb/URL-Shortener",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
