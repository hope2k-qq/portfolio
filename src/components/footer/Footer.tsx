import React from 'react';
import styles from './footer.module.scss'
import { ReactComponent as GitHubIcon } from '../../assets/icon/icon_github.svg';
import { ReactComponent as TelegramIcon } from '../../assets/icon/icon_telegram_v2.svg';
import { ReactComponent as DiplomaIcon } from '../../assets/icon/icon_diploma.svg';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href="https://github.com/hope2k-qq" target="_blank" rel="noopener noreferrer"
               className={styles.container_icon}>
                <GitHubIcon className={styles.icon}/>
                <span className={styles.text}>GitHub</span>
            </a>

            <a href="/files/diploma.pdf" target="_blank" rel="noopener noreferrer" className={styles.container_icon}>
                <DiplomaIcon className={styles.icon}/>
                <span className={styles.text}>Diploma</span>
            </a>

            <a href="https://t.me/hope88k" target="_blank" rel="noopener noreferrer"
               className={styles.container_icon}>
                <TelegramIcon className={styles.icon}/>
                <span className={styles.text}>Telegram</span>
            </a>
        </footer>

    );
};
