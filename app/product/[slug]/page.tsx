import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { products, getProductById, categoryLabels } from "@/lib/products";

interface Props {
  params: Promise<{ slug: string }>;
}

/* ── Gallery assets — product-specific where they exist, otherwise the
   slot is simply skipped (no placeholder box, per "sin estilo ecommerce
   genérico"). Extend this map as more product photography lands. ──── */
const gallery: Record<
  string,
  { product?: string; editorial?: string; detail?: string; lifestyle?: string }
> = {
  core: {
    product: "/collection/core/card-core.png",
    editorial: "/editorial/antiparracore-1.png",
    detail: "/editorial/antiparracore-2.png",
    lifestyle: "/editorial/lifestyle-1.png",
  },
  solace: { product: "/collection/solace/card-solace.png" },
  breakline: { product: "/collection/breakline/card-breakline.png" },
  brat: { product: "/collection/brat/card-brat.png", editorial: "/editorial/lentebrat-1.png" },
  ventis: { product: "/collection/ventis/card-ventis.png", editorial: "/editorial/lenteventis-1.png" },
  vector: { product: "/collection/vector/card-vector.png", editorial: "/editorial/lentevector-1.png" },
  boogie: { product: "/collection/boogie/card.boogie.png" },
  classy: { product: "/collection/classy/card-classy.png" },
};

