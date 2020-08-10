import React from 'react';
import './App.css';
import { data } from './data';
import './components/style.css';
import CharacterSelect from './components/CharacterSelect';
import LeftSidebar from './components/LeftSidebar';

function App() {
  return (
    <div className="App">
      <header>
        <img src={data.logo} alt="ZWM Blokers Logo" />
      </header>

      <section className="container">
        <LeftSidebar />
        <CharacterSelect />
      </section>
    </div>
  );
}

export default App;
