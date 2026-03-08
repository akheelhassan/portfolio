import React from 'react';
import { motion } from 'framer-motion';
import { Target, Video, Type, Edit3, Globe, Search } from 'lucide-react';

const skills = [
  { icon: <Target size={24} />, title: 'Digital Marketing', desc: 'Data-driven campaigns that convert.' },
  { icon: <Globe size={24} />, title: 'SMO', desc: 'Social Media Optimization for maximum reach.' },
  { icon: <Search size={24} />, title: 'SEO', desc: 'Search Engine Optimization for organic growth.' },
  { icon: <Video size={24} />, title: 'Videography', desc: 'Capturing compelling visual stories.' },
  { icon: <Type size={24} />, title: 'Script Writing', desc: 'Words that engage and persuade.' },
  { icon: <Edit3 size={24} />, title: 'Editing', desc: 'Polished post-production for high retention.' }
];

const MarketingSection = () => {
  return (
    <section id="marketing" className="container">
      <div style={{ textAlign: 'center', marginBottom: '64px' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '16px' }}>Digital <span className="gradient-text">Marketing Services</span></h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>Specialized marketing strategies including Meta ads, content creation, and data-driven ROI growth.</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px' }}>
        {skills.map((skill, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass-card"
            style={{ padding: '32px', textAlign: 'center', flex: '1 1 250px', maxWidth: '350px' }}
            whileHover={{ y: -5, borderColor: 'var(--accent-secondary)' }}
          >
            <div style={{ width: '64px', height: '64px', margin: '0 auto 24px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-secondary)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {skill.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>{skill.title}</h3>
            <p style={{ color: 'var(--text-secondary)' }}>{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MarketingSection;
