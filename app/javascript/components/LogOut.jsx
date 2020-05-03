import React from "react";
import { Redirect } from 'react-router-dom'

class LogOut extends React.Component {
  constructor(props) {
    super(props)
  }

  spotifyLogOut() {
    window.open('https://www.spotify.com/logout/')
  };

  redirectToSignin() {
    return <Redirect to='/signin' />
  };

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
          onClick={this.redirectToSignin()}
          style={buttons}>Log Out</button>
        </form>
      </div>
    );
  }
}

export default LogOut;
