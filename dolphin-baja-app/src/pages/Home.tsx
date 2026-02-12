import React from 'react';
import Hero from '../components/Hero';
import Highlights from '../components/Highlights';
import Services from '../components/Services';
import Value from '../components/Value';

export default function Home() {
  return (
    <main>
      <Hero />
      <Highlights />
      <Services />
      <Value />
    </main>
  );
}