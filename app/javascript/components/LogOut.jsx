import React from "react";
import SignIn from "./SignIn";

class LogOut extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logoutState: false,
    };
  }

  // spotifyLogOut() {
  //   return window.open('https://www.spotify.com/logout/')
  //   // return (<button onClick={() => window.open('https://www.spotify.com/logout/')}></button>)
  // };

  redirectToSignin() {
    window.location.href="http://localhost:3000/signin";
    this.setState({
      logoutState: true,
    })
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
        <button onClick={this.redirectToSignin}
          style={buttons}>
        Logout
        </button>
        {this.state.logoutState ?
          <SignIn /> :
          null
        }
      </div>
    );
  }
}

export default LogOut;
