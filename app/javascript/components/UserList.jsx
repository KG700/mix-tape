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
      justifyContent: "flex-start"
    }

    const title = {
      fontFamily: 'Audiowide, Verdana',
      fontSize: "2rem",
      fontWeight: 'Bold',
      color: "black",
      display: 'block'
    };

    const friendList = {
      listStyleType: "none"
    };

    return(

      <>
      {this.props.showUsers &&
        <div style={container}>
          <h2 style={title}>FRIENDS</h2>
          <div>
            <input type="text" placeholder="Search for friends" onChange={(event) => this.searchSpace(event)} />
            <form>
              {allUsers}
            </form>

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
