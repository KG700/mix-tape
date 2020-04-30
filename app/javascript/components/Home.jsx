import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import UserList from "./UserList";
import Playlist from "./Playlist";

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: {},
      allUsers: [],
      selectedUsers: [],
      userTracks: []
    }
  }

  componentDidMount() {
    const url = "/api/v1/users.json";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Network response was not ok.")
      })
      .then(data => { this.setState({ allUsers: data }) });
  }

  render() {

    return (
      <div>
        <Nav />
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>
        <UserList allUsers={this.state.allUsers} />
        <Playlist />
        </div>
      </div>
    );
  }
}

export default Home;
