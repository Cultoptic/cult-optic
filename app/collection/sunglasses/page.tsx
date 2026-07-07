import Image from "next/image";
import Link from "next/link";
import { products, categoryLabels } from "@/lib/products";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sunglasses Collection — CULT OPTIC",
  description: "Una colección diseñada para quienes encuentran identidad en cada detalle.",
};

const cardImages: Record<string, string> = {
  brat:      "/collection/brat/card-brat.png",
  ventis:    "/collection/ventis/card-ventis.png",
  core:      "/collection/core/card-core.png",
  boogie:    "/collection/boogie/card.boogie.png",
  classy:    "/collection/classy/card-classy.png",
  solace:    "/collection/solace/card-solace.png",
  vector:    "/collection/vector/card-vector.png",
  breakline: "/collection/breakline/card-breakline.png",
};

// Per-product scale correction so every silhouette reads as the same visual
// weight inside the shared image container (contain-fit leaves each PNG at a
// different apparent size depending on frame bulk).
const cardScale: Record<string, number> = {
  brat: 1,
  ventis: 1,
  core: 1,
  boogie: 1,
  classy: 1,
  solace: 1.18,
  vector: 0.85,
  breakline: 0.92,
};

export default function SunglassesPage() {
  const visibleProducts = products.filter((p) => cardImages[p.id]);

  return (
    <div style={{ background: "#F4F1EC", minHeight: "100vh" }}>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        className="collection-hero-banner"
        style={{ background: "#F4F1EC" }}
      >
        <Image
          src="/editorial/MODEL - CLASSY - 3.png"
          alt="CULT OPTIC Sunglasses Collection"
          fill
          priority
          quality={100}
          sizes="(max-width: 767px) 250vw, 100vw"
          style={{ objectFit: "cover", objectPosition: "center center" }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(20,16,12,0.18)",
            pointerEvents: "none",
          }}
        />
      </section>

      {/* ── PRODUCT GRID ──────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "clamp(24px, 3vw, 40px)",
          paddingBottom: "clamp(56px, 7vw, 96px)",
          paddingLeft: "var(--section-px, clamp(24px, 5vw, 80px))",
          paddingRight: "var(--section-px, clamp(24px, 5vw, 80px))",
        }}
      >
        <div className="sunglasses-grid">
          {visibleProducts.map((product) => (
            <Link
              key={product.id}
              href={`/catalog/${product.id}`}
              className="sunglasses-card"
              style={{ textDecoration: "none", display: "block" }}
            >
              <div className="sunglasses-card-image-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cardImages[product.id]}
                  alt={product.name}
                  className="sunglasses-img"
                  style={{
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                    transform: `scale(${cardScale[product.id] ?? 1})`,
                    transition: "transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  }}
                />
              </div>

              <p
                className="sunglasses-name"
                style={{
                  fontFamily: '"TT Norms Pro", sans-serif',
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: "#211B16",
                  lineHeight: 1.2,
                }}
              >
                {product.name}
              </p>

              <p
                style={{
                  fontFamily: '"TT Norms Pro", sans-serif',
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.06em",
                  color: "rgba(33,27,22,0.42)",
                  lineHeight: 1,
                }}
              >
                {categoryLabels[product.category]}
              </p>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
