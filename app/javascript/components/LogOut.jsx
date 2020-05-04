import React from "react";
import SignIn from "./SignIn";

class LogOut extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      logoutState: false,
    };
  }

  logout() {
    window.open('https://www.spotify.com/logout/', 'Spotify Logout', 'height=400, width=400, left=500, top=250')
    window.location.pathname="/logout";
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
        <button onClick={this.logout}
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
