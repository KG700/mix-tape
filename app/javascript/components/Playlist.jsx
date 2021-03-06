import React from "react";
import Track from "./Track";
import PlaylistPreview from "./PlaylistPreview";
import PlaylistPlayer from "./PlaylistPlayer";
import Group from "./Group";

class Playlist extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tracks: [],
      combinedPlaylistIds: [],
      playlist_id: '',
      showPreview: true,
      showPlayer: false,
      shuffleMode: false
    }
  this.createCombinedPlaylist = this.createCombinedPlaylist.bind(this);
  this.handlerGeneratePlaylist = this.handlerGeneratePlaylist.bind(this);
  this.handleShow = this.handleShow.bind(this);
  this.shuffleMode = this.shuffleMode.bind(this);
  this.handleBack = this.handleBack.bind(this);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    if (this.props.groupIds.length !== prevProps.groupIds.length) {
      // 1. first remove any tracks of users that aren't in the group anymore:
      if (this.props.groupIds.length < prevProps.groupIds.length) {
        let tracks = this.state.tracks.filter(track => this.props.groupIds.includes(track.user_id))
        return this.setState({
          tracks: tracks
        })
      } else {
      // 2. then find any users that have been added to the group:
      let newUser;
      if (this.props.groupIds.length > prevProps.groupIds.length) {
        this.props.groupIds.forEach(user => {
          if (!prevProps.groupIds.includes(user)) {
            newUser = user
          }
        })
      }

      // 3. then do an api call for any new members of the group:
      if (this.props.groupIds.length == 0) {
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
    this.state.shuffleMode = false
    return newPlaylist
  }

  shuffleMode() {
    this.setState({shuffleMode: true})
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
    const data = { playlist: this.state.combinedPlaylistIds};
    const csrfToken = document.querySelector("[name='csrf-token']").content;

    fetch("/api/v1/playlists.json", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Network response was not ok.")
    })
    .then(data => {
      this.setState({
        playlist_id: data.player_id
      })
    })
  }

  handleShow() {
    this.setState({
      showPreview: false,
      showPlayer: true
    });
    this.props.toggleUserList();
  }

  handleBack(){
    this.setState({
      showPreview: true,
      showPlayer: false
    });
    this.props.toggleUserList();
  }

  render() {

    return(
      <div>

        {this.state.showPreview &&
          <PlaylistPreview
            playlist={this.createCombinedPlaylist()}
            shuffle_onClick={this.shuffleMode}
            generate_onClick={this.handlerGeneratePlaylist}
            viewPlayer_onClick={this.handlerViewPlayer}
            handleShow={this.handleShow}
          />
        }

        {this.state.showPlayer &&
          <PlaylistPlayer
            playlist_id={this.state.playlist_id}
            handleBack={this.handleBack}
            selectedUsers = {this.props.group}
          />
        }



      </div>

    );
  }

}

export default Playlist;
