import React from 'react';
import styles from  './app.module.scss';
import {Intro} from "../sections/intro/Intro";
import {TopBar} from "../components/topbar/TopBar";
import {About} from "../sections/about/About";
import {TechStack} from "../sections/techStack/TechStack";
import {Projects} from "../sections/projects/Projects";
import {Footer} from "../components/footer/Footer";
import HeadTags from "../components/headTags/HeadTags";
import {HelmetProvider} from "react-helmet-async";

function App() {
  return (
      <HelmetProvider>
          <div className={styles.app}>
              <HeadTags/>
              <TopBar/>
              <main className={styles.container}>
                  <Intro/>
                  <About/>
                  <TechStack/>
                  <Projects/>
              </main>
              <Footer/>
          </div>
      </HelmetProvider>
  );
}

export default App;
