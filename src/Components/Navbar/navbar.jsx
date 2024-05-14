import React from 'react';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbarContainer}>
            <a href='/' className={styles.navLink}>Home</a>
            <a href='#' className={styles.navLink}>Service</a>
            <a href='/pricing' className={styles.navLink}>Pricing</a>
            <a href='#' className={styles.navLink}>Our Work</a>
            <a href='#'className={styles.navLink}>Contact</a>
        </div>
    )
}

export default Navbar;
