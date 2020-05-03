import React from "react";

class PlaylistPlayer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playlist_id: ''
    }
    this.handlerViewPlayer = this.handlerViewPlayer.bind(this);
  }

  handlerViewPlayer() {
    fetch("/api/v1/playlists.json")
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error("Can't find player id")
    })
    .then(data => {
      this.setState({
        playlist_id: data
      })
    })
  }

  render() {
    let track_id = this.state.playlist_id.player_id
    let track_url ="https://open.spotify.com/embed/playlist/" + track_id

    return(
      <div>
      <button type="button" onClick={this.handlerViewPlayer}>Go to playlist</button>
      <iframe
        src={track_url}
        width="300"
        height="380"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media">
      </iframe>
    </div>
    )
    
  }

}

export default PlaylistPlayer;
