import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ só importa o necessário
import ScrollToAnchor from 'components/ScrollToAnchor/ScrollToAnchor';

import './reset.css';

import Home from 'pages/Home.js';
import Footer from './components/Footer/Footer.js';
import Portfolio from 'pages/Portfolio.js';
import AboutUs from 'pages/AboutUs.js';
import Members from 'pages/Members.js';

import Uberground from 'pages/Uberground';
import JusConsultoria from 'pages/JusConsultoria';
import GeoPhotos from 'pages/GeoPhotos';
import Constru from 'pages/Constru';
import Explore from 'pages/Explore';
import Bibliotecaebooks from 'pages/Bibliotecaebooks';
import Asciiplay from 'pages/Asciiplay';
import Innovare from 'pages/Innovare';

import Noticias from './components/Explore/Noticias/Noticias';
import ExplorarNoticias from './pages/ExploreNoticias';
import NoticiaIndividual from './pages/NewsPage';

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
        <Route path="/portfolio/geo-photos" element={<GeoPhotos/>} />
        <Route path="/portfolio/constru" element={<Constru/>} />
        <Route path="/portfolio/innovare" element={<Innovare/>}/>
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
