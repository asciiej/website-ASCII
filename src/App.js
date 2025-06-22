import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ só importa o necessário
import ScrollToAnchor from 'components/ScrollToAnchor/ScrollToAnchor';

import './reset.css';

import Home from 'pags/Home.js';
import Footer from './components/Footer/Footer.js';
import Portfolio from 'pags/Portfolio.js';
import AboutUs from 'pags/AboutUs.js';
import Members from 'pags/Members.js';

import Uberground from 'pags/Uberground';
import JusConsultoria from 'pags/JusConsultoria';
import GeoPhotos from 'pags/GeoPhotos';
import Constru from 'pags/Constru';
import Explore from 'pags/Explore';
import Bibliotecaebooks from 'pags/Bibliotecaebooks';
import Asciiplay from 'pags/Asciiplay';

import Noticias from './components/Noticias/Noticias';
import ExplorarNoticias from './pags/ExploreNoticias';
import NoticiaIndividual from './pags/NewsPage';

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/sobre" element={<AboutUs />} />
        <Route path="/membros" element={<Members />} />
        <Route path="/portfolio/uberground" element={<Uberground />} />
        <Route path="/portfolio/jus-consultoria" element={<JusConsultoria />} />
        <Route path="/portfolio/geo-photos" element={<GeoPhotos />} />
        <Route path="/portfolio/constru" element={<Constru />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/Bibliotecaebooks" element={<Bibliotecaebooks />} />
        <Route path="/explore/noticias" element={<ExplorarNoticias />} />
        <Route path="/noticias/:id" element={<NoticiaIndividual />} />
        <Route path="/Asciiplay" element={<Asciiplay />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
