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
                        <p className={styles.textWhite}>Unlock the full potential of your business with our expert web development services! From stunning, responsive websites to powerful web applications, we craft custom solutions that drive engagement and growth. Whether you need a sleek, user-friendly front-end, a robust back-end, or a complete full-stack solution, our team has the skills to bring your vision to life. Get noticed online with a site that’s fast, secure, and optimized for success. Let’s build something great together—contact us today!</p>
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
                        <p className={styles.textWhite}>Transform your online presence with our professional website redesign services! Whether your site feels outdated, isn’t mobile-friendly, or simply doesn’t reflect your brand’s vision, we’ll revamp it to be modern, visually stunning, and user-friendly. Boost your site’s performance, improve user experience, and enhance functionality with a design that drives results. Ready for a fresh look that captivates visitors and increases conversions? Let’s give your website a makeover that stands out—contact us today!</p>
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
                        <p className={styles.textWhite}>Is your website or app plagued by glitches or errors? Our expert bug fixing service is here to help! We quickly identify and resolve issues, ensuring smooth functionality and flawless user experience. From minor bugs to major technical challenges, our team ensures your site or app runs perfectly, minimizing downtime and maximizing performance. Don’t let bugs hold you back—let us fix them fast so you can focus on what matters. Contact us today for a seamless, error-free experience!</p>
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
                        <p className={styles.textWhite}>Boost your brand’s online visibility and drive real results with our expert digital marketing services! From targeted social media campaigns to SEO, PPC, email marketing, and content creation, we tailor strategies to grow your audience and increase conversions. Whether you're looking to generate leads, build brand awareness, or engage customers, our data-driven approach ensures every campaign delivers maximum impact. Ready to take your business to the next level? Let’s start building your digital success—contact us today!</p>
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
