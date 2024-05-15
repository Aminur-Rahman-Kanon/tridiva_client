import React, { useEffect } from "react";
import styles from './development.module.css';
import banner from '../../../Assets/videos/development.mp4';
import mobile from '../../../Assets/products/mobile.png';
import agile from '../../../Assets/products/agile.png';
import responsive from '../../../Assets/products/responsive.png';
import award from '../../../Assets/products/award.png';
import trust from '../../../Assets/products/trust.jpg';
import solution from '../../../Assets/products/solution.jpg';
import bootstrap from '../../../Assets/products/bootstrap.png';
import css from '../../../Assets/products/css.png';
import django from '../../../Assets/products/django.png';
import express from '../../../Assets/products/express.png';
import flask from '../../../Assets/products/flask.png';
import html from '../../../Assets/products/html.png';
import js from '../../../Assets/products/js.png';
import less from '../../../Assets/products/less.png';
import mongo from '../../../Assets/products/mongo.png';
import mysql from '../../../Assets/products/mysql.png';
import node from '../../../Assets/products/node.png';
import postgres from '../../../Assets/products/postgres.png';
import python from '../../../Assets/products/python.png';
import react from '../../../Assets/products/react.png';
import sass from '../../../Assets/products/sass.png';
import vue from '../../../Assets/products/vue.png';
import angular from '../../../Assets/products/angular.png';
import { Link } from "react-router-dom";


