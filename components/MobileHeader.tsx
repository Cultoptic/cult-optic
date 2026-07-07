"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function MobileHeader({
  menuOpen,
  setMenuOpen,
}: {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="md:hidden fixed top-0 left-0 right-0 z-50"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "68px",
        padding: "0 20px",
        background: scrolled ? "rgba(33,27,22,0.35)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        transition: "background 0.25s ease, backdrop-filter 0.25s ease",
      }}
    >
      <Link href="/" className="block transition-opacity duration-300 hover:opacity-70" style={{ flexShrink: 0 }}>
        <Image
          src="/brand/isotipo.png"
          alt="CULT OPTIC"
          width={96}
          height={48}
          priority
          style={{ height: "32px", width: "auto" }}
        />
      </Link>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        style={{
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "6px",
          padding: "8px",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            display: "block",
            width: "24px",
            height: "2px",
            backgroundColor: "#F4F1EC",
            transition: "transform 0.3s ease",
            transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
          }}
        />
        <span
          style={{
            display: "block",
            width: "24px",
            height: "2px",
            backgroundColor: "#F4F1EC",
            transition: "opacity 0.3s ease",
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <span
          style={{
            display: "block",
            width: "24px",
            height: "2px",
            backgroundColor: "#F4F1EC",
            transition: "transform 0.3s ease",
            transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
          }}
        />
      </button>
    </div>
  );
}
