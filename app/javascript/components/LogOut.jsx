import React from "react";

class LogOut extends React.Component {
  constructor(props) {
    super(props)
  }

  spotifyLogOut() {
    return window.open('https://www.spotify.com/logout/')
    // return (<button onClick={() => window.open('https://www.spotify.com/logout/')}></button>)
  };

  // redirectToSignin() {
  //   window.location.href="http://localhost:3000/signin";
  // };

  render() {
    const buttons = {
      color: "black",
      border: "solid 4px red",
      borderRadius: "15px",
      backgroundColor: "white",
      margin: "auto",
      display: "block",
      padding: "10px",
      fontSize: "2rem"
    };

    return (
      <div>
        <form>
          <button
          onClick={this.spotifyLogOut}
          style={buttons}>
            Log Out
          </button>
        </form>
      </div>
    );
  }
}

export default LogOut;
