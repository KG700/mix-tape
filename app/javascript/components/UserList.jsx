import React from "react";

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
          console.log(response)
          return response.json()
        }
        throw new Error("Network response was not ok.")
      })
      .then(data => { this.setState({ users: data }) });
  }

  render() {
    const { users } = this.state;
    const allUsers = users.map((user) => (
      <div>{user.username}</div>
    ));
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
        <div>
          {allUsers}
        </div>
      </div>
    );
  }


}

export default UserList;
