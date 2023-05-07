import React from 'react';
import Analytics from './components/Analytics';
import Cards from './components/Cards';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Promesa from './components/Promesa';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics /> 
      <Cards />
      <Promesa/>
      <Newsletter />

    </div>
  );
}

export default App;
