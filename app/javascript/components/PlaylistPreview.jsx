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

    const container = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      minWidth: "300px",
      maxWidth: "600px"
    }

    const title = {
      fontFamily: 'Audiowide, Verdana',
      fontSize: "2rem",
      fontWeight: 'Bold',
      color: "black",
      display: 'block',
      marginBottom: "10px"
    };

    const listContainer = {
      backgroundColor: "black",
      borderRadius: "8px",
      padding: "10px"
    }

    const trackList = {
      height: "400px",
      overflow: "hidden",
      overflowY: "scroll",
      listStyle: "none",
      fontFamily: 'Audiowide, Verdana',
      fontSize: "1rem",
      color: "white"
    }

    const buttonsContainer = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: "20px"
    }

    const mixButton = {
      backgroundColor: "#01dac5",
      borderRadius: "15px",
      boxShadow: "5px 5px #888888",
      padding: "8px",
      fontFamily: 'Audiowide, Verdana',
      fontSize: "1.5rem",
      fontWeight: 'Bold',
      color: "black",
      display: "block"
    }

    const playButton = {
      backgroundColor: "#00a3c4",
      borderRadius: "15px",
      boxShadow: "5px 5px #888888",
      padding: "8px",
      fontFamily: 'Audiowide, Verdana',
      fontSize: "1.5rem",
      fontWeight: 'Bold',
      color: "black",
      display: "block",
      marginLeft: "10px"
    }

    return(

      <div style={container}>

        <h2 style={title}>PLAYLIST</h2>

        <div style={listContainer}>
          <ul style={trackList}>
            {renderPlaylist}
          </ul>
        </div>

        <div style={buttonsContainer}>
          <button onClick={this.props.shuffle_onClick} style={mixButton}>
            MIX
          </button>

          <form onClick={this.props.generate_onClick}>
            <button type="button" onClick={this.props.handleShow} style={playButton}>
              PLAY
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default PlaylistPreview;
