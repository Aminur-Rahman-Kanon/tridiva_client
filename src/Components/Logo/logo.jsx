import React from 'react';
import styles from './logo.module.css';
import logo from '../../Assets/Logo/logo.png';

const Logo = () => {
    return (
        <a href="/" className={styles.logoContainer}>
            <img src={logo} alt="tridiva it" className={styles.img}/>
        </a>
    )
}

export default Logo;
