import React, { useEffect } from 'react';
import styles from './whyChooseUs.module.css';
import wcuBg from '../../Assets/why_choose_us/w_c_u_bg.jpg';
import wcu1 from '../../Assets/why_choose_us/w_c_u_1.jpg';
import wcu2 from '../../Assets/why_choose_us/w_c_u_2.jpg';
import wcu3 from '../../Assets/why_choose_us/w_c_u_3.jpg';
import wcu4 from '../../Assets/why_choose_us/w_c_u_4.jpg';
import wcu5 from '../../Assets/why_choose_us/w_c_u_5.jpg';
import wcu6 from '../../Assets/why_choose_us/w_c_u_6.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className={styles.elementWrapper}>
            <h2 className={styles.headerWhite}>Why Choose Us</h2>
            <div className={styles.container}>
                <div className={styles.itemContainer}>
                    <div data-aos="fade-right" className={styles.item}>
                        <div className={styles.itemImgContainer}>
                            <img src={wcu6} alt="tridiva it" className={styles.itemImg}/>
                        </div>
                        <div className={styles.headingContainer}>
                            <h4 className={styles.headerSmall}>Create Experience</h4>
                            <span className={styles.text}>We create experiences that are attractive, simple to use, and drive results for your company.</span>
                        </div>
                    </div>
                    <div data-aos="fade-right" className={styles.item}>
                        <div className={styles.itemImgContainer}>
                            <img src={wcu5} alt="tridiva it" className={styles.itemImg}/>
                        </div>
                        <div className={styles.headingContainer}>
                            <h4 className={styles.headerSmall}>Ask, Listen and Understand</h4>
                            <span className={styles.text}>We begin each project by gaining a solid understanding of who you are, what you do and why you do it.</span>
                        </div>
                    </div>
                    <div data-aos="fade-right" className={styles.item}>
                        <div className={styles.itemImgContainer}>
                            <img src={wcu2} alt="tridiva it" className={styles.itemImg}/>
                        </div>
                        <div className={styles.headingContainer}>
                            <h4 className={styles.headerSmall}>Quick Response</h4>
                            <span className={styles.text}>If you're like most people, after you've made up your mind to do a website, you want it NOW! </span>
                        </div>
                    </div>
                </div>
                <div className={styles.bgContainer}>
                    <img src={wcuBg} alt="tridiva it" className={styles.bg}/>
                </div>
                <div className={styles.itemContainer}>
                    <div data-aos="fade-left" className={styles.item}>
                        <div className={styles.itemImgContainer}>
                            <img src={wcu1} alt="tridiva it" className={styles.itemImg}/>
                        </div>
                        <div className={styles.headingContainer}>
                            <h4 className={styles.headerSmall}>Competetive Pricing</h4>
                            <span className={styles.text}>We offer web design, development, corporate branding, hosting at unbeatable price.</span>
                        </div>
                    </div>
                    <div data-aos="fade-left" className={styles.item}>
                        <div className={styles.itemImgContainer}>
                            <img src={wcu4} alt="tridiva it" className={styles.itemImg}/>
                        </div>
                        <div className={styles.headingContainer}>
                            <h4 className={styles.headerSmall}>Small Team</h4>
                            <span className={styles.text}>We keep our teams small, agile and focused on you.</span>
                        </div>
                    </div>
                    <div data-aos="fade-left" className={styles.item}>
                        <div className={styles.itemImgContainer}>
                            <img src={wcu3} alt="tridiva it" className={styles.itemImg}/>
                        </div>
                        <div className={styles.headingContainer}>
                            <h4 className={styles.headerSmall}>We Do the Work</h4>
                            <span className={styles.text}>From principals to junior members of the team, we all work together on website development projects. </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs;
