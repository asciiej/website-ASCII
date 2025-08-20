import './ExperimentBanner.css'

export default function ExperimentBanner({ title }) {
    return (
        <section className='experiment-banner'>
            <div className='experiment-banner-background'>
                <h1 className='experiment-title'>{title}</h1>
            </div>
        </section>
    );
};
