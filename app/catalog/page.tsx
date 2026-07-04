"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { products, Category, categoryLabels, categoryDescriptions } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { Suspense } from "react";

const categories: { key: "all" | Category; label: string; count: number }[] = [
  { key: "all", label: "All", count: products.length },
  { key: "lifestyle", label: "Lifestyle", count: products.filter((p) => p.category === "lifestyle").length },
  { key: "lifestyle-sport", label: "Lifestyle Sport", count: products.filter((p) => p.category === "lifestyle-sport").length },
  { key: "sport-tech", label: "Sport Tech", count: products.filter((p) => p.category === "sport-tech").length },
  { key: "fashion", label: "Fashion", count: products.filter((p) => p.category === "fashion").length },
];

const categoryAccents: Record<string, string> = {
  all: "linear-gradient(135deg, #0A0A0A 0%, #1A2744 50%, #0A0A0A 100%)",
  lifestyle: "linear-gradient(135deg, #2A2A2D 0%, #1C1C1E 100%)",
  "lifestyle-sport": "linear-gradient(135deg, #1C2A1E 0%, #0A0A0A 100%)",
  "sport-tech": "linear-gradient(135deg, #0A0A0A 0%, #1A2744 100%)",
  fashion: "linear-gradient(135deg, #2A1C2A 0%, #0A0A0A 100%)",
};

