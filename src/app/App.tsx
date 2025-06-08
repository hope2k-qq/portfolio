import React from 'react';
import styles from  './app.module.scss';
import {Intro} from "../sections/intro/Intro";
import {TopBar} from "../components/topbar/TopBar";
import {About} from "../sections/about/About";
import {TechStack} from "../sections/techStack/TechStack";
import {Projects} from "../sections/projects/Projects";
import {Footer} from "../components/footer/Footer";

function App() {
  return (
    <div className={styles.app}>
        <TopBar />
        <main className={styles.container}>
            <Intro />
            <About />
            <TechStack />
            <Projects />
        </main>
        <Footer />
    </div>
  );
}

export default App;
