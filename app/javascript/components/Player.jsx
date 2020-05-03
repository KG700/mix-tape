import React from "react";

class Player extends React.Component {
  constructor(props){
    super(props)
  }



render() {
  let track_id = "4AMxwqRTwJMhDBwzlhc3XI"
  let track_url ="https://open.spotify.com/embed/playlist/" + track_id

  return(
    <iframe
      src={track_url}
      width="300"
      height="380"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media">
    </iframe>

  )
}

}

export default Player;
