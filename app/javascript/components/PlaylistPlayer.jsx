import React from "react";
import ReactLoading from "react-loading";

class PlaylistPlayer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      done: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
          .then(json => this.setState({ done: true }));
    }, 3000);
  }

  render() {
    let track_id = this.props.playlist_id
    let track_url ="https://open.spotify.com/embed/playlist/" + track_id
    return (
            <div>

              {!this.state.done ? (
                  <ReactLoading type={"bars"} color={"black"} />
              ) : (
                <>
                  <iframe
                    src={track_url}
                    width="400"
                    height="480"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media">
                  </iframe>
                  <button onClick={this.props.handleBack}>Generate another playlist!</button>
                </>
              )}

            </div>
    )
  }

}

export default PlaylistPlayer;
