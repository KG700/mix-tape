import React from "react";

class Track extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    let artistName = this.props.artist_name
    let trackName = this.props.track_name

    const trackStyle = {
      color: "#ffaa01",
      display: "inline-block",
      textTransform: "uppercase"
    }

    const artistStyle = {
      color: "#f9672b",
      display: "inline-block"
    }

    const dashStyle = {
      color: "#6416b9",
      display: "inline-block"
    }
    
    return (
      <li>
        <p style={trackStyle}>{trackName}</p> <p style={dashStyle}> ■ </p> <p style={artistStyle}>{artistName} </p>
      </li>
    );
  }
}

export default Track;
