import React from 'react';
import './App.css';
import Header from './componentes/header';
import Footer from './componentes/footer';
import Conteudo from './componentes/conteudo';

function App() {
  return (
    <div>
      <Header/>
      <Conteudo/>
      <Footer/>
    </div>
  );
} 

export default App