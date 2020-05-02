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
      console.log("these are prevProps")
        console.log(prevProps)

      // 1. first remove any tracks of users that aren't in the group anymore:
      if (this.props.group.length < prevProps.group.length) {
        let tracks = this.state.tracks.filter(track => this.props.group.includes(track.user_id))
        console.log("tracks in playist")
        console.log(tracks)

        return this.setState({
          tracks: tracks
        })

      } else {

      // 2. then find any users that have been added to the group:
      let newUser;
      if (this.props.group.length > prevProps.group.length) {
        console.log(this.props.group)
        this.props.group.forEach(user => {
          console.log(user)
          console.log(prevProps.group)
          if (!prevProps.group.includes(user)) {
            newUser = user
          }
        } )
        // user = this.props.group[this.props.group.length -1]
        console.log(newUser)
      }

      // then do an api call for any new members of the group:
      if (this.props.group.length == 0) {
        this.setState({
          tracks: [],
        })
      } else {
        // this.props.group.forEach(user => {
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
              console.log(newTracks)

              let currentTracks = this.state.tracks
              console.log(currentTracks)

              console.log(currentTracks.concat(newTracks).flat(Infinity))

              currentTracks.push(newTracks)
              console.log(currentTracks)

              // let combinedTracks = currentTracks.reduce((a, b) => a.concat(b), []);
                let combinedTracks = currentTracks.flat(Infinity);
              console.log(combinedTracks)

              this.setState({
                tracks: combinedTracks
              })
            });
        // })
      }
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
    // if (this.state.tracks.length > 0) {
    let playlist = this.state.tracks.map((track) => (
          <Track
            track_name={track.track_name}
            artist_name={track.artist_name}
            key={track.id}
          />
        ))
    
      // };
    

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
