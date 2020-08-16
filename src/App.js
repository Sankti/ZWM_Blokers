import React from 'react';
import './App.css';
import { data } from './data';
import './components/style.css';
import CharacterSelect from './components/CharacterSelect';
import LeftSidebar from './components/LeftSidebar';
import Stats from './components/Stats';

function App() {
  return (
    <div className="App">
      <header className="top">
        <img src={data.logo} alt="ZWM Blokers Logo" />
      </header>

      <section className="container">
        <div className="sidebar">
          <LeftSidebar />
          <Stats />
        </div>
        
        <CharacterSelect />

        <div className="sidebar">
          <LeftSidebar />
        </div>
        
      </section>
    </div>
  );
}

export default App;
