"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const collectionSub = [
  { label: "Sunglasses", href: "/collection/sunglasses" },
  { label: "Snow", href: "/collection/snow" },
];

// Nota: "/lifestyle" y "/fashion" no existen como rutas en la app (solo
// existe /catalog?category=X) — se usan las rutas funcionales reales para
// no dejar links rotos en el menú mobile.
const otherLinks = [
  { label: "Lifestyle", href: "/catalog?category=lifestyle" },
  { label: "Fashion", href: "/catalog?category=fashion" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "About", href: "/about" },
];

const TEXT_COLOR = "#F4F1EC";
const ACCENT_HOVER = "#EF761F";

const MAIN_LINK_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-primary)",
  fontSize: "clamp(36px, 9vw, 42px)",
  fontWeight: 400,
  letterSpacing: "0.01em",
  color: TEXT_COLOR,
  textDecoration: "none",
  display: "block",
  transition: "color 0.25s ease",
};

const SUB_LINK_STYLE: React.CSSProperties = {
  fontFamily: "var(--font-primary)",
  fontSize: "22px",
  fontWeight: 400,
  letterSpacing: "0.01em",
  color: TEXT_COLOR,
  textDecoration: "none",
  display: "block",
  transition: "color 0.25s ease",
};

export default function MobileMenu({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  const [menuView, setMenuView] = useState<"main" | "collection">("main");
  const viewResetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      viewResetTimer.current = setTimeout(() => setMenuView("main"), 400);
    } else if (viewResetTimer.current) {
      clearTimeout(viewResetTimer.current);
    }
    return () => { if (viewResetTimer.current) clearTimeout(viewResetTimer.current); };
  }, [menuOpen]);

  return (
    <div
      className="md:hidden fixed inset-0 z-[100] flex flex-col"
      style={{
        top: 0,
        width: "100vw",
        minHeight: "100dvh",
        background: "#211B16",
        opacity: menuOpen ? 1 : 0,
        visibility: menuOpen ? "visible" : "hidden",
        transition: "opacity 0.4s ease, visibility 0.4s ease",
      }}
    >
      {/* ── Top bar — logo izq, cerrar der ─────────────────────── */}
      <div className="flex items-center justify-between" style={{ padding: "20px" }}>
        <Link href="/" onClick={() => setMenuOpen(false)}>
          <Image src="/brand/isotipo.png" alt="CULT OPTIC" width={80} height={40} style={{ height: "32px", width: "auto", opacity: 0.9 }} />
        </Link>
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
          style={{ fontFamily: "var(--font-primary)", fontSize: "28px", fontWeight: 300, color: TEXT_COLOR, background: "none", border: "none", cursor: "pointer", lineHeight: 1, padding: "4px" }}
        >
          ✕
        </button>
      </div>

      {/* ── Paneles deslizantes ──────────────────────────────────── */}
      <nav className="relative flex-1 overflow-hidden">
        <div
          style={{
            display: "flex",
            width: "200%",
            height: "100%",
            transform: `translateX(${menuView === "collection" ? "-50%" : "0%"})`,
            transition: "transform 0.5s ease",
          }}
        >
          {/* ── PANEL 1 — main ─────────────────────────────────── */}
          <div
            className="flex flex-col"
            style={{ width: "50%", flexShrink: 0, padding: "72px 32px 64px", justifyContent: "flex-start" }}
            inert={menuView !== "main" ? true : undefined}
          >
            <button
              onClick={() => setMenuView("collection")}
              style={{
                ...MAIN_LINK_STYLE,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "12px",
                width: "100%",
                textAlign: "left",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = ACCENT_HOVER; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = TEXT_COLOR; }}
            >
              COLLECTION
              <span style={{ opacity: 0.5, fontWeight: 300, lineHeight: 1 }}>&gt;</span>
            </button>

            {otherLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  ...MAIN_LINK_STYLE,
                  paddingTop: "20px",
                  borderTop: "1px solid rgba(245,241,236,0.05)",
                  marginTop: "32px",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT_HOVER; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = TEXT_COLOR; }}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </div>

          {/* ── PANEL 2 — collection drill-down ─────────────────── */}
          <div
            className="flex flex-col"
            style={{ width: "50%", flexShrink: 0, padding: "72px 32px 64px", justifyContent: "flex-start" }}
            inert={menuView !== "collection" ? true : undefined}
          >
            <button
              onClick={() => setMenuView("main")}
              aria-label="Volver"
              style={{
                ...MAIN_LINK_STYLE,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "12px",
                width: "100%",
                textAlign: "left",
                marginBottom: "32px",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = ACCENT_HOVER; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = TEXT_COLOR; }}
            >
              COLLECTION
              <span style={{ opacity: 0.5, fontWeight: 300, lineHeight: 1 }}>×</span>
            </button>

            {collectionSub.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  ...SUB_LINK_STYLE,
                  ...(i > 0 ? { paddingTop: "16px", borderTop: "1px solid rgba(245,241,236,0.05)", marginTop: "24px" } : {}),
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT_HOVER; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = TEXT_COLOR; }}
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
