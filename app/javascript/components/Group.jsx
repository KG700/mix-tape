import React from "react";
import Default from '../../assets/images/default.png';

class Group extends React.Component {
  constructor(props){
    super(props);
    this.defaultPic = this.defaultPic.bind(this)
  }

  defaultPic(user) {
    if (user.image_url === 'default') {
      return Default
    } else {
      return user.image_url
    };
  }

  render() {
    
    const group = this.props.selectedUsers.map(user => {
      const profilePic = this.defaultPic(user);
      return (
        <li>
          <img src={profilePic} alt="ProfilePicture" height="42" width="42" />
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
