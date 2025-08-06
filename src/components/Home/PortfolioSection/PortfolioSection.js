import { useEffect, useRef } from 'react';
import photo from 'image/Services_image.png'
import styles from './PortfolioSection.module.css'
import {Link} from 'react-router-dom';

function PortfolioSection() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(styles.show);
                }
            });
        }, {
            threshold: 0.2
        });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className={styles.call_to_action} ref={sectionRef}>
            <img className={styles.services_image} src={photo} alt="services_image" />
            <div>
                <h2 className={styles.text}>Saiba como a ASCII pode<br></br>ajudar o <span>seu negócio</span>!</h2>
                <Link to="/portfolio/#portfolio-anchor"><button>Visite nosso portfólio </button></Link>
            </div>
        </section>
    )
}

export default PortfolioSection