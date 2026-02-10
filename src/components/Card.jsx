import styles from "./card.module.css"

const Card = ({ name, title, image }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={name} />
            <p>{name}</p>
            <p>{title}</p>
        </div>
    );
}

export default Card;