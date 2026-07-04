"use client";

const topOverlay = (
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(0,0,0,0.12)",
      pointerEvents: "none",
      zIndex: 1,
    }}
  >
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: "220px",
        background:
          "linear-gradient(to bottom, rgba(10,8,6,0.72) 0%, rgba(33,27,22,0.30) 55%, transparent 100%)",
      }}
    />
  </div>
);

export default function HeroSlider() {
  return (
    <section style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
          filter: "grayscale(100%)",
        }}
      >
        <source src="/videos/ski-hero-final.mp4" type="video/mp4" />
      </video>
      {topOverlay}
    </section>
  );
}
