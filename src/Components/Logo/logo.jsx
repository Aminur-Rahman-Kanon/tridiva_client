import React from 'react';
import styles from './logo.module.css';
import logo from '../../Assets/Logo/logo.png';

const Logo = () => {
    return (
        <div className={styles.logoContainer}>
            <img src={logo} alt="tridiva it" className={styles.img}/>
        </div>
    )
}

export default Logo;
