import React from "react";
import styles from './development.module.css';
import banner from '../../../Assets/videos/development.mp4';
import mobile from '../../../Assets/products/mobile.png';
import agile from '../../../Assets/products/agile.png';
import responsive from '../../../Assets/products/responsive.png';
import award from '../../../Assets/products/award.png';

const Development = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.bannerContainer}>
                <div className={styles.videoContainer}>
                    <video src={banner} type='video/mp4' autoPlay muted loop playsInline className={styles.video}></video>
                </div>
                <div className={styles.headerContainer}>
                    <h2 className={styles.bannerHeaderWhite}>We dont just design website we design solutions</h2>
                </div>
            </div>
            <div className={styles.element2Container}>
                <h2 className={styles.headerWhiteLarge}>What we do</h2>
                <span className={styles.textWhite}>The engineering excellence of the door means that although the face a are among the
slimmest available on the market with a newly reduced typical sight line of just 90mm, the
frames are incredibly strong, which ensures that each individual exterior bi-fold door panel
can go up to an industry leading 1500mm wide as well as up to 3300 mm high.</span>
                <div className={styles.iconsMain}>
                    <div className={styles.iconContainer}>
                        <div className={styles.iconWrapper}>
                            <img src={mobile} alt='tridiva it' className={styles.icon} />
                        </div>
                        <span className={styles.textWhiteSmal}>mobile approach first</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <div className={styles.iconWrapper}>
                            <img src={responsive} alt='tridiva it' className={styles.icon} />
                        </div>
                        <span className={styles.textWhiteSmal}>full responsive</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <div className={styles.iconWrapper}>
                            <img src={agile} alt='tridiva it' className={styles.icon} />
                        </div>
                        <span className={styles.textWhiteSmal}>agile development proocess</span>
                    </div>
                    <div className={styles.iconContainer}>
                        <div className={styles.iconWrapper}>
                            <img src={award} alt='tridiva it' className={styles.icon} />
                        </div>
                        <span className={styles.textWhiteSmal}>high quality content</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Development;
