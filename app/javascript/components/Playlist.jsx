import React from "react";
import Track from "./Track";

class Playlist extends React.Component {

  constructor(props){
    super(props);
  }

  render() {

    const playlist = this.props.tracks.map((track) => (
          <Track
            track_name={track.track_name}
            artist_name={track.artist_name}
            key={track.id}
          />
        ));

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
        <ul>
          {playlist}
        </ul>
      </div>
    );
  }


}

export default Playlist;
