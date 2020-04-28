import React from "react";

class Nav extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const mynav = {
      color: "red",
      backgroundColor: "white",
      textAlign: "center",
      padding: "10px",
      fontSize: "4rem"
    };
    const myfont = {
      padding: "10px",
      textAlign: "center",
      fontSize: "1.5rem"
    }

    return (
      <div>
      <h1 style={mynav}>Welcome to MixTape!</h1>
      <p style={myfont}> Bringing people and music together</p>
      </div>
    );
  }
}

export default Nav;