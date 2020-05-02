import React from "react";
import Track from "./Track";

class Playlist extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tracks: [],
      combinedPlaylistIds: []
    }
  this.createCombinedPlaylist = this.createCombinedPlaylist.bind(this);
  }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.group !== prevProps.group) {

      // 1. first remove any tracks of users that aren't in the group anymore:
      if (this.props.group.length < prevProps.group.length) {
        let tracks = this.state.tracks.filter(track => this.props.group.includes(track.user_id))
        return this.setState({
          tracks: tracks
        })
      } else {
      // 2. then find any users that have been added to the group:
      let newUser;
      if (this.props.group.length > prevProps.group.length) {
        this.props.group.forEach(user => {
          if (!prevProps.group.includes(user)) {
            newUser = user
          }
        })
      }

      // 3. then do an api call for any new members of the group:
      if (this.props.group.length == 0) {
        this.setState({
          tracks: [],
        })
      } else {
          const url = `/api/v1/users/${newUser}/tracks`;
          fetch(url)
            .then(response => {
              if (response.ok) {
                return response.json()
              }
              throw new Error("Network response was not ok.")
            })
            .then(data => {
              let newTracks = data.map(track => {
                track['user_id'] = newUser
                return track
              })

              let currentTracks = this.state.tracks
              currentTracks.push(newTracks)
              let combinedTracks = currentTracks.flat(Infinity);

              this.setState({
                tracks: combinedTracks
              })
            });
      }
    }
    }
  }

  createCombinedPlaylist() {
    let newPlaylist = [...this.state.tracks]
    newPlaylist = this.shuffle(newPlaylist)
    newPlaylist = newPlaylist.slice(0,25)
    this.state.combinedPlaylistIds = []
    newPlaylist.forEach(track => {
      this.state.combinedPlaylistIds.push(track.spotify_track_id)
    })
    console.log(this.state.combinedPlaylistIds)
    console.log(JSON.stringify(this.state.combinedPlaylistIds))
    return newPlaylist
  }

  shuffle(array) {
    // this is the Fisher-Yates Algorithm
    for(let i = array.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * i)
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  handlerGeneratePlaylist() {
    const data = this.state.combinedPlaylistIds;

    fetch("/api/v1/users.json", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    } )
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Network response was not ok.")
    })
    .then(data => {
      console.log('Success:', data);
  }

  // addContact = async data => {
  //   const response = await fetch(`${APIURL}/contacts`, {
  //     method: "POST",
  //     mode: "cors",
  //     cache: "no-cache",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify(data)
  //   });
  //   return response.json();
  // };

  render() {
    let playlist = this.createCombinedPlaylist();
    let renderPlaylist = playlist.map((track) => (
          <Track
            track_name={track.track_name}
            artist_name={track.artist_name}
            key={track.id}
          />
        ))

    const playlistStyle = {
      color: "black",
      border: "solid 4px red",
      borderRadius: "15px",
      backgroundColor: "white",
      padding: "10px",
      fontSize: "2rem"
    };

    return(
      <div>
        <h2 style={playlistStyle}>Playlist</h2>
        <div>
        <ul>
        {renderPlaylist}
        </ul>
        <button onClick={this.createCombinedPlaylist}>Shuffle</button>
        <form action='/add/playlist'>
          <button>Generate playlist</button>
        </form>
        </div>
      </div>
    );
  }

}

export default Playlist;
