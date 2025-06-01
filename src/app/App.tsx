import React from 'react';
import './App.css';
import {Intro} from "../sections/intro/Intro";
import {TopBar} from "../components/topbar/TopBar";

function App() {
  return (
    <div className="App">
        <TopBar />
        <Intro />
    </div>
  );
}

export default App;
