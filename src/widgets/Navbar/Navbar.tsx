import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={styles.navigation}>
            <li>dashboard</li>
            <li>settings</li>
        </nav>
    )
}