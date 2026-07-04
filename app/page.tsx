import Link from "next/link";
import Image from "next/image";
import HeroSlider from "@/components/HeroSlider";
import FeaturedCollection from "@/components/FeaturedCollection";
import SnowCollection from "@/components/SnowCollection";

export default function Home() {

  return (
    <div style={{ background: "var(--void)" }}>

      {/* ── HERO — slider 2 slides ──────────────────────────────── */}
      <HeroSlider />

      {/* ── EDITORIAL SPREAD ────────────────────────────────────── */}
      <section style={{ background: "#F4F1EC" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "44% 56%",
          padding: "clamp(80px, 9vw, 130px) clamp(80px, 8vw, 200px)",
          gap: "clamp(24px, 3vw, 48px)",
          minHeight: "clamp(500px, 55vw, 680px)",
        }}>
          {/* Columna izquierda — fotografía como objeto independiente */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <div style={{ position: "relative", width: "clamp(224px, 20vw, 336px)", aspectRatio: "4/5" }}>
              <Image
                src="/editorial/2.png"
                alt="Editorial CULT OPTIC"
                fill
                sizes="(max-width: 768px) 80vw, 20vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
          </div>

          {/* Columna derecha — bloque editorial independiente */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            gap: "24px",
          }}>
            {/* Logo */}
            <Image
              src="/brand/logosinfondo.png"
              alt="CULT OPTIC"
              width={3608}
              height={902}
              style={{ height: "44px", width: "auto" }}
            />

            {/* Slogan (nowrap) define el ancho — párrafos se estiran para igualarlo */}
            <div style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "stretch",
              gap: "16px",
              maxWidth: "100%",
            }}>
              <p style={{
                fontFamily: "var(--font-primary)",
                fontWeight: 700,
                fontSize: "25px",
                letterSpacing: "0.18em",
                color: "#1C1814",
                lineHeight: 1.5,
                textAlign: "center",
                whiteSpace: "nowrap",
              }}>
                COOL IS COMMON · CULT IS ICONIC
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "CULT nace del pulso del viento, el mar y la montaña, transformando esa energía en una selección de anteojos elegida con el alma de quien busca una pieza única. No nos conformamos con lo convencional; presentamos productos con carácter propio que resuenan con la identidad de cada persona, elevando lo común hacia lo icónico.",
                  "Nuestros anteojos son el filtro a través del cual habitas el mundo; una visión con corazón para quienes valoran la autenticidad y buscan recorrer el camino con la profundidad que merece.",
                ].map((text, i) => (
                  <p key={i} style={{
                    fontFamily: "var(--font-primary)",
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "#3D3730",
                    lineHeight: 1.95,
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    textAlign: "center",
                  }}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED COLLECTION ─────────────────────────────────── */}
      <FeaturedCollection />

      {/* ── SNOW COLLECTION ─────────────────────────────────────── */}
      <SnowCollection />

      {/* ── SECONDARY EDITORIAL GRID ────────────────────────────── */}
      <div className="grid grid-cols-2 md:grid-cols-4" style={{ gap: 0 }}>
        {[
          {
            src: "/editorial/performance-1.png",
            label: "ON THE ROAD",
            href: "/catalog",
          },
          {
            src: "/editorial/lifestyle-2.png",
            label: "IN THE FIELD",
            href: "/catalog?category=lifestyle-sport",
          },
          {
            src: "/editorial/model-1.png",
            label: "ON THE MOUNTAIN",
            href: "/catalog?category=sport-tech",
          },
          {
            src: "/editorial/performance-3.png",
            label: "INTO THE LIGHT",
            href: "/catalog?category=lifestyle",
          },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group relative block overflow-hidden"
            style={{ aspectRatio: "3/4" }}
          >
            <Image
              src={item.src}
              alt={item.label}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                transition: "transform 0.85s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
              className="group-hover:scale-[1.05]"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 50%)",
              }}
            />
            <div className="absolute bottom-0 left-0 p-5 md:p-6">
              <p
                style={{
                  color: "var(--snow)",
                  fontFamily: "var(--font-space), sans-serif",
                  fontSize: "8px",
                  letterSpacing: "0.3em",
                }}
              >
                {item.label}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* ── MARCA GIGANTE — estilo OMR ──────────────────────────── */}
      <section
        className="overflow-hidden"
        style={{
          background: "var(--void)",
          borderTop: "1px solid rgba(138,138,138,0.08)",
          paddingTop: "clamp(48px, 6vw, 96px)",
          paddingBottom: "clamp(48px, 6vw, 96px)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-space), sans-serif",
            fontWeight: 700,
            color: "var(--snow)",
            fontSize: "clamp(80px, 17vw, 260px)",
            letterSpacing: "-0.04em",
            lineHeight: 0.85,
            paddingLeft: "clamp(24px, 4vw, 48px)",
            whiteSpace: "nowrap",
          }}
        >
          CULT OPTIC
        </p>
      </section>

      {/* ── NEWSLETTER ──────────────────────────────────────────── */}
      <section
        className="py-20 px-6 md:px-12"
        style={{
          background: "var(--graphite)",
          borderTop: "1px solid rgba(138,138,138,0.08)",
        }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
          <div>
            <p
              style={{
                color: "var(--sand)",
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "9px",
                letterSpacing: "0.4em",
                marginBottom: "14px",
              }}
            >
              STAY IN THE FIELD
            </p>
            <p
              className="font-light italic"
              style={{
                color: "var(--snow)",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(22px, 3vw, 42px)",
                lineHeight: 1.25,
              }}
            >
              New collections,<br />early access.
            </p>
          </div>
          <div className="flex w-full md:w-auto" style={{ minWidth: "min(340px, 100%)" }}>
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent outline-none"
              style={{
                border: "1px solid rgba(138,138,138,0.22)",
                borderRight: "none",
                padding: "13px 18px",
                color: "var(--snow)",
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "12px",
              }}
            />
            <button
              className="transition-opacity duration-300 hover:opacity-80"
              style={{
                background: "var(--sand)",
                color: "var(--void)",
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "9px",
                letterSpacing: "0.2em",
                fontWeight: 500,
                padding: "13px 22px",
                whiteSpace: "nowrap",
              }}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
