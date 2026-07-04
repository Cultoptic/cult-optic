import Link from "next/link";
import Image from "next/image";
import { Product, categoryLabels } from "@/lib/products";

interface ProductCardProps {
  product: Product;
  large?: boolean;
}

export default function ProductCard({ product, large = false }: ProductCardProps) {
  const hasImage = Boolean(product.image);

  return (
    <Link href={`/catalog/${product.id}`} className="group block">
      {/* Image area */}
      <div
        className="relative overflow-hidden mb-4"
        style={{
          aspectRatio: large ? "16/9" : "3/4",
          background: hasImage ? "#F5F5F0" : "#0A0A0A",
        }}
      >
        {hasImage ? (
          /* Real product photo — white bg, object-contain */
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain", padding: "3%" }}
          />
        ) : (
          /* Serif name placeholder — dark bg */
          <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none">
            <p
              className="font-light italic text-center leading-none px-8"
              style={{
                color: "rgba(196,180,154,0.055)",
                fontFamily: "var(--font-serif)",
                fontSize: large ? "clamp(48px, 8vw, 100px)" : "clamp(40px, 7vw, 80px)",
              }}
            >
              {product.name}
            </p>
          </div>
        )}

        {/* Bottom gradient — only on dark placeholder */}
        {!hasImage && (
          <div
            className="absolute bottom-0 left-0 right-0 h-2/5"
            style={{ background: "linear-gradient(to top, rgba(10,10,10,0.88), transparent)" }}
          />
        )}

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          {product.new && (
            <span
              style={{
                background: "var(--void)",
                color: "var(--snow)",
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "8px",
                letterSpacing: "0.15em",
                padding: "3px 8px",
              }}
            >
              NEW
            </span>
          )}
          {product.archive && (
            <span
              style={{
                border: `1px solid ${hasImage ? "rgba(10,10,10,0.3)" : "rgba(196,180,154,0.35)"}`,
                color: hasImage ? "var(--void)" : "var(--sand)",
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "8px",
                letterSpacing: "0.15em",
                padding: "3px 8px",
              }}
            >
              ARCHIVE
            </span>
          )}
          {product.featured && !product.new && (
            <span
              style={{
                border: `1px solid ${hasImage ? "rgba(10,10,10,0.3)" : "rgba(196,180,154,0.35)"}`,
                color: hasImage ? "var(--void)" : "var(--sand)",
                fontFamily: "var(--font-space), sans-serif",
                fontSize: "8px",
                letterSpacing: "0.15em",
                padding: "3px 8px",
              }}
            >
              FEATURED
            </span>
          )}
        </div>

        {/* Corner brackets */}
        <div
          className="absolute top-4 right-4 w-4 h-4 opacity-20 group-hover:opacity-50 transition-opacity duration-500"
          style={{
            borderTop: `1px solid ${hasImage ? "rgba(10,10,10,0.5)" : "var(--sand)"}`,
            borderRight: `1px solid ${hasImage ? "rgba(10,10,10,0.5)" : "var(--sand)"}`,
          }}
        />
        <div
          className="absolute bottom-4 left-4 w-4 h-4 opacity-20 group-hover:opacity-50 transition-opacity duration-500"
          style={{
            borderBottom: `1px solid ${hasImage ? "rgba(10,10,10,0.5)" : "var(--sand)"}`,
            borderLeft: `1px solid ${hasImage ? "rgba(10,10,10,0.5)" : "var(--sand)"}`,
          }}
        />

        {/* Hover spec overlay — CID + first spec */}
        <div
          className="absolute bottom-0 left-0 right-0 px-5 pb-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: hasImage ? "rgba(245,245,240,0.92)" : "transparent" }}
        >
          <div
            className="flex justify-between items-end pt-3"
            style={{
              borderTop: `1px solid ${hasImage ? "rgba(10,10,10,0.15)" : "rgba(196,180,154,0.15)"}`,
            }}
          >
            <div>
              <p
                style={{
                  color: hasImage ? "rgba(10,10,10,0.5)" : "var(--sand)",
                  fontFamily: "var(--font-space), sans-serif",
                  fontSize: "8px",
                  letterSpacing: "0.22em",
                  marginBottom: "3px",
                }}
              >
                CID
              </p>
              <p
                style={{
                  color: hasImage ? "var(--void)" : "var(--snow)",
                  fontFamily: "var(--font-space), sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.05em",
                }}
              >
                {product.cid}
              </p>
            </div>
            {product.specs[0] && (
              <div className="text-right">
                <p
                  style={{
                    color: hasImage ? "rgba(10,10,10,0.5)" : "var(--sand)",
                    fontFamily: "var(--font-space), sans-serif",
                    fontSize: "8px",
                    letterSpacing: "0.22em",
                    marginBottom: "3px",
                  }}
                >
                  {product.specs[0].label}
                </p>
                <p
                  style={{
                    color: hasImage ? "var(--void)" : "var(--snow)",
                    fontFamily: "var(--font-space), sans-serif",
                    fontSize: "11px",
                  }}
                >
                  {product.specs[0].value}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Info */}
      <div>
        <div className="flex justify-between items-start mb-2">
          <p
            className="italic"
            style={{
              color: "var(--sand)",
              fontFamily: "var(--font-serif)",
              fontSize: "14px",
              letterSpacing: "0.01em",
            }}
          >
            {categoryLabels[product.category]}
          </p>
          <p
            className="font-medium tabular-nums"
            style={{
              color: "var(--snow)",
              fontFamily: "var(--font-space), sans-serif",
              fontSize: "13px",
            }}
          >
            ${product.price}
          </p>
        </div>
        <p
          className="font-semibold mb-1.5 group-hover:text-sand transition-colors duration-300"
          style={{
            color: "var(--snow)",
            fontFamily: "var(--font-space), sans-serif",
            fontSize: "13px",
            letterSpacing: "0.06em",
          }}
        >
          {product.name}
        </p>
        <p
          style={{
            color: "var(--smoke)",
            fontFamily: "var(--font-space), sans-serif",
            fontSize: "11px",
            lineHeight: 1.6,
          }}
        >
          {product.tagline}
        </p>
      </div>
    </Link>
  );
}
