import styles from "./index.module.css";

export default function ExploreIntroduction() {
    return (
        <section className={styles.exploreIntroductionSection}>
            <div className={styles.exploreIntroductionContainer}>
                <h1 className={styles.exploreIntroductionTitle}>Mergulhe no universo da <span>ASCII</span></h1>
                <p className={styles.exploreIntroductionText}>Bem-vindo ao Explore+, aqui você encontra tudo o que precisa para se manter atualizado e inspirado no universo da tecnologia e inovação. Descubra nossas últimas notícias, faça download de e-books exclusivos e aproveite podcasts e vídeos. Explore mais, conecte-se com o futuro.</p>
            </div>
        </section>
    );
}