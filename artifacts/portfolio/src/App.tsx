import React from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import WhyWebsite from '@/components/sections/WhyWebsite';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Portfolio from '@/components/sections/Portfolio';
import WhyChooseMe from '@/components/sections/WhyChooseMe';
import Pricing from '@/components/sections/Pricing';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
      <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
        <Navbar />
        <main className="flex-1 w-full overflow-hidden">
          <Hero />
          <WhyWebsite />
          <Services />
          <About />
          <Portfolio />
          <WhyChooseMe />
          <Pricing />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
