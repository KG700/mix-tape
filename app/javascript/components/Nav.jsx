import React from "react";
import CurrentUser from "./CurrentUser";
import LogOut from "./LogOut";

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
    };

    return (
      <div>
        <CurrentUser
          currentUser={this.props.currentUser}
        />
        <LogOut />
      </div>
    );
  }
}

export default Nav;
