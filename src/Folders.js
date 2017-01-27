import React, { Component } from 'react';

import URLs from './URLs'

class Folders extends Component {
  constructor(){
    super()
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/api/urls', {
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      method: 'get'
    })
    .then((res) => res.json())
    .then((res) => {
      this.setState({
        urls: res
      })
    })
    .catch((err) => {
      console.error(err);
    })
  }

  render(){
    const { urls } = this.state

    return (
      <div>
        {this.props.folders.map(folder => {
          return (
            <li
              key={folder.id}>
              <h3
              className='folder-name'>
              {folder.name}
              </h3>

              <form className="url-form" id="${folder.id}">
                <label>Add a URL that you would like to have shortened:</label>
                <input className="url-input" type="url" value="http://"></input>
                <button className="url-submit-button" type="submit">Submit</button>
              </form>

              <table id="table-${folder.id}">
                <tr className="table-header">
                  <th>URL</th>
                  <th>Shortened URL</th>
                </tr>
                <URLs
                  urls = {urls}
                />

              </table>
            </li>
          )
        })}
    </div>
    )
  }
}

export default Folders
