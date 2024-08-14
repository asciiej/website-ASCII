import React from 'react';
import {Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import logo from 'image/logoHorizontal.png';
import back from 'image/back.png';
import instagram from 'image/instagram.png';
import Linkedin from 'image/linkedin.png' 
import Git from 'image/github.png';

import './Footer.css';
import Background from 'image/mapa-fundo.svg';

function Footer() {
  return (
      <footer className="footer">
          <div className='footer__wrapper'
          style={{backgroundImage: `url(${Background})`}}>
            <div className='footer__container'>
              <h3>Nossos Serviços</h3>
              <ul>
                <li> <a href="#services-header">Criação de aplicativos</a> </li>
                <li> <a href="#services-header">Desenvolvimento Web</a>  </li>
                <li> <a href="#services-header">Modelagem de Sistemas</a>  </li>
                <li> <a href="#services-header">Consultoria</a> </li>
              </ul>
            </div>

            <a href="#logo-header"><img src={logo} alt="" className="logo" /></a>
            <div className='footer__container'>
              <h3>Informações de Contato</h3>
              <ul>
                <li><Link to="/portfolio">Portfolio</Link></li>
                <li><Link to="/sobre">Quem Somos</Link></li>
                <div className='footer__social-media'>
                  <Link to="https://www.instagram.com/asciiempresajr/"><img src={instagram} alt="" className="instagram-icon" /></Link>
                  <Link to="https://www.linkedin.com/company/ascii-empresa-j%C3%BAnior/"><img src={Linkedin} alt="" className="linkedin-icon" /></Link>
                  <Link to="https://github.com/asciiej"><img src={Git} alt="" className="github-icon" /></Link>
                </div>
              </ul>
            </div>
          </div> 
          <p className="copyright">© 2024 ASCII</p>
      </footer>
  );
}

export default Footer;