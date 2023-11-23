import { AppLink } from 'src/shared'

import styles from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <AppLink active to='/'>dashboard</AppLink>
                </li>
                <li className={styles.listItem}>
                    <AppLink to='/settings'>settings</AppLink>
                </li>
            </ul>
        </nav>
    )
}