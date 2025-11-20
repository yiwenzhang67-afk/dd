import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PlatformIntro from './components/PlatformIntro';
import Documentaries from './components/Documentaries';
import Founder from './components/Founder';
import GeminiSpirit from './components/GeminiSpirit';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-50 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <PlatformIntro />
        <Documentaries />
        <Founder />
      </main>
      <Footer />
      <GeminiSpirit />
    </div>
  );
};

export default App;