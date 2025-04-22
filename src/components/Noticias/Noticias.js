import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Noticias.module.css';

import imagemNoticia from 'image/noticias-default.png';

function Noticias() {
    const noticias = Array(4).fill(null).map((_, index) => ({
        title: "News Title Lorem Ipsum Dolor Sit Amet",
        description: "1 hora atrás • ASC1 Explorer",
        image: imagemNoticia,
    }));

    return (
        <div className={styles.newsContainer}>
            <div className={styles.newsWrapper}>
                <h2 className={styles.sectionTitle}>Notícias</h2>

                {/* Tornar a div da notícia em destaque clicável */}
                <Link to="/noticias" className={styles.featuredLink}>
                    <div className={styles.featuredSection}>
                        <div className={styles.featuredNews}>
                            <img src={imagemNoticia} alt="Notícia em destaque" className={styles.featuredImage} />
                            <div className={styles.featuredText}>
                                Lorem ipsum dolor sit amet consectetur. Sit lacus augue non consequat.
                            </div>
                        </div>
                        <div className={styles.newsDescription}>
                            <p>Lorem ipsum dolor sit amet consectetur. Odo velit faucibus dapibus nibh...</p>
                            <p>Aliquam erat volutpat. Sed in sapien vel nisi placerat scelerisque. Nulla facilisi.</p>
                            <p>Donec eget risus ac nisl dictum tincidunt. Proin nec neque in arcu gravida pulvinar.</p>
                            <Link to="/noticias" className={styles.readMore}>Leia mais.</Link>
                        </div>
                    </div>
                </Link>

                <h4 className={styles.moreAccessed}>Mais Acessadas</h4>

                <div className={styles.newsContent}>
                    <div className={styles.newsGrid}>
                        {noticias.map((noticia, index) => (
                            <Link key={index} to="/noticias" className={styles.newsItem}>
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
    );
}

export default Noticias;
