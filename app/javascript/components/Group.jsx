import React from "react";

class Group extends React.Component {
  constructor(props){
    super(props)
  }


  render() {

    const group = this.props.selectedUsers.map(user => {
      return (
        <li>
          <img src={user.image_url} alt="ProfilePicture" height="42" width="42" />
          {user.username}
        </li>
      )
    })

    return (

      <ul>
        {group}
      </ul>

    )
  }

}

export default Group;