const Development = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        const header = document.getElementById('header-white');
        if (header){
            header.className = `${styles.bannerHeaderWhite} ${styles.animate}`;
        }
    }, [])
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.bannerContainer}>
                <div className={styles.videoContainer}>
                    <video src={banner} type='video/mp4' autoPlay muted loop playsInline className={styles.video}></video>
                </div>
                <div className={styles.headerContainer}>
                    <h2 className={styles.bannerHeaderWhite} id="header-white">We dont just design website we design solutions</h2>
                </div>
            </div>
            <div className={styles.element2Main}>
                <h2 className={styles.headerUnderline}>what we do</h2>
                <p className={styles.el2textWhite}>The engineering excellence of the door means that although the face a are among the slimmest available on the market with a newly reduced typical sight line of just 90mm, the frames are incredibly strong, which ensures that each individual exterior bi-fold door panel can go up to an industry leading 1500mm wide as well as up to 3300 mm high.</p>
                <div className={styles.el2CardContainer}>
                    <div className={styles.el2Group}>
                        <div className={styles.el2Card}>
                            <div className={styles.cardIconContainer}>
                                <img src={mobile} alt="tridiva it" className={styles.cardIcon}/>
                            </div>
                            <div className={styles.cardTextContainer}>
                                <span className={styles.el2TextSmall}>mobile approach first</span>
                            </div>
                        </div>
                        <div className={styles.el2Card}>
                            <div className={styles.cardIconContainer}>
                                <img src={responsive} alt="tridiva it" className={styles.cardIcon}/>
                            </div>
                            <div className={styles.cardTextContainer}>
                                <span className={styles.el2TextSmall}>fully responsive</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.el2Group}>
                        <div className={styles.el2Card}>
                            <div className={styles.cardIconContainer}>
                                <img src={agile} alt="tridiva it" className={styles.cardIcon}/>
                            </div>
                            <div className={styles.cardTextContainer}>
                                <span className={styles.el2TextSmall}>agile development process</span>
                            </div>
                        </div>
                        <div className={styles.el2Card}>
                            <div className={styles.cardIconContainer}>
                                <img src={award} alt="tridiva it" className={styles.cardIcon}/>
                            </div>
                            <div className={styles.cardTextContainer}>
                                <span className={styles.el2TextSmall}>high quality content</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.element3Container}>
                <div className={styles.bgContainer}>
                    <img src={trust} alt='tridiva it' className={styles.bg} />
                </div>
                <div className={styles.element3HeaderContainer}>
                    <h2 className={styles.headerWhiteLarge}>is tridiva it trustworthy</h2>
                    <span className={styles.textWhite} style={{textAlign: 'left'}}>Let's be honest and cut
                        through the marketing
                        bullshit, you need a website
                        that looks amazing and
                        actually works. The bottom
                        line, that's what we do . If you
                        want to learn more about
                        working with me, look through
                        my website.
                    </span>
                </div>
            </div>
            <div className={styles.element4Container1}>
                <div className={styles.element4HeaderContainer}>
                    <h2 className={styles.headerWhiteLarge}>we focus on solution that you need</h2>
                    <span className={styles.textWhite} style={{textAlign: 'left'}}>Let's be honest and cut
                        through the marketing
                        bullshit, you need a website
                        that looks amazing and
                        actually works. The bottom
                        line, that's what we do . If you
                        want to learn more about
                        working with me, look through
                        my website.
                    </span>
                </div>
                <div className={styles.bgContainer}>
                    <img src={solution} alt='tridiva it' className={styles.bg} />
                </div>
            </div>
            <div className={styles.element4Container}>
                <h3 className={styles.headerWhiteSmall}>technology we use</h3>
                <div className={styles.element4Wrapper}>
                    <h2 className={styles.headerWhiteLarge}>front end technologies</h2>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={html} alt="html" className={styles.icon} />
                            </div>
                            <span className={styles.cardText}>html</span>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={css} alt="css" className={styles.icon} />
                            </div>
                            <span className={styles.cardText}>css</span>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={less} alt="less" className={styles.icon} />
                            </div>
                            <span className={styles.cardText}>less</span>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={sass} alt="sass" className={styles.icon} />
                            </div>
                            <span className={styles.cardText}>sass</span>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={bootstrap} alt="bootstrap" className={styles.icon} />
                            </div>
                            <span className={styles.cardText}>bootstrap</span>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={js} alt="javascript" className={styles.icon} />
                            </div>
                            <span className={styles.cardText}>javascript</span>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={react} alt="react" className={styles.icon} />
                            </div>
                            <span className={styles.cardText}>react</span>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={vue} alt="vue" className={styles.icon} />
                            </div>
                            <span className={styles.cardText}>vue</span>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={angular} alt="angular" className={styles.icon} />
                            </div>
                            <span className={styles.cardText}>html</span>
                        </div>
                    </div>
                </div>
                <div className={styles.element4Wrapper}>
                    <h2 className={styles.headerWhiteLarge}>back end technologies</h2>
                    <div className={styles.cards}>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={flask} alt="flask" className={styles.icon} />
                            </div>
                            <span className={styles.cardText}>flask</span>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={django} alt="django" className={styles.icon} />
                            </div>
                            <span className={styles.cardText}>django</span>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={mongo} alt="mongodb" className={styles.icon} />
                            </div>
                            <span className={styles.cardText} style={{textTransform: 'none'}}>MongoDB</span>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={node} alt="nodejs" className={styles.icon} />
                            </div>
                            <span className={styles.cardText}>nodejs</span>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={express} alt="expressjs" className={styles.icon} />
                            </div>
                            <span className={styles.cardText}>express</span>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={python} alt="python" className={styles.icon} />
                            </div>
                            <span className={styles.cardText}>python</span>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={postgres} alt="postgresql" className={styles.icon} />
                            </div>
                            <span className={styles.cardText} style={{textTransform: 'none'}}>PostgreSQl</span>
                        </div>
                        <div className={styles.card}>
                            <div className={styles.iconContainer}>
                                <img src={mysql} alt="mysql" className={styles.icon} />
                            </div>
                            <span className={styles.cardText} style={{textTransform: 'none'}}>MySQL</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.element5Container}>
                <h3 className={styles.headerWhiteSmall}>get a qoute for your website</h3>
                <h2 className={styles.headerWhiteLarge}>are you looking for someone to build a professional website for your company or youeself?</h2>
                <h3 className={styles.headerWhiteSmall}>we got you covered. our talented professional team are always ready for you here</h3>
                <Link to={''} className={styles.linkBlue}>
                    <span className={styles.linkBlueSlider}></span>
                    <span className={styles.linkText}>get a quote</span>
                </Link>
            </div>
            <div className={styles.element5Container}>
                <h2 className={styles.headerWhiteLarge}>guaranteed low price</h2>
                <h4 className={styles.headerWhiteSmall}>Wether you got small or large project, our low flexible price range will make your feet in e-business field</h4>
                <span className={styles.el6TextWhite}>TRIDIVA IT is proud to offer low price flexible payment options that are unbeatable in inustries. Besides, we have
                several payment options that will help you choose the best option that fit your need. Whether you choose one-of payment or pay monthly, our price range are guaranteed
                to make you happy. And in case, if you are not happy then you can leave us anytime. See our terms & Condions for more details.</span>
                <Link to={''} className={styles.linkGreen}>
                    <span className={styles.linkGreenSlider}></span>
                    <span className={styles.linkText}>go to pricing</span>
                </Link>
            </div>
        </div>
    )
}

export default Development;
