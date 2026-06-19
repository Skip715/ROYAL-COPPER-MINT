"use client";

import { useState, useEffect } from "react";

export default function ContactPage() {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <main style={{ fontFamily: "'Georgia', serif", background: "#faf8f5", color: "#1a1a1a" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.25rem 3rem",
        background: "rgba(10,8,6,0.97)",
        borderBottom: "0.5px solid rgba(184,115,51,0.2)",
      }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <span style={{ fontFamily: "'Georgia', serif", fontSize: "1.1rem", letterSpacing: "0.18em", color: "#b87333", textTransform: "uppercase" }}>Royal Copper Mint</span>
        </a>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {[["Home", "/"], ["Shop", "/shop"], ["About", "/about"], ["Blog", "/blog"], ["Contact", "/contact"]].map(([label, href]) => (
            <a key={label} href={href} style={{
              fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", letterSpacing: "0.12em",
              textTransform: "uppercase", color: label === "Contact" ? "#b87333" : "rgba(255,255,255,0.75)",
              textDecoration: "none",
            }}>{label}</a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        background: "#0a0806", paddingTop: "9rem", paddingBottom: "5rem",
        textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 80%, rgba(184,115,51,0.08) 0%, transparent 65%)",
          pointerEvents: "none",
        }} />
        <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#b87333", marginBottom: "1rem" }}>Get in touch</p>
        <h1 style={{
          fontFamily: "'Georgia', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 400, color: "#f5f0eb", margin: "0 0 1.25rem", lineHeight: 1.1,
        }}>
          We'd love to hear from you
        </h1>
        <p style={{
          fontFamily: "system-ui, sans-serif", fontSize: "0.95rem", lineHeight: 1.8,
          color: "rgba(245,240,235,0.5)", maxWidth: "480px", margin: "0 auto",
        }}>
          Whether you have a question about our products, a bespoke commission in mind, or simply want to know more — our team is here.
        </p>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section style={{ background: "#faf8f5", padding: "6rem 3rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 420px", gap: "6rem", alignItems: "start" }}>

          {/* ── FORM ── */}
          <div>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#b87333", marginBottom: "2rem" }}>Send a message</p>

            {submitted ? (
              <div style={{
                padding: "3rem", border: "0.5px solid rgba(184,115,51,0.3)",
                textAlign: "center",
              }}>
                <div style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#b87333" }}>✦</div>
                <h3 style={{ fontFamily: "'Georgia', serif", fontSize: "1.4rem", fontWeight: 400, color: "#1a1a1a", marginBottom: "0.75rem" }}>Message received</h3>
                <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", lineHeight: 1.8, color: "#4a4440" }}>
                  Thank you for reaching out. A member of our team will be in touch within one business day.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {/* Name + Email row */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
                  <div>
                    <label style={{ display: "block", fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6a5f58", marginBottom: "0.5rem" }}>Full name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      style={{
                        width: "100%", padding: "0.85rem 1rem", boxSizing: "border-box",
                        border: "0.5px solid rgba(26,26,26,0.2)", background: "#fff",
                        fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "#1a1a1a",
                        outline: "none",
                      }}
                    />
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6a5f58", marginBottom: "0.5rem" }}>Email address *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      style={{
                        width: "100%", padding: "0.85rem 1rem", boxSizing: "border-box",
                        border: "0.5px solid rgba(26,26,26,0.2)", background: "#fff",
                        fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "#1a1a1a",
                        outline: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label style={{ display: "block", fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6a5f58", marginBottom: "0.5rem" }}>Subject</label>
                  <select
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: "100%", padding: "0.85rem 1rem",
                      border: "0.5px solid rgba(26,26,26,0.2)", background: "#fff",
                      fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: formData.subject ? "#1a1a1a" : "#9a8a7a",
                      outline: "none", appearance: "none",
                      backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23b87333' stroke-width='1.5' fill='none'/%3E%3C/svg%3E\")",
                      backgroundRepeat: "no-repeat", backgroundPosition: "right 1rem center",
                    }}
                  >
                    <option value="" disabled>Select a topic</option>
                    <option value="product">Product enquiry</option>
                    <option value="bespoke">Bespoke commission</option>
                    <option value="order">Order or delivery</option>
                    <option value="wholesale">Wholesale / trade</option>
                    <option value="press">Press & media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: "block", fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6a5f58", marginBottom: "0.5rem" }}>Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us how we can help..."
                    rows={6}
                    style={{
                      width: "100%", padding: "0.85rem 1rem", boxSizing: "border-box",
                      border: "0.5px solid rgba(26,26,26,0.2)", background: "#fff",
                      fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "#1a1a1a",
                      outline: "none", resize: "vertical", lineHeight: 1.7,
                    }}
                  />
                </div>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.7rem", color: "#9a8a7a", margin: 0 }}>
                    We aim to respond within one business day.
                  </p>
                  <button
                    onClick={handleSubmit}
                    style={{
                      padding: "0.9rem 2.5rem",
                      background: "#b87333", border: "none",
                      fontFamily: "system-ui, sans-serif", fontSize: "0.75rem",
                      letterSpacing: "0.15em", textTransform: "uppercase",
                      color: "#0a0806", cursor: "pointer",
                    }}
                  >Send message</button>
                </div>
              </div>
            )}
          </div>

          {/* ── CONTACT INFO PANEL ── */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#b87333", marginBottom: "2rem" }}>Contact information</p>

            {[
              {
                icon: "📍",
                label: "Address",
                lines: ["[Your Street Address]", "[City, Postcode]", "United Kingdom"],
              },
              {
                icon: "📞",
                label: "Telephone",
                lines: ["[+44 (0) 000 000 0000]"],
              },
              {
                icon: "✉️",
                label: "Email",
                lines: ["[hello@royalcoppermint.com]"],
              },
              {
                icon: "🕐",
                label: "Hours",
                lines: ["Monday – Friday: [9am – 5pm]", "Saturday: [10am – 2pm]", "Sunday: Closed"],
              },
            ].map((item, i) => (
              <div key={item.label} style={{
                padding: "1.75rem 0",
                borderBottom: "0.5px solid rgba(26,26,26,0.1)",
                display: "flex", gap: "1.25rem", alignItems: "flex-start",
              }}>
                <span style={{ fontSize: "1.1rem", marginTop: "0.1rem", opacity: 0.7 }}>{item.icon}</span>
                <div>
                  <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#b87333", marginBottom: "0.4rem" }}>{item.label}</p>
                  {item.lines.map(line => (
                    <p key={line} style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", color: "#4a4440", lineHeight: 1.7, margin: 0 }}>{line}</p>
                  ))}
                </div>
              </div>
            ))}

            {/* Social links placeholder */}
            <div style={{ paddingTop: "1.75rem" }}>
              <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "#b87333", marginBottom: "0.85rem" }}>Follow us</p>
              <div style={{ display: "flex", gap: "1rem" }}>
                {["Instagram", "LinkedIn", "X"].map(platform => (
                  <a key={platform} href="#" style={{
                    fontFamily: "system-ui, sans-serif", fontSize: "0.7rem",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    color: "#4a4440", textDecoration: "none",
                    padding: "0.4rem 0.85rem",
                    border: "0.5px solid rgba(26,26,26,0.2)",
                    transition: "border-color 0.2s, color 0.2s",
                  }}>{platform}</a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── BESPOKE BANNER ── */}
      <section style={{
        background: "#0a0806",
        borderTop: "0.5px solid rgba(184,115,51,0.15)",
        borderBottom: "0.5px solid rgba(184,115,51,0.15)",
        padding: "5rem 3rem",
      }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr auto", gap: "3rem", alignItems: "center" }}>
          <div>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#b87333", marginBottom: "0.85rem" }}>Bespoke commissions</p>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 400, color: "#f5f0eb", margin: "0 0 0.85rem", lineHeight: 1.2 }}>
              Looking for something entirely your own?
            </h2>
            <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.9rem", lineHeight: 1.8, color: "rgba(245,240,235,0.5)", margin: 0, maxWidth: "520px" }}>
              We work with private clients, institutions, and collectors to create bespoke copper pieces — custom dies, limited editions, corporate gifts, and commemorative strikes. Every commission is handled with complete discretion.
            </p>
          </div>
          <a href="mailto:[hello@royalcoppermint.com]" style={{
            display: "inline-block", padding: "0.9rem 2rem", whiteSpace: "nowrap",
            border: "0.5px solid rgba(184,115,51,0.4)", color: "#b87333",
            fontFamily: "system-ui, sans-serif", fontSize: "0.7rem",
            letterSpacing: "0.15em", textTransform: "uppercase",
            textDecoration: "none",
          }}>Enquire now</a>
        </div>
      </section>

      {/* ── MAP PLACEHOLDER ── */}
      <section style={{ height: "360px", background: "#e8e2da", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#b87333", marginBottom: "0.5rem" }}>Location</p>
          <p style={{ fontFamily: "'Georgia', serif", fontSize: "1.1rem", color: "#4a4440" }}>Map will appear here once address is confirmed</p>
          <p style={{ fontFamily: "system-ui, sans-serif", fontSize: "0.75rem", color: "#9a8a7a", marginTop: "0.35rem" }}>Google Maps embed · replace placeholder with your address</p>
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
