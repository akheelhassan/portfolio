import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, ShieldCheck, BarChart2, CheckCircle, Brain } from 'lucide-react';

const TradingSection = () => {
  return (
    <section id="trading" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, rgba(139, 92, 246, 0.05) 100%)' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '64px', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ width: '100%', maxWidth: '600px', justifySelf: 'center' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '100px', marginBottom: '24px', color: 'var(--accent-tertiary)' }}>
            <TrendingUp size={16} />
            <span style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>Trading Vision & Experience</span>
          </div>
          
          <h2 style={{ fontSize: '3rem', marginBottom: '24px' }}>Trading Vision & <span className="gradient-text">Life Experience</span></h2>
          
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '32px', lineHeight: 1.8 }}>
            Trading for me is an ongoing journey of learning and life experience rather than just a pursuit of expertise. My approach is heavily influenced by the lessons from classic literature and rigorous analytical methods.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: 'var(--accent-secondary)', marginTop: '4px' }}><ShieldCheck size={24} /></div>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Reminiscences of a Stock Operator</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Applying the timeless psychological insights and strategic techniques learned from the classic text to navigate market sentiments.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <div style={{ color: 'var(--accent-tertiary)', marginTop: '4px' }}><AlertTriangle size={24} /></div>
              <div>
                <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Volume Price Analysis (VPA)</h4>
                <p style={{ color: 'var(--text-secondary)' }}>Following VPA techniques to truly decode market dynamics and understand the story behind the charts.</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ width: '100%', maxWidth: '600px', justifySelf: 'center' }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                title: "Smart Money Concepts (SMC)",
                desc: "Understanding institutional footprints, market structure, and liquidity traps.",
                icon: <ShieldCheck size={28} />,
                color: "var(--accent-secondary)"
              },
              {
                title: "Volume Price Analysis (VPA)",
                desc: "Validating price action behavior through real volume data and historical context.",
                icon: <BarChart2 size={28} />,
                color: "var(--accent-primary)"
              },
              {
                title: "Psychology & Discipline",
                desc: "Maintaining emotional equilibrium and trading on probabilities, not predictions.",
                icon: <Brain size={28} />,
                color: "var(--accent-tertiary)"
              }
            ].map((concept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="glass-card"
                style={{
                  padding: '24px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '20px',
                  borderLeft: `4px solid ${concept.color}`
                }}
              >
                <div style={{ color: concept.color, marginTop: '4px', background: 'rgba(255,255,255,0.05)', padding: '12px', borderRadius: '12px' }}>
                  {concept.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '8px', color: 'var(--text-primary)' }}>{concept.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>{concept.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingSection;
