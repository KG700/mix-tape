import React from "react";
import Track from "./Track";

class PlaylistPreview extends React.Component {

  constructor(props){
    super(props);
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (this.props.group !== prevProps.group) {
  //
  //     // 1. first remove any tracks of users that aren't in the group anymore:
  //     if (this.props.group.length < prevProps.group.length) {
  //       let tracks = this.state.tracks.filter(track => this.props.group.includes(track.user_id))
  //       return this.setState({
  //         tracks: tracks
  //       })
  //     } else {
  //     // 2. then find any users that have been added to the group:
  //     let newUser;
  //     if (this.props.group.length > prevProps.group.length) {
  //       this.props.group.forEach(user => {
  //         if (!prevProps.group.includes(user)) {
  //           newUser = user
  //         }
  //       })
  //     }
  //
  //     // 3. then do an api call for any new members of the group:
  //     if (this.props.group.length == 0) {
  //       this.setState({
  //         tracks: [],
  //       })
  //     } else {
  //         const url = `/api/v1/users/${newUser}/tracks`;
  //         fetch(url)
  //           .then(response => {
  //             if (response.ok) {
  //               return response.json()
  //             }
  //             throw new Error("Network response was not ok.")
  //           })
  //           .then(data => {
  //             let newTracks = data.map(track => {
  //               track['user_id'] = newUser
  //               return track
  //             })
  //
  //             let currentTracks = this.state.tracks
  //             currentTracks.push(newTracks)
  //             let combinedTracks = currentTracks.flat(Infinity);
  //
  //             this.setState({
  //               tracks: combinedTracks
  //             })
  //           });
  //     }
  //   }
  //   }
  // }

  // createCombinedPlaylist() {
  //   let newPlaylist = [...this.state.tracks]
  //   newPlaylist = this.shuffle(newPlaylist)
  //   newPlaylist = newPlaylist.slice(0,25)
  //   this.state.combinedPlaylistIds = []
  //   newPlaylist.forEach(track => {
  //     this.state.combinedPlaylistIds.push(track.spotify_track_id)
  //   })
  //   return newPlaylist
  // }

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

  // handlerGeneratePlaylist() {
  //   const data = { playlist: this.state.combinedPlaylistIds};
  //   const csrfToken = document.querySelector("[name='csrf-token']").content;
  //
  //   fetch("/api/v1/playlists.json", {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'X-CSRF-Token': csrfToken
  //     },
  //     body: JSON.stringify(data),
  //   }).then(
  //     fetch("/api/v1/playlists.json")
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json()
  //       }
  //       throw new Error("Can't find player id")
  //     })
  //     .then(data => {
  //       this.setState({
  //         playlist_id: data
  //       })
  //     })
  //   )
  // }

  render() {
    let renderPlaylist = this.props.playlist.map((track) => (
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

          <button onClick={this.props.shuffle_onClick}>Shuffle</button>
          <button onClick={this.props.generate_onClick}>Generate playlist</button>
          <button onClick={this.props.viewPlayer_onClick}>Go to playlist</button>
        </div>
      </div>
    );
  }

}

export default PlaylistPreview;
