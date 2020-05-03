import React from "react";
import ReactLoading from "react-loading";

class PlaylistPlayer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      playlist_id: '',
      done: false,
      show: true
    }
    this.handlerViewPlayer = this.handlerViewPlayer.bind(this);
    this.handleShow = this.handleShow.bind(this);
    // this.handleBack = this.handleBack.bind(this);
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
          .then(json => this.setState({ done: true }));
    }, 3500);
    this.handlerViewPlayer();
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

  handleShow() {
    this.setState({
      show: false,
    });
  }

  // handleBack() {
  //   this.setState({
  //     done: false,
  //     show: true
  //   });
  // }

  render() {
    let track_id = this.state.playlist_id.player_id
    let track_url ="https://open.spotify.com/embed/playlist/" + track_id
    return (
            <div>

              {!this.state.done ? (
                  <ReactLoading type={"bars"} color={"black"} />
              ) : (
                <>
                  { this.state.show ? 
                  <>
                  <p>Your playlist has saved to Spotify</p>
                  <form onClick={this.handleShow}>
                  <button type="button" onClick={this.handlerViewPlayer}>Play your Music</button>
                  </form>
                  </>
                  : <>
                    <iframe
                          src={track_url}
                          width="300"
                          height="380"
                          frameBorder="0"
                          allowtransparency="true"
                          allow="encrypted-media">
                          </iframe>
                  <button>Generate another playlist!</button>
                  </>
                  }
                </>
              )}
          
            </div>
    )
    
  }

}

export default PlaylistPlayer;
