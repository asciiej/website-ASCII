import { useEffect } from "react";
import { Link } from 'react-router-dom';
import noticiasData from '../data/noticiasData';
import styles from './../components/Explore/Noticias/Noticias.module.css';

import Header from "../components/Header/Header.js";
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';
import TitleBanner from 'components/About/TitleBanner/TitleBanner.js';
import ButtonWhatsapp from 'components/ButtonWhatsapp/ButtonWhatsapp.js';

function ExploreNoticias() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <> 
    <BurguerMenu theme='light'/>
    <Header theme='dark'/>
    <ButtonWhatsapp/>
    <TitleBanner title='Notícias' image=''/>
    <div >
      <div className={styles.newsWrapperExplorar}>
        <div className={styles.newsGridExplorar}>
          {noticiasData.map(noticia => (
            <Link key={noticia.id} to={`/noticias/${noticia.id}`} className={styles.newsItem}>
              <img src={noticia.image} alt="Notícia" className={styles.newsThumbnail} />
              <h4 className={styles.newsItemTitle}>{noticia.title}</h4>
              <p className={styles.newsItemDescription}>{noticia.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
    </> 
  );
}

export default ExploreNoticias;
