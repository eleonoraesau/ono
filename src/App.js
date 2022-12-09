import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'
import Renders from './components/renders/Renders';

function App() {
  return (
    <div>
      <div className="main">
        <Navbar />
        <Hero />
        <Renders />
      </div>
    </div>
  );
}

export default App;
