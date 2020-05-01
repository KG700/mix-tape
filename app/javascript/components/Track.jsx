import React from "react";

class Track extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    return (
      <li>
        {this.props.track_name}: {this.props.artist_name}
      </li>
    );
  }
}

export default Track;
