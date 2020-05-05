import React from "react";
import Default from '../../assets/images/default-profile.png';

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

    const container = {
      display: "flex", 
      flexDirection: "row", 
      flexWrap: "wrap", 
      justifyContent: "space-around",
      marginTop: "20px"
    }

    const groupImg = {
      borderRadius: '50%',
      height: "60px",
      width: "60px",
      border: "solid 2px black",
      marginLeft: "5px",
      marginRight: "5px"
    };

    const group = this.props.selectedUsers.map(user => {
      const profilePic = this.defaultPic(user);
      return (
        <img src={profilePic} alt="ProfilePicture" style={groupImg} />
      )
    })

    return (

      <div style={container}>
        {group}
      </div>

    )
  }

}

export default Group;
