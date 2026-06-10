"use client";

import { useSyncExternalStore } from "react";

function subscribe(onTick: () => void) {
  const id = window.setInterval(onTick, 1000 * 15);
  return () => window.clearInterval(id);
}

type LocalTimeProps = {
  timeZone: string;
  label?: string;
};

export function LocalTime({ timeZone, label = "Local time" }: LocalTimeProps) {
  const time = useSyncExternalStore(
    subscribe,
    () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
      }).format(new Date()),
    () => null,
  );

  return (
    <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
      <span className="relative flex size-2">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60 motion-reduce:animate-none" />
        <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
      </span>
      {label} <time suppressHydrationWarning>{time ?? "--:--"}</time>
    </span>
  );
}
