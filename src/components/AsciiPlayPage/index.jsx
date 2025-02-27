import styles from './index.module.css';
import React, { useState } from "react";
import CardPlay from "./../CardPlay";
import img1 from "./../../image/uberground-2.jpg";
import audio from "./../../audio/Gravando.mp3";

const AsciiPlayPage = () => {
    const [cards, setCards] = useState([
        {
            id: 1,
            Transparent: false,
        },
        {
            id: 2,
            type: 0,
            title: "Podcast 1",
            src: img1,
            text: "lorem ipsun dolor sit amet consectetur adipiscing elit",
            Transparent: false,
            audio: audio,
            time: 11,
        },
        {
            id: 3,
            type: 1,
            title: "Vídeo 2",
            src: "",
            text: "Descrição do Vídeo 2",
            Transparent: false,
            time: 11,
        }
    ]);

    return (
        <section className={styles.asciiPlayPageSection}>
            <div className={styles.asciiPlayPageTextWrapper}>
                <h1 className={styles.asciiPlayPageTitle}>ASCII Play:<br></br><span className={styles.asciiPlayPageSubTitle}>Podcasts e Vídeos</span></h1>
            </div>
            <div className={styles.asciiPlayGridContainer}>
                {cards.map((card) => (
                    <div key={card.id} className={styles.mediaItemAsciiPlay}>
                        <CardPlay
                            type={card.type}
                            title={card.title}
                            src={card.src}
                            text={card.text}
                            appearance={card.Transparent}
                            audio={card.audio}
                            time={card.time}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AsciiPlayPage;