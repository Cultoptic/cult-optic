import { getProductById, products, categoryLabels } from "@/lib/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};
  return {
    title: `${product.name} — Cult Optic`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div style={{ background: "var(--void)", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div className="pt-24 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="flex items-center gap-3 py-6" style={{ borderBottom: "1px solid rgba(138,138,138,0.12)" }}>
          <Link href="/catalog" className="text-xs tracking-[0.15em] transition-colors duration-300" style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}>
            COLLECTION
          </Link>
          <span style={{ color: "var(--smoke)", fontSize: "10px" }}>/</span>
          <span className="text-xs tracking-[0.15em]" style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}>
            {categoryLabels[product.category].toUpperCase()}
          </span>
          <span style={{ color: "var(--smoke)", fontSize: "10px" }}>/</span>
          <span className="text-xs tracking-[0.15em]" style={{ color: "var(--snow)", fontFamily: "var(--font-space), sans-serif" }}>
            {product.name}
          </span>
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-screen-xl mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
          {/* Image placeholder */}
          <div className="relative" style={{ aspectRatio: "3/4" }}>
            <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#0A0A0A" }}>
              <div className="text-center select-none pointer-events-none">
                <p
                  className="font-light italic leading-none"
                  style={{
                    color: "rgba(196,180,154,0.055)",
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(64px, 12vw, 140px)",
                  }}
                >
                  {product.name}
                </p>
                <p
                  className="mt-4"
                  style={{
                    color: "rgba(196,180,154,0.06)",
                    fontFamily: "var(--font-space), sans-serif",
                    fontSize: "10px",
                    letterSpacing: "0.5em",
                  }}
                >
                  {product.cid}
                </p>
              </div>
              <div className="absolute top-6 left-6 w-8 h-8" style={{ borderTop: "1px solid rgba(196,180,154,0.3)", borderLeft: "1px solid rgba(196,180,154,0.3)" }} />
              <div className="absolute top-6 right-6 w-8 h-8" style={{ borderTop: "1px solid rgba(196,180,154,0.3)", borderRight: "1px solid rgba(196,180,154,0.3)" }} />
              <div className="absolute bottom-6 left-6 w-8 h-8" style={{ borderBottom: "1px solid rgba(196,180,154,0.3)", borderLeft: "1px solid rgba(196,180,154,0.3)" }} />
              <div className="absolute bottom-6 right-6 w-8 h-8" style={{ borderBottom: "1px solid rgba(196,180,154,0.3)", borderRight: "1px solid rgba(196,180,154,0.3)" }} />
            </div>
            {product.new && (
              <div className="absolute top-4 left-4">
                <span className="px-2 py-1 text-xs tracking-[0.15em]" style={{ background: "var(--sand)", color: "var(--void)", fontFamily: "var(--font-space), sans-serif", fontSize: "9px" }}>
                  NEW
                </span>
              </div>
            )}
          </div>

          {/* Info panel */}
          <div className="flex flex-col justify-between py-4">
            <div>
              <p className="text-xs tracking-[0.3em] mb-3" style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}>
                {categoryLabels[product.category].toUpperCase()}
              </p>
              <h1 className="text-5xl md:text-6xl font-bold mb-3" style={{ color: "var(--snow)", fontFamily: "var(--font-space), sans-serif", letterSpacing: "-0.02em" }}>
                {product.name}
              </h1>
              <p className="text-lg mb-8" style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}>
                {product.tagline}
              </p>
              <p className="text-3xl font-bold mb-8" style={{ color: "var(--snow)", fontFamily: "var(--font-space), sans-serif" }}>
                ${product.price}
              </p>
              <p className="text-sm leading-relaxed mb-10" style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}>
                {product.description}
              </p>

              {/* Colors */}
              <div className="mb-10">
                <p className="text-xs tracking-[0.2em] mb-4" style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}>
                  COLORWAY
                </p>
                <div className="flex gap-3 flex-wrap">
                  {product.colors.map((color, i) => (
                    <button
                      key={color}
                      className="px-4 py-2 text-xs tracking-wide transition-all duration-300"
                      style={{
                        fontFamily: "var(--font-space), sans-serif",
                        border: i === 0 ? "1px solid var(--sand)" : "1px solid rgba(138,138,138,0.3)",
                        color: i === 0 ? "var(--sand)" : "var(--smoke)",
                      }}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specs */}
              <div className="mb-10">
                <p className="text-xs tracking-[0.2em] mb-4" style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}>
                  SPECIFICATIONS
                </p>
                <div className="grid grid-cols-2 gap-0">
                  {product.specs.map((spec, i) => (
                    <div key={spec.label} className="py-3 pr-4" style={{ borderBottom: "1px solid rgba(138,138,138,0.12)", borderRight: i % 2 === 0 ? "1px solid rgba(138,138,138,0.12)" : "none", paddingLeft: i % 2 === 1 ? "16px" : "0" }}>
                      <p className="text-xs mb-1" style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif", fontSize: "9px", letterSpacing: "0.2em" }}>
                        {spec.label}
                      </p>
                      <p className="text-xs" style={{ color: "var(--snow)", fontFamily: "var(--font-space), sans-serif" }}>
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button
                className="w-full py-4 text-sm tracking-[0.2em] font-medium transition-all duration-300 hover:opacity-90"
                style={{ background: "var(--snow)", color: "var(--void)", fontFamily: "var(--font-space), sans-serif" }}
              >
                ADD TO BAG
              </button>
              <Link
                href="/contact"
                className="w-full py-4 text-sm tracking-[0.2em] font-medium text-center transition-all duration-300 hover:border-sand hover:text-sand block"
                style={{ border: "1px solid rgba(138,138,138,0.3)", color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
              >
                WHOLESALE INQUIRY
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-24 px-6 md:px-12" style={{ background: "var(--graphite)", borderTop: "1px solid rgba(138,138,138,0.12)" }}>
          <div className="max-w-screen-xl mx-auto">
            <p className="text-xs tracking-[0.3em] mb-8" style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}>
              YOU MAY ALSO LIKE
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
