import React from 'react';
import styles from './homepage.module.css';
import banner from '../../Assets/videos/banner1.mp4';
import { Link } from 'react-router-dom';
import introBg from '../../Assets/others/intro_bg.jpg';
import outroBg from '../../Assets/others/outro_bg.jpg';
import OurServices from '../../Components/OurServices/ourServices';
import WhyChooseUs from '../../Components/WhyChooseUs/whyChooseUs';

const Homepage = () => {
    return (
        <div className={styles.homepageContainer}>
            <div className={styles.bannerContainer}>
                <div className={styles.videoContainer}>
                    <video src={banner} type='video/mp4' width={'100%'} playsInline autoPlay muted loop className={styles.video}></video>
                </div>
                <div className={styles.headerContainer}>
                    <h2 className={styles.headingWhite}>Building Digital Product, Brand and Experience</h2>
                    <p className={styles.textWhite}>More Than 10 Years of Experience in Digital Marketing</p>
                    <Link to='#' className={styles.link}>
                        <span className={styles.linkSlider}></span>
                        <span className={styles.linkText}>Get Started</span>
                    </Link>
                </div>
            </div>
            <div className={styles.introContainer}>
                <div className={styles.introHeadingContainer}>
                    <h2 className={styles.headingBlue}>We've been transforming companies through design innovation since 2014</h2>
                    <p className={styles.introTextWhite}>Elevate your brand with our cutting-edge branding and web design services. We specialise in creating visually stunning and strategically impactful designs that resonate with your target audience.</p>
                    <Link to='#' className={styles.introLink}>
                        <span className={styles.introLinkSlider}></span>
                        <span className={styles.introLinkText}>Explore More</span>
                    </Link>
                </div>
                <div className={styles.introBgContainer}>
                    <img src={introBg} alt='tridiva it' className={styles.introBg} />
                </div>
            </div>

            <OurServices />

            <div className={styles.outroContainer}>
                <div className={styles.outroHeadingContainer}>
                    <h2 className={styles.headingGreen}>Lets Build Something Extraordinary</h2>
                    <p className={styles.introTextWhite}>Elevate your brand with our cutting-edge branding and web design services. We specialise in creating visually stunning and strategically impactful designs that resonate with your target audience.</p>
                    <Link to='#' className={styles.outroLink}>
                        <span className={styles.outroLinkSlider}></span>
                        <span className={styles.outroLinkText}>Lets Talk</span>
                    </Link>
                </div>
                <div className={styles.introBgContainer}>
                    <img src={outroBg} alt='tridiva it' className={styles.outroBg} />
                </div>
            </div>
            <div className={styles.wrapper}>
                <WhyChooseUs />
            </div>
        </div>
    )
}

export default Homepage;
