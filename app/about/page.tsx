"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutPage() {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main style={{ fontFamily: "'Georgia', serif", background: "#fff", color: "#1a1a1a" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.25rem 3rem",
        background: scrollY > 60 ? "rgba(10,8,6,0.97)" : "transparent",
        borderBottom: scrollY > 60 ? "0.5px solid rgba(184,115,51,0.2)" : "none",
        transition: "background 0.4s ease, border 0.4s ease",
      }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Georgia', serif", fontSize: "1.1rem", letterSpacing: "0.18em", color: "#b87333", textTransform: "uppercase" }}>Royal Copper Mint</span>
        </a>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {[["Home", "/"], ["Shop", "/shop"], ["About", "/about"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
            <a key={label} href={href} style={{
              fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em",
              textTransform: "uppercase", color: label === "About" ? "#b87333" : "rgba(255,255,255,0.75)",
              textDecoration: "none", transition: "color 0.2s",
            }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        position: "relative", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: "#0a0806", overflow: "hidden",
      }}>
        {/* Ambient copper glow */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 60% 50%, rgba(184,115,51,0.12) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        {/* Subtle grain overlay */}
        <div style={{
          position: "absolute", inset: 0, opacity: 0.03,
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }} />

        <div style={{ position: "relative", textAlign: "center", maxWidth: "800px", padding: "0 2rem" }}>
          <p style={{
            fontFamily: "system-ui, sans-serif", fontSize: "0.7rem", letterSpacing: "0.25em",
            textTransform: "uppercase", color: "#b87333", marginBottom: "1.5rem",
          }}>Our story</p>
          <h1 style={{
            fontFamily: "'Georgia', serif", fontSize: "clamp(2.8rem, 6vw, 5rem)",
            fontWeight: 400, color: "#f5f0eb", lineHeight: 1.1, margin: "0 0 2rem",
            letterSpacing: "-0.01em",
          }}>
            Born from a belief that copper deserves reverence
          </h1>
          <p style={{
            fontFamily: "system-ui, sans-serif", fontSize: "1rem", lineHeight: 1.8,
            color: "rgba(245,240,235,0.6)", maxWidth: "520px", margin: "0 auto",
          }}>
            We are a specialist mint dedicated to producing copper bullion of the highest quality — for those who understand that the most extraordinary metal in history has never been more relevant than today.
          </p>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem",
        }}>
          <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(184,115,51,0.6)" }}>Scroll</span>
          <div style={{ width: "0.5px", height: "40px", background: "linear-gradient(to bottom, rgba(184,115,51,0.6), transparent)" }} />
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section style={{ background: "#0a0806", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 3rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>

            {/* Text */}
            <div>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#b87333", marginBottom: "1.25rem" }}>The metal that built the world</p>
              <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 400, color: "#f5f0eb", lineHeight: 1.2, margin: "0 0 1.5rem" }}>
                Ten thousand years of human progress, carried in a single element
              </h2>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(245,240,235,0.6)", marginBottom: "1.25rem" }}>
                From the copper tools of ancient Egypt to the wiring inside every electric vehicle rolling off the line today — no material has shaped civilisation more profoundly, or more quietly, than copper.
              </p>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(245,240,235,0.6)" }}>
                We made this short film to tell that story — because we believe the people who own our bullion should understand exactly what they hold in their hands.
              </p>
            </div>

            {/* Video player */}
            <div style={{ position: "relative" }}>
              {/* Copper frame accent */}
              <div style={{
                position: "absolute", top: "-12px", left: "-12px", right: "12px", bottom: "12px",
                border: "0.5px solid rgba(184,115,51,0.3)",
                pointerEvents: "none", zIndex: 1,
              }} />

              {/*
                VIDEO PLACEHOLDER
                ─────────────────
                Once your documentary video is ready:
                1. Upload the .mp4 file to your /public folder on GitHub
                2. Replace the <div> below with:

                <video
                  controls
                  poster="/your-poster-image.jpg"
                  style={{ width: "100%", display: "block" }}
                >
                  <source src="/your-video-filename.mp4" type="video/mp4" />
                </video>
              */}
              <div style={{
                width: "100%", aspectRatio: "16/9", background: "#161210",
                border: "0.5px solid rgba(184,115,51,0.15)",
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                gap: "1.25rem", cursor: "pointer",
              }}>
                {/* Play button */}
                <div style={{
                  width: "64px", height: "64px", borderRadius: "50%",
                  border: "1px solid rgba(184,115,51,0.5)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <div style={{
                    width: 0, height: 0,
                    borderTop: "10px solid transparent",
                    borderBottom: "10px solid transparent",
                    borderLeft: "18px solid #b87333",
                    marginLeft: "4px",
                  }} />
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#b87333", marginBottom: "0.25rem" }}>
                    The Metal That Built the World
                  </p>
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.7rem", color: "rgba(245,240,235,0.35)" }}>
                    Documentary · 2 min 30 sec
                  </p>
                </div>
                {/* Coming soon badge */}
                <div style={{
                  padding: "0.3rem 0.85rem",
                  border: "0.5px solid rgba(184,115,51,0.3)",
                  fontFamily: "system-ui, sans-serif", fontSize: "0.65rem",
                  letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(184,115,51,0.6)",
                }}>
                  Coming soon
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── THIN COPPER DIVIDER ── */}
      <div style={{ height: "0.5px", background: "linear-gradient(to right, transparent, rgba(184,115,51,0.4), transparent)" }} />

      {/* ── BRAND STORY ── */}
      <section style={{ background: "#faf8f5", padding: "8rem 0" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 3rem" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#b87333", marginBottom: "1.5rem", textAlign: "center" }}>Why we exist</p>

          <p style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", lineHeight: 1.75, color: "#1a1a1a", marginBottom: "2rem", fontStyle: "italic" }}>
            "We started Royal Copper Mint because we looked at the bullion market and saw something missing — copper, presented the way it deserves to be."
          </p>

          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", lineHeight: 1.9, color: "#4a4440", marginBottom: "1.5rem" }}>
            Gold and silver have long enjoyed their place in the collector's cabinet and the investor's portfolio. But copper — older, more essential, and arguably more fascinating — had been left behind. Sold as an industrial commodity rather than the remarkable material it is.
          </p>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", lineHeight: 1.9, color: "#4a4440", marginBottom: "1.5rem" }}>
            We set out to change that. Every bar and coin we produce is struck to exacting standards, finished to a standard that makes the metal's natural beauty impossible to ignore, and presented in packaging that reflects the significance of what's inside.
          </p>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "1rem", lineHeight: 1.9, color: "#4a4440" }}>
            This is not commodity copper. This is copper as it should always have been — a premium asset, a collector's object, and a store of value for those who see what others have overlooked.
          </p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: "#0a0806", padding: "4rem 0", borderTop: "0.5px solid rgba(184,115,51,0.15)", borderBottom: "0.5px solid rgba(184,115,51,0.15)" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 3rem", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", textAlign: "center" }}>
          {[
            ["10,000+", "Years of copper use in human history"],
            ["4×", "More copper in an EV than a petrol car"],
            ["2×", "Projected demand growth by 2035"],
            ["99.9%", "Purity standard of every piece we mint"],
          ].map(([stat, label]) => (
            <div key={stat}>
              <div style={{ fontFamily: "'Georgia', serif", fontSize: "2.2rem", color: "#b87333", marginBottom: "0.5rem" }}>{stat}</div>
              <div style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", lineHeight: 1.5, color: "rgba(245,240,235,0.45)", letterSpacing: "0.04em" }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VALUES / PILLARS ── */}
      <section style={{ background: "#faf8f5", padding: "8rem 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 3rem" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#b87333", marginBottom: "0.75rem" }}>What we stand for</p>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 400, color: "#1a1a1a", margin: 0 }}>Four principles, no exceptions</h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0" }}>
            {[
              {
                number: "I",
                title: "Uncompromising purity",
                body: "Every piece leaves our mint at 99.9% pure copper. We test every batch and will not ship anything that falls short. There are no tiers, no trade-offs.",
              },
              {
                number: "II",
                title: "Precision striking",
                body: "Our dies are machined to tolerances measured in microns. The result is a surface that catches light the way copper was always meant to — deep, warm, and unmistakable.",
              },
              {
                number: "III",
                title: "Considered presentation",
                body: "Packaging is part of the product. Every bar and coin ships in materials chosen to protect and to impress — because the unboxing should feel like the beginning of ownership.",
              },
              {
                number: "IV",
                title: "Transparent provenance",
                body: "We are clear about what we make, how we make it, and where our copper comes from. Bullion is only as trustworthy as the mint behind it.",
              },
            ].map((pillar, i) => (
              <div key={pillar.number} style={{
                padding: "3.5rem",
                borderRight: i % 2 === 0 ? "0.5px solid rgba(26,26,26,0.1)" : "none",
                borderBottom: i < 2 ? "0.5px solid rgba(26,26,26,0.1)" : "none",
              }}>
                <div style={{ fontFamily: "'Georgia', serif", fontSize: "1rem", color: "#b87333", marginBottom: "1rem", fontStyle: "italic" }}>{pillar.number}</div>
                <h3 style={{ fontFamily: "'Georgia', serif", fontSize: "1.25rem", fontWeight: 400, color: "#1a1a1a", marginBottom: "0.85rem" }}>{pillar.title}</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", lineHeight: 1.85, color: "#4a4440", margin: 0 }}>{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-BLEED COPPER IMAGE ── */}
      <section style={{ position: "relative", height: "60vh", overflow: "hidden" }}>
        <img
          src="/ROYAL COPPER MINT BULLION.png"
          alt="Royal Copper Mint bullion bars"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(10,8,6,0.6) 0%, rgba(10,8,6,0.1) 60%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0, display: "flex", alignItems: "center",
          padding: "0 6rem",
        }}>
          <div>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#b87333", marginBottom: "1rem" }}>Crafted to last</p>
            <p style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.5rem, 3vw, 2.4rem)", color: "#f5f0eb", fontWeight: 400, maxWidth: "500px", lineHeight: 1.3 }}>
              Every bar is a permanent record of precision
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#0a0806", padding: "8rem 0", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 3rem" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#b87333", marginBottom: "1.25rem" }}>Own the element</p>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#f5f0eb", lineHeight: 1.15, margin: "0 0 2rem" }}>
            Ready to add copper to your collection?
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.95rem", lineHeight: 1.8, color: "rgba(245,240,235,0.55)", marginBottom: "2.5rem" }}>
            Browse our range of precision-minted bars and coins, or enquire about a bespoke commission.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/shop" style={{
              display: "inline-block", padding: "0.9rem 2.5rem",
              background: "#b87333", color: "#0a0806",
              fontFamily: "system-ui, sans-serif", fontSize: "0.75rem",
              letterSpacing: "0.15em", textTransform: "uppercase",
              textDecoration: "none",
            }}>Shop now</a>
            <a href="/contact" style={{
              display: "inline-block", padding: "0.9rem 2.5rem",
              border: "0.5px solid rgba(184,115,51,0.4)", color: "#b87333",
              fontFamily: "system-ui, sans-serif", fontSize: "0.75rem",
              letterSpacing: "0.15em", textTransform: "uppercase",
              textDecoration: "none",
            }}>Get in touch</a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: "#060504", borderTop: "0.5px solid rgba(184,115,51,0.15)",
        padding: "3rem",
      }}>
        <div style={{
          maxWidth: "1100px", margin: "0 auto",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "1.5rem",
        }}>
          <span style={{ fontFamily: "'Georgia', serif", fontSize: "0.95rem", letterSpacing: "0.18em", color: "#b87333", textTransform: "uppercase" }}>Royal Copper Mint</span>
          <div style={{ display: "flex", gap: "2rem" }}>
            {[["Shop", "/shop"], ["About", "/about"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
              <a key={label} href={href} style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,240,235,0.4)", textDecoration: "none" }}>{label}</a>
            ))}
          </div>
          <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.7rem", color: "rgba(245,240,235,0.25)" }}>© {new Date().getFullYear()} Royal Copper Mint</span>
        </div>
      </footer>

    </main>
  );
}

