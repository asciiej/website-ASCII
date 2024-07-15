import React from 'react';
import {Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Componente/Header.js';
import Servicos from './Componente/Servicos/Servicos.js'
import Footer from './Componente/footer.js';
import Mvv from './Componente/mvv.js';
import Presentation from './Componente/Presentation.js';

// TESTES 

function App() {
  return (
    <Router>
      <Header/>
      <Presentation/>
      <Servicos/>
      <Mvv/>
      <Footer/>
    </Router>
  );
}

export default App;