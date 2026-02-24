import { useRef, useLayoutEffect, useState, memo } from "react";
import styles from "./card.module.css";

const Card = memo(({ name, title, image }) => {
    const cardRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [isNarrow, setIsNarrow] = useState(false);

    useLayoutEffect(() => {
        if (cardRef.current) {
            const width = cardRef.current.offsetWidth;
            setCardWidth(width);

            setIsNarrow(width < 100);
        }
    }, []);

    return (
        <div 
            ref={cardRef}
            className={`${styles.card} ${isNarrow ? styles.cardNarrow : ''}`}
            title={`${name} - ${title}`}
        >
            <img src={image} alt={name} />
            <p className={styles.name}>{name}</p>
            <p className={styles.title}>{title}</p>
            <div style={{ visibility: 'hidden', position: 'absolute', fontSize: '0.75rem' }}>
                Width: {cardWidth}px
            </div>
        </div>
    );
});

Card.displayName = 'Card';

export default Card;