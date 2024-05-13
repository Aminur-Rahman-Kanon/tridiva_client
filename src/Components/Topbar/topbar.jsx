import React from 'react';
import styles from './topbar.module.css';
import Logo from '../Logo/logo';
import Navbar from '../Navbar/navbar';
import SendQuery from '../SendQuery/sendQuery';
import Drawtoggle from '../Drawtoggle/drawtoggle';

const Topbar = () => {
    return (
        <div className={styles.topbarContainer}>
            <div className={styles.elementContainer}>
                <div className={styles.element1}>
                    <Drawtoggle />
                </div>
                <div className={styles.element2}>
                    <Logo />
                </div>
                <div className={styles.element3}>
                    <Navbar />
                </div>
                <div className={styles.element4}>
                    <SendQuery />
                </div>
            </div>
        </div>
    )
}

export default Topbar;
