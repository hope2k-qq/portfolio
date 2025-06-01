import React from 'react';
import styles from './intro.module.scss'

export const Intro = () => {
    return (
        <section id="intro" className={styles.div}>
            <div>
                <h1 className={styles.text}>FRONT-END</h1>
                <h1 className={styles.text}>DEVELOPER</h1>
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
