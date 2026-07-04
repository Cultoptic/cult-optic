"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";

const BASE_IDS = ["brat", "ventis", "core", "boogie", "classy", "solace", "vector"];

const ordered = BASE_IDS
  .map((id) => products.find((p) => p.id === id))
  .filter(Boolean) as (typeof products)[number][];

const cardImages: Record<string, string> = {
  brat:      "/collection/brat/card-brat.png",
  ventis:    "/collection/ventis/card-ventis.png",
  core:      "/collection/core/card-core.png",
  boogie:    "/collection/boogie/card.boogie.png",
  classy:    "/collection/classy/card-classy.png",
  solace:    "/collection/solace/card-solace.png",
  vector:    "/collection/vector/card-vector.png",
};

// Triple duplication — centre copy is the "live" region
const loopItems = [...ordered, ...ordered, ...ordered];

export default function FeaturedCollection() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.scrollLeft = track.scrollWidth / 3;

    let paused = false;
    let animId: number;

    const tick = () => {
      if (!paused) track.scrollLeft += 0.8;

      // Infinite loop — applies to both auto and manual scroll
      const seg = track.scrollWidth / 3;
      if (track.scrollLeft >= seg * 2) track.scrollLeft -= seg;
      else if (track.scrollLeft < seg) track.scrollLeft += seg;

      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    const pause  = () => { paused = true; };
    const resume = () => { paused = false; };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    track.addEventListener("touchstart",  pause,  { passive: true });
    track.addEventListener("touchend",    resume, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      track.removeEventListener("touchstart",  pause);
      track.removeEventListener("touchend",    resume);
    };
  }, []);

  return (
    <section style={{ background: "#F4F1EC" }}>
      <div
        style={{
          paddingTop: "clamp(48px, 6vw, 84px)",
          paddingBottom: "clamp(80px, 10vw, 140px)",
        }}
      >
        {/* Title */}
        <p
          style={{
            fontFamily: '"TT Norms Pro", sans-serif',
            fontSize: "18px",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            lineHeight: 1,
            color: "rgba(33,27,22,0.75)",
            marginBottom: "96px",
            paddingLeft: "clamp(24px, 5vw, 80px)",
          }}
        >
          Sunglasses Collection
        </p>

        {/* Carousel track */}
        <div
          ref={trackRef}
          className="collection-track"
          style={{
            display: "flex",
            gap: "clamp(8px, 1vw, 16px)",
            overflowX: "auto",
            paddingLeft: "clamp(24px, 5vw, 80px)",
            paddingRight: "clamp(24px, 5vw, 80px)",
          }}
        >
          {loopItems.map((product, i) => (
            <Link
              key={`${product.id}-${i}`}
              href={`/catalog/${product.id}`}
              className="collection-card"
              style={{
                flexShrink: 0,
                textDecoration: "none",
              }}
            >
              {/* Image */}
              {cardImages[product.id] && (
                <Image
                  src={cardImages[product.id]}
                  alt={product.name}
                  width={0}
                  height={0}
                  placeholder="empty"
                  unoptimized
                  sizes="(max-width: 767px) 88vw, (max-width: 1023px) 50vw, 25vw"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    marginBottom: "6px",
                  }}
                />
              )}

              {/* Name only */}
              <p
                style={{
                  fontFamily: '"TT Norms Pro", sans-serif',
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "rgba(20,20,18,0.45)",
                }}
              >
                Cult | {product.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
