import React from "react";

class UserList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  render() {
    const friends = {
      color: "black",
      border: "solid 4px red",
      borderRadius: "15px",
      backgroundColor: "white",
      padding: "10px",
      fontSize: "2rem"
    };

    return(
      <div>
        <h2 style={friends}>Friends</h2>
      </div>
    );
  }


}

export default UserList;
