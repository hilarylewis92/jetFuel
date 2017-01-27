import React, { Component } from 'react';


class URLs extends Component {

  render(){
    return (
      <div>
        {this.props.urls.map(url => {
          return (
            <tr>
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
            </tr>
          )
        })}
    </div>
    )
  }
}

export default URLs
