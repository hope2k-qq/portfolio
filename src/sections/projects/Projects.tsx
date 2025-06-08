import React from 'react';
import styles from './projects.module.scss'
import { ReactComponent as GitHubIcon } from '../../assets/icon/icon_github.svg';
import { ReactComponent as ExternalLinkIcon } from '../../assets/icon/external_link.svg';
import { ProjectsData } from '../../data/projectsData';
import {useTranslation} from "react-i18next";

export const Projects = () => {
    const projectsItems = ProjectsData();
    const { t } = useTranslation();

    return (
        <section id="projects" className={styles.div}>
            <h2 className={styles.projects_text}>{t("projects")}</h2>
            <div className={styles.grid}>
            {projectsItems.map((item) => (
                    <div key={item.name} className={styles.card}>
                        <img src={item.image} alt={item.name} className={styles.image}/>
                        <div className={styles.card_container}>
                            <div className={styles.card_content}>
                                <h3 className={styles.card_name}>{item.name}</h3>
                                <p className={styles.card_description}>{item.description}</p>
                                <div className={styles.line}></div>
                                <h3 className={styles.stack_name}>{t("stack")}</h3>
                                <ul className={styles.stack_list}>
                                    {item.stack.map((tech) => (
                                        <li key={`${item.name}-${tech}`} className={styles.stack_item}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.card_buttons}>
                                {item.gitLink && (
                                    <button
                                        className={styles.button}
                                        onClick={() => window.open(item.gitLink, '_blank', 'noopener,noreferrer')}
                                        aria-label="View code on GitHub"
                                    >
                                        <GitHubIcon className={styles.button_icon}/>
                                        <span className={styles.button_text}>{t("view_code")}</span>
                                    </button>
                                )}
                                {item.liveLink && (
                                    <button
                                        className={styles.button}
                                        onClick={() => window.open(item.liveLink, '_blank', 'noopener,noreferrer')}
                                        aria-label="See it live project"
                                    >
                                        <ExternalLinkIcon className={styles.button_icon} />
                                        <span className={styles.button_text}>{t("see_live")}</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
