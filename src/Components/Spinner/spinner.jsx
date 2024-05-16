import React, { useEffect } from 'react';
import { SpinnerDotted } from 'spinners-react';
import styles from './spinner.module.css';

const Spinner = ({ load }) => {

    useEffect(() => {
        if (load) {
            document.body.style.overflowY = 'hidden';
        }

        return () => document.body.style.overflowY = 'auto';
    }, []);

    if (!load) return;

    return (
        <div className={styles.spinner}>
            <SpinnerDotted size={50} thickness={100} speed={100} color="#36ad47" />
        </div>
    )
}

export default Spinner;
