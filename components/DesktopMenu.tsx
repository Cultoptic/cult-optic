"use client";
import Link from "next/link";

const collectionSub = [
  {
    label: "Sunglasses",
    href: "/collection/sunglasses",
    description: "Anteojos de sol CULT.",
    cta: "EXPLORAR SUNGLASSES",
  },
  {
    label: "Snow",
    href: "/collection/snow",
    description: "Antiparras para la montaña.",
    cta: "EXPLORAR SNOW",
  },
];

export default function DesktopMenu({
  collectionOpen,
  openMenu,
  closeNow,
  navH,
}: {
  collectionOpen: boolean;
  openMenu: () => void;
  closeNow: () => void;
  navH: string;
}) {
  return (
    <div
      className="hidden md:block"
      onMouseEnter={openMenu}
      onMouseLeave={closeNow}
      style={{
        position: "fixed",
        top: navH,
        left: 0,
        width: "100%",
        zIndex: 49,
        opacity: collectionOpen ? 1 : 0,
        pointerEvents: collectionOpen ? "auto" : "none",
        transform: `translateY(${collectionOpen ? "0" : "6px"})`,
        transition: "opacity 0.2s ease, transform 0.2s ease",
        background: "rgba(244,241,236,0.92)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(33,27,22,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "clamp(48px, 8vw, 120px)",
          padding: "clamp(32px, 4vw, 44px) clamp(40px, 5vw, 80px)",
        }}
      >
        <div style={{ paddingTop: "3px", flexShrink: 0 }}>
          <p
            style={{
              fontFamily: "var(--font-primary)",
              fontSize: "10px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(33,27,22,0.28)",
              lineHeight: 1,
            }}
          >
            Collection
          </p>
        </div>

        {collectionSub.map((item) => (
          <div key={item.href}>
            <Link
              href={item.href}
              onClick={closeNow}
              style={{ textDecoration: "none", display: "block", marginBottom: "10px" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-primary)",
                  fontSize: "13px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#211B16",
                  lineHeight: 1,
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLParagraphElement).style.opacity = "0.45"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLParagraphElement).style.opacity = "1"; }}
              >
                {item.label.toUpperCase()}
              </p>
            </Link>

            <p
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "12px",
                fontWeight: 400,
                letterSpacing: "0.02em",
                color: "rgba(33,27,22,0.46)",
                lineHeight: 1.65,
                marginBottom: "18px",
                maxWidth: "220px",
              }}
            >
              {item.description}
            </p>

            <Link
              href={item.href}
              onClick={closeNow}
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(33,27,22,0.42)",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#211B16"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(33,27,22,0.42)"; }}
            >
              {item.cta}
              <span style={{ fontSize: "12px", lineHeight: 1 }}>→</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
