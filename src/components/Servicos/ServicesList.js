import { useState } from 'react';

import appsIcon from '../../assets/apps.svg'
import webIcon from '../../assets/web.svg'
import consultoriaIcon from '../../assets/consultoria.svg'
import sistemasIcon from '../../assets/sistemas.svg'
import chevronRight from '../../assets/chevron-right.svg'

import appsImg from '../../assets/apps.png'
import webImg from '../../assets/web.png'
import consultoriaImg from '../../assets/consultoria.png'
import sistemasImg from '../../assets/sistemas.png'

const services = [{
        id: 'apps',
        icon: appsIcon,
        title: 'Desenvolvimento de Aplicativos',
        description: 'Aplicativos desktop e mobile, para melhor servir a sua aplicação, se necessário',
        details: 'Criamos aplicativos móveis para Android e iOS, focando em desempenho e usabilidade. Nossas tecnologias são React Native e Flutter.',
        image: appsImg
    }, 
    {
        id: 'web',
        icon: webIcon,
        title: 'Desenvolvimento Web',
        description: 'Criação e gerenciamento de sites estáticos e dinâmicos',
        details: 'Sites e aplicações web desde páginas institucionais até e-commerces complexos. Nossas tecnologias e frameworks são HTML5, CSS3, JavaScript, React e Angular.',
        image: webImg
    },
    {
        id: 'sistemas',
        icon: sistemasIcon,
        title: 'Modelagem de Sistemas',
        description: 'Planejamento do seu produto, de acordo com as etapas da engenharia de software',
        details: 'Modelagem de sistemas complexos, com diagramas e especificações que descrevem detalhadamente a sua estrutura. Utilizamos UML e outras ferramentas para garantir uma visão clara e estruturada',
        image: sistemasImg
    },
    {
        id: 'consultoria',
        icon: consultoriaIcon,
        title: 'Consultoria',
        description: 'Consultoria técnica para identificar e corrigir bugs em sistemas existentes, além de criar ou melhorar a documentação.',
        details: 'Manutenção e refatoração de código, afim de garantir ao produto melhor performance, manutenção facilitada, maior confiabilidade e redução de custos',
        image: consultoriaImg
    }];

export default function ServicesList() {
    const [active, setActive] = useState(false);
    return (
        <div className='services-list'>
            {services.map((service, idx) => {
                return (
                    <div 
                    className={active === idx ? 'service-card service-active' : 'service-card'}
                    key={service.id}>
                        <div className='service-header'>
                            <img src={service.icon} alt=""></img>
                            <h3>{service.title}</h3>
                        </div>
                        <p>{service.description}</p>
                        <label>
                            <input
                            type="checkbox" 
                            onClick={() => {
                                if (active === idx){
                                    setActive() 
                                } else {
                                    setActive(idx)
                                }
                            }}>
                            </input>
                                Saiba Mais
                                <img src={chevronRight} className='chevronIcon'></img> 
                        </label>
                        {active === idx && <div className='service-details'>
                            <p>{service.details} </p>
                            <img src={service.image}  alt="Desenvolvimento de aplicativos"></img>
                        </div>}
                    </div>
                );
            })}
        </div>
    ); 
};