import React from "react";

class Playlist extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tracks: []
    }
  }

  render() {
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

      </div>
    );
  }


}

export default Playlist;
