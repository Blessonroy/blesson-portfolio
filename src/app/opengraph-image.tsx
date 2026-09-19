import { ImageResponse } from "next/og"

import { siteConfig } from "@/data/site"

export const alt = `${siteConfig.name} | ${siteConfig.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 30, color: "#a1a1aa", marginBottom: 24 }}>
          {siteConfig.role}
        </div>
        <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1.1 }}>
          {siteConfig.name}
        </div>
        <div
          style={{
            fontSize: 32,
            color: "#a1a1aa",
            marginTop: 32,
            maxWidth: 900,
          }}
        >
          {siteConfig.intro}
        </div>
      </div>
    ),
    { ...size }
  )
}