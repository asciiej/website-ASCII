import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./BurguerMenu.css"
import logo from 'image/logo.png'
import logoExperiment from 'image/logo_experiment.png'

export default function BurguerMenu(props) {
    const [active, setMode] = useState(false);
    const location = useLocation();
    const isExperimentPage = location.pathname === '/experiment';
    const currentLogo = isExperimentPage ? logoExperiment : logo;
    
    const ToggleMode = () => {
        setMode(!active)
    };

    return(
        <div className={'menuHamburguer'}>
            <div className="menuContainer">
                <Link to="/"><img className='logoheader' src={currentLogo} alt="logo" id="logo-header"/></Link>
                <div className={active ? 'icon iconActive' : `${props.theme} icon`} onClick={ToggleMode}>
                </div>
            </div>
            <div className={active ? 'menu menuOpen' : "menu menuClose"}>
                <div className="list">
                    <ul className="listItems">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sobre/#">Sobre Nós</Link></li>
                        <li><Link to="/#agendar-reuniao">Contato</Link></li>
                        <li><Link to="/portfolio/#">Portfolio</Link></li>
                        <li><Link to="/Explore">Explore+</Link></li>
                        <li className={isExperimentPage ? 'experiment-active' : ''}><Link to="/experiment">Experimento</Link></li>
                    </ul>
                </div>
            </div>    
        </div>
    )
}