import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


import Servicos from './components/Servicos/index.js';
import AgendarReuniao from './components/AgendarReuniao/AgendarReuniao.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <section className='services'>
    <Servicos />
    <AgendarReuniao />
  </section>
);
