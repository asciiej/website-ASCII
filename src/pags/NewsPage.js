// src/pages/NoticiaIndividual.js
import { useEffect } from "react";
import { useParams } from 'react-router-dom';
import noticiasData from '../data/noticiasData';
import styles from 'components/NewsPage/NewsPage.module.css'

import Header from 'components/Header/Header.js'
import TitleBanner from 'components/TitleBanner/TitleBanner.js';
import BurguerMenu from 'components/BurguerMenu/BurguerMenu.js';
import ButtonWhatsapp from 'components/ButtonWhatsapp/ButtonWhatsapp.js';


function NewsPage() {

  useEffect(() => {
      window.scrollTo(0, 0);
  }, []);


  const { id } = useParams();
  const noticia = noticiasData.find(item => item.id === Number(id));

  if (!noticia) {
    return <div>Notícia não encontrada</div>;
  }

  return (
    <>
    <BurguerMenu theme='light' />
    <Header theme='dark' />
    <ButtonWhatsapp/>
    <TitleBanner title='Notícia' image='' />    

    <div className={styles.container }>
      <section>
        <h1 className={styles.title}>{noticia.title}</h1>
        <div className={styles.publication}>
          {/* Adicione dados reais de publicação se existirem no JSON */}
          <p id='date'>Data de publicação</p>
        </div>
        <div className={styles.imageWrapper} >
          <img src={noticia.image} alt={noticia.title} className={styles.imagem} />
        </div>
      </section>
      <section className={styles.content}>
        {/* Divide o texto completo em parágrafos */}
        {noticia.fullText.split('\n').map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </section>
    </div>
    </>
  );
}

export default NewsPage;