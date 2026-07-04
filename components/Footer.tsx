'use client';
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--graphite)",
        borderTop: "1px solid rgba(138,138,138,0.15)",
      }}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <p
              className="text-snow text-sm tracking-[0.25em] font-semibold mb-4"
              style={{ fontFamily: "var(--font-space), sans-serif" }}
            >
              CULT OPTIC
            </p>
            <p
              className="text-xs leading-relaxed"
              style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
            >
              Cold luxury eyewear engineered for outdoor performance.
            </p>
            <div className="flex gap-4 mt-6">
              {["IG", "TK", "YT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-xs tracking-widest transition-colors duration-300"
                  style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--sand)")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--smoke)")}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Collections */}
          <div>
            <p
              className="text-xs tracking-[0.2em] mb-6 font-medium"
              style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
            >
              COLLECTIONS
            </p>
            {[
              { label: "Lifestyle", href: "/catalog?category=lifestyle" },
              { label: "Lifestyle Sport", href: "/catalog?category=lifestyle-sport" },
              { label: "Sport Tech", href: "/catalog?category=sport-tech" },
              { label: "Fashion", href: "/catalog?category=fashion" },
              { label: "All Products", href: "/catalog" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-xs mb-3 hover-line transition-colors duration-300"
                style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
            <p
              className="text-xs tracking-[0.2em] mb-6 font-medium"
              style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
            >
              COMPANY
            </p>
            {[
              { label: "About", href: "/about" },
              { label: "Wholesale", href: "/wholesale" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block text-xs mb-3 hover-line transition-colors duration-300"
                style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <p
              className="text-xs tracking-[0.2em] mb-6 font-medium"
              style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
            >
              STAY IN THE FIELD
            </p>
            <p
              className="text-xs mb-4 leading-relaxed"
              style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
            >
              New collections, athlete stories, and early access.
            </p>
            <div className="flex gap-0">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent border px-3 py-2 text-xs text-snow outline-none placeholder-opacity-40"
                style={{
                  borderColor: "rgba(138,138,138,0.3)",
                  fontFamily: "var(--font-space), sans-serif",
                }}
              />
              <button
                className="px-4 py-2 text-xs tracking-widest font-medium transition-colors duration-300"
                style={{
                  background: "var(--sand)",
                  color: "var(--void)",
                  fontFamily: "var(--font-space), sans-serif",
                }}
              >
                →
              </button>
            </div>
          </div>
        </div>

        <div
          className="mt-16 pt-8 flex flex-col md:flex-row justify-between items-start gap-4"
          style={{ borderTop: "1px solid rgba(138,138,138,0.12)" }}
        >
          <p
            className="text-xs"
            style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
          >
            © {new Date().getFullYear()} Cult Optic. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-xs transition-colors duration-300"
                style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