type SortKey = "default" | "price-asc" | "price-desc" | "new";

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = (searchParams.get("category") as Category) || "all";
  const [activeCategory, setActiveCategory] = useState<"all" | Category>(initialCategory);
  const [sort, setSort] = useState<SortKey>("default");
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const cat = searchParams.get("category") as Category | null;
    setActiveCategory(cat || "all");
  }, [searchParams]);

  const base = activeCategory === "all"
    ? products
    : products.filter((p) => p.category === activeCategory);

  const filtered = [...base].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "new") return (b.new ? 1 : 0) - (a.new ? 1 : 0);
    return 0;
  });

  const heroProduct = filtered[0];
  const restProducts = filtered.slice(1);

  const catDesc = activeCategory !== "all" ? categoryDescriptions[activeCategory] : null;

  return (
    <div style={{ background: "var(--void)", minHeight: "100vh" }}>

      {/* ── HERO BANNER ── */}
      <div
        className="relative pt-28 pb-16 px-6 md:px-12 overflow-hidden"
        style={{
          background: categoryAccents[activeCategory],
          borderBottom: "1px solid rgba(138,138,138,0.12)",
          minHeight: "260px",
        }}
      >
        {/* Vertical text decoration */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-2">
          <div className="w-px h-16" style={{ background: "rgba(196,180,154,0.2)" }} />
          <p
            className="tracking-[0.35em]"
            style={{
              color: "var(--sand)",
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "8px",
              writingMode: "vertical-rl",
              opacity: 0.5,
            }}
          >
            COLLECTION AW25
          </p>
          <div className="w-px h-16" style={{ background: "rgba(196,180,154,0.2)" }} />
        </div>

        <div className="max-w-screen-xl mx-auto">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8">
            <Link
              href="/"
              className="text-xs tracking-[0.15em] transition-colors duration-300 hover-line"
              style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
            >
              HOME
            </Link>
            <span style={{ color: "var(--smoke)", fontSize: "10px" }}>/</span>
            <span
              className="text-xs tracking-[0.15em]"
              style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
            >
              {activeCategory === "all" ? "COLLECTION" : categoryLabels[activeCategory as Category].toUpperCase()}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p
                className="text-xs tracking-[0.35em] mb-3"
                style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
              >
                CULT OPTIC — AW25
              </p>
              <h1
                className="text-5xl md:text-7xl font-bold leading-none"
                style={{
                  color: "var(--snow)",
                  fontFamily: "var(--font-space), sans-serif",
                  letterSpacing: "-0.02em",
                }}
              >
                {activeCategory === "all"
                  ? "Collection"
                  : categoryLabels[activeCategory as Category]}
              </h1>
              {catDesc && (
                <p
                  className="mt-4 text-sm max-w-md leading-relaxed"
                  style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
                >
                  {catDesc}
                </p>
              )}
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
                >
                  {filtered.length}
                </p>
                <p
                  className="text-xs tracking-[0.15em]"
                  style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
                >
                  PRODUCTS
                </p>
              </div>
              <div>
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
                >
                  {filtered.filter((p) => p.new).length}
                </p>
                <p
                  className="text-xs tracking-[0.15em]"
                  style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
                >
                  NEW
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FILTER + SORT BAR ── */}
      <div
        className="sticky top-16 z-40 px-6 md:px-12 py-4"
        style={{
          background: "rgba(10,10,10,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(138,138,138,0.1)",
        }}
      >
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className="flex items-center gap-2 px-4 py-1.5 text-xs tracking-[0.15em] transition-all duration-300"
                style={{
                  fontFamily: "var(--font-space), sans-serif",
                  background: activeCategory === cat.key ? "var(--sand)" : "transparent",
                  color: activeCategory === cat.key ? "var(--void)" : "var(--smoke)",
                  border: `1px solid ${activeCategory === cat.key ? "var(--sand)" : "rgba(138,138,138,0.25)"}`,
                }}
              >
                {cat.label.toUpperCase()}
                <span
                  className="text-xs opacity-60"
                  style={{ fontSize: "9px" }}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="flex items-center gap-3">
            <span
              className="text-xs tracking-[0.15em]"
              style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
            >
              SORT
            </span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="bg-transparent border px-3 py-1.5 text-xs outline-none transition-colors duration-300"
              style={{
                borderColor: "rgba(138,138,138,0.25)",
                color: "var(--snow)",
                fontFamily: "var(--font-space), sans-serif",
              }}
            >
              <option value="default" style={{ background: "#1C1C1E" }}>Default</option>
              <option value="new" style={{ background: "#1C1C1E" }}>New first</option>
              <option value="price-asc" style={{ background: "#1C1C1E" }}>Price ↑</option>
              <option value="price-desc" style={{ background: "#1C1C1E" }}>Price ↓</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── PRODUCT GRID ── */}
      <div className="px-6 md:px-12 py-16 max-w-screen-xl mx-auto">

        {filtered.length === 0 ? (
          <div className="py-32 text-center">
            <p
              className="text-xs tracking-[0.3em]"
              style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
            >
              NO PRODUCTS FOUND
            </p>
          </div>
        ) : (
          <>
            {/* Featured hero card — first product full width on mobile, 2-col on desktop */}
            {heroProduct && sort === "default" && (
              <div
                className="mb-6 animate-fade-in"
                style={{ opacity: mounted ? 1 : 0 }}
              >
                <Link href={`/catalog/${heroProduct.id}`} className="group block">
                  <div
                    className="relative overflow-hidden"
                    style={{
                      aspectRatio: "21/9",
                      background:
                        heroProduct.category === "sport-tech"
                          ? "linear-gradient(145deg, #1A2744 0%, #0A0A0A 100%)"
                          : heroProduct.category === "fashion"
                          ? "linear-gradient(145deg, #2A1C2A 0%, #0A0A0A 100%)"
                          : heroProduct.category === "lifestyle-sport"
                          ? "linear-gradient(145deg, #1C2A1E 0%, #0A0A0A 100%)"
                          : "linear-gradient(145deg, #2A2A2D 0%, #1C1C1E 100%)",
                    }}
                  >
                    {/* Center graphic */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg width="240" height="60" viewBox="0 0 240 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 30 Q60 8 120 8 Q180 8 220 30 Q180 52 120 52 Q60 52 20 30Z" stroke="rgba(245,245,240,0.08)" strokeWidth="2" fill="none"/>
                        <ellipse cx="120" cy="30" rx="36" ry="22" stroke="rgba(245,245,240,0.07)" strokeWidth="1.5" fill="none"/>
                        <line x1="0" y1="30" x2="20" y2="30" stroke="rgba(196,180,154,0.25)" strokeWidth="2"/>
                        <line x1="220" y1="30" x2="240" y2="30" stroke="rgba(196,180,154,0.25)" strokeWidth="2"/>
                      </svg>
                    </div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.7) 0%, transparent 40%, transparent 60%, rgba(10,10,10,0.7) 100%)" }} />
                    <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)" }} />

                    {/* Corner brackets */}
                    <div className="absolute top-5 left-5 w-8 h-8 opacity-40 group-hover:opacity-70 transition-opacity duration-500" style={{ borderTop: "1px solid var(--sand)", borderLeft: "1px solid var(--sand)" }} />
                    <div className="absolute top-5 right-5 w-8 h-8 opacity-40 group-hover:opacity-70 transition-opacity duration-500" style={{ borderTop: "1px solid var(--sand)", borderRight: "1px solid var(--sand)" }} />
                    <div className="absolute bottom-5 left-5 w-8 h-8 opacity-40 group-hover:opacity-70 transition-opacity duration-500" style={{ borderBottom: "1px solid var(--sand)", borderLeft: "1px solid var(--sand)" }} />
                    <div className="absolute bottom-5 right-5 w-8 h-8 opacity-40 group-hover:opacity-70 transition-opacity duration-500" style={{ borderBottom: "1px solid var(--sand)", borderRight: "1px solid var(--sand)" }} />

                    {/* Badge */}
                    {heroProduct.new && (
                      <div className="absolute top-5 left-12">
                        <span
                          className="px-2 py-1 tracking-[0.15em]"
                          style={{ background: "var(--sand)", color: "var(--void)", fontFamily: "var(--font-space), sans-serif", fontSize: "9px" }}
                        >
                          NEW
                        </span>
                      </div>
                    )}

                    {/* Info overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end">
                      <div>
                        <p
                          className="text-xs tracking-[0.3em] mb-2"
                          style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
                        >
                          {categoryLabels[heroProduct.category].toUpperCase()}
                        </p>
                        <h2
                          className="text-3xl md:text-5xl font-bold mb-1 group-hover:text-sand transition-colors duration-300"
                          style={{ color: "var(--snow)", fontFamily: "var(--font-space), sans-serif", letterSpacing: "-0.02em" }}
                        >
                          {heroProduct.name}
                        </h2>
                        <p
                          className="text-sm"
                          style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
                        >
                          {heroProduct.tagline}
                        </p>
                      </div>
                      <div className="text-right hidden md:block">
                        <p
                          className="text-2xl font-bold mb-2"
                          style={{ color: "var(--snow)", fontFamily: "var(--font-space), sans-serif" }}
                        >
                          ${heroProduct.price}
                        </p>
                        <p
                          className="text-xs tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
                        >
                          VIEW PRODUCT →
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            )}

            {/* Regular grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
              {(sort === "default" ? restProducts : filtered).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Category separators for "all" view */}
            {activeCategory === "all" && sort === "default" && (
              <div className="mt-24 pt-16" style={{ borderTop: "1px solid rgba(138,138,138,0.1)" }}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {(["lifestyle", "lifestyle-sport", "sport-tech", "fashion"] as Category[]).map((cat) => (
                    <Link
                      key={cat}
                      href={`/catalog?category=${cat}`}
                      className="group flex items-center justify-between p-6 transition-all duration-300"
                      style={{
                        border: "1px solid rgba(138,138,138,0.15)",
                        background: "var(--graphite)",
                      }}
                    >
                      <div>
                        <p
                          className="text-xs tracking-[0.2em] mb-1"
                          style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
                        >
                          {categoryLabels[cat].toUpperCase()}
                        </p>
                        <p
                          className="text-xs"
                          style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
                        >
                          {products.filter((p) => p.category === cat).length} products
                        </p>
                      </div>
                      <span
                        className="text-xs tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
                      >
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div style={{ background: "var(--void)", minHeight: "100vh" }} />}>
      <CatalogContent />
    </Suspense>
  );
}
