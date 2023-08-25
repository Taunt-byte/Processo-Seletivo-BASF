import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Herois from '@/herois/page';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Herois/>
      <Footer />
    </div>
  );
}

