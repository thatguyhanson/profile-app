import hanson from "../assets/hanson.png"
import "./Card.css"

const Card = () => {
    const name = "Hanson";
    const title = "Web Developer";

    return (
        <div className="card">
            <img src={hanson} alt="Hanson" className="avatar"/>
            <p>{name}</p>
            <p>{title}</p>
        </div>
    );
}

export default Card;
