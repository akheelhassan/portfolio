import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Edvice International',
    category: 'End-to-End Content Creation',
    stats: 'Script, Video & Edits',
    link: 'https://www.instagram.com/edvice.international?igsh=MTNndjlmbGh6aHV5Yg==',
    desc: 'Complete workflow from content planning and scripting to videography using an iPhone and advanced professional editing with CapCut.',
    color: 'var(--accent-primary)'
  },
  {
    title: 'Arabian Majlis Atholi',
    category: 'Marketing Strategy & Videography',
    stats: 'Brand Growth',
    link: 'https://www.instagram.com/arabian_majlis_atholi?igsh=a2s2OTBzZnBtNTFk',
    desc: 'Visually engaging marketing that captures the essence of the dining experience.',
    color: 'var(--accent-secondary)'
  },
  {
    title: 'Car Foodie SK',
    category: 'Social Media Management',
    stats: 'Engagement Optimization',
    link: 'https://www.instagram.com/car_foodie_sk?igsh=end1ZDM3NnFobTNx',
    desc: 'Driving social media presence and optimization within the dynamic food and automotive niche.',
    color: 'var(--accent-tertiary)'
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" style={{ background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.05) 0%, var(--bg-primary) 100%)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Digital Marketing Portfolio & <span className="gradient-text">Case Studies</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>A showcase of results-driven marketing campaigns, social media optimization, and analytical projects.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-card"
              style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
              whileHover={{ y: -10 }}
            >
              <div style={{ height: '200px', background: `linear-gradient(45deg, rgba(20,20,20,1), ${project.color}40)`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, transparent 0%, rgba(10,10,10,0.8) 100%)' }} />
                <span style={{ fontSize: '4rem', opacity: 0.1, color: '#fff', fontWeight: 800 }}>{index + 1}</span>
              </div>
              <div style={{ padding: '32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.9rem', color: project.color, fontWeight: 600, marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{project.category}</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem', lineHeight: 1.6 }}>{project.desc}</p>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: '100px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    {project.stats}
                  </span>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.7, transition: 'opacity 0.2s', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.opacity = 1} onMouseLeave={(e) => e.target.style.opacity = 0.7}>
                    View <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
