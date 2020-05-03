import React from "react";
import Track from "./Track";

class PlaylistPreview extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      show : true
    }
  }

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

          <form onClick={this.props.generate_onClick}>
          <button type="button" onClick={this.props.handleShow}>Generate playlist</button> 
          </form>

          <button type="button" onClick={this.props.viewPlayer_onClick}>Go to playlist</button>
          <button type="button" onClick={this.props.generate_onClick}>Generate playlist</button>
        </div>
      </div>
    );
  }

}

export default PlaylistPreview;
