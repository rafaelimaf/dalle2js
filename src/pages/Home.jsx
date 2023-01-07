import React from 'react';
import Header from '../components/home-components/Header';
import StarterSection from '../components/home-components/StarterSection';
import '../styles/pages/home.css';

export default function Home() {
  return (
    <div data-testid="home-page">
      <Header />
      <StarterSection />
    </div>
  );
}
