"use client";

import { useState, useEffect } from "react";

const articles = [
  {
    id: 1,
    category: "Investment",
    title: "Why copper is the quiet asset class investors are finally noticing",
    excerpt: "For decades, gold and silver dominated the precious metals conversation. But a confluence of structural forces — the energy transition, chronic undersupply, and surging industrial demand — is putting copper firmly on the radar of serious investors.",
    date: "12 June 2026",
    readTime: "6 min read",
    featured: true,
    image: "/ROYAL COPPER MINT BULLION.png",
  },
  {
    id: 2,
    category: "History",
    title: "The Bronze Age was really the Copper Age — and here's why that matters",
    excerpt: "Historians named it after the alloy, but the story begins with a single element. Long before bronze changed warfare and agriculture, copper was being worked by human hands in Anatolia over ten thousand years ago.",
    date: "5 June 2026",
    readTime: "5 min read",
    featured: false,
    image: null,
  },
  {
    id: 3,
    category: "Industry",
    title: "The copper supply gap: what the mining industry isn't telling you",
    excerpt: "Global copper demand is forecast to reach 50 million tonnes annually by 2035. Current mine production stands at roughly 22 million tonnes. The arithmetic is stark — and its implications for physical copper holders are significant.",
    date: "28 May 2026",
    readTime: "7 min read",
    featured: false,
    image: null,
  },
  {
    id: 4,
    category: "Lifestyle",
    title: "The art of collecting copper: what to look for in a premium piece",
    excerpt: "Not all copper bullion is created equal. Surface finish, strike depth, purity certification, and presentation all vary enormously between mints. A guide to building a collection that will hold its beauty as well as its value.",
    date: "19 May 2026",
    readTime: "4 min read",
    featured: false,
    image: null,
  },
  {
    id: 5,
    category: "Investment",
    title: "Electric vehicles and the copper equation: a closer look at the numbers",
    excerpt: "A conventional petrol car contains around 23kg of copper. An electric vehicle requires up to 83kg. Multiply that across the projected 300 million EVs expected on roads by 2030 and the supply challenge becomes visceral.",
    date: "10 May 2026",
    readTime: "5 min read",
    featured: false,
    image: null,
  },
  {
    id: 6,
    category: "History",
    title: "How the Romans built an empire on copper plumbing",
    excerpt: "The word 'plumbing' derives from plumbum — Latin for lead. But it was copper that the Romans truly relied upon for their aqueducts, baths, and domestic water systems. An engineering story that shaped Western civilisation.",
    date: "1 May 2026",
    readTime: "6 min read",
    featured: false,
    image: null,
  },
  {
    id: 7,
    category: "Industry",
    title: "Inside a copper smelter: from ore to 99.9% purity",
    excerpt: "The journey from raw copper ore to the gleaming bar in your hands is a process of extraordinary precision. We trace each step — from open-cut mining and concentration through smelting, refining, and final assay.",
    date: "22 April 2026",
    readTime: "8 min read",
    featured: false,
    image: null,
  },
];

const categories = ["All", "History", "Investment", "Industry", "Lifestyle"];

