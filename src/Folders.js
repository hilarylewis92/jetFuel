import React, { Component } from 'react';

import URLs from './URLs'

class Folders extends Component {
  constructor(){
    super()
    this.state = {
      urls: [],
      longURL: '',
      folderID: ''
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

  handleURLSubmmit(e) {
    // e.preventDefault()
    fetch('http://localhost:3000/api/urls', {
      headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({
        long_url: this.state.longURL,
        folder_id: this.state.folderID
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
        {this.props.folders.map((folder, i) => {
          return (
            <li
              key={i}>
              <h3
                className='folder-name'>
                {folder.name}
              </h3>

              <form className="url-form" id={folder.id}>
                <label>Add a URL that you would like to have shortened:</label>
                <input
                  className="url-input"
                  type="url"
                  placeholder="http://"
                  onChange={(e) => this.setState({
                    longURL: e.target.value,
                    folderID: folder.id
                    })
                  }>
                </input>
                <button className="url-submit-button" type="submit" onClick={(e) => this.handleURLSubmmit(e) }>Submit</button>
              </form>

              <URLs
                urls = {urls}
              />
            </li>
          )
        })}
    </div>
    )
  }
}

export default Folders
