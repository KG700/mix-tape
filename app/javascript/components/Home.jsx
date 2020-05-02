import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import UserList from "./UserList";
import Playlist from "./Playlist";
import CurrentUser from "./CurrentUser";

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: {},
      allUsers: [],
    }
    this.handlerUpdateSelectedUsers = this.handlerUpdateSelectedUsers.bind(this);
    this.getSelectedUsers = this.getSelectedUsers.bind(this);
  }

  handlerUpdateSelectedUsers(event) {
    const users = [...this.state.allUsers]
    const userId = event.target.name;
    let user = this.findUser(userId)
    let index = this.state.allUsers.indexOf(user)

    user.selected = !user.selected
    users[index] = user

    this.setState(({
      allUsers: users,
    }))
  };

  getSelectedUsers() {
    let selectedUsers = this.state.allUsers.filter(user => user.selected)
    if (selectedUsers.length == 0) {
      return selectedUsers
    } else {
      let selectedUsersIds = selectedUsers.map(user =>
        user.id
      )
      return selectedUsersIds
    }
  }

  findUser(userId) {
    let specificUser;
    this.state.allUsers.map(user => {
      if (user.id == userId) {
        specificUser = user;
      };
    })
    return specificUser;
  }

  componentDidMount() {
  
    fetch("/api/v1/users.json")
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Network response was not ok.")
      })
      .then(data => { this.setState({ allUsers: data }) });

    fetch("/api/v1/currentuser.json")
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Network response was not ok.")
      })
      .then(data => { this.setState({ currentUser: data }) });
  };

  render() {

    return (
      <div>
        <CurrentUser 
          currentUser={this.state.currentUser}
        />
        
        <Nav />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

        <UserList
          allUsers={this.state.allUsers}
          checkboxFunction={this.handlerUpdateSelectedUsers}
        />

        <Playlist
          group={this.getSelectedUsers()}
        />
        </div>
      </div>
      
    );
  }
}

export default Home;
