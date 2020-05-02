import React from "react";
import Track from "./Track";

class Playlist extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tracks: []
    }
  this.getPlaylist = this.getPlaylist.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.group !== prevProps.group) {
      // first remove any tracks of users that aren't in the group anymore:
      if (this.props.group.length !== 0) {
        let tracks = this.state.tracks.filter(track => this.props.group.includes(track.user_id))
        console.log("tracks in playist")
        console.log(tracks)
      } else {
        console.log("tracks is empty")
      }
      // then find any users that have been added to the group:
      // let newMembers = this.props.group.
      // console.log(newMembers)
      // vendors.filter(vendor => vendor.Name === "Magenic")

      // then do an api call for any new members of the group:
      if (this.props.group.length == 0) {
        this.setState({
          tracks: [],
        })
      } else {
        this.props.group.forEach(user => {
          const url = `/api/v1/users/${user}/tracks`;
          fetch(url)
            .then(response => {
              if (response.ok) {
                return response.json()
              }
              throw new Error("Network response was not ok.")
            })
            .then(data => {
              let array = data.map(track => {
                track['user_id'] = user
                return track
              })
              this.setState(state => {
                tracks: state.tracks.push(array)
              })
            });
        })
      }
    }
  }

  getPlaylist() {
    console.log("playlist from home:")
    let playlist = [];
    if (this.state.userTracks.length > 0) {
      this.state.userTracks.forEach((track, i) => {
        console.log(track)
        playlist.push({
          track_name: track.track_name,
          artist_name: track.artist_name
        })
      });

    }
    return playlist.slice(0,10);
  }

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

  render() {
    const playlist = [];
    if (this.state.tracks.length > 0) {
    playlist = this.state.tracks.map((track) => (
          <Track
            track_name={track.track_name}
            artist_name={track.artist_name}
            key={track.id}
          />
        ))
      };

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
          {playlist}
        </ul>
        </div>
      </div>
    );
  }


}

export default Playlist;
