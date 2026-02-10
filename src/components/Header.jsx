import styles from './header.module.css'

export default function Header({ toggleStyles, currentStyle }) {

    return (
        <header className={styles.header}>
            <nav className={styles.navBar}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#work">Work</a>
            </nav>
            <nav>
                <button onClick={toggleStyles} className={styles.darkModeToggle}>
                    {currentStyle === "dark-mode" ? "Light Mode" : "Dark Mode"}
                </button>
            </nav>
        </header>
    );
}