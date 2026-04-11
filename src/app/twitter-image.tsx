import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Alexandria's Language Institute — Learn Spanish the Interactive Way";
export const size = { width: 1200, height: 600 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a5f 0%, #2d1b69 50%, #4c1d95 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-60px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "-80px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "180px",
            left: "600px",
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(168,85,247,0.2) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Wave accent at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "100px",
            background:
              "linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.04) 100%)",
            display: "flex",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "4px",
            background:
              "linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #d946ef 100%)",
            display: "flex",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 80px",
            zIndex: 1,
          }}
        >
          {/* Icon accent */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "28px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "4px",
                borderRadius: "2px",
                background: "rgba(139,92,246,0.8)",
                display: "flex",
              }}
            />
            <div
              style={{
                fontSize: "18px",
                color: "rgba(196,181,253,0.9)",
                fontWeight: 600,
                letterSpacing: "4px",
                textTransform: "uppercase" as const,
                display: "flex",
              }}
            >
              Online Courses
            </div>
            <div
              style={{
                width: "48px",
                height: "4px",
                borderRadius: "2px",
                background: "rgba(139,92,246,0.8)",
                display: "flex",
              }}
            />
          </div>

          {/* Main title */}
          <div
            style={{
              fontSize: "58px",
              fontWeight: 800,
              color: "#ffffff",
              textAlign: "center",
              lineHeight: 1.15,
              marginBottom: "20px",
              display: "flex",
            }}
          >
            Learn Spanish the Interactive Way
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: "26px",
              fontWeight: 400,
              color: "rgba(196,181,253,0.85)",
              textAlign: "center",
              marginBottom: "40px",
              display: "flex",
            }}
          >
            74 Lessons · 4,400+ Audio Clips · A1 to C2
          </div>

          {/* Brand name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "9px",
                background:
                  "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                fontWeight: 800,
                color: "#ffffff",
              }}
            >
              A
            </div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.9)",
                letterSpacing: "1px",
                display: "flex",
              }}
            >
              Alexandria&apos;s Language Institute
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
