import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css";

export const Hero = () =>{
    return <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>
            Hi, I 'm Anamika
            </h1>
            <p className={styles.description}>
                I'm a full-stack developer with 2 years of experience with React and C sharp.Reach out if you'd like to learn more!
            </p>
            <a href="mailto:anamikarpp@gmail.com" className={styles.contactBtn}>
            Contact Me
            </a>
            </div>
            <img 
            src ={getImageUrl("hero/heroImage.png")} 
            alt="Hero image of me"
            className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
    </section>;
}
