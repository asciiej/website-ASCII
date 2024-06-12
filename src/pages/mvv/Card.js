
function Card ( props ) {
    return (
        <div className="Card-mvv">
            <img className="Card-mvv__icon" src={props.icon} alt="" ></img>
            <h2 className="Card-mvv__titulo">{props.titulo}</h2>
            <p clasName="Card-mvv__texto">{props.texto}</p>
        </div>
    );
}

export default Card;