import React from "react";
import CurrentUser from "./CurrentUser";
import LogOut from "./LogOut";
import Logo from "./Logo";
import './Nav.css';

class Nav extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    return (
      <div style = {{ display: "flex", flexDirection: "row", justifyContent: "flex-end" }}>
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
