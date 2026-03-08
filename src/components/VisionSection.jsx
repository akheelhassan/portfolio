import React from 'react';
import { motion } from 'framer-motion';

const VisionSection = () => {
  return (
    <section id="vision" className="container" style={{ padding: '60px 24px 120px' }}>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <h2 className="section-title">Institutional <span className="gradient-text">Vision</span></h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8 }}>
          In today's digital landscape, educational institutions often rely on purely informational content. To truly connect with your audience, you need to tell compelling stories that resonate emotionally and relate to their daily lives.
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
        {[
          {
            title: "Storytelling Reels",
            description: "Narratives that captivate and build brand identity, moving beyond simple facts to create memorable institutional stories.",
            icon: "📖",
            color: "var(--accent-secondary)"
          },
          {
            title: "Emotional Reels",
            description: "Content that connects on a human level, inspiring prospective students and establishing trust with parents.",
            icon: "❤️",
            color: "var(--accent-primary)"
          },
          {
            title: "Life-Relative Reels",
            description: "Relatable, day-in-the-life perspectives that showcase the authentic reality of your campus and community.",
            icon: "🌱",
            color: "var(--accent-tertiary)"
          }
        ].map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5, borderColor: feature.color, scale: 1.02 }}
            className="glass-card flex-center"
            style={{ padding: '40px', textAlign: 'center', flexDirection: 'column', transition: 'border-color 0.3s' }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{feature.icon}</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>{feature.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.description}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default VisionSection;
