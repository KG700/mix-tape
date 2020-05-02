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
      selectedUsers: [],
      userTracks: []
    }
    this.handlerUpdateSelectedUsers = this.handlerUpdateSelectedUsers.bind(this);
  }

  handlerUpdateSelectedUsers(event) {
    const userId = event.target.name;
    // find user in allUsers array
    this.updateSelected(userId)
    console.log("selected users:")
    console.log(this.state.selectedUsers);

  }

  updateSelected(userId) {
    console.log("-----")
    console.log("I'm in the update selected")
    console.log(this.state.selectedUsers)

    const user = this.findUser(userId)
    console.log("User returned is:")
    console.log(user)
    // debugger;
    if (this.state.selectedUsers.includes(user)) {
      console.log("User was unchecked");
      let index = this.state.selectedUsers.indexOf(user)
      console.log(index);
      // debugger;
      let array = this.state.selectedUsers.filter((_,i) => i !== index)
      return this.setState({
        selectedUsers: array
      })
    } else {
      console.log("User was selected")
      return this.setState(state => {
        selectedUsers: state.selectedUsers.push(user)
      });
    }

  };

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
      .then(data => { this.setState({ allUsers: data }) });
  };

  componentDidMount() {
    const url = "/api/v1/current_user.json";
    fetch(url)
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
        <CurrentUser />
        
        <Nav />
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

          <UserList
            allUsers={this.state.allUsers}
            selectedUsers={this.state.selectedUsers}
            checkboxFunction={this.handlerUpdateSelectedUsers}
          />

          <Playlist />
        </div>
      </div>
    );
  }
}

export default Home;
