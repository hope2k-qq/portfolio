import React from 'react';
import styles from './intro.module.scss'

const AnimatedText: React.FC<{ text: string; className?: string }> = ({ text, className }) => {
    return (
        <h1 className={className}>
            {text.split('').map((char, idx) => (
                <span key={idx} className={styles.letter}>
          {char === ' ' ? '\u00A0' : char}
        </span>
            ))}
        </h1>
    );
};

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
