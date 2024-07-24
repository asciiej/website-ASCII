import style from './Header.module.css'
import logo from '../image/logo.png'
import esfumacado from '../image/esfumacado.png'


function Header() {
    return (
        <div className={style.header}>
            <img className={style.shadow} src={esfumacado} alt="Sombra"/>
            <div className={style.teste}>
                <img className={style.logoheader} src={logo} alt="logo" />
                <ul className={style.list}>
                    <li className={style.item}><a href="#">Home</a></li>
                    <li className={style.item}><a href="#">Quem Somos</a></li>
                    <li className={style.item}><a href="#">Portfólio</a></li>
                    <li className={style.item}><a href="#">Contato</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header