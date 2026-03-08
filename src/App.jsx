import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MarketingSection from './components/MarketingSection';
import TradingSection from './components/TradingSection';
import ExperienceSection from './components/ExperienceSection';
import PortfolioSection from './components/PortfolioSection';
import MissionSection from './components/MissionSection';
import VisionSection from './components/VisionSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MarketingSection />
        <TradingSection />
        <ExperienceSection />
        <PortfolioSection />
        <VisionSection />
        <MissionSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
