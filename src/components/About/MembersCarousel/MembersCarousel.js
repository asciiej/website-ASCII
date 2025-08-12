// MembersCarousel.js - VERSÃO FINAL COM ROLAGEM DINÂMICA
import { useEffect, useState, useRef } from "react";

import linkedinIcon from "image/linkedin.png";
import navIcon from "image/carousel-nav.svg";
import "./MembersCarousel.css";

export default function MembersCarousel(props) {
    const [data, setData] = useState([]);
    const carousel = useRef(null);

    useEffect(() => {
        fetch('/data/membros.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((response) => response.json())
        .then((membersData) => {
            setData(membersData);
        });
    }, []);

    // --- LÓGICA DE ROLAGEM DINÂMICA ---
    const handleNavClick = (direction) => {
        const carouselEl = carousel.current;
        if (!carouselEl) return;

        const firstItem = carouselEl.querySelector('.carousel__item');
        if (!firstItem) return;


        const itemWidth = firstItem.offsetWidth;
        const carouselStyle = window.getComputedStyle(carouselEl);
        const gap = parseFloat(carouselStyle.gap) || 0;


        const scrollAmount = itemWidth + gap;

        carouselEl.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <div className="carousel__container">
            <button 
                onClick={() => handleNavClick('left')}
                className='carousel__nav left'
            >
                <img src={navIcon} alt="Anterior" />
            </button>
            
            <div className="carousel" ref={carousel}>
                {data
                    .filter(membro => membro.diretoria === props.diretoria)
                    .map((membro) => {
                        const { nome, curso, cargo, foto, linkedin } = membro;
                        return (
                            <div className="carousel__item" key={nome}>
                                <div className="carousel__info">
                                    <h3 className="nome">{nome}</h3>
                                    <p className="cargo">{cargo}</p>
                                    <p className="curso">Graduando em {curso}</p>
                                    <div className="carousel__image">
                                        <div className="profile-button">
                                            <a href={linkedin} target="_blank" rel="noopener noreferrer">
                                                <img src={linkedinIcon} alt={`LinkedIn de ${nome}`} />
                                            </a>
                                        </div>
                                        <img className="foto" alt={`Foto de ${nome}`} src={foto} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>

            <button 
                onClick={() => handleNavClick('right')}
                className='carousel__nav right'
            >
                <img src={navIcon} alt="Próximo" />
            </button>
        </div>
    );
}