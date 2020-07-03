import React from "react";
import Nav from "./Nav";
import UserList from "./UserList";
import Playlist from "./Playlist";

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: {},
      allUsers: [],
      showUsers: true
    }
    this.handlerUpdateSelectedUsers = this.handlerUpdateSelectedUsers.bind(this);
    this.getSelectedUsersIds = this.getSelectedUsersIds.bind(this);
    this.toggleUserList = this.toggleUserList.bind(this);
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
    return this.state.allUsers.filter(user => user.selected)
  }

  getSelectedUsersIds() {
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

  toggleUserList(){
    this.setState(state => ({
      showUsers: !state.showUsers
    }))
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

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (typeof this.state.currentUser !== 'undefined' && typeof this.state.allUsers !== 'undefined') {
      if (prevState.currentUser !== this.state.currentUser) {
        const users = [...this.state.allUsers]
        let user = this.findUser(this.state.currentUser.id)
        let index = this.state.allUsers.indexOf(user)

        user.selected = true
        users[index] = user

        this.setState(({
          allUsers: users,
        }))
      }
    }
  }

  render() {

    let selectedUsers = this.state.allUsers.filter(user => user.selected)

    const mynav = {
      backgroundColor: "#ffaa01",
      height: "50px",
      padding: "10px",
      fontSize: "4rem"
    };

    const container = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: '10px',
      marginBottom: "30px"
    }

    return (
      <div>

        <div style={mynav}>
          <Nav
            currentUser={this.state.currentUser}
          />
        </div>

        <div style={container}>
          <UserList
            currentUser={this.state.currentUser}
            allUsers={this.state.allUsers}
            showUsers={this.state.showUsers}
            checkboxFunction={this.handlerUpdateSelectedUsers}
            selectedUsers={selectedUsers}
          />

          <Playlist
            currentUser={this.state.currentUser.id}
            groupIds={this.getSelectedUsersIds()}
            group={this.getSelectedUsers()}
            toggleUserList={this.toggleUserList}
          />
        </div>

      </div>

    );
  }
}

export default Home;
