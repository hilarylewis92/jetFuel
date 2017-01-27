import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1
          className="title">
          Jet Fuel
        </h1>
          <img
            className="rocket-ship"
            src="./icons/transport-2.svg"
            alt="rocket ship"
          />
          <form>
            <label
              for="folder-label">
              Add a new folder to house similar URLs:
            </label>
            <input
              id="folder-input"
              placeholder="Full URL folder...">
            </input>
            <button
              className="folder-submit-button"
              type="submit">
              Submit
            </button>
          </form>

          <ul
            id="folders-container">
          </ul>
      </div>
    );
  }
}

export default App;
