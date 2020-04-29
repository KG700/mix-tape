import React from "react";
import { nominalTypeHack } from "prop-types";

class UserList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    const url = "/api/v1/users.json";
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error("Network response was not ok.")
      })
      .then(data => { this.setState({ users: data }) });
  }

  render() {
    const { users } = this.state;
    const allUsers = users.map((user) => (
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
              <li><input type="submit" value="Submit"></input></li>
            </ul>
          </form>   
        </div>
      </div>
    );
  }


}

export default UserList;
