import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Edvice International',
    role: 'Digital Marketing & Content Lead',
    period: 'Current',
    desc: 'Led comprehensive marketing campaigns from scratch. Handled complete content planning, script writing, high-level videography using an iPhone, and precise editing with CapCut to significantly boost engagement.'
  },
  {
    company: 'Arabian Majlis Atholi',
    role: 'Videography & Marketing',
    period: 'Recent',
    desc: 'Developed visually striking video content and managed social media optimization to capture the dining experience and increase brand visibility.'
  },
  {
    company: 'Car Foodie SK',
    role: 'Social Media Optimizer',
    period: 'Recent',
    desc: 'Drove social media presence and optimization, creating engaging content strategies tailored to the automotive and food niche.'
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="container">
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Digital Marketing & <span className="gradient-text">Trading Experience</span></h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>A timeline of my professional growth, marketing strategies, and campaign execution.</p>
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        {/* Timeline line */}
        <div style={{ position: 'absolute', left: '24px', top: 0, bottom: 0, width: '2px', background: 'rgba(255,255,255,0.1)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              style={{ paddingLeft: '64px', position: 'relative' }}
            >
              {/* Timeline dot */}
              <div style={{ position: 'absolute', left: '16px', top: '8px', width: '18px', height: '18px', borderRadius: '50%', background: 'var(--bg-primary)', border: '4px solid var(--accent-primary)' }} />
              
              <div className="glass-card" style={{ padding: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{exp.role}</h3>
                    <span style={{ fontSize: '1.1rem', color: 'var(--accent-secondary)', fontWeight: 600, display: 'block' }}>{exp.company}</span>
                  </div>
                  <span style={{ padding: '6px 16px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {exp.period}
                  </span>
                </div>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
