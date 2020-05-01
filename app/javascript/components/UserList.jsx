import React from "react";
import { nominalTypeHack } from "prop-types";
import Checkbox from './Checkbox';

class UserList extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    const allUsers = this.props.allUsers.map((user) => (
      <Checkbox
        id={user.id}
        name={user.username}
        checked={user.selected}
        onChange={this.props.checkboxFunction}
        key={user.id}
      />
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
            {allUsers}
          </form>
        </div>
      </div>
    );
  }


}

export default UserList;
