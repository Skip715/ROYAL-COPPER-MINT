export default function Home() {
  return (
    <main style={{
      background: '#0a0602',
      minHeight: '100vh',
      color: '#e8d5a3',
      fontFamily: 'Georgia, serif',
      margin: 0,
      padding: 0
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 100,
        padding: '20px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid rgba(200,130,40,0.15)',
        background: 'rgba(10,6,2,0.9)',
        backdropFilter: 'blur(10px)',
        boxSizing: 'border-box'
      }}>
        <div style={{ fontSize: '22px', letterSpacing: '0.2em', color: '#c8822a' }}>
          ROYAL COPPER MINT
        </div>
        <div style={{ display: 'flex', gap: '40px', fontSize: '13px', letterSpacing: '0.15em' }}>
          {['SHOP', 'ABOUT', 'BLOG', 'CONTACT'].map(item => (
            <a key={item} href={`/${item.toLowerCase()}`} style={{
              color: '#a07040',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>{item}</a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '80px'
      }}>
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(200,100,20,0.12) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }} />

        {/* Live Price Ticker */}
        <div style={{
          background: 'rgba(200,130,40,0.08)',
          border: '1px solid rgba(200,130,40,0.25)',
          borderRadius: '4px',
          padding: '10px 28px',
          marginBottom: '50px',
          fontSize: '12px',
          letterSpacing: '0.2em',
          color: '#c8822a',
          display: 'flex',
          gap: '30px',
          alignItems: 'center'
        }}>
          <span style={{ color: '#a07040' }}>COPPER SPOT</span>
          <span style={{ color: '#e8b060', fontWeight: 'bold' }}>£8.42 / kg</span>
          <span style={{ color: '#6ab04c' }}>▲ 0.34%</span>
          <span style={{ color: '#555', margin: '0 5px' }}>|</span>
          <span style={{ color: '#a07040' }}>LIVE</span>
          <span style={{
            width: '8px', height: '8px',
            background: '#6ab04c',
            borderRadius: '50%',
            display: 'inline-block',
            animation: 'pulse 2s infinite'
          }} />
        </div>

        {/* Coin */}
        <div style={{
          width: '280px',
          height: '280px',
          marginBottom: '50px',
          filter: 'drop-shadow(0 0 40px rgba(200,110,20,0.5))',
          animation: 'float 3.8s ease-in-out infinite'
        }}>
          <div style={{
            width: '280px',
            height: '280px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #b87333 0%, #da8a45 30%, #f0a850 50%, #da8a45 70%, #b87333 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '80px',
            fontWeight: 'bold',
            color: 'rgba(120,60,10,0.6)',
            letterSpacing: '-2px',
            boxShadow: 'inset 0 0 30px rgba(0,0,0,0.3), 0 0 60px rgba(200,110,20,0.4)',
            animation: 'spin3d 5s linear infinite'
          }}>
            Cu
          </div>
        </div>

        {/* Shadow */}
        <div style={{
          width: '180px', height: '16px',
          background: 'radial-gradient(ellipse, rgba(160,75,10,0.4) 0%, transparent 70%)',
          borderRadius: '50%',
          marginBottom: '50px',
          filter: 'blur(6px)',
          animation: 'shadowPulse 3.8s ease-in-out infinite'
        }} />

        {/* Headline */}
        <h1 style={{
          fontSize: '56px',
          fontWeight: '400',
          letterSpacing: '0.08em',
          textAlign: 'center',
          margin: '0 0 20px',
          lineHeight: 1.2,
          color: '#e8d5a3',
          textTransform: 'uppercase'
        }}>
          Own The Element<br />
          <span style={{ color: '#c8822a' }}>Of Progress</span>
        </h1>

        <p style={{
          fontSize: '16px',
          color: '#806040',
          letterSpacing: '0.1em',
          textAlign: 'center',
          maxWidth: '500px',
          lineHeight: 1.8,
          marginBottom: '50px'
        }}>
          Premium copper bullion and commemorative coins.<br />
          Invest in the metal that powers civilisation.
        </p>

        <div style={{ display: 'flex', gap: '20px' }}>
          <a href="/shop" style={{
            background: 'linear-gradient(135deg, #c8822a, #a06520)',
            color: '#fff8f0',
            padding: '16px 40px',
            textDecoration: 'none',
            fontSize: '13px',
            letterSpacing: '0.2em',
            borderRadius: '2px',
            transition: 'all 0.3s'
          }}>SHOP NOW</a>
          <a href="/about" style={{
            border: '1px solid rgba(200,130,40,0.4)',
            color: '#c8822a',
            padding: '16px 40px',
            textDecoration: 'none',
            fontSize: '13px',
            letterSpacing: '0.2em',
            borderRadius: '2px'
          }}>OUR STORY</a>
        </div>
      </section>

      {/* Why Copper Section */}
      <section style={{
        padding: '120px 60px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <p style={{ color: '#c8822a', letterSpacing: '0.3em', fontSize: '12px', marginBottom: '20px' }}>
          Cu · 29 · THE ELEMENT OF PROGRESS
        </p>
        <h2 style={{
          fontSize: '42px',
          fontWeight: '400',
          letterSpacing: '0.05em',
          marginBottom: '60px',
          color: '#e8d5a3'
        }}>
          Why Copper?
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '40px',
          textAlign: 'left'
        }}>
          {[
            {
              title: 'The EV Revolution',
              text: 'Electric vehicles use 4× more copper than combustion engines. With EV adoption accelerating globally, demand has never been higher.'
            },
            {
              title: 'Green Energy',
              text: 'Solar panels, wind turbines and energy storage all require vast quantities of copper. The green transition runs on copper.'
            },
            {
              title: 'Finite Supply',
              text: 'Global copper reserves are finite while demand surges. Analysts predict significant supply deficits by 2030.'
            }
          ].map(card => (
            <div key={card.title} style={{
              padding: '40px',
              border: '1px solid rgba(200,130,40,0.15)',
              borderRadius: '4px',
              background: 'rgba(200,130,40,0.03)'
            }}>
              <div style={{
                width: '40px', height: '2px',
                background: '#c8822a',
                marginBottom: '24px'
              }} />
              <h3 style={{
                fontSize: '18px',
                fontWeight: '400',
                letterSpacing: '0.05em',
                marginBottom: '16px',
                color: '#e8d5a3'
              }}>{card.title}</h3>
              <p style={{
                fontSize: '14px',
                color: '#806040',
                lineHeight: '1.8'
              }}>{card.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products Section */}
      <section style={{
        padding: '80px 60px 120px',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        <p style={{ color: '#c8822a', letterSpacing: '0.3em', fontSize: '12px', marginBottom: '20px' }}>
          OUR COLLECTION
        </p>
        <h2 style={{
          fontSize: '42px',
          fontWeight: '400',
          letterSpacing: '0.05em',
          marginBottom: '60px',
          color: '#e8d5a3'
        }}>
          Featured Products
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '30px'
        }}>
          {[
            { name: '500g Copper Bar', weight: '500g', price: '£42.10', purity: '999.9 Fine Copper' },
            { name: '100g Copper Bar', weight: '100g', price: '£8.84', purity: '999.9 Fine Copper' },
            { name: '1oz Commemorative Coin', weight: '31.1g', price: '£9.80', purity: 'Cu · 29 Edition' }
          ].map(product => (
            <div key={product.name} style={{
              border: '1px solid rgba(200,130,40,0.2)',
              borderRadius: '4px',
              padding: '40px 30px',
              background: 'rgba(200,130,40,0.02)',
              transition: 'all 0.3s'
            }}>
              <div style={{
                width: '120px', height: '120px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #8B4513, #c8822a, #e8a840, #c8822a, #8B4513)',
                margin: '0 auto 30px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                color: 'rgba(255,255,255,0.4)',
                letterSpacing: '0.1em'
              }}>
                {product.weight}
              </div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '400',
                letterSpacing: '0.08em',
                marginBottom: '8px',
                color: '#e8d5a3'
              }}>{product.name}</h3>
              <p style={{
                fontSize: '12px',
                color: '#806040',
                letterSpacing: '0.1em',
                marginBottom: '20px'
              }}>{product.purity}</p>
              <p style={{
                fontSize: '24px',
                color: '#c8822a',
                marginBottom: '24px',
                fontWeight: '300'
              }}>{product.price}</p>
              <a href="/shop" style={{
                display: 'block',
                border: '1px solid rgba(200,130,40,0.4)',
                color: '#c8822a',
                padding: '12px',
                textDecoration: 'none',
                fontSize: '12px',
                letterSpacing: '0.2em',
                borderRadius: '2px'
              }}>ADD TO CART</a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: '1px solid rgba(200,130,40,0.1)',
        padding: '40px 60px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#504030',
        fontSize: '12px',
        letterSpacing: '0.1em'
      }}>
        <span>ROYAL COPPER MINT · Cu · 29</span>
        <span>OWN THE ELEMENT OF PROGRESS</span>
        <span>© 2026</span>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-16px); }
        }
        @keyframes spin3d {
          0% { transform: perspective(800px) rotateY(0deg); }
          100% { transform: perspective(800px) rotateY(360deg); }
        }
        @keyframes shadowPulse {
          0%, 100% { transform: scaleX(1); opacity: 0.5; }
          50% { transform: scaleX(0.7); opacity: 0.2; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        a:hover { opacity: 0.8; }
      `}</style>
    </main>
  )
}