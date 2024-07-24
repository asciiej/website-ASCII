import React from 'react';
import {Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Componente/Header.js';
import Servicos from './Componente/Servicos/Servicos.js'
import Footer from './Componente/footer.js';
import Mvv from './Componente/mvv.js';
import Presentation from './Componente/Presentation.js';
import AgendarReuniao from './Componente/AgendarReuniao/AgendarReuniao.js'
import PagContato from './Componente/PagContato/Pagcontato.js';

function App() {
  return (
    <Router>
      <Header/> 
      <Presentation/>
      <Servicos/>
      <Mvv/>
      <AgendarReuniao/>
      <Footer/>
      {/*
      <PagContato/>
      */}
    </Router>
  );
}

export default App;