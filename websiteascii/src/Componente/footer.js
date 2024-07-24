import logo from '../image/logoHorizontal.png';
import back from '../image/back.png';
import React from 'react';
import instagram from '../image/instagram.png';
import Linkedin from '../image/linkedin.png' 
import Git from '../image/github.png';
import {Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import style from  './footer.module.css';

import PagContato from './PagContato/Pagcontato';


function Footer() {
  return (
      <footer className={style.footer}>
        <div className={style.footerbackground}>
          <img src={back} alt="" className={style.backgroundimage} />
          <img src={logo} alt="" className={style.logo} />
          <img src={back} alt="" className={style.backgroundimage} />
        </div>

        <div className={style.footercontent}>
          <div className={style.servicesfooter}>
            <h1>Nossos Serviços</h1>
            <div className={style.links}>
              <Link to="" className={style.link}>Criação de aplicativos</Link>
              <Link to="" className={style.link}>Desenvolvimento Web</Link>
              <Link to="" className={style.link}>Modelagem de Sistemas</Link>
              <Link to="" className={style.link}>Consultoria</Link>
            </div>
          </div>

          <div className={style.contact}>
            <div className={style.contactinfo}>
              <Link to="" className={style.link}>Informações de Contato</Link>
              <Link to="" className={style.link}>Portfólio</Link>
              <Link to="" className={style.link}>Quem Somos</Link>
            </div>
            <div className={style.socialmedia}>
              <Link to=""><img src={instagram} alt="" className={style.instagramicon} /></Link>
              <Link to=""><img src={Linkedin} alt="" className={style.linkedinicon} /></Link>
              <Link to=""><img src={Git} alt="" className={style.githubicon} /></Link>
            </div>
          </div>

        </div>
        <div className={style.copyright}>
          <p>© 2024 ASCII</p>
        </div>
      </footer>
  );
}

export default Footer;