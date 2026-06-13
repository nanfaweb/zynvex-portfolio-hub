import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}: ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#0f0e0c",
          color: "#f2efe8",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 28, color: "#9a958a" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#ff6a3a" }} />
          {profile.location}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 128, lineHeight: 1, letterSpacing: -3 }}>{profile.name}</div>
          <div style={{ marginTop: 24, fontSize: 40, color: "#ff6a3a", fontStyle: "italic" }}>
            I build web things that ship.
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#cfcabf" }}>
          {profile.focus.join("  ·  ")}
        </div>
      </div>
    ),
    size,
  );
}
