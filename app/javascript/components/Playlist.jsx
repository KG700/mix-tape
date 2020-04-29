import React from "react";

class Playlist extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tracks: []
    }
  }

  componentDidMount() {
    const url = "/api/v1/tracks.json";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Network response was not ok.")
      })
      .then(data => { this.setState({ tracks: data }) });
  }

  render() {
    const { tracks } = this.state;
    const allTracks = tracks.map((track) => (
      <li>
        {track.track_name}: {track.artist_name}
      </li>
    ));

    const playlist = {
      color: "black",
      border: "solid 4px red",
      borderRadius: "15px",
      backgroundColor: "white",
      padding: "10px",
      fontSize: "2rem"
    };

    return(
      <div>

      <h2 style={playlist}>Playlist</h2>

      <ul>{allTracks}</ul>

      </div>
    );
  }


}

export default Playlist;
