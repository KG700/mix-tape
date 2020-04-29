import React from "react";

class SignIn extends React.Component {
  constructor(props){
    super(props)
  }

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
        <form action='/auth/spotify'>
          <button style={buttons}>Sign in with Spotify</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
