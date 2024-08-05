'use client';
import Image from 'next/image';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedLocations from '../components/FeaturedLocations';

export default function Home() {
  return (
    <main>
      <div className="Container">
        <div className="w-full h-full font-poppins bg-gray-100 ">
          <Header />
          <Hero />
          <FeaturedLocations />
        </div>
      </div>
    </main>
  );
}
