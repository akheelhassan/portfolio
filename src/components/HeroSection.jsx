import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Megaphone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '160px', overflow: 'hidden' }}>
      <div className="glow-blob" style={{ top: '-20%', left: '-10%' }} />
      <div className="glow-blob-secondary" style={{ bottom: '-10%', right: '-10%' }} />
      
      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-secondary)', boxShadow: '0 0 10px var(--accent-secondary)' }} />
            <span style={{ fontSize: '0.875rem', fontWeight: 500, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Available for new opportunities</span>
          </div>
          
          <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', letterSpacing: '-0.03em', marginBottom: '8px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {"Akheel Hassan MP".split(" ").map((word, i) => (
              <span key={i} style={{ display: 'flex', marginRight: i < 2 ? 'clamp(10px, 2vw, 20px)' : '0' }}>
                {word.split("").map((char, j) => (
                  <motion.span
                    key={j}
                    whileHover={{ scale: 1.15, color: 'var(--accent-secondary)', y: -8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    style={{ display: 'inline-block', transformOrigin: 'bottom center', minWidth: char === ' ' ? 'clamp(10px, 2vw, 20px)' : 'auto' }}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', letterSpacing: '-0.02em', marginBottom: '24px', fontWeight: 600 }}>
            Digital Marketing Strategist <span className="gradient-text">& Forex Trader</span>
          </h2>
          
          <p style={{ fontSize: 'clamp(1rem, 4vw, 1.25rem)', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px', padding: '0 16px' }}>
            Based in Dubai. A freelance digital marketing consultant & forex market analyst helping brands scale through data-driven campaigns, iPhone videography, and strategic storytelling.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', padding: '0 16px' }}>
            <motion.a 
              href="#marketing"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '16px 32px', background: 'var(--text-primary)', color: 'var(--bg-primary)', borderRadius: '12px', fontWeight: 600, fontSize: '1.1rem', flex: '1 1 200px', justifyContent: 'center' }}
            >
              <Megaphone size={20} />
              Marketing Value
            </motion.a>
            <motion.a 
              href="#trading"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '16px 32px', borderRadius: '12px', fontWeight: 600, fontSize: '1.1rem', flex: '1 1 200px', justifyContent: 'center' }}
            >
              <BarChart2 size={20} />
              Trading Edge
            </motion.a>
          </div>
        </motion.div>
        
        {/* Decorative elements representing marketing & trading */}
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', top: '10%', left: '-5%', opacity: 0.3 }}
          className="hero-deco-1"
        >
          <div style={{ width: '80px', height: '80px', borderRadius: '16px', background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.2), transparent)', border: '1px solid rgba(139, 92, 246, 0.3)', transform: 'rotate(-15deg)' }} />
        </motion.div>
        
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{ position: 'absolute', bottom: '5%', right: '-5%', opacity: 0.3 }}
          className="hero-deco-2"
        >
          <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(45deg, transparent, rgba(6, 182, 212, 0.2))', border: '1px solid rgba(6, 182, 212, 0.3)' }} />
        </motion.div>

        <style>{`
          @media (min-width: 768px) {
            .hero-deco-1 { top: 20% !important; left: 5% !important; opacity: 0.5 !important; }
            .hero-deco-1 > div { width: 120px !important; height: 120px !important; borderRadius: 24px !important; }
            .hero-deco-2 { bottom: 10% !important; right: 5% !important; opacity: 0.5 !important; }
            .hero-deco-2 > div { width: 150px !important; height: 150px !important; }
          }
        `}</style>
      </div>
    </section>
  );
};

export default HeroSection;
