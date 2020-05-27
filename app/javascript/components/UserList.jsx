import React from "react";
import Checkbox from './Checkbox';
import Option from './Option';
import Group from './Group'

class UserList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      search: ''
    }
  }

  searchSpace(event) {
    let keyword = event.target.value;
    this.setState({search: keyword})
  }

  render() {

    const allUsers = this.props.allUsers.filter(users => {
      if (users.id !== this.props.currentUser.id) {
        return users
      }
    }).filter(users => {
      if (this.state.search == '') {
        return users
      }
      else if (users.username.toLowerCase().includes(this.state.search.toLowerCase()) && this.state.search !== '') {
        return users
      }
  }).map((user) => (

      // <Option
      //   id={user.id}
      //   name={user.username}
      //   image={user.image_url}
      // />

      <Checkbox
        id={user.id}
        name={user.username}
        checked={user.selected}
        onChange={this.props.checkboxFunction}
        key={user.id}
      />
    ));

    const container = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "flex-start",
      minWidth: "300px",
      maxWidth: "600px"
    }

    const title = {
      display: 'block',
      marginBottom: "10px",
      fontFamily: 'Audiowide, Verdana',
      fontSize: "2rem",
      fontWeight: 'Bold',
      color: "black"
    };

    const listContainer = {
      padding: "10px",
      backgroundColor: "black",
      borderRadius: "8px",
      marginBottom: "20px"
    }

    const placeHolder = {
      width: "90%",
      marginBottom: "10px",
      fontFamily: 'Audiowide, Verdana',
      fontSize: "1rem",
      letterSpacing: "0.1em",
      color: "black"
    }

    const usersList = {
      height: "200px",
      overflow: "hidden",
      overflowY: "scroll",
      listStyle: "none",
      fontFamily: 'Audiowide, Verdana',
      fontSize: "1rem",
      letterSpacing: "0.1em",
      color: "#ffaa01",
      marginLeft: "5px"
    }

    const groupContainer = {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: "10px",
      minWidth: "300px",
      maxWidth: "300px"
    }

    return(

      <>
      {this.props.showUsers &&
        <div style={container}>

          <h2 style={title}>FRIENDS</h2>

          <div style={listContainer}>
            <input type="text" placeholder="Search for friends" style={placeHolder} onChange={(event) => this.searchSpace(event)} />
            <form>
              <div style={usersList}>{allUsers}</div>
            </form>
          </div>

          <div style={groupContainer}>
            <Group
              selectedUsers = {this.props.selectedUsers}
            />
          </div>
        </div>
      }
      </>
    );
  }

}

export default UserList;
