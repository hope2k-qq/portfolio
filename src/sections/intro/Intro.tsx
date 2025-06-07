import React from 'react';
import styles from './intro.module.scss'
import {AnimatedText} from "./components/AnimatedText";


export const Intro = () => {
    return (
        <section id="intro" className={styles.div}>
            <div className={styles.text_container}>
                <AnimatedText text="FRONT-END" className={styles.text} />
                <AnimatedText text="DEVELOPER" className={styles.text} />
                <button
                    className={styles.button_github}
                    onClick={() => window.open('https://github.com/hope2k-qq', '_blank')}
                >
                    github
                </button>
            </div>
            <img src={"/pngegg.png"} alt={"intro_img"}/>
        </section>
    );
};
