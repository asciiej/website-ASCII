import React from 'react'

export default function Dados(props){
    return(
        <section>
            <p>teste 1 {props.canal()}</p>
            <p>teste 2 {props.youtube}</p>
            <p>teste 3 {props.curso}</p>
        </section>
    )
}