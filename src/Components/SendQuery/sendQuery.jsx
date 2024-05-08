import React from 'react';
import styles from './sendQuery.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const SendQuery = () => {
    return (
        <div className={styles.sendQueryContainer}>
            <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faPaperPlane} className={styles.icon}/>
            </div>
            <span className={styles.text}>Send Query</span>
        </div>
    )
}

export default SendQuery;
