import React from "react";
import LogoImg from '../images/logo-yellow-bold.png';

class Logo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const logo = {
      fontFamily: 'Audiowide, Verdana',
      fontSize: "1.8rem",
      fontWeight: 'Bold',
      color: "black",
      display: 'block',
      marginRight: 'auto'
    };

    const img = {
      height: "50px",
      width: "70px",
      marginRight: '8px'
    }

    return (
      <div style={logo}>
        <img src={LogoImg} style={img} alt="LogoPicture"  />
        MIX-TAPE
      </div>
    );
  }
}

export default Logo;