import React, { useEffect } from 'react';
import styles from './ourServices.module.css';
import { Link } from 'react-router-dom';
import development from '../../Assets/videos/development.mp4';
import reDesign from '../../Assets/videos/redesign.mp4';
import marketing from '../../Assets/videos/marketing.mp4';
import bug from '../../Assets/videos/bug.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';

const OurServices = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])
    
    return (
        <div className={styles.ourServicesContainer}>
            <h2 className={styles.headingWhite}>what we do</h2>
            <div className={styles.itemContainer}>
                <div className={styles.item}>
                    <div data-aos='fade-right' className={styles.headerContainer}>
                        <h2 className={styles.headingGreen}>Web Development</h2>
                        <p className={styles.textWhite}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <Link to='/service/web-development' className={styles.linkGreen}>
                            <span className={styles.linkGreenSlider}></span>
                            <span className={styles.linkGreenText}>Find Out More</span>
                        </Link>
                    </div>
                    <div className={styles.videoContainer}>
                        <video src={development} autoPlay muted playsInline loop className={styles.video}></video>
                    </div>
                </div>
                <div className={styles.item}>
                    <div data-aos='fade-left' className={styles.headerContainer}>
                        <h2 className={styles.headingBlue}>Website Redesign</h2>
                        <p className={styles.textWhite}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <Link to='/service/web-development' className={styles.linkBlue}>
                            <span className={styles.linkBlueSlider}></span>
                            <span className={styles.linkBlueText}>Find Out More</span>
                        </Link>
                    </div>
                    <div className={styles.videoContainer}>
                        <video src={reDesign} autoPlay muted playsInline loop className={styles.video}></video>
                    </div>
                </div>
                <div className={styles.item}>
                    <div data-aos='fade-right' className={styles.headerContainer}>
                        <h2 className={styles.headingGreen}>Bug Fixing</h2>
                        <p className={styles.textWhite}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <Link to='/service/web-development' className={styles.linkGreen}>
                            <span className={styles.linkGreenSlider}></span>
                            <span className={styles.linkGreenText}>Find Out More</span>
                        </Link>
                    </div>
                    <div className={styles.videoContainer}>
                        <video src={bug} autoPlay muted playsInline loop className={styles.video}></video>
                    </div>
                </div>
                <div className={styles.item}>
                    <div data-aos='fade-left' className={styles.headerContainer}>
                        <h2 className={styles.headingBlue}>Digital Marketing</h2>
                        <p className={styles.textWhite}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                        <Link to='/service/web-development' className={styles.linkBlue}>
                            <span className={styles.linkBlueSlider}></span>
                            <span className={styles.linkBlueText}>Find Out More</span>
                        </Link>
                    </div>
                    <div className={styles.videoContainer}>
                        <video src={marketing} autoPlay muted playsInline loop className={styles.video}></video>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurServices;