const PRICE_PLACEHOLDER = "$89.990 CLP";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) return {};
  return {
    title: `${product.name} — CULT OPTIC`,
    description: product.tagline,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductById(slug);
  if (!product) notFound();

  const shots = gallery[product.id] ?? {};
  const heroImage = shots.product;

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .concat(products.filter((p) => p.category !== product.category))
    .slice(0, 4);

  const detailBlocks = [
    { label: "Protección UV400", copy: "Bloqueo total de radiación UVA/UVB en cada lente." },
    { label: "Lente polarizado", copy: "Reduce el reflejo y mejora la claridad visual en exteriores." },
    { label: "Marco resistente", copy: "Materiales de alta duración pensados para uso diario." },
    { label: "Diseño CULT", copy: "Cada silueta responde a una identidad propia, sin fórmulas genéricas." },
  ];

  return (
    <div style={{ background: "#F4F1EC", color: "#211B16", minHeight: "100vh" }}>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ paddingTop: "clamp(88px, 10vw, 140px)" }}
      >
        {/* Imagen principal */}
        <div
          className="relative flex items-center justify-center"
          style={{
            aspectRatio: "4/5",
            padding: "clamp(24px, 5vw, 64px)",
          }}
        >
          {heroImage ? (
            <Image
              src={heroImage}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 767px) 100vw, 50vw"
              style={{ objectFit: "contain", padding: "6%" }}
            />
          ) : (
            <p
              className="italic text-center select-none"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(40px, 6vw, 72px)",
                color: "rgba(33,27,22,0.12)",
              }}
            >
              {product.name}
            </p>
          )}
        </div>

        {/* Información */}
        <div
          className="flex flex-col justify-center"
          style={{
            padding: "clamp(32px, 5vw, 64px)",
            paddingTop: "clamp(8px, 2vw, 24px)",
          }}
        >
          <p
            style={{
              fontFamily: '"TT Norms Pro", sans-serif',
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(33,27,22,0.5)",
              marginBottom: "18px",
            }}
          >
            {categoryLabels[product.category]}
          </p>

          <h1
            style={{
              fontFamily: '"TT Norms Pro", sans-serif',
              fontWeight: 700,
              fontSize: "clamp(40px, 6vw, 64px)",
              letterSpacing: "0.01em",
              lineHeight: 1,
              marginBottom: "20px",
            }}
          >
            {product.name}
          </h1>

          <p
            style={{
              fontFamily: '"TT Norms Pro", sans-serif',
              fontSize: "15px",
              lineHeight: 1.7,
              color: "rgba(33,27,22,0.68)",
              maxWidth: "440px",
              marginBottom: "32px",
            }}
          >
            {product.tagline}
          </p>

          <p
            style={{
              fontFamily: '"TT Norms Pro", sans-serif',
              fontWeight: 700,
              fontSize: "20px",
              letterSpacing: "0.02em",
              marginBottom: "40px",
            }}
          >
            {PRICE_PLACEHOLDER}
          </p>

          <div className="flex flex-col gap-4" style={{ maxWidth: "320px" }}>
            <button
              className="w-full transition-opacity duration-300 hover:opacity-80"
              style={{
                background: "#211B16",
                color: "#F4F1EC",
                fontFamily: '"TT Norms Pro", sans-serif',
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "0.18em",
                padding: "18px 24px",
              }}
            >
              AGREGAR AL CARRITO
            </button>

            <a
              href="#detalles"
              className="w-full text-center hover-line"
              style={{
                fontFamily: '"TT Norms Pro", sans-serif',
                fontWeight: 400,
                fontSize: "11px",
                letterSpacing: "0.18em",
                color: "rgba(33,27,22,0.6)",
                padding: "8px 0",
              }}
            >
              VER DETALLES
            </a>
          </div>
        </div>
      </section>

      {/* ── GALERÍA EDITORIAL ────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "clamp(64px, 8vw, 120px)",
          paddingBottom: "clamp(64px, 8vw, 120px)",
          paddingLeft: "var(--section-px, clamp(24px, 5vw, 80px))",
          paddingRight: "var(--section-px, clamp(24px, 5vw, 80px))",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {([
            ["editorial", shots.editorial],
            ["detail", shots.detail],
            ["lifestyle", shots.lifestyle],
            ["product", shots.product],
          ] as const)
            .filter(([, src]) => Boolean(src))
            .map(([kind, src]) => (
              <div key={kind} className="relative" style={{ aspectRatio: "4/5" }}>
                <Image
                  src={src as string}
                  alt={`${product.name} — ${kind}`}
                  fill
                  sizes="(max-width: 767px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
        </div>
      </section>

      {/* ── DETALLES ──────────────────────────────────────────────── */}
      <section
        id="detalles"
        style={{
          borderTop: "1px solid rgba(33,27,22,0.1)",
          paddingTop: "clamp(64px, 8vw, 120px)",
          paddingBottom: "clamp(64px, 8vw, 120px)",
          paddingLeft: "var(--section-px, clamp(24px, 5vw, 80px))",
          paddingRight: "var(--section-px, clamp(24px, 5vw, 80px))",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
          {detailBlocks.map((block) => (
            <div key={block.label}>
              <p
                style={{
                  fontFamily: '"TT Norms Pro", sans-serif',
                  fontWeight: 700,
                  fontSize: "13px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginBottom: "10px",
                }}
              >
                {block.label}
              </p>
              <p
                style={{
                  fontFamily: '"TT Norms Pro", sans-serif',
                  fontSize: "13px",
                  lineHeight: 1.7,
                  color: "rgba(33,27,22,0.6)",
                }}
              >
                {block.copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCTOS RELACIONADOS ───────────────────────────────── */}
      {related.length > 0 && (
        <section
          style={{
            borderTop: "1px solid rgba(33,27,22,0.1)",
            paddingTop: "clamp(64px, 8vw, 120px)",
            paddingBottom: "clamp(80px, 10vw, 140px)",
            paddingLeft: "var(--section-px, clamp(24px, 5vw, 80px))",
            paddingRight: "var(--section-px, clamp(24px, 5vw, 80px))",
          }}
        >
          <p
            style={{
              fontFamily: '"TT Norms Pro", sans-serif',
              fontWeight: 700,
              fontSize: "12px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(33,27,22,0.55)",
              marginBottom: "40px",
            }}
          >
            También te puede interesar
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {related.map((p) => {
              const img = gallery[p.id]?.product;
              return (
                <Link key={p.id} href={`/product/${p.id}`} className="group block">
                  <div
                    className="relative flex items-center justify-center mb-4"
                    style={{ aspectRatio: "4/5", background: "rgba(33,27,22,0.03)" }}
                  >
                    {img ? (
                      <Image
                        src={img}
                        alt={p.name}
                        fill
                        sizes="(max-width: 767px) 50vw, 25vw"
                        style={{ objectFit: "contain", padding: "10%" }}
                      />
                    ) : (
                      <p
                        className="italic"
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "clamp(22px, 3vw, 32px)",
                          color: "rgba(33,27,22,0.14)",
                        }}
                      >
                        {p.name}
                      </p>
                    )}
                  </div>
                  <p
                    style={{
                      fontFamily: '"TT Norms Pro", sans-serif',
                      fontWeight: 700,
                      fontSize: "12px",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "4px",
                    }}
                  >
                    {p.name}
                  </p>
                  <p
                    style={{
                      fontFamily: '"TT Norms Pro", sans-serif',
                      fontSize: "11px",
                      color: "rgba(33,27,22,0.42)",
                    }}
                  >
                    {categoryLabels[p.category]}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
