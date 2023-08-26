import React from 'react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Herois from '@/herois/page';
import Revista from '@/revista/page';
import Criadores from '@/criadores/page';
import Comentarios from '@/comentario/page';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Revista/>
      <Herois/>
      <Criadores/>
      <Comentarios/>
      <Footer />
    </div>
  );
}

