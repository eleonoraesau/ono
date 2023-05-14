import React from 'react'
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero'
import Renders from './components/renders/Renders';
import Photos from './components/photos/Photos';
import About from './components/about/About';

function App() {
  return (
    <div>
      <div className="main">
        <Navbar />
        <div>
        <Hero />
        <Renders />
        </div>
      </div>
      <Photos />
      <About />
    </div>
  );
}

export default App;
