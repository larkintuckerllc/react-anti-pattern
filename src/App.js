import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypesBad from './components/PropTypesBad';
import PropTypesGood from './components/PropTypesGood';
import PropTypesGoodDefault from './components/PropTypesGoodDefault';
import JSXSpreadAttributesBad from './components/JSXSpreadAttributesBad';
import JSXSpreadAttributesGood from './components/JSXSpreadAttributesGood';

/* eslint-disable-next-line */
class App extends Component {
  render() {
    return (
      /* eslint-disable-next-line */
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <PropTypesBad />
        <PropTypesGood />
        <PropTypesGoodDefault />
        <JSXSpreadAttributesBad />
        <JSXSpreadAttributesGood />
      </div>
    );
  }
}

export default App;
