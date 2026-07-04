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
        style={{
          position: "relative",
          height: "40vh",
          minHeight: "240px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/editorial/lifestyle-1.png"
          alt="CULT OPTIC Sunglasses Collection"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
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
            Sunglasses Collection
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
            Una colección diseñada para quienes encuentran identidad en cada detalle.
          </p>
        </div>
      </section>

      {/* ── PRODUCT GRID ──────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "clamp(24px, 3vw, 40px)",
          paddingBottom: "clamp(56px, 7vw, 96px)",
          paddingLeft: "clamp(24px, 5vw, 80px)",
          paddingRight: "clamp(24px, 5vw, 80px)",
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
              <div
                style={{
                  width: "100%",
                  height: "clamp(220px, 24vw, 320px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#F4F1EC",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cardImages[product.id]}
                  alt={product.name}
                  className="sunglasses-img"
                  style={{
                    maxWidth: "90%",
                    maxHeight: "90%",
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
                  marginTop: "-28px",
                  marginBottom: "5px",
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
