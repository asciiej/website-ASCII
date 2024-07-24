import style from './Servicos.module.css'
import background from '../../image/mapa-fundo.svg';
import ServicesList from './ServicesList.js';


export default function Servicos( ) {
    return (
        <section className={style.services}>
            <div className={style.services-background} style={{backgroundImage: `url(${background})`}}>
                <h2>Nossos Serviços</h2>
                <ServicesList />
            </div>
        </section>          
    );
};