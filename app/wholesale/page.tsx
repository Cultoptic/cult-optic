"use client";

export default function WholesalePage() {
  return (
    <div style={{ background: "var(--void)", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="pt-32 pb-24 px-6 md:px-12 relative overflow-hidden"
        style={{ borderBottom: "1px solid rgba(138,138,138,0.12)" }}
      >
        <div
          className="absolute inset-0 opacity-8"
          style={{ background: "linear-gradient(135deg, var(--deep-blue) 0%, transparent 50%)" }}
        />
        <div className="max-w-screen-xl mx-auto relative">
          <p
            className="text-xs tracking-[0.35em] mb-6"
            style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
          >
            WHOLESALE / DISTRIBUTION
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
            Carry
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: "1px var(--sand)" }}>
              Cult Optic.
            </span>
          </h1>
          <p
            className="text-lg max-w-xl leading-relaxed"
            style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
          >
            We partner with carefully selected retailers who share our passion for outdoor culture and premium product. If your store is built for athletes, we want to hear from you.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto">
        <p
          className="text-xs tracking-[0.3em] mb-16"
          style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
        >
          PARTNER BENEFITS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Exclusive Territory",
              desc: "We work with one partner per region to protect brand positioning and retail margins.",
            },
            {
              title: "60-Day Payment Terms",
              desc: "Flexible payment terms for established retail partners. Cash flow that works for your business.",
            },
            {
              title: "Co-op Marketing",
              desc: "Joint campaigns, athlete appearances, and digital co-marketing to drive foot traffic.",
            },
            {
              title: "Display & Fixture Program",
              desc: "Cult Optic branded fixtures and POS materials included with qualifying orders.",
            },
            {
              title: "Product Training",
              desc: "Staff training on lens technology, fitting, and sport-specific recommendations.",
            },
            {
              title: "Priority Allocation",
              desc: "First access to new collections, limited editions, and high-demand colorways.",
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="p-8"
              style={{
                border: "1px solid rgba(138,138,138,0.15)",
                background: "var(--graphite)",
              }}
            >
              <div
                className="w-8 h-px mb-6"
                style={{ background: "var(--sand)" }}
              />
              <h3
                className="text-base font-semibold mb-3"
                style={{ color: "var(--snow)", fontFamily: "var(--font-space), sans-serif" }}
              >
                {benefit.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
              >
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section
        className="py-24 px-6 md:px-12"
        style={{ background: "var(--graphite)", borderTop: "1px solid rgba(138,138,138,0.12)" }}
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p
              className="text-xs tracking-[0.3em] mb-8"
              style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
            >
              MINIMUM REQUIREMENTS
            </p>
            <div className="space-y-4">
              {[
                "Annual opening order: $3,000 USD",
                "Dedicated display area (minimum 1m²)",
                "Staff product training (annual)",
                "Specialty outdoor, sport, or lifestyle positioning",
                "Active social media presence",
              ].map((req) => (
                <div key={req} className="flex items-start gap-4">
                  <div className="w-4 h-px mt-3 flex-shrink-0" style={{ background: "var(--sand)" }} />
                  <p
                    className="text-sm"
                    style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
                  >
                    {req}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p
              className="text-xs tracking-[0.3em] mb-8"
              style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
            >
              IDEAL PARTNER PROFILE
            </p>
            <div className="space-y-4">
              {[
                "Snow sports specialty retailers",
                "Surf and board sport shops",
                "Multi-sport outdoor retailers",
                "Premium lifestyle boutiques",
                "Online sport specialty stores",
                "Resort and mountain shops",
              ].map((type) => (
                <div key={type} className="flex items-start gap-4">
                  <div className="w-4 h-px mt-3 flex-shrink-0" style={{ background: "var(--sand)" }} />
                  <p
                    className="text-sm"
                    style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
                  >
                    {type}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="max-w-2xl">
          <p
            className="text-xs tracking-[0.3em] mb-4"
            style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
          >
            APPLY
          </p>
          <h2
            className="text-4xl font-bold mb-12"
            style={{ color: "var(--snow)", fontFamily: "var(--font-space), sans-serif", letterSpacing: "-0.02em" }}
          >
            Start the conversation.
          </h2>

          <div className="space-y-6">
            {[
              { label: "STORE NAME", type: "text", placeholder: "Your store name" },
              { label: "CONTACT NAME", type: "text", placeholder: "Your full name" },
              { label: "EMAIL", type: "email", placeholder: "contact@yourstore.com" },
              { label: "PHONE", type: "tel", placeholder: "+1 (000) 000-0000" },
              { label: "CITY / COUNTRY", type: "text", placeholder: "Geneva, Switzerland" },
              { label: "WEBSITE", type: "url", placeholder: "https://yourstore.com" },
            ].map((field) => (
              <div key={field.label}>
                <label
                  className="block text-xs tracking-[0.2em] mb-2"
                  style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-transparent border px-4 py-3 text-sm text-snow outline-none transition-colors duration-300"
                  style={{
                    borderColor: "rgba(138,138,138,0.3)",
                    fontFamily: "var(--font-space), sans-serif",
                    color: "var(--snow)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--sand)")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(138,138,138,0.3)")}
                />
              </div>
            ))}

            <div>
              <label
                className="block text-xs tracking-[0.2em] mb-2"
                style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
              >
                STORE TYPE
              </label>
              <select
                className="w-full bg-transparent border px-4 py-3 text-sm outline-none transition-colors duration-300"
                style={{
                  borderColor: "rgba(138,138,138,0.3)",
                  fontFamily: "var(--font-space), sans-serif",
                  color: "var(--snow)",
                  background: "var(--graphite)",
                }}
              >
                <option value="">Select store type</option>
                <option value="snow">Snow Sports Specialty</option>
                <option value="surf">Surf / Board Sports</option>
                <option value="outdoor">Outdoor Multi-Sport</option>
                <option value="lifestyle">Premium Lifestyle</option>
                <option value="online">Online Only</option>
                <option value="resort">Resort / Mountain Shop</option>
              </select>
            </div>

            <div>
              <label
                className="block text-xs tracking-[0.2em] mb-2"
                style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
              >
                TELL US ABOUT YOUR STORE
              </label>
              <textarea
                rows={5}
                placeholder="Brief description of your store, customer base, and why you want to carry Cult Optic..."
                className="w-full bg-transparent border px-4 py-3 text-sm outline-none transition-colors duration-300 resize-none"
                style={{
                  borderColor: "rgba(138,138,138,0.3)",
                  fontFamily: "var(--font-space), sans-serif",
                  color: "var(--snow)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "var(--sand)")}
                onBlur={(e) => (e.target.style.borderColor = "rgba(138,138,138,0.3)")}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 text-sm tracking-[0.25em] font-medium transition-all duration-300 hover:opacity-80"
              style={{
                background: "var(--sand)",
                color: "var(--void)",
                fontFamily: "var(--font-space), sans-serif",
              }}
            >
              SUBMIT APPLICATION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
