import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    console.log('test');
    return (
      <div className="App">
        <header className="App-header">
          <img src={`${process.env.REACT_APP_PUBLIC_BUILD_URL}/logo.svg`} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
