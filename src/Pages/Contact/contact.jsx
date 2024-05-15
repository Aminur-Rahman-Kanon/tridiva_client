import React from "react";
import { Link } from 'react-router-dom';
import styles from './contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <div className={styles.headerContainer}>
                    <h2 className={styles.headerWhite}>contact us</h2>
                    <span className={styles.textWhite}>Need to get in touch with us? Either fill out the form with inquiry or call us.</span>
                    <div className={styles.phoneLinkContainer}>
                        <a href="tel:+447875531847" className={styles.phoneWrapper}>
                            <div className={styles.phoneIconWrapper}>
                                <FontAwesomeIcon icon={faPhone} className={styles.phoneIcon} />
                            </div>
                            <span className={styles.phoneText}>+447875531847</span>
                        </a>
                    </div>
                </div>
                <form className={styles.formWrapper}>
                    <div className={styles.inputWrapper}>
                        <input type="text" placeholder="Full name" className={styles.input} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="number" placeholder="Phone number" className={styles.input} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <input type="email" placeholder="Email address" className={styles.input} />
                    </div>
                    <div className={styles.textareaWrapper}>
                        <textarea placeholder="What can we do for you today" rows={10} maxLength={500} className={styles.textarea} />
                    </div>
                    <button className={styles.submitBtn}>
                        <span className={styles.btnSlider}></span>
                        <span className={styles.btnText}>send query</span>
                    </button>
                </form>
            </div>
            <div className={styles.element5Container}>
                <h3 className={styles.headerWhite}>looking for something else?</h3>
                <h2 className={styles.headerSmall}>are you looking for someone to build a professional website for your company or youeself?</h2>
                <h3 className={styles.headerExSmall}>we got you covered. our talented professional team are always ready for you here</h3>
                <Link to={''} className={styles.linkBlue}>
                    <span className={styles.linkBlueSlider}></span>
                    <span className={styles.linkText}>get a quote</span>
                </Link>
            </div>
            <div className={styles.element5Container}>
                <h3 className={styles.headerWhite}>checkout our pricing</h3>
                <h2 className={styles.headerSmall}>whether you got small or large project, our low flexible price range will make tour feet in e-commerce field.</h2>
                <h3 className={styles.el5TextWhite}>TRIDIVA IT pround to offer low price flexible payment options that are unbeatable in industries.
                Besides, we have several payment options that will hep you choose the best options that will fit your need. Whether you choose one-off-payment or pay monthly, our price range are guaranteed to make you happy.
                And in case, if you are not happy then yoy can leave us anytime. See our terms & conditions for more details.</h3>
                <Link to={''} className={styles.linkBlue}>
                    <span className={styles.linkBlueSlider}></span>
                    <span className={styles.linkText}>get a quote</span>
                </Link>
            </div>
        </div>
    )
}

export default Contact;
