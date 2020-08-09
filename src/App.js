import React from 'react';
import logo from './logo.svg';
import './App.css';

import './components/style.css'
import CharacterSelect from './components/CharacterSelect';

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <section className="container">
        <CharacterSelect />
      </section>
    </div>
  );
}

export default App;
