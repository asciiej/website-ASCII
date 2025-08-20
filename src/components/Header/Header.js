import "./Header.css"

import {Link, useLocation} from 'react-router-dom';
import logo from 'image/logo.png'
import logoExperiment from 'image/logo_experiment.png'


function Header(props) {
    const location = useLocation();
    const isExperimentPage = location.pathname === '/experiment';
    const currentLogo = isExperimentPage ? logoExperiment : logo;
    
    return (
        <>
            <div className={`${props.theme} header ${isExperimentPage ? 'experiment-header' : ''}`}>
                <Link to="/"><img className='logoheader' src={currentLogo} alt="logo" id="logo-header"/></Link>
                <ul className='list'>
                    <li className='item'><Link to="/">Home</Link></li>
                    <li className='item'><Link to="/sobre">Quem Somos</Link></li>
                    <li className='item'><Link to="/portfolio">Portfolio</Link></li>
                    <li className='item'><Link to="/#agendar-reuniao">Contato</Link></li>
                    <li className='item'><Link to="/Explore">Explore+</Link></li>
                    <li className={`item ${isExperimentPage ? 'experiment-active' : ''}`}><Link to="/experiment">Experimento</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header;