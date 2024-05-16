import React from "react";
import { Link } from 'react-router-dom';
import styles from './contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import bg from '../../Assets/quote/quote_bg.jpg';

const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.quoteContainer}>
                <div className={styles.wrapper}>
                    <span className={styles.cornerTop}></span>
                    <span className={styles.cornerBottom}></span>
                    <div className={styles.bgWrapper}>
                        <div className={styles.bgImgContainer}>
                            <img src={bg} alt='tridiva it' className={styles.bgImg}/>
                        </div>
                        <div className={styles.formContainer}>
                            <h2 className={styles.headingWhiteLarge}>get a quote</h2>
                            <form className={styles.formWrapper}>
                                <div className={styles.inputContainer}>
                                    <input type='text' placeholder="Full name" className={styles.input}/>
                                </div>
                                <div className={styles.inputContainer}>
                                    <input type='email' placeholder="Email address" className={styles.input}/>
                                </div>
                                <div className={styles.inputContainer}>
                                    <input type='number' placeholder="Phone number" className={styles.input}/>
                                </div>
                                <div className={styles.textareaContainer}>
                                    <textarea rows={10} placeholder="What can we do for you today?" className={styles.textarea} />
                                </div>
                                <button className={styles.linkGreen}>
                                    <span className={styles.linkGreenSlider}></span>
                                    <span className={styles.linkGreenText}>submit query</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.element5Container}>
                <h3 className={styles.headerWhite}>looking for something else?</h3>
                <h2 className={styles.headerSmall}>are you looking for someone to build a professional website for your company or youeself?</h2>
                <h3 className={styles.headerExSmall}>we got you covered. our talented professional team are always ready for you here</h3>
                <Link to={'/service/web-development'} className={styles.linkBlue}>
                    <span className={styles.linkBlueSlider}></span>
                    <span className={styles.linkText}>checkout our service</span>
                </Link>
            </div>
            <div className={styles.element5Container}>
                <h3 className={styles.headerWhite}>checkout our pricing</h3>
                <h2 className={styles.headerSmall}>whether you got small or large project, our low flexible price range will make tour feet in e-commerce field.</h2>
                <h3 className={styles.el5TextWhite}>TRIDIVA IT pround to offer low price flexible payment options that are unbeatable in industries.
                Besides, we have several payment options that will hep you choose the best options that will fit your need. Whether you choose one-off-payment or pay monthly, our price range are guaranteed to make you happy.
                And in case, if you are not happy then yoy can leave us anytime. See our terms & conditions for more details.</h3>
                <Link to={'/pricing'} className={styles.linkBlue}>
                    <span className={styles.linkBlueSlider}></span>
                    <span className={styles.linkText}>go to pricing</span>
                </Link>
            </div>
        </div>
    )
}

export default Contact;
