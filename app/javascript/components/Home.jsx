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
    const url = "/api/v1/users.json";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Network response was not ok.")
      })
      .then(data => {
        let array = data.map(user => {
          user['selected'] = false
          return user
        })
        this.setState({
          allUsers: array,
        })
      });
  };

  render() {

    return (
      <div>
        <Nav />
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>

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
