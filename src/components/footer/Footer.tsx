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
                <div className={styles.text}>GitHub</div>
            </div>
            <div className={styles.container_icon}>
                <DiplomaIcon className={styles.icon}/>
                <div className={styles.text}>Diploma</div>
            </div>
            <div className={styles.container_icon}>
                <TelegramIcon className={styles.icon}/>
                <div className={styles.text}>Telegram</div>
            </div>
        </footer>
    );
};
