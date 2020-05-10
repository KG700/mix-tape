import React from "react";
import './SignIn.css';
import LogoImg from '../images/logo-bold.png';

class SignIn extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    const container = {
      display: "flex", 
      flexDirection: "row", 
      justifyContent: "space-around", 
      marginLeft: "auto", 
      marginRight: "auto",
      marginTop: "80px"
    }

    const containerColumn = {
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "space-around"
    }

    const logoContainer = {
      display: "flex", 
      flexDirection: "row", 
      justifyContent: "space-around", 
      marginLeft: "auto", 
      marginRight: "auto",
      marginTop: "50px"
    };

    const logo = {
      fontFamily: 'Audiowide, Verdana',
      fontSize: "8rem",
      fontWeight: 'Bold',
      color: "black",
      display: 'block'
    };

    const img = {
      height: "100px",
      width: "150px",
      marginTop: 'auto',
      marginBottom: 'auto'
    }

    const text = {
      fontFamily: 'Audiowide, Verdana',
      fontSize: "1.5rem",
      textAlign: "center",
      color: "black",
      listStyle: "none",
      textTransform: "uppercase",
      letterSpacing: "0.1em"
    }

    const signinButton = {
      backgroundColor: "#01dac5",
      borderRadius: "15px",
      boxShadow: "5px 10px #888888",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "20px",
      padding: "10px",
      fontFamily: 'Audiowide, Verdana',
      fontSize: "2rem",
      fontWeight: 'Bold',
      color: "black"
    };

    return (
    <div style={container}>
      <div style={containerColumn}>
        <div style={logoContainer}> 
          <p style={logo}> MIX </p>
          <img src={LogoImg} style={img} alt="LogoPicture"  />
          <p style={logo}> TAPE </p>
        </div>
        <ul style={text}>
          <li>Select friends to share music with</li>
          <li>Mix until you are happy with the playlist</li>
          <li>Press Play to save and listen</li>
        </ul>
        <form action='/auth/spotify' className="signinButton">
          <button id="signinButton" style={signinButton} className="signinButton"> SIGN IN WITH SPOTIFY </button>
        </form>
      </div>
    </div>
    );
  }
}

export default SignIn;
x