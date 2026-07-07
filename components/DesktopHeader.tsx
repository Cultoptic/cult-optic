"use client";
import Link from "next/link";
import Image from "next/image";

const otherLinks = [
  { label: "Lifestyle", href: "/catalog?category=lifestyle" },
  { label: "Fashion", href: "/catalog?category=fashion" },
  { label: "Wholesale", href: "/wholesale" },
  { label: "About", href: "/about" },
];

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

const ACCENT_HOVER = "#EF761F";

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

export default function DesktopHeader({
  collectionOpen,
  openMenu,
  scheduleClose,
  linkBase,
  iconBase,
}: {
  collectionOpen: boolean;
  openMenu: () => void;
  scheduleClose: () => void;
  linkBase: string;
  iconBase: string;
}) {
  return (
    <>
      <Link
        href="/"
        className="hidden md:block transition-opacity duration-300 hover:opacity-70 md:absolute tablet:left-[24px] desktop:left-[40px] md:top-1/2 md:-translate-y-1/2"
      >
        <Image
          src="/brand/isotipo.png"
          alt="CULT OPTIC"
          width={128}
          height={64}
          priority
          style={{ height: "56px", width: "auto" }}
        />
      </Link>

      <div className="hidden md:flex md:absolute tablet:right-[24px] desktop:right-[40px] md:top-1/2 md:-translate-y-1/2 items-center gap-8">
        <Link
          href="/catalog"
          style={{
            ...ITEM_BASE,
            color: collectionOpen ? ACCENT_HOVER : linkBase,
          }}
          onMouseEnter={openMenu}
          onMouseLeave={scheduleClose}
        >
          COLLECTION
        </Link>

        {otherLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{ ...ITEM_BASE, color: linkBase }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = ACCENT_HOVER;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = linkBase;
            }}
          >
            {link.label.toUpperCase()}
          </Link>
        ))}

        <span style={{ width: "1px", height: "12px", background: collectionOpen ? "rgba(33,27,22,0.15)" : "rgba(245,245,240,0.18)", flexShrink: 0 }} />

        {[
          { label: "Buscar", Icon: IconSearch },
          { label: "Mi cuenta", Icon: IconUser },
          { label: "Carrito", Icon: IconBag },
        ].map(({ label, Icon }) => (
          <button
            key={label}
            aria-label={label}
            style={{ ...ICON_BASE, color: iconBase }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = ACCENT_HOVER;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color = iconBase;
            }}
          >
            <Icon />
          </button>
        ))}
      </div>
    </>
  );
}
