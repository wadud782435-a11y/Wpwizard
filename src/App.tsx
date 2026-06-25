/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Rituals } from './components/Rituals';
import { Services } from './components/Services';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-red selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Rituals />
        <Services />
        <Features />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
