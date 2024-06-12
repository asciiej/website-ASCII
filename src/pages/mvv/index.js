import Card from "./Card.js"
import "./mvv.css"

import Valores from "../../assets/diamond.svg"
import Visão from "../../assets/eye.svg"
import Missão from "../../assets/target.svg"

function MVV () {
    return (
        <section className="MVV">
            <div className="App">
                <Card 
                    icon={Missão}
                    titulo="Missão"
                    texto="Essa é a missão da ASCII EJR"
                />
                <Card 
                    icon={Visão}
                    titulo="Visão"
                    texto="Essa é a visão da ASCII EJR"
                />
                <Card 
                    icon={Valores}
                    titulo="Valores"
                    texto="Esses são os valores da ASCII EJR"
                />
            </div>
        </section>
    );
}

export default MVV;