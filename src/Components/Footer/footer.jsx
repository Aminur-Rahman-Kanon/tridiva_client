import React from "react";
import styles from './footer.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/logo';


const Footer = () => {

    return (
        <div className={styles.footerContainer}>
            <div className={styles.topContainer}>
                <Logo />
            </div>
            <div className={styles.bottomContainer}>
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
                <div className={styles.bottomItem}>
                    <h3 className={styles.headerWhite}>About the Company</h3>
                    <span className={styles.text}>The IT Consultancy firm will customer-oriented so that the prospective clients are satisfied with the results</span>
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
        </div>
    )
}

export default Footer;
