import { useEffect, useRef } from 'react';
import foto from "image/fotoAscii.jpg"
import techmob from "image/techmob.png"
import asciiAntiga from "image/ASCIIAntiga.png"
import ano2021 from "image/2021.jpeg"
import mascotes from "image/mascotes.jpg"
import styles from './LinhaTempo.module.css';

function LinhaTempo() {
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.fadeInVisible);
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '50px'
        });

        cardsRef.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    const timelineData = [
        {
            year: "2013",
            text: "A empresa Júnior da FACOM, inicialmente chamada Techbomb, foi fundada por estudantes de Ciência da Computação. Embora não tenha prosperado, plantou as sementes para o que viria a ser a ASCII.",
            image: techmob
        },
        {
            year: "2019",
            text: "A ASCII foi oficialmente criada, marcando o renascimento da Empresa Júnior da FACOM. Nossos primeiros projetos foram realizados em parceria com o Núcleo do Triângulo, estabelecendo as bases para nosso crescimento futuro.",
            image: asciiAntiga
        },
        {
            year: "2021",
            text: "Apesar dos desafios impostos pela pandemia, a ASCII continuou a crescer, adaptando-se às novas realidades do mercado e mantendo nosso compromisso com a excelência.",
            image: ano2021
        },
        {
            year: "2024",
            text: "Passamos por uma reestruturação completa, revitalizando nossa marca com uma nova logo, bandeira, camisas e mascotes. Este foi um ano de transformação e renovação.",
            image: mascotes
        },
        {
            year: "2024.2",
            text: "Nos tornamos uma empresa júnior colaborativa e tivemos a honra de subir ao palco do evento TransformaRR, sendo reconhecidos como Empresa Júnior de Alto Crescimento.",
            image: foto
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h2>Nossa História</h2>
                <p className={styles.subtitle}>Uma jornada de crescimento, inovação e transformação</p>
            </div>
            
            <div className={styles.timeline}>
                {timelineData.map((item, index) => (
                    <div 
                        key={index}
                        className={`${styles.timelineItem} ${styles.fadeIn}`}
                        ref={addToRefs}
                        style={{ animationDelay: `${index * 0.2}s` }}
                    >
                        <div className={styles.timelineContent}>
                            <div className={styles.yearBadge}>
                                <span className={styles.year}>{item.year}</span>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.imageContainer}>
                                    <img src={item.image} alt={`Momento histórico ${item.year}`} />
                                    <div className={styles.imageOverlay}></div>
                                </div>
                                <div className={styles.textContent}>
                                    <p className={styles.texto}>{item.text}</p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.connector}></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LinhaTempo;