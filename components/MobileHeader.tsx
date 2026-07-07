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

  // Cuando el menú está abierto, MobileMenu tiene su propio header.
  if (menuOpen) return null;

  const iconColor = "#F4F1EC";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex md:hidden"
      style={{
        height: "64px",
        padding: "0 18px",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "rgba(33,27,22,0.35)"
          : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        transition:
          "background .25s ease, backdrop-filter .25s ease",
      }}
    >
      {/* IZQUIERDA */}
      <div
        style={{
          width: "88px",
          display: "flex",
          alignItems: "center",
          gap: "18px",
        }}
      >
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span
            style={{
              width: "22px",
              height: "2px",
              background: iconColor,
              display: "block",
            }}
          />
          <span
            style={{
              width: "22px",
              height: "2px",
              background: iconColor,
              display: "block",
            }}
          />
        </button>

        <button
          aria-label="Buscar"
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
            color: iconColor,
          }}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="11"
              cy="11"
              r="6.5"
              stroke="currentColor"
              strokeWidth="1.7"
            />
            <path
              d="M16 16L21 21"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* CENTRO */}
      <Link
        href="/"
        aria-label="Inicio"
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Image
          src="/brand/isotipo.png"
          alt="CULT"
          width={110}
          height={55}
          priority
          style={{
            width: "auto",
            height: "38px",
          }}
        />
      </Link>

      {/* DERECHA */}
      <div
        style={{
          width: "88px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: "18px",
          color: iconColor,
        }}
      >
        <Link
          href="/account"
          aria-label="Cuenta"
          style={{
            color: iconColor,
            display: "flex",
          }}
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              cx="12"
              cy="8"
              r="4"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M4.5 21C5.8 16.8 8.5 14.5 12 14.5C15.5 14.5 18.2 16.8 19.5 21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Link>

        <Link
          href="/cart"
          aria-label="Carrito"
          style={{
            color: iconColor,
            display: "flex",
          }}
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M7 8H17L18 21H6L7 8Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M9 8C9 5.8 10.3 4 12 4C13.7 4 15 5.8 15 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}

