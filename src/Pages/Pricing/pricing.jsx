import React from "react";
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
                        <span className={styles.priceEl3}>10.99</span>
                        <span className={styles.priceEl2}>/month</span>
                    </div>
                    <span className={styles.textSmall}>Based on £131.88 yearly</span>
                    <ul className={styles.listContainer}>
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
                        <span className={styles.priceEl3}>12.49</span>
                        <span className={styles.priceEl2}>/month</span>
                    </div>
                    <span className={styles.textSmall}>Based on £149.88 yearly</span>
                    <ul className={styles.listContainer}>
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
                    </ul>
                    <button className={styles.btn}>
                        <span className={styles.btnSlider}></span>
                        <span className={styles.btnText}>Choose Plan</span>
                    </button>
                </div>
                <div className={styles.card}>
                    <h2 className={styles.cardHeader}>Exclusive</h2>
                    <div className={styles.priceWrapper}>
                        <span className={styles.priceEl1}>£</span>
                        <span className={styles.priceEl3}>14.99</span>
                        <span className={styles.priceEl2}>/month</span>
                    </div>
                    <span className={styles.textSmall}>Based on £79.88 yearly</span>
                    <ul className={styles.listContainer}>
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
                    </ul>
                    <button className={styles.btn}>
                        <span className={styles.btnSlider}></span>
                        <span className={styles.btnText}>Choose Plan</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pricing;
