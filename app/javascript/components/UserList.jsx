import React from "react";
import { nominalTypeHack } from "prop-types";

class UserList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    // const { users } = this.props.;
    const allUsers = this.props.allUsers.map((user) => (
      <li>
        <label>
          <input type='checkbox' name={user.username} />
          {user.username}
        </label>
      </li>
    ));

    const friends = {
      color: "black",
      border: "solid 4px red",
      borderRadius: "15px",
      backgroundColor: "white",
      padding: "10px",
      fontSize: "2rem"
    };

    const friendList = {
      listStyleType: "none"
    };

    return(
      <div>
        <h2 style={friends}>Friends</h2>
        <div>
          <form>
            <ul style={friendList}>
              {allUsers}
              <li><input type="submit" value="Generate Playlist"></input></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }


}

export default UserList;
