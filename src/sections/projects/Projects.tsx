import React from 'react';
import styles from './projects.module.scss'
import { ReactComponent as GitHubIcon } from '../../assets/icon/icon_github.svg';
import { ReactComponent as ExternalLinkIcon } from '../../assets/icon/external_link.svg';

const projectsItems = [
    {
        name: 'MEWEE',
        description: 'webstorm.svg',
        image: '/mewee.png',
        stack: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
        gitLink: 'https://github.com/JetBrains/webstorm'
    },
    {
        name: 'Portfolio',
        description: 'webstorm.svg',
        image: '/portfolio.png',
        stack: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
        liveLink: 'https://www.jetbrains.com/webstorm/',
        gitLink: 'https://github.com/JetBrains/webstorm'
    },
    {
        name: 'WoDOTA',
        description: 'webstorm.svg',
        image: '/wodota.png',
        stack: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
        liveLink: 'https://www.jetbrains.com/webstorm/',
        gitLink: 'https://github.com/JetBrains/webstorm'
    }
];


export const Projects = () => {
    return (
        <section id="projects" className={styles.div}>
            <h1 className={styles.projects_text}>Проекти</h1>
            <div className={styles.grid}>
                {projectsItems.map((item) => (
                    <div key={item.name} className={styles.card}>
                        <img src={item.image} alt={item.name} className={styles.image}/>
                        <div className={styles.card_container}>
                            <h2 className={styles.card_name}>{item.name}</h2>
                            <p className={styles.card_description}>{item.description}</p>
                            <div className={styles.line}></div>
                            <h3 className={styles.stack_name}>Стек</h3>
                            <ul className={styles.stack_list}>
                                {item.stack.map((tech) => (
                                    <li key={tech} className={styles.stack_item}>{tech}</li>
                                ))}
                            </ul>
                            <div className={styles.card_buttons}>
                                {item.gitLink && (
                                    <button className={styles.button}>
                                        <GitHubIcon className={styles.button_icon}/>
                                        <div className={styles.button_text}>Посмотреть код</div>
                                    </button>
                                )}
                                {item.liveLink && (
                                    <button className={styles.button}>
                                        <ExternalLinkIcon className={styles.button_icon}/>
                                        <div className={styles.button_text}>Посмотреть вживую</div>
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
