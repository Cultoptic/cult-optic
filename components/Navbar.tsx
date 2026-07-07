"use client";
import { useState, useEffect, useRef } from "react";
import DesktopHeader from "./DesktopHeader";
import DesktopMenu from "./DesktopMenu";
import MobileHeader from "./MobileHeader";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [scrolled, setScrolled]             = useState(false);
  const [menuOpen, setMenuOpen]             = useState(false);
  const [collectionOpen, setCollectionOpen] = useState(false);

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
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  const navH = scrolled ? "64px" : "96px";

  /* ── Dynamic colors — adapt to background state (desktop only) ── */
  const linkBase   = collectionOpen ? "rgba(33,27,22,0.65)" : "rgba(245,245,240,0.82)";
  const iconBase   = collectionOpen ? "rgba(33,27,22,0.60)" : "rgba(245,245,240,0.72)";

  /* ── Nav surface (desktop only) ─────────────────────────────── */
  const navBg = collectionOpen
    ? "rgba(244,241,236,0.92)"
    : scrolled
      ? "rgba(33,27,22,0.35)"
      : "transparent";

  const navBlur = (collectionOpen || scrolled) ? "blur(12px)" : "none";

  const navBorder = (!collectionOpen && scrolled)
    ? "1px solid rgba(196,180,154,0.06)"
    : "none";

  return (
    <>
      {/* ── DESKTOP NAV — completely independent fixed bar, hidden below md ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 hidden md:block"
        style={{
          background: navBg,
          backdropFilter: navBlur,
          WebkitBackdropFilter: navBlur,
          borderBottom: navBorder,
          transition: "background 0.2s ease, backdrop-filter 0.2s ease, border-color 0.2s ease",
        }}
      >
        <div
          className="relative flex items-center"
          style={{
            height: navH,
            transition: "height 0.5s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          <DesktopHeader
            collectionOpen={collectionOpen}
            openMenu={openMenu}
            scheduleClose={scheduleClose}
            linkBase={linkBase}
            iconBase={iconBase}
          />
        </div>
      </nav>

      <DesktopMenu
        collectionOpen={collectionOpen}
        openMenu={openMenu}
        closeNow={closeNow}
        navH={navH}
      />

      {/* ── MOBILE — fully independent fixed bar + fullscreen menu ── */}
      <MobileHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}
