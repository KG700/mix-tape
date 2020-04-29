import React from "react";

class Playlist extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tracks: []
    }
  }

  render() {

    return(
      <div>

        <h2>Playlist</h2>

        <form action='' method='get'>
          <button>Get Top 25 Tracks</button>
        </form>
        <p>

        </p>

      </div>
    );
  }


}

export default Playlist;
