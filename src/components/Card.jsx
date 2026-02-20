import { useRef, useLayoutEffect, useState } from "react";
import styles from "./card.module.css";

const Card = ({ name, title, image }) => {
    // useRef to store reference to the card DOM element
    const cardRef = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [isNarrow, setIsNarrow] = useState(false);

    // useLayoutEffect to measure DOM properties before paint
    useLayoutEffect(() => {
        if (cardRef.current) {
            // Measure the current width of the card
            const width = cardRef.current.offsetWidth;
            setCardWidth(width);

            // Dynamically adjust layout based on card width
            // If card is narrower than 100px, set narrow layout
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
            {/* Hidden element that stores the measured width for debugging/reference */}
            <div style={{ visibility: 'hidden', position: 'absolute', fontSize: '0.75rem' }}>
                Width: {cardWidth}px
            </div>
        </div>
    );
}

export default Card;