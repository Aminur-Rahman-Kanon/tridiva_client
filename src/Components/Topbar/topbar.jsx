import React from 'react';
import styles from './topbar.module.css';
import Logo from '../Logo/logo';
import Navbar from '../Navbar/navbar';
import SendQuery from '../SendQuery/sendQuery';

const Topbar = () => {
    return (
        <div className={styles.topbarContainer}>
            <div className={styles.elementContainer}>
                <Logo />
                <Navbar />
                <SendQuery />
            </div>
        </div>
    )
}

export default Topbar;
