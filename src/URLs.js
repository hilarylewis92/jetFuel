import React, { Component } from 'react';
import moment from "moment";

class URLs extends Component {
  constructor(){
    super()
    this.state = {
      sortedURLs: [],
      sortAsc: true
    }
  }

  componentDidMount() {
    this.sortURLs()
  }

  sortURLs() {
    const { urls } = this.props

    let sortedURLs = urls.sort((leftURL, rightURL) => {
      const leftTimeStamp = moment(leftURL.created_at).unix()
      const rightTimeStamp = moment(rightURL.created_at).unix()

      if(this.state.sortAsc){
        return rightTimeStamp - leftTimeStamp
      } else {
        return leftTimeStamp - rightTimeStamp
      }
    })

    this.setState({
      sortedURLs
    })
  }

  toggleSort() {
    this.setState ({
      sortAsc: !this.state.sortAsc
    })
    this.sortURLs()
  }

  render(){
    const { sortedURLs } = this.state

    return (
      <table className="table-container" id="table-${folder.id}">
        <tr className="table-header">
          <th>URL</th>
          <th>Shortened URL</th>
          <th onClick={() => this.toggleSort()}>Created At:</th>
          <th>Number of Visits</th>
        </tr>

        {sortedURLs.map((url, i) => {
          return (
            <tr key={i}>
              <td>
                <a href={url.long_url}>
                  {url.long_url}
                </a>
              </td>
              <td>
                <a href={`http://${url.short_url}`}>
                  {url.short_url}
                </a>
              </td>
              <td>
                {moment(url.created_at).format('MM/DD/YYYY, h:mm a')}
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
