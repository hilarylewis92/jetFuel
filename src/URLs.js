import React, { Component } from 'react';


class URLs extends Component {

  handlePopularityClick() {

  }

  render(){
    return (
      <table id="table-${folder.id}">
        <tr className="table-header">
          <th>URL</th>
          <th>Shortened URL</th>
          <th>Number of Visits</th>
        </tr>

        {this.props.urls.map((url, i) => {
          return (
            <tr key={i}>
              <td>
                <a href={url.long_url}>
                  {url.long_url}
                </a>
              </td>
              <td>
                <a href={url.long_url}>
                  {url.short_url}
                </a>
              </td>
              <td>
                {url.popularity}
              </td>
            </tr>
          )
        })}
      </table>
    )
  }
}

export default URLs
