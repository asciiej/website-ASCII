import { useState } from 'react';

import appsIcon from '../../assets/apps.svg'
import webIcon from '../../assets/web.svg'
import consultoriaIcon from '../../assets/consultoria.svg'
import sistemasIcon from '../../assets/sistemas.svg'

import appsImg from '../../assets/apps.png'

const services = [{
        id: 'apps',
        icon: appsIcon,
        title: 'Desenvolvimento de Aplicativos',
        description: 'Descrição do serviço',
        details: 'Mais detalhes sobre o serviço aqui neste parágrafo longo.',
        image: appsImg
    }, 
    {
        id: 'web',
        icon: webIcon,
        title: 'Desenvolvimento Web',
        description: 'Descrição do serviço',
        details: 'Mais detalhes sobre o serviço aqui neste parágrafo longo.',
        image: appsImg
    },
    {
        id: 'sistemas',
        icon: sistemasIcon,
        title: 'Modelagem de Sistemas',
        description: 'Descrição do serviço',
        details: 'Mais detalhes sobre o serviço aqui neste parágrafo longo.',
        image: appsImg
    },
    {
        id: 'consultoria',
        icon: consultoriaIcon,
        title: 'Consultoria',
        description: 'Descrição do serviço',
        details: 'Mais detalhes sobre o serviço aqui neste parágrafo longo.',
        image: appsImg
    }];

export default function ServicoCards() {
    const [active, setActive] = useState(false);
    return (
        <>
            {services.map((service, idx) => {
                return (
                    <div className='service-card' key={service.id}>
                        <div className='service-header'>
                            <img src={service.icon} alt=""></img>
                            <h3>{service.title}</h3>
                        </div>
                        <p>{service.description}</p>
                        <button 
                        onClick={() => {
                            if (active === idx){
                                setActive() 
                            } else {
                                setActive(idx)
                            }
                        }}>
                            Saiba Mais
                        </button>
                        {active === idx && <div className='service-details'>
                            <p>{service.details} </p>
                            <img src={service.image}  alt="Desenvolvimento de aplicativos"></img>
                        </div>}
                    </div>
                );
            })}
        </>
    ); 
};