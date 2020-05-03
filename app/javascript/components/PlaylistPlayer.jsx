import React from "react";
import ReactLoading from "react-loading";

class PlaylistPlayer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playlist_id: '',
      done: false
    }
    this.handlerViewPlayer = this.handlerViewPlayer.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
          .then(json => this.setState({ done: true }));
    }, 10000);
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
    let playlistRender = <iframe
                          src={track_url}
                          width="300"
                          height="380"
                          frameBorder="0"
                          allowtransparency="true"
                          allow="encrypted-media">
                          </iframe>
    return (
            <div>

              {!this.state.done ? (
                  <ReactLoading type={"bars"} color={"black"} />
              ) : (
                  <>
                  <button type="button" onClick={this.handlerViewPlayer}>Go to playlist</button>
                  {playlistRender}
                  </>
              )}
            
            </div>
    )
    
  }

}

export default PlaylistPlayer;
