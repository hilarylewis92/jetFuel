import React, { Component } from 'react';
require('es6-promise').polyfill()
require('isomorphic-fetch')

import Folders from './Folders'

class App extends Component {
  constructor(){
    super()
    this.state = {
      folders: [],
      folderName: '',
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/folders', {
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      method: 'get'
    })
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        folders: res
      })
    })
    .catch((err) => {
      console.error(err);
    })
  }

  handleFolderSubmit() {
    fetch('http://localhost:3000/api/folders', {
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        name: this.state.folderName,
      })
    })
    .catch((err) => {
      console.error(err);
    })
  }


  render() {
    const { folders } = this.state

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
            htmlFor="folder-label">
            Add a new folder to house similar URLs:
          </label>
          <input
            id="folder-input"
            placeholder="Full URL folder..."
            onChange={(e) => this.setState({
              folderName: e.target.value,
              })
            }
          >
          </input>
          <button
            className="folder-submit-button"
            type="submit"
            onClick={() => this.handleFolderSubmit() }
          >
            Submit
          </button>
        </form>

        <ul
          id="folders-container">
          <Folders
            folders={folders}
          />
        </ul>
      </div>
    );
  }
}

export default App;
