import hanson from "../assets/hanson.png" // Replace 'image' variable and file path to image

const Card = () => {
    const name = "Hanson";
    const title = "Web Developer";

    return (
        <div>
            <img src={hanson} alt="Hanson"/> // Replace image variable
            <p>{name}</p>
            <p>{title}</p>
        </div>
    );
}

export default Card;
