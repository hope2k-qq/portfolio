import React from 'react';
import styles from './about.module.scss'

export const About = () => {
    return (
        <section id="about" className={styles.div}>
            <h1 className={styles.about_text}>Про мене</h1>
            <p className={styles.text}>Мене звати Антон, мені 19 років. Я починаючий Frontend-розробник з України, наразі проживаю в Брно, Чехія.</p>
            <p className={styles.text}>Створюю сучасні веб-сайти з використанням React та TypeScript – від адаптивної верстки до реалізації логіки інтерфейсу.</p>
            <p className={styles.text}>Шукаю першу роботу, щоб отримати свій перший досвід та розвиватися як розробник.</p>
        </section>
    );
};
