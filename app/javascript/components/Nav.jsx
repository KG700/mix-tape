import React from "react";
import CurrentUser from "./CurrentUser";
import LogOut from "./LogOut";
import Logo from "./Logo";

class Nav extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    const container = {
      display: "flex", 
      flexDirection: "row", 
      justifyContent: "flex-end"
    }

    return (
      <div style = {container}>
        <Logo />
        <CurrentUser
          currentUser={this.props.currentUser}
        />
        <LogOut />
      </div>
    );
  }
}

export default Nav;
