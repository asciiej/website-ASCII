import styles from 'components/portfolio/Projects.module.css'
import FeedbackCard from 'components/portfolio/FeedbackCard/FeedbackCard';
import chevronIcon from 'image/chevron-right.svg';
import { Link } from 'react-router-dom';

import img1 from '../../../image/innovare2.png';
import img2 from '../../../image/innovare3.png';
import img3 from '../../../image/innovare4.png';

export default function CaseInnovare() {
    return (
        <>
            <div id='case-anchor'></div>
            <div className={styles.caseTitulo}>
                <h2>Case de Sucesso</h2>
                <h1>Innovare</h1>
            </div>
            <section className={styles.caseDeSucesso}>
                <Link to="/portfolio" className={styles.link}> Ver todos os nossos projetos de destaque
                </Link>
                <div className={styles.container}>
                    <div>  
                        <h2>Sobre a Innovare</h2>
                        <p> A Innovare, empresa júnior especializada em Psicologia Organizacional e consultoria em psicologia, agora conta com um site moderno, responsivo e alinhado à sua identidade institucional.</p>
                         <p> Na nova plataforma, seus principais serviços, como mapeamento de clima organizacional, avaliação psicológica, recrutamento e seleção, além de <br/> treinamentos personalizados, são apresentados de forma clara e acessível.</p>
                            
                    </div>
                    <div>
                        <h2>O desafio</h2>
                        <p>A Innovare enfrentava desafios significativos em sua presença digital. Embora já contasse com um site, a plataforma anterior não refletia a identidade da empresa, nem atendia às suas necessidades de comunicação e visibilidade. </p>
                            <p> A falta de um site bem estruturado e funcional prejudicava a forma como os serviços eram apresentados, dificultando o acesso de potenciais clientes a informações relevantes e reduzindo a efetividade do contato com o público. </p>
                    </div>
                </div>
                <div className={styles.container}>
                    <div>
                        <h2>A solução</h2>
                        <p>Para solucionar esses desafios e alinhar a presença digital da Innovare às suas necessidades estratégicas, a ASCII desenvolveu uma nova proposta de site moderno, funcional e centrado na experiência do usuário. </p>

                        <p> A solução contou com um layout totalmente redesenhado no Figma, valorizando a identidade visual da Innovare e proporcionando uma navegação clara e intuitiva. O desenvolvimento foi realizado com React, garantindo alta performance, responsividade e facilidade de manutenção.</p>

                        <p> O novo site também inclui funcionalidades que facilitam o gerenciamento de conteúdo, permitindo que a equipe da Innovare atualize informações de forma prática e organizada. Além disso, foram implementados formulários otimizados para contato e solicitação de serviços, ampliando a geração de leads e fortalecendo a comunicação com o público. </p>
                    </div>
                </div>
                <div className={styles.galleryTitle}>
                    <h2>Galeria do Projeto</h2>
                    <a href="https://www.innovarejr.com.br/" target="_blank" rel="noreferrer">Acesse o site <img src={chevronIcon}></img></a>
                </div>
                <div className={styles.gallery}>
                    <img className={styles.galleryItem} src={img1} alt="Homepage Innovare"></img>
                    <img className={styles.galleryItem} src={img2} alt="Seção de Serviços"></img>
                    <img className={styles.galleryItem} src={img3} alt="Explicação de Orientação Profissional"></img>
                </div>
            </section>
        </>
    );
};