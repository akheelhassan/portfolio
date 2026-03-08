import React from 'react';
import { motion } from 'framer-motion';

const MissionSection = () => {
  return (
    <section id="mission" className="container" style={{ padding: '60px 24px 120px' }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card"
        style={{ padding: '64px', textAlign: 'center', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', top: '-50%', left: '-50%', width: '200%', height: '200%', background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 50%)', pointerEvents: 'none' }} />
        
        <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', position: 'relative', zIndex: 1 }}>Hire a Digital <span className="gradient-text">Marketing Strategist</span></h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 40px', lineHeight: 1.8, position: 'relative', zIndex: 1 }}>
          To leverage my deep understanding of market psychology and compelling digital storytelling to help brands scale effectively, while continuously adapting to global economic trends.
        </p>
        
        <motion.a 
          href="https://wa.me/+971555339017"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ background: 'var(--text-primary)', color: 'var(--bg-primary)', border: 'none', padding: '16px 40px', borderRadius: '100px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', position: 'relative', zIndex: 1, display: 'inline-block', textDecoration: 'none' }}
        >
          Let's Collaborate
        </motion.a>
      </motion.div>
    </section>
  );
};

export default MissionSection;
