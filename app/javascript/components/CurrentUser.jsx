import React from "react";

class CurrentUser extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const profilePicture = this.props.currentUser.image_url;
    const img = {
      borderRadius: '50%',
      height: "60px",
      width: "60px",
      border: "solid 2px black" 
    };

    return (
      
      <img src={profilePicture} style={img} alt="ProfilePicture"  />   
    );
  }
}

export default CurrentUser;
