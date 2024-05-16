import React, { useContext } from 'react';
import styles from './drawtoggle.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import ContextApi from '../ContextApi/contextApi';

const Drawtoggle = () => {

    const context = useContext(ContextApi);

    const toggleHandler = context.toggleSidedrawer;

    return (
        <div className={styles.container} onClick={toggleHandler}>
            <div className={styles.drawtoggleWrapper}>
                <FontAwesomeIcon icon={faBarsStaggered} className={styles.drawtoggle} />
            </div>
        </div>
    )
}

export default Drawtoggle;
