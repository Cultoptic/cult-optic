import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Cult Optic",
  description: "The story behind Cult Optic. Cold luxury eyewear built for outdoor athletes.",
};

export default function AboutPage() {
  return (
    <div style={{ background: "var(--void)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="pt-32 pb-24 px-6 md:px-12 relative overflow-hidden"
        style={{ borderBottom: "1px solid rgba(138,138,138,0.12)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{ background: "linear-gradient(135deg, var(--deep-blue) 0%, transparent 60%)" }}
        />
        <div className="max-w-screen-xl mx-auto relative">
          <p
            className="text-xs tracking-[0.35em] mb-6"
            style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
          >
            ABOUT
          </p>
          <h1
            className="text-6xl md:text-8xl font-bold mb-8"
            style={{
              color: "var(--snow)",
              fontFamily: "var(--font-space), sans-serif",
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Born on
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: "1px var(--sand)" }}>
              the mountain.
            </span>
          </h1>
          <p
            className="text-lg max-w-xl leading-relaxed"
            style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
          >
            Cult Optic was founded by athletes who were tired of choosing between performance and aesthetics. We build eyewear for people who push limits — and care deeply about how they look doing it.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          <div>
            <div
              className="w-full relative"
              style={{ aspectRatio: "4/3", background: "var(--graphite)" }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-xs tracking-[0.4em] opacity-20"
                  style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
                >
                  FOUNDERS PHOTO PLACEHOLDER
                </p>
              </div>
              <div className="absolute top-4 left-4 w-6 h-6" style={{ borderTop: "1px solid rgba(196,180,154,0.4)", borderLeft: "1px solid rgba(196,180,154,0.4)" }} />
              <div className="absolute bottom-4 right-4 w-6 h-6" style={{ borderBottom: "1px solid rgba(196,180,154,0.4)", borderRight: "1px solid rgba(196,180,154,0.4)" }} />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p
              className="text-xs tracking-[0.3em] mb-8"
              style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
            >
              THE ORIGIN
            </p>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
            >
              It started on a backcountry run in the Chamonix Valley. Three athletes, one bad pair of goggles, and a near-miss in flat light. That day, the Cult Optic idea was born: never compromise on optics.
            </p>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
            >
              We spent two years working with optical engineers and material scientists to develop lenses that perform at altitude, in salt water, and in everything between. The result is a collection built on the principle that &ldquo;good enough&rdquo; isn&apos;t a value we hold.
            </p>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
            >
              Today, Cult Optic is worn by freeride athletes, professional surfers, enduro MTB racers, and kite world champions. But more importantly: by anyone who takes their sport seriously.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-24 px-6 md:px-12"
        style={{ background: "var(--graphite)", borderTop: "1px solid rgba(138,138,138,0.12)" }}
      >
        <div className="max-w-screen-xl mx-auto">
          <p
            className="text-xs tracking-[0.3em] mb-16 text-center"
            style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
          >
            OUR VALUES
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                number: "I",
                title: "Precision First",
                desc: "Every lens is engineered to a specific light condition and activity. We don&apos;t make all-purpose optics because the mountain demands specificity.",
              },
              {
                number: "II",
                title: "Cold Luxury",
                desc: "Performance and aesthetics aren&apos;t opposites. Cold luxury means refined design that doesn&apos;t soften the edges — it sharpens them.",
              },
              {
                number: "III",
                title: "Field-Tested Always",
                desc: "Nothing ships without extensive field testing by athletes in real conditions. Our QA happens on glaciers and in the ocean, not in labs alone.",
              },
            ].map((value) => (
              <div key={value.number} className="border-t pt-8" style={{ borderColor: "rgba(196,180,154,0.2)" }}>
                <p
                  className="text-4xl font-bold mb-6"
                  style={{ color: "rgba(196,180,154,0.15)", fontFamily: "var(--font-space), sans-serif" }}
                >
                  {value.number}
                </p>
                <h3
                  className="text-xl font-bold mb-4"
                  style={{ color: "var(--snow)", fontFamily: "var(--font-space), sans-serif" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: value.desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto">
        <p
          className="text-xs tracking-[0.3em] mb-16"
          style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
        >
          THE TEAM
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Luca Ferretti", role: "Co-Founder / Product", discipline: "Freeride" },
            { name: "Mara Sundqvist", role: "Co-Founder / Design", discipline: "Surf" },
            { name: "Kai Brandt", role: "Head of Engineering", discipline: "MTB" },
            { name: "Sofia Neves", role: "Athlete Relations", discipline: "Kite" },
          ].map((person) => (
            <div key={person.name}>
              <div
                className="w-full mb-4"
                style={{ aspectRatio: "1", background: "var(--graphite-mid)" }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <p
                    className="text-xs tracking-[0.3em] opacity-20"
                    style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
                  >
                    PHOTO
                  </p>
                </div>
              </div>
              <p
                className="text-sm font-semibold mb-1"
                style={{ color: "var(--snow)", fontFamily: "var(--font-space), sans-serif" }}
              >
                {person.name}
              </p>
              <p
                className="text-xs mb-1"
                style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
              >
                {person.role}
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif", fontSize: "9px", letterSpacing: "0.2em" }}
              >
                {person.discipline.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-24 px-6 md:px-12 text-center"
        style={{ borderTop: "1px solid rgba(138,138,138,0.12)", background: "var(--deep-blue)" }}
      >
        <p
          className="text-xs tracking-[0.3em] mb-6"
          style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
        >
          READY TO EXPLORE
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold mb-10"
          style={{ color: "var(--snow)", fontFamily: "var(--font-space), sans-serif", letterSpacing: "-0.02em" }}
        >
          See the collection.
        </h2>
        <Link
          href="/catalog"
          className="inline-block px-10 py-4 text-xs tracking-[0.25em] font-medium transition-all duration-300 hover:opacity-80"
          style={{
            background: "var(--sand)",
            color: "var(--void)",
            fontFamily: "var(--font-space), sans-serif",
          }}
        >
          SHOP ALL
        </Link>
      </section>
    </div>
  );
}
