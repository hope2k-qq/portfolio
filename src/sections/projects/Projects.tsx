import React from 'react';
import styles from './projects.module.scss'

const projectsItems = [
    {
        name: 'MEWEE',
        description: 'webstorm.svg',
        image: '/mewee.png',
        stack: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
        liveLink: 'https://www.jetbrains.com/webstorm/',
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
                            <h3>Стек</h3>
                            <ul className={styles.stack_list}>
                                {item.stack.map((tech) => (
                                    <li key={tech} className={styles.stack_item}>{tech}</li>
                                ))}
                            </ul>
                            <div className={styles.card_buttons}>
                                {item.gitLink && (
                                    <a href={item.gitLink} target="_blank" rel="noopener noreferrer"
                                       className={styles.button}>
                                        Посмотреть код
                                    </a>
                                )}
                                {item.liveLink && (
                                    <a href={item.liveLink} target="_blank" rel="noopener noreferrer"
                                       className={styles.button}>
                                        Посмотреть вживую
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
