import React from "react";
import ReactLoading from "react-loading";
import Group from "./Group";

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

    const container = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start"
    }

    const groupContainer = {
      display: "flex", 
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: "20px"
    }

    const player = {
      backgroundColor: "black",
      borderRadius: "8px",
      padding: "10px"
    }

    const mixAgainButton = {
      backgroundColor: "#01dac5",
      borderRadius: "15px",
      boxShadow: "5px 5px #888888",
      padding: "8px",
      fontFamily: 'Audiowide, Verdana',
      fontSize: "1.5rem",
      fontWeight: 'Bold',
      color: "black",
      display: "block",
      marginTop: "20px"
    }

    return (

      <div style={container}>
        {!this.state.done ? (
        <ReactLoading type={"bars"} color={"black"} />
        ) : (
        <>
        
        <div style={groupContainer}>
          <Group
            selectedUsers = {this.props.selectedUsers}
          />
        </div>
        
        <iframe style={player}
          src={track_url}
          width="400"
          height="400"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media">
        </iframe>
        
        <button onClick={this.props.handleBack} style={mixAgainButton}>
          MIX AGAIN
        </button>
        </>
        )}
      </div>
    )
  }

}

export default PlaylistPlayer;
