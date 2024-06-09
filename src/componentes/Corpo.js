import create from 'react';
import Dados from './Dados';

export default function Corpo(){
    const cnl=()=>{
        return 'ascii.br'
    }

    const yt='asciiYT'

    const somar=(v1,v2)=>{
        return v1+v2
    }


    return(
        <section>
            <p>teste corpo</p>
            <p>teste dados dentro corpo {cnl} chegou</p>
            <h1>teste dados const dentro corpo: {yt}</h1>
            <Dados 
            canal={cnl} 
            youtube={yt} 
            curso='react'
            somar={somar}
            />
        </section>


    )
}