import React from 'react';
import './App.css';
import { data } from './data';
import './components/style.css';
import CharacterSelect from './components/CharacterSelect';
import Attributes from './components/Attributes';
import Stats from './components/Stats';
import GameMap from './components/GameMap';
import Location from './components/Location';

function App() {
  return (
    <div className="App">
      <header className="top">
        <img src={data.logo} alt="ZWM Blokers Logo" />
      </header>

      <section className="container">
        <div className="sidebar">
          <Attributes />
          <Stats />
        </div>

        <CharacterSelect />

        <div className="sidebar">
          <Location />
          <span className="mapdiv">
            <GameMap />
          </span>
        </div>
        
      </section>
    </div>
  );
}

export default App;
