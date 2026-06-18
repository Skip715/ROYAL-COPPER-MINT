export default function Home() {
  return (
    <main style={{ background: '#F6F2EB', minHeight: '100vh', fontFamily: 'Garamond, Georgia, serif', margin: 0, padding: 0, color: '#2C1810' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, width: '100%', zIndex: 100, background: 'rgba(246,242,235,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(142,87,54,0.15)', boxSizing: 'border-box' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '72px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', border: '2px solid #BF8152', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 'bold', color: '#BF8152', letterSpacing: '0.05em' }}>Cu</div>
            <span style={{ fontSize: '15px', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8E5736', fontWeight: '600' }}>Royal Copper Mint</span>
          </div>
          <div style={{ display: 'flex', gap: '44px', alignItems: 'center' }}>
            {['Shop', 'About', 'Blog', 'Contact'].map(item => (
              <a key={item} href={`/${item.toLowerCase()}`} style={{ color: '#8E5736', textDecoration: 'none', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', opacity: 0.85 }}>{item}</a>
            ))}
            <a href="/shop" style={{ background: '#8E5736', color: '#F6F2EB', padding: '10px 24px', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', borderRadius: '2px' }}>Buy Now</a>
          </div>
        </div>
      </nav>

      {/* PRICE TICKER */}
      <div style={{ paddingTop: '72px', background: '#8E5736' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '10px 60px', display: 'flex', gap: '40px', alignItems: 'center', fontSize: '12px', letterSpacing: '0.18em', color: '#F6F2EB' }}>
          <span style={{ opacity: 0.7 }}>COPPER SPOT PRICE</span>
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}>£8.42 / kg</span>
          <span style={{ color: '#a8e6a3' }}>▲ 0.34% today</span>
          <span style={{ opacity: 0.4 }}>|</span>
          <span style={{ opacity: 0.7 }}>LIVE</span>
          <span style={{ width: '7px', height: '7px', background: '#a8e6a3', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }}></span>
          <span style={{ marginLeft: 'auto', opacity: 0.6 }}>Cu · 29 · 999.9 Fine Copper</span>
        </div>
      </div>

      {/* HERO */}
      <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '80px 60px 60px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center', minHeight: '85vh' }}>
        <div>
          <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#BF8152', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ display: 'inline-block', width: '32px', height: '1px', background: '#BF8152' }}></span>
            Est. 2024 · Premium British Copper
          </p>
          <h1 style={{ fontSize: '68px', fontWeight: '400', lineHeight: 1.05, margin: '0 0 28px', color: '#2C1810', letterSpacing: '-0.01em' }}>
            Own The<br />
            <em style={{ fontStyle: 'italic', color: '#BF8152' }}>Element</em><br />
            of Progress
          </h1>
          <p style={{ fontSize: '17px', color: '#6B4226', lineHeight: 1.75, maxWidth: '440px', marginBottom: '44px', fontFamily: 'Georgia, serif', fontWeight: '400' }}>
            Premium copper bullion and commemorative coins, crafted for investors who understand that the green revolution runs on copper. Cu · 29.
          </p>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href="/shop" style={{ background: '#8E5736', color: '#F6F2EB', padding: '16px 40px', textDecoration: 'none', fontSize: '13px', letterSpacing: '0.2em', textTransform: 'uppercase', borderRadius: '2px' }}>Shop Collection</a>
            <a href="/about" style={{ color: '#8E5736', textDecoration: 'none', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid #BF8152', paddingBottom: '2px' }}>Our Story →</a>
          </div>
          <div style={{ display: 'flex', gap: '48px', marginTop: '60px', paddingTop: '40px', borderTop: '1px solid rgba(142,87,54,0.15)' }}>
            {[['999.9', 'Fine Copper'], ['100%', 'British Made'], ['Live', 'Spot Pricing']].map(([val, label]) => (
              <div key={label}>
                <div style={{ fontSize: '26px', color: '#BF8152', fontWeight: '400' }}>{val}</div>
                <div style={{ fontSize: '11px', color: '#8E5736', letterSpacing: '0.18em', textTransform: 'uppercase', marginTop: '4px' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* COIN */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '420px', height: '420px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(191,129,82,0.12) 0%, transparent 70%)', pointerEvents: 'none' }}></div>
          <div style={{ animation: 'float 4s ease-in-out infinite', position: 'relative', zIndex: 2 }}>
            <img
              src="/ChatGPT_Image_Jun_16__2026__11_37_58_AM.png"
              alt="Royal Copper Mint Coin"
              style={{ width: '380px', height: '380px', objectFit: 'contain', mixBlendMode: 'multiply', animation: 'spin3d 6s linear infinite, glowPulse 4s ease-in-out infinite' }}
            />
          </div>
          <div style={{ width: '200px', height: '16px', background: 'radial-gradient(ellipse, rgba(142,87,54,0.25) 0%, transparent 70%)', borderRadius: '50%', filter: 'blur(8px)', animation: 'shadowPulse 4s ease-in-out infinite', marginTop: '-10px' }}></div>
        </div>
      </section>

      {/* DIVIDER */}
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 60px' }}>
        <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(142,87,54,0.3), transparent)' }}></div>
      </div>

      {/* WHY COPPER */}
      <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '100px 60px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#BF8152', marginBottom: '20px' }}>The Case For Copper</p>
            <h2 style={{ fontSize: '48px', fontWeight: '400', lineHeight: 1.1, color: '#2C1810', margin: 0 }}>Why copper, why now?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
            {[
              { stat: '4×', title: 'The EV Revolution', text: 'Electric vehicles require four times more copper than combustion engines. With global EV adoption accelerating, demand has never been higher.' },
              { stat: '↑40%', title: 'Green Energy Surge', text: 'Solar panels, wind turbines and battery storage systems all depend on copper. Every megawatt of renewable energy needs tonnes of it.' },
              { stat: '2030', title: 'Supply Deficit Ahead', text: 'Analysts project a significant global copper supply deficit by 2030 as mines struggle to keep pace with surging industrial demand.' },
              { stat: 'Cu·29', title: 'Finite & Irreplaceable', text: "No synthetic substitute exists for copper's unique conductivity. Its finite global reserves make it one of the most compelling store of value assets." },
            ].map(card => (
              <div key={card.title} style={{ padding: '32px', background: 'rgba(210,198,184,0.25)', borderRadius: '4px', border: '1px solid rgba(142,87,54,0.1)' }}>
                <div style={{ fontSize: '32px', color: '#BF8152', marginBottom: '12px', fontWeight: '400' }}>{card.stat}</div>
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '10px', color: '#2C1810', letterSpacing: '0.02em' }}>{card.title}</h3>
                <p style={{ fontSize: '14px', color: '#6B4226', lineHeight: 1.7, margin: 0 }}>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section style={{ background: '#2C1810', padding: '100px 0' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 60px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div>
              <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#BF8152', marginBottom: '16px' }}>Our Collection</p>
              <h2 style={{ fontSize: '48px', fontWeight: '400', color: '#F6F2EB', margin: 0, lineHeight: 1.1 }}>Premium Copper Bullion</h2>
            </div>
            <a href="/shop" style={{ color: '#BF8152', textDecoration: 'none', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid #BF8152', paddingBottom: '2px' }}>View All →</a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
            {[
              { name: '500g Copper Bar', subtitle: '999.9 Fine Copper', price: '£42.10', tag: 'Best Seller', img: '/ROYAL_COPPER_MINT_BULLION.png' },
              { name: '100g Copper Bar', subtitle: '999.9 Fine Copper', price: '£8.84', tag: 'Most Popular', img: '/ROYAL_COPPER_MINT_BULLION.png' },
              { name: 'Commemorative Coin', subtitle: 'Limited Edition · 1oz', price: '£9.80', tag: "Collector's Item", img: '/ROYAL_COPPER_MINT_COMMERORATIVE_COIN.png' },
            ].map(product => (
              <div key={product.name} style={{ background: 'rgba(246,242,235,0.05)', border: '1px solid rgba(191,129,82,0.2)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '260px', overflow: 'hidden', position: 'relative' }}>
                  <img src={product.img} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', top: '16px', left: '16px', background: '#BF8152', color: '#F6F2EB', fontSize: '10px', letterSpacing: '0.18em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: '2px' }}>{product.tag}</div>
                </div>
                <div style={{ padding: '28px' }}>
                  <p style={{ fontSize: '11px', color: '#BF8152', letterSpacing: '0.2em', textTransform: 'uppercase', margin: '0 0 8px' }}>{product.subtitle}</p>
                  <h3 style={{ fontSize: '20px', color: '#F6F2EB', fontWeight: '400', margin: '0 0 16px' }}>{product.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '28px', color: '#BF8152', fontWeight: '400' }}>{product.price}</span>
                    <a href="/shop" style={{ border: '1px solid rgba(191,129,82,0.5)', color: '#BF8152', padding: '10px 20px', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', borderRadius: '2px' }}>View →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '40px', padding: '40px', background: 'rgba(191,129,82,0.08)', border: '1px solid rgba(191,129,82,0.2)', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ fontSize: '11px', letterSpacing: '0.3em', color: '#BF8152', textTransform: 'uppercase', margin: '0 0 8px' }}>Bespoke Orders</p>
              <h3 style={{ fontSize: '24px', color: '#F6F2EB', fontWeight: '400', margin: 0 }}>Custom copper pieces, crafted to your specification</h3>
            </div>
            <a href="/contact" style={{ background: '#BF8152', color: '#F6F2EB', padding: '14px 32px', textDecoration: 'none', fontSize: '12px', letterSpacing: '0.18em', textTransform: 'uppercase', borderRadius: '2px', whiteSpace: 'nowrap', marginLeft: '40px' }}>Enquire Now</a>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section style={{ maxWidth: '1300px', margin: '0 auto', padding: '100px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <p style={{ fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', color: '#BF8152', marginBottom: '16px' }}>Intelligence</p>
            <h2 style={{ fontSize: '48px', fontWeight: '400', color: '#2C1810', margin: 0 }}>The Copper Digest</h2>
          </div>
          <a href="/blog" style={{ color: '#8E5736', textDecoration: 'none', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', borderBottom: '1px solid #BF8152', paddingBottom: '2px' }}>All Articles →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '24px' }}>
          {[
            { tag: 'Market Analysis', title: 'Why copper demand is set to double by 2035', excerpt: 'The electrification of transport and energy storage is creating an unprecedented surge in copper demand that mines simply cannot keep pace with.', date: 'June 2026', featured: true },
            { tag: 'Investment', title: 'Copper vs Gold: The case for the industrial metal', excerpt: "While gold captures headlines, copper's fundamental role in modern infrastructure makes it a compelling alternative.", date: 'May 2026', featured: false },
            { tag: 'Industry', title: "Inside the world's largest copper mine", excerpt: 'A deep dive into the Escondida mine in Chile and what its output means for global supply chains.', date: 'May 2026', featured: false },
          ].map((post, i) => (
            <div key={i} style={{ background: post.featured ? 'rgba(210,198,184,0.3)' : 'transparent', border: '1px solid rgba(142,87,54,0.12)', borderRadius: '4px', padding: '32px' }}>
              <p style={{ fontSize: '10px', letterSpacing: '0.28em', color: '#BF8152', textTransform: 'uppercase', margin: '0 0 14px' }}>{post.tag}</p>
              <h3 style={{ fontSize: post.featured ? 24 : 17, fontWeight: '400', color: '#2C1810', lineHeight: 1.3, margin: '0 0 14px' }}>{post.title}</h3>
              {post.featured && <p style={{ fontSize: '15px', color: '#6B4226', lineHeight: 1.7, margin: '0 0 24px' }}>{post.excerpt}</p>}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: post.featured ? 0 : 16, paddingTop: '16px', borderTop: '1px solid rgba(142,87,54,0.12)' }}>
                <span style={{ fontSize: '11px', color: '#BF8152', letterSpacing: '0.1em' }}>{post.date}</span>
                <a href="/blog" style={{ fontSize: '12px', color: '#8E5736', textDecoration: 'none', letterSpacing: '0.1em' }}>Read →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#1A0F08', padding: '60px 0 40px' }}>
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '60px', marginBottom: '60px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '50%', border: '1.5px solid #BF8152', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#BF8152' }}>Cu</div>
                <span style={{ fontSize: '13px', letterSpacing: '0.2em', color: '#BF8152', textTransform: 'uppercase' }}>Royal Copper Mint</span>
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(246,242,235,0.5)', lineHeight: 1.7, maxWidth: '280px' }}>Premium copper bullion and commemorative coins. Own the element of progress.</p>
            </div>
            {[
              { title: 'Products', links: ['500g Copper Bar', '100g Copper Bar', 'Commemorative Coin', 'Bespoke Orders'] },
              { title: 'Company', links: ['About Us', 'Blog', 'Contact', 'FAQs'] },
              { title: 'Legal', links: ['Privacy Policy', 'Terms of Use', 'Shipping Policy'] },
            ].map(col => (
              <div key={col.title}>
                <p style={{ fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase', color: '#BF8152', marginBottom: '20px' }}>{col.title}</p>
                {col.links.map(link => (
                  <a key={link} href="#" style={{ display: 'block', fontSize: '14px', color: 'rgba(246,242,235,0.5)', textDecoration: 'none', marginBottom: '10px' }}>{link}</a>
                ))}
              </div>
            ))}
          </div>
          <div style={{ borderTop: '1px solid rgba(191,129,82,0.15)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'rgba(246,242,235,0.3)', letterSpacing: '0.1em' }}>
            <span>© 2026 Royal Copper Mint · Cu · 29</span>
            <span>Own The Element Of Progress</span>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes spin3d {
          0% { transform: perspective(900px) rotateY(0deg); }
          100% { transform: perspective(900px) rotateY(360deg); }
        }
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 8px 20px rgba(142,87,54,0.2)); }
          50% { filter: drop-shadow(0 12px 40px rgba(191,129,82,0.4)); }
        }
        @keyframes shadowPulse {
          0%, 100% { transform: scaleX(1); opacity: 0.6; }
          50% { transform: scaleX(0.7); opacity: 0.2; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.8); }
        }
        a:hover { opacity: 0.75; }
      `}</style>
    </main>
  )
}
