import React from 'react';
import styles from './about.module.scss'
import {useTranslation} from "react-i18next";

export const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className={styles.div}>
            <h2 className={styles.about_text}>{t("about_me")}</h2>
            <p className={styles.text}>{t("about_me_text1")}</p>
            <p className={styles.text}>{t("about_me_text2")}</p>
            <p className={styles.text}>{t("about_me_text3")}</p>
        </section>
    );
};
