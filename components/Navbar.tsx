"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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

const otherLinks = [
  { label: "Lifestyle", href: "/catalog?category=lifestyle" },
  { label: "Fashion",   href: "/catalog?category=fashion" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "About",     href: "/about" },
];

/* Base styles — colors are overridden dynamically in render */
const ITEM_BASE: React.CSSProperties = {
  fontFamily: "var(--font-primary)",
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textDecoration: "none",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  whiteSpace: "nowrap",
  transition: "color 0.2s ease",
};

const ICON_BASE: React.CSSProperties = {
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: 0,
  display: "flex",
  alignItems: "center",
  transition: "color 0.2s ease",
};

function IconSearch() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <line x1="15.5" y1="15.5" x2="21" y2="21" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-3.8 3.6-6.5 8-6.5s8 2.7 8 6.5" />
    </svg>
  );
}
function IconBag() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 7v14a2 2 0 002 2h14a2 2 0 002-2V7L18 2z" />
      <line x1="3" y1="7" x2="21" y2="7" />
      <path d="M16 11a4 4 0 01-8 0" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled]                 = useState(false);
  const [menuOpen, setMenuOpen]                 = useState(false);
  const [collectionOpen, setCollectionOpen]     = useState(false);
  const [collectionMobile, setCollectionMobile] = useState(false);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openMenu() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setCollectionOpen(true);
  }
  function scheduleClose() {
    closeTimer.current = setTimeout(() => setCollectionOpen(false), 80);
  }
  function closeNow() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setCollectionOpen(false);
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setCollectionOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) setCollectionMobile(false);
  }, [menuOpen]);

  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  const navH = scrolled ? "64px" : "96px";

  /* ── Dynamic colors — adapt to background state ─────────────── */
  // When dropdown is open the nav flips to a light surface; links and
  // icons must be dark so they stay readable. Otherwise everything is
  // light-on-transparent (hero state) or light-on-dark (scrolled state).
  const linkBase   = collectionOpen ? "rgba(33,27,22,0.65)" : "rgba(245,245,240,0.82)";
  const iconBase   = collectionOpen ? "rgba(33,27,22,0.60)" : "rgba(245,245,240,0.72)";
  const accentHover = "#EF761F";

  /* ── Nav surface ─────────────────────────────────────────────── */
  // Priority: collectionOpen > scrolled > default
  const navBg = collectionOpen
    ? "rgba(244,241,236,0.92)"
    : scrolled
      ? "rgba(33,27,22,0.35)"
      : "transparent";

  const navBlur = (collectionOpen || scrolled) ? "blur(12px)" : "none";

  // No border-bottom when dropdown is open — the two surfaces merge.
  const navBorder = (!collectionOpen && scrolled)
    ? "1px solid rgba(196,180,154,0.06)"
    : "none";

  return (
    <>
      {/* ── NAVBAR ─────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: navBg,
          backdropFilter: navBlur,
          WebkitBackdropFilter: navBlur,
          borderBottom: navBorder,
          transition: "background 0.2s ease, backdrop-filter 0.2s ease, border-color 0.2s ease",
        }}
      >
        <div
          className="flex md:relative items-center px-6 md:px-0"
          style={{
            height: navH,
            transition: "height 0.5s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* ── LOGO ─────────────────────────────────────────────── */}
          <Link
            href="/"
            className="block transition-opacity duration-300 hover:opacity-70 flex-shrink-0 md:absolute md:left-[40px] md:top-1/2 md:-translate-y-1/2"
          >
            <Image src="/brand/isotipo.png" alt="CULT OPTIC" width={96}  height={48} priority className="block md:hidden" style={{ height: "36px", width: "auto" }} />
            <Image src="/brand/isotipo.png" alt="CULT OPTIC" width={128} height={64} priority className="hidden md:block" style={{ height: "56px", width: "auto" }} />
          </Link>

          {/* ── DESKTOP — nav + acciones ──────────────────────────── */}
          <div className="hidden md:flex md:absolute md:right-[40px] md:top-1/2 md:-translate-y-1/2 items-center gap-8">

            {/* COLLECTION — plain link, no wrapper padding trick */}
            <Link
              href="/catalog"
              style={{
                ...ITEM_BASE,
                color: collectionOpen ? accentHover : linkBase,
              }}
              onMouseEnter={openMenu}
              onMouseLeave={scheduleClose}
            >
              COLLECTION
            </Link>

            {/* Other nav links — inline handlers close over current linkBase */}
            {otherLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ ...ITEM_BASE, color: linkBase }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = accentHover;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = linkBase;
                }}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}

            <span style={{ width: "1px", height: "12px", background: collectionOpen ? "rgba(33,27,22,0.15)" : "rgba(245,245,240,0.18)", flexShrink: 0 }} />

            {/* Icons */}
            {[
              { label: "Buscar",    Icon: IconSearch },
              { label: "Mi cuenta", Icon: IconUser   },
              { label: "Carrito",   Icon: IconBag    },
            ].map(({ label, Icon }) => (
              <button
                key={label}
                aria-label={label}
                style={{ ...ICON_BASE, color: iconBase }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = accentHover;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = iconBase;
                }}
              >
                <Icon />
              </button>
            ))}
          </div>

          {/* ── MOBILE — carrito + hamburguesa ───────────────────── */}
          <div className="md:hidden ml-auto flex items-center gap-3">
            <button
              aria-label="Carrito"
              style={{ color: "rgba(245,245,240,0.8)", background: "none", border: "none", cursor: "pointer", padding: "4px", display: "flex", alignItems: "center", transition: "color 0.25s ease" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = accentHover; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "rgba(245,245,240,0.8)"; }}
            >
              <IconBag />
            </button>
            <button
              className="flex flex-col justify-center gap-[5px] p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <span className="block h-px bg-snow transition-all duration-300" style={{ width: "24px", transform: menuOpen ? "rotate(45deg) translate(3.5px, 3.5px)" : "none" }} />
              <span className="block h-px bg-snow transition-all duration-300" style={{ width: "16px", opacity: menuOpen ? 0 : 1 }} />
              <span className="block h-px bg-snow transition-all duration-300" style={{ width: "24px", transform: menuOpen ? "rotate(-45deg) translate(3.5px, -3.5px)" : "none" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── DESKTOP MEGA DROPDOWN ──────────────────────────────────── */}
      {/* Same background + blur as the nav when open → unified surface.
          No borderTop — the nav's bottom edge IS the panel's top edge. */}
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
          {/* Col 1 — section label */}
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

          {/* Cols 2 & 3 — categories */}
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

      {/* ── MOBILE OVERLAY ───────────────────────────────────────── */}
      <div
        className="md:hidden fixed inset-0 z-40 flex flex-col"
        style={{
          background: "#211B16",
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          transition: "opacity 0.4s ease, visibility 0.4s ease",
        }}
      >
        <div className="flex items-center justify-between" style={{ padding: "28px 28px 0" }}>
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image src="/brand/isotipo.png" alt="CULT OPTIC" width={80} height={40} style={{ height: "32px", width: "auto", opacity: 0.9 }} />
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Cerrar menú"
            style={{ fontFamily: "var(--font-primary)", fontSize: "22px", fontWeight: 300, color: "var(--snow)", background: "none", border: "none", cursor: "pointer", lineHeight: 1, padding: "4px 8px" }}
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col justify-center flex-1" style={{ padding: "0 40px 80px" }}>

          {/* COLLECTION — accordion */}
          <div>
            <button
              onClick={() => setCollectionMobile(!collectionMobile)}
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "32px",
                fontWeight: 400,
                letterSpacing: "0.04em",
                color: "var(--snow)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                width: "100%",
                textAlign: "left",
                transition: "color 0.25s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.color = accentHover; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.color = "var(--snow)"; }}
            >
              COLLECTION
              <span
                style={{
                  fontSize: "28px",
                  fontWeight: 200,
                  lineHeight: 1,
                  opacity: 0.45,
                  display: "inline-block",
                  transform: collectionMobile ? "rotate(45deg)" : "none",
                  transition: "transform 0.25s ease",
                }}
              >
                +
              </span>
            </button>

            <div
              style={{
                overflow: "hidden",
                maxHeight: collectionMobile ? "200px" : "0",
                opacity: collectionMobile ? 1 : 0,
                transition: "max-height 0.35s ease, opacity 0.25s ease",
              }}
            >
              <div style={{ paddingTop: "8px", paddingBottom: "12px" }}>
                {collectionSub.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontFamily: "var(--font-primary)",
                      fontSize: "20px",
                      fontWeight: 400,
                      letterSpacing: "0.06em",
                      color: "rgba(245,245,240,0.45)",
                      textDecoration: "none",
                      display: "block",
                      paddingTop: "16px",
                      transition: "color 0.25s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = accentHover; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(245,245,240,0.45)"; }}
                  >
                    {item.label.toUpperCase()}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Other links */}
          {otherLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-primary)",
                fontSize: "32px",
                fontWeight: 400,
                letterSpacing: "0.04em",
                color: "var(--snow)",
                textDecoration: "none",
                display: "block",
                paddingTop: "32px",
                borderTop: "1px solid rgba(245,245,240,0.07)",
                transition: "color 0.25s ease",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = accentHover; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "var(--snow)"; }}
            >
              {link.label.toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
