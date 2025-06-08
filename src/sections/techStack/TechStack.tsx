import React from 'react';
import styles from './tech_stack.module.scss';
import {useTranslation} from "react-i18next";
import { techItems, toolsItems } from '../../data/techToolsData';

export const TechStack = () => {
    const { t } = useTranslation();
    return (
        <section id="tech_stack" className={styles.div}>
            <h2 className={styles.stack_text}>{t("my_stack")}</h2>
            <div className={styles.grid}>
                {techItems.map((item) => (
                    <div key={`tech-${item.name}`} className={styles.card}>
                        <img src={item.icon} alt={item.name} className={styles.icon}/>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>

            <h3 className={styles.tools_text}>{t("tools_more")}</h3>
            <div className={styles.grid}>
                {toolsItems.map((item) => (
                    <div key={`tool-${item.name}`} className={styles.card}>
                        <img src={item.icon} alt={item.name} className={styles.icon}/>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
