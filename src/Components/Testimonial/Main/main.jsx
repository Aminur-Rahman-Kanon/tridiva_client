import React from 'react';
import styles from './main.module.css';
import Template from '../Template/template';
import { testimonial } from '../../../Data/data';

const Testimonial = () => {

    if (!testimonial) return;

    return (
        <section className={styles.main}>
            <div className={styles.titleWrapper}>
                <title className={styles.title1}>Client</title>
                <title className={styles.title2}>Testimonial</title>
            </div>
            <div className={styles.testimonial}>
                {
                    <Template profile={testimonial[0]}/>
                    // testimonial.map(item => <Template key={item.id} profile={item} />)
                }
            </div>
        </section>
    )
}

export default Testimonial;
