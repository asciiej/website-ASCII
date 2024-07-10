import './Servicos.css'
import background from '../../assets/mapa-fundo.svg';
import ServicesList from './ServicesList.js';


export default function Servicos( ) {
    return (
        <section className='services'>
            <div className='services-background' style={{backgroundImage: `url(${background})`}}>
                <h2>Nossos Serviços</h2>
                <ServicesList />
            </div>
        </section>
    );
};