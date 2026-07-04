"use client";

export default function ContactPage() {
  return (
    <div style={{ background: "var(--void)", minHeight: "100vh" }}>
      <section
        className="pt-32 pb-24 px-6 md:px-12"
        style={{ borderBottom: "1px solid rgba(138,138,138,0.12)" }}
      >
        <div className="max-w-screen-xl mx-auto">
          <p
            className="text-xs tracking-[0.35em] mb-6"
            style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
          >
            CONTACT
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
            Let&apos;s
            <br />
            <span style={{ color: "transparent", WebkitTextStroke: "1px var(--sand)" }}>
              talk.
            </span>
          </h1>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {/* Contact info */}
          <div>
            <p
              className="text-xs tracking-[0.3em] mb-12"
              style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
            >
              GET IN TOUCH
            </p>

            <div className="space-y-12">
              {[
                {
                  label: "GENERAL INQUIRIES",
                  value: "hello@cultoptic.com",
                  type: "email",
                },
                {
                  label: "WHOLESALE",
                  value: "wholesale@cultoptic.com",
                  type: "email",
                },
                {
                  label: "PRESS & ATHLETES",
                  value: "press@cultoptic.com",
                  type: "email",
                },
                {
                  label: "HEADQUARTERS",
                  value: "Geneva, Switzerland",
                  type: "text",
                },
              ].map((contact) => (
                <div key={contact.label}>
                  <p
                    className="text-xs tracking-[0.2em] mb-2"
                    style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif", fontSize: "9px" }}
                  >
                    {contact.label}
                  </p>
                  {contact.type === "email" ? (
                    <a
                      href={`mailto:${contact.value}`}
                      className="text-base hover-line transition-colors duration-300"
                      style={{ color: "var(--snow)", fontFamily: "var(--font-space), sans-serif" }}
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p
                      className="text-base"
                      style={{ color: "var(--snow)", fontFamily: "var(--font-space), sans-serif" }}
                    >
                      {contact.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="mt-16">
              <p
                className="text-xs tracking-[0.2em] mb-6"
                style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif", fontSize: "9px" }}
              >
                FOLLOW
              </p>
              <div className="flex gap-6">
                {[
                  { label: "INSTAGRAM", href: "#" },
                  { label: "TIKTOK", href: "#" },
                  { label: "YOUTUBE", href: "#" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="text-xs tracking-[0.15em] hover-line transition-colors duration-300"
                    style={{ color: "var(--smoke)", fontFamily: "var(--font-space), sans-serif" }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div>
            <p
              className="text-xs tracking-[0.3em] mb-12"
              style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif" }}
            >
              SEND A MESSAGE
            </p>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {["FIRST NAME", "LAST NAME"].map((label) => (
                  <div key={label}>
                    <label
                      className="block text-xs tracking-[0.15em] mb-2"
                      style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif", fontSize: "9px" }}
                    >
                      {label}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-transparent border px-4 py-3 text-sm outline-none transition-colors duration-300"
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
              </div>

              {[
                { label: "EMAIL", type: "email" },
                { label: "SUBJECT", type: "text" },
              ].map((field) => (
                <div key={field.label}>
                  <label
                    className="block text-xs tracking-[0.15em] mb-2"
                    style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif", fontSize: "9px" }}
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    className="w-full bg-transparent border px-4 py-3 text-sm outline-none transition-colors duration-300"
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
                  className="block text-xs tracking-[0.15em] mb-2"
                  style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif", fontSize: "9px" }}
                >
                  INQUIRY TYPE
                </label>
                <select
                  className="w-full border px-4 py-3 text-sm outline-none transition-colors duration-300"
                  style={{
                    borderColor: "rgba(138,138,138,0.3)",
                    fontFamily: "var(--font-space), sans-serif",
                    color: "var(--snow)",
                    background: "var(--graphite)",
                  }}
                >
                  <option value="">Select inquiry type</option>
                  <option value="general">General</option>
                  <option value="wholesale">Wholesale</option>
                  <option value="athlete">Athlete / Ambassador</option>
                  <option value="press">Press / Media</option>
                  <option value="support">Product Support</option>
                </select>
              </div>

              <div>
                <label
                  className="block text-xs tracking-[0.15em] mb-2"
                  style={{ color: "var(--sand)", fontFamily: "var(--font-space), sans-serif", fontSize: "9px" }}
                >
                  MESSAGE
                </label>
                <textarea
                  rows={6}
                  placeholder="Your message..."
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
                className="w-full py-4 text-sm tracking-[0.25em] font-medium transition-all duration-300 hover:opacity-80"
                style={{
                  background: "var(--sand)",
                  color: "var(--void)",
                  fontFamily: "var(--font-space), sans-serif",
                }}
              >
                SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
