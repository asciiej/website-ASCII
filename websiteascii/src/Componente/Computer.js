import computer from '../image/computer.png'
import style from './Presentation.module.css';

function Computer(){

    return(
        <img className={style.imgcomputer} src={computer} alt="computer"/>
    )
}

export default Computer