const categoryColors: Record<string, string> = {
  History: "#7c6a5a",
  Investment: "#b87333",
  Industry: "#5a6e7c",
  Lifestyle: "#6a7c5a",
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const featured = articles[0];
  const filtered = articles.slice(1).filter(a => activeCategory === "All" || a.category === activeCategory);

  return (
    <main style={{ fontFamily: "'Georgia', serif", background: "#faf8f5", color: "#1a1a1a" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.25rem 3rem",
        background: scrollY > 60 ? "rgba(10,8,6,0.97)" : "rgba(10,8,6,0.95)",
        borderBottom: "0.5px solid rgba(184,115,51,0.2)",
        transition: "background 0.4s ease",
      }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Georgia', serif", fontSize: "1.1rem", letterSpacing: "0.18em", color: "#b87333", textTransform: "uppercase" }}>Royal Copper Mint</span>
        </a>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {[["Home", "/"], ["Shop", "/shop"], ["About", "/about"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
            <a key={label} href={href} style={{
              fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em",
              textTransform: "uppercase", color: label === "Blog" ? "#b87333" : "rgba(255,255,255,0.75)",
              textDecoration: "none",
            }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── MASTHEAD ── */}
      <section style={{
        background: "#0a0806",
        paddingTop: "9rem", paddingBottom: "4rem",
        textAlign: "center",
        borderBottom: "0.5px solid rgba(184,115,51,0.2)",
      }}>
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(184,115,51,0.6)", marginBottom: "1rem" }}>
          Est. 2026 · Issue No. 7
        </p>
        <h1 style={{
          fontFamily: "'Georgia', serif", fontSize: "clamp(2.5rem, 6vw, 5rem)",
          fontWeight: 400, color: "#f5f0eb", letterSpacing: "0.04em",
          margin: "0 0 0.75rem",
        }}>
          The Copper Digest
        </h1>
        <div style={{ width: "40px", height: "0.5px", background: "#b87333", margin: "0 auto 1rem" }} />
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.85rem", color: "rgba(245,240,235,0.45)", letterSpacing: "0.06em" }}>
          History · Investment · Industry · Lifestyle
        </p>
      </section>

      {/* ── FEATURED ARTICLE ── */}
      <section style={{ background: "#faf8f5", padding: "5rem 3rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#b87333", marginBottom: "2rem" }}>Featured</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            {/* Image */}
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "#e8e2da" }}>
              <img
                src={featured.image!}
                alt={featured.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              {/* Category badge */}
              <div style={{
                position: "absolute", top: "1.25rem", left: "1.25rem",
                padding: "0.3rem 0.75rem",
                background: "#b87333",
                fontFamily: "system-ui, sans-serif", fontSize: "0.6rem",
                letterSpacing: "0.15em", textTransform: "uppercase", color: "#0a0806",
              }}>{featured.category}</div>
            </div>

            {/* Text */}
            <div>
              <div style={{ display: "flex", gap: "1.5rem", marginBottom: "1.5rem" }}>
                <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.7rem", color: "#9a8a7a" }}>{featured.date}</span>
                <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.7rem", color: "#9a8a7a" }}>{featured.readTime}</span>
              </div>
              <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", fontWeight: 400, color: "#1a1a1a", lineHeight: 1.25, margin: "0 0 1.25rem" }}>
                {featured.title}
              </h2>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.95rem", lineHeight: 1.85, color: "#4a4440", marginBottom: "2rem" }}>
                {featured.excerpt}
              </p>
              <a href="#" style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                fontFamily: "system-ui, sans-serif", fontSize: "0.7rem",
                letterSpacing: "0.15em", textTransform: "uppercase",
                color: "#b87333", textDecoration: "none",
              }}>
                Read article
                <span style={{ fontSize: "1rem", lineHeight: 1 }}>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div style={{ maxWidth: "1100px", margin: "0 auto 0", padding: "0 3rem" }}>
        <div style={{ height: "0.5px", background: "rgba(26,26,26,0.12)" }} />
      </div>

      {/* ── CATEGORY FILTER ── */}
      <section style={{ background: "#faf8f5", padding: "2.5rem 3rem 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.45rem 1.1rem",
                border: activeCategory === cat ? "0.5px solid #b87333" : "0.5px solid rgba(26,26,26,0.2)",
                background: activeCategory === cat ? "#b87333" : "transparent",
                color: activeCategory === cat ? "#faf8f5" : "#4a4440",
                fontFamily: "system-ui, sans-serif", fontSize: "0.7rem",
                letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer", transition: "all 0.2s",
              }}
            >{cat}</button>
          ))}
        </div>
      </section>

      {/* ── ARTICLE GRID ── */}
      <section style={{ background: "#faf8f5", padding: "3rem 3rem 7rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "3rem" }}>
            {filtered.map(article => (
              <article key={article.id} style={{ borderTop: `2px solid ${categoryColors[article.category] || "#b87333"}`, paddingTop: "1.5rem" }}>
                {/* Placeholder image block */}
                <div style={{
                  width: "100%", aspectRatio: "3/2", marginBottom: "1.25rem",
                  background: "#ede8e1",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#b87333", opacity: 0.5 }}>
                    {article.category}
                  </span>
                </div>

                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                  <span style={{
                    fontFamily: "system-ui, sans-serif", fontSize: "0.6rem",
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: categoryColors[article.category] || "#b87333",
                  }}>{article.category}</span>
                  <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", color: "#9a8a7a" }}>{article.readTime}</span>
                </div>

                <h3 style={{ fontFamily: "'Georgia', serif", fontSize: "1.1rem", fontWeight: 400, color: "#1a1a1a", lineHeight: 1.35, margin: "0 0 0.85rem" }}>
                  {article.title}
                </h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.82rem", lineHeight: 1.8, color: "#6a5f58", margin: "0 0 1.25rem" }}>
                  {article.excerpt}
                </p>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", color: "#9a8a7a" }}>{article.date}</span>
                  <a href="#" style={{
                    fontFamily: "system-ui, sans-serif", fontSize: "0.65rem",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "#b87333", textDecoration: "none",
                  }}>Read →</a>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "4rem 0" }}>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "#9a8a7a" }}>No articles in this category yet.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section style={{
        background: "#0a0806",
        padding: "6rem 3rem",
        textAlign: "center",
        borderTop: "0.5px solid rgba(184,115,51,0.15)",
      }}>
        <div style={{ maxWidth: "560px", margin: "0 auto" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#b87333", marginBottom: "1rem" }}>The Copper Digest</p>
          <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 400, color: "#f5f0eb", margin: "0 0 1rem", lineHeight: 1.2 }}>
            Delivered to your inbox, monthly
          </h2>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(245,240,235,0.5)", marginBottom: "2.5rem" }}>
            Copper market insights, investment perspective, and stories from the history of the world's most essential metal.
          </p>
          <div style={{ display: "flex", gap: "0", maxWidth: "420px", margin: "0 auto" }}>
            <input
              type="email"
              placeholder="Your email address"
              style={{
                flex: 1, padding: "0.85rem 1.25rem",
                background: "rgba(245,240,235,0.06)",
                border: "0.5px solid rgba(184,115,51,0.25)",
                borderRight: "none",
                color: "#f5f0eb",
                fontFamily: "system-ui, sans-serif", fontSize: "0.85rem",
                outline: "none",
              }}
            />
            <button style={{
              padding: "0.85rem 1.5rem",
              background: "#b87333", border: "none",
              fontFamily: "system-ui, sans-serif", fontSize: "0.7rem",
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#0a0806", cursor: "pointer", whiteSpace: "nowrap",
            }}>Subscribe</button>
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
