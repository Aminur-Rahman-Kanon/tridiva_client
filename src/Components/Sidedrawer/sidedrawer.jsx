import React, { useContext } from 'react';
import ContextApi from '../ContextApi/contextApi';
import ReactDOM from 'react-dom';
import styles from './sidedrawer.module.css';
import Logo from '../Logo/logo';
import { faX } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../Navbar/navbar';
import dev from '../../Assets/videos/development.mp4';
import design from '../../Assets/videos/redesign.mp4';
import bug from '../../Assets/videos/bug.mp4';
import marketing from '../../Assets/videos/marketing.mp4';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Sidedrawer = ({ sidedrawer }) => {

    const context = useContext(ContextApi);

    const toggleSidedrawerHandler = context.toggleSidedrawer;

    return ReactDOM.createPortal(
    <div className={sidedrawer ? `${styles.sidedrawerWrppaer} ${styles.active}` : styles.sidedrawerWrppaer}>
        <div className={styles.topContainer}>
            <div className={styles.logoContainer}>
                <Logo />
            </div>
            <div className={styles.xBtnContainer} onClick={toggleSidedrawerHandler}>
                <FontAwesomeIcon icon={faX} className={styles.xBtn} />
            </div>
        </div>
        <div className={styles.middleContainer}>
            <Navbar />
        </div>
        <div className={styles.slideshowWrapper}>
            <h2 className={styles.headerWhite}>Services</h2>
            <div className={styles.slideshowContainer}>
                <div className={styles.slideShow}>
                    <div className={styles.videoContainer}>
                        <video type="video/mp4" src={dev} autoPlay muted playsInline loop className={styles.video}></video>
                    </div>
                    <div className={styles.headerContainer}>
                        <h2 className={styles.headerWhite}>Web Development</h2>
                        <Link className={styles.link}>Find Out More</Link>
                    </div>
                </div>
                <div className={styles.slideShow}>
                    <div className={styles.videoContainer}>
                        <video type="video/mp4" src={design} autoPlay muted playsInline loop className={styles.video}></video>
                    </div>
                    <div className={styles.headerContainer}>
                        <h2 className={styles.headerWhite}>Website Redesign</h2>
                        <Link className={styles.link}>Find Out More</Link>
                    </div>
                </div>
                <div className={styles.slideShow}>
                    <div className={styles.videoContainer}>
                        <video type="video/mp4" src={bug} autoPlay muted playsInline loop className={styles.video}></video>
                    </div>
                    <div className={styles.headerContainer}>
                        <h2 className={styles.headerWhite}>Bug Fixing</h2>
                        <Link className={styles.link}>Find Out More</Link>
                    </div>
                </div>
                <div className={styles.slideShow}>
                    <div className={styles.videoContainer}>
                        <video type="video/mp4" src={marketing} autoPlay muted playsInline loop className={styles.video}></video>
                    </div>
                    <div className={styles.headerContainer}>
                        <h2 className={styles.headerWhite}>Digital Marketing</h2>
                        <Link className={styles.link}>Find Out More</Link>
                    </div>
                </div>
            </div>

        </div>
        <div className={styles.bottomItemContainer}>
            <h3 className={styles.headerWhite}>About the Company</h3>
            <div className={styles.bottomItem}>
                <a href="#" className={styles.item}>
                    <span className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faLocationDot} className={styles.icon}/>
                    </span>
                    <span className={styles.text}>124 Whitechapel Road, London E1 1JE</span>
                </a>
                <a href="mailto:acharjee@tridivait.co.uk" className={styles.item}>
                    <span className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faEnvelope} className={styles.icon}/>
                    </span>
                    <span className={styles.text}>acharjee@tridivait.co.uk</span>
                </a>
                <a href="tel:+447875531847" className={styles.item}>
                    <span className={styles.iconContainer}>
                        <FontAwesomeIcon icon={faPhone} className={styles.icon}/>
                    </span>
                    <span className={styles.text}>07875531847</span>
                </a>
            </div>
            <div className={styles.socialLinkWrapper}>
                <h2 className={styles.headerWhiteSmall}>Follow Us</h2>
                <div className={styles.socialLinkContainer}>
                    <a href="#" className={styles.socialLink}>
                        <FontAwesomeIcon icon={faFacebookF} className={styles.socialLinkIcon} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <FontAwesomeIcon icon={faLinkedinIn} className={styles.socialLinkIcon} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <FontAwesomeIcon icon={faInstagram} className={styles.socialLinkIcon} />
                    </a>
                    <a href="#" className={styles.socialLink}>
                        <FontAwesomeIcon icon={faTwitter} className={styles.socialLinkIcon} />
                    </a>
                </div>
            </div>
        </div>
    </div>, document.getElementById('sidedrawer'))
}

export default Sidedrawer;
