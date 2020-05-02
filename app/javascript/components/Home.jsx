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
      // userTracks: []
    }
    this.handlerUpdateSelectedUsers = this.handlerUpdateSelectedUsers.bind(this);
    this.getSelectedUsers = this.getSelectedUsers.bind(this);
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.state.allUsers !== prevState.allUsers) {
  //     let selectedUsers = this.state.allUsers.filter(user => user.selected)
  //     if (selectedUsers.length == 0) {
  //       this.setState({
  //         userTracks: [],
  //       })
  //     } else {
  //       selectedUsers.forEach(user => {
  //         const url = `/api/v1/users/${user.id}/tracks`;
  //         fetch(url)
  //           .then(response => {
  //             if (response.ok) {
  //               return response.json()
  //             }
  //             throw new Error("Network response was not ok.")
  //           })
  //           .then(data => {
  //             let array = data.map(track => {
  //               track['user_id'] = user.id
  //               return track
  //             })
  //             this.setState(state => {
  //               userTracks: state.userTracks.push(array)
  //             })
  //           });
  //       })
  //     }
  //   }
  // }

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
    console.log("these are the selected users:")
    console.log(selectedUsers)
    if (selectedUsers.length == 0) {
      console.log("these are the selected users ids:")
      console.log(selectedUsers)
      return selectedUsers
    } else {
      let selectedUsersIds = selectedUsers.map(user =>
        user.id
      )
      console.log("these are the selected users ids:")
      console.log(selectedUsersIds)
      return selectedUsersIds
    }
    // Use selectedUsers to create an array of user ids.
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

  // getPlaylist() {
  //   console.log("playlist from home:")
  //   let playlist = [];
  //   if (this.state.userTracks.length > 0) {
  //     this.state.userTracks.forEach((track, i) => {
  //       console.log(track)
  //       playlist.push({
  //         track_name: track.track_name,
  //         artist_name: track.artist_name
  //       })
  //     });
  //
  //   }
  //   return playlist.slice(0,10);
  // }
  //
  // shuffle(array) {
  //   // this is the Fisher-Yates Algorithm
  //   for(let i = array.length - 1; i > 0; i--){
  //     const j = Math.floor(Math.random() * i)
  //     const temp = array[i]
  //     array[i] = array[j]
  //     array[j] = temp
  //   }
  //   return array
  // }

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

    // let playlist = this.getPlaylist();
    // console.log(playlist)

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
