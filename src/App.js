import React, { Component } from 'react';
import './App.css';
import Moneybox from './moneybox/Container';
import Market from './market/Container';
import Bag from './bag/Container';
import Factory from './factory/Container';
import man from './image/man.png';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={man} className="App-logo" alt="logo" />
            <h1 className="App-title">Human factory</h1>
          </header>
          <Moneybox />
          <Market/>
          <Bag/>
          <Factory/>
        </div>
    );
  }
}

export default App;
