import React from "react";
import './SignIn.css';

class SignIn extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const button = {
      backgroundColor: "#01dac5",
      borderRadius: "15px",
      boxShadow: "5px 10px #888888",
      marginTop: "50%",
      display: "block",
      padding: "10px", 
      fontFamily: 'Audiowide, Verdana',
      fontSize: "2rem",
      fontWeight: 'Bold',
      color: "black"
    };

    return (
      
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>

        <form action='/auth/spotify'>
          <button style={button}> SIGN IN WITH SPOTIFY </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
