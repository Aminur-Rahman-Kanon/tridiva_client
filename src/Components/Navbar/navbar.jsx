import React from 'react';
import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <NavLink to={'/'} className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Service</NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Pricing</NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Our Work</NavLink>
            <NavLink className={({isActive}) => isActive ? `${styles.navLink} ${styles.active}` : styles.navLink}>Contact</NavLink>
        </div>
    )
}

export default Navbar;
