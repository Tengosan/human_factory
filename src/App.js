import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Moneybox from './moneybox/Container';
import Market from './market/Container';
import Bag from './bag/Container';
import Factory from './factory/Container';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
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
