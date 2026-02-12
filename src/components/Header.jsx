import { Link } from 'react-router-dom';
import styles from './header.module.css';

export default function Header({ toggleStyles, currentStyle }) {

    return (
        <header className={styles.header}>
            <nav className={styles.navBar}>
                <Link to="/">Home</Link>
                <Link to="/fetched-profiles">Profiles</Link>
                <Link to="/add-profile">Add Profile</Link>
                <Link to="/about">About</Link>
            </nav>
            <nav>
                <button onClick={toggleStyles} className={styles.darkModeToggle}>
                    {currentStyle === "dark-mode" ? "Light Mode" : "Dark Mode"}
                </button>
            </nav>
        </header>
    );
}