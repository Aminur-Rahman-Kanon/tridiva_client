import React from "react";
import { Link } from "react-router-dom";
import styles from './pricing.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';

const Pricing = () => {

    return (
        <div className={styles.pricingWrapper}>
            <h2 className={styles.headerWhite}>reduce costs with pre-negotiated transarent pricing</h2>
            <span className={styles.headerWhiteSmall}>
                Whether you choose one-of payment or pay monthly, price range are guaranteed to make you happy.
            </span>
            <div className={styles.cardContainer}>
                <div className={styles.card}>
                    <h2 className={styles.cardHeader}>Basic</h2>
                    <div className={styles.priceWrapper}>
                        <span className={styles.priceEl1}>£</span>
                        <span className={styles.priceEl3}>30</span>
                        <span className={styles.priceEl2}>/month</span>
                    </div>
                    <span className={styles.textSmall}>Based on £360 yearly</span>
                    <ul className={styles.listContainer}>
                        <li className={styles.list}>
                            <span className={styles.item}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </span>
                            <span className={styles.text}>10GB disk space</span>
                        </li>
                        <li className={styles.list}>
                            <span className={styles.item}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </span>
                            <span className={styles.text}>20GB Bandwidth</span>
                        </li>
                        <li className={styles.list}>
                            <span className={styles.item}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </span>
                            <span className={styles.text}>2 Email Address</span>
                        </li>
                        <li className={styles.list}>
                            <span className={styles.item}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </span>
                            <span className={styles.text}>Subdomains</span>
                        </li>
                        <li className={styles.list}>
                            <span className={styles.item}>
                                <FontAwesomeIcon icon={faX} className={styles.icon}/>
                            </span>
                            <span className={styles.text}>Maintenance</span>
                        </li>
                    </ul>
                    <button className={styles.btn}>
                        <span className={styles.btnSlider}></span>
                        <span className={styles.btnText}>Choose Plan</span>
                    </button>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.cardHeader}>Comprehensive</h2>
                    <div className={styles.priceWrapper}>
                        <span className={styles.priceEl1}>£</span>
                        <span className={styles.priceEl3}>500</span>
                        <span className={styles.priceEl2}>/year</span>
                    </div>
                    {/* <span className={styles.textSmall}>Based on £149.88 yearly</span> */}
                    <ul className={styles.listContainer}>
                        <li className={styles.list}>
                            <span className={styles.item}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </span>
                            <span className={styles.text}>20GB disk space</span>
                        </li>
                        <li className={styles.list}>
                            <span className={styles.item}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </span>
                            <span className={styles.text}>50GB Bandwidth</span>
                        </li>
                        <li className={styles.list}>
                            <span className={styles.item}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </span>
                            <span className={styles.text}>10 Email Address</span>
                        </li>
                        <li className={styles.list}>
                            <span className={styles.item}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </span>
                            <span className={styles.text}>Subdomains</span>
                        </li>
                        <li className={styles.list}>
                            <span className={styles.item}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </span>
                            <span className={styles.text}>Maintenance</span>
                        </li>
                    </ul>
                    <button className={styles.btn}>
                        <span className={styles.btnSlider}></span>
                        <span className={styles.btnText}>Choose Plan</span>
                    </button>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.cardHeader}>Exclusive</h2>
                    <div className={styles.priceWrapper}>
                        <span className={styles.priceEl1}>Not sure what you looking for</span>
                        {/* <span className={styles.priceEl3}>Talk to our expert</span>
                        <span className={styles.priceEl2}>Our experts are always ready to help you</span> */}
                    </div>
                    <span className={styles.textSmall}>Talk with our experts</span>
                    <span className={styles.textSmall}>Our experts are always here to help you</span>
                    {/* <ul className={styles.listContainer}>
                        <li className={styles.list}>
                            <span className={styles.item}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </span>
                            <span className={styles.text}>50GB disk space</span>
                        </li>
                        <li className={styles.list}>
                            <span className={styles.item}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </span>
                            <span className={styles.text}>50GB Bandwidth</span>
                        </li>
                        <li className={styles.list}>
                            <span className={styles.item}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </span>
                            <span className={styles.text}>20 Email Address</span>
                        </li>
                        <li className={styles.list}>
                            <span className={styles.item}>
                                <FontAwesomeIcon icon={faCheck} className={styles.icon}/>
                            </span>
                            <span className={styles.text}>Subdomains</span>
                        </li>
                        <li className={styles.list}>
                            <span className={styles.item}>
                                <FontAwesomeIcon icon={faX} className={styles.icon}/>
                            </span>
                            <span className={styles.text}>Maintenance</span>
                        </li>
                    </ul> */}
                    <a href="/contact" className={styles.btn}>
                        <span className={styles.btnSlider}></span>
                        <span className={styles.btnText}>Lets's Talk</span>
                    </a>
                </div>
            </div>
            <div className={styles.element5Container}>
                <h3 className={styles.headerSmall}>looking for something else?</h3>
                <h2 className={styles.headerWhiteLarge}>are you looking for someone to build a professional website for your company or youeself?</h2>
                <h3 className={styles.headerSmall}>we got you covered. our talented professional team are always ready for you here</h3>
                <Link to={'/contact'} className={styles.linkBlue}>
                    <span className={styles.linkBlueSlider}></span>
                    <span className={styles.linkText}>get a quote</span>
                </Link>
            </div>
            <div className={styles.element5Container}>
                <h3 className={styles.headerSmall}>let's talk</h3>
                <h2 className={styles.headerWhiteLarge}>our talented professional team are always here to hear from you.</h2>
                <Link to={'/contact'} className={styles.linkGreen}>
                    <span className={styles.linkGreenSlider}></span>
                    <span className={styles.linkText}>contact us</span>
                </Link>
            </div>
        </div>
    )
}

export default Pricing;
