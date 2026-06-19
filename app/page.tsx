"use client";

import { useEffect, useRef } from "react";

function SeamlessVideo({ src }: { src: string }) {
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const active = useRef<"a" | "b">("a");

  useEffect(() => {
    const a = videoA.current;
    const b = videoB.current;
    if (!a || !b) return;

    // Preload both
    a.load();
    b.load();

  const CROSSFADE = 1.2; // seconds before end to start crossfade

    const tick = () => {
      const current = active.current === "a" ? a : b;
      const next    = active.current === "a" ? b : a;

      if (!current.duration || isNaN(current.duration)) return;

      const remaining = current.duration - current.currentTime;

      if (remaining <= CROSSFADE && next.paused) {
        next.currentTime = 0;
        next.play().catch(() => {});
        // Crossfade volumes (visual elements handled via opacity)
        current.style.transition = `opacity ${CROSSFADE}s linear`;
        next.style.transition    = `opacity ${CROSSFADE}s linear`;
        current.style.opacity = "0";
        next.style.opacity    = "1";
        active.current = active.current === "a" ? "b" : "a";
      }
    };

    const interval = setInterval(tick, 100);
    a.play().catch(() => {});

    return () => clearInterval(interval);
  }, []);

  const videoStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "center",
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <video ref={videoA} muted playsInline preload="auto" style={{ ...videoStyle, opacity: 1 }}>
        <source src={src} type="video/mp4" />
      </video>
      <video ref={videoB} muted playsInline preload="auto" style={{ ...videoStyle, opacity: 0 }}>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

export default function Home() {
  return (
    <main style={{ margin: 0, padding: 0, fontFamily: "'Garamond', 'EB Garamond', 'Cormorant Garamond', Georgia, serif", background: '#fff', color: '#1a1a1a', overflowX: 'hidden' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 60px', height: '70px', background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ display: 'flex', gap: '36px' }}>
          {['Shop', 'About', 'Blog'].map(item => (
            <a key={item} href={`/${item.toLowerCase()}`} style={{ fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1a1a1a', textDecoration: 'none', fontFamily: 'Arial, sans-serif' }}>{item}</a>
          ))}
        </div>
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B5E3C', fontFamily: 'Arial, sans-serif', fontWeight: '600' }}>Royal Copper Mint</div>
          <div style={{ fontSize: '10px', letterSpacing: '0.2em', color: '#aaa', fontFamily: 'Arial, sans-serif', marginTop: '2px' }}>Cu · 29</div>
        </div>
        <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
          <a href="/contact" style={{ fontSize: '12px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1a1a1a', textDecoration: 'none', fontFamily: 'Arial, sans-serif' }}>Contact</a>
          <a href="/shop" style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff', background: '#1a1a1a', padding: '10px 22px', textDecoration: 'none', fontFamily: 'Arial, sans-serif' }}>Buy Now</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#0a0a0a', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '520px', padding: '0 0 0 7%', flexShrink: 0 }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>Est. 2024 · Premium British Bullion</p>
          <h1 style={{ fontSize: '66px', fontWeight: '400', lineHeight: 1.06, color: '#fff', margin: '0 0 24px', letterSpacing: '0.01em' }}>
            Own The<br />
            <em style={{ fontStyle: 'italic', color: '#D4956A' }}>Element</em><br />
            of Progress
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '44px', fontFamily: 'Georgia, serif' }}>Premium copper bullion and commemorative coins for the modern investor.</p>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <a href="/shop" style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', border: '1px solid rgba(255,255,255,0.55)', padding: '14px 36px', textDecoration: 'none', fontFamily: 'Arial, sans-serif' }}>Shop Collection</a>
            <a href="/about" style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', fontFamily: 'Arial, sans-serif' }}>Our Story →</a>
          </div>
        </div>

        {/* Seamless looping video */}
        <div style={{ position: 'absolute', right: 0, top: 0, width: '58%', height: '100%', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '200px', background: 'linear-gradient(to right, #0a0a0a, transparent)', zIndex: 1, pointerEvents: 'none' }} />
        <SeamlessVideo src="/coin_video_clean_cropped.mp4" />
        </div>

        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 2 }}>
          <div style={{ width: '1px', height: '50px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.4))', animation: 'scrollLine 2s ease-in-out infinite' }} />
        </div>
      </section>

      {/* PRICE TICKER */}
      <div style={{ background: '#1a1a1a', padding: '14px 60px', display: 'flex', gap: '40px', alignItems: 'center' }}>
        <span style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', fontFamily: 'Arial, sans-serif' }}>Copper Spot</span>
        <span style={{ fontSize: '15px', color: '#D4956A', fontFamily: 'Arial, sans-serif', fontWeight: '500' }}>£8.42 / kg</span>
        <span style={{ fontSize: '12px', color: '#7BC67E', fontFamily: 'Arial, sans-serif' }}>▲ 0.34%</span>
        <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
        <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.2em', fontFamily: 'Arial, sans-serif' }}>Live</span>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7BC67E', display: 'inline-block', animation: 'pulse 2s infinite' }} />
        <span style={{ marginLeft: 'auto', fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.15em', fontFamily: 'Arial, sans-serif' }}>Cu · 29 · 999.9 Fine Copper</span>
      </div>

      {/* INTRO */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '120px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }}>
        <div>
          <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#8B5E3C', marginBottom: '24px', fontFamily: 'Arial, sans-serif' }}>The Case For Copper</p>
          <h2 style={{ fontSize: '52px', fontWeight: '400', lineHeight: 1.08, margin: '0 0 28px', color: '#1a1a1a' }}>The metal that<br /><em style={{ fontStyle: 'italic', color: '#8B5E3C' }}>powers</em> our world</h2>
          <p style={{ fontSize: '17px', color: '#555', lineHeight: 1.8, marginBottom: '20px' }}>Copper is the silent engine of the modern world. Every electric vehicle, every wind turbine, every solar panel depends on it. As the green revolution accelerates, demand is surging — yet supply cannot keep pace.</p>
          <p style={{ fontSize: '17px', color: '#555', lineHeight: 1.8, marginBottom: '40px' }}>Royal Copper Mint was founded to offer investors direct access to physical copper bullion — the most consequential metal of our era.</p>
          <a href="/about" style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#1a1a1a', textDecoration: 'none', fontFamily: 'Arial, sans-serif', borderBottom: '1px solid #1a1a1a', paddingBottom: '3px' }}>Discover Our Story →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
          {[
            { stat: '4×', label: 'More copper in an EV than a petrol car' },
            { stat: '↑40%', label: 'Projected demand increase by 2030' },
            { stat: '2030', label: 'Forecast year of critical supply deficit' },
            { stat: '999.9', label: 'Fine copper purity standard' },
          ].map(item => (
            <div key={item.label} style={{ background: '#f8f7f5', padding: '32px 28px' }}>
              <div style={{ fontSize: '36px', color: '#8B5E3C', marginBottom: '10px', fontWeight: '300' }}>{item.stat}</div>
              <div style={{ fontSize: '13px', color: '#777', lineHeight: 1.5, fontFamily: 'Arial, sans-serif' }}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL BLEED — copper bars */}
      <section style={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
        <img src="/ROYAL COPPER MINT BULLION.png" alt="Royal Copper Mint Bullion Bars" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to left, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)' }} />
        <div style={{ position: 'absolute', top: '50%', right: '8%', transform: 'translateY(-50%)', maxWidth: '420px', textAlign: 'right' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '16px', fontFamily: 'Arial, sans-serif' }}>Our Collection</p>
          <h2 style={{ fontSize: '50px', fontWeight: '400', color: '#fff', lineHeight: 1.1, margin: '0 0 20px' }}>Premium<br />Copper Bullion</h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '32px', fontFamily: 'Georgia, serif' }}>Bars of 999.9 fine copper, beautifully struck with the Royal Copper Mint seal.</p>
          <a href="/shop" style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#fff', border: '1px solid rgba(255,255,255,0.5)', padding: '13px 32px', textDecoration: 'none', fontFamily: 'Arial, sans-serif' }}>View Collection</a>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px' }}>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#8B5E3C', marginBottom: '12px', fontFamily: 'Arial, sans-serif' }}>Shop</p>
            <h2 style={{ fontSize: '46px', fontWeight: '400', color: '#1a1a1a', margin: 0 }}>The Collection</h2>
          </div>
          <a href="/shop" style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1a1a1a', textDecoration: 'none', fontFamily: 'Arial, sans-serif', borderBottom: '1px solid #1a1a1a', paddingBottom: '2px' }}>All Products →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {[
            { name: '500g Copper Bar', purity: '999.9 Fine Copper', price: '£42.10', img: '/ROYAL COPPER MINT BULLION.png', tag: 'Best Seller' },
            { name: '100g Copper Bar', purity: '999.9 Fine Copper', price: '£8.84', img: '/ROYAL COPPER MINT BULLION.png', tag: 'Popular' },
            { name: 'Commemorative Coin', purity: 'Limited Edition · 1oz', price: '£9.80', img: '/ROYAL COPPER MINT COMMERORATIVE COIN.png', tag: "Collector's" },
          ].map(product => (
            <div key={product.name} style={{ background: '#fff', border: '1px solid #eee' }}>
              <div style={{ height: '300px', overflow: 'hidden', position: 'relative', background: '#f5f5f5' }}>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '16px', left: '16px', background: '#1a1a1a', color: '#fff', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '5px 12px', fontFamily: 'Arial, sans-serif' }}>{product.tag}</div>
              </div>
              <div style={{ padding: '28px 24px' }}>
                <p style={{ fontSize: '10px', color: '#8B5E3C', letterSpacing: '0.22em', textTransform: 'uppercase', margin: '0 0 8px', fontFamily: 'Arial, sans-serif' }}>{product.purity}</p>
                <h3 style={{ fontSize: '22px', fontWeight: '400', color: '#1a1a1a', margin: '0 0 16px' }}>{product.name}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '26px', color: '#1a1a1a', fontWeight: '300' }}>{product.price}</span>
                  <a href="/shop" style={{ fontSize: '11px', color: '#1a1a1a', textDecoration: 'none', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif', borderBottom: '1px solid #1a1a1a', paddingBottom: '2px' }}>View →</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '2px', background: '#f8f7f5', padding: '50px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #eee' }}>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#8B5E3C', textTransform: 'uppercase', margin: '0 0 10px', fontFamily: 'Arial, sans-serif' }}>Bespoke</p>
            <h3 style={{ fontSize: '30px', color: '#1a1a1a', fontWeight: '400', margin: 0 }}>Custom pieces, crafted to your specification</h3>
          </div>
          <a href="/contact" style={{ fontSize: '11px', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff', background: '#1a1a1a', padding: '14px 32px', textDecoration: 'none', fontFamily: 'Arial, sans-serif', whiteSpace: 'nowrap', marginLeft: '60px' }}>Enquire Now</a>
        </div>
      </section>

      {/* FULL BLEED — commemorative coin */}
      <section style={{ position: 'relative', height: '85vh', overflow: 'hidden' }}>
        <img src="/ROYAL COPPER MINT COMMERORATIVE COIN.png" alt="Royal Copper Mint Commemorative Coin" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', maxWidth: '680px' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>Limited Edition</p>
          <h2 style={{ fontSize: '58px', fontWeight: '400', color: '#fff', lineHeight: 1.08, margin: '0 0 24px' }}>The Commemorative<br /><em style={{ fontStyle: 'italic', color: '#D4956A' }}>Copper Coin</em></h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '36px', fontFamily: 'Georgia, serif' }}>A collector's piece for those who understand the significance of Cu · 29. Hand-finished, limited edition, individually numbered.</p>
          <a href="/shop" style={{ fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#fff', border: '1px solid rgba(255,255,255,0.55)', padding: '14px 40px', textDecoration: 'none', fontFamily: 'Arial, sans-serif' }}>Discover More</a>
        </div>
      </section>

      {/* BLOG */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '100px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '56px' }}>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#8B5E3C', marginBottom: '12px', fontFamily: 'Arial, sans-serif' }}>Intelligence</p>
            <h2 style={{ fontSize: '46px', fontWeight: '400', color: '#1a1a1a', margin: 0 }}>The Copper Digest</h2>
          </div>
          <a href="/blog" style={{ fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#1a1a1a', textDecoration: 'none', fontFamily: 'Arial, sans-serif', borderBottom: '1px solid #1a1a1a', paddingBottom: '2px' }}>All Articles →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '2px' }}>
          {[
            { tag: 'Market Analysis', title: 'Why copper demand is set to double by 2035', excerpt: 'The electrification of transport and energy storage is creating an unprecedented surge in copper demand that mines simply cannot keep pace with. We examine the forces driving the most important commodity story of our generation.', date: 'June 2026', featured: true },
            { tag: 'Investment', title: 'Copper vs Gold: The case for the industrial metal', excerpt: '', date: 'May 2026', featured: false },
            { tag: 'Industry', title: "Inside the world's largest copper mine", excerpt: '', date: 'May 2026', featured: false },
          ].map((post, i) => (
            <div key={i} style={{ background: i === 0 ? '#f8f7f5' : '#fff', border: '1px solid #eee', padding: '40px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <p style={{ fontSize: '10px', letterSpacing: '0.28em', color: '#8B5E3C', textTransform: 'uppercase', margin: '0 0 16px', fontFamily: 'Arial, sans-serif' }}>{post.tag}</p>
                <h3 style={{ fontSize: i === 0 ? 26 : 18, fontWeight: '400', color: '#1a1a1a', lineHeight: 1.3, margin: '0 0 16px' }}>{post.title}</h3>
                {post.featured && <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.75, margin: '0 0 24px', fontFamily: 'Georgia, serif' }}>{post.excerpt}</p>}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '20px', borderTop: '1px solid #eee', marginTop: '20px' }}>
                <span style={{ fontSize: '11px', color: '#aaa', letterSpacing: '0.1em', fontFamily: 'Arial, sans-serif' }}>{post.date}</span>
                <a href="/blog" style={{ fontSize: '11px', color: '#1a1a1a', textDecoration: 'none', letterSpacing: '0.1em', fontFamily: 'Arial, sans-serif' }}>Read →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#111', padding: '70px 60px 40px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px', marginBottom: '60px', paddingBottom: '60px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div>
              <div style={{ fontSize: '13px', letterSpacing: '0.25em', color: '#D4956A', textTransform: 'uppercase', fontFamily: 'Arial, sans-serif', marginBottom: '6px' }}>Royal Copper Mint</div>
              <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.3)', fontFamily: 'Arial, sans-serif', marginBottom: '20px' }}>Cu · 29</div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, maxWidth: '260px', fontFamily: 'Georgia, serif' }}>Premium copper bullion and commemorative coins. Own the element of progress.</p>
            </div>
            {[
              { title: 'Products', links: ['500g Copper Bar', '100g Copper Bar', 'Commemorative Coin', 'Bespoke Orders'] },
              { title: 'Company', links: ['About Us', 'Blog', 'Contact', 'FAQs'] },
              { title: 'Legal', links: ['Privacy Policy', 'Terms of Use', 'Shipping'] },
            ].map(col => (
              <div key={col.title}>
                <p style={{ fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>{col.title}</p>
                {col.links.map(link => (
                  <a key={link} href="#" style={{ display: 'block', fontSize: '14px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: '12px', fontFamily: 'Georgia, serif' }}>{link}</a>
                ))}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.12em', fontFamily: 'Arial, sans-serif' }}>
            <span>© 2026 Royal Copper Mint</span>
            <span>Own The Element Of Progress · Cu · 29</span>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        @keyframes scrollLine {
          0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); }
          100% { opacity: 0; }
        }
        a:hover { opacity: 0.7; }
        * { box-sizing: border-box; }
      `}</style>
    </main>
  );
}
