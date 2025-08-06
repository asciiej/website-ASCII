// src/pages/Noticias.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Noticias.module.css';
import CustomShapeDivider from '../../CustomShapeDivider';
import noticiasData from '../../../data/noticiasData';

function Noticias() {
  const destaque = noticiasData[0];
  const maisAcessadas = noticiasData.slice(1, 5); // fixo: 4 notícias

  return (
    <>
      <header className={styles.header}>
        <h2>Mergulhe no Universo <br /> da <span>ASCII</span></h2>
        <p className={styles.paragrafo}>
          Bem-vindo ao Explore+, aqui você encontra tudo o que precisa para se manter atualizado e inspirado no universo da tecnologia e inovação. Descubra nossas últimas notícias, faça download de e-books exclusivos e aproveite podcasts e vídeos. Explore mais, conecte-se com o futuro.
        </p>
      </header>

      <div className={styles.bgblue}>
        <div className={styles.onda}>
          <CustomShapeDivider color1="#050F60" color2="#050F60" invert={true} />
        </div>

        <div className={styles.newsContainer}>
          <div className={styles.newsWrapper}>
            <h2 className={styles.sectionTitle}>Notícias</h2>

            <Link to={`/noticias/${destaque.id}`} className={styles.featuredLink}>
              <div className={styles.featuredSection}>
                <div className={styles.featuredNews}>
                  <img src={destaque.image} alt="Notícia em destaque" className={styles.featuredImage} />
                  <div className={styles.featuredText}>{destaque.title}</div>
                </div>
                <div className={styles.newsDescription}>
                  <p>
                    {destaque.fullText}
                  </p>
                  <Link to={`/noticias/${destaque.id}`} className={styles.readMore}>Leia mais.</Link>
                </div>
              </div>
            </Link>

            <div className={styles.newsContent}>
              <h4 className={styles.moreAccessed}>Mais Acessadas</h4>
              <div className={styles.newsGrid}>
                {maisAcessadas.map(noticia => (
                  <Link key={noticia.id} to={`/noticias/${noticia.id}`} className={styles.newsItem}>
                    <img src={noticia.image} alt="Notícia" className={styles.newsThumbnail} />
                    <h4 className={styles.newsItemTitle}>{noticia.title}</h4>
                    <p className={styles.newsItemDescription}>{noticia.description}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className={styles.buttonContainer}>
              <Link to="/explore/noticias" className={styles.exploreButton}>
                Explorar Notícias
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Noticias;
