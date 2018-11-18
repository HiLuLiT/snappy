import './Admin.scss';
import User from '../User/User';
import React from 'react';
import {serverLocation} from '../../serverLocation';

export default class Admin extends React.Component  {
   constructor() {
    super();
    this.state = {
      fetchedData: "",
      dataIsHere: false
    };
  }
  
  componentDidMount() {
    this.readData();
  };

  updateDataFromServer(data) {
    this.setState({
      fetchedData: data
    })
  }

  renderData() {
    if (this.state.dataIsHere) {
      return this.state.fetchedData.map((user, i) =>  
      <User key={i} user={user}/> 
      )
    }
  }

  // buildExplore() {
    // return this.props.playlists.map((playlist, i) => <Playlist key={playlist.id}
                                                              //  playlist={playlist}/>
    // )
  // };

  readData() {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `${serverLocation}/users/data`);
    xhr.addEventListener('load', () => {
      const data = JSON.parse(xhr.responseText);
      this.updateDataFromServer(data);
      this.setState({
        dataIsHere: true
      })
    });

    xhr.addEventListener('error', () => {
      alert('problem fetching data');
    });
    xhr.send();
  }

  render() {
    // take data from JSON file
    return (
			<div className="admin">
        <h1>Admin dashboard</h1>
        <table className="table-data">
        <img src="snappy.png"></img>
          <tbody> 
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Email Address</th>
              <th>Phone number</th>
            </tr>
              {this.renderData()}
          </tbody>
        </table>
      </div>
    );
  }
}