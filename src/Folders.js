import React, { Component } from 'react';

class Folders extends Component {
  render(){
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


              </table>
            </li>
          )
        })}
    </div>
    )
  }
}

export default Folders
