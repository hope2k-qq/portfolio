import React from 'react';
import styles from './footer.module.scss'
import { ReactComponent as GitHubIcon } from '../../assets/icon/icon_github.svg';
import { ReactComponent as TelegramIcon } from '../../assets/icon/icon_telegram_v2.svg';
import { ReactComponent as DiplomaIcon } from '../../assets/icon/icon_diploma.svg';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container_icon}>
                <GitHubIcon className={styles.icon}/>
                <span className={styles.text}>GitHub</span >
            </div>
            <div className={styles.container_icon}>
                <DiplomaIcon className={styles.icon}/>
                <span className={styles.text}>Diploma</span >
            </div>
            <div className={styles.container_icon}>
                <TelegramIcon className={styles.icon}/>
                <span className={styles.text}>Telegram</span >
            </div>
        </footer>
    );
};
