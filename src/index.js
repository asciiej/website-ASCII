import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Servicos from './components/Servicos/index.js';
import ServicoCards from './components/Servicos/ServicesList.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section className='services'>
    <Servicos />
  </section>
);
