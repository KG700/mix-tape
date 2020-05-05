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
    const logoutButton = {
      backgroundColor: "#01dac5",
      borderRadius: "15px",
      boxShadow: "5px 5px #888888",
      padding: "8px",
      fontFamily: 'Audiowide, Verdana',
      fontSize: "1.5rem",
      fontWeight: 'Bold',
      color: "black",
      display: "block",
      marginLeft: "10px"
    };

    return (
      <div>
        <button onClick={this.logout}
          style={logoutButton}>
        LOGOUT
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
