"use client";

import Link from "next/link";
import Image from "next/image";

export default function SnowCollection() {
  return (
    <section style={{ background: "#F4F1EC" }}>

      {/* Breathing room above — mirrors FeaturedCollection top padding */}
      <div style={{ paddingTop: "clamp(48px, 6vw, 84px)" }} />

      {/* Photograph — protagonist, occupies full available width */}
      <Image
        src="/editorial/model-7.png"
        alt="CULT OPTIC Snow Collection"
        width={5760}
        height={2700}
        sizes="100vw"
        style={{ width: "100%", height: "auto", display: "block" }}
      />

      {/* Editorial block — centered, generous negative space */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "clamp(56px, 7vw, 96px)",
          paddingBottom: "clamp(80px, 10vw, 140px)",
          paddingLeft: "clamp(24px, 8vw, 120px)",
          paddingRight: "clamp(24px, 8vw, 120px)",
        }}
      >
        {/* Title — same hierarchy as "Sunglasses Collection" */}
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

        {/* Body */}
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
          Creadas para quienes encuentran su mejor versión en la montaña. Protección, claridad y comodidad se unen en una colección diseñada para enfrentar la nieve con confianza. Porque cuando las condiciones cambian, lo único que debería importar es disfrutar cada descenso.
        </p>

        {/* Button — identical style to the rest of the site */}
        <Link
          href="/catalog?category=snow"
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
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(33,27,22,0.75)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(33,27,22,0.35)";
          }}
        >
          EXPLORAR COLECCIÓN
        </Link>
      </div>

    </section>
  );
}
