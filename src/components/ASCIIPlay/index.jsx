import React, { useRef, useEffect, useState } from "react";
import styles from "./index.module.css";
import CardPlay from "./../CardPlay";
import img1 from "./../../image/uberground-2.jpg";
import audio from "./../../audio/Gravando.mp3";

export default function ASCIIPlay() {
    const scrollerRef = useRef(null);
    const itemWidth = useRef(0);
    const [cards, setCards] = useState([
        {
            id: 1,
            Transparent: true,
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
            src: "https://via.placeholder.com/150",
            text: "Descrição do Vídeo 2",
            Transparent: false,
            time: 11,
        },
        {
            id: 4,
            Transparent: false,
        },
        {
            id: 5,
            Transparent: false,
        },
        {
            id: 6,
            Transparent: true,
        },
    ]);

    const scrollByAmount = (amount) => {
        if (scrollerRef.current) {
            scrollerRef.current.scrollBy({ left: amount, behavior: "smooth" });
        }
    };

    const handleScroll = () => {
        const items = scrollerRef.current.querySelectorAll(`.${styles.mediaItemAsciiPlay}`);
        const scrollLeft = scrollerRef.current.scrollLeft;
        const center = scrollLeft + scrollerRef.current.offsetWidth / 2;

        items.forEach((item) => {
            const itemCenter = item.offsetLeft + item.offsetWidth / 2;
            const inTheCenter = (itemCenter <= center + 100 && itemCenter >= center - 100) ? true : false;
            const scale = inTheCenter ? 1 : 0.85;
            item.style.transform = `scale(${scale})`;
            item.style.zIndex = scale > 0.85 ? "2" : "1";
        });
    };
    

    useEffect(() => {
        if (scrollerRef.current) {
            const secondItem = scrollerRef.current.querySelectorAll(`.${styles.mediaItemAsciiPlay}`)[1];
            if (secondItem) {
                itemWidth.current = secondItem.offsetWidth + 20;
            }
            scrollerRef.current.addEventListener("scroll", handleScroll);
            handleScroll();
        }
        return () => {
            if (scrollerRef.current) {
                scrollerRef.current.removeEventListener("scroll", handleScroll);
            }
        };
    }, []);

    return (
        <section className={styles.asciiPlaySection}>
            <div className={styles.asciiPlayVerTodosContainer}>
                <a href="">Ver Todos</a>
            </div>
            <div className={styles.asciiPlayTitlecontainer}>
                <h2>ASCII Play:<br /><span>Podcasts e Vídeos</span></h2>
            </div>
            <div className={styles.scrollerAsciiPlayContainer}>
                <div
                    className={`${styles.scrollBtnAsciiPlay} ${styles.leftBtnAsciiPlay}`}
                    onClick={() => scrollByAmount(-itemWidth.current)}
                >
                    &lt;
                </div>
                <div
                    className={styles.mediaScrollerAsciiPlay}
                    ref={scrollerRef}
                >
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className={`${styles.mediaItemAsciiPlay}`}
                        >
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
                <div
                    className={`${styles.scrollBtnAsciiPlay} ${styles.rightBtnAsciiPlay}`}
                    onClick={() => scrollByAmount(itemWidth.current)}
                >
                    &gt;
                </div>
            </div>
        </section>
    );
}