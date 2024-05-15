import React from 'react';
import { Link } from 'react-router-dom';
import styles from './sendQuery.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const SendQuery = () => {
    return (
        <Link to={'/contact'}className={styles.sendQueryContainer}>
            <div className={styles.iconContainer}>
                <FontAwesomeIcon icon={faPaperPlane} className={styles.icon}/>
            </div>
            <span className={styles.text}>Contact Us</span>
        </Link>
    )
}

export default SendQuery;
