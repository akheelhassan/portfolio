import React from 'react';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer style={{ borderTop: '1px solid var(--glass-border)', padding: '64px 0 32px', background: 'var(--bg-secondary)', marginTop: '64px' }}>
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '48px', marginBottom: '64px' }}>
        <div style={{ flex: '1 1 300px' }}>
          <motion.a 
            whileHover={{ scale: 1.05, textShadow: "0px 0px 8px rgba(6, 182, 212, 0.8)" }} 
            href="#" 
            style={{ fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', display: 'inline-block', marginBottom: '16px' }}
          >
            Akheel <span className="gradient-text">Hassan MP</span>
          </motion.a>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '400px', lineHeight: 1.6 }}>
            Crafting digital experiences that convert, while navigating the global markets with precision.
          </p>
        </div>

        <div style={{ flex: '1 1 200px' }}>
          <h4 style={{ fontSize: '1.1rem', marginBottom: '24px', color: 'var(--text-primary)' }}>Connect</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <li><a href="mailto:akheelmarketing@gmail.com" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={16} /> akheelmarketing@gmail.com</a></li>
            <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}><Linkedin size={16} /> LinkedIn</a></li>
            <li><a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}><Twitter size={16} /> Twitter</a></li>
            <li><a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}><Github size={16} /> GitHub</a></li>
          </ul>
        </div>
      </div>

      <div className="container" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} All rights reserved. Built with React & Framer Motion.
        </p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
