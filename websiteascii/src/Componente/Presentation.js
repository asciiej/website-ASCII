import style from './Presentation.module.css'
import Computer from './Computer'

function Presentation() {
    return (

        <div className={style.presentation1}>
            <div className={style.presentation}>
                <h2>Sua ideia se transforma em solução</h2>

                <p>Seja qual for o seu problema, a solução mais rapida e mais inteligente nós temos aqui para isso, trabalhamos com soluções personalizadas para atender sua empresa da melhor forma possível.</p>
            </div>
            <div className={style.computer}>
                <Computer/>
            </div>
        </div>
    );
};

export default Presentation