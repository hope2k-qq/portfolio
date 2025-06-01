import React from 'react';
import { ReactComponent as TelegramIcon } from '../../assets/icon/icon_telegram.svg';
import { ReactComponent as GitHubIcon } from '../../assets/icon/icon_github.svg';
import styles from './topbar.module.scss';
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";
import {useTranslation} from "react-i18next";

export const TopBar = () => {
    const { t } = useTranslation();
    return (
        <header className={styles.header}>
            <div className={styles.logo_container}>
                <img className={styles.logo} src={"/logo.png"} alt={"logo"}/>
                <div className={styles.name_container}>
                    <div>{t("name")}</div>
                    <div>{t("lastname")}</div>
                </div>
            </div>
            <div className={styles.right_container}>
                <div className={styles.icons_container}>
                    <a href="https://t.me/hope88k" target="_blank" rel="noopener noreferrer">
                        <TelegramIcon className={styles.icon}/>
                    </a>
                    <a href="https://github.com/hope2k-qq" target="_blank" rel="noopener noreferrer">
                        <GitHubIcon className={styles.icon}/>
                    </a>
                </div>
                <LanguageSwitcher/>
            </div>
        </header>
    );
};
