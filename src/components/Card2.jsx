import avatar from "../assets/mako.jpg"
import "./Card.css"

const Card2 = () => {
    const name = "Mako";
    const title = "Fat Cat";

    return (
        <div className="card">
            <img src={avatar} alt="Makopotamus" className="avatar"/>
            <p>{name}</p>
            <p>{title}</p>
        </div>
    );
}

export default Card2;
