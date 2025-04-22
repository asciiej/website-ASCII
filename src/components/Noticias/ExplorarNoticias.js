import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ExplorarNoticias.module.css';

import imagemDestaque from 'image/noticias-default.png';

function ExplorarNoticias() {
    return (
        <>

            <div className={styles.container}>
                <div className={styles.metaInfo}>
                    <span className={styles.data}>17/04/25</span>
                    <span className={styles.separator}>·</span>
                    <span className={styles.tempoLeitura}>3 min</span>
                </div>

                <h1 className={styles.title}>
                    Lorem ipsum dolor sit amet consectetur. <strong>Amet orci vel amet massa sed eget. Netus quis netus egestas quis aliquam sed elementum at.</strong>
                </h1>

                <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur. Facilisi porttitor lacinia ultrices tempor ut aliquet vitae aliquam quam. Turpis ut elit sed sit suspendisse sed aliquam malesuada.
                </p>

                <div className={styles.imageWrapper}>
                    <img src={imagemDestaque} alt="Imagem da notícia" className={styles.imagem} />
                    <p className={styles.caption}>
                        Lorem ipsum dolor sit amet consectetur. Scelerisque fermentum posuere etiam amet. Phasellus varius dignissim sed lacus eu sapien volutpat posuere inmassa.
                    </p>
                </div>

                <div className={styles.conteudo}>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Ac auctor a nulla feugiat elit dictum. Gravida et non ultricies mauris curabitur tempus porttitor justo. Ultrices elementum orci lorem metus vitae diam neque turpis in.
                        <strong>Viverra eget leo neque aliquam auctor</strong> et. Gravida iaculis integer eu velit amet libero pulvinar sed donec. Lacus at imperdiet pellentesque aliquet lorem. Dolor habitant hac vel non.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur. Ac auctor a nulla feugiat elit dictum. Gravida et non ultricies mauris curabitur tempus porttitor justo. Ultrices elementum orci lorem metus vitae diam neque turpis in.
                        <strong>Viverra eget leo neque aliquam auctor</strong> et. Gravida iaculis integer eu velit amet libero pulvinar sed donec. Lacus at imperdiet pellentesque aliquet lorem. Dolor habitant hac vel non.
                    </p>

                    <h2 className={styles.subtitulo}>Lorem ipsum dolor</h2>

                    <p>
                        Lorem ipsum dolor sit amet consectetur. Ac auctor a nulla feugiat elit dictum. Gravida et non ultricies mauris curabitur tempus porttitor justo. Ultrices elementum orci lorem metus vitae diam neque turpis in.
                        Viverra eget leo neque aliquam auctor et. Gravida iaculis integer eu velit amet libero pulvinar sed donec.
                    </p>
                </div>
            </div>
        </>
    );
}

export default ExplorarNoticias;
