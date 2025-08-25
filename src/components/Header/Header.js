import "./Header.css"

import {Link, useLocation} from 'react-router-dom';
import logo from 'image/logo.png'
import logoExperiment from 'image/logo_experiment.png'


function Header(props) {
    const location = useLocation();
    const isExperimentPage = location.pathname === '/experiment';
    return (
        <>
            <div className={`${props.theme} header ${isExperimentPage ? 'experiment-header' : ''}`}>
                <Link to="/"><img className='logoheader' src={isExperimentPage ? logoExperiment : logo} alt="logo" id="logo-header"/></Link>
                <ul className='list'>
                    <li className='item'><Link to="/">Home</Link></li>
                    <li className='item'><Link to="/sobre">Quem Somos</Link></li>
                    <li className='item'><Link to="/portfolio">Portfolio</Link></li>
                    <li className='item'><Link to="/#agendar-reuniao">Contato</Link></li>
                    <li className='item dropdown'>
                        <button className='dropdown-toggle'>
                            Explore+
                            <div className='dropdown-arrow'></div>
                        </button>
                        <ul className='dropdown-menu'>
                            <li>
                                <Link to="/explore/noticias">
                                    <div className='dropdown-icon news-icon'></div>
                                    Notícias
                                </Link>
                            </li>
                            <li>
                                <Link to="/Bibliotecaebooks">
                                    <div className='dropdown-icon ebook-icon'></div>
                                    E-books
                                </Link>
                            </li>
                            <li>
                                <Link to="/Asciiplay">
                                    <div className='dropdown-icon play-icon'></div>
                                    <div className="dropdown-text">
                                        <span>Podcasts</span>
                                        <span>/Vídeos</span>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`item ${isExperimentPage ? 'experiment-active' : ''}`}><Link to="/experiment">Experimento</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Header;