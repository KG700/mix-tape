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
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "space-around"
    }

    const logoContainer = {
      display: "flex", 
      flexDirection: "row", 
      justifyContent: "space-around", 
      marginLeft: "auto", 
      marginRight: "auto"
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
    const button = {
      backgroundColor: "#01dac5",
      borderRadius: "15px",
      boxShadow: "5px 10px #888888",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "10px",
      fontFamily: 'Audiowide, Verdana',
      fontSize: "2rem",
      fontWeight: 'Bold',
      color: "black"
    };

    return (

      <div style={container}>
        <div style={logoContainer}> 
          <p style={logo}> MIX </p>
          <img src={LogoImg} style={img} alt="LogoPicture"  />
          <p style={logo}> TAPE </p>
        </div>
        <form action='/auth/spotify'>
          <button style={button}> SIGN IN WITH SPOTIFY </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
