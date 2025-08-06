import React, { useEffect, useRef } from 'react';
import './Mvv.css';

import missionIcon from "image/mission.svg"
import visionIcon from "image/vision.svg"
import valuesIcon from "image/values.svg"

import { Link } from 'react-router-dom';

function Mvv() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, {
      threshold: 0.2
    });

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className='mvv'>
      <div className='cards-wrapper'>
        {[
          {
            icon: missionIcon,
            title: 'Missão',
            text: 'Oferecer resultados eficazes para nossos clientes, enquanto promovemos o crescimento pessoal e profissional de nossos membros.'
          },
          {
            icon: visionIcon,
            title: 'Visão',
            text: 'Ser referência na área de soluções digitais, formando profissionais qualificados para lidar com a transformação tecnológica.'
          },
          {
            icon: valuesIcon,
            title: 'Valores',
            text: 'Inovação, Colaboração e Comprometimento.'
          }
        ].map((item, index) => (
          <div
            className='card'
            key={index}
            ref={el => cardsRef.current[index] = el}
          >
            <img src={item.icon} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <Link to="/sobre/#sobre-anchor"><button>Conheça mais sobre Nós</button></Link>
    </section>
  );
}

export default Mvv;
