import React from "react";

class Playlist extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      tracks: []
    }
  }

  componentDidMount() {
    const url = "https://api.spotify.com/v1/me/top/tracks";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(response => this.setState({ tracks: response }));
  }

  render() {

    return(
      <div>

        <h2>Playlist</h2>

        <form action='' method='get'>
          <button>Get Top 25 Tracks</button>
        </form>

      </div>
    );
  }


}

export default Playlist;
