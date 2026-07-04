import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snow Collection — CULT OPTIC",
  description: "Creadas para quienes encuentran su mejor versión en la montaña.",
};

export default function SnowPage() {
  return (
    <div style={{ background: "#F4F1EC", minHeight: "100vh" }}>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          height: "45vh",
          minHeight: "300px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/editorial/model-7.png"
          alt="CULT OPTIC Snow Collection"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(33,27,22,0.52) 0%, transparent 55%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: "clamp(24px, 4vw, 48px)",
            left: "clamp(24px, 5vw, 80px)",
          }}
        >
          <p
            style={{
              fontFamily: '"TT Norms Pro", sans-serif',
              fontSize: "18px",
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              lineHeight: 1,
              color: "rgba(245,245,240,0.95)",
              marginBottom: "10px",
            }}
          >
            Snow Collection
          </p>
          <p
            style={{
              fontFamily: '"TT Norms Pro", sans-serif',
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.03em",
              color: "rgba(245,245,240,0.60)",
              lineHeight: 1.65,
              maxWidth: "340px",
            }}
          >
            Creadas para quienes encuentran su mejor versión en la montaña.
          </p>
        </div>
      </section>

      {/* ── EDITORIAL SECTION ─────────────────────────────────────── */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "clamp(72px, 9vw, 120px)",
          paddingBottom: "clamp(80px, 10vw, 140px)",
          paddingLeft: "clamp(24px, 8vw, 120px)",
          paddingRight: "clamp(24px, 8vw, 120px)",
        }}
      >
        <p
          style={{
            fontFamily: '"TT Norms Pro", sans-serif',
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            lineHeight: 1,
            color: "rgba(33,27,22,0.75)",
            marginBottom: "clamp(24px, 3vw, 36px)",
          }}
        >
          Snow Collection
        </p>

        <p
          style={{
            fontFamily: '"TT Norms Pro", sans-serif',
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: 1.9,
            letterSpacing: "0.01em",
            color: "rgba(33,27,22,0.50)",
            maxWidth: "480px",
            marginBottom: "clamp(36px, 4vw, 52px)",
          }}
        >
          Creadas para quienes encuentran su mejor versión en la montaña. Protección,
          claridad y comodidad se unen en una colección diseñada para enfrentar la nieve
          con confianza. Porque cuando las condiciones cambian, lo único que debería
          importar es disfrutar cada descenso.
        </p>

        <Link
          href="/catalog"
          className="snow-explore-btn"
          style={{
            fontFamily: '"TT Norms Pro", sans-serif',
            fontSize: "11px",
            fontWeight: 400,
            letterSpacing: "0.25em",
            color: "#211B16",
            border: "1px solid rgba(33,27,22,0.35)",
            borderRadius: "100px",
            padding: "0 48px",
            minHeight: "48px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "border-color 0.3s ease",
          }}
        >
          EXPLORAR COLECCIÓN
        </Link>
      </section>

      {/* ── FULL-WIDTH IMAGE ──────────────────────────────────────── */}
      <div style={{ lineHeight: 0 }}>
        <Image
          src="/editorial/model-7.png"
          alt="CULT OPTIC Snow Collection — rider"
          width={5760}
          height={2700}
          sizes="100vw"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

    </div>
  );
}
