import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import UserList from "./UserList";
import Playlist from "./Playlist";
// import update from 'immutability-helper';

class Home extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      currentUser: {},
      allUsers: [],
      userTracks: []
    }
    this.handlerUpdateSelectedUsers = this.handlerUpdateSelectedUsers.bind(this);
  }

  // handlerUpdateSelectedUsers(event) {
  //   // find user in allUsers array
  //   this.updateSelected(userId)
  //   console.log("selected users:")
  //   console.log(this.state.selectedUsers);

  // }

  handlerUpdateSelectedUsers(event) {
    const userId = event.target.name;
    let user = this.findUser(userId)
    user.selected = !user.selected
    let index = this.state.allUsers.indexOf(user)

    const users = this.state.allUsers
    users[index] = user

    // console.log(this.state.allUsers[0].selected)
    this.setState(prevState => ({
      // ...prevState,
      allUsers: users,
    }))
  };



  // allUsers[user_id].selected

    // this.setState({
    //   items: update(this.state.items, { 1: { name: { $set: 'updated field name' } } })
    // })

    // console.log("-----")
    // console.log("I'm in the update selected")
    // console.log(this.state.selectedUsers)

    // // const user = this.findUser(userId)
    // console.log("User returned is:")
    // console.log(user)
    // // debugger;
    // if (this.state.selectedUsers[userId]) {
    //   console.log("User was unchecked");
    //   // let index = this.state.selectedUsers.indexOf(user)
    //   console.log(index);
    //   // debugger;
    //   // let array = this.state.selectedUsers.filter((_,i) => i !== index)
    // } else {
    //   console.log("User was selected")
    //   return this.setState(state => {
    //     selectedUsers: state.selectedUsers.push(user)
    //   });
    // }


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
        console.log(array)
        this.setState({
          allUsers: array
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

        <Playlist />
        </div>
      </div>
    );
  }
}

export default Home;
