import React from 'react';
import styles from './tech_stack.module.scss';

const techItems = [
    { name: 'React', icon: '/react.svg' },
    { name: 'TypeScript', icon: '/typescript.svg' },
    { name: 'SCSS', icon: '/scss.svg' },
    { name: 'CSS3', icon: '/css.svg' },
    { name: 'React Router', icon: '/react_router.svg' },
    { name: 'Axios', icon: '/axios.svg' },
    { name: 'HTML5', icon: '/html5.svg' },
    { name: 'JavaScript', icon: '/javascript.svg' },
];

const toolsItems = [
    { name: 'WebStorm', icon: '/webstorm.svg' },
    { name: 'JetBrains Rider', icon: '/jetbrains_rider.svg' },
    { name: 'Git', icon: '/git.svg' },
    { name: 'Netlify', icon: '/netlify.svg' },
];

export const TechStack = () => {
    return (
        <section id="tech_stack" className={styles.div}>
            <h1 className={styles.stack_text}>Мій стек</h1>
            <div className={styles.grid}>
                {techItems.map((item) => (
                    <div key={item.name} className={styles.card}>
                        <img src={item.icon} alt={item.name} className={styles.icon}/>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>

            <h2 className={styles.tools_text}>Інструменти і прочее</h2>
            <div className={styles.grid}>
                {toolsItems.map((item) => (
                    <div key={item.name} className={styles.card}>
                        <img src={item.icon} alt={item.name} className={styles.icon}/>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
